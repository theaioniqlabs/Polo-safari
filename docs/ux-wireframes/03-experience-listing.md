# Polo Safari — UX Wireframe System
## Step 3: Experience Listing Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Experience listing (`/experiences`, `/experiences/category/[slug]`) — filterable catalogue of **standard bookable experiences**  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md)  
**Next step:** Step 4 — Experience detail page  

---

## Decisions Log

Inherited from Step 2; decisions that directly shape this page.

| # | Decision | Listing page impact |
|---|----------|---------------------|
| 1 | **Full online booking** | Every bookable card exposes **Book Now** → `/plan/book/[slug]/dates` |
| 2 | **UPI/card at checkout** | Trust micro-copy on cards: "Pay securely via UPI or card" (caption, not headline) |
| 3 | **Login required for booking** | Guest **Book Now** → `/account/login?returnUrl=...`; caption "Login required to book" |
| 4 | **English-only** | All filter labels, sort options, and empty-state copy in English |
| 5 | **Confirmed taxonomy (Option A)** | Category filter uses five pillars (Heritage, Educational Tours, Corporate Retreats, Family, Adventure). **Popular Destinations** is location grouping only — not a filter category |
| 6 | **Corporate & education RFP separate** | **Excluded** from default listing — only standard instant-book experiences; corporate/education products route via pillar landings and RFP forms |
| 7 | **Trust signals** | Compact trust strip below page header; per-card rating snippet where available |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Slugs: `heritage`, `education`, `corporate`, `family`, `adventure`. **Popular Destinations** is geographic grouping via the Location filter — not a sixth category. Corporate Retreats and Educational Tours categories appear in navigation and pillar landings; RFP-only custom programs are **hidden** from this listing (DEFAULT). Only standard bookable experiences appear in the card grid.

### Scope boundary

| Included on this page | Excluded (separate flows) |
|-----------------------|---------------------------|
| Standard bookable experiences | Custom corporate MICE proposals |
| Filter, search, sort, paginate | School group RFP submissions |
| Book Now + View detail CTAs | Bulk enquiry forms |
| Destination + pillar filters | Admin/CMS views |

---

## Page Overview

### Routes & templates

| Property | Value |
|----------|-------|
| Primary URL | `/experiences` |
| Category URL | `/experiences/category/[slug]` — e.g. `/experiences/category/heritage` |
| Query params | `?category=&location=&duration=&price_min=&price_max=&difficulty=&age=&q=&sort=&page=&date=&guests=` |
| Template | `WF-SHELL` + listing layout (breadcrumb, header, sidebar filters, results grid) |
| H1 | Page title in header — "All experiences" or category name |
| Emotion arc | Curiosity → Comparison → Action |

### Layout anatomy (desktop)

```
┌─ WF-SHELL-HEADER ─────────────────────────────────────────────────────────────┐
├─ WF-BREADCRUMB ──────────────────────────────────────────────────────────────┤
├─ WF-PAGE-HEADER (title, intro, trust strip) ─────────────────────────────────┤
├─ WF-LISTING-TOOLBAR (search, results count, sort, mobile filter trigger) ────┤
├─ 3-col sidebar filters │ 9-col results grid (WF-CARD-EXPERIENCE × n) ───────┤
├─ WF-PAGINATION ──────────────────────────────────────────────────────────────┤
├─ WF-EMPTY-STATE (conditional — no results) ────────────────────────────────┤
└─ WF-SHELL-FOOTER ────────────────────────────────────────────────────────────┘
```

### Section order (documented below)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Page Header & Breadcrumb
3.  Search (listing toolbar)
4.  Filters — sidebar (Category, Location, Duration, Price, Difficulty, Age)
5.  Results Count
6.  Sorting
7.  Experience Cards (results grid)
8.  Pagination
9.  Empty State (conditional)
10. Mobile Filter Drawer (overlay — mobile/tablet only)
11. Footer (WF-SHELL-FOOTER)
```

### Listing-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-LISTING-LAYOUT` | Sidebar + main grid wrapper |
| `WF-LISTING-TOOLBAR` | Search, count, sort, filter trigger row |
| `WF-FILTER-SIDEBAR` | Desktop sticky filter column |
| `WF-FILTER-GROUP` | Collapsible filter section (category, location, etc.) |
| `WF-FILTER-CHIPS` | Active filter pill row with clear-all |
| `WF-FILTER-DRAWER` | Mobile full-screen / bottom-sheet filter panel |
| `WF-SORT-SELECT` | Sort dropdown control |
| `WF-RESULTS-COUNT` | "Showing X of Y experiences" text |
| `WF-CARD-EXPERIENCE-LIST` | Listing variant of experience card (compact meta row) |
| `WF-LISTING-TRUST-STRIP` | Inline stats + rating micro-trust below header |

---

# Experience Listing Sections

---

## 1. Navigation

### Section Name
Global Header — Listing Page Default State

### Purpose
Persistent wayfinding on the catalogue page. Header uses **scrolled/surface** state by default (no transparent hero). Highlights **Experiences** as active nav item. Profile menu reflects login-required booking.

### Wireframe Layout

```
LISTING PAGE — HEADER (surface-1, 64px scrolled state)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
│                              Search  Prof  Lang   WF-BTN-PRIMARY              │
└──────────────────────────────────────────────────────────────────────────────┘

ACTIVE STATE: "Experiences" link — underline or bold (grayscale emphasis)
MEGA MENU: unchanged from Step 1 § D2 — category links pre-filter this page

(See Step 1 § D1, D4 for mobile drawer; Step 2 §1 for auth dropdown states)
```

### Grid
- Full viewport; inner `WF-GRID-CONTAINER` 1280px
- Logo: cols 1–2 | Nav: cols 3–8 | Utilities + CTA: cols 9–12

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-DROPDOWN`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-THEME-TOGGLE`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Primary nav (Experiences active) → Search → Profile → Language → Theme → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; does not compete with per-card Book Now in results grid.

### Responsive Behaviour
- `≥1280px`: Full desktop header (Step 1 D1)
- `<768px`: Mobile header + drawer (Step 1 D4)
- Mega menu category clicks navigate to `/experiences/category/[slug]` with filters applied

### Accessibility Notes
- `aria-current="page"` on Experiences nav link when on `/experiences` or category child routes
- Skip link → `#main-content`
- Search overlay (header) and listing search (§4) are distinct — different `aria-label`s

### Future Motion Placeholder
`[MOTION: header-condense]` — if user scrolls past header zone; `[MOTION: none]` on filter apply

---

## 2. Page Header & Breadcrumb

### Section Name
Page Header — Title, Intro & Trust Strip

### Purpose
Orient users to the catalogue scope, confirm category context when filtered, and surface **trust** (stats, rating) early in the comparison journey.

### Wireframe Layout

```
BREADCRUMB (cols 1–12, below header)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Experiences  ›  Heritage & Culture                 │
│                  (category crumb omitted on /experiences index)                 │
└──────────────────────────────────────────────────────────────────────────────┘

PAGE HEADER (WF-PAGE-HEADER, padding-top 32px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  POLO FOREST EXPERIENCES                                     │
│ [TEXT: H1]        All experiences                                              │
│   — OR on category route —                                                     │
│ [TEXT: H1]        Heritage & Culture experiences                               │
│                                                                               │
│ [TEXT: Body]      Browse guided walks, safaris, family weekends, and adventure │
│                   trips at Polo Forest and across Gujarat. Book online — login │
│                   required at checkout.                                        │
│                                                                               │
│ ┌─ WF-LISTING-TRUST-STRIP ──────────────────────────────────────────────────┐│
│ │ [TEXT: Stat] 4.8★ guest rating  │  120+ experiences  │  50,000+ guests     ││
│ │ [TEXT: Link] Read guest reviews →                                           ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘

CATEGORY VARIANT (/experiences/category/adventure)
  Breadcrumb: Home › Experiences › Adventure & Trekking
  H1: Adventure & Trekking experiences
  Body: shorter category-specific intro (2 lines max)
```

### Grid
- Breadcrumb: 12 cols, left-aligned
- Header block: 8 cols (cols 1–8) left-aligned; trust strip spans 12 cols below
- Section padding: 32px top, 24px bottom (tighter than homepage — utility page)

### Components
`WF-BREADCRUMB`, `WF-PAGE-HEADER`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-LISTING-TRUST-STRIP`, `WF-TYPE-STAT`, `WF-TYPE-LINK`, `WF-TYPE-CAP`

### Hierarchy
Breadcrumb → Overline → H1 → Body intro → Trust strip (stats + reviews link)

### CTA Position
**Read guest reviews →** — text link in trust strip → `/reviews`. No primary button in header (cards carry Book Now).

### Responsive Behaviour
- Desktop: 8-col text block
- Mobile: full width; trust strip wraps to 2 lines; breadcrumb may truncate middle crumbs

### Accessibility Notes
- One `<h1>` per page — category name or "All experiences"
- Breadcrumb: `<nav aria-label="Breadcrumb">` with ordered list
- Trust stats: `<dl>` with term/description pairs
- Category page: unique `<title>` — "Heritage Experiences | Polo Safari"

### Future Motion Placeholder
`[MOTION: fade-in]` — header block on route load; `[MOTION: none]` on filter-driven title updates (instant swap)

---

## 3. Search

### Section Name
Listing Search — Toolbar Keyword Field

### Purpose
Allow keyword discovery within the current filter context — experience name, activity type, destination tag. Distinct from global header search (Step 1 D5) but may share component styling.

### Wireframe Layout

```
WF-LISTING-TOOLBAR — search zone (left)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ search field (6 cols of toolbar) ────────────────────────────────────────┐ │
│ │ [ICON]  Search experiences — e.g. night safari, temple walk, camping     │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                               │
│ ACTIVE SEARCH STATE (q=night+safari)                                          │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ [ICON]  night safari                                              [×]    │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│ [TEXT: Caption]  Searching within Adventure & Trekking (when category set)  │
└──────────────────────────────────────────────────────────────────────────────┘

BEHAVIOUR
- Submit on Enter or 400ms debounce after typing stops
- Updates URL ?q= param; preserves other active filters
- Clear [×] resets q param only
```

### Grid
- Toolbar row: 12 cols total
- Search input: 6 cols (cols 1–6) on desktop
- Internal padding: 12px vertical; input height 48px

### Components
`WF-LISTING-TOOLBAR`, `WF-INPUT-TEXT`, `WF-BTN-ICON` (clear), `WF-TYPE-CAP`, `[ICON]` search

### Hierarchy
Search field → Context caption (when scoped) → (results count & sort in same toolbar row — §5, §6)

### CTA Position
No button CTA — implicit submit on Enter. Clear icon is secondary action.

### Responsive Behaviour
- Desktop: 6-col search in toolbar
- Tablet/mobile: full-width search above results; sort and filter trigger on row below

### Accessibility Notes
- `<label>` visually hidden: "Search experiences"
- `role="search"` on form wrapper
- Live region announces "12 results for night safari" after debounced search
- Clear button: `aria-label="Clear search"`

### Future Motion Placeholder
`[MOTION: none]` — instant results update; skeleton cards during fetch (§7)

---

## 4. Filters

### Section Name
Filter Sidebar — Category, Location, Duration, Price, Difficulty, Age

### Purpose
Narrow the catalogue by the six primary dimensions. Desktop: persistent left sidebar. Filters sync to URL query params for shareable/bookmarkable state.

### Wireframe Layout

```
DESKTOP — WF-FILTER-SIDEBAR (3 cols, sticky below header offset)
┌─ WF-FILTER-SIDEBAR ─────────────┐
│ [TEXT: H3]  Filters              │
│ [TEXT: Link]  Clear all filters    │
│ ─────────────────────────────────│
│ ▼ WF-FILTER-GROUP: Category      │
│   [ ] All experiences (default)  │
│   [ ] Heritage & Culture         │
│   [ ] Educational Tours          │
│   [ ] Family Getaways            │
│   [ ] Adventure & Trekking       │
│   (Corporate Retreats hidden —   │
│    RFP-only; link in caption)    │
│   [TEXT: Caption] Corporate       │
│   programs → /corporate          │
│ ─────────────────────────────────│
│ ▼ WF-FILTER-GROUP: Location      │
│   [ ] Polo Forest (Idar)         │
│   [ ] Saputara                   │
│   [ ] Gir                        │
│   [ ] Ahmedabad day trips        │
│   [TEXT: Link] All destinations →│
│ ─────────────────────────────────│
│ ▼ WF-FILTER-GROUP: Duration      │
│   [ ] Half day (≤4 hrs)          │
│   [ ] Full day                   │
│   [ ] 2D/1N                      │
│   [ ] 3+ days                    │
│ ─────────────────────────────────│
│ ▼ WF-FILTER-GROUP: Price         │
│   [TEXT: Caption] Per person     │
│   ┌──────── min ────┐ ┌── max ──┐│
│   │ ░ ₹ 500         │ │ ░ ₹ 15000││
│   └─────────────────┘ └─────────┘│
│   [TEXT: Caption] ──●────────●── │
│        ₹500              ₹15,000  │
│   (dual-handle range slider)     │
│ ─────────────────────────────────│
│ ▼ WF-FILTER-GROUP: Difficulty    │
│   [ ] Easy — suitable for all    │
│   [ ] Moderate — some walking    │
│   [ ] Challenging — trek fitness │
│ ─────────────────────────────────│
│ ▼ WF-FILTER-GROUP: Age           │
│   [ ] All ages                   │
│   [ ] Ages 4+ (family friendly)  │
│   [ ] Ages 12+                   │
│   [ ] Adults 18+ only            │
│ ─────────────────────────────────│
│ ┌──────────────────────────────┐ │
│ │ █ Apply filters (mobile only)│ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘

ACTIVE FILTERS — WF-FILTER-CHIPS (above results grid, 9-col main)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [Heritage ×] [Polo Forest ×] [Full day ×] [₹500–₹5000 ×]  [Clear all]       │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Sidebar: 3 cols (cols 1–3), sticky `top: header height + 16px`
- Main results: 9 cols (cols 4–12)
- Filter group internal gap: 8px between checkboxes
- Sidebar padding: 24px; groups separated by `WF-DIVIDER`

### Components
`WF-LISTING-LAYOUT`, `WF-FILTER-SIDEBAR`, `WF-FILTER-GROUP`, `WF-FILTER-CHIPS`, `WF-INPUT-CHECKBOX`, `WF-INPUT-TEXT` (price min/max), range slider placeholder, `WF-TYPE-H3`, `WF-TYPE-CAP`, `WF-TYPE-LINK`, `WF-BTN-PRIMARY` (mobile apply), `WF-DIVIDER`

### Hierarchy
Filters heading → Clear all → Category → Location → Duration → Price → Difficulty → Age  
Active chips row mirrors applied state above results

### CTA Position
- **Clear all filters** — ghost link at top of sidebar and in chips row
- **Corporate programs →** — caption link to `/corporate` (not a filter value)
- **All destinations →** — link to `/polo-forest` or future destinations index
- Mobile drawer: **Apply filters** primary button (§10)

### Responsive Behaviour
- `≥1024px`: Sidebar visible, sticky
- `768–1023px`: Sidebar hidden; filter trigger opens drawer (§10)
- `<768px`: Drawer only; chips row scrolls horizontally
- Category route pre-checks matching category filter; user may add more filters

### Accessibility Notes
- Each group: `<fieldset>` + `<legend>` (Category, Location, etc.)
- Checkboxes: visible labels; multi-select within groups
- Price slider: keyboard-adjustable; min/max inputs as text fallback
- Filter apply updates live region: "24 experiences match your filters"
- Corporate category intentionally omitted — document in FAQ tooltip or caption

### Future Motion Placeholder
`[MOTION: none]` on checkbox toggle; `[MOTION: slide-down]` — filter group expand/collapse 150ms; disabled when `prefers-reduced-motion`

---

## 5. Results Count

### Section Name
Results Count — Match Summary

### Purpose
Confirm filter/search effect immediately — reduces uncertainty during comparison shopping.

### Wireframe Layout

```
WF-LISTING-TOOLBAR — centre-right zone
┌──────────────────────────────────────────────────────────────────────────────┐
│                                    [TEXT: Body]  Showing 1–12 of 47 experiences│
│                                    — OR filtered —                            │
│                                    [TEXT: Body]  Showing 1–8 of 8 experiences │
│                                    matching your filters                      │
│                                    — OR empty precursor —                     │
│                                    [TEXT: Body]  0 experiences match          │
└──────────────────────────────────────────────────────────────────────────────┘

LOADING STATE
  [TEXT: Body]  Loading experiences...
  (paired with WF-SKELETON cards in grid)
```

### Grid
- Toolbar: cols 7–9 (centre-right of 12-col toolbar row)
- Align: baseline with sort control (§6)

### Components
`WF-RESULTS-COUNT`, `WF-TYPE-BODY`, `WF-SKELETON` (loading companion)

### Hierarchy
Subordinate to search (left) and sort (right) in toolbar; updates before card grid repaints

### CTA Position
None — informational text only

### Responsive Behaviour
- Desktop: inline between search and sort
- Mobile: full-width row below search; centred or left-aligned

### Accessibility Notes
- `aria-live="polite"` on count element
- Announce full string including filter context: "8 experiences match your filters"
- Pagination range updates when page changes: "Showing 13–24 of 47"

### Future Motion Placeholder
`[MOTION: none]` — instant text swap

---

## 6. Sorting

### Section Name
Sort Control — Order Results

### Purpose
Let users reorder the grid by relevance, price, duration, rating, or popularity without changing filter set.

### Wireframe Layout

```
WF-LISTING-TOOLBAR — right zone
┌──────────────────────────────────────────────────────────────────────────────┐
│                          Sort by  ┌─────────────────────────┐                │
│                                   │ ░ Recommended       ▾  │                │
│                                   └─────────────────────────┘                │
└──────────────────────────────────────────────────────────────────────────────┘

DROPDOWN OPTIONS (WF-SORT-SELECT)
  ┌─────────────────────────────┐
  │ ● Recommended (default)     │
  │ ○ Price: low to high        │
  │ ○ Price: high to low        │
  │ ○ Duration: shortest first  │
  │ ○ Duration: longest first   │
  │ ○ Guest rating              │
  │ ○ Newest                    │
  └─────────────────────────────┘

URL: ?sort=recommended | price_asc | price_desc | duration_asc | duration_desc | rating | newest
```

### Grid
- Toolbar: cols 10–12 (right-aligned)
- Select width: ~200px

### Components
`WF-SORT-SELECT`, `WF-INPUT-SELECT`, `WF-LISTING-TOOLBAR`, `WF-TYPE-CAP` (label "Sort by")

### Hierarchy
Label → Select → (results grid re-orders)

### CTA Position
None — utility control

### Responsive Behaviour
- Desktop: right of toolbar
- Mobile: right half of row shared with filter trigger `[Filters (3)]`; sort select may shrink to icon + native select

### Accessibility Notes
- Visible `<label for="sort">` — "Sort experiences by"
- Native `<select>` preferred for mobile accessibility; custom dropdown needs full keyboard support
- Sort change announces via same live region as results count

### Future Motion Placeholder
`[MOTION: none]` — grid re-order instant or crossfade cards 100ms

---

## 7. Experience Cards

### Section Name
Experience Cards — Results Grid

### Purpose
Present comparable bookable experiences with enough metadata to decide — image, category, duration, difficulty, price, rating — and clear **Book Now** / **View** paths.

### Wireframe Layout

```
RESULTS GRID (9 cols — 2 cards per row on desktop listing layout)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ WF-CARD-EXPERIENCE-LIST ─────────────┐ ┌─ WF-CARD-EXPERIENCE-LIST ────────┐│
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ││
│ │ [IMG: 16:9] Polo Forest Heritage Walk │ │ [IMG: 16:9] Night Safari        ││
│ │ [WF-BADGE] Heritage  [WF-BADGE] Easy  │ │ [WF-BADGE] Adventure [WF-BADGE]   ││
│ │                                       │ │              Moderate           ││
│ │ [TEXT: H3] Polo Forest Heritage Walk  │ │ [TEXT: H3] Night Safari at Polo ││
│ │                                       │ │            Forest               ││
│ │ [TEXT: Body Sm] Polo Forest · 1 day   │ │ [TEXT: Body Sm] Polo Forest ·   ││
│ │ [TEXT: Body Sm] Ages 8+ · Guided walk │ │            1 night · Ages 12+   ││
│ │ ★★★★★ 4.9 (128 reviews)              │ │ ★★★★☆ 4.7 (86 reviews)        ││
│ │ [TEXT: Price] From ₹1,899 per person  │ │ [TEXT: Price] From ₹2,499 per   ││
│ │                                       │ │            person               ││
│ │ ┌───────────┐ ┌──────────┐            │ │ ┌───────────┐ ┌──────────┐      ││
│ │ │█ Book Now │ │░ View    │            │ │ │█ Book Now │ │░ View    │      ││
│ │ └───────────┘ └──────────┘            │ │ └───────────┘ └──────────┘      ││
│ │ [TEXT: Caption] Login required · UPI/ │ │ [TEXT: Caption] Login required ·││
│ │ card at checkout                      │ │ UPI/card at checkout            ││
│ └───────────────────────────────────────┘ └─────────────────────────────────┘│
│                                                                               │
│ ┌─ WF-CARD-EXPERIENCE-LIST ─────────────┐ ┌─ WF-CARD-EXPERIENCE-LIST ────────┐│
│ │ ... (row 2)                           │ │ ...                               ││
│ └───────────────────────────────────────┘ └─────────────────────────────────┘│
│                                                                               │
│ SKELETON LOADING (6 placeholders)                                            │
│ ┌─ WF-SKELETON ─┐ ┌─ WF-SKELETON ─┐ ┌─ WF-SKELETON ─┐                        │
│ │ ░░░░░░░░░░░░░ │ │ ░░░░░░░░░░░░░ │ │ ░░░░░░░░░░░░░ │                        │
│ └───────────────┘ └───────────────┘ └───────────────┘                        │
└──────────────────────────────────────────────────────────────────────────────┘

DEFAULT: 12 cards per page (6 rows × 2 cols within 9-col main)
```

### Grid
- Main column: 9 cols (cols 4–12)
- Cards: 2 per row — each ~4.5 cols effective (half of 9-col minus gutter)
- Card gap: 24px horizontal, 32px vertical
- Image aspect: 16:9 within card

### Components
`WF-CARD-EXPERIENCE-LIST`, `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-PRICE`, `WF-TYPE-CAP`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-SKELETON`, star rating placeholder

### Hierarchy
Image → Category/difficulty badges → Title (H3) → Location · duration → Age/difficulty meta → Rating → Price → Book / View buttons → Login/payment caption

### CTA Position
- **Book Now** (primary) → `/plan/book/[slug]/dates`; guest → `/account/login?returnUrl=...`
- **View** (secondary) → `/experiences/[slug]`
- Card is NOT fully clickable when two buttons present (match homepage pattern)

### Responsive Behaviour
- Desktop (sidebar visible): 2-col grid in 9-col main
- `1024–1279px`: 2-col grid
- `768–1023px`: 2-col grid, no sidebar
- `<768px`: single-column stack
- Horizontal scroll snap NOT used — vertical stack preferred for comparison

### Accessibility Notes
- H3 per card; unique experience name
- Rating: text "4.9 out of 5 stars, 128 reviews"
- Price includes "per person" and "From" prefix
- Book button: `aria-label="Book Polo Forest Heritage Walk"`
- Badges supplement visible text — difficulty also in Body Sm line

### Future Motion Placeholder
`[MOTION: stagger]` — cards on initial load; `[MOTION: card-hover-lift]` — 2px desktop hover; `[MOTION: skeleton-pulse]` — loading only

---

## 8. Pagination

### Section Name
Pagination — Page Navigation

### Purpose
Browse large catalogues without infinite scroll — predictable, accessible page boundaries aligned with SEO indexable URLs.

### Wireframe Layout

```
BELOW RESULTS GRID (9-col main, centred)
┌──────────────────────────────────────────────────────────────────────────────┐
│                    [◀ Prev]  1  2  [3]  4  5  ...  8  [Next ▶]              │
│                    [TEXT: Caption] Page 3 of 8                               │
└──────────────────────────────────────────────────────────────────────────────┘

URL: ?page=3 (preserves all filter/sort/search params)

EDGE CASE — single page
  Pagination hidden; results count shows full total only
```

### Grid
- Centred within 9-col main (cols 4–12)
- Pagination control max-width: 480px
- Margin-top: 48px below last card row

### Components
`WF-PAGINATION`, `WF-BTN-GHOST` (prev/next), `WF-TYPE-CAP`, page number buttons

### Hierarchy
Card grid → Pagination → (footer)

### CTA Position
Prev/Next and page numbers are navigation — not conversion CTAs

### Responsive Behaviour
- Desktop: full page number list with ellipsis
- Mobile: Prev | Page X of Y | Next — condensed; optional load-more excluded (pagination preferred for SEO)

### Accessibility Notes
- `<nav aria-label="Pagination">`
- Current page: `aria-current="page"`
- Disabled Prev on page 1, disabled Next on last page
- Focus moves to results count heading on page change (optional enhancement)

### Future Motion Placeholder
`[MOTION: none]` — instant page swap; scroll to `#main-content` or toolbar on page change

---

## 9. Empty State

### Section Name
Empty State — No Matching Experiences

### Purpose
Recover gracefully when filters/search return zero results — suggest broader filters, popular experiences, or human help.

### Wireframe Layout

```
REPLACES RESULTS GRID when count = 0
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ WF-EMPTY-STATE (9-col main, centred content) ────────────────────────────┐│
│ │                          [ICON]                                            ││
│ │              [TEXT: H2]  No experiences match your filters               ││
│ │              [TEXT: Body]  Try removing a filter, widening your price      ││
│ │              range, or searching for a different activity.               ││
│ │                                                                            ││
│ │              ┌────────────────────┐  ┌────────────────────┐                ││
│ │              │ ░ Clear all filters│  │ █ Browse all       │                ││
│ │              │                    │  │   experiences      │                ││
│ │              └────────────────────┘  └────────────────────┘                ││
│ │                                                                            ││
│ │              [TEXT: H3]  Popular right now                                 ││
│ │              ┌─ compact card ─┐ ┌─ compact card ─┐ ┌─ compact card ─┐    ││
│ │              │ Night Safari   │ │ Heritage Walk  │ │ Family Camp    │    ││
│ │              │ [TEXT: Link] → │ │ [TEXT: Link] → │ │ [TEXT: Link] → │    ││
│ │              └────────────────┘ └────────────────┘ └────────────────┘    ││
│ │                                                                            ││
│ │              [TEXT: Body]  Need a custom group program?                    ││
│ │              [TEXT: Link]  Request a corporate proposal →  |  School     ││
│ │              program enquiry →                                             ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘

SEARCH-ONLY EMPTY (q=xyz, no filters)
  H2: No results for "xyz"
  Body: Check spelling or try night safari, heritage walk, family camping
```

### Grid
- Empty state: 9-col main, content block 6 cols centred within main
- Popular suggestions: 3 compact cards, 4 cols each within suggestion row (scroll on mobile)

### Components
`WF-EMPTY-STATE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-BTN-SECONDARY`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`, `WF-CARD-EXPERIENCE` (compact variant), `[ICON]`

### Hierarchy
Icon → H2 → Body guidance → Clear / Browse CTAs → Popular suggestions → Corporate/education escape links

### CTA Position
- **Clear all filters** → resets query params
- **Browse all experiences** → `/experiences` (no params)
- Popular cards → experience detail pages
- **Request corporate proposal →** `/corporate#rfp` | **School program enquiry →** `/education#rfp`

### Responsive Behaviour
- Mobile: stacked CTAs full width; popular cards horizontal scroll

### Accessibility Notes
- Empty state announced via `aria-live="polite"` when results drop to zero
- Icon decorative `aria-hidden="true"`
- Recovery links are descriptive — not "Click here"

### Future Motion Placeholder
`[MOTION: fade-in]` — empty state swap; `[MOTION: none]` on CTA hover

---

## 10. Mobile Filter Drawer

### Section Name
Mobile Filter Drawer — Full Filter Panel

### Purpose
Expose all six filter dimensions on viewports where the sidebar is hidden (`<1024px`). Bottom sheet or full-screen drawer with apply/dismiss pattern.

### Wireframe Layout

```
TRIGGER (in WF-LISTING-TOOLBAR, mobile/tablet)
┌────────────────────────────────────────┐
│ [ICON] Filters (3)                     │
└────────────────────────────────────────┘
  (badge count = number of active filter groups)

DRAWER OPEN — slides from bottom (preferred) or right
┌────────────────────────────────────────┐
│ Filters                           [×]  │
│ [TEXT: Caption] 3 filters applied        │
│ ──────────────────────────────────────│
│ (scrollable body — same groups as §4)  │
│ ▼ Category                             │
│   [ ] Heritage & Culture               │
│   ...                                  │
│ ▼ Location                             │
│   ...                                  │
│ ▼ Duration · Price · Difficulty · Age  │
│ ──────────────────────────────────────│
│ STICKY FOOTER                          │
│ ┌──────────────┐ ┌──────────────────┐  │
│ │ ░ Clear all  │ │ █ Show 24 results│  │
│ └──────────────┘ └──────────────────┘  │
└────────────────────────────────────────┘
  Scrim behind drawer; body scroll locked

DISMISS without apply: reverts to last applied state (cancel behaviour)
```

### Grid
- Drawer width: 100% viewport on mobile; max 400px right sheet on tablet optional
- Sticky footer: 64px + safe area
- Filter groups: single column, 16px horizontal padding

### Components
`WF-FILTER-DRAWER`, `WF-FILTER-GROUP`, `WF-FILTER-CHIPS` (preview in header), `WF-BTN-PRIMARY` (Show N results), `WF-BTN-SECONDARY` (Clear all), `WF-BTN-ICON` (close), `WF-MODAL` scrim

### Hierarchy
Trigger badge → Drawer header → Scrollable filter groups → Sticky footer CTAs

### CTA Position
- **Show N results** — primary, applies filters and closes drawer; N updates live as user toggles
- **Clear all** — secondary, resets drawer form
- **[×]** — closes without apply (confirm if dirty — optional)

### Responsive Behaviour
- Visible only `<1024px`
- Tablet: bottom sheet 80vh max-height
- Mobile: full-screen drawer
- Filter count badge on trigger updates from active URL params

### Accessibility Notes
- `role="dialog"` + `aria-modal="true"` + `aria-label="Filter experiences"`
- Focus trap while open; return focus to trigger on close
- Escape closes drawer
- **Show N results** label includes count for screen readers
- Touch targets ≥44px per checkbox row

### Future Motion Placeholder
`[MOTION: drawer-slide-up]` — bottom sheet 300ms; `[MOTION: none]` when `prefers-reduced-motion` — instant appear

---

## 11. Footer

### Section Name
Global Footer — Listing Page Instance

### Purpose
Secondary navigation and trust/legal continuity. Same shell as Step 1 D10.

### Wireframe Layout

```
(See Step 1 § D10 — full footer wireframe)

LISTING-SPECIFIC NOTES:
- Experiences column: five pillar links highlight current category when on category route
- "View all experiences" omitted (user is already on listing) — replaced by category links
- Newsletter row included per Step 1 default
```

### Grid
See Step 1 § D10

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-FORM-NEWSLETTER`, `WF-NAV-LANG`, `WF-THEME-TOGGLE`, `WF-TYPE-H4`, `WF-TYPE-LINK`

### Hierarchy
Brand → Link columns → Newsletter → Legal/utilities

### CTA Position
**Subscribe** — secondary in newsletter row

### Responsive Behaviour
See Step 1 § D10

### Accessibility Notes
See Step 1 § D10

### Future Motion Placeholder
`[MOTION: none]`

---

# Full Page Wireframe (Desktop Composite)

```
VIEWPORT 1440px — CONTENT 1280px
┌──────────────────────────────────────────────────────────────────────────────┐
│ WF-SHELL-HEADER                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Home › Experiences › Heritage & Culture                                      │
│ [OVERLINE] POLO FOREST EXPERIENCES                                           │
│ [H1] Heritage & Culture experiences                                          │
│ [Body] Intro copy...                                                         │
│ [Trust strip: 4.8★ | 120+ experiences | 50K+ guests | Reviews →]           │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Search........................] Showing 1-12 of 24    Sort [Recommended ▾]  │
│ [Heritage ×] [Polo Forest ×] [Clear all]                                     │
├───────────────┬──────────────────────────────────────────────────────────────┤
│ FILTERS (3col)│ RESULTS (9col)                                               │
│ Category      │ ┌─Card─┐ ┌─Card─┐                                            │
│ Location      │ ┌─Card─┐ ┌─Card─┐                                            │
│ Duration      │ ┌─Card─┐ ┌─Card─┐                                            │
│ Price         │ ┌─Card─┐ ┌─Card─┐                                            │
│ Difficulty    │                                                              │
│ Age           │ [Pagination 1 2 3 ...]                                       │
├───────────────┴──────────────────────────────────────────────────────────────┤
│ WF-SHELL-FOOTER                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Appendix

## A. URL parameter reference

| Param | Values | Filter group |
|-------|--------|--------------|
| `category` | `heritage`, `education`, `family`, `adventure` (comma multi) | Category |
| `location` | `polo-forest`, `saputara`, `gir`, `ahmedabad` | Location |
| `duration` | `half-day`, `full-day`, `2d1n`, `3d-plus` | Duration |
| `price_min` | integer INR | Price |
| `price_max` | integer INR | Price |
| `difficulty` | `easy`, `moderate`, `challenging` | Difficulty |
| `age` | `all`, `4plus`, `12plus`, `18plus` | Age |
| `q` | string | Search |
| `sort` | see §6 | Sort |
| `page` | integer ≥1 | Pagination |
| `date` | ISO date (from homepage quick search) | Pre-filters availability — implementation Phase 2 |
| `guests` | integer | Guest count context — Phase 2 |

## B. Booking & auth touchpoints

| User state | Action |
|------------|--------|
| Guest clicks **Book Now** | `/account/login?returnUrl=/plan/book/[slug]/dates` |
| Authenticated | `/plan/book/[slug]/dates` |
| Checkout | UPI + card per Step 2 decisions |
| Corporate/education need | Empty state + filter caption links to RFP — not in card grid |

## C. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Page header & breadcrumb | `WF-BREADCRUMB`, `WF-PAGE-HEADER`, `WF-LISTING-TRUST-STRIP` |
| Search | `WF-LISTING-TOOLBAR`, `WF-INPUT-TEXT` |
| Filters | `WF-FILTER-SIDEBAR`, `WF-FILTER-GROUP`, `WF-FILTER-CHIPS` |
| Results count | `WF-RESULTS-COUNT` |
| Sorting | `WF-SORT-SELECT` |
| Experience cards | `WF-CARD-EXPERIENCE-LIST`, `WF-SKELETON` |
| Pagination | `WF-PAGINATION` |
| Empty state | `WF-EMPTY-STATE` |
| Mobile filter drawer | `WF-FILTER-DRAWER` |
| Footer | `WF-SHELL-FOOTER` |

## D. Step 4 handoff

| Item | Status |
|------|--------|
| All 11 listing sections specified | Complete |
| Six filter dimensions documented | Complete |
| Standard experiences only (RFP excluded) | Complete |
| Login-required booking on cards | Complete |
| UPI/card checkout referenced | Complete |
| Mobile filter drawer | Complete |
| Empty state with recovery paths | Complete |
| Confirmed taxonomy locked | Complete |

---

**Document path:** `docs/ux-wireframes/03-experience-listing.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Step 1 global foundation, Step 2 homepage decisions, confirmed user decisions
