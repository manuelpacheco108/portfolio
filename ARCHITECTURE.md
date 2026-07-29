# Portfolio — Phase 1: Architecture, Style & Design Patterns

Owner: Manuel A. Pacheco Motoa — Software Engineer (GenAI Integration, Process Automation, Serverless)
Decisions locked 2026-07-28: **Bilingual EN/ES**, **Light clean-professional style**, **Single-page scroll layout**, hosted on **Firebase Hosting**.

---

## 1. Tech Stack

| Layer | Choice | Why |
| :--- | :--- | :--- |
| Framework | React 19 + TypeScript | Requirement; type safety for content model |
| Build tool | Vite 6 | Fast dev/build, first-class React + TS templates |
| Styling | Tailwind CSS v4 | Design tokens in config, no CSS drift, small output |
| Animation | Motion (framer-motion) | Subtle scroll/entrance animation only — used sparingly |
| i18n | Typed content files per locale + React Context | Site is data-driven; two typed content files beat i18next overhead. i18next only if content grows large |
| Special icon | thinking-orbs (MIT) | Animated dotted "thinking" orb, 2D canvas, zero deps. Lazy-loaded, random state per visit, lives in Hero. Auto light/dark, respects reduced-motion |
| Hosting | Firebase Hosting | Requirement; free tier, CDN, custom domain, preview channels |
| CI/CD | GitHub Actions → Firebase | Auto-deploy on push to `main`; PR preview channels |
| Backend | None (Phase 1) | Contact via `mailto:` + social links. Firestore/Functions only if a real contact form is wanted later |

No router. Single page, anchor navigation (`#services`, `#projects`, ...). Language switch does NOT change URL (stored in `localStorage`, defaults to browser language).

## 2. Project Structure

```
portfolio/
├── public/                  # favicon, og-image, robots.txt, CV pdf
├── src/
│   ├── assets/              # images, logos
│   ├── components/
│   │   ├── ui/              # atoms: Button, Card, Tag, SectionHeading, IconLink
│   │   └── layout/          # Navbar (anchor links + lang toggle), Footer
│   ├── sections/            # one component per page section (organisms)
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx   # enterprise/NDA work
│   │   └── Contact.tsx
│   ├── content/             # SINGLE SOURCE OF TRUTH for all text/data ✅ written
│   │   ├── types.ts         # Content model interfaces
│   │   ├── links.ts         # locale-independent links & asset paths
│   │   ├── en.ts            # English content (satisfies Content)
│   │   └── es.ts            # Spanish content (satisfies Content)
│   ├── hooks/
│   │   ├── useLocale.ts     # lang state + persistence
│   │   └── useScrollSpy.ts  # highlight active nav anchor
│   ├── lib/                 # helpers (cn(), constants)
│   ├── App.tsx              # composes layout + sections
│   ├── main.tsx
│   └── index.css            # Tailwind entry + token definitions
├── firebase.json            # hosting config, cache headers, SPA rewrite
├── .github/workflows/deploy.yml
└── package.json
```

## 3. Design Patterns

1. **Content/presentation separation (data-driven UI)** — components never contain copy. All text, links, projects live in `src/content/{en,es}.ts` typed by `types.ts`. Editing the portfolio = editing one data file. Both locales are compiler-checked against the same interface, so a missing Spanish field is a build error.
2. **Composition, atomic-lite hierarchy** — `ui/` atoms → `sections/` organisms → `App` page. No inheritance, no prop drilling beyond one level; locale flows through a single Context.
3. **Custom hooks for behavior** — `useLocale`, `useScrollSpy`. Logic out of markup.
4. **Presentational sections, one props contract** — every section receives its slice of typed content, renders it, nothing else. Sections are independently testable/replaceable.
5. **Progressive enhancement / performance-first** — semantic HTML works without JS niceties; lazy-load below-fold images (`loading="lazy"`); animations respect `prefers-reduced-motion`.

## 4. Style System (light clean-professional)

Design tokens defined once in Tailwind theme:

| Token | Value | Use |
| :--- | :--- | :--- |
| `bg` | `#FAFAF9` (warm off-white) | Page background |
| `surface` | `#FFFFFF` | Cards, navbar |
| `ink` | `#1E293B` (slate-800) | Headings, body |
| `muted` | `#64748B` (slate-500) | Secondary text |
| `accent` | `#2563EB` (blue-600) | Links, buttons, active states — ONE accent only |
| `border` | `#E2E8F0` | Card borders, dividers |

- **Typography:** Inter (self-hosted, `font-display: swap`). Scale: 14/16/18/24/32/48. Max line length ~70ch.
- **Spacing:** 8-pt grid; generous whitespace between sections (`py-24`).
- **Cards:** white surface, 1px border, soft shadow on hover only. No gradients, no glassmorphism.
- **Accessibility:** WCAG AA contrast (all tokens above pass), visible focus rings, `lang` attribute switches with locale, alt text mandatory in content model.
- **Performance budget:** Lighthouse ≥ 95 all categories; total JS < 150 KB gz; images in WebP/AVIF.

## 5. Page Sections (top → bottom)

1. **Hero** — name, title, one-sentence pitch, CTA buttons (Contact, GitHub), photo/avatar.
2. **Services** — 3 cards: GenAI & Automation Integration · Serverless Web Development · Local RAG Architecture.
3. **Projects** — cards from content model: Go Street 44 (live link), G-44, GoSlides44 (GitHub links). Fields: name, description, tech tags, links, screenshot.
4. **Skills** — grouped matrix from intake §2 (Frontend / Backend & Cloud / Automation & Low-Code / Tools).
5. **Experience** — NDA-safe enterprise work (intake §3).
6. **Contact** — email, GitHub, LinkedIn, CV download. Footer with lang toggle repeat.

## 6. SEO / Meta

- `index.html`: title, meta description, Open Graph + Twitter card, JSON-LD `Person` schema.
- `hreflang` alternates note: single URL with client-side toggle → default meta in English, `og:locale:alternate` es.
- Firebase Hosting: long cache for hashed assets, no-cache for `index.html`.

## 7. Roadmap

- **Phase 1 ✅** — this document.
- **Phase 2 ✅** — bilingual content model written (`src/content/`): types, links, full EN + ES copy. Enriched from GitHub repos + live Go Street 44 site.
- **Phase 3 ✅** (2026-07-28) — scaffold complete: Vite 8 + React 19 + TS 7 + Tailwind 4.3; deps installed incl. `thinking-orbs`, `motion`, `@fontsource-variable/inter`; `useLocale` hook + placeholder App wired to content model; production build passes (64 KB JS gz). Assets moved to `public/`. `git init` done (no commits yet). Firebase project **`manuel-pacheco-portfolio`** created; hosting site **`manuelpacheco`** claimed → site will serve at **https://manuelpacheco.web.app** (`firebase.json` targets it). Web app registered in console; config stored unwired in `src/lib/firebaseConfig.ts`. GitHub repo: **https://github.com/manuelpacheco108/portfolio** (public, pushed). GitHub Actions workflow active but **fails until `FIREBASE_SERVICE_ACCOUNT` secret is added** (run `firebase init hosting:github` once, or deploy manually via `npm run deploy`).
- **Phase 4** — build real sections against content model; RandomOrb component (lazy) in Hero; capture project screenshots (`public/projects/*.webp` — paths already set in content); compress `manuelIcon.png` (3.3 MB → resized WebP); responsive + a11y pass.
- **Phase 5** — SEO/meta, Lighthouse tuning, deploy to Firebase (`manuel-pacheco-portfolio.web.app`), CI/CD activation.

## 8. Content Gaps (need from Manuel)

- [x] LinkedIn URL — https://www.linkedin.com/in/manuel-pacheco-motoa/
- [x] Public contact email — manuelpm108@gmail.com
- [x] Logo — `manuelIcon.png` (neon "M" on blue, repo root)
- [ ] Measurable impact numbers for enterprise project — **pending, user will provide** (`impact` field ready in content model)
- [~] Project screenshots — to capture in Phase 4 (Go Street live site; G-44/GoSlides44 from repos or local runs)
- [x] CV PDF — `curriculumVitae_ManuelPacheco_ATS.pdf` (repo root)
- [x] Domain — free `*.web.app`
- [x] Brand — personal brand (name + M logo), no separate business name
