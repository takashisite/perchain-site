# Perchain Site

Static site for Perchain product, support, and privacy pages.

Production URLs:

- `https://perchain.mizuno.app/`
- `https://perchain.mizuno.app/support/`
- `https://perchain.mizuno.app/privacy/`

## Local preview

```bash
python3 -m http.server 4173
```

Then open:

- `http://localhost:4173/`
- `http://localhost:4173/support/`
- `http://localhost:4173/privacy/`

## Cloudflare Pages

- Project: `perchain-site`
- Framework preset: `None`
- Build command: none
- Build output directory: `/`
- Custom domain: `perchain.mizuno.app`
- Support contact: `perchain@mizuno.app`

## Deploy

This project currently uses Wrangler direct deploy:

```bash
npx wrangler pages deploy . --project-name perchain-site --branch main
```

The Cloudflare Pages project is not currently connected to a Git provider.

## Cloudflare Email Routing

Recommended setup:

- Create an Email Routing address for `perchain@mizuno.app`
- Forward it to the real support inbox
- Keep the public address stable even if the destination inbox changes later

## App Store Connect URLs

- Support URL: `https://perchain.mizuno.app/support/`
- Privacy Policy URL: `https://perchain.mizuno.app/privacy/`

## Notes

- Perchain uses manually entered exchange rates in the current release.
- Avoid claims that imply live exchange-rate retrieval or financial, investment, accounting, or tax advice.
