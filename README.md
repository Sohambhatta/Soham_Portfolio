# SOHAM — THE BUILDER

A cinematic portfolio for **Soham Bhatta**, featuring projects across applied AI, computer vision, radar imaging, data analysis, and product design.

The streaming-inspired presentation is a visual theme for a personal portfolio; it is not affiliated with any streaming service.

## Run locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or another static host.

## Portfolio content

Project and profile content is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update that file to edit the introduction, featured projects, skills, project milestones, journey episodes, and highlight reel.

The three featured projects include:
- **Doorcam** — an NVIDIA Jetson person-and-pet safety prototype. Its physical door hardware is described as a prototype, not a deployed system.
- **UAS Synthetic Aperture Radar** — a collaborative BWSI project; the linked GitHub repository is a demonstration snapshot.
- **AI Stock Analysis** — a dashboard combining technical indicators and news sentiment; its output is educational analysis, not financial advice.

Descriptions distinguish solo work, team contributions, prototypes, and measured results based on the project details available. Update or remove any claim that no longer reflects the current project.

Copy was reviewed against the owner's supplied project descriptions and linked source code. See [`CONTENT_SOURCES.md`](CONTENT_SOURCES.md) for the factual basis and verification limits.

## Structure

```text
src/
  data/portfolio.ts        # Portfolio content and types
  App.tsx                  # Opening, profile selection, page, and overlays
  components/              # Sections, project cards, and cinematic interactions
  hooks/                   # Smooth scrolling, media queries, and watch progress
public/assets/soham-mark.svg
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, and Lenis.

The site respects reduced-motion preferences, supports keyboard controls for the intro and overlays, and uses responsive layouts for touch and desktop.
