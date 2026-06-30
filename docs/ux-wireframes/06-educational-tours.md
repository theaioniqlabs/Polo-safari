# Polo Safari — UX Wireframe System
## Step 6: Educational Tours Landing Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Educational Tours pillar landing (`/education`) — school & ecology programs, custom RFP flow, **not** standard online booking  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 2 — Homepage](./02-homepage.md), [Step 5 — Corporate Retreats](./05-corporate.md)  
**Next step:** [Step 7 — Destinations](./07-destinations.md)  

**Reference context:** Curriculum-aligned field trips at Polo Forest, Idar, Gujarat — Std 5–12, 30–500 students, ecology, heritage, and hands-on learning modules.

---

## Decisions Log

Inherited from Steps 1–5; decisions that directly shape this page.

| # | Decision | Educational landing impact |
|---|----------|----------------------------|
| 1 | **Full online booking elsewhere** | Standard bookable education-tagged experiences may link to `/experiences/category/education` — this landing focuses **custom school programs** via RFP |
| 2 | **UPI/card at checkout** | Not on this page — school quotes invoiced separately; FAQ clarifies difference from instant booking |
| 3 | **Login not required for RFP** | School inquiry form is open to guests — no account gate. Confirmation follows submission |
| 4 | **English-only** | All copy, form labels, curriculum references, and FAQ in English |
| 5 | **Confirmed taxonomy (Option A)** | Educational Tours is pillar #2 of five. URL slug: `education`. Not a sixth category |
| 6 | **Corporate & education RFP separate** | Primary CTA: **Request School Program** → `#rfp`. Distinct from `/corporate#rfp` and `/plan/book/*` |
| 7 | **Trust signals** | Partner schools, teacher testimonials, gallery of past trips, safety credentials |

### Confirmed taxonomy (locked)

> **Five pillars (definitive):** Heritage, **Educational Tours**, Corporate Retreats, Family, Adventure. This page is the **Educational Tours** pillar landing at `/education`. **Popular Destinations** is geographic grouping only — Polo Forest is the primary field-study venue.

### Scope boundary

| Included on this page | Excluded (separate flows) |
|-----------------------|---------------------------|
| Custom school program RFP | Standard instant-book checkout |
| Curriculum modules, age bands, safety | Corporate MICE RFP (`/corporate`) |
| Teacher resources & learning outcomes | Admin/CMS views |
| Gallery & school testimonials | Login-gated booking widget |

---

## Page Overview

### Route & template

| Property | Value |
|----------|-------|
| URL | `/education` |
| RFP anchor | `/education#rfp` |
| Template | `WF-SHELL` + pillar landing sections |
| H1 | One semantic H1 in Hero — e.g. "Educational tours at Polo Forest" |
| Emotion arc | Wonder → Confidence → Trust → Action (school inquiry) |
| Audience | School principals, coordinators, science/history teachers, PTA leads — Ahmedabad, Gandhinagar, Mehsana, Gujarat CBSE/GSEB schools |

### Section order (scroll sequence)

```
1.  Navigation (WF-SHELL-HEADER)
2.  Breadcrumb
3.  Hero
4.  Learning Outcomes
5.  Subjects
6.  Age Groups
7.  Interactive Activities
8.  Safety
9.  Teacher Benefits
10. Schools (partner institutions)
11. Gallery
12. Testimonials
13. School Inquiry Form — RFP (#rfp)
14. Footer (WF-SHELL-FOOTER)
```

### Education-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-EDU-HERO` | Pillar hero — school group imagery, dual CTA (RFP + view programs) |
| `WF-LEARNING-OUTCOMES` | Curriculum-aligned outcome cards with GSEB/CBSE tags |
| `WF-SUBJECT-GRID` | Subject module tiles — Ecology, History, Geography, etc. |
| `WF-AGE-BAND-TABS` | Tabbed or accordion age-group program summaries |
| `WF-EDU-ACTIVITY-GRID` | Hands-on activity cards with duration and group size |
| `WF-SAFETY-CREDENTIALS` | Safety protocols, ratios, certifications, emergency plan |
| `WF-TEACHER-BENEFITS` | Teacher/coordinator value props — prep packs, worksheets |
| `WF-SCHOOL-LOGO-GRID` | Partner school logo wall with city labels |
| `WF-EDU-GALLERY-STRIP` | Curated trip photo grid with lightbox entry |
| `WF-TESTIMONIAL-EDU` | Teacher/principal quote cards with school name |
| `WF-FORM-RFP-EDUCATION` | School inquiry form — grade, headcount, dates, curriculum focus |
| `WF-EDU-TRUST-STRIP` | Stats — schools served, students hosted, repeat bookings |

---

# Educational Tours Sections

---

## 1. Navigation

### Section Name
Global Header — Educational Landing Default State

### Purpose
Persistent wayfinding. Header uses **scrolled/surface** state. Mega menu **Educational Tours** links here with `aria-current` when active.

### Wireframe Layout

```
EDUCATION PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

MEGA MENU — Experiences column includes:
  Educational Tours → /education (active context when on this page)

NOTE: Page-level primary CTA is Request School Program (§3 Hero) — header CTA
      remains sitewide Plan Your Visit.

(See Step 1 § D1, D4)
```

### Grid
Full viewport; inner `WF-GRID-CONTAINER` 1280px — see Step 1 § A2.

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Nav → Utilities → Plan Your Visit

### CTA Position
**Plan Your Visit** — header far right; subordinate to page **Request School Program** in hero and `#rfp` form.

### Responsive Behaviour
See Step 1 § D1, D4. Mobile drawer includes Educational Tours under Experiences.

### Accessibility Notes
Skip link → `#main-content`. Educational Tours mega link: `aria-current="page"` on `/education`.

### Future Motion Placeholder
`[MOTION: header-condense]` — on scroll

---

## 2. Breadcrumb

### Section Name
Breadcrumb — Educational Tours Pillar Trail

### Purpose
Orient users within IA — Home → Educational Tours (pillar landing, not experiences index).

### Wireframe Layout

```
BELOW HEADER (cols 1–12)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Educational Tours                                   │
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
Full trail on desktop; mobile shows `Home › Educational Tours`.

### Accessibility Notes
`<nav aria-label="Breadcrumb">` with ordered list. Terminal crumb: `aria-current="page"`.

### Future Motion Placeholder
`[MOTION: none]`

---

## 3. Hero

### Section Name
Hero — Educational Tours at Polo Forest

### Purpose
Establish **Wonder** — position Polo Forest as Gujarat's premier outdoor classroom. Primary conversion: school program RFP, not instant book. Secondary path to bookable education-tagged experiences.

### Wireframe Layout

```
WF-EDU-HERO (full bleed within 1440px cap, min-height ~520px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  [TEXT: Overline]  EDUCATIONAL TOURS · POLO FOREST, IDAR, GUJARAT             │
│  [TEXT: H1]        Ecology lessons beyond the classroom                       │
│  [TEXT: Body Lg]   Curriculum-aligned field studies for Std 5–12 —            │
│                    biodiversity walks, Jain temple heritage, and hands-on     │
│                    science at the Aravalli foothills. 130 km from Ahmedabad.   │
│  ┌──────────────────────────┐  ┌──────────────────────────┐                  │
│  │ █ Request School Program │  │ ░ View bookable programs →│                  │
│  └──────────────────────────┘  └──────────────────────────┘                  │
│  [TEXT: Caption]  Custom itineraries for 30–500 students · No login required  │
│                                                                               │
│ ┌─ WF-EDU-TRUST-STRIP ───────────────────────────────────────────────────────┐│
│ │ 320+ school trips  │  48,000+ students hosted  │  4.9★ teacher rating       ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full bleed within 1440px cap
- Text overlay: cols 1–7, left-aligned, 1280px inner container
- Trust strip: spans 7 cols below CTAs
- Vertical padding: 96px top, 64px bottom

### Components
`WF-EDU-HERO`, `WF-PILLAR-HERO`, `WF-MEDIA-169`, `WF-TYPE-OVERLINE`, `WF-TYPE-H1`, `WF-TYPE-BODY`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-TYPE-CAP`, `WF-EDU-TRUST-STRIP`, `WF-TYPE-STAT`

### Hierarchy
Overline → H1 → Lead body → Primary RFP CTA → Secondary browse CTA → No-login caption → Trust stats

### CTA Position
- Primary: **Request School Program** → `#rfp`
- Secondary: **View bookable programs →** → `/experiences/category/education`
- No **Book Now** on hero — custom school flow only

### Responsive Behaviour
- Desktop: 7-col text block, left-aligned
- Mobile: full-width text; min-height 440px; CTAs stacked full width

### Accessibility Notes
- One `<h1>` per page
- Primary CTA: `aria-label="Request school program proposal"`
- Stats: semantic `<dl>` with labels
- Hero media alt: "School students on guided ecology walk at Polo Forest, Idar, Gujarat"

### Future Motion Placeholder
`[MOTION: fade-in]` — text overlay; `[MOTION: parallax-subtle]` — media; disabled when `prefers-reduced-motion`

---

## 4. Learning Outcomes

### Section Name
Learning Outcomes — Curriculum-Aligned Field Study Goals

### Purpose
Give teachers and coordinators immediate **Confidence** that programs map to GSEB/CBSE learning objectives — observable outcomes, not generic "fun trip" copy.

### Wireframe Layout

```
WF-LEARNING-OUTCOMES (padding 80px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  LEARNING OUTCOMES                                           │
│ [TEXT: H2]        What students take back to the classroom                    │
│ [TEXT: Body]      Every module is designed with Gujarat board and CBSE        │
│                   science, social studies, and EVS objectives in mind.        │
│                                                                               │
│ ┌─ outcome cards (4 × 3 cols) ───────────────────────────────────────────────┐│
│ │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        ││
│ │ │ [WF-BADGE]   │ │ [WF-BADGE]   │ │ [WF-BADGE]   │ │ [WF-BADGE]   │        ││
│ │ │ GSEB · EVS   │ │ CBSE · Sci   │ │ GSEB · SS    │ │ Cross-curr   │        ││
│ │ │ [TEXT: H3]   │ │ [TEXT: H3]   │ │ [TEXT: H3]   │ │ [TEXT: H3]   │        ││
│ │ │ Observe      │ │ Measure &    │ │ Interpret    │ │ Team inquiry │        ││
│ │ │ biodiversity │ │ record data  │ │ heritage     │ │ & reflection │        ││
│ │ │ [TEXT: Body  │ │ [TEXT: Body  │ │ [TEXT: Body  │ │ [TEXT: Body  │        ││
│ │ │  Sm] Identify│ │  Sm] Soil pH,│ │  Sm] Jain &  │ │  Sm] Group   │        ││
│ │ │  8+ native   │ │  water tests │ │  Solanki     │ │  journals &  │        ││
│ │ │  species     │ │  in field lab│ │  temple hist │ │  debrief     │        ││
│ │ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  Download sample lesson plan (PDF) →                             │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred (cols 3–10)
- Outcome cards: 4 × 3 cols
- Card gap: 24px; card padding: 24px

### Components
`WF-LEARNING-OUTCOMES`, `WF-CARD-FEATURE`, `WF-BADGE`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Body intro → 4-up outcome cards (badge → title → body) → PDF link

### CTA Position
**Download sample lesson plan (PDF) →** — secondary text link. No primary button — hero RFP remains primary.

### Responsive Behaviour
- Desktop: 4-up row
- Tablet: 2×2 grid
- Mobile: single column stack

### Accessibility Notes
- H2 section title; H3 per outcome card
- Badges readable as text — not colour-only
- PDF link: `aria-label="Download sample lesson plan PDF"`

### Future Motion Placeholder
`[MOTION: stagger]` — outcome cards on scroll

---

## 5. Subjects

### Section Name
Subjects — Module Catalogue by Discipline

### Purpose
Help coordinators match trip content to their syllabus — Ecology, History, Geography, Art & Culture, Adventure Learning. Supports **Curiosity** and scoping for RFP.

### Wireframe Layout

```
WF-SUBJECT-GRID
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  SUBJECT MODULES                                             │
│ [TEXT: H2]        Pick a focus — or blend disciplines in one itinerary        │
│                                                                               │
│ ┌─ 6 subject tiles (2 rows × 3 cols) ────────────────────────────────────────┐│
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                            ││
│ │ │ [ICON]      │ │ [ICON]      │ │ [ICON]      │                            ││
│ │ │ Ecology &   │ │ History &   │ │ Geography & │                            ││
│ │ │ Biodiversity│ │ Archaeology │ │ Geology     │                            ││
│ │ │ River Harnav│ │ Jain temples│ │ Aravalli    │                            ││
│ │ │ · flora ID  │ │ · Solanki   │ │ · rock forms│                            ││
│ │ │ [TEXT: Link]│ │ [TEXT: Link]│ │ [TEXT: Link]│                            ││
│ │ │ View module→│ │ View module→│ │ View module→│                            ││
│ │ └─────────────┘ └─────────────┘ └─────────────┘                            ││
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                            ││
│ │ │ Art & Culture│ │ Adventure   │ │ STEM Lab    │                            ││
│ │ │ Tribal crafts│ │ Learning    │ │ Field       │                            ││
│ │ │ · local art  │ │ · ropes low │ │ · water/soil│                            ││
│ │ │ [TEXT: Link]→│ │ [TEXT: Link]→│ │ [TEXT: Link]→│                            ││
│ │ └─────────────┘ └─────────────┘ └─────────────┘                            ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption]  Modules combinable — note preferences in your RFP (§13)      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Section header: 12 cols
- Subject tiles: 3 × 4 cols per row (2 rows)
- Tile min-height: 200px; padding: 24px

### Components
`WF-SUBJECT-GRID`, `WF-CARD`, `[ICON]`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, `WF-TYPE-CAP`

### Hierarchy
Overline → H2 → Subject tile grid (icon → title → bullet topics → module link) → RFP caption

### CTA Position
Per tile: **View module →** — expands inline accordion or scrolls to §7 activities (implementation choice). No booking CTA.

### Responsive Behaviour
- Desktop: 3-column grid
- Tablet: 2 columns
- Mobile: single column or horizontal scroll with snap

### Accessibility Notes
- Each tile is a `<article>` or link with descriptive label
- Icons decorative — subject title conveys meaning
- Module links: "View Ecology and Biodiversity module details"

### Future Motion Placeholder
`[MOTION: stagger]` — tile grid; `[MOTION: card-hover-lift]` — desktop only

---

## 6. Age Groups

### Section Name
Age Groups — Programs by Standard / Grade Band

### Purpose
Clarify pacing, content depth, and duration for **Std 5–8**, **Std 9–10**, and **Std 11–12 / Junior College** — reduces coordinator anxiety about age-appropriateness.

### Wireframe Layout

```
WF-AGE-BAND-TABS (8 cols centred — cols 3–10)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  AGE GROUPS                                                  │
│ [TEXT: H2]        Programs tailored to your students                          │
│                                                                               │
│ ┌─ tab list ─────────────────────────────────────────────────────────────────┐│
│ │ [ Std 5–8 ]  [ Std 9–10 ●active ]  [ Std 11–12 / JC ]                        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ ACTIVE PANEL — Std 9–10                                                       │
│ ┌─ 6 cols ──────────────────────────┐ ┌─ 6 cols ──────────────────────────┐  │
│ │ [TEXT: H3] Upper primary & secondary│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  │
│ │ [TEXT: Body] Deeper field data      │ │ [IMG: 4:3]                          │  │
│ │ collection, heritage interpretation,│ │ Students recording observations     │  │
│ │ half-day to full-day formats.       │ │ at Harnav river trail               │  │
│ │                                     │ │                                     │  │
│ │ · Duration: 6–8 hours (day trip)    │ │                                     │  │
│ │ · Group size: 40–120 per batch      │ │                                     │  │
│ │ · Ratio: 1 naturalist : 15 students │ │                                     │  │
│ │ · Sample: EVS + Social Studies blend│ │                                     │  │
│ │                                     │ │                                     │  │
│ │ [█ Request School Program]          │ │                                     │  │
│ └─────────────────────────────────────┘ └─────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘

TAB CONTENT SUMMARY (wireframe labels)
  Std 5–8:   Sensory discovery, shorter walks, storytelling, 4–6 hrs
  Std 9–10:  Field data, temple history modules, 6–8 hrs
  Std 11–12: Research-style projects, ecology sampling, optional overnight
```

### Grid
- Tab panel container: 8 cols centred (cols 3–10)
- Active panel: 6 + 6 split inside tab content
- Tab bar: full width of centred block

### Components
`WF-AGE-BAND-TABS`, `WF-TAB-LIST`, `WF-TAB-PANEL`, `WF-MEDIA-43`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-BTN-PRIMARY`

### Hierarchy
Overline → H2 → Tab list → Active panel (H3 → specs list → RFP CTA | supporting image)

### CTA Position
**Request School Program** — repeated in active tab panel → `#rfp`. Optional hidden field pre-fill: age band slug.

### Responsive Behaviour
- Desktop: horizontal tabs + split panel
- Mobile: tabs become vertical accordion; image below copy

### Accessibility Notes
- Tabs: `role="tablist"`, `aria-selected`, keyboard arrow navigation
- Panel: `role="tabpanel"` linked via `aria-labelledby`
- Spec list uses semantic `<ul>`

### Future Motion Placeholder
`[MOTION: crossfade]` — panel swap; disabled when `prefers-reduced-motion`

---

## 7. Interactive Activities

### Section Name
Interactive Activities — Hands-On Field Experiences

### Purpose
Show tangible on-ground activities — not lecture-only tours. Builds **Wonder** and helps teachers explain the trip to principals and parents.

### Wireframe Layout

```
WF-EDU-ACTIVITY-GRID
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  INTERACTIVE ACTIVITIES                                      │
│ [TEXT: H2]        Learning by doing at Polo Forest                            │
│                                                                               │
│ ┌─ activity cards (3 × 4 cols) ──────────────────────────────────────────────┐│
│ │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐            ││
│ │ │ ▓ [IMG 16:9]     │ │ ▓ [IMG 16:9]     │ │ ▓ [IMG 16:9]     │            ││
│ │ │ Flora & fauna ID │ │ Temple sketch walk │ │ River water test │            ││
│ │ │ walk with        │ │ — Sharneshwar &    │ │ lab — Harnav     │            ││
│ │ │ naturalist       │ │ Jain heritage      │ │ stream sampling  │            ││
│ │ │ [TEXT: Caption]  │ │ [TEXT: Caption]    │ │ [TEXT: Caption]    │            ││
│ │ │ 90 min · 15–40   │ │ 60 min · classroom │ │ 45 min · field   │            ││
│ │ │ students         │ │ prep included      │ │ kits provided    │            ││
│ │ └──────────────────┘ └──────────────────┘ └──────────────────┘            ││
│ │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐            ││
│ │ │ Bird call bingo  │ │ Tribal craft demo  │ │ Night safari     │            ││
│ │ │ (seasonal)       │ │ — local artisans   │ │ (Std 9+ only)    │            ││
│ │ │ [TEXT: Caption]  │ │ [TEXT: Caption]    │ │ [TEXT: Caption]    │            ││
│ │ │ Monsoon–Winter   │ │ Optional add-on    │ │ Evening · parent │            ││
│ │ └──────────────────┘ └──────────────────┘ └──────────────────┘            ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  See all activities in your proposal →  (scroll to #rfp)         │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Activity cards: 3 × 4 cols (2 rows)
- Card gap: 24px
- Image aspect 16:9 within card

### Components
`WF-EDU-ACTIVITY-GRID`, `WF-CARD`, `WF-MEDIA-169`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Activity card grid (image → title → duration/group caption) → RFP link

### CTA Position
**See all activities in your proposal →** — text link to `#rfp`. Activity cards are informational — not individually bookable.

### Responsive Behaviour
- Desktop: 3-column grid
- Tablet: 2 columns
- Mobile: horizontal scroll carousel with peek

### Accessibility Notes
- Card titles as H3
- Duration and group size in visible caption — not icon-only
- Seasonal activities note availability in caption text

### Future Motion Placeholder
`[MOTION: stagger]` — activity cards on scroll

---

## 8. Safety

### Section Name
Safety — Protocols, Ratios & Credentials

### Purpose
Address the #1 blocker for school trips — student safety, supervision ratios, emergency plans, and venue certifications. Supports **Trust** before testimonials and RFP.

### Wireframe Layout

```
WF-SAFETY-CREDENTIALS (surface-2 band, full width)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  SAFETY FIRST                                               │
│ [TEXT: H2]        Rigorous standards for every school group                   │
│                                                                               │
│ ┌─ 4 cols ──────────┐ ┌─ 4 cols ──────────┐ ┌─ 4 cols ──────────┐          │
│ │ [ICON]            │ │ [ICON]            │ │ [ICON]            │          │
│ │ [TEXT: H3]        │ │ [TEXT: H3]        │ │ [TEXT: H3]        │          │
│ │ Supervision       │ │ Medical &         │ │ Venue &           │          │
│ │ ratios            │ │ emergency         │ │ transport         │          │
│ │ 1:15 students     │ │ First aid at every│ │ GPS-tracked buses │          │
│ │ min; 1:10 Std 5–8 │ │ site; Idar hospital│ │ from Ahmedabad;  │          │
│ │ [TEXT: Body Sm]   │ │ 25 min; parent SMS│ │ resort tie-ups    │          │
│ │                   │ │ alert protocol    │ │ for overnights    │          │
│ └───────────────────┘ └───────────────────┘ └───────────────────┘          │
│                                                                               │
│ ┌─ checklist panel (8 cols centred) ─────────────────────────────────────────┐ │
│ │ ✓ Pre-trip teacher briefing pack & risk assessment PDF                    │ │
│ │ ✓ Life jackets for river activities · helmet checks for adventure modules │ │
│ │ ✓ Gender-segregated washrooms at base camp · drinking water stations      │ │
│ │ ✓ GST-registered operator · insurance documentation on request              │ │
│ │ [TEXT: Link]  Download safety & compliance pack (PDF) →                     │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 3 × 4 col feature columns
- Checklist panel: 8 cols centred (cols 3–10)
- Section padding: 80px vertical

### Components
`WF-SAFETY-CREDENTIALS`, `WF-CARD-FEATURE`, `[ICON]`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → 3-up safety pillars → Checklist → PDF download link

### CTA Position
**Download safety & compliance pack (PDF) →** — secondary link for procurement folders.

### Responsive Behaviour
- Desktop: 3-column pillars + centred checklist
- Mobile: stacked pillars; checklist full width

### Accessibility Notes
- Checklist uses semantic list with visible checkmarks — not colour-only
- Emergency distances in plain text (e.g. "25 minutes to Idar Civil Hospital")
- PDF link indicates format

### Future Motion Placeholder
`[MOTION: fade-in]` — checklist panel

---

## 9. Teacher Benefits

### Section Name
Teacher Benefits — Coordinator & Educator Support

### Purpose
Reduce prep burden for teachers — pre-trip packs, worksheets, debrief guides, and on-site coordinator liaison. Converts skeptical coordinators into advocates.

### Wireframe Layout

```
WF-TEACHER-BENEFITS (split layout)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  FOR TEACHERS & COORDINATORS                                 │
│ ┌─ 6 cols ─────────────────────────────┐ ┌─ 6 cols ─────────────────────┐    │
│ │ [TEXT: H2] We handle logistics —      │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    │
│ │ you focus on learning                 │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    │
│ │                                       │ │ [IMG: 16:9]                    │    │
│ │ ┌─ benefit list ────────────────────┐ │ │ Teacher briefing students      │    │
│ │ │ [ICON] Pre-trip lesson plan PDF   │ │ │ before Harnav trail            │    │
│ │ │ [ICON] Printable worksheets       │ │ │                                │    │
│ │ │ [ICON] Dedicated trip coordinator │ │ │                                │    │
│ │ │ [ICON] Post-trip reflection guide │ │ │                                │    │
│ │ │ [ICON] Flexible timing for exams    │ │ │                                │    │
│ │ └───────────────────────────────────┘ │ │                                │    │
│ │ [TEXT: Link]  Sample teacher pack →   │ │                                │    │
│ └───────────────────────────────────────┘ └────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 6 + 6 split within `WF-CONTAINER`
- Benefit list: vertical stack, 16px gap between items
- Section padding: 80px vertical

### Components
`WF-TEACHER-BENEFITS`, `WF-MEDIA-169`, `[ICON]`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Benefit list with icons → Sample pack link | Supporting image

### CTA Position
**Sample teacher pack →** — PDF download link. Primary RFP remains in hero and §13.

### Responsive Behaviour
- Desktop: content left, image right
- Mobile: content first, image second

### Accessibility Notes
- Benefit list: semantic `<ul>`; icons `aria-hidden="true"`
- PDF link descriptive — "Download sample teacher preparation pack"

### Future Motion Placeholder
`[MOTION: slide-up]` — content column on scroll

---

## 10. Schools

### Section Name
Schools — Partner Institutions & Repeat Clients

### Purpose
Social proof via recognizable Gujarat schools — city labels build local trust for Ahmedabad, Gandhinagar, Mehsana, and Surat coordinators.

### Wireframe Layout

```
WF-SCHOOL-LOGO-GRID
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  TRUSTED BY SCHOOLS                                          │
│ [TEXT: H2]        320+ trips with Gujarat's leading institutions              │
│ [TEXT: Body]      CBSE, GSEB, and international curriculum schools —        │
│                   many return year after year.                                │
│                                                                               │
│ ┌─ logo grid (2 rows × 6 logos, greyscale placeholders) ─────────────────────┐│
│ │ [LOGO] Delhi Public │ [LOGO] Udgam School   │ [LOGO] Zydus School │ ...    ││
│ │        Ahmedabad    │        Ahmedabad      │        Ahmedabad    │        ││
│ │ [LOGO] Anand Niketan│ [LOGO] Mahatma Gandhi  │ [LOGO] St. Xavier's │ ...    ││
│ │        Gandhinagar  │        Intl Ahmedabad   │        Loyola Hall  │        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption]  Logos represent past clients; not an endorsement hierarchy.  │
│ [TEXT: Link]  Read teacher testimonials ↓                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Logo cells: 6 per row (2 cols each within 12-col grid) or flexible 6-up with equal width
- Logo max-height: 48px; school name caption below
- Section padding: 64px vertical

### Components
`WF-SCHOOL-LOGO-GRID`, `WF-PARTNER-LOGO-ROW`, `WF-LOGO`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Body → Logo grid (logo + city caption) → Disclaimer → Testimonials jump link

### CTA Position
**Read teacher testimonials ↓** — anchor to §12. No primary button.

### Responsive Behaviour
- Desktop: 6-up logo row × 2 rows
- Mobile: 3-up grid or horizontal scroll

### Accessibility Notes
- Each logo: `alt="[School name] logo"`
- Disclaimer caption visible — logos not ranked
- Jump link: "Skip to teacher testimonials section"

### Future Motion Placeholder
`[MOTION: none]` — static trust display

---

## 11. Gallery

### Section Name
Gallery — Past School Trips at Polo Forest

### Purpose
Visual proof of engaged students, forest trails, temple visits, and group activities. Entry point to full gallery filtered by education tag.

### Wireframe Layout

```
WF-EDU-GALLERY-STRIP
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  GALLERY                                                     │
│ [TEXT: H2]        Moments from the field                                      │
│                                                                               │
│ ┌─ masonry-style grid (12 cols) ───────────────────────────────────────────────┐│
│ │ ┌─ 4 cols ──┐ ┌─ 4 cols ──┐ ┌─ 4 cols ──┐                                  ││
│ │ │ ▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓ │                                  ││
│ │ │ Ecology   │ │ Temple    │ │ Group at  │                                  ││
│ │ │ walk      │ │ visit     │ │ river     │                                  ││
│ │ └───────────┘ └───────────┘ └───────────┘                                  ││
│ │ ┌─ 6 cols ──────────────┐ ┌─ 6 cols ──────────────┐                        ││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                        ││
│ │ │ Field lab setup       │ │ Campfire debrief      │                        ││
│ │ └───────────────────────┘ └───────────────────────┘                        ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  View full education gallery →  (/gallery?tag=education)         │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Row 1: 3 × 4 cols
- Row 2: 2 × 6 cols
- Gap: 16px between images

### Components
`WF-EDU-GALLERY-STRIP`, `WF-MEDIA-BLOCK`, `WF-GALLERY-GRID`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Image grid (click opens lightbox) → Full gallery link

### CTA Position
**View full education gallery →** → `/gallery?tag=education`

### Responsive Behaviour
- Desktop: asymmetric grid as shown
- Mobile: 2-column grid or horizontal scroll

### Accessibility Notes
- Each image: descriptive alt — activity + location
- Lightbox: focus trap, Escape to close, `aria-modal="true"`
- Gallery link announces filtered context

### Future Motion Placeholder
`[MOTION: fade-in]` — grid on scroll; lightbox instant open

---

## 12. Testimonials

### Section Name
Testimonials — Teachers & Principals

### Purpose
Peer voice from educators — not generic guest reviews. Supports **Trust** immediately before RFP form.

### Wireframe Layout

```
WF-TESTIMONIAL-EDU (8 cols centred — cols 3–10)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  TEACHER VOICES                                              │
│ [TEXT: H2]        What coordinators say about Polo Safari                      │
│                                                                               │
│ ┌─ testimonial cards (carousel or 2-up) ──────────────────────────────────────┐│
│ │ ┌────────────────────────────────────────────────────────────────────────┐ ││
│ │ │ "Our Std 9 students finally connected EVS concepts to the Harnav       │ ││
│ │ │  ecosystem. The naturalist was patient and the worksheets were ready   │ ││
│ │ │  before we boarded the bus from Ahmedabad."                            │ ││
│ │ │ ○ Priya Mehta · Science Coordinator                                    │ ││
│ │ │   Udgam School for Children, Ahmedabad                                 │ ││
│ │ │ [TEXT: Caption]  Repeat booking — 3 consecutive years                  │ ││
│ │ └────────────────────────────────────────────────────────────────────────┘ ││
│ │ ┌────────────────────────────────────────────────────────────────────────┐ ││
│ │ │ "Safety briefing for parents was thorough. We brought 180 students     │ ││
│ │ │  and every batch was managed without chaos."                           │ ││
│ │ │ ○ Rajesh Patel · Principal                                             │ ││
│ │ │   GSEB-affiliated school, Mehsana                                    │ ││
│ │ └────────────────────────────────────────────────────────────────────────┘ ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  Read all reviews →  (/reviews?category=education)              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Testimonial block: 8 cols centred (cols 3–10)
- Cards: stacked or 2-up at 6 cols each
- Card padding: 32px

### Components
`WF-TESTIMONIAL-EDU`, `WF-CARD-REVIEW`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### Hierarchy
Overline → H2 → Quote cards (quote → name → role/school → repeat caption) → All reviews link

### CTA Position
**Read all reviews →** → `/reviews?category=education`. Primary conversion follows in §13.

### Responsive Behaviour
- Desktop: 2-up or carousel with dots
- Mobile: single card swipe carousel

### Accessibility Notes
- Quotes in `<blockquote>` with `<cite>` for attribution
- Carousel: pause control; keyboard navigable; `aria-live="polite"` on slide change
- Star ratings omitted or text-only ("Highly recommended by coordinator")

### Future Motion Placeholder
`[MOTION: crossfade]` — carousel slides; respect `prefers-reduced-motion`

---

## 13. School Inquiry Form — RFP

### Section Name
School Inquiry Form — Program Request (#rfp)

### Purpose
Primary **Action** conversion — capture school name, grade, group size, preferred dates, curriculum focus, and coordinator contact. Separate from standard booking and corporate RFP. No login required.

### Wireframe Layout

```
WF-FORM-RFP-EDUCATION (12 cols, id="rfp", surface-2 background band)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  START YOUR SCHOOL PROGRAM                                   │
│ [TEXT: H2]  Request a custom educational tour proposal                        │
│ [TEXT: Body]  Tell us about your group — we respond within 24 business hours  │
│ with a tailored itinerary, indicative pricing, and teacher prep pack outline. │
│ No login required. Not an instant booking.                                    │
│                                                                               │
│ ┌─ form (8 cols centred — cols 3–10) ──────────────────────────────────────┐ │
│ │ ░ School name *                                                           │ │
│ │ ░ Board / curriculum * — GSEB, CBSE, ICSE, IB, Other                      │ │
│ │ ░ City * — Ahmedabad, Gandhinagar, Mehsana, Surat, Other                │ │
│ │ ░ Grade / standard * — multi-select: Std 5–8, 9–10, 11–12, Mixed        │ │
│ │ ░ Number of students * — select: 30–50, 51–100, 101–200, 201–500, 500+  │ │
│ │ ░ Number of teachers / escorts (optional)                                 │ │
│ │ ░ Preferred dates * — date range picker (start – end)                     │ │
│ │ ░ Flexible dates?  ○ Yes  ○ No                                            │ │
│ │ ░ Trip format — Day trip, Overnight (1N/2D), Multi-day, Not sure          │ │
│ │ ░ Subject focus * — multi-select chips                                    │ │
│ │   Ecology · History · Geography · STEM lab · Adventure · Blend            │ │
│ │ ░ Special requirements (optional) — textarea                              │ │
│ │   e.g. vegetarian meals, accessibility, exam schedule constraints         │ │
│ │ ─── Coordinator contact ───                                               │ │
│ │ ░ Coordinator name *     ░ Role — Teacher, Principal, Admin, PTA            │ │
│ │ ░ Email *                ░ Phone number *                                 │ │
│ │ □ I agree to Polo Safari privacy policy and contact about this enquiry *  │ │
│ │                                                                           │ │
│ │ [█ Submit School Program Request]                                         │ │
│ │ [TEXT: Caption] No payment required. Proposal only — confirm via email.   │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                               │
│ SUCCESS STATE (post-submit — same page or /education/thank-you)               │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ [TEXT: H2] School program request received                               │ │
│ │ [TEXT: Body] Reference #EDU-2026-0923. Our education team will email      │ │
│ │ coordinator@school.edu within 24 hours with a draft itinerary.           │ │
│ │ [░ Browse bookable programs]  [░ Back to homepage]                         │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full-width section band: 12 cols
- Form fields: 8 cols centred (cols 3–10)
- Field vertical gap: 16px
- Submit button: full width of form column

### Components
`WF-FORM-RFP-EDUCATION`, `WF-INPUT-TEXT`, `WF-INPUT-SELECT`, `WF-INPUT-DATE` (range), `WF-INPUT-TEXTAREA`, `WF-INPUT-RADIO`, `WF-FILTER-CHIPS` (multi-select subjects), `WF-INPUT-CHECKBOX`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
Overline → H2 → Intro → School details → Trip scoping → Subject focus → Contact block → Consent → Submit → Disclaimer → Success state

### CTA Position
**Submit School Program Request** — sole primary action in form. Success state: secondary links only.

### Responsive Behaviour
- Desktop: 8-col centred form; two-column row for name/email pairs
- Mobile: single column; date range uses native pickers; chips wrap

### Accessibility Notes
- All required fields marked `*` with `aria-required="true"`
- Error summary at top on validation fail — `role="alert"`
- Subject chips: keyboard selectable; announced as toggle buttons
- Consent checkbox required — link to `/legal/privacy`
- Success message: `aria-live="polite"` on submit
- Form `aria-labelledby` points to H2

### Future Motion Placeholder
`[MOTION: fade-in]` — success state swap; `[MOTION: none]` — validation errors instant

---

## 14. Footer

### Section Name
Global Footer — Site-Wide Exit Paths

### Purpose
Standard footer with **Educational Tours** link active context. Five-pillar taxonomy preserved; destinations geographic only.

### Wireframe Layout

```
WF-SHELL-FOOTER (full width)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]                                                                        │
│ [TEXT: Body] Experiential travel at Polo Forest. Heritage, education,         │
│ corporate retreats, family getaways, and adventure.                           │
│                                                                               │
│ Experiences    Discover       Plan           Company                          │
│ Heritage       Polo Forest    Plan your visit  About                          │
│ Educational ●  Destinations   Enquire          Contact                        │
│ Corporate      Stories        FAQ              Careers                        │
│ Family         Gallery        Book online      Legal                          │
│ Adventure      Reviews                                                      │
│                                                                               │
│ [WF-FORM-NEWSLETTER]  ░ Email    [█ Subscribe]                               │
│ [TEXT: Caption] © 2026 Polo Safari · Privacy · Terms                         │
└──────────────────────────────────────────────────────────────────────────────┘

● Educational Tours link — current section emphasis (grayscale bold/underline)
(See Step 1 § D10)
```

### Grid
- 12 cols; link columns 3+3+3+3

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, `WF-FORM-NEWSLETTER`, `WF-INPUT-TEXT`, `WF-BTN-PRIMARY`

### Hierarchy
Logo → Tagline → Link columns → Newsletter → Legal

### CTA Position
**Subscribe** — newsletter. **Enquire** — general enquiries at `/plan/enquire`.

### Responsive Behaviour
- Desktop: 4-column link grid
- Mobile: stacked accordion

### Accessibility Notes
- Educational Tours link: `aria-current="page"` when on `/education`
- Five pillar links match locked slugs

### Future Motion Placeholder
`[MOTION: none]`

---

# Appendices

## A. RFP form field specification

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| School name | Yes | text | |
| Board / curriculum | Yes | select | GSEB, CBSE, ICSE, IB, Other |
| City | Yes | select | Gujarat cities + Other |
| Grade / standard | Yes | multi-select | Std 5–8, 9–10, 11–12, Mixed |
| Number of students | Yes | select | 30–50, 51–100, 101–200, 201–500, 500+ |
| Teachers / escorts | No | number | |
| Preferred dates | Yes | date range | Start + end |
| Flexible dates | No | radio | Yes / No |
| Trip format | No | select | Day, 1N/2D, Multi-day, Not sure |
| Subject focus | Yes | multi-select chips | From §5 modules |
| Special requirements | No | textarea | Dietary, accessibility, timing |
| Coordinator name | Yes | text | |
| Role | No | select | Teacher, Principal, Admin, PTA |
| Email | Yes | email | |
| Phone | Yes | tel | |
| Privacy consent | Yes | checkbox | |

## B. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*` |
| Breadcrumb | `WF-BREADCRUMB` |
| Hero | `WF-EDU-HERO`, `WF-EDU-TRUST-STRIP` |
| Learning Outcomes | `WF-LEARNING-OUTCOMES`, `WF-CARD-FEATURE`, `WF-BADGE` |
| Subjects | `WF-SUBJECT-GRID`, `WF-CARD` |
| Age Groups | `WF-AGE-BAND-TABS`, `WF-TAB-*` |
| Interactive Activities | `WF-EDU-ACTIVITY-GRID`, `WF-CARD`, `WF-MEDIA-169` |
| Safety | `WF-SAFETY-CREDENTIALS`, `WF-CARD-FEATURE` |
| Teacher Benefits | `WF-TEACHER-BENEFITS`, `WF-MEDIA-169` |
| Schools | `WF-SCHOOL-LOGO-GRID`, `WF-PARTNER-LOGO-ROW` |
| Gallery | `WF-EDU-GALLERY-STRIP`, `WF-GALLERY-GRID` |
| Testimonials | `WF-TESTIMONIAL-EDU`, `WF-CARD-REVIEW` |
| RFP Form | `WF-FORM-RFP-EDUCATION`, `WF-INPUT-*` |
| Footer | `WF-SHELL-FOOTER` |

## C. Cross-page links

| From | To | Trigger |
|------|-----|---------|
| Homepage §7 Educational | `/education#rfp` | Request School Program |
| Homepage hero slide 3 | `/education#rfp` | Request School Program |
| Experience listing empty state | `/education#rfp` | School program enquiry |
| Footer Educational Tours | `/education` | Nav link |
| Secondary hero CTA | `/experiences/category/education` | View bookable programs |

## D. Step 7 handoff

| Item | Status |
|------|--------|
| All 14 education sections specified | Complete |
| Custom school RFP (not standard booking) | Complete |
| No login required for RFP | Complete |
| Learning outcomes, subjects, age bands | Complete |
| Safety & teacher benefits | Complete |
| Schools, gallery, testimonials | Complete |
| Confirmed taxonomy locked | Complete |
| English-only | Complete |

---

**Document path:** `docs/ux-wireframes/06-educational-tours.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Steps 1–2, Step 5 corporate patterns, confirmed user decisions, Option A taxonomy lock
