# Polo Safari — UX Wireframe System
## Step 7: Destinations Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Destinations index (`/destinations`) — geographic discovery of Gujarat experience hubs; **Polo Forest** as primary featured hub at `/polo-forest`  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md), [Step 3 — Experience Listing](./03-experience-listing.md)  
**Next step:** Step 8 — Polo Forest destination hub (`/polo-forest`) or booking flow wireframes  

**Reference context:** Geographic grouping is **separate from the five experience pillars**. Destinations answer "where in Gujarat?" — pillars answer "what type of experience?" Filters cross-reference both dimensions without conflating taxonomy.

---

## Decisions Log

Inherited from Steps 1–3; decisions that directly shape this page.

| # | Decision | Destinations page impact |
|---|----------|--------------------------|
| 1 | **Full online booking elsewhere** | Destination cards link to hub pages and filtered experience lists — **Book Now** lives on `/experiences`, not here |
| 2 | **UPI/card at checkout** | N/A on this page — trust micro-copy optional in page header only |
| 3 | **Login required for booking** | N/A — no checkout on destinations index |
| 4 | **English-only** | All filter labels, region names, and empty-state copy in English |
| 5 | **Confirmed taxonomy (Option A)** | **Experience type** filter uses five pillars — not a sixth "Destinations" category. This page is **geographic IA** under Discover |
| 6 | **Corporate & education RFP separate** | Destination cards may surface RFP pillar landings in empty-state escape links — not in default card CTAs |
| 7 | **Trust signals** | Page header trust strip; per-card experience counts and guest ratings where available |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure — used as **experience type filter** only. **Popular Destinations** is this page's purpose: geographic grouping. **`/polo-forest`** is the primary destination hub — featured above the grid. Secondary hubs: Saputara, Gir, Kutch, Kevadia, etc.

### Scope boundary

| Included on this page | Excluded (separate flows) |
|-----------------------|---------------------------|
| Destination discovery by region, season, experience type | Individual destination story pages (e.g. `/polo-forest` — Step 8) |
| Map view toggle with Gujarat pins | Turn-by-turn navigation (detail pages) |
| Featured Polo Forest hub card | Standard experience booking checkout |
| Filter, paginate, empty state | Admin/CMS views |

---

## Page Overview

### Routes & templates

| Property | Value |
|----------|-------|
| Primary URL | `/destinations` |
| Featured hub URL | `/polo-forest` — primary destination story & experience aggregation |
| Secondary hub URLs | `/destinations/saputara`, `/destinations/gir`, `/destinations/kutch`, etc. (or flat slugs TBD at build) |
| Query params | `?region=&experience=&season=&view=grid|map&q=&page=` |
| Template | `WF-SHELL` + destinations listing layout |
| H1 | "Destinations in Gujarat" (semantic H1 in page header) |
| Emotion arc | Curiosity → Orientation → Exploration |

### Layout anatomy (desktop)

```
┌─ WF-SHELL-HEADER ─────────────────────────────────────────────────────────────┐
├─ WF-BREADCRUMB ──────────────────────────────────────────────────────────────┤
├─ WF-PAGE-HEADER (title, intro, trust strip) ─────────────────────────────────┤
├─ WF-DEST-FILTERS (region, experience type, season) ──────────────────────────┤
├─ WF-DEST-TOOLBAR (results count, map/grid toggle, sort) ─────────────────────┤
├─ WF-DEST-CATEGORIES-STRIP (quick region chips) ──────────────────────────────┤
├─ WF-DEST-FEATURED-POLO (featured hub card — Polo Forest) ───────────────────┤
├─ WF-DEST-GRID or WF-DEST-MAP (destination cards / map view) ─────────────────┤
├─ WF-PAGINATION ──────────────────────────────────────────────────────────────┤
├─ WF-EMPTY-STATE (conditional — no results) ──────────────────────────────────┤
└─ WF-SHELL-FOOTER ─────────────────────────────────────────────────────────────┘
```

### Section order (documented below)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Page Header & Breadcrumb
3.  Filters (region, experience type, season)
4.  Map View Toggle (toolbar)
5.  Categories Strip
6.  Featured Polo Forest Hub Card
7.  Destination Cards Grid (or map view)
8.  Empty State (conditional)
9.  Pagination
10. Footer (WF-SHELL-FOOTER)
```

### Destinations-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-DEST-PAGE-HEADER` | Title, intro, trust strip — geographic focus |
| `WF-DEST-FILTER-BAR` | Horizontal filter row — region, experience type, season |
| `WF-DEST-VIEW-TOGGLE` | Grid / Map segmented control |
| `WF-DEST-CATEGORIES-STRIP` | Scrollable region/type quick-filter chips |
| `WF-DEST-FEATURED-HUB` | Large featured card — Polo Forest primary hub |
| `WF-DEST-CARD` | Destination card — image, name, region, meta, explore CTA |
| `WF-DEST-MAP` | Gujarat map with destination pins + list sync |
| `WF-DEST-EMPTY` | No destinations match filters — recovery UI |
| `WF-DEST-TRUST-STRIP` | Stats — destinations, experiences, regions covered |

---

# Destinations Page Sections

---

## 1. Navigation

### Section Name
Global Header — Destinations Index Default State

### Purpose
Persistent wayfinding. Header uses **scrolled/surface** state. **Discover** nav context active; **Polo Forest** top-level link remains shortcut to primary hub.

### Wireframe Layout

```
DESTINATIONS PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

ACTIVE STATE: "Discover" link — underline or bold (grayscale emphasis)
MEGA MENU — Discover column includes:
  Destinations → /destinations (active)
  Polo Forest → /polo-forest

(See Step 1 § D1, D4)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Nav (Discover active) → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header utility CTA. Page-level CTAs are **Explore** links on destination cards.

### Responsive Behaviour
See Step 1 § D1, D4. Mobile drawer includes Destinations under Discover.

### Accessibility Notes
Skip link → `#main-content`. Discover mega link: `aria-current="page"` when on `/destinations`.

### Future Motion Placeholder
`[MOTION: header-condense]` — on scroll

---

## 2. Page Header

### Section Name
Page Header — Title, Intro & Trust Strip

### Purpose
Orient users to **geographic discovery** — clarify this page groups Gujarat destinations, not experience pillars. Surface trust early.

### Wireframe Layout

```
BREADCRUMB (cols 1–12, below header)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Discover  ›  Destinations                         │
└──────────────────────────────────────────────────────────────────────────────┘

PAGE HEADER (WF-DEST-PAGE-HEADER, padding-top 32px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  DISCOVER GUJARAT                                            │
│ [TEXT: H1]        Destinations in Gujarat                                     │
│                                                                               │
│ [TEXT: Body]      From the ancient Aravalli forests of Polo Forest to the    │
│                   lions of Gir and the white salt desert of Kutch — find     │
│                   where your next experience begins. Experience type is a     │
│                   filter here, not a category.                                │
│                                                                               │
│ ┌─ WF-DEST-TRUST-STRIP ──────────────────────────────────────────────────────┐│
│ │ [TEXT: Stat] 8 regions  │  12 destinations  │  120+ experiences  │  4.8★   ││
│ │ [TEXT: Link] Read guest reviews →                                           ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Breadcrumb: 12 cols, left-aligned
- Header block: 8 cols (cols 1–8); trust strip spans 12 cols below
- Section padding: 32px top, 24px bottom

### Components
`WF-BREADCRUMB`, `WF-DEST-PAGE-HEADER`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-DEST-TRUST-STRIP`, `WF-TYPE-STAT`, `WF-TYPE-LINK`, `WF-TYPE-CAP`

### Hierarchy
Breadcrumb → Overline → H1 → Body (geographic vs pillar clarification) → Trust strip

### CTA Position
**Read guest reviews →** — text link in trust strip → `/reviews`. No primary button in header.

### Responsive Behaviour
- Desktop: 8-col text block
- Mobile: full width; trust strip wraps to 2 lines

### Accessibility Notes
- One `<h1>` per page — "Destinations in Gujarat"
- Breadcrumb: `<nav aria-label="Breadcrumb">`
- Body copy explicitly distinguishes geography from pillars — aids screen reader context
- `<title>` — "Destinations in Gujarat | Polo Safari"

### Future Motion Placeholder
`[MOTION: fade-in]` — header on route load

---

## 3. Filters

### Section Name
Filters — Region, Experience Type, Season

### Purpose
Narrow destinations by **where** (region), **what experiences exist there** (five pillars as filter — not categories), and **when** (season). Syncs to URL query params.

### Wireframe Layout

```
WF-DEST-FILTER-BAR (horizontal, 12 cols, sticky below header on scroll optional)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H3]  Filter destinations                                               │
│                                                                               │
│ ┌─ Region (4 cols) ──────────┐ ┌─ Experience type (4 cols) ─┐ ┌─ Season ──┐ │
│ │ ░ Select region        [▾] │ │ ░ Experience type      [▾] │ │ ░ Season [▾]│ │
│ │   All Gujarat (default)    │ │   All types (default)      │ │ All seasons │ │
│ │   North Gujarat            │ │   Heritage & Culture       │ │ Monsoon     │ │
│ │   · Polo Forest, Idar      │ │   Educational Tours        │ │ Jun–Sep     │ │
│ │   · Ahmedabad day trips    │ │   Corporate Retreats       │ │ Winter      │ │
│ │   Saurashtra               │ │   Family Getaways          │ │ Oct–Feb     │ │
│ │   · Gir, Somnath, Dwarka   │ │   Adventure & Trekking     │ │ Summer      │ │
│ │   Kutch                    │ │   (filters destinations    │ │ Mar–May     │ │
│ │   · Rann of Kutch          │ │    that offer this pillar) │ │             │ │
│ │   South Gujarat            │ │                            │ │             │ │
│ │   · Saputara, Dang         │ │                            │ │             │ │
│ │   Central Gujarat          │ │                            │ │             │ │
│ │   · Kevadia, Champaner     │ │                            │ │             │ │
│ └────────────────────────────┘ └────────────────────────────┘ └─────────────┘ │
│                                                                               │
│ ACTIVE FILTERS — WF-FILTER-CHIPS (when any filter applied)                    │
│ [ Region: North Gujarat × ] [ Experience: Heritage × ] [ Season: Winter × ] │
│ [TEXT: Link]  Clear all filters                                               │
└──────────────────────────────────────────────────────────────────────────────┘

MOBILE — filters collapse to single row + "Filters (2)" button → bottom sheet
(See Step 3 §10 drawer pattern — same WF-FILTER-DRAWER component, 3 groups only)
```

### Grid
- Filter bar: 12 cols; three equal 4-col dropdown groups on desktop
- Active chips row: full 12 cols below dropdowns
- Vertical gap: 16px between label and control

### Components
`WF-DEST-FILTER-BAR`, `WF-FILTER-GROUP`, `WF-INPUT-SELECT`, `WF-FILTER-CHIPS`, `WF-TYPE-H3`, `WF-TYPE-LINK`, `WF-TYPE-CAP`, `WF-FILTER-DRAWER` (mobile)

### Hierarchy
H3 → Three filter dropdowns → Active chips → Clear all

### CTA Position
**Clear all filters** — text link resets query params. No apply button on desktop — instant filter on change.

### Responsive Behaviour
- Desktop: horizontal 3-up dropdowns
- Tablet/mobile: **Filters (n)** trigger opens drawer with same three groups; sticky **Show X destinations** footer

### Accessibility Notes
- Each `<select>` or combobox has visible `<label>`
- Region options include sub-label examples (Polo Forest) in option text — not colour-only
- Experience type filter described as "Show destinations that offer this experience type"
- Filter change announces via `aria-live="polite"`: "Showing 4 destinations in North Gujarat"
- Chips removable via keyboard — `aria-label="Remove North Gujarat filter"`

### Future Motion Placeholder
`[MOTION: none]` — instant filter; skeleton cards during fetch (§7)

---

## 4. Map View Toggle

### Section Name
Map View Toggle — Grid / Map Segmented Control

### Purpose
Let users switch between **card grid** (default, SEO-friendly) and **map view** (spatial orientation across Gujarat). Toggle state in URL `?view=map`.

### Wireframe Layout

```
WF-DEST-TOOLBAR (12 cols — shares row with results count)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Showing 11 of 12 destinations                               │
│                                    ┌─ WF-DEST-VIEW-TOGGLE ─────────────────┐ │
│                                    │ [ ▦ Grid ● ]  [ ○ Map ]               │ │
│                                    └───────────────────────────────────────┘ │
│                                    [TEXT: Caption]  Sort: Featured first [▾]   │
└──────────────────────────────────────────────────────────────────────────────┘

MAP VIEW ACTIVE (?view=map)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ 8 cols ── WF-DEST-MAP ─────────────────────┐ ┌─ 4 cols pin list ─────────┐ │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ │ [TEXT: H3] On map         │ │
│ │ ░░ Gujarat outline (grayscale) ░░░░░░░░░░░░ │ │ ○ Polo Forest — Idar  ●   │ │
│ │ ░░░░░░░ ○ Polo Forest (Idar) ░░░░░░░░░░░░ │ │ ○ Saputara — Dang         │ │
│ │ ░░░ ○ Gir ○ Kutch ○ Kevadia ○ Saputara ░░░ │ │ ○ Gir — Junagadh          │ │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ │ ○ Great Rann — Kutch      │ │
│ │ [TEXT: Caption]  Click pin or list item     │ │ ... scrollable            │ │
│ │ to preview destination                      │ │                           │ │
│ └─────────────────────────────────────────────┘ └───────────────────────────┘ │
│                                                                               │
│ SELECTED PIN PREVIEW (below map or slide-over panel)                          │
│ ┌─ WF-DEST-CARD (compact) ──────────────────────────────────────────────────┐│
│ │ [IMG thumb] Polo Forest · North Gujarat · 12 experiences · [Explore →]    ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘

GRID VIEW DEFAULT (?view=grid or omitted)
  Toolbar toggle shows Grid active; §7 card grid visible; map hidden
```

### Grid
- Toolbar: results count left (cols 1–6); toggle + sort right (cols 7–12)
- Map view: 8-col map + 4-col sync list within `WF-CONTAINER`
- Toggle control: min 44px touch height

### Components
`WF-DEST-TOOLBAR`, `WF-DEST-VIEW-TOGGLE`, `WF-DEST-MAP`, `WF-RESULTS-COUNT`, `WF-SORT-SELECT`, `WF-DEST-CARD` (compact preview), `WF-TYPE-CAP`, `WF-TYPE-H3`, `WF-TYPE-LINK`

### Hierarchy
Results count → View toggle → Sort → (map mode) Map + pin list → Selected preview card

### CTA Position
Map preview card: **Explore →** → destination hub URL. Toggle itself is not a conversion CTA.

### Responsive Behaviour
- Desktop: side-by-side map + list
- Mobile map view: full-width map; pin list becomes bottom sheet on pin tap
- Grid default on mobile — map optional via toggle
- Map lib: static grayscale SVG acceptable for wireframe; interactive pins in build

### Accessibility Notes
- Toggle: `role="tablist"` or `radiogroup` with `aria-checked` / `aria-selected`
- Map pins: keyboard focusable; list sync — selecting list item focuses pin
- Map has text alternative: "Map showing 12 destinations across Gujarat" + full list in DOM
- Sort: "Featured first" puts Polo Forest hub first when unfiltered

### Future Motion Placeholder
`[MOTION: crossfade]` — grid/map swap; `[MOTION: none]` on pin select — instant preview update

---

## 5. Categories Strip

### Section Name
Categories Strip — Quick Region & Destination Type Chips

### Purpose
Fast-filter shortcuts above the grid — complements §3 dropdowns. Regions are **geographic**; strip may also include destination **character** tags (Forest, Wildlife, Heritage, Hill Station, Coastal).

### Wireframe Layout

```
WF-DEST-CATEGORIES-STRIP (full 12 cols, horizontal scroll)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Browse by region or type                                     │
│                                                                               │
│ ┌─ scrollable chip row ──────────────────────────────────────────────────────┐│
│ │ [█ All] [░ North Gujarat] [░ Saurashtra] [░ Kutch] [░ South Gujarat]      ││
│ │ [░ Central Gujarat] │ [░ Forest] [░ Wildlife] [░ Heritage] [░ Hill Station]││
│ │ [░ Coastal] [░ Desert]                                                     ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ CHIP BEHAVIOUR                                                                │
│ · Region chips sync with §3 Region filter                                     │
│ · Type chips (Forest, Wildlife…) filter destination tags — orthogonal to     │
│   five pillars (experience type filter remains in §3)                         │
│ · Single-select per chip group OR multi-select — document build as multi      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Strip: 12 cols; chips in horizontal scroll container
- Chip height: 36px; gap: 8px
- Padding: 24px vertical section

### Components
`WF-DEST-CATEGORIES-STRIP`, `WF-FILTER-CHIPS`, `WF-TYPE-CAP`

### Hierarchy
Caption → Scrollable chip row (regions | type tags)

### CTA Position
Chips are filters — not navigation CTAs. Active chip uses filled grayscale (`█`) vs outline (`░`).

### Responsive Behaviour
- Desktop: scroll if overflow; fade edge masks optional
- Mobile: horizontal scroll with snap; first chip "All" always visible

### Accessibility Notes
- Chip group: `role="group"` with `aria-label="Filter by region"` and separate group for type tags
- Selected chip: `aria-pressed="true"`
- Keyboard: arrow keys move between chips; Space toggles

### Future Motion Placeholder
`[MOTION: none]` — instant chip filter

---

## 6. Featured Polo Forest Hub Card

### Section Name
Featured Polo Forest Hub Card — Primary Destination

### Purpose
Elevate **`/polo-forest`** as the flagship hub — Polo Safari's home destination. Always visible when no filters exclude it; demoted or hidden only when filters explicitly exclude North Gujarat / Polo Forest.

### Wireframe Layout

```
WF-DEST-FEATURED-HUB (12 cols, above destination grid)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  PRIMARY DESTINATION                                         │
│                                                                               │
│ ┌─ featured card (12 cols, split layout) ────────────────────────────────────┐│
│ │ ┌─ 7 cols media ─────────────────────┐ ┌─ 5 cols content ──────────────────┐ ││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [WF-BADGE]  Most popular              │ ││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: H2] Polo Forest                │ ││
│ │ │ [IMG: wide 21:9]                   │ │ [TEXT: Caption] Idar · North Gujarat  │ ││
│ │ │ Ancient temples, Harnav river,     │ │ [TEXT: Body] Gujarat's hidden         │ ││
│ │ │ eco-resorts in the Aravalli          │ │ Aravalli gem — heritage walks,       │ ││
│ │ │                                    │ │ school programs, corporate offsites,  │ ││
│ │ │                                    │ │ and family camping 130 km from        │ ││
│ │ │                                    │ │ Ahmedabad.                            │ ││
│ │ │                                    │ │                                       │ ││
│ │ │                                    │ │ [TEXT: Stat row]                      │ ││
│ │ │                                    │ │ 45+ experiences · All 5 pillars ·     │ ││
│ │ │                                    │ │ 2 hr drive · Best Oct–Mar             │ ││
│ │ │                                    │ │                                       │ ││
│ │ │                                    │ │ [█ Explore Polo Forest]               │ ││
│ │ │                                    │ │ [TEXT: Link] View experiences here →  │ ││
│ │ │                                    │ │   /experiences?location=polo-forest   │ ││
│ │ └────────────────────────────────────┘ └───────────────────────────────────────┘ ││
│ └──────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘

FILTERED OUT STATE
  When region filter excludes North Gujarat: featured card hidden; grid only
  When experience type filter active: featured card remains if Polo Forest offers that pillar
```

### Grid
- Featured card: 12 cols; internal 7 + 5 split
- Section margin-bottom: 32px before grid
- Card padding: 0 (image bleed) + 32px content padding

### Components
`WF-DEST-FEATURED-HUB`, `WF-DEST-CARD` (featured variant), `WF-MEDIA-219`, `WF-BADGE`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-CAP`, `WF-TYPE-BODY`, `WF-TYPE-STAT`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`

### Hierarchy
Overline → Featured card (media | badge → H2 → location → body → stats → primary explore → experiences link)

### CTA Position
- Primary: **Explore Polo Forest** → `/polo-forest`
- Secondary: **View experiences here →** → `/experiences?location=polo-forest`
- No Book Now — booking on experience detail/listing

### Responsive Behaviour
- Desktop: horizontal split 7+5
- Mobile: image stack above content; CTAs full width stacked

### Accessibility Notes
- H2 for "Polo Forest" — page H1 remains "Destinations in Gujarat"
- Stats row uses `<dl>` — experience count, pillars, drive time, best season
- Primary CTA: `aria-label="Explore Polo Forest destination hub"`
- Badge "Most popular" — text label, not colour-only

### Future Motion Placeholder
`[MOTION: slide-up]` — featured card entrance on load; `[MOTION: none]` when filtered out

---

## 7. Destination Cards Grid

### Section Name
Destination Cards Grid — Secondary Gujarat Hubs

### Purpose
Browseable grid of all destinations matching active filters — excluding or deduplicating Polo Forest if featured card above is shown (show Polo Forest in featured only; grid shows other hubs).

### Wireframe Layout

```
WF-DEST-GRID (?view=grid, 12 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  All destinations                    (visually hidden if redundant)│
│                                                                               │
│ ┌─ 4 cols ────────┐ ┌─ 4 cols ────────┐ ┌─ 4 cols ────────┐                  │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                  │
│ │ [IMG 16:9]      │ │ [IMG 16:9]      │ │ [IMG 16:9]      │                  │
│ │ Saputara        │ │ Gir National    │ │ Great Rann of   │                  │
│ │ Hill Station    │ │ Park            │ │ Kutch           │                  │
│ │ South Gujarat   │ │ Saurashtra      │ │ Kutch           │                  │
│ │ [TEXT: Caption] │ │ [TEXT: Caption] │ │ [TEXT: Caption] │                  │
│ │ 8 experiences · │ │ 6 experiences · │ │ 5 experiences · │                  │
│ │ Family, Adv     │ │ Wildlife        │ │ Heritage, Adv   │                  │
│ │ [TEXT: Link]    │ │ [TEXT: Link]    │ │ [TEXT: Link]    │                  │
│ │ Explore →       │ │ Explore →       │ │ Explore →       │                  │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘                  │
│ ┌─ 4 cols ────────┐ ┌─ 4 cols ────────┐ ┌─ 4 cols ────────┐                  │
│ │ Statue of Unity │ │ Champaner-      │ │ Dwarka &        │                  │
│ │ Kevadia         │ │ Pavagadh        │ │ Somnath         │                  │
│ │ Central Gujarat │ │ Central Gujarat │ │ Saurashtra      │                  │
│ │ ...             │ │ ...             │ │ ...             │                  │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘                  │
└──────────────────────────────────────────────────────────────────────────────┘

CARD ANATOMY — WF-DEST-CARD
┌─────────────────────┐
│ ▓ [IMG 16:9]        │
│ [TEXT: H3] Name     │
│ [TEXT: Caption]     │
│   Region · Type tag │
│ [TEXT: Caption]     │
│   N experiences ·   │
│   pillar hints      │
│ [TEXT: Link] Explore→│
└─────────────────────┘

LOADING STATE
  3× skeleton cards — WF-SKELETON-CARD pulse (grayscale)
```

### Grid
- Cards: 3 × 4 cols per row
- Gap: 24px horizontal and vertical
- Grid hidden when `?view=map` — map (§4) replaces this section

### Components
`WF-DEST-GRID`, `WF-DEST-CARD`, `WF-MEDIA-169`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-CAP`, `WF-TYPE-LINK`, `WF-SKELETON-CARD`, `WF-BADGE` (optional "New" on emerging hubs)

### Hierarchy
(Optional H2) → Card grid → each card: image → name → region → meta → explore link

### CTA Position
Per card: **Explore →** → `/destinations/[slug]` or `/polo-forest` for primary (featured handles Polo Forest). Secondary click on image same target.

### Responsive Behaviour
- Desktop: 3-column grid
- Tablet: 2 columns
- Mobile: single column stack or 1-col with horizontal scroll optional

### Accessibility Notes
- Card: entire card clickable OR explicit "Explore Saputara" link — not both without duplicate focus
- H3 per destination name
- Pillar hints as text — "Family, Adventure" not icon-only
- Image alt: "[Destination name], [region], Gujarat"

### Future Motion Placeholder
`[MOTION: stagger]` — cards on scroll; skeleton pulse during load

---

## 8. Empty State

### Section Name
Empty State — No Matching Destinations

### Purpose
Recover when filter combination returns zero destinations — suggest broader filters, featured Polo Forest, or experience listing.

### Wireframe Layout

```
REPLACES GRID + FEATURED (when count = 0)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ WF-DEST-EMPTY (centred, 8 cols — cols 3–10) ──────────────────────────────┐│
│ │                          [ICON]                                            ││
│ │              [TEXT: H2]  No destinations match your filters                ││
│ │              [TEXT: Body]  Try a different region, experience type, or      ││
│ │              season. Polo Forest offers programs year-round.               ││
│ │                                                                            ││
│ │              ┌────────────────────┐  ┌────────────────────┐                ││
│ │              │ ░ Clear all filters│  │ █ Explore Polo     │                ││
│ │              │                    │  │   Forest           │                ││
│ │              └────────────────────┘  └────────────────────┘                ││
│ │                                                                            ││
│ │              [TEXT: H3]  Popular destinations                              ││
│ │              ┌─ compact ─┐ ┌─ compact ─┐ ┌─ compact ─┐                     ││
│ │              │ Saputara  │ │ Gir       │ │ Kutch     │                     ││
│ │              │ Explore → │ │ Explore → │ │ Explore → │                     ││
│ │              └───────────┘ └───────────┘ └───────────┘                     ││
│ │                                                                            ││
│ │              [TEXT: Body]  Looking for a specific experience type?         ││
│ │              [TEXT: Link]  Browse all experiences →  |  School program →   ││
│ │              |  Corporate proposal →                                        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Empty state: 8 cols centred (cols 3–10)
- Popular suggestions: 3 compact cards inline

### Components
`WF-DEST-EMPTY`, `WF-EMPTY-STATE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-BTN-SECONDARY`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`, `WF-DEST-CARD` (compact), `[ICON]`

### Hierarchy
Icon → H2 → Body → Clear / Polo Forest CTAs → Popular destinations → Experience/RFP escape links

### CTA Position
- **Clear all filters** → resets query params
- **Explore Polo Forest** → `/polo-forest`
- **Browse all experiences →** → `/experiences`
- **School program →** `/education#rfp` | **Corporate proposal →** `/corporate#rfp`

### Responsive Behaviour
- Mobile: stacked CTAs full width; compact cards horizontal scroll

### Accessibility Notes
- `aria-live="polite"` when results drop to zero
- Recovery links descriptive — not "Click here"
- Icon decorative `aria-hidden="true"`

### Future Motion Placeholder
`[MOTION: fade-in]` — empty state swap

---

## 9. Pagination

### Section Name
Pagination — Destination List Pages

### Purpose
Paginate destination grid when catalogue exceeds page size (default 9 cards per page excluding featured Polo Forest card). Preserves filter and view params.

### Wireframe Layout

```
WF-PAGINATION (centred, below grid — hidden in map view if all pins shown)
┌──────────────────────────────────────────────────────────────────────────────┐
│                    [ ◄ Prev ]  [ 1 ● ] [ 2 ] [ 3 ]  [ Next ► ]               │
│                    [TEXT: Caption]  Page 1 of 2 · 12 destinations total       │
└──────────────────────────────────────────────────────────────────────────────┘

URL: ?region=saurashtra&experience=heritage&season=winter&view=grid&page=2

EDGE CASE — single page
  Pagination hidden; results count in toolbar shows full total only

MAP VIEW
  Pagination hidden — all filtered pins visible on map; list scrolls
```

### Grid
- Centred within 12 cols
- Pagination control max-width: 480px
- Margin-top: 48px below last card row

### Components
`WF-PAGINATION`, `WF-BTN-GHOST`, `WF-TYPE-CAP`

### Hierarchy
Card grid → Pagination → Footer

### CTA Position
Prev/Next and page numbers — navigation only, not conversion.

### Responsive Behaviour
- Desktop: full page number list with ellipsis if >5 pages
- Mobile: **Prev | Page X of Y | Next** condensed

### Accessibility Notes
- `<nav aria-label="Pagination">`
- Current page: `aria-current="page"`
- Disabled Prev on page 1, disabled Next on last page
- Focus moves to results count on page change (optional)

### Future Motion Placeholder
`[MOTION: none]` — instant page swap; scroll to `#main-content` on page change

---

## 10. Footer

### Section Name
Global Footer — Site-Wide Exit Paths

### Purpose
Standard footer with **Destinations** context under Discover. Five pillars remain under Experiences — geographic links under Discover.

### Wireframe Layout

```
WF-SHELL-FOOTER (full width)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]                                                                        │
│ [TEXT: Body] Experiential travel at Polo Forest and across Gujarat.           │
│                                                                               │
│ Experiences    Discover       Plan           Company                          │
│ Heritage       Polo Forest ●  Plan your visit  About                          │
│ Educational    Destinations ● Stories          Contact                        │
│ Corporate      Gallery        Enquire          Careers                        │
│ Family         Reviews        FAQ              Legal                          │
│ Adventure                                                                     │
│                                                                               │
│ [WF-FORM-NEWSLETTER]  ░ Email    [█ Subscribe]                               │
│ [TEXT: Caption] © 2026 Polo Safari · Privacy · Terms                         │
└──────────────────────────────────────────────────────────────────────────────┘

● Destinations + Polo Forest — Discover column emphasis
(See Step 1 § D10)
```

### Grid
- 12 cols; link columns 3+3+3+3

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, `WF-FORM-NEWSLETTER`, `WF-INPUT-TEXT`, `WF-BTN-PRIMARY`

### Hierarchy
Logo → Tagline → Link columns → Newsletter → Legal

### CTA Position
**Subscribe** — newsletter. **Polo Forest** — primary hub shortcut in Discover column.

### Responsive Behaviour
- Desktop: 4-column link grid
- Mobile: stacked accordion

### Accessibility Notes
- Destinations link: `aria-current="page"` when on `/destinations`
- Polo Forest link distinct from Destinations index — both in Discover column

### Future Motion Placeholder
`[MOTION: none]`

---

# Appendices

## A. Destination catalogue (wireframe seed data)

| Destination | Region | Type tags | Slug | Experiences (indicative) |
|-------------|--------|-----------|------|--------------------------|
| **Polo Forest** | North Gujarat | Forest, Heritage | `polo-forest` | 45+ (all pillars) — **featured hub** |
| Saputara | South Gujarat | Hill Station | `saputara` | 8 |
| Gir National Park | Saurashtra | Wildlife | `gir` | 6 |
| Great Rann of Kutch | Kutch | Desert, Heritage | `kutch` | 5 |
| Statue of Unity / Kevadia | Central Gujarat | Heritage | `kevadia` | 4 |
| Champaner-Pavagadh | Central Gujarat | Heritage | `champaner` | 3 |
| Dwarka & Somnath | Saurashtra | Coastal, Heritage | `dwarka-somnath` | 4 |
| Ahmedabad day trips | North Gujarat | Heritage, Family | `ahmedabad` | 6 |
| Blackbuck Velavadar | Saurashtra | Wildlife | `velavadar` | 2 |
| Thol Bird Sanctuary | North Gujarat | Wildlife | `thol` | 2 |

## B. Filter query param specification

| Param | Values | Maps to |
|-------|--------|---------|
| `region` | `north-gujarat`, `saurashtra`, `kutch`, `south-gujarat`, `central-gujarat` | Region filter |
| `experience` | `heritage`, `education`, `corporate`, `family`, `adventure` | Experience type (five pillars) |
| `season` | `monsoon`, `winter`, `summer` | Season filter |
| `view` | `grid`, `map` | View toggle |
| `type` | `forest`, `wildlife`, `heritage`, `hill-station`, `coastal`, `desert` | Categories strip tags |
| `page` | integer | Pagination |
| `q` | string | Optional keyword search (destination name) |

## C. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Page Header | `WF-DEST-PAGE-HEADER`, `WF-DEST-TRUST-STRIP`, `WF-BREADCRUMB` |
| Filters | `WF-DEST-FILTER-BAR`, `WF-FILTER-*` |
| Map Toggle | `WF-DEST-VIEW-TOGGLE`, `WF-DEST-MAP`, `WF-DEST-TOOLBAR` |
| Categories Strip | `WF-DEST-CATEGORIES-STRIP`, `WF-FILTER-CHIPS` |
| Featured Polo Forest | `WF-DEST-FEATURED-HUB`, `WF-DEST-CARD` |
| Destination Grid | `WF-DEST-GRID`, `WF-DEST-CARD` |
| Empty State | `WF-DEST-EMPTY`, `WF-EMPTY-STATE` |
| Pagination | `WF-PAGINATION` |
| Footer | `WF-SHELL-FOOTER` |

## D. Cross-page links

| From | To | Trigger |
|------|-----|---------|
| Homepage §13 Popular Destinations | `/polo-forest`, `/destinations` | Explore Polo Forest / secondary cards |
| Experience listing location filter | `/destinations` | All destinations → |
| Nav Discover mega menu | `/destinations` | Destinations link |
| Featured hub card | `/polo-forest` | Explore Polo Forest |
| Destination card | `/destinations/[slug]` | Explore → |
| Empty state | `/experiences`, `/education#rfp`, `/corporate#rfp` | Recovery links |

## E. Geographic vs pillar distinction (handoff note)

| Question | Answered by | This page |
|----------|-------------|-----------|
| Where in Gujarat? | **Destinations** (`/destinations`, `/polo-forest`) | Yes |
| What type of trip? | **Five pillars** (`/heritage`, `/education`, etc.) | Filter only |
| Book a specific tour? | **Experiences** (`/experiences/[slug]`) | Link out |

## F. Step 8 handoff

| Item | Status |
|------|--------|
| All 10 destination sections specified | Complete |
| Featured `/polo-forest` hub card | Complete |
| Region, experience type, season filters | Complete |
| Map/grid toggle | Complete |
| Categories strip (geographic + type tags) | Complete |
| Empty state & pagination | Complete |
| Five pillars locked — not sixth category | Complete |
| English-only | Complete |
| Grayscale wireframes | Complete |
| 12-col / 8px / 1440·1280 | Complete |

---

**Document path:** `docs/ux-wireframes/07-destinations.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Steps 1–3, Step 2 §13 Popular Destinations, confirmed user decisions, Option A taxonomy lock
