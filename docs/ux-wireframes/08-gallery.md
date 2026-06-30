# Polo Safari — UX Wireframe System
## Step 8: Gallery Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Media gallery (`/gallery`) — photos, videos, and drone footage from Polo Forest and Gujarat experiences  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md), [Step 4 — Experience Detail](./04-experience-detail.md), [Step 7 — Destinations](./07-destinations.md)  
**Next step:** [Step 9 — About](./09-about.md), [Step 10 — Blog index](./10-blogs.md)  

**Reference context:** Gallery aggregates visual proof from Polo Forest trips — school groups at Harnav river, temple walks, night safaris, corporate offsites, and drone aerials of the Aravalli. Linked from homepage §20, experience detail §5, and education landing §11.

---

## Decisions Log

Inherited from Steps 1–4; decisions that directly shape this page.

| # | Decision | Gallery page impact |
|---|----------|---------------------|
| 1 | **Full online booking** | Gallery is discovery/trust — no checkout; optional "Book this experience" in lightbox links to detail page |
| 2 | **UPI/card at checkout** | Not on this page |
| 3 | **Login required for booking** | Gallery browsing is public; login only if user follows Book CTA to booking flow |
| 4 | **English-only** | All filter labels, captions, and empty-state copy in English |
| 5 | **Confirmed taxonomy (Option A)** | Category tags use **five pillars** plus **destination** tags — pillars are experience context, not geographic filters |
| 6 | **Corporate & education RFP separate** | Education/corporate gallery items link to pillar landings, not RFP forms |
| 7 | **Trust signals** | Real captions with location and activity names; guest-facing photography prioritised over stock |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Category tags on gallery items reference these pillars for filtering. **Geographic destinations** (Polo Forest, Gir, Saputara) appear as destination tags — separate from pillar taxonomy. Media type filters (Photo / Video / Drone) are orthogonal to both.

### Scope boundary

| Included on this page | Excluded (separate flows) |
|-----------------------|---------------------------|
| Photo, video, drone browsing | Admin gallery upload/CMS |
| Masonry grid + lightbox | Social sharing embeds (Phase 2) |
| Pillar + destination category tags | User-generated upload |
| Load more / pagination | Full video player app |

---

## Page Overview

### Routes & templates

| Property | Value |
|----------|-------|
| Primary URL | `/gallery` |
| Deep links | `/gallery?type=photo`, `/gallery?category=education`, `/gallery?destination=polo-forest`, `/gallery?experience=polo-forest-heritage-walk` |
| Query params | `?type=all|photo|video|drone&category=&destination=&experience=&page=` |
| Template | `WF-SHELL` + gallery layout |
| H1 | "Gallery" |
| Emotion arc | Wonder → Immersion → Curiosity (toward booking) |

### Layout anatomy (desktop)

```
┌─ WF-SHELL-HEADER ─────────────────────────────────────────────────────────────┐
├─ WF-BREADCRUMB ──────────────────────────────────────────────────────────────┤
├─ WF-PAGE-HEADER ─────────────────────────────────────────────────────────────┤
├─ WF-GALLERY-FILTER-BAR (All / Photo / Video / Drone) ────────────────────────┤
├─ WF-GALLERY-CATEGORY-TAGS ──────────────────────────────────────────────────┤
├─ WF-GALLERY-GRID (masonry) ─────────────────────────────────────────────────┤
├─ WF-GALLERY-LOAD-MORE or WF-PAGINATION ──────────────────────────────────────┤
├─ WF-EMPTY-STATE (conditional) ───────────────────────────────────────────────┤
├─ WF-MODAL (lightbox — on tile click) ────────────────────────────────────────┤
└─ WF-SHELL-FOOTER ────────────────────────────────────────────────────────────┘
```

### Section order (documented below)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Page Header & Breadcrumb
3.  Filter Bar — All / Photo / Video / Drone
4.  Category Tags
5.  Masonry Grid Layout
6.  Lightbox / Modal Placeholder
7.  Video Tile Treatment
8.  Drone Tile Treatment
9.  Load More / Pagination
10. Empty State (conditional)
11. Footer (WF-SHELL-FOOTER)
```

### Gallery-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-GALLERY-FILTER-BAR` | Segmented media-type control — All, Photo, Video, Drone |
| `WF-GALLERY-CATEGORY-TAGS` | Pillar + destination tag chips |
| `WF-GALLERY-GRID` | Masonry layout container |
| `WF-GALLERY-TILE` | Base media tile — image thumb, caption overlay |
| `WF-GALLERY-TILE-VIDEO` | Video variant — play icon, duration badge |
| `WF-GALLERY-TILE-DRONE` | Drone variant — aerial badge, wide aspect |
| `WF-GALLERY-LIGHTBOX` | Full-screen modal — media, caption, nav, optional Book CTA |
| `WF-GALLERY-LOAD-MORE` | Progressive load button with remaining count |

---

# Gallery Page Sections

---

## 1. Navigation

### Section Name
Global Header — Gallery Page Default State

### Purpose
Persistent wayfinding. Header uses **scrolled/surface** state. Discover mega menu includes Gallery link.

### Wireframe Layout

```
GALLERY PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

ACTIVE STATE: "Discover" link — underline or bold (Discover column contains Gallery)
MEGA MENU: Gallery → /gallery (current page when active)

(See Step 1 § D1, D4; Step 2 §1 for auth dropdown states)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px — see Step 1 § D1.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Nav → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; subordinate to gallery immersion and optional lightbox Book CTA.

### Responsive Behaviour
See Step 1 § D1, D4.

### Accessibility Notes
Skip link → `#main-content`.

### Future Motion Placeholder
`[MOTION: header-condense]` — see Step 1 § D9.

---

## 2. Page Header & Breadcrumb

### Section Name
Page Header — Title, Intro & Breadcrumb

### Purpose
Frame the gallery as visual proof of Polo Safari experiences — temples, trails, school groups, corporate offsites, and aerial views of Gujarat.

### Wireframe Layout

```
BREADCRUMB (cols 1–12, below header)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Gallery                                             │
└──────────────────────────────────────────────────────────────────────────────┘

PAGE HEADER (WF-PAGE-HEADER, padding-top 32px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  POLO FOREST & GUJARAT                                       │
│ [TEXT: H1]        Gallery                                                     │
│                                                                               │
│ [TEXT: Body]      Photos, videos, and drone footage from our guided trips —   │
│                   heritage walks, ecology programs, family camps, and         │
│                   adventure treks across Polo Forest and wider Gujarat.       │
│                                                                               │
│ [TEXT: Caption]   240+ items · Updated after each monsoon season              │
└──────────────────────────────────────────────────────────────────────────────┘

DEEP-LINK VARIANT (?category=education)
  Breadcrumb: Home › Gallery › Educational Tours
  H1: Gallery — Educational Tours
  Body: School trips and ecology programs at Polo Forest (shortened)
```

### Grid
- Breadcrumb: 12 cols, left-aligned
- Header block: 8 cols (cols 1–8) left-aligned
- Section padding: 32px top, 24px bottom

### Components
`WF-BREADCRUMB`, `WF-PAGE-HEADER`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
Breadcrumb → Overline → H1 → Body intro → Item count caption

### CTA Position
None in header — filter bar carries first interactive controls.

### Responsive Behaviour
- Desktop: 8-col text block
- Mobile: full width

### Accessibility Notes
- One `<h1>` per page — "Gallery" or scoped variant
- Breadcrumb: `<nav aria-label="Breadcrumb">` with ordered list
- Deep-link variant: terminal crumb is filter context, not a separate page

### Future Motion Placeholder
`[MOTION: fade-in]` — header on route load

---

## 3. Filter Bar — All / Photo / Video / Drone

### Section Name
Media Type Filter Bar

### Purpose
Let visitors browse by **media format** — stills, motion, or aerial drone footage. Primary filter axis; syncs to `?type=` URL param.

### Wireframe Layout

```
WF-GALLERY-FILTER-BAR (12 cols, sticky below header on scroll)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Show                                                            │
│                                                                               │
│ ┌─ segmented control (inline) ─────────────────────────────────────────────┐ │
│ │  [█ All]  [░ Photo]  [░ Video]  [░ Drone]                                  │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                               │
│ [TEXT: Caption]  240 items · 186 photos · 38 videos · 16 drone clips          │
└──────────────────────────────────────────────────────────────────────────────┘

ACTIVE: Photo selected (?type=photo)
┌──────────────────────────────────────────────────────────────────────────────┐
│  [░ All]  [█ Photo]  [░ Video]  [░ Drone]                                    │
│ [TEXT: Caption]  Showing 186 photos                                           │
└──────────────────────────────────────────────────────────────────────────────┘

BEHAVIOUR
- Default: All — mixed masonry grid
- Selection updates grid without full page reload
- Count caption updates per type
- Sticky bar: 56px height, surface-1 background, bottom border
```

### Grid
- Bar: 12 cols; segmented control left-aligned, 4 segments equal width (~120px each)
- Sticky offset: below 64px header
- Padding: 16px vertical

### Components
`WF-GALLERY-FILTER-BAR`, `WF-TABS` (segmented), `WF-TYPE-CAP`, `WF-BADGE` (optional count per segment)

### Hierarchy
Caption label → Segmented control → Type count caption

### CTA Position
Segments are filter actions — no separate button.

### Responsive Behaviour
- Mobile: full-width segments; horizontal scroll if needed; sticky remains
- Count caption wraps below control

### Accessibility Notes
- `role="tablist"` with `aria-label="Media type"`
- Each segment: `role="tab"`, `aria-selected` on active
- Live region: "Showing 186 photos" on change

### Future Motion Placeholder
`[MOTION: crossfade]` — grid content swap; `[MOTION: none]` on segment select when `prefers-reduced-motion`

---

## 4. Category Tags

### Section Name
Category Tags — Pillar & Destination Filters

### Purpose
Secondary filtering by **experience pillar** (five pillars) and **geographic destination**. Orthogonal to media type filter. Syncs to `?category=` and `?destination=` params.

### Wireframe Layout

```
WF-GALLERY-CATEGORY-TAGS (12 cols, below filter bar)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Filter by experience or destination                          │
│                                                                               │
│ PILLARS (five — not a sixth category)                                         │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ │
│ │ Heritage   │ │ Educational│ │ Corporate  │ │ Family     │ │ Adventure  │ │
│ │ & Culture  │ │ Tours      │ │ Retreats   │ │ Getaways   │ │ & Trek     │ │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘ │
│                                                                               │
│ DESTINATIONS (geographic — separate from pillars)                             │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐               │
│ │ Polo Forest│ │ Saputara   │ │ Gir        │ │ Rann of    │  [All]          │
│ │            │ │            │ │            │ │ Kutch      │                 │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘               │
│                                                                               │
│ ACTIVE STATE (?category=heritage&destination=polo-forest)                     │
│ [Heritage & Culture ×]  [Polo Forest ×]  [Clear all tags]                    │
└──────────────────────────────────────────────────────────────────────────────┘

BEHAVIOUR
- Multi-select allowed within pillars OR destinations (not cross-required)
- "All" clears destination filter; no pillar selected = all pillars
- Chips sync with URL; combinable with type filter (§3)
```

### Grid
- Tag rows: 12 cols; chips auto-width, 8px gap
- Two labelled rows: pillars, then destinations
- Chip height: 36px

### Components
`WF-GALLERY-CATEGORY-TAGS`, `WF-CHIP-FILTER`, `WF-FILTER-CHIPS`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Caption → Pillar chip row → Destination chip row → Active dismiss chips

### CTA Position
**Clear all tags** — text link when any tag active.

### Responsive Behaviour
- Mobile: horizontal scroll per row with snap
- Active chips wrap below rows

### Accessibility Notes
- Pillar group: `aria-label="Experience category"`
- Destination group: `aria-label="Destination"`
- Dismiss chips: `aria-label="Remove Heritage filter"`
- Pillars are experience taxonomy — destinations are geographic (documented in caption)

### Future Motion Placeholder
`[MOTION: none]` — instant tag apply

---

## 5. Masonry Grid Layout

### Section Name
Masonry Grid — Gallery Tiles

### Purpose
Display mixed-aspect media in a **masonry** layout — dense visual browsing without uniform crop. Photo, video, and drone tiles share grid with type-specific treatments (§7, §8).

### Wireframe Layout

```
WF-GALLERY-GRID (12 cols, masonry — 4 columns desktop)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ col 1 ─┐ ┌─ col 2 ─┐ ┌─ col 3 ─┐ ┌─ col 4 ─┐                            │
│ │ ┌──────┐ │ │ ┌──────┐ │ │ ┌──────┐ │ │ ┌──────┐ │                            │
│ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │  ← photo tiles           │
│ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │                            │
│ │ │ ▓▓▓▓ │ │ │ └──────┘ │ │ │ ▓▓▓▓ │ │ │ └──────┘ │                            │
│ │ └──────┘ │ │ ┌──────┐ │ │ └──────┘ │ │ ┌──────┐ │                            │
│ │ ┌──────┐ │ │ │ ▓▓▓▓ │ │ │ ┌──────┐ │ │ │ ▓▓▓▓ │ │                            │
│ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │ │ │ ▓ VIDEO│ │ │ │ ▓▓▓▓ │ │  ← video tile (§7)     │
│ │ │ ▓▓▓▓ │ │ │ │ ▓▓▓▓ │ │ │ │ 2:34  │ │ │ │ ▓▓▓▓ │ │                            │
│ │ └──────┘ │ │ └──────┘ │ │ └──────┘ │ │ └──────┘ │                            │
│ │ ┌──────────────┐       │ │ ┌──────────────┐       │                            │
│ │ │ ▓▓ DRONE ▓▓▓│       │ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓ │       │  ← drone tile (§8)       │
│ │ │ ▓▓ aerial ▓▓│       │ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓ │       │                            │
│ │ └──────────────┘       │ │ └──────────────┘       │                            │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘                            │
│                                                                               │
│ TILE HOVER / FOCUS (photo example)                                            │
│ ┌──────────────┐                                                              │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓ │                                                              │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓ │  overlay:                                                    │
│ │ ──────────── │  [TEXT: Caption] Harnav river, school ecology trip           │
│ │ Heritage · Polo Forest                                                    │
│ └──────────────┘                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

SAMPLE TILE LABELS (no Lorem Ipsum)
  Photo:  "Jain temple courtyard, Polo Forest"
  Photo:  "Night safari spotlight, Aravalli foothills"
  Photo:  "Corporate team building, Polo Forest resort"
  Video:  "Heritage walk highlight reel — 2:34"
  Drone:  "Aerial — Harnav river bend, monsoon"
```

### Grid
- Masonry: 4 columns desktop (3 cols each = 12 total with gutters)
- Column gap: 8px; row gap: 8px (8pt system)
- Tile widths: 1 col each; heights vary by aspect (1:1, 4:3, 16:9, 21:9 drone)

### Components
`WF-GALLERY-GRID`, `WF-GALLERY-TILE`, `WF-MEDIA-BLOCK`, `WF-TYPE-CAP`, `WF-BADGE`

### Hierarchy
Grid container → Column stacks → Tiles (media → optional overlay caption)

### CTA Position
Tile click opens lightbox (§6) — primary interaction.

### Responsive Behaviour
- `≥1280px`: 4 columns
- `768–1279px`: 3 columns
- `<768px`: 2 columns
- Masonry reflows on filter change

### Accessibility Notes
- Each tile: `<button>` or `<a>` with `aria-label="View photo: Jain temple courtyard, Polo Forest"`
- Decorative images `alt=""` when label is on button; or meaningful `alt` on `<img>`
- Keyboard: tab through tiles; Enter opens lightbox

### Future Motion Placeholder
`[MOTION: stagger]` — tiles on initial load and filter apply; `[MOTION: layout]` — masonry reflow 200ms

---

## 6. Lightbox / Modal Placeholder

### Section Name
Lightbox Modal — Full Media View

### Purpose
Immersive full-screen view of selected photo, video, or drone clip. Caption, navigation, and optional path to related experience.

### Wireframe Layout

```
WF-GALLERY-LIGHTBOX (WF-MODAL — full viewport overlay)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [× Close]                                              Photo 12 of 186       │
│                                                                               │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ [TEXT: Caption] Harnav river ecology session — Std 8 students, Polo Forest      │
│                                                                               │
│ [TEXT: Caption]  Heritage · Educational Tours · Polo Forest · Mar 2025       │
│                                                                               │
│ [◀ Prev]                                    [Next ▶]                          │
│                                                                               │
│ ┌─ footer actions ──────────────────────────────────────────────────────────┐ │
│ │ [TEXT: Link] View Polo Forest Heritage Walk experience →                  │ │
│ │ [░ Share]  (Phase 2)                                                     │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘

VIDEO LIGHTBOX VARIANT
┌──────────────────────────────────────────────────────────────────────────────┐
│ [×]                                                    Video 5 of 38         │
│ ┌─ video player placeholder ─────────────────────────────────────────────┐ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │
│ │                    [ICON] Play / pause                                    │ │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ │
│ │ 0:00 ────────────●────────────────────────────────────────────── 2:34    │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│ [TEXT: Caption] Night safari highlight — Polo Forest, winter 2025             │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Modal: 100vw × 100vh; media centred max 90% width/height
- Caption bar: 12 cols equivalent, bottom-aligned
- Nav arrows: fixed left/right vertical centre

### Components
`WF-GALLERY-LIGHTBOX`, `WF-MODAL`, `WF-MEDIA-BLOCK`, `WF-VIDEO-PLAYER` (placeholder), `WF-TYPE-CAP`, `WF-TYPE-LINK`, `WF-BTN-ICON`, `WF-BADGE`

### Hierarchy
Close → Media → Caption → Meta tags → Prev/Next → Experience link

### CTA Position
- **View [experience] →** — secondary link when tile linked to experience
- **Share** — Phase 2; hidden or disabled in v1 wireframe

### Responsive Behaviour
- Mobile: full bleed media; swipe prev/next; close top-right
- Video: native controls or custom minimal bar

### Accessibility Notes
- `role="dialog"` + `aria-modal="true"` + `aria-label="Gallery lightbox"`
- Focus trap; Escape closes; return focus to triggering tile
- Prev/Next: `aria-label="Previous image"` / `"Next image"`
- Position announced: "Photo 12 of 186"
- Video: keyboard-accessible play/pause

### Future Motion Placeholder
`[MOTION: fade-scale]` — modal open; `[MOTION: crossfade]` — prev/next media; `[MOTION: none]` when `prefers-reduced-motion`

---

## 7. Video Tile Treatment

### Section Name
Video Tile — Grid Variant

### Purpose
Distinguish **video** items in the masonry grid — play affordance, duration, and optional poster frame. Click opens video lightbox (§6).

### Wireframe Layout

```
WF-GALLERY-TILE-VIDEO (within masonry column)
┌──────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│        ○             │  ← play icon centred (44×44 min)
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ [WF-BADGE] 2:34      │  ← duration bottom-right
│ ──────────────────── │
│ [TEXT: Caption]      │
│ Heritage walk reel   │
└──────────────────────┘

STATES
  Default: poster frame + play icon + duration
  Hover:   slight overlay darken; caption visible
  Focus:   visible focus ring on tile button

FILTERED VIEW (?type=video)
  Grid shows only video tiles — same treatment, uniform browse
```

### Grid
- Tile: 1 masonry column width
- Aspect: predominantly 16:9; may span 2 cols for featured video (optional)
- Play icon: centred; duration badge: 8px inset from bottom-right

### Components
`WF-GALLERY-TILE-VIDEO`, `WF-MEDIA-BLOCK`, `WF-BADGE`, `WF-TYPE-CAP`, `[ICON]` play

### Hierarchy
Poster image → Play icon → Duration badge → Caption

### CTA Position
Entire tile is button — opens video lightbox.

### Responsive Behaviour
- Play icon and duration scale with tile; min 44px touch target on tile

### Accessibility Notes
- `aria-label="Play video: Heritage walk reel, 2 minutes 34 seconds"`
- Duration in label for screen readers
- Play icon decorative if label on button

### Future Motion Placeholder
`[MOTION: subtle-pulse]` — play icon on hover (optional); disabled with `prefers-reduced-motion`

---

## 8. Drone Tile Treatment

### Section Name
Drone Tile — Grid Variant

### Purpose
Highlight **aerial / drone** footage — wide aspect ratio, aerial badge, and geographic context. Signals premium visual content distinct from ground photos and handheld video.

### Wireframe Layout

```
WF-GALLERY-TILE-DRONE (within masonry — often wider)
┌────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  ← 21:9 or 2:1 aspect
│ [WF-BADGE] Drone · Aerial              │  ← top-left badge
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│        ○ play (if video drone)         │
│ [WF-BADGE] 0:48                        │
│ ────────────────────────────────────── │
│ [TEXT: Caption]                        │
│ Aravalli ridge — monsoon clouds        │
└────────────────────────────────────────┘

SPAN VARIANT (featured drone — optional 2-col width)
┌──────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ [WF-BADGE] Drone · Polo Forest                                         │
└──────────────────────────────────────────────────────────────┘

FILTERED VIEW (?type=drone)
  Grid shows only drone tiles — wider masonry rhythm
```

### Grid
- Standard drone tile: 1 col, 21:9 aspect
- Featured span: 2 cols (8 of 12 grid width in 4-col masonry)
- Badge inset: 8px top-left

### Components
`WF-GALLERY-TILE-DRONE`, `WF-MEDIA-BLOCK`, `WF-BADGE`, `WF-TYPE-CAP`, `[ICON]` play (when clip)

### Hierarchy
Aerial badge → Wide media → Duration (if video) → Caption with location

### CTA Position
Tile click → lightbox with drone video or full-resolution still.

### Responsive Behaviour
- Mobile: drone tiles remain wide aspect; 2-col span becomes full width

### Accessibility Notes
- `aria-label="View drone aerial: Aravalli ridge monsoon clouds"`
- Badge text included in accessible name
- Wide aspect does not reduce touch target — full tile clickable

### Future Motion Placeholder
`[MOTION: parallax-subtle]` — optional scroll parallax on drone stills (Phase 2); `[MOTION: none]` v1

---

## 9. Load More / Pagination

### Section Name
Load More & Pagination — Gallery Continuation

### Purpose
Progressive loading for large catalogues (240+ items). **Load more** preferred for immersion; numbered pagination available as fallback or when `?page=` deep-linked.

### Wireframe Layout

```
DEFAULT — WF-GALLERY-LOAD-MORE (below masonry grid)
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│                    ┌─────────────────────────────┐                           │
│                    │ ░ Load more — 48 remaining   │                           │
│                    └─────────────────────────────┘                           │
│                                                                               │
│ [TEXT: Caption]  Showing 48 of 240 items                                    │
└──────────────────────────────────────────────────────────────────────────────┘

AFTER LOAD (appends next 24 tiles, masonry reflows)
┌──────────────────────────────────────────────────────────────────────────────┐
│                    ┌─────────────────────────────┐                           │
│                    │ ░ Load more — 24 remaining   │                           │
│                    └─────────────────────────────┘                           │
│ [TEXT: Caption]  Showing 72 of 240 items                                    │
└──────────────────────────────────────────────────────────────────────────────┘

PAGINATION FALLBACK (?page=2 or user preference)
┌──────────────────────────────────────────────────────────────────────────────┐
│                    [◀ Prev]   1   2   3   4   5   [Next ▶]                   │
│ [TEXT: Caption]  Page 2 of 5 · 48 items per page                            │
└──────────────────────────────────────────────────────────────────────────────┘

BEHAVIOUR
- Initial load: 48 tiles
- Load more: +24 tiles per click
- Preserves type, category, destination filters
- Scroll position maintained; optional scroll to first new tile
```

### Grid
- Control: centred, 12 cols
- Button min-width: 240px; height 48px

### Components
`WF-GALLERY-LOAD-MORE`, `WF-PAGINATION`, `WF-BTN-SECONDARY`, `WF-TYPE-CAP`

### Hierarchy
Load more button → Remaining count caption

### CTA Position
**Load more** — primary continuation action; pagination prev/next as fallback.

### Responsive Behaviour
- Mobile: full-width load more button
- Pagination: simplified to Prev | Page N | Next on small screens

### Accessibility Notes
- Load more: `aria-live="polite"` announces "24 more items loaded"
- Button label includes count: "Load more, 48 remaining"
- Pagination: `<nav aria-label="Gallery pagination">`

### Future Motion Placeholder
`[MOTION: stagger]` — newly loaded tiles; `[MOTION: none]` on button

---

## 10. Empty State

### Section Name
Empty State — No Matching Media

### Purpose
Recover when type + tag filters return zero items. Suggest broader filters or Polo Forest highlights.

### Wireframe Layout

```
WF-EMPTY-STATE (replaces grid when 0 results)
┌──────────────────────────────────────────────────────────────────────────────┐
│                          [ICON]                                               │
│              [TEXT: H2]  No gallery items match your filters                │
│              [TEXT: Body]  Try showing all media types or clearing category   │
│              tags. Polo Forest photos are available across every season.      │
│                                                                               │
│              ┌────────────────────┐  ┌────────────────────┐                  │
│              │ ░ Clear all filters│  │ █ Show all photos  │                  │
│              └────────────────────┘  └────────────────────┘                  │
│                                                                               │
│              [TEXT: H3]  Featured from Polo Forest                            │
│              ┌─ thumb ─┐ ┌─ thumb ─┐ ┌─ thumb ─┐                            │
│              │ ▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓ │                            │
│              │ Temple  │ │ River   │ │ Safari  │                            │
│              └─────────┘ └─────────┘ └─────────┘                            │
└──────────────────────────────────────────────────────────────────────────────┘

TYPE-ONLY EMPTY (?type=drone + narrow tags)
  H2: No drone clips for this filter
  Body: View all drone footage from Polo Forest and Gujarat
```

### Grid
- Empty state: 12 cols; content 6 cols centred
- Featured thumbs: 3 × 4 cols

### Components
`WF-EMPTY-STATE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-BTN-SECONDARY`, `WF-BTN-PRIMARY`, `WF-GALLERY-TILE` (compact), `[ICON]`

### Hierarchy
Icon → H2 → Body → Recovery CTAs → Featured thumbs

### CTA Position
- **Clear all filters** → resets query params
- **Show all photos** → `?type=photo` with tags cleared
- Thumbs → open lightbox or clear filters

### Responsive Behaviour
- Mobile: stacked CTAs; thumbs horizontal scroll

### Accessibility Notes
- `aria-live="polite"` on zero results
- Featured thumbs have descriptive labels

### Future Motion Placeholder
`[MOTION: fade-in]` — empty state swap

---

## 11. Footer

### Section Name
Global Footer — Gallery Page Instance

### Purpose
Secondary navigation and trust/legal continuity. Same shell as Step 1 D10.

### Wireframe Layout

```
(See Step 1 § D10 — full footer wireframe)

GALLERY-SPECIFIC NOTES:
- Discover column: Gallery link is current page (aria-current)
- Polo Forest, Destinations, Stories, Reviews in Discover column
- Experiences column: five pillar links unchanged
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
│ Home › Gallery                                                               │
│ [OVERLINE] POLO FOREST & GUJARAT                                             │
│ [H1] Gallery                                                                   │
│ [Body] Photos, videos, and drone footage...                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ FILTER BAR: [█ All] [Photo] [Video] [Drone]    240 items                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ TAGS: Heritage | Education | Corporate | Family | Adventure                  │
│       Polo Forest | Saputara | Gir | Rann | [All]                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ MASONRY GRID (4-col)                                                           │
│ [photo][photo][video][photo]                                                   │
│ [photo][drone────────][photo]                                                  │
│ [video][photo][photo][drone]                                                   │
│ ...                                                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Load more — 48 remaining]                                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ WF-SHELL-FOOTER                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

LIGHTBOX (overlay — on tile click)
  Full media · Caption · Prev/Next · Experience link · [×]
```

---

# Appendix

## A. URL parameter reference

| Param | Values | Purpose |
|-------|--------|---------|
| `type` | `all` (default), `photo`, `video`, `drone` | Media format filter |
| `category` | `heritage`, `education`, `corporate`, `family`, `adventure` | Pillar tag |
| `destination` | `polo-forest`, `saputara`, `gir`, `rann-of-kutch`, etc. | Geographic tag |
| `experience` | experience slug | Pre-filter from detail page link |
| `page` | integer ≥1 | Pagination fallback |

## B. Inbound links from other wireframes

| Source | Link pattern |
|--------|--------------|
| Homepage §20 Gallery Preview | `/gallery` |
| Experience detail §5 | `/gallery?experience=[slug]` |
| Education landing §11 | `/gallery?category=education` |
| Corporate landing | `/gallery?category=corporate` |
| Destinations §6 Polo Forest | `/gallery?destination=polo-forest` |

## C. Media type vs taxonomy

| Axis | UI control | Example |
|------|------------|---------|
| **Media type** | Filter bar §3 | Photo, Video, Drone |
| **Experience pillar** | Category tags §4 | Heritage, Educational Tours |
| **Geographic** | Destination tags §4 | Polo Forest, Gir |
| **Not mixed** | Pillars ≠ destinations | Five pillars only; destinations separate |

## D. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Page Header | `WF-BREADCRUMB`, `WF-PAGE-HEADER` |
| Filter Bar | `WF-GALLERY-FILTER-BAR`, `WF-TABS` |
| Category Tags | `WF-GALLERY-CATEGORY-TAGS`, `WF-CHIP-FILTER` |
| Masonry Grid | `WF-GALLERY-GRID`, `WF-GALLERY-TILE` |
| Lightbox | `WF-GALLERY-LIGHTBOX`, `WF-MODAL` |
| Video Tile | `WF-GALLERY-TILE-VIDEO` |
| Drone Tile | `WF-GALLERY-TILE-DRONE` |
| Load More | `WF-GALLERY-LOAD-MORE`, `WF-PAGINATION` |
| Empty State | `WF-EMPTY-STATE` |
| Footer | `WF-SHELL-FOOTER` |

## E. Handoff checklist

| Requirement | Status |
|-------------|--------|
| Filter bar: All / Photo / Video / Drone | Complete |
| Category tags (pillars + destinations) | Complete |
| Masonry grid layout | Complete |
| Lightbox/modal placeholder | Complete |
| Video tile treatment | Complete |
| Drone tile treatment | Complete |
| Load more / pagination | Complete |
| Empty state | Complete |
| Footer | Complete |
| Five pillars; geographic separate | Complete |
| 12-col / 8px; 1440/1280 desktop-first | Complete |
| No Lorem Ipsum | Complete |
