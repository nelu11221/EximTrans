# EximTrans — website

Site multi-pagină pentru compania de transport & logistică **EximTrans**, construit după
draftul Superdesign „VeloHaul Logistics Services" (`3b8298ed-…`) și rebranduit / tradus în română.
Planul inițial: `design/IMPLEMENTATION_PLAN.md`.

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`, tokeni în `src/index.css` → `@theme`)
- `react-router` v7 — rutare client-side + tranziții între pagini
- `motion` (Framer Motion) — animații la scroll (parallax, reveal, countere, timeline desenat de scroll)
- `lucide-react` — iconițe

## Pagini
| Rută | Fișier | Conținut |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Hero, servicii (preview), misiune, CTA |
| `/servicii` | `src/pages/Servicii.tsx` | 6 servicii (ancore `#ftl`, `#ltl`, `#frigo`…) + proces în 4 pași |
| `/flota` | `src/pages/Flota.tsx` | Highlights + 4 tipuri de vehicule |
| `/despre` | `src/pages/Despre.tsx` | Misiune, valori (`#valori`), istoric (timeline) |
| `/urmarire` | `src/pages/Urmarire.tsx` | Urmărire expediere (demo: coduri `EX` + 6 caractere) |
| `/contact` | `src/pages/Contact.tsx` | Date contact + formular cerere ofertă |

## Rulare
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## De completat
- Datele de contact reale sunt în `src/data/site.ts` → `brand` (telefon, email, adresă — marcate `TODO`).
- Formularul de contact și urmărirea sunt **demo** (fără backend) — vezi `// TODO` în `Contact.tsx` / `Urmarire.tsx`.
- Imaginile sunt de pe Unsplash; înlocuiește-le cu fotografii proprii ale flotei.
- La deploy pe hosting static, configurează fallback SPA (`/* → index.html`).
