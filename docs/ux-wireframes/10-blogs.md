# Polo Safari — UX Wireframe System
## Step 10: Blog Index Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Blog listing (`/blog`) — editorial discovery, category filtering, search, featured article, and pagination. Article detail (`/blog/[slug]`) noted briefly only.  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md) (§21 Blogs Preview)  
**Next step:** Step 11 — Blog article detail (`/blog/[slug]`) full wireframe or Reviews page  

**Reference context:** Blog supports SEO and **Curiosity** for Polo Forest ecology, school trip planning, corporate offsite ideas, and Gujarat travel guides. Linked from homepage §21 Blogs Preview, footer Discover column, and experience detail related content. **Canonical routes:** `/blog` and `/blog/[slug]` (see [00-index Routing Decisions](./00-index.md#routing-decisions)).

---

## Decisions Log

Inherited from Steps 1–2; decisions that directly shape this page.

| # | Decision | Blog page impact |
|---|----------|------------------|
| 1 | **Full online booking elsewhere** | Blog is editorial — inline CTAs link to `/experiences` or `/plan`; no checkout |
| 2 | **UPI/card at checkout** | Not on this page |
| 3 | **Login required for booking** | Blog reading is public; no login gate |
| 4 | **English-only** | All categories, search placeholder, and empty-state copy in English |
| 5 | **Confirmed taxonomy (Option A)** | Category filter chips map to **five pillars** plus editorial tags (Polo Forest, Travel Tips, Trip Reports) — pillars are filters, not a sixth product category |
| 6 | **Corporate & education RFP separate** | Corporate/education articles may CTA to `/corporate` or `/education` — not standard Book Now |
| 7 | **Trust signals** | Featured article and popular posts prioritise trip reports and ecology content with real Polo Forest names |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure — available as **category filter chips**. Additional editorial categories: **Polo Forest**, **Travel Tips**, **Trip Reports**, **Seasonal**. Geographic labels (Polo Forest, Gujarat) appear in article meta — not mixed with pillar slugs.

### Scope boundary

| Included on this page | Excluded (separate wireframe) |
|-----------------------|-------------------------------|
| Blog index layout, filters, search | Full article detail page spec (brief note only) |
| Featured article hero | Admin blog CMS |
| Recent posts grid + popular sidebar | Comments system (Phase 2) |
| Pagination, empty state | RSS feed UI (implementation detail) |
| Footer | Author profile pages |

---

## Page Overview

### Routes & templates

| Property | Value |
|----------|-------|
| Primary URL | `/blog` |
| Article detail URL | `/blog/[slug]` — listing links only; detail wireframe deferred |
| Deep links | `/blog?category=heritage`, `/blog?q=monsoon`, `/blog?page=2` |
| Query params | `?category=&q=&page=&sort=recent|popular` |
| Template | `WF-SHELL` + blog listing layout (sidebar on desktop) |
| H1 | "Polo Forest journal" or "Stories & insights" — semantic H1 in page header |
| Emotion arc | Curiosity → Discovery → Reading intent |

### Layout anatomy (desktop)

```
┌─ WF-SHELL-HEADER ─────────────────────────────────────────────────────────────┐
├─ WF-BLOG-PAGE-HEADER ────────────────────────────────────────────────────────┤
├─ WF-BLOG-TOOLBAR (category chips + search) ──────────────────────────────────┤
├─ WF-BLOG-FEATURED-HERO ──────────────────────────────────────────────────────┤
├─ MAIN + SIDEBAR ─────────────────────────────────────────────────────────────┤
│   ├─ WF-BLOG-GRID (recent posts, 9 cols)                                     │
│   └─ WF-BLOG-SIDEBAR-POPULAR (3 cols)                                        │
├─ WF-PAGINATION ──────────────────────────────────────────────────────────────┤
├─ WF-EMPTY-STATE (conditional) ───────────────────────────────────────────────┤
└─ WF-SHELL-FOOTER ────────────────────────────────────────────────────────────┘
```

### Section order (documented below)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Page Header
3.  Category Filter Chips
4.  Search Bar
5.  Featured Article Hero
6.  Recent Posts Grid
7.  Popular Posts Sidebar / List
8.  Pagination
9.  Empty State (conditional)
10. Footer (WF-SHELL-FOOTER)
```

### Blog-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-BLOG-PAGE-HEADER` | Title, intro, breadcrumb — journal framing |
| `WF-BLOG-CATEGORY-CHIPS` | Horizontal filter chips — pillars + editorial tags |
| `WF-BLOG-SEARCH` | Listing keyword search — distinct from header search |
| `WF-BLOG-FEATURED-HERO` | Large featured article — image, title, excerpt, read CTA |
| `WF-BLOG-GRID` | Recent posts card grid |
| `WF-BLOG-SIDEBAR-POPULAR` | Popular posts list — ranked by views or editorial pick |
| `WF-BLOG-EMPTY` | No results — search/filter recovery |

Reused: `WF-CARD-STORY`, `WF-PAGINATION`, `WF-EMPTY-STATE`, `WF-CHIP-FILTER`, `WF-LISTING-TOOLBAR`

---

# Blog Index Sections

---

## 1. Navigation

### Section Name
Global Header — Blog Page Default State

### Purpose
Persistent wayfinding. Header uses **scrolled/surface** state. Blog reachable via Discover mega menu.

### Wireframe Layout

```
BLOG PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

MEGA MENU — Discover column
  Polo Forest · Gallery · Blog (active) · Reviews · About

(See Step 1 § D1, D4; Step 2 §1 for auth dropdown states)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px — see Step 1 § D1.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Nav (Discover/Blog context) → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; subordinate to featured article Read CTA.

### Responsive Behaviour
See Step 1 § D1, D4.

### Accessibility Notes
Skip link → `#main-content`. Header search and listing search (§4) use distinct `aria-label`s.

### Future Motion Placeholder
`[MOTION: header-condense]` — see Step 1 § D9.

---

## 2. Page Header

### Section Name
Blog Page Header — Title, Intro & Breadcrumb

### Purpose
Frame the blog as Polo Safari's editorial journal — Polo Forest ecology, Gujarat travel, and trip planning for schools, corporates, and families.

### Wireframe Layout

```
BREADCRUMB (cols 1–12, below header)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Blog                                                │
└──────────────────────────────────────────────────────────────────────────────┘

WF-BLOG-PAGE-HEADER (padding-top 32px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  STORIES & INSIGHTS                                          │
│ [TEXT: H1]        Polo Forest journal                                         │
│                                                                               │
│ [TEXT: Body]      Guides, trip reports, and seasonal updates from our team    │
│                   at Polo Forest and across Gujarat — for teachers, HR       │
│                   planners, and curious travellers.                           │
│                                                                               │
│ [TEXT: Caption]   48 articles · Updated weekly                                │
└──────────────────────────────────────────────────────────────────────────────┘

FILTERED VARIANT (?category=education)
  Breadcrumb: Home › Blog › Educational Tours
  H1: Educational Tours — Polo Forest journal
  Body: School trip planning, ecology curriculum, and field-study guides (shortened)
  Caption: 12 articles in this category
```

### Grid
- Breadcrumb: 12 cols, left-aligned
- Header block: 8 cols (cols 1–8) left-aligned
- Section padding: 32px top, 24px bottom

### Components
`WF-BREADCRUMB`, `WF-BLOG-PAGE-HEADER`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
Breadcrumb → Overline → H1 → Body intro → Article count caption

### CTA Position
None in header — toolbar (§3–§4) carries first interactive controls.

### Responsive Behaviour
- Desktop: 8-col text block
- Mobile: full width

### Accessibility Notes
- One `<h1>` per page — "Polo Forest journal" or scoped category variant
- Breadcrumb: `<nav aria-label="Breadcrumb">` with ordered list
- Filtered variant: terminal crumb is category context, not a separate route

### Future Motion Placeholder
`[MOTION: fade-in]` — header on route load

---

## 3. Category Filter Chips

### Section Name
Category Filter Chips — Pillar & Editorial Tags

### Purpose
Let visitors browse articles by **experience pillar** or **editorial topic** — syncs to `?category=` URL param without conflating pillars with geographic destinations.

### Wireframe Layout

```
WF-BLOG-CATEGORY-CHIPS (12 cols, below page header)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Browse by topic                                               │
│                                                                               │
│ ┌─ chip row (horizontal scroll on narrow viewports) ─────────────────────────┐ │
│ │ [█ All] [░ Heritage] [░ Educational Tours] [░ Corporate] [░ Family]        │ │
│ │ [░ Adventure] [░ Polo Forest] [░ Travel Tips] [░ Trip Reports] [░ Seasonal]│ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                               │
│ ACTIVE STATE (?category=heritage)
│ [░ All] [█ Heritage] [░ Educational Tours] ...                                │
│ [TEXT: Caption]  Showing 8 articles · [TEXT: Link] Clear filter             │
└──────────────────────────────────────────────────────────────────────────────┘

CHIP BEHAVIOUR
- Default: All — full recent grid
- Single-select per UX (one category active); multi-select optional Phase 2
- Updates grid + sidebar without full page reload
- "Clear filter" resets to All
```

### Grid
- Chip row: 12 cols; chips inline with 8px gap
- Chip min-height: 36px; padding 8px 16px
- Horizontal scroll on mobile with fade edge indicator

### Components
`WF-BLOG-CATEGORY-CHIPS`, `WF-CHIP-FILTER`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Caption label → Chip row → Active filter caption + clear link

### CTA Position
Chips are filter actions — no separate button. Clear filter is text link.

### Responsive Behaviour
- Desktop: chips wrap to 2 rows if needed
- Mobile: horizontal scroll snap; sticky below header optional (Phase 2)

### Accessibility Notes
- Chip group: `role="group"` with `aria-label="Filter by category"`
- Active chip: `aria-pressed="true"`
- Keyboard: arrow keys move focus between chips; Enter toggles

### Future Motion Placeholder
`[MOTION: none]` on filter apply — instant grid update preferred

---

## 4. Search Bar

### Section Name
Blog Search — Listing Keyword Field

### Purpose
Keyword discovery within current category context — article title, excerpt, tags. Distinct from global header search (Step 1 D5).

### Wireframe Layout

```
WF-BLOG-TOOLBAR (12 cols — search + optional sort, same row as chips or below)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ WF-BLOG-SEARCH (6 cols) ────────────────────────────────────────────────┐ │
│ │ [ICON]  Search articles — e.g. monsoon ecology, school checklist, temple  │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                               │
│                                    Sort by  [Recent ▾]  (optional, 3 cols)   │
│                                                                               │
│ ACTIVE SEARCH (?q=monsoon+ecology&category=heritage)
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ [ICON]  monsoon ecology                                            [×]   │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│ [TEXT: Caption]  3 results for "monsoon ecology" in Heritage · Clear search │
└──────────────────────────────────────────────────────────────────────────────┘

BEHAVIOUR
- Debounced search (300ms) updates grid
- Enter submits immediately
- Clear (×) removes q param
- Search scoped to active category when set
- Empty results → §9 Empty State
```

### Grid
- Search input: 6 cols (cols 1–6)
- Sort select: 3 cols right-aligned (cols 10–12) — optional
- Input height: 48px; padding 12px vertical

### Components
`WF-BLOG-SEARCH`, `WF-LISTING-TOOLBAR`, `WF-INPUT-TEXT`, `WF-SORT-SELECT`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Search field → Sort (optional) → Results caption when active

### CTA Position
No button CTA — implicit submit on Enter. Clear icon is secondary action.

### Responsive Behaviour
- Desktop: search 6 cols + sort right
- Mobile: search full width; sort below or in overflow menu

### Accessibility Notes
- `<label>` visually hidden: "Search articles"
- `role="search"` on form wrapper
- Live region announces "3 results for monsoon ecology" after debounced search
- Clear button: `aria-label="Clear search"`

### Future Motion Placeholder
`[MOTION: none]`

---

## 5. Featured Article Hero

### Section Name
Featured Article — Editorial Hero

### Purpose
Highlight one pinned or algorithmically selected article — seasonal priority (monsoon ecology, Diwali corporate, school holiday planning). Primary **Curiosity → Reading** conversion on the index.

### Wireframe Layout

```
WF-BLOG-FEATURED-HERO (12 cols, margin-bottom 48px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ 7 cols ─────────────────────────────────────────┐ ┌─ 5 cols ──────────────┐ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: Badge] FEATURED │ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: Caption] 18 Jun 2026 · 8 min read      │ │
│ │ [IMG: 16:9]                                       │ │ [TEXT: H2] Monsoon ecology at Polo Forest:      │ │
│ │ Harnav river — monsoon field study                │ │ what schools should know before booking         │ │
│ │                                                   │ │                                                 │ │
│ │                                                   │ │ [TEXT: Body] Before the rains arrive in         │ │
│ │                                                   │ │ Sabarkantha, our ecology team documents         │ │
│ │                                                   │ │ river levels, insect emergence, and safe        │ │
│ │                                                   │ │ trail conditions for CBSE field studies...      │ │
│ │                                                   │ │                                                 │ │
│ │                                                   │ │ [Heritage] [Educational Tours] [Polo Forest]    │ │
│ │                                                   │ │                                                 │ │
│ │                                                   │ │ [██ Read article]                               │ │
│ └───────────────────────────────────────────────────┘ └─────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘

MOBILE STACK
  Image full width → Badge → Meta → H2 → Excerpt → Tags → Read button
```

### Grid
- Split: 7 + 5 cols (image left, content right) — or image-dominant 8 + 4
- Featured card: min-height 320px
- Tags: inline below excerpt

### Components
`WF-BLOG-FEATURED-HERO`, `WF-CARD-STORY` (featured variant), `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-BTN-PRIMARY`, `WF-CHIP-FILTER` (read-only tags)

### Hierarchy
Featured badge → Date + read time → H2 title → Excerpt → Category tags → Read CTA

### CTA Position
**Read article** — primary button → `/blog/monsoon-ecology-at-polo-forest`

### Responsive Behaviour
- Desktop: 7 + 5 or 8 + 4 split
- Mobile: stacked; image 16:9 full width; button full width

### Accessibility Notes
- Featured H2 is page subheading — page H1 remains in header §2
- Read time and date in `<time datetime="...">`
- Image alt describes scene, not article title repetition

### Future Motion Placeholder
`[MOTION: fade-in]` — featured block on load

---

## 6. Recent Posts Grid

### Section Name
Recent Posts — Article Card Grid

### Purpose
Primary content area — chronological or filtered article list. Cards reuse homepage blog preview pattern (Step 2 §21).

### Wireframe Layout

```
WF-BLOG-GRID (9 cols — main column when sidebar present)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Recent posts                                                      │
│ [TEXT: Caption]  Showing 1–9 of 48                                           │
│                                                                               │
│ ┌─ WF-CARD-STORY ──────┐ ┌─ WF-CARD-STORY ──────┐ ┌─ WF-CARD-STORY ──────┐   │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │   │
│ │ [IMG: 16:9]           │ │ [IMG: 16:9]           │ │ [IMG: 16:9]           │   │
│ │ [TEXT: Caption] 12 Jun │ │ [TEXT: Caption] 3 Jun  │ │ [TEXT: Caption] 28 May│   │
│ │ [TEXT: H3] Planning a  │ │ [TEXT: H3] Corporate   │ │ [TEXT: H3] Temple     │   │
│ │ school trip checklist  │ │ offsite ideas for      │ │ architecture guide  │   │
│ │ for Polo Forest        │ │ Gujarat teams          │ │ — Sharneshwar         │   │
│ │ [TEXT: Body Sm] excerpt│ │ [TEXT: Body Sm] excerpt│ │ [TEXT: Body Sm] excerpt│   │
│ │ [Educational] [Tips]   │ │ [Corporate] [Tips]     │ │ [Heritage]            │   │
│ │ [TEXT: Link] Read →   │ │ [TEXT: Link] Read →   │ │ [TEXT: Link] Read →   │   │
│ └───────────────────────┘ └───────────────────────┘ └───────────────────────┘   │
│                                                                               │
│ (rows 2–3 repeat — 9 cards per page default)                                  │
└──────────────────────────────────────────────────────────────────────────────┘

WITHOUT SIDEBAR (tablet / mobile)
  Grid expands to 12 cols — 3-up → 2-up → 1-up
```

### Grid
- Main column: 9 cols (cols 1–9) when sidebar active
- Cards: 3 × 3 cols within main (desktop)
- Card gap: 24px
- 9 cards per page (3×3)

### Components
`WF-BLOG-GRID`, `WF-CARD-STORY`, `WF-MEDIA-169`, `WF-TYPE-H3`, `WF-TYPE-CAP`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, `WF-BADGE`, `WF-RESULTS-COUNT`

### Hierarchy
Section H2 → Results count → Card grid (image → date → title → excerpt → tags → read link)

### CTA Position
- Per card: **Read →** → `/blog/[slug]`
- No section-level CTA — pagination handles more content

### Responsive Behaviour
- Desktop + sidebar: 3-up in 9-col main
- Desktop no sidebar: 3-up in 12 cols
- Tablet: 2-up
- Mobile: 1-up stack

### Accessibility Notes
- Dates in `<time datetime="...">`
- Card title H3 under section H2
- Explicit Read link — entire card NOT clickable if tags are separate links
- Results count in live region on filter/search change

### Future Motion Placeholder
`[MOTION: stagger]` — cards on load/filter update

---

## 7. Popular Posts Sidebar / List

### Section Name
Popular Posts — Sidebar List

### Purpose
Surface evergreen and high-traffic articles — complements chronological grid. Editorial picks or view-count ranked.

### Wireframe Layout

```
WF-BLOG-SIDEBAR-POPULAR (3 cols — cols 10–12, sticky on scroll)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H3]  Popular posts                                                     │
│ ───────────────────────────────────────────────────────────────────────────── │
│                                                                               │
│ 1. ┌────┐ [TEXT: Link] Monsoon ecology at Polo Forest                         │
│    │thumb│ [TEXT: Caption] 18 Jun · 2.4k views                                 │
│    └────┘                                                                     │
│                                                                               │
│ 2. ┌────┐ [TEXT: Link] Planning a school trip checklist                      │
│    │thumb│ [TEXT: Caption] 3 Jun · 1.8k views                                  │
│    └────┘                                                                     │
│                                                                               │
│ 3. ┌────┐ [TEXT: Link] Night safari — what to expect                          │
│    │thumb│ [TEXT: Caption] 28 May · 1.2k views                                 │
│    └────┘                                                                     │
│                                                                               │
│ 4. ┌────┐ [TEXT: Link] Corporate offsite ideas for Gujarat teams              │
│    │thumb│ [TEXT: Caption] 15 May · 980 views                                  │
│    └────┘                                                                     │
│                                                                               │
│ 5. ┌────┐ [TEXT: Link] Family camping at Polo Forest — packing list           │
│    │thumb│ [TEXT: Caption] 2 May · 850 views                                   │
│    └────┘                                                                     │
│                                                                               │
│ ───────────────────────────────────────────────────────────────────────────── │
│ [TEXT: H4]  Plan your visit                                                   │
│ [TEXT: Body Sm] Ready to book? Browse experiences or send an enquiry.         │
│ [TEXT: Link] Browse experiences →                                              │
│ [TEXT: Link] Plan your visit →                                                 │
└──────────────────────────────────────────────────────────────────────────────┘

MOBILE VARIANT (below grid, full width)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H3]  Popular posts                                                     │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ (horizontal scroll, 3 visible)        │
│ │ compact  │ │ compact  │ │ compact  │                                       │
│ │ card     │ │ card     │ │ card     │                                       │
│ └──────────┘ └──────────┘ └──────────┘                                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Sidebar: 3 cols (cols 10–12)
- Sticky offset: below header + optional sticky chips (top: 120px approx)
- List item: thumb 64×64 + text stack

### Components
`WF-BLOG-SIDEBAR-POPULAR`, `WF-MEDIA-11`, `WF-TYPE-H3`, `WF-TYPE-H4`, `WF-TYPE-LINK`, `WF-TYPE-CAP`, `WF-TYPE-BODY`, `WF-DIVIDER`

### Hierarchy
H3 → Ranked list (thumb → title → meta) → Plan your visit micro-CTA block

### CTA Position
- Each list item title links to `/blog/[slug]`
- Sidebar footer: **Browse experiences →** `/experiences`, **Plan your visit →** `/plan` — secondary text links

### Responsive Behaviour
- Desktop: sticky sidebar alongside 9-col grid
- Tablet: sidebar below grid as horizontal scroll strip
- Mobile: horizontal scroll popular cards or collapsed accordion "Popular posts"

### Accessibility Notes
- Ordered list `<ol>` for ranked posts
- View counts supplementary — not sole link text
- Sticky sidebar: must not trap focus; skip link to main grid content

### Future Motion Placeholder
`[MOTION: none]` — static sidebar preferred

---

## 8. Pagination

### Section Name
Blog Pagination

### Purpose
Navigate multi-page article archive — SEO-friendly page numbers; syncs to `?page=` param.

### Wireframe Layout

```
WF-PAGINATION (12 cols, centred, below main + sidebar row)
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│   [░ ← Previous]   [1]  [█ 2]  [3]  [4]  ...  [6]   [Next →]                  │
│                                                                               │
│ [TEXT: Caption]  Page 2 of 6 · 48 articles total                              │
└──────────────────────────────────────────────────────────────────────────────┘

BEHAVIOUR
- 9 articles per page (configurable)
- Previous disabled on page 1
- Next disabled on last page
- Preserves category and q params across pages
```

### Grid
- Pagination control: centred in 12 cols
- Button size: 40×40px page numbers; 44px min touch target

### Components
`WF-PAGINATION`, `WF-BTN-GHOST` (prev/next), `WF-TYPE-CAP`, page number buttons

### Hierarchy
Prev/Next → Page numbers → Total caption

### CTA Position
Pagination controls are primary navigation for archive — no competing CTA in same row.

### Responsive Behaviour
- Desktop: full page number row with ellipsis
- Mobile: Prev / Page X of Y / Next compact row

### Accessibility Notes
- `<nav aria-label="Blog pagination">`
- Current page: `aria-current="page"`
- Prev/Next: descriptive labels "Previous page", "Next page"

### Future Motion Placeholder
`[MOTION: none]`

---

## 9. Empty State

### Section Name
Empty State — No Matching Articles

### Purpose
Recovery UX when search or category filter returns zero results — clear guidance, reset actions, and popular suggestions.

### Wireframe Layout

```
WF-EMPTY-STATE (conditional — replaces grid when 0 results)
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│                          [ICON]                                               │
│              [TEXT: H2]  No articles match your search                        │
│              [TEXT: Body]  Try a different keyword, remove a category filter, │
│                          or browse all stories from the Polo Forest journal.  │
│                                                                               │
│              [░ Clear filters]    [██ Browse all articles]                    │
│                                                                               │
│ [TEXT: H3]  Popular right now                                                 │
│ ┌─ WF-CARD-STORY (compact × 3) ─────────────────────────────────────────────┐ │
│ │ Monsoon ecology · School checklist · Night safari                          │ │
│ └────────────────────────────────────────────────────────────────────────────┘ │
│                                                                               │
│ [TEXT: Body Sm] Planning a group trip?                                        │
│ [TEXT: Link] Request an education proposal →  /education                      │
│ [TEXT: Link] Request a corporate proposal →   /corporate                      │
└──────────────────────────────────────────────────────────────────────────────┘

TRIGGERS
- ?q= with no matches
- ?category= with empty category (edge case)
- Combined q + category with no overlap
```

### Grid
- Empty state: 8 cols centred (cols 3–10)
- Compact suggestion cards: 3 × 4 cols below

### Components
`WF-EMPTY-STATE`, `WF-BLOG-EMPTY`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-BTN-SECONDARY`, `WF-BTN-PRIMARY`, `WF-CARD-STORY` (compact), `WF-TYPE-LINK`, `[ICON]`

### Hierarchy
Icon → H2 → Body guidance → Clear / Browse CTAs → Popular suggestions → RFP escape links

### CTA Position
- **Clear filters** — secondary → resets category + q
- **Browse all articles** — primary → `/blog`
- RFP links — text only (decision #6)

### Responsive Behaviour
- Desktop: centred block
- Mobile: full width; buttons stack

### Accessibility Notes
- `role="status"` or live region announces empty state on filter change
- Focus moves to empty state heading when results become zero

### Future Motion Placeholder
`[MOTION: fade-in]` — empty state swap

---

## 10. Footer

### Section Name
Global Site Footer

### Purpose
Secondary navigation, newsletter, legal — Blog linked in Discover column.

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
│  Corporate       Blog (current)   FAQ               Location line            │
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
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
See Step 1 § D10.

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-FORM-NEWSLETTER`, `WF-TYPE-H4`, `WF-TYPE-LINK`

### Hierarchy
Brand → link columns (Blog highlighted) → newsletter → legal

### CTA Position
**Subscribe** — secondary in newsletter row.

### Responsive Behaviour
See Step 1 § D10.

### Accessibility Notes
See Step 1 § D10.

### Future Motion Placeholder
`[MOTION: none]`

---

# Article Detail — Brief Note

Full wireframe deferred to Step 11. Listing handoff minimum:

| Property | Value |
|----------|-------|
| URL | `/blog/[slug]` |
| Template | `WF-SHELL` + article layout |
| H1 | Article title (one per page) |
| Core blocks | Hero image, meta (date, author, read time, categories), body prose, inline images, related posts (3-up), optional Book/Enquire CTA band |
| Breadcrumb | Home › Blog › [Category]? › Article title |
| SEO | `article` schema, OG image from hero |
| CTAs | Contextual — education articles → `/education`; corporate → `/corporate`; consumer → `/experiences/[slug]` |

---

# Full Page ASCII (Desktop)

```
┌─ HEADER ─────────────────────────────────────────────────────────────────────┐
├─ BREADCRUMB + PAGE HEADER — Polo Forest journal ─────────────────────────────┤
├─ CATEGORY CHIPS — All · Heritage · Education · Corporate · Family · ... ───┤
├─ SEARCH BAR + Sort ──────────────────────────────────────────────────────────┤
├─ FEATURED ARTICLE HERO — monsoon ecology (7+5 split) ────────────────────────┤
├─ MAIN (9 col) ────────────────┬─ SIDEBAR (3 col) ────────────────────────────┤
│ RECENT POSTS GRID (3×3)       │ POPULAR POSTS (sticky list)                  │
├───────────────────────────────┴──────────────────────────────────────────────┤
├─ PAGINATION — Page 1 of 6 ───────────────────────────────────────────────────┤
├─ EMPTY STATE (conditional — hidden when results exist) ──────────────────────┤
└─ FOOTER ─────────────────────────────────────────────────────────────────────┘
```

---

# Appendix

## A. URL parameter reference

| Param | Values | Purpose |
|-------|--------|---------|
| `category` | `all` (default), `heritage`, `education`, `corporate`, `family`, `adventure`, `polo-forest`, `travel-tips`, `trip-reports`, `seasonal` | Category filter |
| `q` | string | Search keyword |
| `page` | integer ≥1 | Pagination |
| `sort` | `recent` (default), `popular` | Sort order — optional |

## B. Route alignment note

Canonical blog routes are defined in [00-index — Routing Decisions](./00-index.md#routing-decisions). At build time, configure 301 redirects from legacy `/stories` paths and update sitemap, footer links, and homepage §21 CTAs to `/blog` and `/blog/[slug]`.

## C. Inbound links from other wireframes

| Source | Link pattern |
|--------|--------------|
| Homepage §21 Blogs Preview | `/blog`, `/blog/[slug]` |
| Footer Discover column | `/blog` |
| About founder story (optional) | `/blog` |
| Experience detail related content | `/blog?category=[pillar]` |

## D. Category chip reference

| Chip label | Slug | Type |
|------------|------|------|
| All | (none) | Reset |
| Heritage | `heritage` | Pillar |
| Educational Tours | `education` | Pillar |
| Corporate Retreats | `corporate` | Pillar |
| Family | `family` | Pillar |
| Adventure | `adventure` | Pillar |
| Polo Forest | `polo-forest` | Editorial / geographic |
| Travel Tips | `travel-tips` | Editorial |
| Trip Reports | `trip-reports` | Editorial |
| Seasonal | `seasonal` | Editorial |

## E. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Page Header | `WF-BREADCRUMB`, `WF-BLOG-PAGE-HEADER` |
| Category Chips | `WF-BLOG-CATEGORY-CHIPS`, `WF-CHIP-FILTER` |
| Search | `WF-BLOG-SEARCH`, `WF-LISTING-TOOLBAR` |
| Featured Hero | `WF-BLOG-FEATURED-HERO`, `WF-CARD-STORY` |
| Recent Grid | `WF-BLOG-GRID`, `WF-CARD-STORY` |
| Popular Sidebar | `WF-BLOG-SIDEBAR-POPULAR` |
| Pagination | `WF-PAGINATION` |
| Empty State | `WF-EMPTY-STATE`, `WF-BLOG-EMPTY` |
| Footer | `WF-SHELL-FOOTER` |

## F. Handoff checklist

| Requirement | Status |
|-------------|--------|
| Page header with Polo Forest journal framing | Complete |
| Category filter chips (five pillars + editorial) | Complete |
| Listing search bar | Complete |
| Featured article hero | Complete |
| Recent posts grid | Complete |
| Popular posts sidebar/list | Complete |
| Pagination | Complete |
| Empty state | Complete |
| Footer | Complete |
| `/blog` route locked; detail brief note | Complete |
| No Lorem Ipsum | Complete |
| 12-col / 8px grid documented | Complete |
| 1440 / 1280 viewport documented | Complete |

---

**Document path:** `docs/ux-wireframes/10-blogs.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Step 1 global foundation, Step 2 homepage blogs preview, confirmed user decisions
