# Polo Safari — Frontend

Next.js 15 App Router public website.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Structure

- `src/app/` — App Router pages (canonical routes per docs/ux-wireframes)
- `src/components/layout/` — Header, Footer, Container, SiteShell
- `src/components/home/` — Homepage shell sections
- `src/styles/tokens.css` — Design tokens from docs/brand/04-design-tokens.css

## API

Set `NEXT_PUBLIC_API_URL` in `.env.local` (default `http://localhost:8000/api`).
