# bhushan-borole.github.io

Personal portfolio — live at **https://bhushan-borole.github.io**.

## Stack

- React 18 + Create React App
- Plain CSS (custom design system, no UI libraries)
- Formspark for the contact form
- IntersectionObserver for scroll reveals

## Develop

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs an optimised production build to `build/` (≈ 52 kB gzipped JS).

## Deploy

Deployment uses the `gh-pages` package to publish `build/` to the `gh-pages`
branch. GitHub Pages for this repository is configured to serve from
`gh-pages` → root, exposing the site at `https://bhushan-borole.github.io`.

```bash
npm run deploy
```

The `homepage` field in `package.json` is set to `https://bhushan-borole.github.io`
so all asset paths resolve correctly at the root.
