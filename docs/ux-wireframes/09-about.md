# Polo Safari — UX Wireframe System
## Step 9: About Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** About Polo Safari (`/about`) — brand story, mission, team, company history, and trust signals  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md)  
**Next step:** Step 10 — Blog index (`/blog`)  

**Reference context:** About is the primary **Discover → trust & identity** page. It answers "Who is Polo Safari?" for schools, corporate planners, families, and adventure travellers considering Polo Forest and wider Gujarat. Linked from header nav **About**, footer Discover column, and homepage trust cluster CTAs.

---

## Decisions Log

Inherited from Steps 1–2; decisions that directly shape this page.

| # | Decision | About page impact |
|---|----------|-------------------|
| 1 | **Full online booking elsewhere** | About is narrative/trust — CTAs route to `/plan`, `/experiences`, or pillar landings; no checkout |
| 2 | **UPI/card at checkout** | Not on this page — optional trust micro-copy in stats strip only |
| 3 | **Login required for booking** | N/A — no account gate on About |
| 4 | **English-only** | All copy, team titles, timeline labels, and office details in English |
| 5 | **Confirmed taxonomy (Option A)** | Mission/vision and stats reference **five pillars** — Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Destinations (Polo Forest, Gujarat) are geographic context only |
| 6 | **Corporate & education RFP separate** | Team section may link to `/corporate` and `/education` for B2B contacts — not mixed with consumer booking CTAs |
| 7 | **Trust signals** | Awards, achievements stats, and founder story are primary conversion enablers — placed before team grid |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. About page copy references these as service lines — not as filter chips. **Polo Forest** and **Gujarat** appear as geographic anchors in hero, founder story, and office strip.

### Scope boundary

| Included on this page | Excluded (separate flows) |
|-----------------------|---------------------------|
| Brand hero, founder story, mission, vision | Full booking flow |
| Company history timeline | Admin team CMS |
| Awards grid, stats strip | Job listings / careers (Phase 2) |
| Office location & contact strip | Interactive map app (link to `/contact` or Google Maps) |
| Team grid with roles | Individual team member profile pages |
| Global footer | Blog article detail (Step 10) |

---

## Page Overview

### Routes & templates

| Property | Value |
|----------|-------|
| Primary URL | `/about` |
| Deep links | `/about#team`, `/about#timeline`, `/about#office` |
| Template | `WF-SHELL` + about editorial layout |
| H1 | One semantic H1 in Hero — "About Polo Safari" or campaign variant |
| Emotion arc | Trust → Connection → Confidence → Action |

### Layout anatomy (desktop)

```
┌─ WF-SHELL-HEADER ─────────────────────────────────────────────────────────────┐
├─ WF-ABOUT-HERO ──────────────────────────────────────────────────────────────┤
├─ WF-FOUNDER-STORY ───────────────────────────────────────────────────────────┤
├─ WF-MISSION-VISION (Mission + Vision — paired blocks) ────────────────────────┤
├─ WF-COMPANY-TIMELINE ────────────────────────────────────────────────────────┤
├─ WF-AWARD-GRID ──────────────────────────────────────────────────────────────┤
├─ WF-TRUST-STATS-BAR (Achievements) ──────────────────────────────────────────┤
├─ WF-OFFICE-STRIP ────────────────────────────────────────────────────────────┤
├─ WF-TEAM-GRID ───────────────────────────────────────────────────────────────┤
└─ WF-SHELL-FOOTER ────────────────────────────────────────────────────────────┘
```

### Section order (documented below)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Hero
3.  Founder Story
4.  Mission
5.  Vision
6.  Timeline — company history
7.  Awards
8.  Achievements — stats strip
9.  Office — location / contact strip
10. Team grid
11. Footer (WF-SHELL-FOOTER)
```

### About-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-ABOUT-HERO` | Full-width editorial hero — image, H1, subhead, anchor links |
| `WF-FOUNDER-STORY` | Split layout — founder portrait, narrative, pull quote |
| `WF-MISSION-BLOCK` | Mission statement — icon, H2, body, optional pillar tags |
| `WF-VISION-BLOCK` | Vision statement — paired with mission; distinct visual treatment |
| `WF-COMPANY-TIMELINE` | Vertical or horizontal company history — year milestones |
| `WF-OFFICE-STRIP` | Location, address, hours, map thumbnail, contact CTAs |
| `WF-TEAM-GRID` | Team member cards — photo, name, role, optional LinkedIn |
| `WF-TEAM-CARD` | Single team member tile within grid |

---

# About Page Sections

---

## 1. Navigation

### Section Name
Global Header — About Page Default State

### Purpose
Persistent wayfinding. Header uses **scrolled/surface** state. **About** link is active in primary nav.

### Wireframe Layout

```
ABOUT PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

ACTIVE STATE: "About" link — underline or bold (current page)
BREADCRUMB (below header, optional on About — see Hero §2)
  Home › About

(See Step 1 § D1, D4; Step 2 §1 for auth dropdown states)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px — see Step 1 § D1.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`, `WF-BREADCRUMB` (optional)

### Hierarchy
Skip link → Logo → Nav (About active) → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; subordinate to in-page hero and office contact CTAs.

### Responsive Behaviour
See Step 1 § D1, D4. About link moves to Discover dropdown on tablet if nav compresses.

### Accessibility Notes
Skip link → `#main-content`. Active nav item: `aria-current="page"`.

### Future Motion Placeholder
`[MOTION: header-condense]` — see Step 1 § D9.

---

## 2. Hero

### Section Name
About Hero — Brand Introduction

### Purpose
Establish Polo Safari as Gujarat's experiential travel partner at **Polo Forest** — heritage, education, corporate, family, and adventure — within the first viewport. Sets emotional tone: grounded, expert, welcoming.

### Wireframe Layout

```
WF-ABOUT-HERO (full bleed within 1440 cap, min-height ~480px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ [IMG: 21:9] Polo Forest — Aravalli ridge at golden hour                       │
│                                                                               │
│  ┌─ content overlay (gradient bottom) ──────────────────────────────────────┐ │
│  │ [TEXT: Caption]  Home › About                                            │ │
│  │ [TEXT: Overline]  POLO FOREST · GUJARAT                                   │ │
│  │ [TEXT: H1]       About Polo Safari                                        │ │
│  │ [TEXT: Body Lg]  Twelve years guiding schools, teams, and families        │ │
│  │                  through heritage trails, ecology programs, and           │ │
│  │                  adventure camps across Polo Forest and wider Gujarat.      │ │
│  │                                                                           │ │
│  │ [TEXT: Link] Our story ↓   [TEXT: Link] Meet the team ↓   [TEXT: Link] Visit us ↓ │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘

ANCHOR LINKS
  Our story → #founder-story
  Meet the team → #team
  Visit us → #office
```

### Grid
- Hero media: full bleed within 1440px cap (`WF-GRID-FULL-BLEED`)
- Text overlay: 8 cols (cols 1–8), bottom-left aligned; padding 80px bottom, 48px sides
- Min-height: 480px desktop; 360px mobile

### Components
`WF-ABOUT-HERO`, `WF-MEDIA-219`, `WF-BREADCRUMB`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Breadcrumb → Overline → H1 → Lead paragraph → In-page anchor links

### CTA Position
- Anchor links only — no primary button in hero (Plan Your Visit remains in header)
- Optional secondary: **Browse experiences →** `/experiences` below anchor row (implementation choice — keep subordinate)

### Responsive Behaviour
- Desktop: 21:9 hero with bottom gradient overlay
- Tablet: 16:9 crop; text block full width with 32px padding
- Mobile: stacked; H1 scales down; anchor links wrap 2-up

### Accessibility Notes
- One `<h1>` per page — "About Polo Safari"
- Hero image: descriptive `alt` — "Aravalli hills at Polo Forest, Gujarat"
- Anchor links: smooth scroll with `scroll-margin-top` for sticky header
- Reduced motion: no parallax on hero image

### Future Motion Placeholder
`[MOTION: fade-in]` — text overlay on load; `[MOTION: parallax-subtle]` — hero image only if `prefers-reduced-motion: no-preference`

---

## 3. Founder Story

### Section Name
Founder Story — Origin & Purpose

### Purpose
Humanise the brand through the founder's connection to Polo Forest — why experiential travel matters for Gujarat's schools, corporates, and families. Builds **Trust** before mission/vision blocks.

### Wireframe Layout

```
WF-FOUNDER-STORY (id="founder-story", section padding 80px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ 5 cols ─────────────────────┐ ┌─ 7 cols ─────────────────────────────────┐ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: Overline]  OUR BEGINNING              │ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ [TEXT: H2]        From a single trail walk   │ │
│ │ [IMG: 4:5]                    │ │                  to Gujarat's trusted       │ │
│ │ Founder portrait — Polo Forest│ │                  experiential partner       │ │
│ │ trail, 2013                   │ │                                              │ │
│ │                               │ │ [TEXT: Body] Polo Safari began when our      │ │
│ │ [TEXT: Caption]               │ │ founder led Ahmedabad school teachers on a   │ │
│ │ Rajesh Mehta, Founder         │ │ first heritage walk through Polo Forest's    │ │
│ │                               │ │ 12th-century temples and Harnav river        │ │
│ │                               │ │ ecology trails. What started as one guided   │ │
│ │                               │ │ trip became a mission: make Gujarat's        │ │
│ │                               │ │ natural and cultural heritage accessible,    │ │
│ │                               │ │ safe, and unforgettable for every group.     │ │
│ │                               │ │                                              │ │
│ │                               │ │ ┌─ pull quote (surface-2) ─────────────────┐ │ │
│ │                               │ │ │ "Every child who touches the forest        │ │ │
│ │                               │ │ │  floor remembers why we protect it."       │ │ │
│ │                               │ │ └──────────────────────────────────────────┘ │ │
│ │                               │ │                                              │ │
│ │                               │ │ [TEXT: Body] Today we operate year-round     │ │
│ │                               │ │ programs for 200+ schools, corporate offsites│ │
│ │                               │ │ for teams of 20–200, and family camps        │ │
│ │                               │ │ across Polo Forest and partner destinations. │ │
│ └───────────────────────────────┘ └──────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Split: 5 + 7 cols (desktop)
- Gap: 48px between columns
- Pull quote: inset 24px padding within 7-col block

### Components
`WF-FOUNDER-STORY`, `WF-MEDIA-45`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-QUOTE-BLOCK`

### Hierarchy
Portrait + caption → Overline → H2 → Body narrative → Pull quote → Continuation body

### CTA Position
None in this section — narrative only. Optional **Read our journal →** `/blog` as text link below body (secondary).

### Responsive Behaviour
- Desktop: 5 + 7 split
- Tablet: 4 + 8 or stacked (image top, text below)
- Mobile: portrait centred above text; pull quote full width

### Accessibility Notes
- Section: `<section aria-labelledby="founder-heading">` with H2 as label
- Founder image: alt includes name and context
- Pull quote: `<blockquote>` with optional `<cite>`

### Future Motion Placeholder
`[MOTION: slide-up]` — text column on scroll into view

---

## 4. Mission

### Section Name
Mission — What We Do Today

### Purpose
State Polo Safari's operational mission — connecting travellers to Polo Forest and Gujarat through five experience pillars. Complements founder story with present-tense clarity.

### Wireframe Layout

```
WF-MISSION-BLOCK (section padding 64px, surface-2 background band)
┌──────────────────────────────────────────────────────────────────────────────┐
│                    [TEXT: Overline]  OUR MISSION                              │
│                    [TEXT: H2]        Connect people to place                  │
│                                                                               │
│ ┌─ 8 cols centred (cols 3–10) ─────────────────────────────────────────────┐ │
│ │ [TEXT: Body Lg] We design and deliver guided experiences at Polo Forest    │ │
│ │ and across Gujarat — heritage walks, school ecology programs, corporate    │ │
│ │ retreats, family camps, and adventure treks — with safety, local           │ │
│ │ expertise, and respect for the Aravalli ecosystem at the centre.           │ │
│ │                                                                            │ │
│ │ ┌─ pillar tags (inline, read-only) ──────────────────────────────────────┐  │ │
│ │ │ [Heritage] [Educational Tours] [Corporate Retreats] [Family] [Adventure]│  │ │
│ │ └────────────────────────────────────────────────────────────────────────┘  │ │
│ └────────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full-width surface band: 12 cols
- Content block: 8 cols centred (cols 3–10)
- Pillar tags: horizontal wrap, 8px gap

### Components
`WF-MISSION-BLOCK`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-BADGE` (pillar tags — display only, not filters)

### Hierarchy
Overline → H2 → Lead body → Pillar tag row

### CTA Position
Pillar tags link to `/experiences/category/[slug]` or pillar landings — secondary text-style badges, not buttons.

### Responsive Behaviour
- Desktop: centred 8-col block
- Mobile: full width with 24px side padding; tags wrap 2–3 per row

### Accessibility Notes
- H2: "Connect people to place" — distinct from page H1
- Pillar tags: list semantics (`<ul>`) with links; not interactive filters on this page

### Future Motion Placeholder
`[MOTION: fade-in]` — mission band on scroll

---

## 5. Vision

### Section Name
Vision — Where We Are Headed

### Purpose
Forward-looking statement — sustainable tourism leadership in Gujarat, expanded access for underserved schools, and digital booking parity. Pairs with Mission in scroll rhythm.

### Wireframe Layout

```
WF-VISION-BLOCK (section padding 64px, default surface)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ 6 cols ─────────────────────────────┐ ┌─ 6 cols ────────────────────────┐ │
│ │ [ICON]                                  │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │
│ │ [TEXT: Overline]  OUR VISION            │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │
│ │ [TEXT: H2]        Gujarat's most trusted│ │ [IMG: 16:9]                     │ │
│ │                   experiential travel   │ │ School group at Polo Forest     │ │
│ │                   partner by 2030       │ │ ecology station — future-facing │ │
│ │                                         │ │                                 │ │
│ │ [TEXT: Body] We envision a Gujarat where│ │                                 │ │
│ │ every school child visits a protected   │ │                                 │ │
│ │ forest once, every corporate team finds │ │                                 │ │
│ │ renewal in nature, and every family     │ │                                 │ │
│ │ discovers heritage without leaving the   │ │                                 │ │
│ │ state — booked simply, travelled safely. │ │                                 │ │
│ │                                         │ │                                 │ │
│ │ • Expand ecology programs to 500 schools│ │                                 │ │
│ │ • Carbon-neutral camp operations        │ │                                 │ │
│ │ • Seamless online booking for all pillars│ │                                 │ │
│ └─────────────────────────────────────────┘ └─────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Equal 6 + 6 split
- Gap: 32px
- Bullet list: 16px vertical rhythm

### Components
`WF-VISION-BLOCK`, `WF-MEDIA-169`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `[ICON]`

### Hierarchy
Icon → Overline → H2 → Body → Vision bullet list || Supporting image

### CTA Position
None — vision bullets are declarative. Optional **See our experiences →** `/experiences` below bullets (text link).

### Responsive Behaviour
- Desktop: 6 + 6 side by side
- Mobile: text block first, image below

### Accessibility Notes
- Decorative icon: `aria-hidden="true"`
- Vision bullets: semantic `<ul>`
- Image alt describes activity, not "vision" abstractly

### Future Motion Placeholder
`[MOTION: slide-up]` — vision text column

---

## 6. Timeline — Company History

### Section Name
Company History Timeline

### Purpose
Chronological proof of growth and credibility — key milestones from first Polo Forest walk to present scale. Distinct from homepage **guest journey** timeline (`WF-JOURNEY-TIMELINE`).

### Wireframe Layout

```
WF-COMPANY-TIMELINE (id="timeline", section padding 80px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  OUR JOURNEY                                                 │
│ [TEXT: H2]        Milestones at Polo Forest & beyond                          │
│                                                                               │
│ ┌─ vertical timeline (8 cols centred, cols 3–10) ──────────────────────────┐ │
│ │                                                                            │ │
│ │  2013 ──○── [TEXT: H4] First school heritage walk                          │ │
│ │         │   [TEXT: Body] Pilot program with 3 Ahmedabad schools at Polo     │ │
│ │         │   Forest Jain temples and Harnav river.                           │ │
│ │         │                                                                   │ │
│ │  2015 ──○── [TEXT: H4] Corporate retreat programs launch                   │ │
│ │         │   [TEXT: Body] Team-building modules for Gujarat IT and pharma    │ │
│ │         │   companies — 20–80 guest offsites.                               │ │
│ │         │                                                                   │ │
│ │  2017 ──○── [TEXT: H4] Ecology curriculum partnership                       │ │
│ │         │   [TEXT: Body] Formal tie-up with Gujarat education board for     │ │
│ │         │   CBSE-aligned field studies at Polo Forest.                      │ │
│ │         │                                                                   │ │
│ │  2019 ──○── [TEXT: H4] Adventure & night safari expansion                 │ │
│ │         │   [TEXT: Body] Trekking, camping, and guided night safaris added  │ │
│ │         │   to Heritage and Family pillars.                                 │ │
│ │         │                                                                   │ │
│ │  2022 ──○── [TEXT: H4] 50,000th guest milestone                           │ │
│ │         │   [TEXT: Body] Crossed fifty thousand guided guests across all    │ │
│ │         │   five experience pillars.                                        │ │
│ │         │                                                                   │ │
│ │  2024 ──○── [TEXT: H4] Online booking & UPI checkout                        │ │
│ │             [TEXT: Body] Full digital booking with login, UPI, and card       │ │
│ │             payment — family and adventure experiences first.               │ │
│ │             [TEXT: Caption] Corporate & education remain custom RFP paths │ │
│ └────────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘

DESKTOP ALTERNATIVE (horizontal stepper — optional implementation)
  2013 → 2015 → 2017 → 2019 → 2022 → 2024
  (Use vertical as default for accessibility; horizontal for wide screens only)
```

### Grid
- Timeline container: 8 cols centred (cols 3–10)
- Vertical spine: 2px line, left-aligned at col 4
- Milestone nodes: 16px circles on spine

### Components
`WF-COMPANY-TIMELINE`, `WF-TIMELINE-VERTICAL` (variant), `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H4`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
Section header → Timeline spine → Year node → Title → Body per milestone

### CTA Position
None — informational. Final milestone caption clarifies RFP vs booking split (decision #6).

### Responsive Behaviour
- Desktop: vertical timeline (preferred) or horizontal stepper with scroll-snap
- Mobile: vertical only; year labels left of spine

### Accessibility Notes
- Timeline: `<ol>` or `<ul>` with `aria-label="Company history"`
- Each milestone: heading level H4 under section H2
- Horizontal variant: keyboard navigable; not hover-only tooltips

### Future Motion Placeholder
`[MOTION: stagger]` — milestone nodes reveal on scroll

---

## 7. Awards

### Section Name
Awards & Recognition

### Purpose
Third-party credibility — tourism board affiliations, safety certifications, and industry recognition. Reuses homepage awards pattern (Step 2 §18).

### Wireframe Layout

```
SECTION (compact height, padding 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  RECOGNITION                                                 │
│ [TEXT: H2]        Awards & certifications                                     │
│                                                                               │
│ ┌─ WF-AWARD-GRID ────────────────────────────────────────────────────────────┐│
│ │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐         ││
│ │ │ [IMG]  │ │ [IMG]  │ │ [IMG]  │ │ [IMG]  │ │ [IMG]  │ │ [IMG]  │         ││
│ │ │ Gujarat│ │ Gujarat│ │ Safe   │ │ Eco    │ │ Trip   │ │ School │         ││
│ │ │ Tourism│ │ Ecotour│ │ Travel │ │ Tourism│ │ Advisor│ │ Safety │         ││
│ │ │ Award  │ │ism Cert│ │ Badge  │ │ Label  │ │ 2024   │ │ Partner│         ││
│ │ │ 2023   │ │        │ │        │ │        │ │        │ │        │         ││
│ │ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘         ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption] Verified award assets — replace placeholders at build         │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred
- Award grid: 6 × 2 cols (desktop); uniform square placeholders ~120px

### Components
`WF-AWARD-GRID`, `WF-MEDIA-11`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-CAP`

### Hierarchy
Overline → H2 → Logo/badge grid → Disclaimer caption

### CTA Position
None — logos may link to certificate pages (optional, opens new tab).

### Responsive Behaviour
- Desktop: 6 in row
- Mobile: 3×2 grid or horizontal scroll with snap

### Accessibility Notes
- Each award: `alt` text with award name and year
- Caption clarifies placeholder status for stakeholders

### Future Motion Placeholder
`[MOTION: fade-in]` — grid entrance

---

## 8. Achievements — Stats Strip

### Section Name
Achievements — Key Metrics

### Purpose
Quantified trust — guests served, schools partnered, experiences offered, rating. Compact horizontal strip before office/team sections.

### Wireframe Layout

```
WF-TRUST-STATS-BAR (full width band, surface-2, padding 48px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ 4 equal stat blocks (3 cols each) ────────────────────────────────────────┐ │
│ │                                                                            │ │
│ │  [TEXT: Stat Lg]     [TEXT: Stat Lg]     [TEXT: Stat Lg]     [TEXT: Stat Lg]│ │
│ │  12+                 50,000+             200+                4.8★          │ │
│ │  Years guiding       Guests hosted       School & corp       Google rating│ │
│ │  at Polo Forest      across Gujarat      partners            (2,400 reviews)│ │
│ │                                                                            │ │
│ └────────────────────────────────────────────────────────────────────────────┘ │
│ [TEXT: Link]  Read guest reviews →  /reviews                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Stats: 4 × 3 cols (12 cols total)
- Stat gap: 24px
- Link row: centred below stats

### Components
`WF-TRUST-STATS-BAR`, `WF-CARD-STAT`, `WF-TYPE-STAT`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Stat value → Label → Optional sub-caption → Reviews link

### CTA Position
**Read guest reviews →** — secondary text link to `/reviews` (trust continuation, not booking).

### Responsive Behaviour
- Desktop: 4-up row
- Tablet: 2×2 grid
- Mobile: 2×2 or stacked single column

### Accessibility Notes
- Stats: semantic `<dl>` with `<dt>` labels and `<dd>` values
- Star rating: text alternative "4.8 out of 5 stars based on 2,400 Google reviews"

### Future Motion Placeholder
`[MOTION: fade-in]` — stats on scroll; no counting animation (static numbers preferred for clarity)

---

## 9. Office — Location / Contact Strip

### Section Name
Office & Contact Strip

### Purpose
Physical presence proof — Ahmedabad office, Polo Forest base camp reference, phone, email, hours. Bridges narrative to actionable contact before team grid.

### Wireframe Layout

```
WF-OFFICE-STRIP (id="office", section padding 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  VISIT & CONTACT                                             │
│ [TEXT: H2]        Find us in Gujarat                                          │
│                                                                               │
│ ┌─ 8 cols ─────────────────────────────┐ ┌─ 4 cols ──────────────────────────┐ │
│ │ [ICON] Registered office              │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │
│ │ [TEXT: H4] Ahmedabad (HQ)             │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │
│ │ [TEXT: Body] 402, Safal Pegasus,      │ │ [IMG: 4:3]                      │ │
│ │ Satellite, Ahmedabad — 380015         │ │ Map thumbnail — Polo Forest &   │ │
│ │                                       │ │ Ahmedabad pin                   │ │
│ │ [ICON] Operations base                │ │                                 │ │
│ │ [TEXT: H4] Polo Forest, Idar          │ │ [TEXT: Link] Open in Google Maps →│ │
│ │ [TEXT: Body] Guided trip rendezvous   │ │                                 │ │
│ │ point — Sabarkantha district          │ │                                 │ │
│ │                                       │ │                                 │ │
│ │ [ICON] Phone    +91 79 XXXX XXXX      │ │                                 │ │
│ │ [ICON] Email    hello@polosafari.in   │ │                                 │ │
│ │ [ICON] Hours    Mon–Sat 9:00–18:00 IST│ │                                 │ │
│ │                                       │ │                                 │ │
│ │ [░ Get directions]  [██ Contact us]   │ │                                 │ │
│ └───────────────────────────────────────┘ └─────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘

CTA ROUTING
  Get directions → Google Maps external (Ahmedabad HQ)
  Contact us → /contact or /plan/enquire
```

### Grid
- Split: 8 + 4 cols
- Contact rows: 16px vertical gap
- Buttons: inline row, 16px gap

### Components
`WF-OFFICE-STRIP`, `WF-MEDIA-43`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H4`, `WF-TYPE-BODY`, `WF-BTN-SECONDARY`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`, `[ICON]`

### Hierarchy
Section header → HQ block → Operations base → Contact lines → CTAs || Map thumbnail

### CTA Position
- **Get directions** — secondary → external maps
- **Contact us** — primary → `/contact`

### Responsive Behaviour
- Desktop: 8 + 4 split
- Mobile: contact block first; map full width below; buttons stack full width

### Accessibility Notes
- Phone: `tel:` link; email: `mailto:`
- External map link: `rel="noopener"`, indicates opens external site
- Icons paired with visible text labels

### Future Motion Placeholder
`[MOTION: none]` — static contact block

---

## 10. Team Grid

### Section Name
Team — Leadership & Guides

### Purpose
Put faces to the brand — founders, operations leads, head naturalists, and corporate/education specialists. Supports B2B confidence for schools and HR teams.

### Wireframe Layout

```
WF-TEAM-GRID (id="team", section padding 80px, surface-2 background)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  OUR TEAM                                                    │
│ [TEXT: H2]        People who know Polo Forest                                 │
│ [TEXT: Body]      Field naturalists, heritage guides, and program leads       │
│                   based in Ahmedabad and Sabarkantha.                         │
│                                                                               │
│ ┌─ WF-TEAM-CARD ────┐ ┌─ WF-TEAM-CARD ────┐ ┌─ WF-TEAM-CARD ────┐ ┌─ WF-TEAM-CARD ────┐ │
│ │ ○ [IMG: 1:1]       │ │ ○ [IMG: 1:1]       │ │ ○ [IMG: 1:1]       │ │ ○ [IMG: 1:1]       │ │
│ │ Rajesh Mehta       │ │ Priya Shah         │ │ Amit Desai         │ │ Kavita Patel       │ │
│ │ Founder & CEO      │ │ Head of Education  │ │ Corporate Programs │ │ Lead Naturalist    │ │
│ │ [ICON] LinkedIn    │ │ [ICON] LinkedIn    │ │ [ICON] LinkedIn    │ │ [ICON] LinkedIn    │ │
│ └────────────────────┘ └────────────────────┘ └────────────────────┘ └────────────────────┘ │
│                                                                               │
│ ┌─ WF-TEAM-CARD ────┐ ┌─ WF-TEAM-CARD ────┐ ┌─ WF-TEAM-CARD ────┐ ┌─ WF-TEAM-CARD ────┐ │
│ │ ○ [IMG: 1:1]       │ │ ○ [IMG: 1:1]       │ │ ○ [IMG: 1:1]       │ │ ○ [IMG: 1:1]       │ │
│ │ Vikram Singh       │ │ Neha Gupta         │ │ Rohan Joshi        │ │ Meera Iyer         │ │
│ │ Adventure Lead     │ │ Operations Manager │ │ Heritage Guide     │ │ Guest Relations    │ │
│ │ [ICON] LinkedIn    │ │ [ICON] LinkedIn    │ │                    │ │ [ICON] LinkedIn    │ │
│ └────────────────────┘ └────────────────────┘ └────────────────────┘ └────────────────────┘ │
│                                                                               │
│ [TEXT: Body Sm] Planning a school trip or corporate offsite?                  │
│ [TEXT: Link] Request an education proposal →  /education                      │
│ [TEXT: Link] Request a corporate proposal →   /corporate                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Team cards: 4 × 3 cols (desktop); 24px gap
- 8 members shown (2 rows × 4)
- RFP links: centred below grid

### Components
`WF-TEAM-GRID`, `WF-TEAM-CARD`, `WF-MEDIA-11`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, `[ICON]`

### Hierarchy
Section header → Card grid (photo → name → role → LinkedIn) → B2B escape links

### CTA Position
- LinkedIn icons — optional external links per member
- **Request education/corporate proposal →** — text links to RFP landings (decision #6)

### Responsive Behaviour
- Desktop: 4-up grid
- Tablet: 2-up
- Mobile: 1-up stack or 2-up with smaller avatars

### Accessibility Notes
- Team photos: alt = "[Name], [Role] at Polo Safari"
- LinkedIn: `aria-label="[Name] on LinkedIn"`, opens external
- Names in H3 under section H2

### Future Motion Placeholder
`[MOTION: stagger]` — team cards on scroll

---

## 11. Footer

### Section Name
Global Site Footer

### Purpose
Secondary navigation, newsletter, legal, and contact — consistent with all public pages.

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
│  Corporate       Blog             FAQ               Location line            │
│  Family          Reviews          Cancellation      [ICON] social placeholders│
│  Adventure       About (current)                                             │
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
See Step 1 § D10 — 4 link columns + newsletter + legal bar.

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-FORM-NEWSLETTER`, `WF-TYPE-H4`, `WF-TYPE-LINK`

### Hierarchy
Brand → link columns (About highlighted in Discover) → newsletter → legal

### CTA Position
**Subscribe** — secondary in newsletter row.

### Responsive Behaviour
See Step 1 § D10.

### Accessibility Notes
See Step 1 § D10.

### Future Motion Placeholder
`[MOTION: none]`

---

# Full Page ASCII (Desktop)

```
┌─ HEADER (About active) ──────────────────────────────────────────────────────┐
├─ HERO — About Polo Safari, Polo Forest imagery, anchor links ────────────────┤
├─ FOUNDER STORY — portrait + narrative + pull quote ──────────────────────────┤
├─ MISSION — centred statement + five pillar tags ─────────────────────────────┤
├─ VISION — 6+6 split, bullets + image ────────────────────────────────────────┤
├─ COMPANY TIMELINE — 2013–2024 milestones ────────────────────────────────────┤
├─ AWARDS — 6-badge grid ──────────────────────────────────────────────────────┤
├─ ACHIEVEMENTS — 4-stat strip + reviews link ─────────────────────────────────┤
├─ OFFICE — contact details + map thumbnail ───────────────────────────────────┤
├─ TEAM — 4×2 grid + RFP links ────────────────────────────────────────────────┤
└─ FOOTER ─────────────────────────────────────────────────────────────────────┘
```

---

# Appendix

## A. Inbound links from other wireframes

| Source | Link pattern |
|--------|--------------|
| Header nav | `/about` |
| Footer Discover column | `/about` |
| Homepage trust sections | Optional "About us →" |
| Corporate / Education landings | "Meet our team →" `/about#team` |

## B. Outbound links from About

| CTA | Destination |
|-----|-------------|
| Browse experiences | `/experiences` |
| Read guest reviews | `/reviews` |
| Contact us | `/contact` |
| Education proposal | `/education` |
| Corporate proposal | `/corporate` |
| Blog / journal | `/blog` |
| Pillar tags | `/experiences/category/[slug]` |

## C. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Hero | `WF-ABOUT-HERO`, `WF-MEDIA-219` |
| Founder Story | `WF-FOUNDER-STORY`, `WF-QUOTE-BLOCK` |
| Mission | `WF-MISSION-BLOCK`, `WF-BADGE` |
| Vision | `WF-VISION-BLOCK`, `WF-MEDIA-169` |
| Timeline | `WF-COMPANY-TIMELINE`, `WF-TIMELINE-VERTICAL` |
| Awards | `WF-AWARD-GRID` |
| Achievements | `WF-TRUST-STATS-BAR`, `WF-CARD-STAT` |
| Office | `WF-OFFICE-STRIP`, `WF-BTN-*` |
| Team | `WF-TEAM-GRID`, `WF-TEAM-CARD` |
| Footer | `WF-SHELL-FOOTER` |

## D. Handoff checklist

| Requirement | Status |
|-------------|--------|
| Hero with Polo Forest / Gujarat context | Complete |
| Founder story — no Lorem Ipsum | Complete |
| Mission & Vision — five pillars referenced | Complete |
| Company history timeline (distinct from guest journey) | Complete |
| Awards grid | Complete |
| Achievements stats strip | Complete |
| Office location / contact strip | Complete |
| Team grid with RFP escape links | Complete |
| Footer | Complete |
| 12-col / 8px grid documented | Complete |
| 1440 / 1280 viewport documented | Complete |

---

**Document path:** `docs/ux-wireframes/09-about.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Step 1 global foundation, Step 2 homepage trust cluster, confirmed user decisions
