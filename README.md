# Polo Safari — Monorepo

Experiential travel platform for **Polo Forest, Idar, Gujarat**. Public website (Next.js 15) + API (Laravel 12).

## Repository structure

```
/
├── frontend/     # Next.js 15 App Router — public website
├── backend/      # Laravel 12 REST API
├── docs/         # UX wireframes, UI spec, brand tokens
└── README.md     # This file
```

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20+ |
| PHP | 8.3+ |
| Composer | 2.x |
| PostgreSQL | 14+ (recommended) |

## Quick start

### 1. Frontend (Next.js)

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Configure DB in .env, then:
php artisan migrate
php artisan serve
```

API: [http://localhost:8000/api](http://localhost:8000/api)

Run both servers in separate terminals for full-stack local development.

## Environment

| App | File | Key variables |
|-----|------|---------------|
| Frontend | `frontend/.env.local` | `NEXT_PUBLIC_API_URL=http://localhost:8000/api` |
| Backend | `backend/.env` | `DB_*`, `FRONTEND_URL=http://localhost:3000` |

## Documentation

- **UX wireframes & routes:** [docs/ux-wireframes/00-index.md](docs/ux-wireframes/00-index.md)
- **UI design system:** [docs/ui/00-ui-design-system.md](docs/ui/00-ui-design-system.md)
- **Design tokens (source):** [docs/brand/04-design-tokens.css](docs/brand/04-design-tokens.css)
- **Backend API setup:** [backend/README.md](backend/README.md)

## Scaffold status (Step 3)

### Implemented

- Monorepo layout with `frontend/` and `backend/`
- Next.js 15 + TypeScript + Tailwind CSS v4 + ESLint
- Canonical public routes and `/stories` → `/blog` 301 redirects
- Design tokens, Playfair Display + Inter fonts, Header/Footer/Container shell
- Homepage structural shell (Hero, Quick Search, section stubs)
- Laravel 12 API routes with placeholder controllers and CORS for frontend origin

### Placeholder (future sprints)

- Full homepage 25 sections (hifi spec)
- Database models, migrations, and persistence
- Auth, booking checkout, payments
- Admin CMS at `/admin/*`
- SEO, analytics, and production deployment

## License

Proprietary — Polo Safari / Aioniq.
