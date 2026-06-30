# Polo Safari — UX Wireframe System
## Step 1: Global Foundation & Navigation

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Foundation, IA, component inventory, navigation system  
**Next step:** Step 2 — Homepage wireframe  

---

## Decisions Log

Confirmed product and platform decisions that lock IA, navigation, and taxonomy across all wireframe steps.

| # | Decision | Foundation impact |
|---|----------|-------------------|
| 1 | **Full online booking** | Sitemap includes `/plan/book/[slug]/*` multi-step flow; experience detail CTAs route to booking |
| 2 | **UPI/card at checkout** | Booking flow step 4 includes payment options; trust copy referenced in conversion paths |
| 3 | **Login required for booking** | `/account/login` gate before checkout; profile menu states documented in D6 |
| 4 | **English-only at launch** | `WF-NAV-LANG` shows EN active; Hindi/Gujarati reserved for future i18n (D8) |
| 5 | **Experience taxonomy (confirmed)** | **Five pillars:** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. **Popular Destinations** is a geographic grouping only — not a sixth category. URL slugs: `heritage`, `education`, `corporate`, `family`, `adventure`. No additional categories. |
| 6 | **Corporate & education RFP separate** | Pillar landings `/corporate` and `/education` host custom proposal forms — distinct from standard booking |
| 7 | **Trust signal priority** | Reviews, stats, and awards components in global inventory (`WF-CARD-REVIEW`, `WF-CARD-STAT`, `WF-AWARD-GRID`) |

---

## Workspace Exploration Report

### What exists in the repository today

| Area | Finding |
|------|---------|
| **Application code** | No Next.js app, routes, or page components implemented yet. The workspace is a planning/starter-kit repository. |
| **Documentation** | `@@Docs/PoloSafari_AI_StarterKit_Part1–3` contains project constitution, brief, vision bible, database schema, API spec, design system outline, admin modules, and sprint roadmap. |
| **Business context** | Polo Safari is an experiential travel company focused on **Polo Forest** — heritage, educational, corporate, and adventure tourism. |
| **Primary goals** | Increase enquiries, build trust, showcase experiences, support future mobile app. |
| **Data model signals** | `tours`, `tour_categories`, `itineraries`, `bookings`, `customers`, `galleries`, `blogs`, `testimonials`, `faqs`, `users`, `roles`, `settings`. |
| **API signals** | `GET /api/tours`, `GET /api/tours/{slug}`, `POST /api/bookings`, `GET /api/blogs`, `POST /api/contact`. |
| **Experience pillars** | **Confirmed five pillars:** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Popular Destinations is geographic grouping only. |
| **Homepage emotion arc** | Wonder → Trust → Curiosity → Action. |
| **Design tokens (placeholder)** | 8pt spacing, 12px radius, Inter typography, subtle motion. |
| **Sprint plan** | Foundation → Public Website → Admin → Booking Flow → SEO → Launch. |

### Implications for Step 1 IA

- Public site IA is inferred from schema, API, admin modules, and vision bible — not from existing routes.
- **Booking vs enquiry** resolved: full online booking with login gate; general enquiry remains at `/plan/enquire` for non-transactional queries.
- **Admin panel** (`/admin/*`) is architecturally separate; excluded from public wireframe pages but noted in full sitemap.
- Constitution says "mobile first"; wireframe brief says "desktop-first." This spec uses **desktop-first layout documentation** with explicit responsive breakpoints — implementation should still honour mobile-first CSS and accessibility.

---

# PART A — Global UX Foundation

---

## A1. Wireframe Conventions

### Section Name
Wireframe Conventions & Visual Language

### Purpose
Establish a shared grayscale vocabulary so every page wireframe in Steps 2+ is consistent, implementation-agnostic, and readable by designers, developers, and stakeholders without brand distraction.

### Wireframe Layout (Legend)

```
CONVENTION LEGEND
─────────────────────────────────────────────────────────────────
█  Solid fill      Primary CTA button / filled control
▓  Medium gray     Image/media placeholder, hero media block
░  Light gray      Secondary surface, card background, input field
─  Line             Divider, border, table row
│  Line             Vertical rule, column gutter indicator
┌┐ └┘              Container / card boundary
○  Circle           Avatar, icon button, map pin, step indicator
[ICON]              Icon placeholder — never draw pictograms
[TEXT]              Typography placeholder — label the content role
[IMG]               Photography/video placeholder — always labeled
[LOGO]              Brand mark placeholder
...                 Truncated content / carousel continuation
```

### Grid
N/A — meta section. Applies to all subsequent wireframes.

### Components
| Symbol | Component ID | Usage |
|--------|--------------|-------|
| `[LOGO]` | `WF-LOGO` | Header, footer, auth screens |
| `[TEXT: H1]` | `WF-TYPE-H1` | Page title, hero headline |
| `[TEXT: H2–H4]` | `WF-TYPE-H*` | Section headings |
| `[TEXT: Body]` | `WF-TYPE-BODY` | Paragraphs, descriptions |
| `[TEXT: Caption]` | `WF-TYPE-CAP` | Meta, dates, breadcrumbs |
| `[IMG: 16:9]` | `WF-MEDIA-169` | Hero, tour cards |
| `[IMG: 1:1]` | `WF-MEDIA-11` | Thumbnails, avatars |
| `░ Input` | `WF-INPUT` | Text fields, selects |
| `█ Button` | `WF-BTN-PRIMARY` | Primary action |
| `░ Button` | `WF-BTN-SECONDARY` | Secondary action |
| `─ ─ ─` | `WF-DIVIDER` | Section separation |
| `┌ Card ┐` | `WF-CARD` | Content grouping |

### Hierarchy
1. Structural boundaries (page → section → container → component)
2. Content role labels (`[TEXT: …]`) over decorative boxes
3. Interactive elements always labeled with action intent

### CTA Position
N/A — convention layer.

### Responsive Behaviour
All ASCII wireframes show **desktop (≥1280px content)** unless tagged `[MOBILE]`. Mobile variants documented per component in Part D.

### Accessibility Notes
- Every `[ICON]` must have a parallel text label in implementation (`aria-label` or visible text).
- Wireframe labels (`[TEXT: …]`) map to semantic HTML headings and landmarks in build phase.
- Focus order follows visual reading order: header → main → footer.
- Minimum touch target in implementation: **44×44px** (documented here for handoff).

### Future Motion Placeholder
`[MOTION: …]` tags may appear in page wireframes (Step 2+). Step 1 defines the tag vocabulary:

| Tag | Meaning |
|-----|---------|
| `[MOTION: fade-in]` | Opacity entrance on scroll or load |
| `[MOTION: slide-up]` | Vertical reveal for section content |
| `[MOTION: stagger]` | Sequential reveal for card grids |
| `[MOTION: parallax-subtle]` | Hero depth — must not harm vestibular users; respect `prefers-reduced-motion` |

---

## A2. Grid System

### Section Name
12-Column Responsive Grid

### Purpose
Provide a single spatial system for layout alignment across all Polo Safari pages — calm, editorial, Apple/Airbnb/Stripe-grade restraint.

### Wireframe Layout

```
VIEWPORT (max 1440px centred)
├──────────────────────────────────────────────────────────────────────────┤
│ margin auto                                                              │
│  ┌──────────────────────── CONTENT 1280px ────────────────────────────┐  │
│  │ col1 │ col2 │ col3 │ col4 │ col5 │ col6 │ col7 │ col8 │ col9 │...│12│  │
│  │  ◄────────────── 8px gutter between columns ──────────────────►    │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│  ◄── 80px side padding at 1440 ( (1440-1280)/2 ) ──►                     │
└──────────────────────────────────────────────────────────────────────────┘

COMMON SPANS (desktop)
┌────────────────────────────────────────────────────────────┐
│ Full bleed within content    │ 12 cols                     │
│ Standard content block       │ 8 cols centred (cols 3–10)  │
│ Sidebar + main               │ 4 + 8  OR  3 + 9             │
│ Two-column equal             │ 6 + 6                        │
│ Three-column cards           │ 4 + 4 + 4                    │
│ Four-column cards            │ 3 + 3 + 3 + 3                │
│ Narrow form                  │ 6 cols centred (cols 4–9)    │
└────────────────────────────────────────────────────────────┘
```

### Grid

| Token | Value |
|-------|-------|
| Max viewport | 1440px |
| Content width | 1280px |
| Columns | 12 |
| Gutter | 16px (2 × 8px base unit) |
| Margin (at max) | 80px each side |
| Base unit | **8px** — all spacing multiples of 8 |

### Spacing Scale (8px base)

| Token | px | Use |
|-------|-----|-----|
| `space-1` | 8 | Tight inline gaps, icon padding |
| `space-2` | 16 | Input padding, card inner gap |
| `space-3` | 24 | Component internal spacing |
| `space-4` | 32 | Between related elements |
| `space-6` | 48 | Section sub-blocks |
| `space-8` | 64 | Section padding (mobile) |
| `space-10` | 80 | Section padding (desktop) |
| `space-12` | 96 | Hero vertical breathing room |
| `space-16` | 128 | Major section separation |

### Components
- `WF-GRID-CONTAINER` — 1280px centred wrapper
- `WF-GRID-12` — 12-column CSS grid / flex equivalent
- `WF-GRID-FULL-BLEED` — edge-to-edge within 1440 cap (heroes, galleries)

### Hierarchy
Page → `WF-GRID-CONTAINER` → Section (`<section>`) → Row → Column span → Component

### CTA Position
Grid does not dictate CTA placement; CTAs align to column edges of their parent span (typically left-aligned in editorial blocks, right-aligned in nav).

### Responsive Behaviour

| Breakpoint | Width | Columns | Content | Notes |
|------------|-------|---------|---------|-------|
| `xl` | ≥1280px | 12 | 1280px | Primary wireframe target |
| `lg` | 1024–1279px | 12 | fluid ~960–1248 | Reduce side margin |
| `md` | 768–1023px | 8 effective | fluid | 2-col cards → 2-up; sidebars stack |
| `sm` | 480–767px | 4 effective | fluid | Single column; nav → drawer |
| `xs` | <480px | 4 effective | 16px side padding | Full single column |

### Accessibility Notes
- Content reflows at 320px width without horizontal scroll.
- Zoom to 200%: grid collapses to single column; no loss of functionality.
- Use CSS logical properties (`margin-inline`) for RTL readiness (language placeholder).

### Future Motion Placeholder
`[MOTION: grid-stagger]` — card grids animate per-row on scroll; disabled when `prefers-reduced-motion: reduce`.

---

## A3. Typography Placeholders

### Section Name
Typography Scale (Placeholder)

### Purpose
Define content hierarchy without final brand fonts. Implementation references design tokens (`Inter` per starter kit); wireframes use role labels only.

### Wireframe Layout

```
DESKTOP TYPE HIERARCHY (placeholder sizes for dev handoff)

[TEXT: Display]     Polo Forest Awaits          ← Hero only, 1 per page
[TEXT: H1]          Page Title                  ← 1 per page
[TEXT: H2]          Section Heading
[TEXT: H3]          Subsection / Card title
[TEXT: H4]          Label heading, footer column title
[TEXT: Body Lg]     Lead paragraph, intro copy
[TEXT: Body]        Standard paragraph
[TEXT: Body Sm]     Secondary descriptions
[TEXT: Caption]     Dates, meta, breadcrumbs, legal
[TEXT: Overline]    EYEBROW — EXPERIENCES
[TEXT: Button]      Plan Your Visit
[TEXT: Link]        View all tours →
[TEXT: Price]       From ₹X,XXX per person
[TEXT: Stat]        12+ Years  ·  50K+ Guests
```

### Grid
Type blocks align to column spans. Display/H1 typically span 8–12 cols in hero; body text max **65ch** (~7 cols) for readability.

### Components
| ID | Role | Max lines (wireframe guidance) |
|----|------|----------------------------------|
| `WF-TYPE-DISPLAY` | Hero headline | 2–3 |
| `WF-TYPE-H1` | Page title | 1–2 |
| `WF-TYPE-H2` | Section title | 1–2 |
| `WF-TYPE-H3` | Card/block title | 2 |
| `WF-TYPE-BODY` | Body copy | As needed |
| `WF-TYPE-OVERLINE` | Category eyebrow | 1 |
| `WF-TYPE-PRICE` | Pricing snippet | 1 |

### Hierarchy
Display → H1 → H2 → H3 → H4 → Body → Caption. Never skip heading levels in implementation.

### CTA Position
`[TEXT: Button]` adjacent to supporting copy; primary CTA below lead paragraph in heroes.

### Responsive Behaviour
- Display scales down one step at `md`.
- Body remains 16px minimum in implementation (never below 16px on mobile).

### Accessibility Notes
- Real `<h1>`–`<h6>` in build; one H1 per page.
- Line height ≥1.5 for body text.
- Link text must be descriptive ("View Polo Forest Heritage Tour" not "Click here").

### Future Motion Placeholder
`[MOTION: text-reveal]` — hero headline word/line reveal; must have non-animated fallback visible on first paint for LCP and reduced-motion users.

---

## A4. Surface & Elevation (Grayscale)

### Section Name
Wireframe Surfaces

### Purpose
Differentiate layers using gray values only — no shadows required in wireframes; optional `─` border notation.

### Wireframe Layout

```
SURFACE STACK (light theme wireframe)

████████████████  Level 0 — Page background        #F5F5F5
░░░░░░░░░░░░░░░░  Level 1 — Card / section surface  #EBEBEB
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  Level 2 — Input / inset            #E0E0E0
████████████████  Level 3 — Primary button          #4A4A4A
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Media placeholder                #CFCFCF

DARK THEME (placeholder — theme switch in nav)
Reversed stack; same structural levels, no hue.
```

### Grid
N/A

### Components
`WF-SURFACE-0` through `WF-SURFACE-3`, `WF-MEDIA-PLACEHOLDER`

### Hierarchy
Background → section → card → control

### CTA Position
Primary buttons use darkest fill (`WF-SURFACE-3`); secondary use bordered `WF-SURFACE-1`.

### Responsive Behaviour
Unchanged across breakpoints.

### Accessibility Notes
- Implementation contrast ratio ≥4.5:1 for body text, ≥3:1 for large text (WCAG AA).
- Wireframe grays are approximate; final tokens must be validated.

### Future Motion Placeholder
`[MOTION: theme-transition]` — 200ms cross-fade on theme switch; instant switch when `prefers-reduced-motion`.

---

# PART B — Site Architecture & Information Architecture

---

## B1. Full Sitemap

### Section Name
Site Map & Page Relationships

### Purpose
Define every URL, parent-child relationship, and entry/exit points for the public experiential platform and adjacent systems.

### Wireframe Layout (Sitemap Tree)

```
polo-safari.in
│
├── / .......................................................... HOME
│
├── EXPERIENCES (core product)
│   ├── /experiences ........................................... All experiences index
│   ├── /experiences/[slug] .................................... Experience detail (tour)
│   ├── /experiences/category/[slug] ........................... Category listing
│   │     ├── heritage
│   │     ├── education
│   │     ├── corporate
│   │     ├── family
│   │     └── adventure
│   └── /experiences/[slug]/itinerary .......................... Full itinerary (optional deep link)
│
├── DISCOVER (story & trust)
│   ├── /polo-forest ........................................... Destination story — Polo Forest
│   ├── /about ................................................... About Polo Safari
│   ├── /gallery ................................................. Photo / media gallery
│   ├── /blog ...................................................... Blog index
│   │   └── /blog/[slug] ......................................... Article detail
│   └── /reviews ................................................. Testimonials / social proof
│
├── PLAN (conversion)
│   ├── /plan .................................................... Trip planner landing / enquiry hub
│   ├── /plan/enquire .............................................. General enquiry form
│   ├── /plan/book/[experience-slug] ............................... Booking flow (if transactional)
│   │     ├── .../dates ............................................ Step: dates & group size
│   │     ├── .../details .......................................... Step: traveller details
│   │     ├── .../review ........................................... Step: review & policies
│   │     └── .../confirmation ..................................... Step: confirmation
│   └── /faq ....................................................... Frequently asked questions
│
├── CORPORATE & GROUPS (pillar landing pages — may funnel to /experiences/category/corporate)
│   ├── /corporate ................................................. Corporate & MICE landing
│   ├── /education ................................................. Schools & ecology programs
│   ├── /family .................................................... Family experiences landing
│   └── /adventure ................................................. Adventure & trekking landing
│
├── ACCOUNT (authenticated — placeholder)
│   ├── /account ................................................... Dashboard redirect
│   ├── /account/bookings .......................................... Booking history
│   ├── /account/profile ........................................... Profile settings
│   └── /account/login ............................................. Login / register
│
├── CONTACT
│   └── /contact ................................................... Contact page + map
│
├── LEGAL
│   ├── /legal/privacy ............................................. Privacy policy
│   ├── /legal/terms ............................................... Terms of service
│   └── /legal/cancellation ........................................ Cancellation & refund policy
│
├── UTILITY
│   ├── /search .................................................... Search results
│   ├── /404 ....................................................... Not found
│   └── /sitemap.xml ............................................... SEO sitemap (non-UI)
│
└── ADMIN (separate app shell — not public wireframe scope)
    └── /admin/* ................................................... CMS per starter kit modules
          Dashboard · Bookings · Tours · Categories · Gallery · Blog
          · Testimonials · FAQ · Users · Roles · Settings · Analytics
```

### Grid
N/A — architectural diagram.

### Components
N/A — page-level inventory in Part C.

### Hierarchy

```
                    ┌─────────────┐
                    │    HOME     │
                    └──────┬──────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │ EXPERIENCES │ │  DISCOVER   │ │    PLAN     │
    └──────┬──────┘ └──────┬──────┘ └──────┬──────┘
           │               │               │
           └───────────────┼───────────────┘
                           ▼
                  ┌─────────────────┐
                  │ Experience Detail│
                  └────────┬────────┘
                           ▼
              ┌────────────┴────────────┐
              ▼                         ▼
       ┌─────────────┐           ┌─────────────┐
       │ Enquire     │           │ Book Flow   │
       └─────────────┘           └─────────────┘
```

### CTA Position
Primary site-wide CTA: **"Plan Your Visit"** → `/plan` or `/plan/enquire`.  
Secondary: **"Browse Experiences"** → `/experiences`.  
Experience detail: **"Check Availability"** / **"Send Enquiry"** → booking or enquiry path.

### Responsive Behaviour
URL structure is device-agnostic. Mobile deep links and app-ready routes use same paths for future mobile app parity.

### Accessibility Notes
- Unique `<title>` and H1 per route.
- Breadcrumbs on all pages deeper than level 2 (e.g. Experience detail, booking steps).
- Booking flow steps announced via step indicator with `aria-current="step"`.

### Future Motion Placeholder
`[MOTION: page-transition]` — subtle fade between route changes; progress indicator in multi-step booking.

---

## B2. URL Structure & Naming Conventions

### Section Name
URL Taxonomy

### Purpose
SEO-friendly, human-readable, consistent slugs aligned with API resources.

### Wireframe Layout

```
PATTERN                          EXAMPLE
────────────────────────────────────────────────────────
/                                /
/{section}                       /experiences
/{section}/{slug}                /experiences/polo-forest-night-safari
/{section}/category/{slug}       /experiences/category/education
/plan/book/{slug}/{step}         /plan/book/polo-forest-night-safari/dates
/blog/{slug}                     /blog/monsoon-ecology-at-polo-forest
/legal/{page}                    /legal/privacy

SLUG RULES
- lowercase, hyphen-separated
- match API tour slug field
- no trailing slashes (canonical)
- locale prefix reserved: /en/, /hi/ (future — see clarifying questions)
```

### Grid
N/A

### Components
N/A

### Hierarchy
Section → resource → sub-resource

### CTA Position
N/A

### Responsive Behaviour
N/A

### Accessibility Notes
- `hreflang` placeholders for future i18n.
- Skip links target `#main-content` on every page template.

### Future Motion Placeholder
N/A

---

## B3. Page Relationship Matrix

### Section Name
Cross-Linking & Entry Points

### Purpose
Document how users arrive and where they are sent next.

| From Page | Primary exits | CTA |
|-----------|---------------|-----|
| Home | Experiences, Polo Forest story, Plan | Plan Your Visit |
| Experiences index | Category filters, detail cards | Filter / View experience |
| Experience detail | Book, Enquire, Related experiences | Check Availability |
| Category landing | Filtered experience list | View experience |
| Polo Forest | Experiences tagged location, Gallery | Explore experiences |
| Blog | Article detail | Read article |
| Reviews | Experience detail, Plan | Book / Enquire |
| Plan hub | Enquire form, Experience picker | Start enquiry |
| Booking flow | Confirmation, FAQ, Contact | Confirm booking |
| Corporate/Education/Family/Adventure | Category experiences, Plan | Request proposal |
| Contact | Plan, FAQ | Send message |
| Account | Bookings, Profile | View booking |

### Grid / Components / Hierarchy
See matrix above.

### Responsive Behaviour
Same relationships on all devices; mobile may use bottom sheet for related experiences.

### Accessibility Notes
Related links use descriptive anchor text including experience name.

### Future Motion Placeholder
`[MOTION: card-hover-lift]` — 2px translate on experience cards; no motion on touch devices.

---

# PART C — Component Hierarchy (Wireframe Inventory)

---

## C1. Global Shell Components

### Section Name
App Shell & Layout Primitives

### Purpose
Reusable building blocks that wrap every page.

### Wireframe Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ WF-SHELL-HEADER (sticky)                                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  WF-SHELL-MAIN  (#main-content)                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │  WF-BREADCRUMB (conditional)                                           │  │
│  │  WF-PAGE-HERO or WF-PAGE-HEADER                                        │  │
│  │  WF-SECTION × n                                                        │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ WF-SHELL-FOOTER                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

WF-SECTION ANATOMY
┌──────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]                                             │
│ [TEXT: H2]                                                    │
│ [TEXT: Body]                                                  │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐              │
│ │  WF-CARD    │ │  WF-CARD    │ │  WF-CARD    │              │
│ └─────────────┘ └─────────────┘ └─────────────┘              │
│ [TEXT: Link] View all →                                        │
└──────────────────────────────────────────────────────────────┘
```

### Grid
Shell spans full viewport width; inner content constrained to 1280px except full-bleed heroes.

### Components (Inventory)

#### Layout
| ID | Name | Description |
|----|------|-------------|
| `WF-SHELL-HEADER` | Global header | Logo, nav, utilities, CTA |
| `WF-SHELL-FOOTER` | Global footer | Links, contact, legal, newsletter |
| `WF-SHELL-MAIN` | Main landmark | Wraps page content |
| `WF-SECTION` | Content section | Vertical padding 64–80px desktop |
| `WF-CONTAINER` | 1280px wrapper | Centred grid parent |
| `WF-BREADCRUMB` | Breadcrumb trail | Home › Experiences › Slug |
| `WF-PAGE-HERO` | Full hero | Media + headline + CTA |
| `WF-PAGE-HEADER` | Simple header | Title + intro, no full bleed media |
| `WF-SKIP-LINK` | Skip to content | Visually hidden until focus |

#### Navigation (see Part D)
| ID | Name |
|----|------|
| `WF-NAV-PRIMARY` | Main nav links |
| `WF-NAV-MEGA` | Experiences mega menu |
| `WF-NAV-DROPDOWN` | Discover dropdown |
| `WF-NAV-MOBILE-DRAWER` | Mobile menu |
| `WF-NAV-SEARCH` | Search trigger + panel |
| `WF-NAV-PROFILE` | Account menu |
| `WF-NAV-UTIL` | Theme + language |

#### Content blocks
| ID | Name |
|----|------|
| `WF-CARD-EXPERIENCE` | Tour card |
| `WF-CARD-STORY` | Blog card |
| `WF-CARD-REVIEW` | Testimonial card |
| `WF-CARD-STAT` | Trust metric |
| `WF-CARD-FEATURE` | Icon + title + body |
| `WF-MEDIA-BLOCK` | Image/video placeholder |
| `WF-GALLERY-GRID` | Masonry or uniform grid |
| `WF-ITINERARY-TIMELINE` | Day/step timeline |
| `WF-FAQ-ACCORDION` | Expandable FAQ |
| `WF-MAP-PLACEHOLDER` | Location map block |

#### Forms & conversion
| ID | Name |
|----|------|
| `WF-FORM-ENQUIRY` | General enquiry |
| `WF-FORM-CONTACT` | Contact form |
| `WF-FORM-BOOKING-STEP` | Multi-step booking |
| `WF-FORM-NEWSLETTER` | Email capture |
| `WF-INPUT-TEXT` | Text input |
| `WF-INPUT-SELECT` | Select / dropdown |
| `WF-INPUT-DATE` | Date picker placeholder |
| `WF-INPUT-CHECKBOX` | Checkbox / consent |

#### UI primitives
| ID | Name |
|----|------|
| `WF-BTN-PRIMARY` | Primary button |
| `WF-BTN-SECONDARY` | Secondary button |
| `WF-BTN-GHOST` | Text button |
| `WF-BTN-ICON` | Icon-only `[ICON]` |
| `WF-BADGE` | Tag (e.g. "Family", "2 Days") |
| `WF-TABS` | Tab list |
| `WF-PAGINATION` | Page numbers |
| `WF-STEPPER` | Booking progress |
| `WF-TOAST` | Confirmation message |
| `WF-MODAL` | Dialog overlay |
| `WF-EMPTY-STATE` | No results |
| `WF-SKELETON` | Loading placeholder |

### Hierarchy

```
WF-SHELL
├── WF-SHELL-HEADER
│   ├── WF-LOGO
│   ├── WF-NAV-PRIMARY
│   │   ├── WF-NAV-MEGA
│   │   └── WF-NAV-DROPDOWN
│   └── WF-NAV-UTIL
│       ├── WF-NAV-SEARCH
│       ├── WF-NAV-PROFILE
│       ├── Theme toggle
│       ├── Language selector
│       └── WF-BTN-PRIMARY (Plan Your Visit)
├── WF-SHELL-MAIN
│   └── WF-SECTION
│       └── WF-CARD-*
└── WF-SHELL-FOOTER
```

### CTA Position
Global primary CTA lives in header (right zone) and repeats in footer + page heroes.

### Responsive Behaviour
- `WF-SECTION` padding: 48px mobile, 80px desktop.
- Card grids: 4→2→1 columns.

### Accessibility Notes
- One `<main>` per page.
- Cards: entire card clickable OR explicit button — pick one pattern sitewide.
- Forms: visible labels, error summary at top on submit failure.

### Future Motion Placeholder
`[MOTION: skeleton-pulse]` on loading states only; never on static wireframes.

---

# PART D — Navigation System

---

## D1. Desktop Header (Default)

### Section Name
Desktop Global Header — Default State

### Purpose
Persistent wayfinding, discovery, conversion, and account access. Calm, horizontal, Stripe/Linear-inspired density.

### Wireframe Layout

```
DESKTOP HEADER (height 72px, sticky)
Cols:  1    2    3    4    5    6    7    8    9   10   11   12
     ┌────────────────────────────────────────────────────────────┐
     │[LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About    │
     │                                    [ICON] [ICON] [EN▾] [██] │
     │                                    Search Prof  Lang  CTA   │
     └────────────────────────────────────────────────────────────┘
      ◄─ cols 1-2 ─►◄────────── cols 3-8 nav ──────►◄─ cols 9-12 ─►

Sticky condensed (scroll > 80px):
     ┌────────────────────────────────────────────────────────────┐
     │[LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About │
     │                              [ICON] [ICON] [EN▾] [██ Plan] │
     └────────────────────────────────────────────────────────────┘
     Height → 64px; subtle bottom border ─
```

### Grid
- Logo: col 1–2 (or fixed ~140px)
- Primary nav: cols 3–8, horizontal flex, 24px gap
- Utilities + CTA: cols 9–12, right-aligned, 16px gap

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-THEME-TOGGLE`, `WF-BTN-PRIMARY`

### Hierarchy
Logo (home link) → Primary nav → Utilities → Primary CTA (highest emphasis)

### CTA Position
**"Plan Your Visit"** — far right, `WF-BTN-PRIMARY`, always visible. Does not hide on scroll.

### Responsive Behaviour
- At `lg`: hide "About" from bar → move to Discover dropdown.
- At `md` and below: switch to mobile header (D4).

### Accessibility Notes
- `<nav aria-label="Primary">` for main links.
- Sticky header does not trap focus; `position: sticky` with keyboard-scroll test.
- CTA contrast meets AA.
- Dropdowns: `aria-expanded`, `aria-haspopup`, Escape closes, focus trap in mega menu while open.

### Future Motion Placeholder
`[MOTION: header-condense]` — height 72→64px over 200ms on scroll; instant when reduced-motion.

---

## D2. Experiences Mega Menu

### Section Name
Mega Menu — Experiences

### Purpose
Expose all experience categories and featured tours without overwhelming the primary nav bar.

### Wireframe Layout

```
TRIGGER: "Experiences ▾" — click or hover (implementation decision; keyboard: Enter/Space)

┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H4] Browse by type          │  [TEXT: H4] Featured experiences       │
│ ─────────────────────────────────  │  ───────────────────────────────────  │
│ Heritage & Culture                 │  ┌──────────┐ ┌──────────┐ ┌──────────┐│
│ Education & Ecology                │  │[IMG]     │ │[IMG]     │ │[IMG]     ││
│ Corporate & MICE                   │  │[TEXT:H3] │ │[TEXT:H3] │ │[TEXT:H3] ││
│ Family Getaways                    │  │[TEXT:Cap]│ │[TEXT:Cap]│ │[TEXT:Cap]││
│ Adventure & Trekking               │  └──────────┘ └──────────┘ └──────────┘│
│ ─────────────────────────────────  │                                          │
│ [TEXT: Link] View all experiences →│  [TEXT: Link] Corporate programs →      │
└──────────────────────────────────────────────────────────────────────────────┘
 Panel spans content width 1280px; aligns below header; 2-col: 4cols + 8cols
```

### Grid
- Left column: 4 cols — category links list
- Right column: 8 cols — 3 featured `WF-CARD-EXPERIENCE` mini cards

### Components
`WF-NAV-MEGA`, `WF-CARD-EXPERIENCE` (compact), `WF-TYPE-H4`, `WF-TYPE-LINK`

### Hierarchy
Categories (text links) → Featured cards (visual priority) → View-all escape hatch

### CTA Position
Panel footer links: "View all experiences" (left), "Corporate programs" (right).

### Responsive Behaviour
Not shown on mobile — replaced by accordion in drawer (D4).

### Accessibility Notes
- `role="menu"` or navigation region with list semantics.
- Focus moves into panel on open; Tab cycles within; Shift+Tab returns to trigger.
- Hover-only open is insufficient — must support click and keyboard.

### Future Motion Placeholder
`[MOTION: mega-fade-slide]` — panel opacity + 8px Y translate, 180ms ease-out.

---

## D3. Discover Dropdown

### Section Name
Dropdown — Discover

### Purpose
Group secondary editorial/trust pages without cluttering top-level nav.

### Wireframe Layout

```
TRIGGER: "Discover ▾"

                    ┌─────────────────────────────┐
                    │ Polo Forest Story           │
                    │ Gallery                     │
                    │ Stories & Insights          │
                    │ Guest Reviews               │
                    │ FAQ                         │
                    │ ─────────────────────────── │
                    │ About Polo Safari           │
                    └─────────────────────────────┘
                     Width ~240px; align left under trigger
```

### Grid
Single column dropdown; 8px vertical padding per item.

### Components
`WF-NAV-DROPDOWN`, list of `WF-TYPE-LINK` items

### Hierarchy
Destination story first → social proof → support → about

### CTA Position
No primary CTA inside dropdown; links only. **Stories & Insights** → `/blog`; **Guest Reviews** → `/reviews`; **FAQ** → `/faq`.

### Responsive Behaviour
Becomes accordion section in mobile drawer.

### Accessibility Notes
- `aria-expanded` on trigger.
- Arrow keys navigate items.
- Active page: `aria-current="page"`.

### Future Motion Placeholder
`[MOTION: dropdown-fade]` — 150ms opacity.

---

## D4. Mobile Navigation (Drawer)

### Section Name
Mobile Header & Full-Screen Drawer

### Purpose
Full wayfinding on viewports `< md` with thumb-friendly targets and clear CTA.

### Wireframe Layout

```
MOBILE HEADER (height 64px, sticky)
┌────────────────────────────────────────┐
│ [LOGO]              [ICON] [ICON] [≡] │
│                     Search Prof Menu   │
└────────────────────────────────────────┘

DRAWER OPEN (covers viewport; scrim behind)
┌────────────────────────────────────────┐
│ [LOGO]                            [×]  │
│ ─────────────────────────────────────│
│ [ICON] Search experiences, stories...│
│ ─────────────────────────────────────│
│ ▼ Experiences                          │
│     Heritage & Culture                 │
│     Education & Ecology                │
│     Corporate & MICE                   │
│     Family Getaways                    │
│     Adventure & Trekking               │
│     View all experiences               │
│ ▼ Discover                             │
│     Polo Forest Story                  │
│     Gallery · Stories · Reviews        │
│     FAQ · About                        │
│ Polo Forest                            │
│ Plan Your Trip                         │
│ ─────────────────────────────────────│
│ [ICON] Language: English ▾             │
│ [ICON] Theme: Light ▾                  │
│ ┌────────────────────────────────────┐ │
│ │ ████  Plan Your Visit              │ │
│ └────────────────────────────────────┘ │
│ Contact · Login                        │
└────────────────────────────────────────┘
```

### Grid
Single column; 16px horizontal padding; full-width CTA at bottom sticky zone.

### Components
`WF-NAV-MOBILE-DRAWER`, `WF-NAV-SEARCH` (inline field), accordions, `WF-BTN-PRIMARY`

### Hierarchy
Search → Primary nav accordions → Utilities → CTA → Secondary links

### CTA Position
**Plan Your Visit** — full-width button, fixed above drawer bottom safe area.

### Responsive Behaviour
- Drawer: default `< md` (768px).
- Focus trap while open; body scroll locked.

### Accessibility Notes
- `aria-modal="true"`, `role="dialog"` on drawer.
- Close on Escape and scrim click.
- Accordion: `aria-controls`, expanded state per section.
- Touch targets ≥44px.

### Future Motion Placeholder
`[MOTION: drawer-slide-in]` — translateX from right 300ms; reduced-motion: instant appear.

---

## D5. Search

### Section Name
Global Search — Trigger, Overlay & Results

### Purpose
Find experiences, stories, and FAQ answers quickly.

### Wireframe Layout

```
DESKTOP — Search trigger [ICON] in header utilities

SEARCH OVERLAY (desktop: centred panel ~640px width)
┌──────────────────────────────────────────────────────────────┐
│ [ICON]  Search Polo Forest experiences, stories...    [×] │
│ ────────────────────────────────────────────────────────────│
│ [TEXT: Caption] Popular searches                             │
│   Night safari   Corporate retreat   School trip   Monsoon   │
│ ────────────────────────────────────────────────────────────│
│ (After typing "polo")                                        │
│ [TEXT: Caption] Experiences                                  │
│   Polo Forest Heritage Walk                                  │
│   Polo Forest Night Safari                                   │
│ [TEXT: Caption] Stories                                      │
│   Ecology of Polo Forest                                     │
│ [TEXT: Link] View all results for "polo" →                   │
└──────────────────────────────────────────────────────────────┘

SEARCH RESULTS PAGE  /search?q=polo
┌──────────────────────────────────────────────────────────────┐
│ [TEXT: H1] Search results for "polo"                         │
│ [TEXT: Caption] 12 results                                   │
│ ┌─ WF-TABS: All | Experiences | Stories | FAQ ─────────────┐ │
│ │ Result item: title + snippet + type badge                │ │
│ │ Result item ...                                          │ │
│ └──────────────────────────────────────────────────────────┘ │
│ WF-PAGINATION                                                │
└──────────────────────────────────────────────────────────────┘
```

### Grid
- Overlay: 8 cols centred (cols 3–10)
- Results page: 8-col result list + optional 4-col filters (future)

### Components
`WF-NAV-SEARCH`, `WF-INPUT-TEXT`, `WF-TABS`, `WF-BADGE`, `WF-PAGINATION`, `WF-EMPTY-STATE`

### Hierarchy
Input → suggestions → grouped results → full results page

### CTA Position
"View all results" link in overlay; results page has no separate CTA except result links.

### Responsive Behaviour
Mobile: search inline at top of drawer OR full-screen search view.

### Accessibility Notes
- `role="combobox"` + `aria-autocomplete="list"` on input.
- Live region announces result count.
- Keyboard: Up/Down to navigate suggestions, Enter to select.

### Future Motion Placeholder
`[MOTION: search-overlay-fade]` — backdrop + panel fade 200ms.

---

## D6. Profile & Account Menu

### Section Name
Profile Dropdown (Authenticated / Guest)

### Purpose
Account access without dedicating nav space to auth flows.

### Wireframe Layout

```
GUEST — trigger [ICON] Profile
                    ┌─────────────────────────┐
                    │ Login                   │
                    │ Create account          │
                    │ ─────────────────────── │
                    │ [TEXT: Caption]         │
                    │ Track enquiries & bookings│
                    └─────────────────────────┘

AUTHENTICATED
                    ┌─────────────────────────┐
                    │ ○ [TEXT: Name]          │
                    │   [TEXT: Email]         │
                    │ ─────────────────────── │
                    │ My bookings             │
                    │ Profile settings        │
                    │ ─────────────────────── │
                    │ Log out                 │
                    └─────────────────────────┘
```

### Grid
Dropdown ~260px; right-aligned under trigger.

### Components
`WF-NAV-PROFILE`, `WF-AVATAR` (○ circle placeholder), `WF-NAV-DROPDOWN`

### Hierarchy
Identity block → primary account links → logout

### CTA Position
Guest: "Login" is first actionable item (not styled as primary button — header CTA remains Plan Your Visit).

### Responsive Behaviour
Mobile: profile links in drawer footer zone.

### Accessibility Notes
- Trigger: `aria-label="Account menu"`.
- Authenticated: avatar + name visible where space allows.

### Future Motion Placeholder
`[MOTION: none]` — keep instant for utility menu.

---

## D7. Theme Switch Placeholder

### Section Name
Theme Toggle (Light / Dark)

### Purpose
Placeholder for dark mode per design system outline; wireframe only — no color specification.

### Wireframe Layout

```
DESKTOP UTILITY BAR
  [ICON]  ← toggle switch placeholder (sun/moon not drawn; label only)

  [TEXT: Caption] Theme
  ┌──────○──────┐
  │ Light  Dark │   ← segmented control placeholder
  └─────────────┘

MOBILE (in drawer)
  [ICON] Theme: Light ▾
```

### Grid
Fits in utility cluster; 44px touch target.

### Components
`WF-THEME-TOGGLE` — segmented control or icon toggle

### Hierarchy
Utility-level; subordinate to Search and Profile.

### CTA Position
N/A — not a conversion CTA.

### Responsive Behaviour
Full label in drawer; icon-only on desktop with `aria-label`.

### Accessibility Notes
- `aria-pressed` or `role="switch"` + `aria-checked`.
- Respect `prefers-color-scheme` as default before user override.
- Persist preference in localStorage.

### Future Motion Placeholder
`[MOTION: theme-crossfade]` — 200ms on document background; content instant swap.

---

## D8. Language Selector Placeholder

### Section Name
Language Selector (i18n Placeholder)

### Purpose
Reserve UX space for future localization without designing full translated wireframes in Step 1.

### Wireframe Layout

```
DESKTOP
  [EN ▾]  ← shows current locale code

DROPDOWN
  ┌─────────────────────┐
  │ ● English           │
  │ ○ हिन्दी (Hindi)    │
  │ ○ Gujarati (future) │
  └─────────────────────┘

MOBILE (drawer)
  [ICON] Language: English ▾
```

### Grid
Utility cluster; dropdown ~200px.

### Components
`WF-NAV-LANG`, `WF-NAV-DROPDOWN`, radio list

### Hierarchy
Subordinate utility; does not affect primary nav structure.

### CTA Position
N/A

### Responsive Behaviour
Drawer shows full language name; desktop may show ISO code only.

### Accessibility Notes
- `hreflang` on localized routes when i18n ships.
- Language change announces via live region.
- Do not rely on flags alone — always show language name.

### Future Motion Placeholder
`[MOTION: none]` — page reload or soft navigation on locale change (TBD).

---

## D9. Sticky Behaviour Summary

### Section Name
Sticky Header & Scroll States

### Purpose
Unify scroll interaction rules across templates.

### Wireframe Layout

```
SCROLL POSITION STATES

Top (0px)
├── Header 72px, transparent or surface-0
├── Mega menu allowed on hover/click
└── Full nav labels visible

Scrolled (>80px)
├── Header 64px, surface-1 + bottom border
├── Mega menu still functional
└── CTA remains visible

Scroll down (future enhancement)
├── Optional: hide header on scroll down, reveal on scroll up
└── DEFAULT FOR WIREFRAMES: always visible (accessibility-safe default)

ANCHOR OFFSET
└── Sticky header height + 16px padding for # anchor links
```

### Grid
N/A

### Components
`WF-SHELL-HEADER` state variants: `default`, `scrolled`, `mobile`

### Hierarchy
Sticky header z-index above content; below modals and mobile drawer.

### CTA Position
Always visible in sticky header — never auto-hide CTA alone.

### Responsive Behaviour
Mobile: always sticky 64px; no auto-hide in v1 wireframes.

### Accessibility Notes
- `scroll-padding-top` matches header height.
- Avoid scroll-jacking in hero sections.

### Future Motion Placeholder
`[MOTION: header-hide-reveal]` — optional Phase 2; off by default; disabled for reduced-motion and keyboard users.

---

## D10. Global Footer

### Section Name
Site Footer

### Purpose
Secondary navigation, trust, contact, legal, and newsletter capture.

### Wireframe Layout

```
FOOTER (surface-1, padding 80px top / 48px bottom)
┌──────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                                                                      │
│  [TEXT: Body] Experiential travel at Polo Forest. Heritage, education,       │
│               corporate events, and adventure for every traveller.           │
│                                                                              │
│  [TEXT: H4]      [TEXT: H4]       [TEXT: H4]        [TEXT: H4]               │
│  Experiences     Discover         Plan              Contact                  │
│  Heritage        Polo Forest      Plan your visit   Phone placeholder        │
│  Education       Gallery          Enquire           Email placeholder        │
│  Corporate       Stories          FAQ               Location line            │
│  Family          Reviews          Cancellation      [ICON] social placeholders│
│  Adventure       About                                                         │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────── │
│  [TEXT: H4] Stay updated                                                     │
│  [TEXT: Body] Stories, seasonal offers, and Polo Forest news.                │
│  ┌──────────────────────────────┐  ┌──────────────┐                          │
│  │ Email address                │  │ █ Subscribe  │                          │
│  └──────────────────────────────┘  └──────────────┘                          │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────── │
│  [TEXT: Caption] © 2026 Polo Safari · Privacy · Terms · Sitemap              │
│  [ICON] Language: EN ▾    [ICON] Theme toggle                                │
└──────────────────────────────────────────────────────────────────────────────┘

Grid: 4 equal columns (3 cols each) + full-width newsletter + full-width legal
```

### Grid
- Brand block: 3 cols
- Link columns: 3 cols × 3
- Newsletter: 12 cols
- Legal bar: 12 cols

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-FORM-NEWSLETTER`, `WF-TYPE-H4`, `WF-TYPE-LINK`, social icon placeholders

### Hierarchy
Brand story → link columns → newsletter → legal

### CTA Position
**Subscribe** — secondary button in newsletter row. No competing primary CTA in footer (header CTA is primary sitewide).

### Responsive Behaviour
- `md`: 2×2 link grid
- `sm`: single column accordion optional for link groups

### Accessibility Notes
- `<footer>` landmark with `aria-label="Site footer"`.
- Newsletter: label on email input, inline error text.
- Social links: `aria-label` per platform.

### Future Motion Placeholder
`[MOTION: none]` for footer content.

---

# Appendix — Step 2 Handoff Checklist

**Next step:** Step 4 — Experience detail page  

---

Before Homepage wireframe (Step 2), confirm clarifying questions below.

| Item | Status |
|------|--------|
| Grid & spacing tokens | Defined |
| Wireframe conventions | Defined |
| Full sitemap | Defined |
| Component inventory | Defined |
| Desktop header + mega menu | Defined |
| Mobile drawer | Defined |
| Search, profile, theme, language | Defined |
| Footer | Defined |
| Decisions log (taxonomy, booking, auth) | **Confirmed** |

---

**Document path:** `docs/ux-wireframes/01-global-foundation-and-navigation.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** `@@Docs/PoloSafari_AI_StarterKit_Part1–3` workspace exploration
