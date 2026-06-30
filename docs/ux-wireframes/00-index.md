# Polo Safari — UX Wireframe System
## Master Index

**Version:** 0.1.0  
**Status:** Complete wireframe specification (grayscale only)  
**Location:** `docs/ux-wireframes/`  
**Last updated:** Step 13 — Admin Dashboard  

---

## Table of Contents

| Step | Document | Route(s) | Scope |
|------|----------|----------|-------|
| 0 | [00-index.md](./00-index.md) | — | Master index (this file) |
| 1 | [01-global-foundation-and-navigation.md](./01-global-foundation-and-navigation.md) | All public | IA, grid, components, navigation |
| 2 | [02-homepage.md](./02-homepage.md) | `/` | Homepage — 24 sections (premium editorial UX v0.2.0) |
| 3 | [03-experience-listing.md](./03-experience-listing.md) | `/experiences`, `/experiences/category/[slug]` | Experience index & category filters |
| 4 | [04-experience-detail.md](./04-experience-detail.md) | `/experiences/[slug]` | Product detail + booking widget |
| 5 | [05-corporate.md](./05-corporate.md) | `/corporate` | Corporate retreats RFP landing |
| 6 | [06-educational-tours.md](./06-educational-tours.md) | `/education` | Schools & ecology RFP landing |
| 7 | [07-destinations.md](./07-destinations.md) | `/destinations`, `/polo-forest` | Destination catalogue & Polo Forest hub |
| 8 | [08-gallery.md](./08-gallery.md) | `/gallery` | Photo / video / drone gallery |
| 9 | [09-about.md](./09-about.md) | `/about` | Brand story, team, awards |
| 10 | [10-blogs.md](./10-blogs.md) | `/blog`, `/blog/[slug]` | Blog index & article detail |
| 11 | [11-contact.md](./11-contact.md) | `/contact` | Contact, map, inquiry form |
| 12 | [12-booking-flow.md](./12-booking-flow.md) | `/plan/book/[slug]/*` | 4-step booking + login gate |
| 13 | [13-admin-dashboard.md](./13-admin-dashboard.md) | `/admin/*` | Laravel admin CMS & ops |
| 14 | [14-reference-design-analysis.md](./14-reference-design-analysis.md) | — | Reference design synthesis & UX direction |

---

## Decisions Summary

Locked product and platform decisions applied across all wireframe steps.

| # | Decision | Implication |
|---|----------|-------------|
| 1 | **Full online booking** | Experience detail and homepage CTAs route to `/plan/book/[slug]/dates`; admin Bookings module is primary ops surface |
| 2 | **UPI/card at checkout** | Booking Step 4 supports UPI (GPay, PhonePe, Paytm) and card; trust copy on conversion paths |
| 3 | **Login required for booking** | `/account/login?returnUrl=…` gate before booking Step 1; contact and RFP forms do not require login |
| 4 | **English-only at launch** | All UI copy in English; `WF-NAV-LANG` shows EN active; Hindi/Gujarati reserved |
| 5 | **Five pillars locked (Option A)** | Heritage · Educational Tours · Corporate Retreats · Family · Adventure. Popular Destinations is geographic only — not a sixth category. Slugs: `heritage`, `education`, `corporate`, `family`, `adventure` |
| 6 | **Corporate & education RFP separate** | `/corporate#rfp` and `/education#rfp` — distinct from standard booking and general `/contact` inquiry |
| 7 | **Trust signal priority** | Reviews, stats, awards (`WF-CARD-REVIEW`, `WF-CARD-STAT`, `WF-AWARD-GRID`) on homepage, about, experience detail |
| 8 | **Grayscale wireframes** | ASCII conventions only — no brand colour; `[TEXT: …]` role labels |
| 9 | **Polo Forest / Gujarat labels** | Geographic copy anchors Polo Forest, Idar, Gujarat; destinations separate from pillars |
| 10 | **Grid & viewport** | 12-column grid · 8px spacing unit · 1440px viewport · 1280px content max · desktop-first documentation, mobile variants per section |
| 11 | **Blog route canonical** | Public blog at `/blog` and `/blog/[slug]`; legacy `/stories` and `/stories/[slug]` redirect 301 to canonical paths at build time |

---

## Routing Decisions

| Route | Canonical path | Notes |
|-------|----------------|-------|
| Blog index | `/blog` | Nav/footer may display "Stories & Insights" or "Blog" as label — URL is always `/blog` |
| Blog article | `/blog/[slug]` | e.g. `/blog/monsoon-ecology-at-polo-forest` |
| Legacy redirect | `/stories` → `/blog` | **301** permanent redirect for bookmarks and old links |
| Legacy redirect | `/stories/[slug]` → `/blog/[slug]` | **301** permanent redirect; preserve slug |

Admin CMS remains at `/admin/blogs`; published content serves on `/blog/*`.

---

## Page Route Map

### Public site

```
polo-safari.in
├── /                              → Step 2 Homepage
├── /experiences                   → Step 3 Listing
├── /experiences/[slug]            → Step 4 Detail
├── /experiences/category/[slug]   → Step 3 Category
├── /corporate                     → Step 5 Corporate RFP
├── /education                     → Step 6 Education RFP
├── /destinations                  → Step 7 Destinations index
├── /polo-forest                   → Step 7 Polo Forest hub
├── /gallery                       → Step 8 Gallery
├── /about                         → Step 9 About
├── /blog                          → Step 10 Blog index
├── /blog/[slug]                   → Step 10 Article detail (brief)
├── /reviews                       → Referenced Step 1/2 (not standalone wireframe)
├── /contact                       → Step 11 Contact
├── /plan                          → Step 1 Plan hub
├── /plan/enquire                  → Step 1 General enquiry
├── /plan/book/[slug]/dates        → Step 12 Booking Step 1
├── /plan/book/[slug]/details      → Step 12 Booking Step 2
├── /plan/book/[slug]/review       → Step 12 Booking Step 3
├── /plan/book/[slug]/payment      → Step 12 Booking Step 4
├── /plan/book/[slug]/confirmation → Step 12 Confirmation
├── /faq                           → Step 1 / homepage FAQ preview
├── /account/login                 → Step 12 Login gate
├── /account/bookings              → Step 1 Account
├── /legal/*                       → Step 1 Legal pages
└── /search                        → Step 1 Search results
```

### Admin (Laravel)

```
/admin
├── /admin/dashboard (or /admin)   → Step 13 Dashboard
├── /admin/bookings                → Step 13 Bookings
├── /admin/experiences             → Step 13 Experiences CRUD
├── /admin/categories              → Step 13 Categories (5 pillars locked)
├── /admin/gallery                 → Step 13 Gallery
├── /admin/blogs                   → Step 13 Blogs → public /blog
├── /admin/users                   → Step 13 Users
├── /admin/reviews                 → Step 13 Reviews / testimonials
├── /admin/settings                → Step 13 Settings
├── /admin/media                   → Step 13 Media library
└── /admin/analytics               → Step 13 Analytics
```

### Conversion path summary

```
Standard bookable experience:
  Detail → Login → Book Step 1–4 → Confirmation

Corporate MICE / offsite:
  /corporate → RFP form (no login)

School / ecology program:
  /education → RFP form (no login)

General question:
  /contact → inquiry form (no login)
```

---

## Component Index Reference

Canonical component IDs defined in [Step 1 Part C](./01-global-foundation-and-navigation.md#part-c--component-hierarchy-wireframe-inventory). Step-specific IDs are documented in each step file.

### Global shell

| ID | Usage |
|----|-------|
| `WF-SHELL-HEADER` | Sticky public header |
| `WF-SHELL-FOOTER` | Global footer |
| `WF-SHELL-MAIN` | Main landmark `#main-content` |
| `WF-BREADCRUMB` | Breadcrumb trail |
| `WF-PAGE-HERO` | Full-bleed hero |
| `WF-PAGE-HEADER` | Simple page title block |
| `WF-SECTION` | Vertical content section |
| `WF-GRID-CONTAINER` | 1280px centred wrapper |

### Navigation

| ID | Usage |
|----|-------|
| `WF-NAV-PRIMARY` | Main nav links |
| `WF-NAV-MEGA` | Experiences mega menu |
| `WF-NAV-DROPDOWN` | Discover dropdown |
| `WF-NAV-MOBILE-DRAWER` | Mobile menu |
| `WF-NAV-SEARCH` | Search trigger |
| `WF-NAV-PROFILE` | Account menu (login states) |
| `WF-NAV-LANG` | Language selector (EN active) |

### Content cards

| ID | Usage |
|----|-------|
| `WF-CARD-EXPERIENCE` | Tour / experience card |
| `WF-CARD-STORY` | Blog / story card |
| `WF-CARD-REVIEW` | Testimonial card |
| `WF-CARD-STAT` | Trust metric |
| `WF-CARD-FEATURE` | Icon + title + body |
| `WF-AWARD-GRID` | Awards / certifications |

### Forms & conversion

| ID | Usage |
|----|-------|
| `WF-FORM-ENQUIRY` | General enquiry |
| `WF-FORM-CONTACT-GENERAL` | Contact page inquiry (Step 11) |
| `WF-FORM-RFP-CORPORATE` | Corporate proposal (Step 5) |
| `WF-FORM-RFP-EDUCATION` | Education proposal (Step 6) |
| `WF-FORM-BOOKING-STEP` | Booking step forms (Step 12) |
| `WF-FORM-NEWSLETTER` | Email capture |
| `WF-STEPPER` | Booking progress (Step 12) |
| `WF-PAYMENT-UPI` / `WF-PAYMENT-CARD` | Checkout (Step 12) |

### Gallery (Step 8)

| ID | Usage |
|----|-------|
| `WF-GALLERY-FILTER-BAR` | Media type filter |
| `WF-GALLERY-CATEGORY-TAGS` | Pillar + destination chips |
| `WF-GALLERY-GRID` | Masonry grid |
| `WF-GALLERY-TILE` | Base media tile |
| `WF-GALLERY-LIGHTBOX` | Full-screen modal |

### Booking (Step 12)

| ID | Usage |
|----|-------|
| `WF-BOOKING-SHELL-HEADER` | Minimal booking header |
| `WF-BOOKING-STEPPER` | 4-step indicator |
| `WF-BOOKING-SUMMARY` | Sticky price sidebar |
| `WF-BOOKING-CONFIRMATION` | Success screen |

### Admin (Step 13)

| ID | Usage |
|----|-------|
| `WF-ADMIN-SHELL` | Sidebar + main layout |
| `WF-ADMIN-SIDEBAR` | Admin navigation |
| `WF-ADMIN-DATA-TABLE` | CRUD tables |
| `WF-ADMIN-FILTER-BAR` | List filters |
| `WF-ADMIN-STAT-WIDGET` | Dashboard KPIs |
| `WF-ADMIN-FORM-CRUD` | Create/edit forms |
| `WF-ADMIN-MEDIA-PICKER` | Asset selector |

### UI primitives

| ID | Usage |
|----|-------|
| `WF-BTN-PRIMARY` / `WF-BTN-SECONDARY` / `WF-BTN-GHOST` | Buttons |
| `WF-INPUT-*` | Form inputs |
| `WF-FAQ-ACCORDION` | Expandable FAQ |
| `WF-CHIP-FILTER` | Filter chips |
| `WF-PAGINATION` | Page navigation |
| `WF-EMPTY-STATE` | No results |
| `WF-MAP-PLACEHOLDER` | Map embed block |
| `WF-MODAL` / `WF-TOAST` | Overlays & feedback |

---

## Wireframe Conventions (Quick Reference)

From Step 1 § A1:

```
█  Primary CTA / filled control
▓  Image / media placeholder
░  Secondary surface / input field
[TEXT: H1]  Typography role label
[ICON]      Icon placeholder — label in implementation
[IMG: 16:9] Media aspect placeholder
[MOBILE]    Mobile-specific layout note
```

- **Viewport:** 1440px design, 1280px content
- **Grid:** 12 columns, 8px base spacing, 24px gutters
- **No Lorem Ipsum** — use Polo Forest / Gujarat realistic labels
- **Accessibility:** skip links, landmarks, `aria-current`, 44×44px touch targets in build

---

## Document Status

| Step | File | Status |
|------|------|--------|
| 1 | `01-global-foundation-and-navigation.md` | Complete |
| 2 | `02-homepage.md` | Complete |
| 3 | `03-experience-listing.md` | Complete |
| 4 | `04-experience-detail.md` | Complete |
| 5 | `05-corporate.md` | Complete |
| 6 | `06-educational-tours.md` | Complete |
| 7 | `07-destinations.md` | Complete |
| 8 | `08-gallery.md` | Complete |
| 9 | `09-about.md` | Complete |
| 10 | `10-blogs.md` | Complete |
| 11 | `11-contact.md` | Complete |
| 12 | `12-booking-flow.md` | Complete |
| 13 | `13-admin-dashboard.md` | Complete |
| 14 | `14-reference-design-analysis.md` | Complete |
| 0 | `00-index.md` | Complete |

**System status:** All 15 documents present. Ready for design system token mapping and Laravel/frontend implementation.

---

## Related Repository Docs

| Path | Content |
|------|---------|
| `@@Docs/PoloSafari_AI_StarterKit_Part1/docs/01_PROJECT_BRIEF.md` | Business goals |
| `@@Docs/PoloSafari_AI_StarterKit_Part1/docs/02_VISION_AND_EXPERIENCE_BIBLE.md` | Emotion arcs |
| `@@Docs/PoloSafari_AI_StarterKit_Part2/docs/07_ADMIN_PANEL.md` | Admin module list |
| `@@Docs/PoloSafari_AI_StarterKit_Part2/docs/08_DESIGN_SYSTEM.md` | Design tokens |
| `@@Docs/PoloSafari_AI_StarterKit_Part2/docs/06_API_SPECIFICATION.md` | API endpoints |

---

**Document path:** `docs/ux-wireframes/00-index.md`  
**Prepared for:** Polo Safari experiential travel platform — full wireframe system handoff
