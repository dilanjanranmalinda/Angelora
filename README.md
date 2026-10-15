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
- Static site generation: every route is prerendered to real HTML at build time
  (see "Static generation & SEO" below)

## Getting started

Requirements: Node 20.19+ or 22.12+.

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck + client build + SSR bundle + prerender all routes
npm run preview    # serve the production build
npm run lint       # eslint
npm test           # deterministic-logic verification
```

`npm run build` performs four steps: `tsc -b` (typecheck), `vite build`
(client bundle), `vite build --ssr` (server bundle), then
`node scripts/prerender.mjs`, which writes a static HTML file for every route
plus `dist/sitemap.xml`.

## Static generation & SEO

The client is a React SPA, but crawlers and AdSense need real HTML, so the build
prerenders every route with `react-dom/server` and `StaticRouter`:

- `src/routes.tsx` is the single source of truth for routes, shared by the client
  (`App.tsx`) and the prerenderer (`src/entry-server.tsx`).
- `src/AppShell.tsx` is the shared page chrome (Navbar + Footer).
- `src/seo/routeMeta.ts` computes the title/description for every URL and lists
  the routes to prerender (`getPrerenderRoutes`).
- `scripts/prerender.mjs` renders each route to `dist/<path>/index.html`, injects
  per-page `<title>`, description, canonical and Open Graph tags into the built
  `index.html`, and generates `dist/sitemap.xml`.

On Vercel the filesystem takes precedence over `rewrites`, so these static files
are served directly and the `/(.*) → /index.html` rewrite only handles unknown
paths (SPA fallback).

The Guides & Journal (`/blog`) is the site's original long-form content, written
as structured data in `src/data/blog.ts` and rendered by `src/pages/Blog.tsx` and
`src/pages/BlogPost.tsx`.

## Configuration

The production URL, contact email and AdSense client are configured directly in
`src/config.ts` — no environment variables are required to build or deploy. A
committed `.env` is provided only for convenience and can be overridden later;
Vercel ignores committed `.env` files, so anything critical lives in code here.

To change the live domain later, update the URL in `.env`
(`VITE_SITE_URL`), the exposed URLs in `index.html`, and `public/robots.txt`.
The sitemap is generated at build time — no manual editing needed.

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
  App.tsx          Router + consent bootstrap (client)
  AppShell.tsx     Shared Navbar + Footer chrome (client and prerenderer)
  routes.tsx       Single source of truth for routes (client and prerenderer)
  entry-server.tsx renderToString() entry used by the prerender step
  components/     UI (Hero, LoadingExperience, DailyDashboard, detail cards,
                  ShareButton/Modal/Card, FAQ, Footer, advertising/AdSlot, ...)
  data/           content sets (numbers, colors, mirrorTimes, energies,
                  blog articles, ...)
  seo/            route metadata + prerender route list
  utils/          numerology, dailySeed, dailyGenerator, dateUtils, shareUtils, seo
  hooks/          useDailyExperience, useLocalProfile
  pages/          Home, informational/SEO pages, blog (Blog, BlogPost)
  types/          shared domain types
public/           robots.txt, ads.txt, favicon, images/og.png
scripts/
  prerender.mjs    writes static HTML for every route + sitemap.xml
```

## Brand & legal notes

- The MVP uses a Vercel-provided domain. Before final launch, verify the .com
  domain, social handles and trademark availability, then update
  `VITE_SITE_URL`, `public/robots.txt` and `public/sitemap.xml`.
- All spiritual/numerology content is framed as entertainment and reflection —
  never as science or prediction.
- Advertising is intentionally decoupled via `AdSlot`; the main experience never
  trades place with ads.