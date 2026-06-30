# Polo Safari — UX Wireframe System
## Step 4: Experience Detail Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Experience detail (`/experiences/[slug]`) — full product page for **standard bookable experiences**  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md), [Step 3 — Experience Listing](./03-experience-listing.md)  
**Next step:** Step 5 — Booking flow wireframes  

**Reference experience (wireframe labels):** Polo Forest Heritage Walk — Heritage pillar, Polo Forest, Idar, Gujarat, 1 day, from ₹1,899 per person.

---

## Decisions Log

Inherited from Steps 1–3; decisions that directly shape this page.

| # | Decision | Detail page impact |
|---|----------|-------------------|
| 1 | **Full online booking** | Primary CTA **Book Now** → `/plan/book/[slug]/dates`; sticky booking widget persists on scroll |
| 2 | **UPI/card at checkout** | Booking widget caption: "Pay securely via UPI or card at checkout" |
| 3 | **Login required for booking** | Guest **Book Now** → `/account/login?returnUrl=/plan/book/[slug]/dates`; visible login note in widget |
| 4 | **English-only** | All section copy, labels, and FAQ in English |
| 5 | **Confirmed taxonomy (Option A)** | Five pillars: Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Badge and breadcrumb use pillar slug. Popular Destinations is geographic only (location meta, map) |
| 6 | **Corporate & education RFP separate** | This template is for **standard bookable experiences only**. Corporate/education custom programs use pillar landing RFP flows — not this detail template |
| 7 | **Trust signals** | Reviews section, aggregate rating in hero/quick facts, stats in reviews header; awards optional cross-link |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Experience detail shows one primary pillar badge. Location (Polo Forest, Gujarat) is geographic metadata — not a category.

---

## Page Overview

### Route & template

| Property | Value |
|----------|-------|
| URL | `/experiences/[slug]` — e.g. `/experiences/polo-forest-heritage-walk` |
| Template | `WF-SHELL` + detail layout (breadcrumb, hero, 8-col content + 4-col sticky booking sidebar) |
| H1 | Experience title in Hero — "Polo Forest Heritage Walk" |
| Emotion arc | Curiosity → Confidence → Action |

### Layout anatomy (desktop)

```
┌─ WF-SHELL-HEADER ─────────────────────────────────────────────────────────────┐
├─ WF-BREADCRUMB ────────────────────────────────────────────────────────────────┤
├─ WF-DETAIL-HERO (full bleed media + title overlay) ───────────────────────────┤
├─ WF-QUICK-FACTS-BAR (horizontal strip) ─────────────────────────────────────┤
├─ 8-col main content │ 4-col WF-BOOKING-WIDGET (sticky) ──────────────────────┤
│   Gallery           │   (mirrors sticky bar on mobile — §16)                  │
│   Overview          │                                                         │
│   Timeline          │                                                         │
│   Itinerary         │                                                         │
│   Highlights        │                                                         │
│   Included / Not    │                                                         │
│   Packing List      │                                                         │
│   Map               │                                                         │
│   Reviews           │                                                         │
│   FAQ               │                                                         │
│   Related Tours     │                                                         │
├─ WF-BOOKING-CTA-STICKY (mobile/tablet — fixed bottom) ────────────────────────┤
└─ WF-SHELL-FOOTER ─────────────────────────────────────────────────────────────┘
```

### Section order (documented below)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Breadcrumb
3.  Hero
4.  Quick Facts
5.  Gallery
6.  Overview
7.  Timeline
8.  Itinerary
9.  Highlights
10. What's Included
11. What's Not Included
12. Packing List
13. Map
14. Reviews
15. FAQ
16. Related Tours
17. Booking CTA (sticky on scroll)
18. Footer (WF-SHELL-FOOTER)
```

### Detail-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-DETAIL-HERO` | Full-bleed hero with media, title, badges, rating snippet |
| `WF-QUICK-FACTS-BAR` | Horizontal icon+label fact strip below hero |
| `WF-DETAIL-LAYOUT` | 8-col main + 4-col sidebar wrapper |
| `WF-BOOKING-WIDGET` | Desktop sticky sidebar — price, date/guest pickers, Book Now |
| `WF-BOOKING-CTA-STICKY` | Mobile/tablet fixed bottom bar — price + Book Now |
| `WF-GALLERY-CAROUSEL` | Thumbnail grid + lightbox trigger |
| `WF-TIMELINE-VERTICAL` | Time-block day schedule (distinct from multi-day itinerary) |
| `WF-ITINERARY-ACCORDION` | Expandable day-by-day itinerary blocks |
| `WF-HIGHLIGHTS-GRID` | Icon + title highlight cards |
| `WF-INCLUSION-LIST` | Checkmark included / cross excluded lists |
| `WF-PACKING-LIST` | Categorised packing checklist |
| `WF-MAP-EMBED` | Location map with meeting point pin |
| `WF-REVIEWS-SECTION` | Aggregate rating + review cards + load more |
| `WF-RELATED-TOURS` | Horizontal card row of same-pillar experiences |

---

# Experience Detail Sections

---

## 1. Navigation

### Section Name
Global Header — Detail Page Default State

### Purpose
Persistent wayfinding on the product page. Header uses **scrolled/surface** state (no transparent hero overlap below fold). **Experiences** nav context active via breadcrumb trail.

### Wireframe Layout

```
DETAIL PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

(See Step 1 § D1, D4; Step 2 §1 for auth dropdown states)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px — see Step 1 § D1.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Nav → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; subordinate to page-level **Book Now** in booking widget.

### Responsive Behaviour
See Step 1 § D1, D4. Sticky header z-index below mobile booking bar (§17).

### Accessibility Notes
Skip link → `#main-content`. `scroll-padding-top` accounts for sticky header + mobile booking bar.

### Future Motion Placeholder
`[MOTION: header-condense]` — see Step 1 § D9.

---

## 2. Breadcrumb

### Section Name
Breadcrumb — Experience Detail Trail

### Purpose
Orient users within the confirmed taxonomy hierarchy — Home → Experiences → Category → Current experience.

### Wireframe Layout

```
BELOW HEADER (cols 1–12)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Experiences  ›  Heritage & Culture  ›  Polo Forest │
│                  Heritage Walk                                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 12 cols, left-aligned within `WF-GRID-CONTAINER`
- Padding: 16px top, 8px bottom
- Current page (experience name) not linked; truncated with ellipsis on narrow viewports

### Components
`WF-BREADCRUMB`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Home → Experiences index → Pillar category → Current experience title (terminal crumb)

### CTA Position
None — navigation links only. Category crumb → `/experiences/category/heritage`.

### Responsive Behaviour
- Desktop: full trail visible
- Mobile: `Home › … › Heritage Walk` — middle crumbs collapsed; expand on tap optional

### Accessibility Notes
- `<nav aria-label="Breadcrumb">` with ordered list
- Current page: `aria-current="page"`
- Category link text includes pillar name: "Heritage & Culture"

### Future Motion Placeholder
`[MOTION: none]`

---

## 3. Hero

### Section Name
Hero — Experience Title & Primary Media

### Purpose
Establish immediate product identity — experience name, pillar badge, location, hero photography, and aggregate trust (rating). Sets **Curiosity** and anchors the page H1.

### Wireframe Layout

```
WF-DETAIL-HERO (full bleed within 1440px cap, min-height ~480px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  [WF-BADGE] Heritage & Culture    [WF-BADGE] Easy    [WF-BADGE] 1 day         │
│  [TEXT: H1]  Polo Forest Heritage Walk                                        │
│  [TEXT: Body Lg]  Ancient temples, stepwells, and tribal heritage in the     │
│                   Aravalli foothills of Idar, Gujarat.                        │
│  [TEXT: Caption]  Polo Forest, Idar · Gujarat  ·  ★★★★★ 4.9 (128 reviews)  │
│                                                                               │
│  [ICON] Share    [ICON] Save to wishlist (auth — Phase 2 placeholder)        │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full bleed `WF-GRID-FULL-BLEED` within 1440px cap
- Text overlay: cols 1–8, left-aligned, 1280px inner container
- Gradient scrim implied by ▓ density (grayscale only)
- Vertical padding: 48px bottom, content bottom-aligned in hero zone

### Components
`WF-DETAIL-HERO`, `WF-PAGE-HERO`, `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-BTN-ICON`, star rating placeholder

### Hierarchy
Badges (pillar, difficulty, duration) → H1 → Lead body → Location + rating → Utility icons

### CTA Position
No primary button in hero — conversion deferred to **Quick Facts bar** + **Booking Widget** to avoid duplicate CTAs. Share/save are utility only.

### Responsive Behaviour
- Desktop: 8-col text block, bottom-left overlay
- Tablet: 10-col text block
- Mobile: full-width text; min-height 360px; badges wrap to two rows

### Accessibility Notes
- One `<h1>` per page — experience name
- Badges: visible text labels, not color-only
- Rating: text alternative "4.9 out of 5 stars, 128 reviews"
- Hero media: descriptive alt — "Ancient temple at Polo Forest, Idar, Gujarat"
- Share button: `aria-label="Share Polo Forest Heritage Walk"`

### Future Motion Placeholder
`[MOTION: fade-in]` — text overlay on load; `[MOTION: parallax-subtle]` — media depth; disabled when `prefers-reduced-motion`

---

## 4. Quick Facts

### Section Name
Quick Facts — At-a-Glance Strip

### Purpose
Surface scannable decision metadata immediately below hero — duration, group size, difficulty, age, language, departure — without scrolling to sidebar or itinerary.

### Wireframe Layout

```
WF-QUICK-FACTS-BAR (surface-1, full width, border-bottom ─)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [ICON] Duration     [ICON] Group size   [ICON] Difficulty  [ICON] Ages        │
│ 1 day · 8am–6pm    Max 20 guests       Easy              Ages 8+             │
│                                                                               │
│ [ICON] Language     [ICON] Departure    [ICON] Price from                    │
│ English guide       Polo Forest gate    From ₹1,899 / person                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 12 cols; 6 fact cells × 2 cols each (desktop)
- Padding: 24px vertical, 16px horizontal per cell
- Dividers: vertical `│` between cells (desktop)

### Components
`WF-QUICK-FACTS-BAR`, `WF-CARD-FEATURE` (compact), `[ICON]`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-TYPE-PRICE`, `WF-DIVIDER`

### Hierarchy
Icon → Label (Caption) → Value (Body) — equal weight across all six facts

### CTA Position
None — informational. Price "from" mirrors booking widget; no button in strip.

### Responsive Behaviour
- Desktop: single horizontal row, 6 columns
- Tablet: 3×2 grid
- Mobile: 2×3 grid or horizontal scroll snap (6 cards)

### Accessibility Notes
- Facts as `<dl>` — `<dt>` label, `<dd>` value
- Icons decorative `aria-hidden="true"` — labels in text
- Price includes currency and "per person"

### Future Motion Placeholder
`[MOTION: slide-up]` — bar entrance after hero; `[MOTION: none]` on cell content

---

## 5. Gallery

### Section Name
Gallery — Experience Photography

### Purpose
Visual proof of the Polo Forest experience — temples, trails, guides, guest moments. Supports **Confidence** before booking.

### Wireframe Layout

```
MAIN COLUMN (8 cols) — first block below quick facts
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Photo gallery                                                     │
│                                                                               │
│ ┌─ WF-GALLERY-CAROUSEL ──────────────────────────────────────────────────────┐│
│ │ ┌──────────────────────────────┐ ┌────────┐ ┌────────┐ ┌────────┐         ││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓ │         ││
│ │ │ [IMG: hero] Temple courtyard │ │ thumb  │ │ thumb  │ │ +12    │         ││
│ │ │ at Polo Forest               │ │ trail  │ │ guide  │ │ more   │         ││
│ │ └──────────────────────────────┘ └────────┘ └────────┘ └────────┘         ││
│ │ [◀]  [▶]   ○ ● ○ ○ ○                                                     ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  View all photos in gallery →                                    │
└──────────────────────────────────────────────────────────────────────────────┘

LIGHTBOX (on thumb / hero click)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [×]                                                                           │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ [TEXT: Caption] Harnav river trail, Polo Forest — Photo 3 of 16             │
│ [◀ Prev]                                              [Next ▶]              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Section: 8 cols (main column within `WF-DETAIL-LAYOUT`)
- Primary image: 8 cols wide × ~360px height
- Thumbnails: 3 × ~2 cols below primary
- Gap: 8px between images

### Components
`WF-GALLERY-CAROUSEL`, `WF-GALLERY-GRID`, `WF-MEDIA-BLOCK`, `WF-MODAL` (lightbox), `WF-TYPE-H2`, `WF-TYPE-CAP`, `WF-TYPE-LINK`, carousel controls

### Hierarchy
H2 → Primary image → Thumbnail row → Carousel controls → Gallery index link

### CTA Position
**View all photos in gallery →** — text link to `/gallery?experience=polo-forest-heritage-walk` (secondary)

### Responsive Behaviour
- Desktop: primary + 4 thumbnails visible
- Mobile: swipeable single-image carousel; dots for position
- Lightbox: full viewport on all breakpoints

### Accessibility Notes
- Each image: descriptive alt ("Stepwell ruins at Polo Forest, Gujarat")
- Carousel: `aria-label="Experience photo gallery"`; prev/next labeled
- Lightbox: focus trap, Escape closes, return focus to trigger
- "+12 more" button: "View 12 additional photos"

### Future Motion Placeholder
`[MOTION: crossfade]` — carousel slide; `[MOTION: none]` in lightbox when `prefers-reduced-motion`

---

## 6. Overview

### Section Name
Overview — Experience Summary

### Purpose
Editorial introduction to the Polo Forest Heritage Walk — what guests will do, why it matters, and who it suits. Bridges gallery visuals to structured itinerary content.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Overview                                                          │
│ [TEXT: Body Lg]  Walk through 1,000 years of history in a single day at      │
│                  Polo Forest — Gujarat's best-kept heritage secret.           │
│                                                                               │
│ [TEXT: Body]  Your guided journey begins at the Polo Forest gate near Idar,  │
│               winding through 15th-century Jain temples, the ancient         │
│               stepwell, and riverside trails where local Bhil guides share   │
│               stories passed down for generations. Suitable for families,    │
│               culture enthusiasts, and first-time visitors to Gujarat.       │
│                                                                               │
│ [TEXT: Body]  Includes expert heritage guide, entry fees, and a traditional  │
│               Gujarati lunch at a forest-side dhaba.                         │
│                                                                               │
│ ┌─ WF-CARD-STAT (inline row) ────────────────────────────────────────────────┐│
│ │ [TEXT: Stat] 128 reviews  │  4.9★ avg  │  98% would recommend             ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Body text max ~65ch (~7 cols effective)
- Stats inline row: 12 cols within section, 3 equal cells
- Section padding: 48px top (first main section), 32px bottom

### Components
`WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-CARD-STAT`, `WF-TYPE-STAT`, `WF-DIVIDER`

### Hierarchy
H2 → Lead paragraph → Body paragraphs → Inline trust stats

### CTA Position
None in overview — booking widget handles conversion in sidebar.

### Responsive Behaviour
- Desktop: 8-col prose block
- Mobile: full width; stats row wraps to 2 lines

### Accessibility Notes
- H2 follows page H1 without skipping levels
- Stats: semantic list or `<dl>`
- "98% would recommend" sourced from review data — visible methodology in reviews §14

### Future Motion Placeholder
`[MOTION: fade-in]` — section on scroll

---

## 7. Timeline

### Section Name
Timeline — Day Schedule at a Glance

### Purpose
Visual time-block summary of a single day's flow — when guests arrive, key activity blocks, meals, and return. Distinct from detailed **Itinerary** (§8) which expands each block.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Your day at a glance                                              │
│ [TEXT: Body]  Polo Forest Heritage Walk — typical Saturday schedule           │
│                                                                               │
│ ┌─ WF-TIMELINE-VERTICAL ─────────────────────────────────────────────────────┐│
│ │                                                                             ││
│ │  08:00  ○──┬─ [TEXT: H4] Meet at Polo Forest gate, Idar                   ││
│ │            │  [TEXT: Body Sm] Check-in, safety briefing, group intro       ││
│ │            │                                                                ││
│ │  08:30  ○──┬─ [TEXT: H4] Jain temple circuit                               ││
│ │            │  [TEXT: Body Sm] Guided walk through 15th-century temples      ││
│ │            │                                                                ││
│ │  11:00  ○──┬─ [TEXT: H4] Stepwell & archaeology stop                       ││
│ │            │  [TEXT: Body Sm] Ancient stepwell ruins and local history      ││
│ │            │                                                                ││
│ │  12:30  ○──┬─ [TEXT: H4] Gujarati lunch at forest dhaba                   ││
│ │            │  [TEXT: Body Sm] Vegetarian thali included                    ││
│ │            │                                                                ││
│ │  14:00  ○──┬─ [TEXT: H4] Harnav river trail                               ││
│ │            │  [TEXT: Body Sm] Easy riverside walk, bird spotting            ││
│ │            │                                                                ││
│ │  16:30  ○──┬─ [TEXT: H4] Tribal heritage storytelling                      ││
│ │            │  [TEXT: Body Sm] Bhil community guide session                ││
│ │            │                                                                ││
│ │  18:00  ○──┬─ [TEXT: H4] Return to gate · departure                       ││
│ │            │  [TEXT: Body Sm] Optional drop at Idar bus stand              ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption]  Times approximate; may vary by season and group size.       │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Timeline: time label 1 col + connector + content 7 cols
- Vertical connector line between ○ nodes
- Node gap: 24px (`space-3`)

### Components
`WF-TIMELINE-VERTICAL`, `WF-ITINERARY-TIMELINE` (variant), `WF-TYPE-H2`, `WF-TYPE-H4`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
H2 → Schedule context → Time-ordered nodes (time → activity title → description) → Disclaimer caption

### CTA Position
None — informational schedule preview.

### Responsive Behaviour
- Desktop: vertical timeline with left-aligned times
- Mobile: same vertical layout; times above titles (stacked node)

### Accessibility Notes
- Timeline as ordered list `<ol>` — each item: `<time datetime="08:00">` + heading + description
- Connector line decorative — structure conveyed in list semantics
- Caption clarifies approximate times

### Future Motion Placeholder
`[MOTION: stagger]` — nodes reveal on scroll; disabled when `prefers-reduced-motion`

---

## 8. Itinerary

### Section Name
Itinerary — Detailed Day Breakdown

### Purpose
Expandable deep-dive into each segment — distances, highlights per stop, what to expect. For multi-day experiences, each day is an accordion panel; for 1-day tours, single expandable sections per timeline block.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Detailed itinerary                                                │
│                                                                               │
│ ┌─ WF-ITINERARY-ACCORDION ───────────────────────────────────────────────────┐│
│ │ ▼ Stop 1 — Polo Forest gate & briefing (08:00)                            ││
│ │   [TEXT: Body] Arrive at the main gate 2 km from Idar town. Your Polo     ││
│ │   Safari guide distributes water, sun hats, and a route map. Safety rules  ││
│ │   for temple visits and forest paths explained.                             ││
│ │   [TEXT: Caption] Meeting point: Google Maps pin linked in Map section ↓   ││
│ ├─────────────────────────────────────────────────────────────────────────────┤│
│ │ ▶ Stop 2 — Jain temple circuit (08:30–11:00)                              ││
│ │ ▶ Stop 3 — Stepwell & archaeology (11:00–12:30)                           ││
│ │ ▶ Stop 4 — Lunch at forest dhaba (12:30–14:00)                            ││
│ │ ▶ Stop 5 — Harnav river trail (14:00–16:30)                               ││
│ │ ▶ Stop 6 — Tribal heritage session (16:30–18:00)                          ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ MULTI-DAY VARIANT (e.g. 2D/1N Family Camping)                                 │
│ ┌─ WF-TABS or accordion ─────────────────────────────────────────────────────┐│
│ │ [Day 1] [Day 2]                                                             ││
│ │ ▼ Day 1 — Arrival & evening safari                                          ││
│ │   ... expanded stops ...                                                    ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Accordion items: full width within column
- Expanded panel padding: 16px inner
- Item separator: `WF-DIVIDER`

### Components
`WF-ITINERARY-ACCORDION`, `WF-FAQ-ACCORDION` (shared pattern), `WF-TABS` (multi-day), `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
H2 → Accordion items (stop title + time → expanded body → optional map link)

### CTA Position
Map cross-reference link within Stop 1 — anchor to `#map` section.

### Responsive Behaviour
- Desktop: accordion; first item open by default
- Mobile: same; touch-friendly 48px accordion headers

### Accessibility Notes
- Accordion buttons: `aria-expanded`, `aria-controls`
- Multi-day: tab pattern with `role="tablist"` OR day headings as H3
- Stop titles include time for screen reader context

### Future Motion Placeholder
`[MOTION: none]` — expand/collapse 150ms height; instant when `prefers-reduced-motion`

---

## 9. Highlights

### Section Name
Highlights — Key Experience Moments

### Purpose
Scannable differentiators — what makes this Polo Forest walk memorable vs generic sightseeing. Supports comparison and **Confidence**.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Highlights                                                        │
│                                                                               │
│ ┌─ WF-HIGHLIGHTS-GRID ───────────────────────────────────────────────────────┐│
│ │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        ││
│ │ │ [ICON]       │ │ [ICON]       │ │ [ICON]       │ │ [ICON]       │        ││
│ │ │ [TEXT: H4]   │ │ [TEXT: H4]   │ │ [TEXT: H4]   │ │ [TEXT: H4]   │        ││
│ │ │ 15th-century │ │ Expert Bhil  │ │ Gujarati     │ │ Small groups │        ││
│ │ │ Jain temples │ │ storytellers │ │ forest lunch │ │ max 20       │        ││
│ │ │ [TEXT: Body  │ │ [TEXT: Body  │ │ [TEXT: Body  │ │ [TEXT: Body  │        ││
│ │ │  Sm] 3 sites │ │  Sm] Living  │ │  Sm] Veg     │ │  Sm] Personal│        ││
│ │ │  on route    │ │  oral history│ │  thali incl. │ │  attention   │        ││
│ │ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Highlight cards: 4 × 2 cols (desktop)
- Card gap: 16px
- Card padding: 24px

### Components
`WF-HIGHLIGHTS-GRID`, `WF-CARD-FEATURE`, `[ICON]`, `WF-TYPE-H2`, `WF-TYPE-H4`, `WF-TYPE-BODY`

### Hierarchy
H2 → 4-column feature grid (icon → title → description)

### CTA Position
None — persuasive content only.

### Responsive Behaviour
- Desktop: 4-up row
- Tablet: 2×2 grid
- Mobile: single column stack

### Accessibility Notes
- Icons decorative — highlight title in H4
- Grid as list `<ul>` with list items for each highlight
- No information conveyed by icon alone

### Future Motion Placeholder
`[MOTION: stagger]` — cards on scroll

---

## 10. What's Included

### Section Name
What's Included — Inclusions List

### Purpose
Transparent value breakdown — what the ₹1,899 covers. Reduces pre-booking anxiety and support enquiries.

### Wireframe Layout

```
MAIN COLUMN (8 cols) — paired with §11 in 6+6 split on desktop
┌─ 6 cols ─────────────────────────────┐
│ [TEXT: H2]  What's included           │
│                                        │
│ ┌─ WF-INCLUSION-LIST (checkmarks) ────┐│
│ │ ✓ Expert heritage guide (English)   ││
│ │ ✓ All temple & forest entry fees    ││
│ │ ✓ Gujarati vegetarian lunch         ││
│ │ ✓ Bottled water (2 per person)      ││
│ │ ✓ First-aid kit & tour insurance    ││
│ │ ✓ Polo Safari guest lanyard & map   ││
│ └─────────────────────────────────────┘│
└────────────────────────────────────────┘
```

### Grid
- Desktop: 6 cols (left half of 8-col main, paired with §11)
- List item gap: 12px
- Checkmark: text character `✓` in wireframe — implementation uses icon + text

### Components
`WF-INCLUSION-LIST`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `[ICON]` checkmark

### Hierarchy
H2 → Checkmark list (inclusion items)

### CTA Position
None.

### Responsive Behaviour
- Desktop: side-by-side with §11 (6+6 within 8-col main = 4+4 effective each)
- Mobile: stacked — Included first, then Not Included

### Accessibility Notes
- List: `<ul>` with visible checkmark text "Included:" prefix in sr-only or item text
- Do not rely on green check color (grayscale wireframe — text ✓ only)

### Future Motion Placeholder
`[MOTION: fade-in]` — section on scroll

---

## 11. What's Not Included

### Section Name
What's Not Included — Exclusions List

### Purpose
Set clear expectations — transport, personal expenses, optional tips — preventing post-booking disputes.

### Wireframe Layout

```
MAIN COLUMN — right half (paired with §10)
┌─ 6 cols ─────────────────────────────┐
│ [TEXT: H2]  What's not included       │
│                                        │
│ ┌─ WF-INCLUSION-LIST (cross marks) ───┐│
│ │ ✗ Transport to/from Polo Forest     ││
│ │ ✗ Personal expenses & souvenirs     ││
│ │ ✗ Guide gratuities (optional)       ││
│ │ ✗ Travel insurance (beyond basic)   ││
│ │ ✗ Accommodation (day trip only)     ││
│ │ ✗ Meals not listed above            ││
│ └─────────────────────────────────────┘│
│ [TEXT: Link]  Transport options from Ahmedabad →                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Desktop: 6 cols (right half, paired with §10)
- Same list spacing as §10

### Components
`WF-INCLUSION-LIST`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, `[ICON]` cross

### Hierarchy
H2 → Cross-mark list → Transport helper link

### CTA Position
**Transport options from Ahmedabad →** — links to FAQ anchor or `/faq#getting-there`

### Responsive Behaviour
- Desktop: adjacent to §10
- Mobile: below §10

### Accessibility Notes
- `<ul>` semantics; cross mark as text prefix "Not included:"
- Transport link descriptive — not "Click here"

### Future Motion Placeholder
`[MOTION: fade-in]` — paired with §10

---

## 12. Packing List

### Section Name
Packing List — What to Bring

### Purpose
Practical preparation guidance for Polo Forest terrain and Gujarat climate — reduces guest uncertainty and on-site issues.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  What to pack                                                      │
│ [TEXT: Body]  Polo Forest trails are easy grade but exposed — prepare for sun │
│               and uneven temple steps.                                        │
│                                                                               │
│ ┌─ WF-PACKING-LIST ──────────────────────────────────────────────────────────┐│
│ │ [TEXT: H4]  Essentials                    [TEXT: H4]  Recommended          ││
│ │ · Comfortable walking shoes               · Binoculars (birding)          ││
│ │ · Sun hat & sunscreen                     · Camera (no drone)             ││
│ │ · Light cotton clothing                   · Small daypack                 ││
│ │ · Refillable water bottle                 · Cash for souvenirs            ││
│ │ · Valid photo ID                          · Motion sickness tabs (travel)   ││
│ │ · Personal medications                                                    ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption]  Drones prohibited at heritage sites. Modest dress required  │
│                  at temples (shoulders & knees covered).                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Two sub-columns within list: 4+4 cols (Essentials | Recommended)
- Section padding: 32px vertical

### Components
`WF-PACKING-LIST`, `WF-TYPE-H2`, `WF-TYPE-H4`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
H2 → Intro body → Two-column checklist → Temple/dress code caption

### CTA Position
None.

### Responsive Behaviour
- Desktop: 4+4 two-column list
- Mobile: Essentials stack above Recommended

### Accessibility Notes
- Two `<ul>` lists under H4 subheadings
- Caption includes dress code — important for temple access
- Essentials vs Recommended distinction in headings, not color alone

### Future Motion Placeholder
`[MOTION: none]`

---

## 13. Map

### Section Name
Map — Location & Meeting Point

### Purpose
Geographic orientation for Polo Forest, Idar, Gujarat — meeting point pin, driving directions context, distance from Ahmedabad. Popular Destinations as **location**, not category.

### Wireframe Layout

```
MAIN COLUMN (8 cols)  id="map"
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Location & meeting point                                          │
│ [TEXT: Body]  Polo Forest, near Idar, Sabarkantha district, Gujarat —         │
│               approximately 2 hours from Ahmedabad by road.                     │
│                                                                               │
│ ┌─ WF-MAP-EMBED (16:9 aspect) ───────────────────────────────────────────────┐│
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ││
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ││
│ │                    ○ Meeting point — Polo Forest main gate                  ││
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ ┌─ info row ─────────────────────────────────────────────────────────────────┐│
│ │ [ICON] Meeting point    [ICON] Distance        [ICON] Parking              ││
│ │ Polo Forest gate, Idar  110 km from Ahmedabad  Free at gate               ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  Open in Google Maps →    [TEXT: Link]  Getting there FAQ →    │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Map embed: 8 cols × 16:9 (~400px height)
- Info row: 3 × ~2.5 cols below map

### Components
`WF-MAP-EMBED`, `WF-MAP-PLACEHOLDER`, `WF-CARD-FEATURE`, `[ICON]`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, map pin ○

### Hierarchy
H2 → Location description → Map embed → Info row → External links

### CTA Position
- **Open in Google Maps →** — external link with coordinates
- **Getting there FAQ →** — `/faq#getting-there`

### Responsive Behaviour
- Desktop: full-width map in 8-col main
- Mobile: map height 280px; info row stacks

### Accessibility Notes
- Map: static image fallback with text address for users without JS/maps
- Pin description in text — not map-only
- External links: `rel="noopener"`, indicate opens external site
- Address in structured data (implementation note)

### Future Motion Placeholder
`[MOTION: none]` — static map in wireframe; interactive pan optional in build

---

## 14. Reviews

### Section Name
Reviews — Guest Ratings & Testimonials

### Purpose
**Trust** through first-party guest reviews — aggregate score, recent quotes, link to full reviews index. Priority trust signal per confirmed decisions.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Guest reviews                                                     │
│                                                                               │
│ ┌─ summary (3 cols) ──────────┐ ┌─ review cards (5 cols) ──────────────────┐ │
│ │ [TEXT: Stat] 4.9             │ │ ┌─ WF-CARD-REVIEW ──────────────────────┐ │ │
│ │ ★★★★★                       │ │ │ ★★★★★  "The temple guide was          │ │ │
│ │ [TEXT: Body] 128 reviews     │ │ │ extraordinary — knew every carving."  │ │ │
│ │                              │ │ │ ○ Ananya V · Heritage Walk · Mar 2026 │ │ │
│ │ Breakdown:                   │ │ └───────────────────────────────────────┘ │ │
│ │ 5★ ████████████ 82%         │ │ ┌─ WF-CARD-REVIEW ──────────────────────┐ │ │
│ │ 4★ ████ 14%                 │ │ │ ★★★★☆  "Great day out from Ahmedabad. │ │ │
│ │ 3★ █ 3%                     │ │ │ Lunch was authentic Gujarati."        │ │ │
│ │ 2★ 1%  1★ 0%                │ │ │ ○ Rajesh K · Mar 2026                 │ │ │
│ │                              │ │ └───────────────────────────────────────┘ │ │
│ │ [TEXT: Link] All reviews →  │ │ [TEXT: Link] Load more reviews            │ │
│ └──────────────────────────────┘ └──────────────────────────────────────────┘ │
│                                                                               │
│ ┌─ WF-REVIEWS-GOOGLE (compact strip) ────────────────────────────────────────┐│
│ │ [ICON] Google 4.8 · 340+ reviews  [TEXT: Link] View on Google Maps →       ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Inner split: 3 cols summary + 5 cols review cards (within 8-col main)
- Review card gap: 16px
- Google strip: full 8 cols below

### Components
`WF-REVIEWS-SECTION`, `WF-CARD-REVIEW`, `WF-REVIEWS-GOOGLE`, `WF-AVATAR`, `WF-TYPE-H2`, `WF-TYPE-STAT`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, rating bar placeholders

### Hierarchy
H2 → Aggregate summary + distribution → Individual review cards → Load more → Google strip

### CTA Position
- **All reviews →** → `/reviews?experience=polo-forest-heritage-walk`
- **Load more reviews** — expands inline (next 5)
- **View on Google Maps →** — external Google reviews

### Responsive Behaviour
- Desktop: 3+5 split
- Mobile: summary stacked above cards; distribution bars full width

### Accessibility Notes
- Aggregate: "4.9 out of 5 stars based on 128 reviews"
- Reviews in `<blockquote>` with `cite`
- Rating bars: text percentages visible — not bar-only
- Load more: button, not infinite scroll (accessibility preference)

### Future Motion Placeholder
`[MOTION: fade-in]` — review cards on load more; `[MOTION: none]` on summary

---

## 15. FAQ

### Section Name
FAQ — Experience-Specific Questions

### Purpose
Resolve last objections before booking — cancellation, weather, fitness, dress code, login/payment — scoped to this Polo Forest experience.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Frequently asked questions                                        │
│                                                                               │
│ ┌─ WF-FAQ-ACCORDION ─────────────────────────────────────────────────────────┐│
│ │ ▼ What happens if it rains on my booked date?                            ││
│ │   Light rain — tour proceeds with ponchos provided. Heavy rain or          ││
│ │   safety alerts — free reschedule or full refund per cancellation policy.  ││
│ ├─────────────────────────────────────────────────────────────────────────────┤│
│ │ ▶ Do I need an account to book this experience?                            ││
│ │ ▶ What payment methods are accepted at checkout?                         ││
│ │ ▶ Is transport from Ahmedabad included?                                  ││
│ │ ▶ What is the cancellation policy for Heritage Walk?                     ││
│ │ ▶ Are temple dress codes enforced?                                       ││
│ │ ▶ Is this suitable for children under 8?                                 ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  View all FAQs →                                                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Accordion: full width within column
- Max 6–8 experience-specific items; link to global FAQ for remainder

### Components
`WF-FAQ-ACCORDION`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
H2 → Accordion items → Global FAQ escape link

### CTA Position
**View all FAQs →** → `/faq`

### Responsive Behaviour
- Full-width accordion all breakpoints
- First item open by default (weather — top concern for outdoor Gujarat tours)

### Accessibility Notes
- Accordion: `aria-expanded`, `aria-controls` per Step 2 §22
- Login/payment answers reflect confirmed decisions (account required; UPI/card)
- FAQ content available without JS (progressive enhancement — all items in DOM)

### Future Motion Placeholder
`[MOTION: none]` — 150ms expand; instant when `prefers-reduced-motion`

---

## 16. Related Tours

### Section Name
Related Tours — Same Pillar & Destination

### Purpose
Keep users in the booking funnel — suggest comparable Heritage experiences or adjacent Polo Forest products if this tour isn't the right fit.

### Wireframe Layout

```
MAIN COLUMN (8 cols)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  You may also like                                                 │
│ [TEXT: Body]  More Heritage experiences at Polo Forest, Gujarat.              │
│                                                                               │
│ ┌─ WF-RELATED-TOURS (horizontal scroll or 3-up grid) ────────────────────────┐│
│ │ ┌─ WF-CARD-EXPERIENCE (compact) ─┐ ┌─ WF-CARD-EXPERIENCE ─┐ ┌─ ... ────────┐││
│ │ │ ▓ [IMG] Stepwell & Ruins Tour  │ │ ▓ [IMG] Tribal       │ │              │││
│ │ │ [WF-BADGE] Heritage            │ │    Heritage Trail    │ │              │││
│ │ │ [TEXT: H3] Stepwell & Ruins    │ │ [TEXT: Price] ₹2,199  │ │              │││
│ │ │ [TEXT: Price] From ₹1,599     │ │ [█ Book Now]         │ │              │││
│ │ │ [█ Book Now]  [░ View]        │ │                      │ │              │││
│ │ └────────────────────────────────┘ └──────────────────────┘ └──────────────┘││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  All Heritage experiences →                                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 cols main column
- Cards: 3 × ~2.5 cols (compact) or horizontal scroll row
- Card gap: 16px

### Components
`WF-RELATED-TOURS`, `WF-CARD-EXPERIENCE`, `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H3`, `WF-TYPE-PRICE`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-TYPE-LINK`

### Hierarchy
H2 → Context body → Related card row → Category view-all link

### CTA Position
- Per card: **Book Now** → booking flow; **View** → other experience detail
- **All Heritage experiences →** → `/experiences/category/heritage`

### Responsive Behaviour
- Desktop: 3-up grid
- Mobile: horizontal scroll snap carousel with peek of next card

### Accessibility Notes
- Carousel: prev/next buttons + manual scroll; `aria-label="Related experiences"`
- Book buttons labeled with experience name
- Related logic: same pillar (`heritage`) + same location (`polo-forest`) — documented for CMS

### Future Motion Placeholder
`[MOTION: stagger]` — cards; `[MOTION: card-hover-lift]` — desktop hover

---

## 17. Booking CTA (Sticky on Scroll)

### Section Name
Booking Widget — Desktop Sidebar & Mobile Sticky Bar

### Purpose
Persistent **Action** conversion surface — price, date/guest selection, and **Book Now** always accessible while scrolling long detail content. Implements login gate and payment trust copy.

### Wireframe Layout

```
DESKTOP — WF-BOOKING-WIDGET (4 cols, sticky in sidebar)
┌─ WF-BOOKING-WIDGET (surface-1, border ─, sticky top: header + 16px) ─────────┐
│ [TEXT: Price]  From ₹1,899 per person                                         │
│ [TEXT: Caption]  ★ 4.9 (128 reviews) · Free cancellation 48hrs before        │
│ ─────────────────────────────────────────────────────────────────────────────│
│ [TEXT: H4]  Select date                                                       │
│ ┌──────────────────────────────┐                                              │
│ │ ░ Pick a date                │                                              │
│ └──────────────────────────────┘                                              │
│ [TEXT: H4]  Guests                                                            │
│ ┌──────────────────────────────┐                                              │
│ │ ░ 2 adults              ▾   │                                              │
│ └──────────────────────────────┘                                              │
│ [TEXT: Caption]  Max 20 guests per departure                                  │
│ ─────────────────────────────────────────────────────────────────────────────│
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ ████  Book Now                                                           │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│ [TEXT: Caption]  Login required · Pay via UPI or card at checkout            │
│ [TEXT: Link]  Cancellation policy →                                           │
└──────────────────────────────────────────────────────────────────────────────┘

MOBILE — WF-BOOKING-CTA-STICKY (fixed bottom, full width, z-index above content)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Price] From ₹1,899/person          ┌────────────────────────────────┐ │
│ [TEXT: Caption] ★ 4.9 · Login to book     │ ████  Book Now                 │ │
│                                           └────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
  Padding-bottom on main content = bar height + 16px (avoid content hidden)

GUEST CLICK BOOK NOW
  → /account/login?returnUrl=/plan/book/polo-forest-heritage-walk/dates

AUTHENTICATED CLICK BOOK NOW
  → /plan/book/polo-forest-heritage-walk/dates?date=...&guests=...
```

### Grid
- Desktop sidebar: 4 cols (cols 9–12), sticky within `WF-DETAIL-LAYOUT`
- Main content: 8 cols (cols 1–8)
- Widget padding: 24px
- Mobile sticky bar: 12 cols full bleed, 64px height + safe area

### Components
`WF-BOOKING-WIDGET`, `WF-BOOKING-CTA-STICKY`, `WF-INPUT-DATE`, `WF-INPUT-SELECT`, `WF-BTN-PRIMARY`, `WF-TYPE-PRICE`, `WF-TYPE-H4`, `WF-TYPE-CAP`, `WF-TYPE-LINK`, `WF-DETAIL-LAYOUT`

### Hierarchy
Price → Rating/cancellation → Date picker → Guest selector → Book Now → Login/payment caption → Policy link

### CTA Position
- **Book Now** — sole primary CTA in widget; `WF-BTN-PRIMARY`, full width
- Widget sticks on desktop when main content scrolls past hero
- Mobile bar appears when desktop sidebar scrolls out of view (intersection observer)

### Responsive Behaviour
- `≥1024px`: 8+4 layout; sidebar sticky throughout
- `768–1023px`: sidebar below hero (not sticky) OR bottom sticky bar — DEFAULT: bottom sticky bar
- `<768px`: fixed bottom bar only; date/guest pickers open sheet on tap before Book Now
- Sticky bar hidden when footer enters viewport (optional — avoid overlap)

### Accessibility Notes
- Date and guest inputs: visible labels
- Book button: `aria-label="Book Polo Forest Heritage Walk"`
- Login requirement in visible caption — not modal-only discovery
- Sticky bar does not trap focus; `position: fixed` with keyboard scroll test
- Mobile: `padding-bottom` on `<main>` prevents content obscured by bar

### Future Motion Placeholder
`[MOTION: slide-up]` — mobile sticky bar appear when sidebar leaves viewport; `[MOTION: none]` on widget content

---

## 18. Footer

### Section Name
Global Footer — Detail Page Instance

### Purpose
Secondary navigation and legal continuity. Same shell as Step 1 D10.

### Wireframe Layout

```
(See Step 1 § D10 — full footer wireframe)

DETAIL-SPECIFIC NOTES:
- Experiences column: five confirmed pillar links; current experience category highlighted
- Plan column: "Book online" note references login requirement
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
See Step 1 § D10. Mobile sticky booking bar sits above footer — no overlap.

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
│ Home › Experiences › Heritage & Culture › Polo Forest Heritage Walk          │
├──────────────────────────────────────────────────────────────────────────────┤
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ [Badges] [H1] Polo Forest Heritage Walk · Polo Forest · ★ 4.9               │
├──────────────────────────────────────────────────────────────────────────────┤
│ Duration │ Group │ Difficulty │ Ages │ Language │ Price from                 │
├───────────────────────────────────────┬──────────────────────────────────────┤
│ MAIN (8 col)                          │ BOOKING WIDGET (4 col, sticky)       │
│ Gallery                               │ From ₹1,899                          │
│ Overview                              │ [Date] [Guests]                      │
│ Timeline                              │ [Book Now]                           │
│ Itinerary                             │ Login · UPI/card                     │
│ Highlights                            │                                      │
│ Included │ Not included                 │                                      │
│ Packing list                          │                                      │
│ Map                                   │                                      │
│ Reviews                               │                                      │
│ FAQ                                   │                                      │
│ Related tours                         │                                      │
├───────────────────────────────────────┴──────────────────────────────────────┤
│ WF-SHELL-FOOTER                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Appendix

## A. Booking & auth touchpoints

| User state | Action |
|------------|--------|
| Guest clicks **Book Now** | `/account/login?returnUrl=/plan/book/[slug]/dates` |
| Authenticated | `/plan/book/[slug]/dates` with date/guests query params |
| Checkout | UPI + card per Steps 1–3 decisions |
| Corporate/education custom programs | Not on this template — route to `/corporate#rfp` or `/education#rfp` |

## B. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Breadcrumb | `WF-BREADCRUMB` |
| Hero | `WF-DETAIL-HERO`, `WF-BADGE`, `WF-TYPE-H1` |
| Quick Facts | `WF-QUICK-FACTS-BAR`, `WF-CARD-FEATURE` |
| Gallery | `WF-GALLERY-CAROUSEL`, `WF-MODAL` |
| Overview | `WF-TYPE-H2`, `WF-CARD-STAT` |
| Timeline | `WF-TIMELINE-VERTICAL` |
| Itinerary | `WF-ITINERARY-ACCORDION`, `WF-TABS` |
| Highlights | `WF-HIGHLIGHTS-GRID`, `WF-CARD-FEATURE` |
| What's Included / Not | `WF-INCLUSION-LIST` |
| Packing List | `WF-PACKING-LIST` |
| Map | `WF-MAP-EMBED` |
| Reviews | `WF-REVIEWS-SECTION`, `WF-CARD-REVIEW`, `WF-REVIEWS-GOOGLE` |
| FAQ | `WF-FAQ-ACCORDION` |
| Related Tours | `WF-RELATED-TOURS`, `WF-CARD-EXPERIENCE` |
| Booking CTA | `WF-BOOKING-WIDGET`, `WF-BOOKING-CTA-STICKY` |
| Footer | `WF-SHELL-FOOTER` |

## C. Step 5 handoff

| Item | Status |
|------|--------|
| All 18 detail sections specified | Complete |
| Breadcrumb with confirmed taxonomy | Complete |
| Sticky booking widget (desktop + mobile) | Complete |
| Login-required booking reflected | Complete |
| UPI/card checkout referenced | Complete |
| Trust: reviews, stats in overview | Complete |
| Confirmed taxonomy locked | Complete |
| Polo Forest / Gujarat meaningful labels | Complete |
| Grayscale ASCII wireframes only | Complete |

---

**Document path:** `docs/ux-wireframes/04-experience-detail.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Steps 1–3 global foundation, homepage, and listing wireframes; confirmed user decisions (Option A taxonomy)
