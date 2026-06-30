# Polo Safari — Laravel 12 API

REST API backend for the Polo Safari public website and future admin CMS.

## Prerequisites

- PHP 8.3+
- Composer 2.x
- PostgreSQL 14+ (recommended) or SQLite for local bootstrap

## Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

### Database

**PostgreSQL (recommended):**

1. Create database: `createdb polo_safari` (or via pgAdmin)
2. Set credentials in `.env` (`DB_*` variables)
3. Run migrations:

```bash
php artisan migrate
```

**SQLite (quick local fallback):**

Uncomment `DB_CONNECTION=sqlite` in `.env` and comment out PostgreSQL settings, then:

```bash
touch database/database.sqlite
php artisan migrate
```

## Development server

```bash
php artisan serve
```

API base URL: `http://localhost:8000/api`

## API routes (scaffold)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/experiences` | List experiences (placeholder JSON) |
| GET | `/api/experiences/{slug}` | Experience detail (placeholder) |
| POST | `/api/bookings` | Create booking (validates, no persistence yet) |
| GET | `/api/blog` | List blog posts (placeholder) |
| POST | `/api/contact` | Submit contact inquiry (validates, no persistence yet) |

## CORS

Configured in `config/cors.php` for `FRONTEND_URL` (default `http://localhost:3000`).

Set in `.env`:

```
FRONTEND_URL=http://localhost:3000
```

## Health check

```
GET /up
```

## Next steps

- Database models and migrations per `@@Docs/.../05_DATABASE_SCHEMA.md`
- Full CRUD and admin panel at `/admin/*`
- Authentication (Sanctum) for booking and accounts
