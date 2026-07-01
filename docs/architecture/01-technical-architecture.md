# Polo Safari — Technical Architecture

**Version:** 1.0.0  
**Status:** Phase 7 complete — enquiry-first MVP  
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind · shadcn · Framer Motion · Laravel 12 · PostgreSQL · Cloudinary · Docker  
**Deployment:** Vercel (frontend) · Hostinger VPS (backend)

---

## Summary

Polo Safari ships as an **enquiry-first MVP**: public marketing site on Next.js, lead capture via Next.js API routes (MVP), with Laravel 12 REST API and admin CMS as the production target. No online booking, payments, or customer login at launch.

**MVP decision:** Enquiry POST handled by `frontend/src/app/api/enquiries/route.ts` until Laravel enquiry module is deployed. Corporate RFP retains dedicated route at `/api/rfp/corporate` with migration path to `POST /api/enquiries`.

---

## Frontend Architecture

### Framework & routing

| Property | Value |
|----------|-------|
| Framework | Next.js 15 App Router |
| Language | TypeScript (strict) |
| Package manager | pnpm |
| Root | `frontend/` |

### Folder structure

```
frontend/
├── src/
│   ├── app/                    # App Router pages & API routes
│   │   ├── page.tsx            # Homepage (16 sections)
│   │   ├── layout.tsx          # Root layout + providers
│   │   ├── api/
│   │   │   ├── enquiries/      # MVP unified enquiry endpoint
│   │   │   └── rfp/corporate/  # Corporate RFP (legacy path)
│   │   ├── tour-packages/      # Tour packages hub + [slug] detail
│   │   ├── destinations/       # Destinations hub + india/[slug]
│   │   ├── plan-my-journey/    # Conversion wizard
│   │   ├── enquire/            # General enquiry + thank-you
│   │   └── …                   # corporate, schools-colleges, contact, etc.
│   ├── components/
│   │   ├── layout/             # Header, Footer, SiteShell, nav
│   │   ├── home/               # Homepage section components
│   │   ├── sections/           # Shared page sections + RFP forms
│   │   ├── forms/              # Enquiry & wizard forms
│   │   └── ui/                 # shadcn primitives
│   ├── content/                # YAML loader, types, page factories
│   ├── lib/                    # Enquiry validation, utilities
│   └── styles/                 # tokens.css, typography.css
├── content/                    # Synced copy of docs/content (prebuild)
└── public/                     # Static assets
```

### Component layers

| Layer | Responsibility | Examples |
|-------|----------------|----------|
| **Pages** | Route entry, metadata, layout shell | `app/corporate/page.tsx` |
| **Sections** | YAML-driven page blocks | `PageSections`, `PageHero`, `CtaBand` |
| **Home** | Homepage-specific compositions | `Hero`, `TrustWall`, `GalleryMasonry` |
| **Layout** | Global chrome | `Header`, `Footer`, `SiteShell` |
| **UI** | Design-system primitives | shadcn `Button`, `Carousel` |
| **Content** | Data loading | `getPage`, `getEntity`, `createContentPage` |

### Data fetching

| Source | Pattern | When |
|--------|---------|------|
| YAML content | Build-time `fs` read via `content/load.ts` | All static page copy, entities |
| Laravel API | `fetch` with `NEXT_PUBLIC_API_URL` | Future: tours, blog CMS, gallery |
| Next.js API | Server Actions / `fetch('/api/enquiries')` | Enquiry forms (MVP) |

Content sync: `pnpm run sync:content` copies `docs/content/` → `frontend/content/` before build.

### Gaps vs target IA (resolved in Phase 8)

| Gap | Resolution |
|-----|------------|
| Legacy Experiences/Discover nav | Replaced with business-first flat nav |
| `/plan` booking hub | Redirect → `/plan-my-journey` |
| `/theme-tour-packages` | Redirect → `/tour-packages` |
| `/destinations` placeholder | Implemented hub + detail routes |
| `/polo-forest` orphan | Redirect → `/destinations/india/polo-forest` |
| Customer login in header | Removed for MVP; Enquire Now utility |
| Booking flow routes | Retained as stubs; not linked in nav |

---

## Backend Architecture

### Framework

| Property | Value |
|----------|-------|
| Framework | Laravel 12 |
| Auth | Laravel Sanctum (admin only MVP) |
| API style | REST JSON, versioned `/api/v1/*` (target) |
| Root | `backend/` |

### Current state

Laravel scaffold exists with default migrations (users, cache, jobs). API routes stub:

- `GET /api/experiences`, `GET /api/experiences/{slug}`
- `POST /api/bookings`, `POST /api/contact`
- `GET /api/blog`

**MVP:** Frontend does not depend on Laravel for enquiries. Backend expansion documented below for Phase 2 CMS.

### Target module layout

```
backend/app/
├── Http/Controllers/Api/
│   ├── EnquiryController.php      # POST /api/enquiries
│   ├── TourController.php         # GET tours (public read)
│   ├── DestinationController.php
│   ├── BlogController.php
│   ├── GalleryController.php
│   └── Admin/                     # Sanctum-protected CRUD
├── Models/
│   ├── Enquiry.php
│   ├── Tour.php
│   ├── Destination.php
│   └── …
└── Services/
    ├── EnquiryNotificationService.php
    └── CloudinaryMediaService.php
```

### Admin auth (MVP scope)

- Sanctum SPA/token auth for `/admin/*` panel (future)
- Roles: `super_admin`, `content_editor`, `sales`
- No public customer registration

---

## Database Schema

PostgreSQL recommended. Enquiry-first with **future booking fields reserved** (nullable, not exposed in MVP UI).

### Core tables

#### `enquiries`

| Column | Type | Notes |
|--------|------|-------|
| id | UUID / bigint | PK |
| type | enum | `general`, `corporate_rfp`, `education_rfp`, `plan_journey` |
| status | enum | `new`, `contacted`, `qualified`, `closed` |
| name | string | Required |
| email | string | Required |
| phone | string | Required |
| company | string | Nullable |
| destination | string | Nullable |
| departure_from | string | Nullable |
| group_size | string | Nullable |
| date_start, date_end | date | Nullable |
| trip_type | string | Nullable — wizard selection |
| objectives | text | Nullable |
| metadata | jsonb | Event types, budget, package tier, UTM |
| consent | boolean | GDPR/DPDP |
| created_at, updated_at | timestamps | |

#### `tours` (packages)

| Column | Type | Notes |
|--------|------|-------|
| id, slug | | Unique slug |
| title, summary, description | text | |
| theme_id | FK | Links to theme/pillar |
| destination_id | FK | Nullable |
| duration_label | string | e.g. "Weekend" |
| price_from | decimal | Display only MVP — no checkout |
| is_published | boolean | |
| hero_media_id | FK | Cloudinary |
| **booking_enabled** | boolean | Default false — reserved |
| created_at, updated_at | | |

#### `destinations`

| Column | Type | Notes |
|--------|------|-------|
| id, slug | | e.g. `polo-forest` |
| name, region | string | `india` / `international` |
| state_or_country | string | |
| summary | text | |
| themes | jsonb | Theme slug array |
| hero_media_id | FK | |

#### `itineraries`

| Column | Type | Notes |
|--------|------|-------|
| id | | |
| tour_id | FK | |
| day_number | int | |
| title, description: | text | |
| sort_order | int | |

#### Content modules

| Table | Purpose |
|-------|---------|
| `blog_posts` | slug, title, body, category, published_at |
| `gallery_items` | category, cloudinary_id, alt, sort |
| `testimonials` | quote, author, segment, rating |
| `faqs` | question, answer, category, sort |
| `partners`, `clients` | Logo, name, segment |
| `awards` | Title, year, badge media |
| `settings` | Key-value site config |

#### Reserved for Phase 2 booking

| Table | Notes |
|-------|-------|
| `bookings` | tour_id, customer_id, dates, status — **not exposed MVP** |
| `customers` | Auth-linked — **not exposed MVP** |
| `payments` | Gateway refs — **not exposed MVP** |

### Indexes

- `enquiries(status, created_at DESC)`
- `tours(slug)`, `tours(is_published, theme_id)`
- `destinations(region, slug)`
- `blog_posts(slug, published_at DESC)`

---

## API Specification

### Public (no auth)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/enquiries` | Unified enquiry submission |
| GET | `/api/tours` | Published tour list (filters: theme, region) |
| GET | `/api/tours/{slug}` | Tour detail + itinerary |
| GET | `/api/destinations` | Destination catalogue |
| GET | `/api/destinations/{region}/{slug}` | Destination detail |
| GET | `/api/blog` | Paginated posts |
| GET | `/api/blog/{slug}` | Post detail |
| GET | `/api/gallery` | Gallery by category |
| GET | `/api/testimonials` | Segment-filtered |
| GET | `/api/faqs` | FAQ list |

#### POST `/api/enquiries` — request body

```json
{
  "type": "general | corporate_rfp | education_rfp | plan_journey",
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string?",
  "destination": "string?",
  "departure_from": "string?",
  "group_size": "string?",
  "date_start": "YYYY-MM-DD?",
  "date_end": "YYYY-MM-DD?",
  "trip_type": "string?",
  "objectives": "string?",
  "metadata": {},
  "consent": true
}
```

**Response 201:**

```json
{ "ok": true, "message": "Thank you — we will respond within 48 hours." }
```

**MVP implementation:** `frontend/src/app/api/enquiries/route.ts` — validates, emails via Resend, optional WhatsApp webhook.

### Admin (Sanctum)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Issue token |
| GET/POST/PUT/DELETE | `/api/admin/enquiries` | Enquiry CRUD |
| CRUD | `/api/admin/tours` | Tour management |
| CRUD | `/api/admin/destinations` | Destination management |
| CRUD | `/api/admin/blog`, `/gallery`, `/faqs` | Content modules |
| POST | `/api/admin/media` | Cloudinary signed upload |

---

## Authentication

| Actor | MVP | Phase 2 |
|-------|-----|---------|
| Public visitor | None | None for browse/enquire |
| Admin | Sanctum (backend) | Full admin panel |
| Customer | **Not implemented** | Optional for booking |

---

## Media (Cloudinary)

| Concern | Approach |
|---------|----------|
| Upload | Admin-only signed uploads via Laravel |
| Delivery | `next/image` with Cloudinary loader (future) or Unsplash placeholders (MVP) |
| Transformations | `f_auto,q_auto,w_*` on CDN URLs |
| Alt text | Required on all `<Image>` — from CMS or content YAML |

**Env:** `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

---

## SEO Architecture

| Concern | Implementation |
|---------|----------------|
| Metadata | `generateMetadata()` per page from YAML `seo` block |
| Canonical | `metadata.alternates.canonical` per route |
| Sitemap | `app/sitemap.ts` (future) — static routes + CMS slugs |
| robots | `app/robots.ts` — allow public, disallow `/api`, `/admin` |
| Structured data | JSON-LD: Organization, LocalBusiness, FAQPage (where applicable) |
| Internal linking | YAML `seo.internalLinks` drives footer/section cross-links |

---

## Performance Architecture

| Target | Approach |
|--------|----------|
| Lighthouse ≥ 90 | Static generation, `next/image`, font subsetting |
| JS budget | CSS-first motion; Framer tree-shaken; no Lenis |
| Images | WebP/AVIF via Next Image; remotePatterns configured |
| Fonts | `next/font` — Inter + display face |
| Caching | Vercel edge; `revalidate` for future API-backed pages |

---

## Accessibility Architecture

| Requirement | Implementation |
|-------------|----------------|
| Landmarks | `<header>`, `<main>`, `<footer>`, `<nav aria-label>` |
| Focus | Visible focus rings (`--focus-ring` token) |
| Motion | `prefers-reduced-motion` disables carousel auto-advance |
| Forms | Labels, `aria-invalid`, error announcements |
| Touch targets | Min 44×44px on interactive controls |
| Skip link | SiteShell skip-to-main (target) |

---

## Environment Variables

### Frontend (`frontend/.env.example`)

```bash
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Enquiry notifications (MVP)
RESEND_API_KEY=
RFP_FROM_EMAIL=hello@polo-safari.in
RFP_NOTIFY_EMAIL=Chirag@polo-safari.in
WHATSAPP_NOTIFY_PHONE=919408510911
WHATSAPP_WEBHOOK_URL=

# Media (Phase 2)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Backend (`backend/.env.example` — existing + additions)

```bash
FRONTEND_URL=http://localhost:3000
DB_CONNECTION=pgsql
DB_DATABASE=polo_safari
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SANCTUM_STATEFUL_DOMAINS=localhost:3000
```

---

## CI/CD Outline

### GitHub Actions (`.github/workflows/ci.yml` — target)

```yaml
# On push/PR to main:
# 1. frontend: pnpm install → lint → tsc → build
# 2. backend: composer install → phpunit → pint
# 3. Optional: sync content validation against JSON schema
```

### Deployment

| Service | Target | Trigger |
|---------|--------|---------|
| Frontend | Vercel | Push to `main` |
| Backend | Hostinger VPS (Docker) | Manual / tagged release |
| Database | Managed PostgreSQL on VPS | Migrations on deploy |

### Docker (backend — target)

```dockerfile
# php-fpm + nginx + postgres compose
# artisan migrate --force on container start
```

---

## Migration Path: Next.js Enquiries → Laravel

1. Deploy Laravel `EnquiryController` + `enquiries` migration
2. Point `NEXT_PUBLIC_API_URL` to production API
3. Update frontend forms to POST to `${API_URL}/enquiries` (or keep Next.js route as BFF proxy = requireAuth proxy)
4. Retire `/api/rfp/corporate` after unified endpoint verified
5. Admin panel reads from shared PostgreSQL

---

## Related Documents

| Document | Path |
|----------|------|
| Content architecture | `docs/content/00-CONTENT-ARCHITECTURE.md` |
| Design system | `docs/ui/00-ui-design-system.md` |
| Motion system | `docs/ui/03-motion-system-architecture.md` |
| Homepage wireframe | `docs/ux-wireframes/02-homepage.md` |

---

**Phase 7 status:** Complete — architecture documented and mapped to `frontend/` + `backend/` scaffolds.
