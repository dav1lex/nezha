# Deploy

## Static site → Cloudflare Pages

```sh
npm install
npm run build
npx wrangler pages deploy out --project-name=nezha
```

Then in the Cloudflare dashboard:
- Pages → `nezha` → Custom domains → add `pearlmachine.com` and `www.pearlmachine.com`.
- SSL/TLS → set mode to **Full (strict)**.

That's it. `out/_redirects` (root → /en) and `out/_headers` (cache + security headers) get picked up automatically by Pages.

## Contact Worker → Cloudflare Workers

**One-time:**
1. Onboard `pearlmachine.com` for Email Sending: dashboard → Email Service → Email Sending → Onboard Domain. (Adds SPF/DKIM/DMARC/MX records automatically.)
2. Add `contact.pearlmachine.com` as a proxied (`orange-cloud`) A/AAAA record in Cloudflare DNS — or just let `wrangler deploy` add the custom domain for you on first deploy.

**Deploy:**
```sh
cd worker
npm install
npx wrangler deploy
```

First deploy attaches the route to `contact.pearlmachine.com`. Subsequent deploys just update the Worker.

**Optional secrets:**
```sh
cd worker
npx wrangler secret put CONTACT_EMAIL   # default: sales@pearlmachine.com
npx wrangler secret put FROM_EMAIL      # default: Pearl Machine Website <noreply@pearlmachine.com>
```

## Build-time env vars (Next.js)

Create `.env.production` (gitignored) before `npm run build`:

```
NEXT_PUBLIC_CONTACT_API_URL=https://contact.pearlmachine.com/contact
NEXT_PUBLIC_CF_BEACON_TOKEN=<token from Cloudflare → Web Analytics → Add site>
```

`NEXT_PUBLIC_*` vars are inlined at build time and shipped to the browser.
`NEXT_PUBLIC_CF_BEACON_TOKEN` empty = no analytics script rendered. Safe to omit.

## End-to-end test

1. Deploy Pages → `https://pearlmachine.com` serves the site.
2. Deploy Worker → `POST https://contact.pearlmachine.com/contact` accepts JSON.
3. Submit the contact form. Sales inbox + auto-reply should both arrive.
4. Check `https://pearlmachine.com/sitemap.xml` and `/robots.txt`.
