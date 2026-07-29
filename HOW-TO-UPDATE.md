# How to Update the Portfolio

Live site: **https://manuelpacheco.web.app**
Workflow: **edit → preview → push**. Every push to `main` auto-deploys via GitHub Actions (~2 min).

## 1. Where everything lives

| To change | Edit this |
| :--- | :--- |
| Any English text (pitch, services, projects, skills, experience, contact) | `src/content/en.ts` |
| The same text in Spanish | `src/content/es.ts` |
| Links, public email, CV path, project URLs | `src/content/links.ts` |
| Project screenshots | Drop the file in `public/projects/`, point the `image:` field at it (path starts with `/projects/...`) |
| CV | Replace `public/curriculumVitae_ManuelPacheco_ATS.pdf` keeping the same filename (no code change needed) |
| Logo / favicon | `public/manuelIcon.png` (512px, favicon/OG) and `public/manuelIcon-128.webp` (navbar/hero) |
| SEO meta, social share tags | `index.html` |
| Colors, fonts, design tokens | `@theme` block in `src/index.css` |

**Golden rule:** any text changed in `en.ts` must also be changed in `es.ts`. Both files share one TypeScript interface (`src/content/types.ts`) — if a field is missing in one language, the build fails on purpose so a broken site never ships.

Pending slot: quantified results for the enterprise project go in the `impact` field of the `experience` items (currently commented out in both content files).

## 2. Preview locally (optional but recommended)

```bash
npm run dev
```

Opens the site at `http://localhost:5173` with live reload. `Ctrl+C` to stop.

## 3. Publish

```bash
git add -A
git commit -m "Describe the change"
git push
```

GitHub Actions builds and deploys automatically — check the **Actions** tab on
[github.com/manuelpacheco108/portfolio](https://github.com/manuelpacheco108/portfolio) for the green check.

## If the pipeline fails

- A red X on the Actions tab is usually a TypeScript/content error — open the failed `npm run build` step to see the file and line.
- Emergency manual deploy (bypasses GitHub): `npm run deploy`

## Image guidelines

Keep uploads light: screenshots are converted to WebP ≤ 1280px wide (~15 KB each).
One-off helper scripts live in `scripts/` (`optimize-logo.mjs`, `og-image.mjs`, `screenshots.mjs`).

## Never commit secrets

`*firebase-adminsdk*.json` keys are git-ignored. Keep it that way — the CI deploy key
already lives encrypted in the GitHub repo secret `FIREBASE_SERVICE_ACCOUNT`.
