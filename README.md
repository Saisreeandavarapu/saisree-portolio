# Andavarapu Saisree — Portfolio

Personal portfolio for **Andavarapu Saisree** (Java Full Stack Developer), built with React, TypeScript, Tailwind CSS, Vite, and Framer Motion.

## Project Structure

- `public/assets/saisree-resume.pdf` — Original unmodified resume PDF served at relative path `assets/saisree-resume.pdf`.
- `src/assets/images/` — Dedicated placeholder portrait frames (`hero-portrait.svg`, `about-portrait.svg`, `working-session.svg`).
- `src/data/portfolioData.ts` — Centralized, typed single source of truth for identity, skills, experience, projects, education, and contact links.
- `src/utils/motion.ts` — Reusable Framer Motion easing curves, reveal variants, and viewport settings.
- `src/components/` — Modular section and interactive UI components (`Preloader`, `ScrollProgress`, `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Projects`, `ProjectModal`, `Education`, `Contact`, `Footer`, `PortraitFrame`, `SectionHeader`).

## Replacing Placeholder Photographs

1. Place your real photographs inside `src/assets/images/` (e.g., `hero-portrait.jpg`, `about-portrait.jpg`, `working-session.jpg`).
2. Update the three imports and captions in `src/data/portfolioData.ts`.
3. `PortraitFrame` uses `object-cover object-top` with responsive aspect ratios so facial proportions remain preserved without distortion.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Local Preview

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push this repository to GitHub (or connect it directly in the Vercel dashboard).
2. Import the project in Vercel with:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy — `vercel.json` is preconfigured, and `assets/saisree-resume.pdf` will be served cleanly from the production build.

