# Sparkle Cleaners website

Domestic and commercial cleaning in Leeds. Vite + React + TypeScript + Tailwind + Framer Motion.

The home page is a scroll story: a grubby room is wiped clean as you scroll, then the same for an office.

```bash
npm install
npm run dev        # local development
npm run build      # production build into dist/ (also writes a page per route, sitemap.xml and robots.txt)
npm run lint && npm run typecheck
```

## Content

- Business details (phone, email, area, form endpoint): `src/config/site.ts`
- Services, prices, checklists, steps and service-page copy: `src/data/content.ts`
- Page titles and descriptions: `src/data/seo.json` (every route must have an entry or the build fails)
- Story chapters and wipe timings: `src/pages/Home.tsx`
- The illustrated rooms: `src/components/scene/Scene.tsx`

## Before launch

- Replace the phone number, email address and prices in `site.ts` / `content.ts` (carried over from the first placeholder site).
- Add real customer reviews when there are some (none are shown until then).
- Set `formEndpoint` in `site.ts` to a Formspree or Web3Forms URL so enquiries are emailed to the business. Until then the quote form opens the visitor's email app.

## Deployment

Pushes to `main` build and publish to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
