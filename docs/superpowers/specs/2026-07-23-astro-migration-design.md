# Astro Migration — AquaSecure Marketing Site

**Date:** 2026-07-23
**Goal:** Convert the React + Vite SPA (public marketing site) to Astro for SEO, with
zero visual/behavioral change. Every route must ship crawlable static HTML with proper
`<head>` meta, while keeping React interactivity, MUI, framer-motion, Tailwind theme,
and the existing gh-pages custom-domain deploy.

## Why Astro (SSG)

The site is public content (Home, Products, Solutions, Platform, Pricing, About, Contact)
— no auth, no per-user data. Today it is a client-rendered SPA: crawlers receive an empty
`<div id="root">` shell and per-page meta is injected client-side via `react-helmet-async`.
That is weak for SEO.

Astro Static Site Generation pre-renders every route to real HTML at build time, with meta
in the `<head>`, served as static files (keeps `gh-pages`). React components run as
**islands** (server-rendered to HTML + hydrated in the browser) so interactivity is
preserved. SSR/Node hosting was rejected — unnecessary for static content and it would
break the static gh-pages deploy.

## Core technique: shims, not rewrites

The migration edits **no component internals**. Two shim modules, wired via Vite
`resolve.alias` in `astro.config.mjs`, intercept the two SPA-only libraries:

- `react-router-dom` -> `src/lib/router-shim.jsx`
  - `Link` renders a plain `<a href={to}>` (real navigation; smoothed by Astro View Transitions)
  - `useLocation()` returns `{ pathname }` from `window.location` on the client, and from a
    per-page global during SSR (guards `typeof window`)
  - `useParams()` returns the current route params (slug) — from a build-time global on SSR,
    parsed from `window.location.pathname` on the client
  - `Navigate` / `NavLink` provided for completeness (Navigate becomes a no-op redirect;
    invalid slugs never build a page, so it is not hit)
- `react-helmet-async` -> `src/lib/helmet-shim.jsx`
  - `Helmet` and `HelmetProvider` render nothing (no provider required, no crash). Real meta
    is authored in each `.astro` page head, copied verbatim from the old `<Helmet>` blocks.

Because imports resolve to the shims, every `.jsx` file keeps its exact
`import { Link } from "react-router-dom"` / `import { Helmet } from "react-helmet-async"`
lines and stays byte-identical.

## Architecture

```
src/
  pages/                      # Astro file-based routing (replaces react-router)
    index.astro               -> /
    platform.astro            -> /platform
    pricing.astro             -> /pricing
    about.astro               -> /about
    contact.astro             -> /contact
    products/index.astro      -> /products
    products/[slug].astro     -> /products/:slug   (getStaticPaths over PRODUCTS keys)
    solutions/index.astro     -> /solutions
    solutions/[slug].astro    -> /solutions/:slug  (getStaticPaths over SOLUTIONS keys)
    404.astro
  layouts/
    Layout.astro              # <html>/<head>: GTM, favicon, meta props, index.css,
                              #   ClientRouter (View Transitions), GTM noscript, <slot/>
  lib/
    SiteApp.jsx               # island: mirrors App.jsx shell + one page, owns onDemo state
    router-shim.jsx
    helmet-shim.jsx
  components/ ...             # UNCHANGED
  pages-react/ (existing pages/*.jsx) # UNCHANGED page bodies, imported by SiteApp
  hooks/ ...                 # UNCHANGED
```

Note: the existing React page components currently live in `src/pages/*.jsx`. Astro claims
`src/pages/` for `.astro` routing, so the React page components are moved to
`src/react-pages/` (import paths updated only where SiteApp references them). Their internals
are unchanged. (Alternative considered: keep them and point Astro elsewhere — rejected;
`src/pages` is an Astro convention.)

### One island per route

`Layout.astro` renders `<SiteApp page="home" client:load />` (slug passed for detail pages).
`SiteApp` reproduces `App.jsx`: `ScrollProgress`, `AnnouncementBar`, `Navbar onDemo`,
`<main>` with the selected page component, `Footer`, `BackToTop`, `ContactModal`, and owns
the `modal`/`onDemo` state. Keeping the whole shell in a single island means `onDemo` (Navbar
button and every in-page CTA) opens `ContactModal` through ordinary React state — no
cross-island store, no function-prop-through-Astro problem. Astro still server-renders this
island to full HTML at build (SEO) and hydrates it (interactivity).

### SEO meta

Each `.astro` route passes `title` / `description` / `og:*` / `twitter:*` props to
`Layout.astro`, copied verbatim from that page's old `<Helmet>`. Detail pages derive the
title from the `PRODUCTS`/`SOLUTIONS` entry inside `getStaticPaths`. `@astrojs/sitemap`
generates `sitemap-index.xml`; a `robots.txt` points to it.

## Required non-shim edits (minimal)

1. `src/pages/ProductDetailPage.jsx`: `const PRODUCTS` -> `export const PRODUCTS` (non-behavioral).
2. `src/pages/SolutionDetailPage.jsx`: `const SOLUTIONS` -> `export const SOLUTIONS` (non-behavioral).
3. Move `src/pages/*.jsx` React pages to `src/react-pages/` (Astro owns `src/pages`).
4. `package.json`: add `astro`, `@astrojs/react`, `@astrojs/tailwind`, `@astrojs/sitemap`;
   scripts `dev`/`build`/`preview` run astro; keep `deploy: gh-pages -d dist`.
5. Delete `index.html`, `404.html` (SPA `?p=` redirect hack no longer needed — real per-route
   HTML files exist), `src/main.jsx`, `vite.config.js` (replaced by `astro.config.mjs`).

## Deploy

Unchanged: `npm run build` -> `dist/` -> `gh-pages -d dist`. `public/CNAME` (aquasecure.ai)
and `public/images/*` carry over as-is (Astro serves `public/` at root). `public/_redirects`
SPA rewrite is removed (no longer an SPA). base `/` (custom domain root).

## Risks / mitigations

- **MUI/emotion + framer-motion SSR** in islands: render fine to HTML; may emit harmless
  `useLayoutEffect` server warnings. Verified by build + preview.
- **useReveal / IntersectionObserver / window listeners**: run in `useEffect` (client only),
  SSR-safe.
- **Navbar active link** on first paint: `useLocation` shim returns the SSR pathname so the
  correct link is active in the HTML before hydration.
- **Whole-page hydration**: same JS/interactivity cost as the current SPA (not worse). Can be
  optimized later by splitting islands (would require component changes — out of scope now).

## Out of scope

Per-component island splitting, redesigns, copy changes, backend/tenant-app (separate repo).

## Verification

`npm run build` succeeds; `npm run preview`; each route returns HTML containing its heading
text and correct `<title>`/meta (curl/view-source); nav, dropdowns, contact modal, and
in-page animations work; product/solution detail pages exist per slug.
