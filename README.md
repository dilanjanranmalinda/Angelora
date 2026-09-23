# ✨ Angelora

> Your day. Your signs. Your moment.

Angelora is a premium, global, mobile-first daily experience platform. Enter your
birthday, get a personalized "YOUR DAY" — your personal number, daily color,
mirror moment, energy, focus, style idea and a gentle message. All generated
deterministically in the browser from your birthday + today's local date.

**No account. No backend. No tracking.** Just a beautiful little moment to
reflect on your day.

---

## Tech

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (design system in `src/index.css`)
- Framer Motion (animations, respects `prefers-reduced-motion`)
- html2canvas (share-card PNG export, lazy-loaded)
- react-router-dom (clean SEO URLs)
- localStorage only for the optional profile
- Vercel-ready (`vercel.json` provides SPA rewrites)

## Getting started

Requirements: Node 20.19+ or 22.12+.

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck + production build
npm run preview    # serve the production build
npm run lint       # eslint
npm test           # deterministic-logic verification
```

## Configuration

The production URL is used for canonical links, Open Graph and structured data.
It is read from `VITE_SITE_URL` (see `.env.example`). If unset, the app falls
back to `window.location.origin`.

```bash
VITE_SITE_URL=https://angelora.vercel.app
```

## Deterministic engine

Same birthday + same date → same result. The seed is derived from the birthday
digits and the calendar date (`src/utils/dailySeed.ts`); every feature (color,
moment, energy, focus, messages, love, career, growth, affirmation) picks a
stable index into its data array. Tomorrow = a new date = a new experience.

Core flow lives in `src/utils/dailyGenerator.ts` via `generateDailyExperience()`.
The calculation layer is fully separated from the UI so a future backend/API can
replace the local feed without rewriting components.

## Structure

```
src/
  components/     UI (Hero, LoadingExperience, DailyDashboard, detail cards,
                  ShareButton/Modal/Card, FAQ, Footer, advertising/AdSlot, ...)
  data/           content sets (numbers, colors, mirrorTimes, energies, ...)
  utils/          numerology, dailySeed, dailyGenerator, dateUtils, shareUtils, seo
  hooks/          useDailyExperience, useLocalProfile
  pages/          Home + informational/SEO pages
  types/          shared domain types
public/
  robots.txt, sitemap.xml, images/og.png (social preview card), favicon
```

## Brand & legal notes

- The MVP uses a Vercel-provided domain. Before final launch, verify the .com
  domain, social handles and trademark availability, then update
  `VITE_SITE_URL`, `public/robots.txt` and `public/sitemap.xml`.
- All spiritual/numerology content is framed as entertainment and reflection —
  never as science or prediction.
- Advertising is intentionally decoupled via `AdSlot`; the main experience never
  trades place with ads.