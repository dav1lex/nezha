# Deploy

## Static site → Cloudflare Pages

```sh
npm install
npm run build
npx wrangler pages deploy out --project-name=nezha --commit-dirty=true
```

Then in the Cloudflare dashboard:
- Pages → `nezha` → Custom domains → add `pearlmachine.com` and `www.pearlmachine.com`.
- SSL/TLS → set mode to **Full (strict)**.

That's it. `out/_redirects` (root → /en) and `out/_headers` (cache + security headers) get picked up automatically by Pages.

## Build-time env vars (Next.js)

Create `.env.production` (gitignored) before `npm run build`:

```
NEXT_PUBLIC_CF_BEACON_TOKEN=<token from Cloudflare → Web Analytics → Add site>
```

`NEXT_PUBLIC_*` vars are inlined at build time and shipped to the browser.
`NEXT_PUBLIC_CF_BEACON_TOKEN` empty = no analytics script rendered. Safe to omit.

## End-to-end test

1. Deploy Pages → `https://pearlmachine.com` serves the site.
2. `https://pearlmachine.com/sitemap.xml` and `/robots.txt` resolve.
3. All three locales work: `/en`, `/ar`, `/tr`.
4. Product detail pages render images and have a working mailto quote link.
