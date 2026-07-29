# Shuruq — QA Game Tester & Web Developer Portfolio

A cinematic, interactive portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Three Fiber, and GSAP — telling the story of a developer who moved into QA, and letting visitors experience that QA mindset firsthand through a playable "Find The Bug" challenge.

## Tech Stack

- **React 18 + Vite** — app shell and build tooling
- **Tailwind CSS v4** — design system, dark theme with electric blue / cyan / violet accents
- **Framer Motion** — scroll reveals, transitions, micro-interactions
- **React Three Fiber + drei** — animated 3D particle field in the hero
- **GSAP + ScrollTrigger** — scroll-scrubbed timeline animation in the Experience section
- **Lucide React** — icon set

## Sections

- **Hero** — cinematic intro with a 3D particle/wireframe background
- **The Journey** — the dev → QA story, with animated stats
- **Experience** — Quick Step (Web Developer Intern) → Mirai/Scopely (QA Game Tester)
- **Skills** — an interactive QA / Development / Tools command center
- **QA Lab: Find The Bug** — a hands-on challenge where visitors hunt for planted UI, functional, and usability bugs across three fake app screens, then get a QA score
- **Projects** — "mission files" for the Office Booking Management System and a QA documentation showcase (test cases, bug reports, checklists, API/SQL validation, severity matrix)
- **Process** — the Discover → Improve QA workflow
- **Certifications**
- **Contact** — a terminal-styled contact panel

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
```

## Editing Content

All copy, links, and data live in `src/data/` (`content.js`, `projects.js`, `qaLab.js`, `qaArtifacts.js`) — update those files rather than the components. Drop a resume PDF into `public/resume.pdf` to activate the Download Resume link.
