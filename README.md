# Leister Consultants — Website

A React + Vite website for Leister Consultants, built from the company profile deck and brand logo.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Building for deployment

```bash
npm run build
```

This outputs a `dist/` folder ready to deploy to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## Structure

- `src/pages/` — Home, About, Services, CaseStudies, Contact
- `src/components/` — Header, Footer, ImagePlaceholder
- `src/styles/shared.css` — shared button/section styles
- `public/images/` — logo lives here; add real project/team photos here later

## Swapping in real images

Every placeholder box is labeled with what belongs there (e.g. "TIAC project site photo," "Robert Maganda, Lead Consultant — portrait"). Search each page file for `<ImagePlaceholder` to find them, and replace with a standard `<img src="/images/your-file.jpg" alt="..." />` once photos are ready.

## Brand colors

- Rust/terracotta: `#A55125`
- Charcoal: `#3B3B3E`
- Mid gray: `#6C6D71`
- Light gray: `#A8A9AD`
- Off-white: `#F7F6F4`
