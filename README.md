# HARI404 — Immersive Developer Portfolio

A high-motion, scroll-driven portfolio built with **React + TypeScript + Vite + GSAP + ScrollTrigger + Lenis**.

## Included

- Cinematic animated hero with your supplied cartoon portrait
- Dark/light theme toggle with persistent preference
- Smooth scrolling using Lenis
- GSAP scroll-triggered reveals and parallax
- Animated skills cloud and horizontal marquee
- Project showcase with live links
- Responsive desktop and mobile layouts
- Reduced-motion CSS support
- Custom editorial visual system

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy

This is a standard Vite static site. You can deploy the `dist/` folder to:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages (configure the Vite base path if deploying under a repository subpath)

For `hari404.dev`, connect the custom domain in your hosting provider and configure its DNS records there.

## Personal details to update

1. In `src/App.tsx`, replace `hello@hari404.dev` with your real contact email if needed.
2. In `src/data.ts`, update project descriptions, technologies and years to match the exact work.
3. Add certificate entries only after you have the actual certificates.
4. Replace the generated CSS project preview panels in `ProjectCard.tsx` with real screenshots when available.
5. Replace `src/assets/hari-avatar.jpg` with a higher-resolution transparent PNG if you obtain one. Keep the filename or update the image paths.

## Animation note

The project intentionally uses many individual reveal, stagger, hover, parallax and scroll-linked effects. It is not a literal count of 100 separate GSAP timelines. The animation system is component-driven and designed to scale without creating unnecessary animation overhead.

## Important

The email address `hello@hari404.dev` is a placeholder. A mailto link opens the visitor's email client; it does not provide a contact form backend.
