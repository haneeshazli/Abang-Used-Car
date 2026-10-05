# Abang Usedcar KL — Landing Page

Landing page for Abang Usedcar (kereta terpakai, loan mudah lulus). It's built from the Claude Design handoff in `design-handoff/` and uses the Utopia Lead-Gen design system.

- **Stack:** React 18 and the design-system bundle (`src/ds/`). The page is prerendered to static HTML at build time, then hydrated so the stock filter, FAQ and menu work.
- **Content:** edit `src/config.js` for the phone number (it updates every WhatsApp link), price mode, stock list, gallery and hero image.
- **Photos:** put files in `public/uploads/` and point `heroImage` or a car's `img` at them. While a value is empty, a dashed placeholder box shows instead.

## Develop

```bash
npm install
npm run build     # outputs dist/
npm run preview   # serves dist/ locally
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and then:

- **GitHub Pages:** publishes `dist/` to the `gh-pages` branch. One-time setup: Settings → Pages → Source "Deploy from a branch" → `gh-pages` / root. The site then lives at https://haneeshazli.github.io/Abang-Used-Car/
- **Cloudflare Pages:** deploys to the `abangusedcar-kl` project. This step only runs once the repo has the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets (Settings → Secrets and variables → Actions). Create the token with the "Cloudflare Pages: Edit" permission.

To deploy manually instead: `npm run build && npx wrangler pages deploy dist --project-name abangusedcar-kl`

## ⚠️ Placeholder content to replace

These came from the design mockup and are made up: the phone number `6012-345 6789`, the showroom address, the opening hours, the 4.9 rating, the customer reviews, the car stock and prices, and "from RM299/month". Also confirm these claims are true before going live: the 150-point inspection, the warranty, the RM0 deposit, and that blacklisted/CTOS buyers can apply.
