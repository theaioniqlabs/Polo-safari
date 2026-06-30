# Polo Safari — UX Wireframe System
## Step 5: Corporate Retreats Landing Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Corporate & MICE pillar landing (`/corporate`) — custom proposal/RFP flow, **not** standard online booking  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md)  
**Next step:** Step 6 — Educational Tours landing page  

**Reference context:** Polo Forest corporate offsites for Ahmedabad & Gujarat enterprises — 20–200 guests, team building, MICE, leadership labs.

---

## Decisions Log

Inherited from Steps 1–4; decisions that directly shape this page.

| # | Decision | Corporate landing impact |
|---|----------|--------------------------|
| 1 | **Full online booking** | Standard bookable corporate *day experiences* may link to `/experiences` — this landing focuses **custom MICE/offsites** via RFP |
| 2 | **UPI/card at checkout** | Not on this page — custom quotes invoiced separately; FAQ clarifies difference from instant booking |
| 3 | **Login required for booking** | **RFP form does not require login** — guest submission with email confirmation |
| 4 | **English-only** | All copy, form labels, and FAQ in English |
| 5 | **Confirmed taxonomy (Option A)** | Corporate Retreats is one of five pillars. URL slug: `corporate`. Not a sixth category |
| 6 | **Corporate & education RFP separate** | Primary CTA sitewide on this page: **Request Proposal** → `#rfp` form — distinct from `/plan/book/*` |
| 7 | **Trust signals** | Case studies, client logos, stats strip, testimonials embedded in case studies; awards optional cross-link |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. This page is the **Corporate Retreats** pillar landing at `/corporate`. Popular Destinations is geographic grouping only.

### Scope boundary

| Included on this page | Excluded (separate flows) |
|-----------------------|---------------------------|
| Custom corporate RFP / proposal enquiry | Standard instant-book experience checkout |
| Team building, MICE, leadership program positioning | School/education RFP (`/education`) |
| Case studies, client logos, packaged corporate offers | Admin/CMS views |
| FAQ scoped to corporate groups | Login-gated booking widget |

---

## Page Overview

### Route & template

| Property | Value |
|----------|-------|
| URL | `/corporate` |
| RFP anchor | `/corporate#rfp` |
| Template | `WF-SHELL` + pillar landing sections |
| H1 | One semantic H1 in Hero — "Corporate retreats at Polo Forest" |
| Emotion arc | Ambition → Confidence → Commitment (proposal) |

### Section order (scroll sequence)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Breadcrumb
3.  Hero
4.  Benefits
5.  Team Building
6.  Activities
7.  Case Studies
8.  Clients
9.  Packages
10. FAQ
11. RFP Lead Form
12. Footer (WF-SHELL-FOOTER)
```

### Corporate-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-PILLAR-HERO` | Pillar landing hero — split or full-bleed with RFP CTA |
| `WF-BENEFITS-GRID` | Icon + title + body benefit cards (3–4 up) |
| `WF-TEAM-BUILDING-GRID` | Activity/module cards with duration and group size |
| `WF-ACTIVITY-SHOWCASE` | Media + copy alternating rows for corporate activities |
| `WF-CASE-STUDY-CARD` | Client story with metrics, quote, industry badge |
| `WF-CLIENT-LOGO-GRID` | Enterprise logo wall with industry labels |
| `WF-CORPORATE-PACKAGE-CARD` | Tiered package (Essential / Premium / Executive) — quote-based pricing |
| `WF-FORM-RFP-CORPORATE` | Multi-field proposal request form (no login) |
| `WF-TRUST-STATS-BAR` | Inline metrics — events delivered, repeat clients, NPS |

---

# Corporate Retreats Sections

---

## 1. Navigation

### Section Name
Global Header — Corporate Landing Default State

### Purpose
Persistent wayfinding. Header uses **scrolled/surface** state (no transparent hero). Corporate context may be highlighted via breadcrumb; mega menu "Corporate programs" links here.

### Wireframe Layout

```
CORPORATE PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

NOTE: Page-level primary CTA is Request Proposal (§3 Hero) — header CTA remains
      sitewide Plan Your Visit; does not compete with pillar RFP.

(See Step 1 § D1, D4; Step 2 §1 for auth dropdown states)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px — see Step 1 § D1.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Nav → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; subordinate to page **Request Proposal** in hero and sticky RFP prompts.

### Responsive Behaviour
See Step 1 § D1, D4.

### Accessibility Notes
Skip link → `#main-content`. Breadcrumb provides page context.

### Future Motion Placeholder
`[MOTION: header-condense]` — see Step 1 § D9.

---

## 2. Breadcrumb

### Section Name
Breadcrumb — Corporate Pillar Trail

### Purpose
Orient users within IA — Home → Corporate Retreats (pillar landing, not experiences index).

### Wireframe Layout

```
BELOW HEADER (cols 1–12)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Corporate Retreats                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 12 cols, left-aligned
- Padding: 16px top, 8px bottom

### Components
`WF-BREADCRUMB`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Home → Current pillar (terminal crumb)

### CTA Position
None — navigation only.

### Responsive Behaviour
Full trail on desktop; mobile may show `Home › Corporate Retreats`.

### Accessibility Notes
`<nav aria-label="Breadcrumb">` with ordered list. Current page: `aria-current="page"`.

### Future Motion Placeholder
`[MOTION: none]`

---

## 3. Hero

### Section Name
Hero — Corporate Retreats at Polo Forest

### Purpose
Establish **Ambition** — position Polo Forest as Gujarat's premier offsite destination for teams that want nature, heritage, and structured programming. Primary conversion: custom proposal, not instant book.

### Wireframe Layout

```
WF-PILLAR-HERO (full bleed within 1440px cap, min-height ~520px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  [TEXT: Overline]  CORPORATE RETREATS · POLO FOREST, GUJARAT                 │
│  [TEXT: H1]        Build teams where the Aravalli inspires                   │
│  [TEXT: Body Lg]   Custom offsites, leadership labs, and celebration events  │
│                    for 20–200 guests — 2 hours from Ahmedabad.               │
│  ┌──────────────────────┐  ┌────────────────────────┐                        │
│  │ █ Request Proposal   │  │ ░ View packages ↓      │                        │
│  └──────────────────────┘  └────────────────────────┘                        │
│  [TEXT: Caption]  Custom quote within 48 hours · No login required to enquire │
│                                                                               │
│ ┌─ WF-TRUST-STATS-BAR (inline below CTAs) ───────────────────────────────────┐│
│ │ [TEXT: Stat] 180+ corporate events  │  92% repeat clients  │  4.9★ HR rating ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full bleed `WF-GRID-FULL-BLEED` within 1440px cap
- Text overlay: cols 1–7, left-aligned, 1280px inner container
- Stats bar: spans 7 cols below CTAs
- Vertical padding: 96px top, 64px bottom

### Components
`WF-PILLAR-HERO`, `WF-PAGE-HERO`, `WF-MEDIA-169`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-TYPE-CAP`, `WF-TRUST-STATS-BAR`, `WF-TYPE-STAT`

### Hierarchy
Overline → H1 → Lead body → Primary RFP CTA → Secondary scroll CTA → No-login caption → Trust stats

### CTA Position
- Primary: **Request Proposal** → `#rfp` (smooth scroll) or direct to form section
- Secondary: **View packages ↓** → `#packages` anchor
- No **Book Now** on hero — corporate custom flow only

### Responsive Behaviour
- Desktop: 7-col text block, left-aligned
- Mobile: full-width text; min-height 440px; CTAs stacked full width

### Accessibility Notes
- One `<h1>` per page
- Primary CTA: `aria-label="Request corporate retreat proposal"`
- Stats: semantic `<dl>` with labels
- Hero media alt: "Corporate team activity at Polo Forest campsite, Idar, Gujarat"

### Future Motion Placeholder
`[MOTION: fade-in]` — text overlay; `[MOTION: parallax-subtle]` — media; disabled when `prefers-reduced-motion`

---

## 4. Benefits

### Section Name
Benefits — Why Polo Forest for Corporate Groups

### Purpose
Translate offsite value for HR and leadership buyers — productivity, bonding, wellness, and unique Gujarat setting. Supports **Confidence** before case studies.

### Wireframe Layout

```
SECTION (WF-SECTION, padding 80px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  WHY POLO FOREST                                             │
│ [TEXT: H2]        More than a venue — a catalyst for team performance         │
│ [TEXT: Body]      Leave the conference room behind. Polo Forest combines      │
│                   ancient heritage, forest trails, and resort infrastructure  │
│                   purpose-built for Gujarat's leading enterprises.            │
│                                                                               │
│ ┌─ WF-BENEFITS-GRID ──────────────────────────────────────────────────────────┐│
│ │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        ││
│ │ │ [ICON]       │ │ [ICON]       │ │ [ICON]       │ │ [ICON]       │        ││
│ │ │ [TEXT: H3]   │ │ [TEXT: H3]   │ │ [TEXT: H3]   │ │ [TEXT: H3]   │        ││
│ │ │ Disconnect   │ │ Structured   │ │ Heritage as  │ │ End-to-end   │        ││
│ │ │ to reconnect │ │ team outcomes│ │ conversation │ │ event ops    │        ││
│ │ │ [TEXT: Body  │ │ [TEXT: Body  │ │ [TEXT: Body  │ │ [TEXT: Body  │        ││
│ │ │  Sm] No WiFi │ │  Sm] Facilit-│ │  Sm] Temples │ │  Sm] Transport│        ││
│ │ │  dead zones —│ │  ated modules│ │  & ecology   │ │  meals AV    │        ││
│ │ │  nature focus│ │  with metrics│ │  spark ideas │ │  managed     │        ││
│ │ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  Download corporate capability deck (PDF) →                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred (cols 3–10)
- Benefit cards: 4 × 3 cols (desktop)
- Card gap: 24px
- Card padding: 32px

### Components
`WF-BENEFITS-GRID`, `WF-CARD-FEATURE`, `[ICON]`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Body intro → 4-up benefit grid → Optional PDF link

### CTA Position
**Download corporate capability deck →** — secondary text link (PDF asset). No primary button — hero RFP remains primary sitewide.

### Responsive Behaviour
- Desktop: 4-up row
- Tablet: 2×2 grid
- Mobile: single column stack

### Accessibility Notes
- H2 for section; H3 per benefit card
- Icons decorative — titles convey meaning
- PDF link indicates file type and opens in new tab with `aria-label`

### Future Motion Placeholder
`[MOTION: stagger]` — benefit cards on scroll

---

## 5. Team Building

### Section Name
Team Building — Facilitated Modules

### Purpose
Showcase structured team-building programs — obstacle courses, problem-solving challenges, leadership simulations — with duration and group-size metadata for procurement evaluation.

### Wireframe Layout

```
SECTION
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  TEAM BUILDING                                               │
│ [TEXT: H2]        Programs designed for Gujarat's corporate culture           │
│ [TEXT: Body]      Every module is facilitated by Polo Safari-trained leads   │
│                   and adaptable for mixed hierarchies and multilingual teams. │
│                                                                               │
│ ┌─ WF-TEAM-BUILDING-GRID ────────────────────────────────────────────────────┐│
│ │ ┌─ WF-CARD ──────────────┐ ┌─ WF-CARD ──────────────┐ ┌─ WF-CARD ─────────┐││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │││
│ │ │ [IMG] Forest challenge │ │ [IMG] Leadership relay │ │ [IMG] Trust walk  │││
│ │ │ [TEXT: H3] Forest       │ │ [TEXT: H3] Leadership  │ │ [TEXT: H3] Silent │││
│ │ │ Challenge Course        │ │ Relay & Strategy       │ │ Trail Communication│││
│ │ │ [WF-BADGE] 3 hrs        │ │ [WF-BADGE] 2 hrs       │ │ [WF-BADGE] 90 min │││
│ │ │ [WF-BADGE] 20–80 pax    │ │ [WF-BADGE] 15–60 pax   │ │ [WF-BADGE] 10–40  │││
│ │ │ [TEXT: Body Sm] Ropes,  │ │ [TEXT: Body Sm] Cross- │ │ [TEXT: Body Sm]   │││
│ │ │ bridges, team debrief   │ │ functional problem     │ │ Pairs navigate    │││
│ │ └─────────────────────────┘ └─────────────────────────┘ └─────────────────┘││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  Request custom module mix in your proposal →  (links to #rfp)   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred
- Cards: 3 × 4 cols
- Image aspect 16:9 within each card
- Gap: 24px

### Components
`WF-TEAM-BUILDING-GRID`, `WF-CARD`, `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Header → 3 module cards (image → title → badges → description) → RFP cross-link

### CTA Position
**Request custom module mix in your proposal →** → `#rfp`

### Responsive Behaviour
- Desktop: 3-up cards
- Mobile: vertical stack or horizontal scroll snap

### Accessibility Notes
- Duration and group size in visible text (badges + Body Sm)
- Card titles as H3
- Images: descriptive alt per module

### Future Motion Placeholder
`[MOTION: stagger]` — cards; `[MOTION: card-hover-lift]` — desktop hover

---

## 6. Activities

### Section Name
Activities — Corporate Experience Menu

### Purpose
Broader activity catalogue beyond team-building — night safaris, heritage walks, campfire debriefs, yoga at sunrise — showing full offsite programming palette.

### Wireframe Layout

```
SECTION (alternating WF-ACTIVITY-SHOWCASE rows)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  ACTIVITIES                                                  │
│ [TEXT: H2]        Curate your offsite agenda                                  │
│                                                                               │
│ ROW 1 — image left, copy right (6+6)
│ ┌─ 6 cols ─────────────────────┐ ┌─ 6 cols ─────────────────────────────┐    │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: H3] Heritage walk & temple circuit │    │
│ │ [IMG] Team at Jain temple    │ │ [TEXT: Body] Guided heritage walk through│    │
│ │ Polo Forest                  │ │ 15th-century temples — ideal icebreaker  │    │
│ │                              │ │ or leadership reflection stop.           │    │
│ │                              │ │ [WF-BADGE] Half day · All fitness levels │    │
│ └──────────────────────────────┘ └────────────────────────────────────────┘    │
│                                                                               │
│ ROW 2 — reversed (copy left, image right)
│ ┌─ 6 cols ─────────────────────────────┐ ┌─ 6 cols ─────────────────────┐    │
│ │ [TEXT: H3] Night safari & astronomy  │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    │
│ │ [TEXT: Body] After-dinner forest     │ │ [IMG] Corporate group night    │    │
│ │ safari with naturalist — team        │ │ safari at Polo Forest          │    │
│ │ bonding under Gujarat stars.         │ │                                │    │
│ │ [WF-BADGE] Evening · Ages 12+        │ │                                │    │
│ └──────────────────────────────────────┘ └────────────────────────────────┘    │
│                                                                               │
│ ROW 3 — image left
│ ┌─ 6 cols ─────────────────────┐ ┌─ 6 cols ─────────────────────────────┐    │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: H3] Campfire debrief & acoustic │    │
│ │ [IMG] Campfire circle          │ │ [TEXT: Body] Structured reflection     │    │
│ │                                │ │ session with facilitator at resort   │    │
│ │                                │ │ lawn — s'mores and Gujarati snacks.  │    │
│ └──────────────────────────────┘ └────────────────────────────────────────┘    │
│                                                                               │
│ [TEXT: Link]  See all bookable day experiences →  /experiences/category/corporate │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Section: 12 cols
- Alternating rows: 6 + 6 split per `WF-PILLAR-SECTION` pattern
- Row gap: 48px (`space-6`)
- Section padding: 80px vertical

### Components
`WF-ACTIVITY-SHOWCASE`, `WF-PILLAR-SECTION`, `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Header → Alternating activity rows (3+) → Link to standard corporate-tagged experiences

### CTA Position
**See all bookable day experiences →** → `/experiences/category/corporate` (standard booking path for fixed products — secondary to RFP)

### Responsive Behaviour
- Desktop: alternating 6+6 rows
- Mobile: image stack above copy per row

### Accessibility Notes
- H3 per activity row
- Badges supplement visible duration/age text
- Bookable experiences link clarifies instant-book vs custom proposal in FAQ

### Future Motion Placeholder
`[MOTION: slide-up]` — alternating rows on scroll; `[MOTION: fade-in]` — images

---

## 7. Case Studies

### Section Name
Case Studies — Corporate Success Stories

### Purpose
**Trust** through named client outcomes — team size, objectives, results metrics. Primary social proof for B2B buyers.

### Wireframe Layout

```
SECTION (surface-1 background)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  CASE STUDIES                                                │
│ [TEXT: H2]        How Gujarat enterprises use Polo Forest                    │
│                                                                               │
│ ┌─ WF-CASE-STUDY-CARD (featured, 12 cols) ───────────────────────────────────┐│
│ │ ┌─ 5 cols ────────────────┐ ┌─ 7 cols ───────────────────────────────────┐ ││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [WF-BADGE] IT Services · Ahmedabad          │ ││
│ │ │ [IMG] Team photo         │ │ [TEXT: H3] 120-person annual offsite        │ ││
│ │ │                          │ │ [TEXT: Body] Objective: cross-team collab  │ ││
│ │ │                          │ │ after hybrid work return.                  │ ││
│ │ │                          │ │ ┌─ metrics row ──────────────────────────┐ │ ││
│ │ │                          │ │ │ 94% engagement │ 4.8/5 NPS │ 3-day event│ │ ││
│ │ │                          │ │ └────────────────────────────────────────┘ │ ││
│ │ │                          │ │ "Polo Safari handled logistics end-to-end" │ ││
│ │ │                          │ │ — HR Director, leading Ahmedabad IT firm   │ ││
│ │ └──────────────────────────┘ └────────────────────────────────────────────┘ ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ ┌─ WF-CASE-STUDY-CARD ──────┐ ┌─ WF-CASE-STUDY-CARD ──────┐                  │
│ │ [WF-BADGE] Manufacturing  │ │ [WF-BADGE] Financial Svcs │                  │
│ │ [TEXT: H3] Leadership lab │ │ [TEXT: H3] 2-day MICE event │                  │
│ │ 45 senior managers        │ │ 200 delegates · Q3 summit   │                  │
│ │ [TEXT: Link] Read story → │ │ [TEXT: Link] Read story →   │                  │
│ └───────────────────────────┘ └───────────────────────────┘                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Featured case study: 12 cols — inner 5+7 split
- Secondary cards: 2 × 6 cols
- Metrics row: 3 equal cells within content column
- Gap: 24px

### Components
`WF-CASE-STUDY-CARD`, `WF-MEDIA-169`, `WF-BADGE`, `WF-CARD-REVIEW` (quote block), `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-STAT`, `WF-TYPE-LINK`

### Hierarchy
Header → Featured case (image | badge + title + objective + metrics + quote) → Secondary case cards

### CTA Position
**Read story →** per card — expands inline or links to `/blog/[slug]` (implementation choice). No primary button — RFP remains hero CTA.

### Responsive Behaviour
- Desktop: featured 5+7; secondary 2-up
- Mobile: featured stacks image above copy; secondary cards stack

### Accessibility Notes
- Quotes in `<blockquote>` with attribution
- Metrics include text labels — not numbers alone
- Client names anonymised or permitted per legal — wireframe uses role + industry

### Future Motion Placeholder
`[MOTION: fade-in]` — featured case; `[MOTION: stagger]` — secondary cards

---

## 8. Clients

### Section Name
Clients — Enterprise Logo Wall

### Purpose
Immediate credibility via recognisable Gujarat and national brand logos — supplementary to case studies.

### Wireframe Layout

```
SECTION
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  OUR CLIENTS                                                 │
│ [TEXT: H2]        Trusted by teams across Gujarat and India                   │
│ [TEXT: Body]      IT, manufacturing, pharma, and financial services — from    │
│                   Ahmedabad, Gandhinagar, and Vadodara.                       │
│                                                                               │
│ ┌─ WF-CLIENT-LOGO-GRID ──────────────────────────────────────────────────────┐│
│ │  [LOGO]      [LOGO]      [LOGO]      [LOGO]      [LOGO]      [LOGO]         ││
│ │  Adani       Torrent     Zydus       Nirma       Infosys     TCS            ││
│ │  Group       Pharma      Cadila      Ltd         (Gujarat)   (Ahmedabad)    ││
│ │                                                                              ││
│ │  [LOGO]      [LOGO]      [LOGO]      [LOGO]      [LOGO]      [LOGO]         ││
│ │  Bank of     HDFC        Amul        Arvind      CEAT         L&T           ││
│ │  Baroda      Ergo        Fed          Mills       Tyres        Infra        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption]  Logo placeholders — replace with signed client permissions  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred
- Logo grid: 6 × 2 cols per row (desktop)
- Logo cell: uniform height ~64px; 32px gap
- 12 cols full width

### Components
`WF-CLIENT-LOGO-GRID`, `WF-PARTNER-LOGO-ROW`, `WF-LOGO`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
Overline → H2 → Body → Logo grid (2 rows) → Permission caption

### CTA Position
None — logos not individually linked unless case study exists.

### Responsive Behaviour
- Desktop: 6 logos per row
- Tablet: 4 per row
- Mobile: 3 per row or horizontal scroll strip

### Accessibility Notes
- Each logo: meaningful `alt` (company name)
- Caption clarifies placeholder status
- Decorative repetition avoided — each logo unique

### Future Motion Placeholder
`[MOTION: fade-in]` — grid entrance; `[MOTION: none]` on individual logos

---

## 9. Packages

### Section Name
Packages — Corporate Tier Offers

### Purpose
Frame custom pricing in familiar tier language — Essential, Premium, Executive — with inclusions and "from" pricing or "request quote" for procurement clarity. **Not** instant checkout.

### Wireframe Layout

```
SECTION  id="packages"
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  PACKAGES                                                    │
│ [TEXT: H2]        Offsite tiers for every team size                           │
│ [TEXT: Body]      All packages are customised to your dates, dietary needs,   │
│                   and facilitation goals. Final quote within 48 hours.        │
│                                                                               │
│ ┌─ WF-CORPORATE-PACKAGE-CARD ─┐ ┌─ WF-CORPORATE-PACKAGE-CARD ─┐ ┌─ ... ─────┐│
│ │ [WF-BADGE] Essential         │ │ [WF-BADGE] Premium · Popular │ │ Executive ││
│ │ [TEXT: H3] Day Offsite       │ │ [TEXT: H3] 2D/1N Retreat     │ │ [TEXT: H3]││
│ │ [TEXT: Body Sm] 20–50 guests │ │ [TEXT: Body Sm] 30–100 guests│ │ Leadership││
│ │ ─────────────────────────    │ │ ─────────────────────────    │ │ 3D/2N     ││
│ │ · 1 team-building module     │ │ · 2 facilitated modules      │ │ · Custom  ││
│ │ · Heritage walk              │ │ · Resort stay twin share       │ │   agenda  ││
│ │ · Lunch & refreshments       │ │ · Night safari + campfire      │ │ · Executive││
│ │ · Basic AV in hall           │ │ · Gala dinner setup            │ │   dining  ││
│ │ [TEXT: Price] From ₹2,499    │ │ [TEXT: Price] From ₹8,999    │ │ Quote on  ││
│ │ per person (20 pax min)      │ │ per person                   │ │ request   ││
│ │ [█ Request Proposal]         │ │ [█ Request Proposal]         │ │ [█ Request││
│ │                              │ │                              │ │  Proposal]││
│ └──────────────────────────────┘ └──────────────────────────────┘ └───────────┘│
│ [TEXT: Caption]  GST invoice available · Transport from Ahmedabad optional   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred
- Package cards: 3 × 4 cols
- Card padding: 32px
- Gap: 24px

### Components
`WF-CORPORATE-PACKAGE-CARD`, `WF-PACKAGE-CARD`, `WF-BADGE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-PRICE`, `WF-TYPE-BODY`, `WF-BTN-PRIMARY`, `WF-TYPE-CAP`, `WF-DIVIDER`

### Hierarchy
Header → 3 tier cards (badge → title → group size → inclusions → price → Request Proposal)

### CTA Position
Per card: **Request Proposal** → `#rfp` with package tier pre-selected via query `?tier=premium` (optional)

### Responsive Behaviour
- Desktop: 3-up cards; centre card may have subtle emphasis (Premium)
- Mobile: vertical stack; Premium first

### Accessibility Notes
- Price includes "per person" and minimum group size
- Inclusions as semantic `<ul>`
- No "Book Now" — all CTAs are proposal requests

### Future Motion Placeholder
`[MOTION: stagger]` — package cards

---

## 10. FAQ

### Section Name
FAQ — Corporate Retreat Questions

### Purpose
Resolve procurement objections — pricing model, AV, dietary, cancellation, difference from online booking, lead time.

### Wireframe Layout

```
SECTION
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  FAQ                                                         │
│ [TEXT: H2]        Corporate retreat questions                                 │
│                                                                               │
│ ┌─ 8 cols centred (cols 3–10) ──────────────────────────────────────────────┐│
│ │ ┌─ WF-FAQ-ACCORDION ─────────────────────────────────────────────────────┐ ││
│ │ │ ▼ How is a corporate retreat different from booking online?           │ ││
│ │ │   Corporate offsites are custom-quoted programs for 20+ guests.       │ ││
│ │ │   Standard experiences on /experiences use instant booking with login.│ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ How quickly will I receive a proposal?                              │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ Do you provide transport from Ahmedabad?                            │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ Can you accommodate vegetarian/Jain dietary requirements?           │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ What AV and meeting room facilities are available?                    │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ What is your cancellation policy for corporate events?              │ ││
│ │ └────────────────────────────────────────────────────────────────────────┘ ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  View all FAQs →  /faq#corporate                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Accordion: 8 cols centred (cols 3–10)
- Section padding: 80px vertical

### Components
`WF-FAQ-ACCORDION`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Header → Accordion (6 corporate items) → Global FAQ link

### CTA Position
**View all FAQs →** → `/faq#corporate`

### Responsive Behaviour
- Full-width accordion on mobile with 16px side padding

### Accessibility Notes
- Accordion: `aria-expanded`, `aria-controls`
- First item open by default (booking difference — critical decision)
- Answers reference confirmed platform decisions

### Future Motion Placeholder
`[MOTION: none]` — 150ms expand; instant when `prefers-reduced-motion`

---

## 11. RFP Lead Form

### Section Name
RFP Lead Form — Request Corporate Proposal

### Purpose
Primary **Commitment** conversion — capture company, team size, dates, objectives for custom quote. **No login required.** Distinct from `WF-FORM-ENQUIRY` and booking flow.

### Wireframe Layout

```
SECTION  id="rfp" (surface-1 band, distinct visual weight)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  REQUEST A PROPOSAL                                          │
│ [TEXT: H2]        Tell us about your offsite                                  │
│ [TEXT: Body]      Our corporate team responds within 48 hours with a tailored │
│                   proposal and transparent pricing. No account needed.        │
│                                                                               │
│ ┌─ WF-FORM-RFP-CORPORATE (8 cols centred, cols 3–10) ────────────────────────┐│
│ │ ┌─ 6 cols ──────────────┐ ┌─ 6 cols ──────────────┐                        ││
│ │ │ [TEXT: H4] Company *   │ │ [TEXT: H4] Your name * │                        ││
│ │ │ ░ e.g. Torrent Pharma  │ │ ░ Full name            │                        ││
│ │ └───────────────────────┘ └───────────────────────┘                        ││
│ │ ┌─ 6 cols ──────────────┐ ┌─ 6 cols ──────────────┐                        ││
│ │ │ [TEXT: H4] Work email *│ │ [TEXT: H4] Phone *     │                        ││
│ │ │ ░ you@company.com      │ │ ░ +91                  │                        ││
│ │ └───────────────────────┘ └───────────────────────┘                        ││
│ │ ┌─ 4 cols ──────────────┐ ┌─ 4 cols ──────────────┐ ┌─ 4 cols ───────────┐ ││
│ │ │ [TEXT: H4] Team size * │ │ [TEXT: H4] Preferred  │ │ [TEXT: H4] Duration│ ││
│ │ │ ░ e.g. 80 guests       │ │ ░ dates (range)       │ │ ░ Day / 2D1N / 3D+ │ ││
│ │ └───────────────────────┘ └───────────────────────┘ └──────────────────────┘ ││
│ │ ┌─ 12 cols ─────────────────────────────────────────────────────────────┐ ││
│ │ │ [TEXT: H4] Event objectives *                                         │ ││
│ │ │ ░ Team building, annual offsite, leadership lab, celebration...        │ ││
│ │ │ ░ (textarea, 4 rows)                                                   │ ││
│ │ └────────────────────────────────────────────────────────────────────────┘ ││
│ │ ┌─ 12 cols ─────────────────────────────────────────────────────────────┐ ││
│ │ │ [TEXT: H4] Package interest (optional)                                 │ ││
│ │ │ ░ Select tier ▾  — Essential / Premium / Executive / Custom mix        │ ││
│ │ └────────────────────────────────────────────────────────────────────────┘ ││
│ │ [ ] I agree to Polo Safari privacy policy and consent to contact *        ││
│ │ ┌──────────────────────────────────────────────────────────────────────┐ ││
│ │ │ ████  Submit proposal request                                        │ ││
│ │ └──────────────────────────────────────────────────────────────────────┘ ││
│ │ [TEXT: Caption]  Prefer to talk? Call Ahmedabad office · Mon–Sat 9–7      ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ SUCCESS STATE (inline, replaces form)                                         │
│ ┌────────────────────────────────────────────────────────────────────────────┐│
│ │ [ICON]  [TEXT: H3]  Proposal request received                              ││
│ │ [TEXT: Body]  Thank you — our corporate team will email you within 48 hours.││
│ │ Reference: RFP-CORP-2026-XXXX                                              ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Form container: 8 cols centred (cols 3–10)
- Two-column fields: 6+6 within form
- Three-column row: 4+4+4 (team size, dates, duration)
- Full-width: objectives textarea, package select, submit
- Section padding: 96px vertical

### Components
`WF-FORM-RFP-CORPORATE`, `WF-INPUT-TEXT`, `WF-INPUT-SELECT`, `WF-INPUT-DATE`, `WF-INPUT-CHECKBOX`, `WF-BTN-PRIMARY`, `WF-TYPE-H2`, `WF-TYPE-H4`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-TOAST` (success alternative)

### Hierarchy
Header → Form fields (required marked *) → Consent → Submit → Success state OR phone fallback caption

### CTA Position
**Submit proposal request** — sole primary CTA in section; `WF-BTN-PRIMARY`, full width within form

### Responsive Behaviour
- Desktop: 2-col field rows
- Mobile: all fields stack full width; submit full width

### Accessibility Notes
- Visible labels on all inputs; `*` explained in form intro
- Error summary at top on validation failure
- Success announced via `aria-live="polite"`
- No login gate — form accessible to guests
- Privacy policy link to `/legal/privacy`
- Phone field: `tel` input type with India format hint

### Future Motion Placeholder
`[MOTION: slide-up]` — form section on scroll; `[MOTION: fade-in]` — success state

---

## 12. Footer

### Section Name
Global Footer — Corporate Landing Instance

### Purpose
Secondary navigation and legal continuity. Same shell as Step 1 D10.

### Wireframe Layout

```
(See Step 1 § D10 — full footer wireframe)

CORPORATE-SPECIFIC NOTES:
- Experiences column: Corporate Retreats link highlighted
- Plan column: notes custom proposal vs online booking
- Education link points to /education for school programs
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
│ Home › Corporate Retreats                                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ ▓▓▓▓ HERO — Build teams where the Aravalli inspires ▓▓▓▓                    │
│ [Request Proposal] [View packages] · Stats strip                             │
├──────────────────────────────────────────────────────────────────────────────┤
│ BENEFITS — 4-up grid                                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ TEAM BUILDING — 3 module cards                                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ ACTIVITIES — alternating 6+6 rows                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ CASE STUDIES — featured + 2 cards                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ CLIENTS — logo grid                                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ PACKAGES — 3 tier cards (#packages)                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ FAQ — accordion                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ RFP FORM (#rfp) — 8-col centred form                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ WF-SHELL-FOOTER                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Appendix

## A. Conversion flow summary

| User action | Route / behaviour |
|-------------|-------------------|
| **Request Proposal** (hero, packages, team building) | Scroll/navigate to `#rfp`; submit without login |
| **See bookable day experiences** | `/experiences/category/corporate` — standard Book Now + login |
| **View all FAQs** | `/faq#corporate` |
| Post-submit | Inline success + email confirmation; reference number |

## B. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Breadcrumb | `WF-BREADCRUMB` |
| Hero | `WF-PILLAR-HERO`, `WF-TRUST-STATS-BAR` |
| Benefits | `WF-BENEFITS-GRID`, `WF-CARD-FEATURE` |
| Team Building | `WF-TEAM-BUILDING-GRID`, `WF-CARD` |
| Activities | `WF-ACTIVITY-SHOWCASE`, `WF-PILLAR-SECTION` |
| Case Studies | `WF-CASE-STUDY-CARD`, `WF-CARD-REVIEW` |
| Clients | `WF-CLIENT-LOGO-GRID` |
| Packages | `WF-CORPORATE-PACKAGE-CARD` |
| FAQ | `WF-FAQ-ACCORDION` |
| RFP Form | `WF-FORM-RFP-CORPORATE` |
| Footer | `WF-SHELL-FOOTER` |

## C. Step 6 handoff

| Item | Status |
|------|--------|
| All 12 corporate sections specified | Complete |
| RFP form — no login required | Complete |
| Distinct from standard booking | Complete |
| Trust: case studies, clients, stats | Complete |
| Polo Forest / Gujarat labels | Complete |
| Grayscale ASCII wireframes only | Complete |

---

**Document path:** `docs/ux-wireframes/05-corporate.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Steps 1–4 global foundation; confirmed user decisions (five pillars, RFP flows)
