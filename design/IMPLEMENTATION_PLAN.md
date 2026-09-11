# VeloHaul Logistics — Implementation Plan

Source: Superdesign draft `3b8298ed-db14-4489-96e3-5c7a64cd0d45` (project `557c33dd-…`).
Reference markup: `design/velohaul-reference-body.html`.
Preview: https://superdesign.dev/preview/draft/3b8298ed-db14-4489-96e3-5c7a64cd0d45

## 1. Stack
| Concern | Choice | Why |
|---|---|---|
| Build | Vite 7 + React 19 + TypeScript | zero-config, fast |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | draft is Tailwind-native; v4 tokens via `@theme` |
| Icons | `lucide-react` | draft uses `lucide:*` iconify icons 1:1 |
| Scroll animations | `motion` (framer-motion v12) | `whileInView`, `useScroll` parallax, `useInView` counters |
| Fonts | Google Fonts: Archivo (body) + Cabinet Grotesk fallback → Archivo Black / system | Cabinet Grotesk is not on Google Fonts; draft `<link>` silently fails. Use Archivo 900 for headings |

## 2. Design tokens (from draft `:root` + inline classes)
```
--brand-primary: #FF3D00   (orange, CTAs, accents)
--brand-dark:    #0A0A0B   (near-black, hero/mission bg, header CTA)
--brand-light:   #F4F4F5   (page bg)
Neutral scale: gray-50/100/300/400/500/600 (Tailwind defaults)
Radii: rounded-lg (logo), rounded-xl (buttons), rounded-2xl (icon tiles), rounded-3xl (cards), rounded-[40px] (CTA), rounded-full (pills)
Type: h1 text-6xl→md:text-8xl font-black leading-[0.9] tracking-tighter uppercase
      h2 text-5xl font-black tracking-tighter
      body Archivo, text-xl gray-600 for leads
Signature: hard-offset shadow `shadow-[10px_10px_0_0_#0A0A0B]` on featured card; skewed orange stats band `-skew-x-12`
```

## 3. Component tree
```
src/
  main.tsx, index.css (Tailwind + @theme tokens + fonts)
  App.tsx
  data/site.ts            – nav, services, mission points, stats, footer columns (all copy lives here)
  lib/motion.ts           – shared variants (fadeUp, stagger, scaleIn) + viewport config
  components/
    ui/Reveal.tsx         – wrapper: motion.div whileInView fadeUp (delay/once props)
    ui/Counter.tsx        – animated number (useInView + animate)
    ui/Button.tsx         – primary / dark / outline / white variants
    layout/Header.tsx     – fixed, shrink + shadow on scroll, mobile menu (draft hides nav on <lg with no menu → add slide-in)
    layout/Footer.tsx     – 4-col grid + bottom bar
    sections/Hero.tsx     – bg image parallax (useScroll), headline word-by-word stagger, skewed stats band with Counters
    sections/Services.tsx – heading row + 3 cards (stagger reveal, hover lift; middle card offset shadow)
    sections/Mission.tsx  – ghost "VELO" text, 2 feature rows, fleet image card w/ orange decor block (parallax offset)
    sections/CTA.tsx      – orange rounded-[40px] block, giant rotated Truck icon, 2 buttons
```

## 4. Scroll animation spec
| Element | Animation |
|---|---|
| Header | `bg-white/80 backdrop-blur` + shadow after `scrollY > 20`; height 80→64px |
| Hero bg image | `useScroll` → `y: 0→120px`, `scale 1→1.1` (parallax) |
| Hero badge / h1 / p / buttons | stagger 0.12s, `opacity 0→1, y 40→0`, ease `[0.22,1,0.36,1]` |
| Hero stats band | slides in from right `x: 200→0`, counters 0→99.8 / 1.2M / 500+ |
| Section headings | `Reveal` fadeUp, `once: true`, `margin: -80px` |
| Service cards | container stagger 0.15s; card `y 60→0`, hover `-translate-y-2` |
| Mission ghost "VELO" | `useScroll` horizontal drift `x: -40→40` |
| Mission feature rows | fadeUp stagger, icon ring `scale 0→1` spring |
| Fleet image | `clip-path inset(0 0 100% 0) → inset(0)` reveal; decor block slides in |
| CTA block | `scale 0.95→1, opacity` + Truck icon `rotate -25→-15` on scroll |
| Footer columns | subtle stagger fadeUp |
| Global | respect `prefers-reduced-motion` via `useReducedMotion` |

## 5. Steps
1. `npm create vite@latest . -- --template react-ts`; install `tailwindcss @tailwindcss/vite motion lucide-react`.
2. `index.css`: `@import "tailwindcss"; @theme { --color-brand: #FF3D00; --color-ink: #0A0A0B; --color-paper: #F4F4F5; --font-sans: Archivo; --font-heading: ... }`.
3. Add `data/site.ts` with all copy from the draft.
4. Build `lib/motion.ts`, `ui/Reveal`, `ui/Counter`, `ui/Button`.
5. Build Header (+ mobile drawer), Hero, Services, Mission, CTA, Footer — match draft classes verbatim, swap `iconify-icon` → lucide components.
6. Wire scroll animations per §4; add `scroll-smooth` + anchor ids (`#services`, `#fleet`, `#mission`, `#track`).
7. Replace broken fleet Unsplash image (draft's 2nd image 404s → placeholder) with a working truck photo.
8. `npm run build`; verify in browser at desktop + mobile; check reduced-motion.

## 6. Out of scope / follow-ups
- Real quote form / tracking backend (buttons are anchors).
- CMS or i18n (copy is English as in the draft; a Romanian `data/site.ro.ts` is trivial to add).
- Logo: draft uses a Truck icon tile; swap for a real brand asset when available.

---

## 7. Update — multi-page + EximTrans (RO)
- Rebrand VeloHaul → **EximTrans**; tot conținutul în română (`src/data/site.ts`).
- `react-router` v7: `Layout` (Header/Footer + tranziție `AnimatePresence` pe rută + `ScrollToTop` cu suport hash).
- Pagini noi: `/servicii`, `/flota`, `/despre`, `/urmarire`, `/contact`, 404.
- Componente noi: `PageHero` (hero compact pentru paginile interne), `SectionHeading`, `Button` cu suport `to`/`href`/`submit`.
- Animații noi: timeline cu linie desenată de `useScroll`, reveal `scale` pe imaginile din flotă, pași proces cu `childScale`, rezultat tracking cu stagger.
