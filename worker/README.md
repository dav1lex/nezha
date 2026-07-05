# nezha-contact Worker

Standalone Cloudflare Worker for the Pearl Machine contact form.

Receives `POST /contact` from the static site, sends two emails via the
Cloudflare Email Sending binding (`EMAIL`):

1. **Sales notification** → `CONTACT_EMAIL` (default `sales@pearlmachine.com`).
2. **Auto-responder** → the form submitter's email, fire-and-forget.

## One-time setup

1. **Onboard the domain** for Email Sending:
   [Cloudflare dashboard → Email Service → Email Sending → Onboard Domain](https://dash.cloudflare.com/?to=/:account/email-service/sending).
   Select `pearlmachine.com`. DNS records (SPF, DKIM, DMARC, MX for bounces) get added automatically.

2. **Add the contact subdomain** (`contact.pearlmachine.com`) to Cloudflare DNS so
   `wrangler deploy` can attach the route. Cloudflare usually adds it for you
   when you click "Add custom domain" on the Worker settings page, but it must
   exist as a proxied (`orange-cloud`) record.

## Deploy

```sh
cd worker
npm install
wrangler deploy
```

The first deploy will fail with a "route not found" error if the
`contact.pearlmachine.com` DNS record isn't yet orange-clouded in Cloudflare.
Fix that in the dashboard, then re-run.

## Optional secrets

```sh
wrangler secret put CONTACT_EMAIL   # default: sales@pearlmachine.com
wrangler secret put FROM_EMAIL      # default: Pearl Machine Website <noreply@pearlmachine.com>
```

## Test locally

```sh
wrangler dev
# in another shell, send a test request
curl -X POST http://localhost:8787/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"you@example.com","message":"Hello"}'
```

In local dev, `env.EMAIL.send()` is intercepted by `wrangler dev` — emails are
written to a local file under `.wrangler/state/` instead of being sent.

## Honeypot

The frontend still includes a hidden `company_tax_id` field. If it's filled,
the Worker returns `{ success: true }` and sends nothing. Bots think it
worked.

## Add Turnstile / rate limiting

Add when: spam starts, or you need to lock the endpoint down further.
Pattern: Turnstile widget in the form, verify token in the Worker before
sending.
