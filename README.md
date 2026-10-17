# UI Style Guide — 37 Landing Page Styles

An interactive, self-hosted gallery of popular UI design styles. Pick a style from the sidebar and the main stage re-renders the **same landing page content** in that visual language — so you can compare Minimalism against Brutalism, Glassmorphism against Liquid Glass, or Vaporwave against Synthwave with zero content noise.

![styles](https://img.shields.io/badge/styles-37-fuchsia) ![next](https://img.shields.io/badge/Next.js-16-black) ![tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## Getting Started

```bash
npm install   # first time only
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> If port 3000 is taken, the dev server picks 3001 (or any free port) — Next prints the URL in the console.

Other commands:

```bash
npm run build   # production build (Turbopack)
npm run start   # serve the production build
npm run lint    # eslint
```

## What You Can Do

| Feature | Where | Notes |
|---|---|---|
| **Browse styles** | Sidebar | 37 styles, each with a one-line signature and a color swatch |
| **Search** | Sidebar top | Filters as you type; ⌘K / Ctrl+K to focus |
| **Copy name** | Sidebar row (hover) | Copies the style name (e.g. `Claymorphism`) to the clipboard, shows a ✓ for 2s |
| **Deep link a style** | URL | `?style=` syncs on every switch → share `http://localhost:3000/?style=art-deco` |
| **Learn the style** | Info bar | Description, key traits, and real-world usage for every style |
| **Browser back/forward** | URL | History-aware; popstate keeps the view in sync |

## Style Catalog

| # | Style | Slug | Signature |
|---|---|---|---|
| 01 | Minimalism | `minimalism` | Less is more. Whitespace is the design. |
| 02 | Flat Design | `flat-design` | No shadows, no gradients. Just color. |
| 03 | Neumorphism | `neumorphism` | Soft, extruded shapes on pastel cards. |
| 04 | Glassmorphism | `glassmorphism` | Frosted translucent glass over color. |
| 05 | Claymorphism | `claymorphism` | Puffy, friendly 3D clay shapes. |
| 06 | Brutalism | `brutalism` | Raw, loud and deliberately unpolished. |
| 07 | Bento Grid | `bento-grid` | Everything fits in tiled modular boxes. |
| 08 | Dark / Cyberpunk | `cyberpunk` | Neon glow on a pitch-black grid. |
| 09 | Skeuomorphism | `skeuomorphism` | Pixels that mimic the physical world. |
| 10 | Memphis (80s) | `memphis` | 80s confetti: squiggles, zigs and zags. |
| 11 | Vaporwave | `vaporwave` | Sunset grids and retro-future chrome. |
| 12 | Art Deco | `art-deco` | Black and gold geometric luxury. |
| 13 | Neo-Brutalism | `neo-brutalism` | Raw honesty with a pastel smile. |
| 14 | Swiss Design | `swiss-design` | Grid, type and nothing else on top. |
| 15 | Editorial / Magazine | `editorial` | Page layout borrowed from print magazines. |
| 16 | Luxury Minimalism | `luxury-minimalism` | Whispered spacing, serif confidence, gold. |
| 17 | Liquid Glass | `liquid-glass` | Apple's 2025 glass — light bends around pills. |
| 18 | Material Design | `material-design` | Elevation, ink and motion by Google's book. |
| 19 | Y2K | `y2k` | Chrome, bubbles and millennium optimism. |
| 20 | Retro-Futurism | `retro-futurism` | The atomic-age tomorrow that never arrived. |
| 21 | Synthwave | `synthwave` | Outrun grids, magenta night drives. |
| 22 | Aurora Gradients | `aurora` | Northern lights drifting over dark glass. |
| 23 | Organic / Biophilic | `biophilic` | Leaves, sand and the shape of calm. |
| 24 | Hand-Drawn | `hand-drawn` | Sketched in a notebook, works like a site. |
| 25 | Pixel Art | `pixel-art` | 8-bit pages with zero anti-aliasing. |
| 26 | Cyberpunk HUD | `cyberpunk-hud` | The interface as instrumentation. |
| 27 | Japanese Minimalism | `japanese-minimalism` | Ma — meaning carried by what is omitted. |
| 28 | Bauhaus | `bauhaus` | Form follows function. Circles, not gradients. |
| 29 | Maximalism | `maximalism` | More. Then more again, on purpose. |
| 30 | Split-Screen | `split-screen` | Two ideas, one viewport, halves all the way down. |
| 31 | Asymmetric Grid | `asymmetric-grid` | Perfectly measured, deliberately off-center. |
| 32 | Cinematic | `cinematic` | The landing page as a title sequence. |
| 33 | Pop Art | `pop-art` | Ben-Day dots meet comic exclamations. |
| 34 | Collage | `collage` | Torn paper, tape and happy accidents. |
| 35 | Corporate / Enterprise | `corporate` | Trust-first tiles for buyers with budgets. |
| 36 | AI-Native | `ai-native` | The prompt box is the hero section. |
| 37 | Spatial UI | `spatial-ui` | Interfaces that float in room-scale depth. |

## Architecture

```
src/
├── app/
│   ├── page.tsx             → server component: awaits ?style= search param,
│   │                          passes it down (no SSR/client mismatch)
│   ├── layout.tsx           → Geist font + metadata
│   └── globals.css          → Tailwind v4 entry, keyframes, scrollbar polish
├── data/
│   ├── designStyles.ts      → single source of truth (name, slug, signature,
│   │                          description, traits, usage, swatch × 37)
│   └── landingCopy.ts       → the one shared "Lumio" landing copy every demo renders
└── components/
    ├── StyleGuide.tsx       → client shell: sidebar + info bar + demo stage,
    │                          URL sync via history.replaceState + popstate listener
    ├── Sidebar.tsx          → search filter (⌘K), copy-name button, active state
    ├── AboutStyle.tsx       → per-style description, traits, usage
    └── demos/
        ├── index.ts         → lazy registry: every demo via next/dynamic (ssr: true),
        │                      so only the selected chunk is fetched
        └── *Demo.tsx        → 37 self-contained landing pages
                              (nav · hero · features · testimonial · pricing · footer)
```

**How selection flows**

1. `page.tsx` (server) reads `?style=` → renders `<StyleGuide initialStyle>` with the correct first paint.
2. Sidebar click → local state + `history.replaceState` → the URL updates without a navigation.
3. `<section key={slug}>` remounts → the lazy `dynamic()` chunk loads with a pop-in animation.
4. Back/forward re-reads the URL via a `popstate` listener.

**Why the same copy everywhere?** The guide's whole point is style comparison: one fake product ("Lumio"), same nav/hero/features/testimonial/pricing/footer in all 37 views, so only the design language varies.

**Near-twin pairs are intentionally differentiated** (e.g. raw Brutalism vs pastel Neo-Brutalism; frosted Glassmorphism vs specular Liquid Glass; centered Vaporwave vs left-aligned Synthwave; dark Cyberpunk vs instrument-glass Cyberpunk HUD).

## Adding a New Style

1. **Register it** in `src/data/designStyles.ts`:

```ts
{
  slug: "y2k",
  name: "Y2K",
  signature: "Chrome, bubbles and millennium optimism.",
  description: "…",
  traits: ["…", "…", "…", "…"],
  usage: "…",
  swatch: "#AFC8E8",
},
```

2. **Build the demo** at `src/components/demos/Y2KDemo.tsx` — default-export
   `function Y2KDemo({ copy }: { copy: typeof landing })`, root element must be
   `min-h-full` with its own background, then render the sections using `copy.*`.
3. **Wire the registry** in `src/components/demos/index.ts`:

```ts
const Y2KDemo = dynamic(() => import("./Y2KDemo"));
// + add to demoRegistry under the same key as the slug above
```

That's it — search, copy button, URL sync and the info panel pick it up automatically.

## Tech Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — wired via the `turbopack.rules` loader in `next.config.ts` (`@tailwindcss/turbopack`); no PostCSS config is used in this setup, so keep that rule intact.
- **next/dynamic** for demo chunk splitting · **next/font** (Geist)
- No icon/image/data libraries — every visual is CSS/SVG, every icon is inline SVG or a character.

## Project Notes & Gotchas

- `next.config.ts` sets `cacheComponents: false`. Next 16's dev-mode *instant UI validation*
  would otherwise spam console errors for this fully-client showcase. Don't re-enable for this app.
- Because `page.tsx` awaits `searchParams`, the home route renders **dynamically** (ƒ in the build output). That's what makes deep links hydration-safe.
- The original Brutalism/Brutalism pair and siblings share eras but not executions — see the table above.
- Demos are intentionally dependency-free and SSR-friendly (no `window` access during render) — keep it that way.

## Deploy

Deploy anywhere a Node server runs (the home route is dynamic):

```bash
npm run build && npm run start
```

Or import the repo into [Vercel](https://vercel.com) — framework is auto-detected.
