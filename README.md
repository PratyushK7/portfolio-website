# Pratyush Kumar — Portfolio

A static, dependency-free personal portfolio site (plain HTML/CSS/JS — no build step).

## Local preview

```bash
npx serve .
# or just open index.html in a browser
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npx vercel --prod
```

### Option B — Import via Vercel dashboard

1. Go to https://vercel.com/new
2. Import the `PratyushK7/portfolio-website` GitHub repo
3. Framework preset: **Other** (no build command needed, root directory is already the site)
4. Deploy

## Deploy to GitHub Pages

Since the site lives at the repo root, GitHub Pages works with zero extra config:

1. Push to `main`
2. Repo Settings → Pages → Source: **Deploy from a branch** → `main` / `/(root)`
3. Site will be live at `https://pratyushk7.github.io/portfolio-website/`

## Structure

```
.
├── index.html      # all sections/content
├── styles.css      # design system + responsive layout
├── script.js       # scroll reveal, nav, dashboard hero, case-study scrollytelling
├── assets/
│   └── Pratyush_Kumar_Resume.pdf
└── vercel.json     # security headers, clean URLs
```
