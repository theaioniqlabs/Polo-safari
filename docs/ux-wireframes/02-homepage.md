# Polo Safari — UX Wireframe System
## Step 2: Homepage

**Version:** 0.2.0  
**Status:** Wireframe specification (grayscale only) — premium editorial UX revision  
**Scope:** Homepage (`/`) — complete section-by-section documentation  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md)  
**Next step:** Step 4 — Experience detail page  

---

## Decisions Log

Answers to Step 1 clarifying questions, confirmed before this wireframe was authored.

| # | Question (Step 1) | Decision | Homepage impact |
|---|-------------------|----------|-----------------|
| 1 | Booking vs enquiry-only? | **Full online booking flow** | "Book Now" CTAs route to `/plan/book/[slug]/dates`; login gate before checkout |
| 2 | Payment method? | **Online UPI/card at checkout** | Booking review step shows payment options; trust copy near conversion CTAs |
| 3 | User accounts? | **Login required for booking** | Auth CTAs in nav profile menu; "Login to book" on experience cards; account-aware nav states |
| 4 | Language at launch? | **English-only** | `WF-NAV-LANG` shows EN; Hindi/Gujarati disabled or "Coming soon" |
| 5 | Experience taxonomy? | **Confirmed (Option A)** — five pillars: Heritage, Educational Tours, Corporate Retreats, Family, Adventure. Popular Destinations is geographic grouping only — not a sixth category. No additional categories. | Category sections, mega menu, filters, and footer links use this locked structure |
| 6 | Corporate & education flows? | **Separate custom proposal/RFP paths** | Corporate & Educational homepage sections use "Request Proposal" → `/corporate` or `/education` RFP forms — not standard booking |
| 7 | Trust signal priority? | **Guest reviews, stats, awards** | Testimonials, Google Reviews, Awards, and stat strip placed high in scroll order (before mid-page curiosity sections) |
| 8 | Hero intent? | **Rotating seasonal campaign** | Hero carousel with campaign-specific headline, dates, and CTA — not single static brand slide |

### Confirmed taxonomy (locked)

> **Five experience pillars (definitive):** Heritage, Educational Tours, Corporate Retreats, Family, Adventure. **Popular Destinations** is a geographic grouping only — not a product category. URL slugs: `heritage`, `education`, `corporate`, `family`, `adventure`. No additional categories will be added.

---

## Page Overview

### Route & template

| Property | Value |
|----------|-------|
| URL | `/` |
| Template | `WF-SHELL` + homepage sections (no breadcrumb) |
| H1 | One semantic H1 in Hero (campaign headline) |
| Emotion arc | Wonder → Trust → Curiosity → Action |

### Section order (scroll sequence)

Canonical scroll order — trust cluster elevated; layout patterns alternate (no adjacent duplicates).

```
1.  Navigation (WF-SHELL-HEADER)              — Glass overlay
2.  Announcement Bar                            — Slim strip
3.  Hero — rotating seasonal campaign           — Full-bleed cinematic
4.  Quick Search                                — Floating glass pill
5.  Experience Categories                       — Horizontal image scroll
6.  Featured Experiences                        — Asymmetric editorial
── Trust cluster (priority) ──
7.  Trust Stats Bar                             — Metrics ribbon
8.  Testimonials                                — Editorial split + scroll
9.  Trust Wall (Google Reviews + Awards)        — Trust wall
── Pillar deep-dives (Curiosity) ──
10. Educational Tours                           — Vertical photo journey
11. Corporate Retreats                          — Dark full-bleed cinematic
12. Interactive Story Section                   — Tabbed scroll editorial
13. Adventure                                   — Full-width + horizontal cards + map
14. Heritage                                    — Asymmetric gallery
15. Family                                      — Portrait editorial
16. Popular Destinations                        — Panorama + portrait grid
17. Packages                                    — Landscape comparison strip
18. Gallery Preview                             — Full-bleed masonry
19. Blogs Preview                               — Magazine 1+3
20. Journey Timeline                            — Illustrated horizontal stepper
21. Partners                                    — Logo marquee
22. FAQ                                         — Centred accordion
23. Emotional CTA Band (Newsletter + Contact)   — Merged conversion band
24. Footer (WF-SHELL-FOOTER)                    — Multi-zone hierarchy
```

**Content ratio target:** 65% photography · 20% layout chrome · 15% text.

### Global spacing & premium rules

| Token | Value |
|-------|-------|
| Section vertical padding | Alternate **120px** (hero/editorial) · **96px** (cards) · **64px** (compact trust/FAQ) |
| Hero min-height | **85vh** desktop · **75vh** mobile |
| Container max | 1280px for text; photography may **break container** full-bleed |
| Card corner radius | **16px** cards · **24px** editorial blocks · **pill** for search |
| Section backgrounds | Alternate warm ivory → white → dark charcoal (Corporate only) → ivory |

### Layout pattern ledger

No two adjacent sections share the same layout pattern.

| # | Section | Layout pattern |
|---|---------|----------------|
| 1 | Navigation | Glass overlay |
| 2 | Announcement | Slim strip |
| 3 | Hero | Full-bleed cinematic |
| 4 | Quick Search | Floating glass pill |
| 5 | Categories | Horizontal image scroll |
| 6 | Featured | Asymmetric editorial |
| 7 | Trust Stats | Metrics ribbon |
| 8 | Testimonials | Editorial split + scroll |
| 9 | Trust Wall | Trust wall |
| 10 | Education | Vertical photo journey |
| 11 | Corporate | Dark full-bleed cinematic |
| 12 | Story | Tabbed scroll editorial |
| 13 | Adventure | Full-width + horizontal cards + map |
| 14 | Heritage | Asymmetric gallery (left image) |
| 15 | Family | Portrait editorial (right image) |
| 16 | Destinations | Panorama + portrait grid |
| 17 | Packages | Landscape comparison strip |
| 18 | Gallery | Full-bleed masonry |
| 19 | Blog | Magazine 1+3 |
| 20 | Journey | Illustrated horizontal stepper |
| 21 | Partners | Logo marquee |
| 22 | FAQ | Centred accordion |
| 23 | Emotional CTA | Merged conversion band |
| 24 | Footer | Multi-zone hierarchy |

### CTA hierarchy (page-level)

| Priority | CTA | Sections |
|----------|-----|----------|
| 1 — Brand | Plan Your Visit | Nav |
| 2 — Campaign | Book / Request Proposal / Request School Program | Hero, pillars |
| 3 — Discovery | Explore / View all / Browse | Categories, Featured, Destinations |
| 4 — Conversion | Book Now | Featured, Adventure, Family, Heritage, Packages |
| 5 — Trust | Read reviews / Google | Trust cluster |
| 6 — Relationship | Talk to expert / WhatsApp / Subscribe | Emotional CTA band |

**Rule:** Max **one primary button** visible per viewport fold.

### Homepage-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-ANNOUNCEMENT-BAR` | Dismissible top strip for seasonal promos |
| `WF-HERO-CAROUSEL` | Rotating campaign slides with thin progress bar |
| `WF-QUICK-SEARCH` | Floating glass pill search bar (no section H3) |
| `WF-CATEGORY-SCROLL` | Horizontal portrait photography category rail |
| `WF-PILLAR-SECTION` | Split layout for pillar deep-dives |
| `WF-PILLAR-JOURNEY` | Alternating vertical photo journey (Education) |
| `WF-PILLAR-DARK` | Dark full-bleed cinematic pillar (Corporate) |
| `WF-STORY-INTERACTIVE` | Scroll or click-driven story panels |
| `WF-DESTINATION-CARD` | Geographic destination hub card |
| `WF-PACKAGE-CARD` | Bundled offer landscape comparison card |
| `WF-JOURNEY-TIMELINE` | Illustrated guest journey steps |
| `WF-REVIEWS-GOOGLE` | Google rating summary + review cards |
| `WF-TRUST-WALL` | Google + Awards + school/corporate logos band |
| `WF-AWARD-GRID` | Logo/badge grid for achievements |
| `WF-PARTNER-MARQUEE` | Slow auto-scroll partner logo strip |
| `WF-TRUST-STATS-BAR` | Horizontal metrics strip |
| `WF-GALLERY-MASONRY` | Full-bleed asymmetric masonry grid |
| `WF-BLOG-MAGAZINE` | Featured story + stacked supporting stories |
| `WF-EMOTIONAL-CTA-BAND` | Merged newsletter + contact conversion band |
| `WF-MAP-EMBED` | Interactive map placeholder (Adventure) |

---

# Homepage Sections

---

## 1. Navigation

### Section Name
Global Header — Homepage Default State

### Purpose
Persistent wayfinding, discovery, account access, and primary conversion entry. On homepage, header starts transparent/over hero then condenses on scroll. Reflects **login-required booking** via profile menu states documented in Step 1 D6.

### Wireframe Layout

```
HOMEPAGE — TOP OF PAGE (transparent over hero; 72px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  ┌─ glass pill nav group ─────────────────────────┐                   │
│         │ Experiences▾  Discover▾  Polo Forest  Plan  About │  [○][○][EN][██] │
│         └──────────────────────────────────────────────────┘  Search Prof Plan │
└──────────────────────────────────────────────────────────────────────────────┘

GUEST — Profile dropdown (Prof trigger)
                    ┌─────────────────────────┐
                    │ Login                   │
                    │ Create account          │
                    │ ─────────────────────── │
                    │ [TEXT: Caption]         │
                    │ Login required to book  │
                    └─────────────────────────┘

AUTHENTICATED — Profile dropdown
                    ┌─────────────────────────┐
                    │ ○ Priya Shah            │
                    │   priya@email.com       │
                    │ ─────────────────────── │
                    │ My bookings             │
                    │ Profile settings        │
                    │ Log out                 │
                    └─────────────────────────┘

SCROLLED STATE (>80px) — surface-1 + border; 64px height
(See Step 1 § D1, D9 for mega menu, Discover dropdown, mobile drawer)
```

### Grid
- Full viewport width; inner content `WF-GRID-CONTAINER` 1280px
- Logo: cols 1–2 | Glass pill nav group: cols 3–8 | Utilities + CTA: cols 9–12
- Glass pill: frosted container for nav links only; utilities remain icon-only
- See Step 1 § D1

### Layout Pattern
Glass overlay navigation (Apple/Airbnb property pages)

### Image / Text Ratio
0% image · 15% text (nav chrome only)

### Components
`WF-SHELL-HEADER`, `WF-LOGO`, `WF-NAV-PRIMARY`, `WF-NAV-MEGA`, `WF-NAV-DROPDOWN`, `WF-NAV-SEARCH`, `WF-NAV-PROFILE`, `WF-NAV-LANG`, `WF-THEME-TOGGLE`, `WF-BTN-PRIMARY`, `WF-SKIP-LINK`

### Hierarchy
Skip link → Logo → Primary nav → Search → Profile (auth) → Language → Theme → Plan Your Visit CTA

### CTA Position
**Plan Your Visit** — far right, `WF-BTN-PRIMARY`, always visible. Does not compete with Hero campaign CTA below.

### Responsive Behaviour
- `≥1280px`: Full desktop header (Step 1 D1)
- `768–1023px`: Hide "About" → Discover dropdown
- `<768px`: Mobile header + drawer (Step 1 D4); auth links in drawer footer; **Plan Your Visit** as sticky bottom CTA in drawer — not in header bar
- Homepage hero: header transparent at top; gains background on scroll

### Accessibility Notes
- `WF-SKIP-LINK` → `#main-content` first focusable element
- `<nav aria-label="Primary">` for main links
- Profile trigger: `aria-label="Account menu"`; guest dropdown explains login requirement
- Sticky header: `scroll-padding-top` = header height + 16px
- Mega menu: keyboard + Escape; no hover-only open

### Future Motion Placeholder
`[MOTION: header-condense]` — 72→64px on scroll; `[MOTION: header-bg-fade]` — transparent → surface on scroll

---

## 2. Announcement Bar

### Section Name
Announcement Bar — Seasonal Promo Strip

### Purpose
Surface time-sensitive campaigns (monsoon ecology tours, Diwali corporate packages, school holiday programs) above the header without displacing primary nav. Dismissible per session.

### Wireframe Layout

```
FULL WIDTH (surface-2, height ~32px, above header)
┌──────────────────────────────────────────────────────────────────────────────┐
│  Monsoon ecology tours now open — View the season →                    [×]   │
└──────────────────────────────────────────────────────────────────────────────┘

DISMISSED STATE
(Bar hidden; preference stored sessionStorage for current visit)
```

### Grid
- 12 cols full bleed within 1440px cap
- Message: cols 2–10 centred | Dismiss: col 12
- 6px vertical padding; 16px horizontal padding
- **No icon** — editorial tone only

### Layout Pattern
Slim editorial ticker (Patagonia seasonal banners)

### Image / Text Ratio
0% image · 100% text (bar only)

### Components
`WF-ANNOUNCEMENT-BAR`, `WF-TYPE-BODY` (single line), `WF-TYPE-LINK`, `WF-BTN-ICON` (dismiss)

### Hierarchy
Promo message → Link → Dismiss

### CTA Position
Inline text link **"View the season →"** right of message; links to campaign landing or Hero slide anchor. No primary button (avoids triple-CTA with header + hero). Editorial tone — no urgency countdown.

### Responsive Behaviour
- Desktop: single line, centred
- Mobile: message truncates with ellipsis; link remains tappable; dismiss 44×44px
- Bar stacks above sticky header (z-index: header + 1)

### Accessibility Notes
- `role="region"` + `aria-label="Announcement"`
- Dismiss: `aria-label="Dismiss announcement"`
- Do not auto-rotate announcements (static one message per deploy)
- Sufficient contrast on surface-2

### Future Motion Placeholder
`[MOTION: slide-down]` — 8px Y on appear; `[MOTION: none]` on dismiss (instant hide)

---

## 3. Hero

### Section Name
Hero — Rotating Seasonal Campaign Carousel

### Purpose
Deliver **Wonder** — immediate emotional hook via seasonal campaigns (monsoon safari, winter heritage walk, corporate offsite season, school trip enrollment). Rotates 3–4 campaign slides; each slide has distinct headline, subcopy, and CTA.

### Wireframe Layout

```
FULL BLEED HERO (min-height 85vh desktop / 75vh mobile; WF-GRID-FULL-BLEED)
┌──────────────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│                                                                              │
│  [TEXT: Overline]  MONSOON 2026                                              │
│  [TEXT: Display]   Discover Polo Forest                                      │
│                    After the Rains                                           │
│  [TEXT: Body Lg]   Guided ecology walks in Gujarat's hidden forest.          │
│  [█ Book Monsoon Safari]   Explore experiences →                             │
│  [TEXT: Caption]   From ₹2,499 · 1 day                                       │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│ ═══════════════════●═══════  (thin progress bar — not dot indicators)        │
│         ┌─ WF-QUICK-SEARCH glass pill overlaps bottom edge ─┐                │
└─────────┴───────────────────────────────────────────────────┴────────────────┘

TEXT ANCHOR: bottom-left, lower third — National Geographic cover style
GRADIENT: scrim rises from bottom (not left-only overlay)

SLIDE 2 EXAMPLE (Corporate season)
  [TEXT: Overline]  CORPORATE RETREATS
  [TEXT: Display]   Build Teams Where Nature Inspires
  [TEXT: Body Lg]   Custom offsite programs at Polo Forest for 20–200 guests.
  [█ Request Proposal]   View Corporate Programs →

SLIDE 3 EXAMPLE (School ecology)
  [TEXT: Overline]  EDUCATIONAL TOURS
  [TEXT: Display]   Ecology Lessons That Leave the Classroom
  [█ Request School Program]   Learn More →
```

### Grid
- Full bleed 1440px max; content block **bottom-left anchored** in cols 1–7, 1280px container
- Media placeholder fills entire hero (`WF-MEDIA-219` or full viewport cover — 21:9 preferred)
- Gradient scrim rises from bottom edge; text in lower third
- Min-height: **85vh** desktop · **75vh** mobile
- Vertical padding: text block 64px above hero bottom edge (above progress bar)

### Layout Pattern
Full-bleed cinematic hero with bottom-third text anchor (Airbnb Experiences / Aman Resorts)

### Image / Text Ratio
**90%** photography · **10%** text (headline + one line + CTA only)

### Photography Recommendation
Misty monsoon forest wide shot; subject in lower-right third; cool tones; no people in frame on slide 1. Golden-hour campfire for corporate slide. School group on trail for education slide.

### Components
`WF-HERO-CAROUSEL`, `WF-PAGE-HERO`, `WF-MEDIA-219`, `WF-TYPE-DISPLAY`, `WF-TYPE-OVERLINE`, `WF-TYPE-BODY`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK` (secondary as text link), `WF-TYPE-CAPTION`, `WF-TYPE-PRICE`, thin progress bar (replaces pagination dots)

### Hierarchy
Overline (season/campaign) → Display headline (H1) → One-line lead body → Primary CTA + secondary text link inline → Price/meta caption → Thin progress bar

### CTA Position
- **Bottom-left**, 64px above Quick Search pill overlap
- **Slide 1 (standard experience):** Primary **Book [Experience]** → `/plan/book/[slug]/dates` (login redirect if guest); Secondary **Explore experiences →** text link → `/experiences`
- **Slide 2 (corporate):** Primary **Request Proposal** → `/corporate#rfp`; Secondary **View Corporate Programs →** text link
- **Slide 3 (education):** Primary **Request School Program** → `/education#rfp`; Secondary **Learn More →** text link
- Caption beneath CTAs: "Login to complete booking" for book CTAs (single line max)
- **No visible prev/next arrows** — swipe and progress bar only; keyboard prev/next still available

### Responsive Behaviour
- Desktop: bottom-left text block, 7 cols
- Tablet: text block 10 cols; progress bar full width
- Mobile: headline centred-bottom; min-height 75vh; swipe gesture for slides
- Auto-advance: 8s interval; pauses on hover/focus/interaction
- Quick Search pill: full-width below hero on mobile (not overlapping)

### Accessibility Notes
- One `<h1>` per page — campaign headline on active slide only; inactive slides `aria-hidden="true"`
- Carousel: `role="region"` + `aria-label="Seasonal campaigns"`; `aria-live="polite"` on slide change
- Prev/next buttons: visible labels ("Previous slide", "Next slide")
- Auto-advance disabled when `prefers-reduced-motion: reduce`
- All CTAs keyboard-focusable; focus order: headline → primary → secondary → controls

### Future Motion Placeholder
`[MOTION: crossfade]` — slide transition; `[MOTION: text-reveal]` — headline on active slide; `[MOTION: parallax-subtle]` — media depth (reduced-motion: static)

---

## 4. Quick Search

### Section Name
Quick Search — Experience Finder Bar

### Purpose
Reduce friction for **Action** — let returning visitors jump directly to availability search without scrolling. Supports date-led booking intent.

### Wireframe Layout

```
FLOATING GLASS PILL (centred; overlaps hero bottom edge by 24px — not full section)
        ┌─────────────────────────────────────────────────────────────┐
        │  All experiences ▾  │  Add dates  │  2 guests ▾  │ █ Search │
        └─────────────────────────────────────────────────────────────┘
              Night Safari    School Trip    Corporate Day
              (popular chips — small links below pill)
```

**No section H3** — the pill bar is self-evident. No full-width elevated card.

### Grid
- Pill: centred within 1280px container; max-width ~960px
- Negative margin-top **−24px** (overlap hero bottom)
- Popular chips: centred row below pill, 8px gap
- Section padding: 0 top (pill overlap), **32px** bottom

### Layout Pattern
Floating glass search pill (Airbnb / Apple Maps search)

### Image / Text Ratio
0% image · 5% text

### Components
`WF-QUICK-SEARCH`, `WF-INPUT-SELECT`, `WF-INPUT-DATE`, `WF-INPUT-TEXT`, `WF-BTN-PRIMARY`, `WF-BADGE` (popular tags as chip links)
- Glass treatment: frosted blur + subtle border — not solid `surface-1` card

### Hierarchy
Filter pill row (experience type · dates · guests · Search) → Popular shortcut chips

### CTA Position
**Search** — `WF-BTN-PRIMARY`, inline right of pill; submits to `/experiences?date=&guests=&category=` or `/search` with params

### Responsive Behaviour
- Desktop: horizontal single-row pill
- Tablet: 2-row pill (Experience + Date | Guests + Search)
- Mobile: stacked fields inside full-width pill; chips scroll horizontally with snap
- Overlap reduced to flush below hero on mobile if cramped

### Accessibility Notes
- Each input has visible `<label>` (not placeholder-only)
- Date picker keyboard-accessible
- Popular links: descriptive text ("Night Safari" not "Popular 1")
- Form submit announces results count via live region on results page

### Future Motion Placeholder
`[MOTION: slide-up]` — card entrance on load; `[MOTION: none]` on field focus

---

## 5. Experience Categories

### Section Name
Experience Categories — Five Pillars + Destinations Entry

### Purpose
Orient visitors to the **confirmed taxonomy** — five experience pillars plus geographic discovery via Popular Destinations. Supports **Curiosity** through photography-first pillar discovery.

### Wireframe Layout

```
SECTION (WF-SECTION, padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]        How do you want to experience Polo Forest?                 │
│                                                                               │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐  → horizontal scroll              │
│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│                                   │
│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│ │▓▓▓▓│  [IMG: 3:4 portrait each]        │
│ │Heri│ │Educ│ │Corp│ │Fami│ │Adve│ │Dest│                                   │
│ │tage│ │atio│ │orat│ │ly  │ │ntur│ │inat│                                   │
│ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                                   │
│                                                                               │
│ [TEXT: Link]  View all experiences →                                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

Each card: full-bleed portrait photo + gradient overlay + pillar name at bottom. **No icons.** No body paragraph.

### Grid
- Header block: left-aligned, cols 1–8 (not centred)
- Category cards: horizontal scroll rail; each card ~200px wide, 3:4 portrait ratio
- Gap: 16px (`space-2`); peek next card 16px on mobile
- 6th card "Popular Destinations" uses aerial/map photo to differentiate

### Layout Pattern
Horizontal portrait scroll (Apple TV categories / Airbnb category rail)

### Image / Text Ratio
**80%** photography · **20%** text (H2 + card labels only)

### Photography Recommendation
One distinctive Polo Forest photo per pillar — temple, classroom outdoors, campfire, family trail, trekker, aerial map.

### Components
`WF-CATEGORY-SCROLL`, `WF-MEDIA-34`, `WF-TYPE-H2`, `WF-TYPE-LINK`

### Hierarchy
H2 → Horizontal photo card rail → View-all link

### CTA Position
Each card is a link/clickable card → `/experiences/category/[slug]` or `#popular-destinations`. Footer link **View all experiences →** → `/experiences`

### Responsive Behaviour
- Desktop: horizontal scroll with snap; 6 cards visible with partial peek
- Tablet: snap scroll, 3 cards visible
- Mobile: snap scroll one card at a time; peek next card 16px

### Accessibility Notes
- Cards: `<a>` with visible pillar label; photography decorative with `alt` describing pillar mood
- Heading structure: H2 for section; card labels are not headings (use `<span>`)
- Horizontal scroll: keyboard scrollable; avoid scroll-jacking

### Future Motion Placeholder
`[MOTION: stagger]` — cards reveal on scroll into view

---

## 6. Featured Experiences

### Section Name
Featured Experiences — Curated Tour Cards

### Purpose
Showcase highest-converting Polo Forest experiences with pricing and direct **Book Now** paths. Bridges Wonder → Action with asymmetric editorial curation — not a product catalogue grid.

### Wireframe Layout

```
SECTION (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  FEATURED                                                    │
│ [TEXT: H2]        Guest favourites at Polo Forest          (left-aligned)     │
│                                                                               │
│ ┌─────────────────────┐  ┌──────────────────┐                                │
│ │                     │  │ ▓▓ Night Safari  │                                │
│ │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │  │ [IMG: 16:9]      │                                │
│ │   [IMG: 4:5]        │  │ From ₹2,499      │                                │
│ │   Heritage Walk     │  │ [█ Book Now]       │                                │
│ │   From ₹1,899       │  ├──────────────────┤                                │
│ │   [█ Book Now]        │  │ ▓▓ Family Camp   │                                │
│ │                     │  │ From ₹4,999      │                                │
│ │   (7 cols hero)     │  │ [█ Book Now]       │                                │
│ └─────────────────────┘  └──────────────────┘  (5 cols stacked)              │
│                                                                               │
│ [TEXT: Link]  Browse all experiences →                                        │
└──────────────────────────────────────────────────────────────────────────────┘
```

Trust stats **removed** from this section — see §7 Trust Stats Bar.

### Grid
- Header: left-aligned, cols 1–8
- Hero card: 7 cols, 4:5 portrait image
- Stacked medium cards: 5 cols, 16:9 image each
- Card gap: 24px
- **No per-card "View" button** — card image/title links to detail; Book is explicit button

### Layout Pattern
Asymmetric editorial curation (Stripe customer stories / Airbnb featured)

### Image / Text Ratio
**75%** photography · **25%** text

### Components
`WF-CARD-EXPERIENCE`, `WF-MEDIA-45`, `WF-MEDIA-169`, `WF-BADGE`, `WF-TYPE-H3`, `WF-TYPE-PRICE`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`

### Hierarchy
Section header (left-aligned) → Asymmetric card layout (hero + stacked) → View all link

### CTA Position
- Per card: **Book Now** (primary) → `/plan/book/[slug]/dates`; guest users → `/account/login?returnUrl=...`
- Card image/title area links to `/experiences/[slug]` (no separate View button)
- Section footer: **Browse all experiences →**

### Responsive Behaviour
- Desktop: 7+5 asymmetric split
- Tablet: hero card full width; medium cards horizontal scroll
- Mobile: hero card full-width stack; medium cards snap carousel

### Accessibility Notes
- Card pattern: image/title link + explicit Book button — not entire card as single button
- Price announced with experience title for screen readers
- Login requirement in caption on hover or below Book button

### Future Motion Placeholder
`[MOTION: stagger]` — hero card then stacked cards; `[MOTION: card-hover-lift]` — 2px on hover (desktop only)

---

## 7. Trust Stats Bar

### Section Name
Trust Stats Bar — Inline Metrics Ribbon

### Purpose
Immediate **Trust** signal after Featured Experiences — large numerals, minimal labels. Standalone band (no longer embedded in Featured §6).

### Wireframe Layout

```
SECTION (compact height ~64px vertical padding; full-width band)
┌──────────────────────────────────────────────────────────────────────────────┐
│  [TEXT: Stat] 12+ Years  │  50,000+ Guests  │  120+ Experiences  │  4.8★  │
│  (large numerals; subtle Polo Forest texture at 10% opacity background)       │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 12 cols; 4 equal stat cells (~3 cols each)
- Large numeral typography; single-line label beneath each

### Layout Pattern
Metrics ribbon (Stripe trust bar)

### Image / Text Ratio
10% background texture · 90% text (stats only)

### Components
`WF-TRUST-STATS-BAR`, `WF-TYPE-STAT`

### Hierarchy
Four stats in horizontal row — no section H2

### CTA Position
None — informational trust only

### Responsive Behaviour
- Desktop: 4-up horizontal
- Mobile: 2×2 grid

### Accessibility Notes
- Stats: semantic `<dl>` with labels
- Star rating: text alternative "4.8 out of 5 stars"

### Future Motion Placeholder
`[MOTION: fade-in]` — stats reveal on scroll

---

## 8. Testimonials

### Section Name
Testimonials — Guest Stories (Priority Trust)

### Purpose
**Trust** through authentic guest narratives with photography — families, corporate groups, schools. Editorial split layout, not equal text cards.

### Wireframe Layout

```
SECTION (surface-1; padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  GUEST STORIES                                               │
│ [TEXT: H2]        What travellers say about Polo Safari                         │
│                                                                               │
│ ┌─ 5 cols ──────────┐  ┌─ 7 cols ─────────────────────────────────────────┐  │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  │ "Our school's ecology trip was flawlessly        │  │
│ │ [IMG: guest photo]│  │  organised — the naturalists kept 120 students   │  │
│ │ school group      │  │  engaged for two full days."                     │  │
│ │                   │  │ ○ Meera Patel · Principal, Ahmedabad Public School│  │
│ │                   │  │ [WF-BADGE] Educational Tour                       │  │
│ └───────────────────┘  └──────────────────────────────────────────────────┘  │
│                                                                               │
│ ← [photo][quote] [photo][quote] [photo][quote] [photo][quote] → scroll      │
│   (4 compact review cards with circular guest photos)                         │
│                                                                               │
│ [TEXT: Link]  Read all guest reviews →                                        │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Editorial split: 5 cols photo | 7 cols featured quote
- Horizontal scroll row: 4 compact cards below
- Gap: 24px

### Layout Pattern
Editorial testimonial split + horizontal scroll (Airbnb guest stories)

### Image / Text Ratio
**50%** photography · **50%** text

### Photography Recommendation
Real guest/school group photos; corporate team; family at campfire; heritage traveller.

### Components
`WF-CARD-REVIEW`, `WF-AVATAR`, `WF-MEDIA-34`, `WF-BADGE`, `WF-TYPE-H2`, `WF-TYPE-LINK`

### Hierarchy
Header → Featured editorial split (photo + quote) → Horizontal supporting reviews → View all

### CTA Position
**Read all guest reviews →** → `/reviews`

### Responsive Behaviour
- Mobile: photo stacks above quote; horizontal scroll for supporting cards

### Accessibility Notes
- Quotes in `<blockquote>` with `cite` for attribution
- Carousel: pause control + manual navigation

### Future Motion Placeholder
`[MOTION: fade-in]` — featured quote; `[MOTION: stagger]` — scroll cards

---

## 9. Trust Wall (Google Reviews + Awards)

### Section Name
Trust Wall — Google Reviews, Awards & Institutional Logos

### Purpose
External validation and credibility in a single visual band — Google rating, award badges, school logos, corporate logos, and customer photo strip. Merges former §17 Google Reviews and §18 Awards.

### Wireframe Layout

```
SECTION (padding 64px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ┌─ 4 cols ─────────────┐ ┌─ 4 cols ──────────┐ ┌─ 4 cols ─────────────────┐ │
│ │ [ICON] Google        │ │ [IMG] [IMG] [IMG] │ │ School logos (3)         │ │
│ │ [TEXT: Stat] 4.8     │ │ Gujarat Tourism   │ │ Corporate logos (3)      │ │
│ │ Based on 340+ reviews│ │ TripAdvisor · Eco │ │                          │ │
│ │ [mini review carousel│ │                   │ │                          │ │
│ │ Leave a review →     │ │                   │ │                          │ │
│ └──────────────────────┘ └───────────────────┘ └──────────────────────────┘ │
│ ┌─ customer photo strip (Instagram-style faces) ────────────────────────────┐ │
│ │ ○ ○ ○ ○ ○ ○ ○ ○  (guest faces from trips)                                │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│ [TEXT: Link]  View on Google Maps →                                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 4 + 4 + 4 three-column trust wall
- Customer photo strip: 12 cols full width below
- Award badges: 3 large (not 6 tiny squares)

### Layout Pattern
Trust wall (Mindful Living partner row + Google validation)

### Image / Text Ratio
**40%** logos/photos · **60%** text

### Components
`WF-TRUST-WALL`, `WF-REVIEWS-GOOGLE`, `WF-AWARD-GRID`, `WF-CARD-REVIEW` (compact), `WF-LOGO`, `WF-TYPE-STAT`, `WF-TYPE-LINK`

### Hierarchy
Google aggregate → Award badges → School/corporate logos → Customer photo strip → External link

### CTA Position
- **Leave a Google review →** — external link
- **View on Google Maps →** — external link

### Responsive Behaviour
- Mobile: three columns stack; photo strip horizontal scroll

### Accessibility Notes
- Star rating: text alternative "4.8 out of 5 stars"
- External links: `rel="noopener"`; indicate opens external site
- School/corporate logos: meaningful `alt` text

### Future Motion Placeholder
`[MOTION: none]` — static trust block preferred

---

## 10. Educational Tours

### Section Name
Educational Tours — Schools & Ecology Pillar Block

### Purpose
Promote school and ecology programs with **separate RFP flow** — presented as a **learning journey**, not a generic split layout. Distinct from Corporate §11.

### Wireframe Layout

```
SECTION — WF-PILLAR-JOURNEY (vertical photo journey; padding 120px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  EDUCATIONAL TOURS                                           │
│ [TEXT: H2]        Ecology beyond the classroom                                │
│                                                                               │
│ ┌─ 7 cols ─────────────────────┐                                              │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  Step 1: Curriculum-aligned programs          │
│ │ [IMG: 16:9] classroom/field  │  Std 5–12 · Gujarat board compatible        │
│ └──────────────────────────────┘                                              │
│                              ┌─ 7 cols ─────────────────────┐                 │
│                              │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                 │
│  Step 2: Hands-on field      │ [IMG: 16:9] students on trail│                 │
│  studies                     └──────────────────────────────┘                 │
│  Biodiversity · Heritage · Archaeology                                        │
│ ┌─ 7 cols ─────────────────────┐                                              │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  Step 3: Expert naturalists                   │
│ │ [IMG: 16:9] teacher + guide  │  30–500 students per program                │
│ └──────────────────────────────┘                                              │
│                              ┌─ 7 cols ─────────────────────┐                 │
│                              │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                 │
│  Step 4: Outcomes that last    │ [IMG: 16:9] students journaling│               │
│  Field journals · Certificates└──────────────────────────────┘                 │
│                                                                               │
│ [█ Request School Program]  [░ View programs →]                               │
│ [TEXT: Caption] Custom proposal — not instant online booking                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full-width section; steps alternate image left / image right (7 cols each)
- 60% image / 40% copy per step — one line of copy max per step
- Section padding: 120px vertical

### Layout Pattern
Alternating editorial journey (Nat Geo Education / Patagonia Action Works)

### Image / Text Ratio
**70%** photography · **30%** text

### Photography Recommendation
Real school groups at Polo Forest; candid student moments; teachers with naturalists.

### Components
`WF-PILLAR-JOURNEY`, `WF-MEDIA-169`, `WF-TYPE-OVERLINE`, `WF-TYPE-H2`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-TYPE-CAP`

### Hierarchy
Overline → H2 → Four alternating journey steps → Primary RFP CTA → Secondary browse → Caption

### CTA Position
- Primary: **Request School Program** → `/education#rfp`
- Secondary: **View programs →** → `/experiences/category/education`
- No "Book Now" on this pillar block

### Responsive Behaviour
- Mobile: steps stack vertically; image full-width each step

### Accessibility Notes
- H2 for section title
- Steps as ordered list `<ol>` with visible step labels
- RFP caption clarifies flow differs from instant booking

### Future Motion Placeholder
`[MOTION: slide-up]` — each step on scroll

---

## 11. Corporate Retreats

### Section Name
Corporate Retreats — MICE & Team Offsites Pillar Block

### Purpose
Target HR and team leads with custom corporate programs. **Dark full-bleed cinematic** section — instantly distinct from Education §10. **Request Proposal** flow only.

### Wireframe Layout

```
SECTION — WF-PILLAR-DARK (surface-inverse; min-height 70vh; padding 120px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│  [TEXT: Overline]  CORPORATE RETREATS  (white text)                           │
│  [TEXT: H2]        Build teams where nature inspires                           │
│  [TEXT: Body]    Offsites for 20–200 guests · Ahmedabad & Gujarat             │
│                                                                               │
│  ┌─ landscape card ──┐ ┌─ landscape card ──┐ ┌─ landscape card ──┐         │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │         │
│  │ Team building     │ │ Leadership labs   │ │ MICE events       │         │
│  └───────────────────┘ └───────────────────┘ └───────────────────┘         │
│  (image-forward cards — no icons)                                            │
│                                                                               │
│  [█ Request Proposal]   Corporate FAQ →                                       │
│  [TEXT: Caption] Custom pricing · 48-hour proposal turnaround                │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full-bleed dark background with campfire/leadership photography at 70vh
- Text overlay bottom-left; white typography on dark scrim
- Three landscape proof cards: 4 cols each — image-forward, no icon mini-cards
- **Only dark section on homepage**

### Layout Pattern
Dark cinematic full-bleed (Aman Resorts corporate / Apple Pro pages)

### Image / Text Ratio
**80%** photography · **20%** text

### Photography Recommendation
Golden-hour campfire team moment; wide cinematic; shallow depth of field.

### Components
`WF-PILLAR-DARK`, `WF-MEDIA-169`, `WF-BTN-PRIMARY`, `WF-BTN-GHOST`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-CAP`

### Hierarchy
Overline → H2 → One-line body → Three landscape image cards → Primary RFP → Secondary FAQ → Caption

### CTA Position
- Primary: **Request Proposal** → `/corporate#rfp`
- Secondary: **Corporate FAQ →** → `/faq#corporate`

### Responsive Behaviour
- Mobile: landscape cards become horizontal scroll; stronger bottom scrim for text

### Accessibility Notes
- Sufficient contrast on dark background (WCAG AA minimum)
- Proposal form linked with descriptive anchor ("Request corporate retreat proposal")
- Image cards: title readable without relying on image alone

### Future Motion Placeholder
`[MOTION: fade-in]` — image and cards on scroll

---

## 12. Interactive Story Section

### Section Name
Interactive Story — Polo Forest Narrative

### Purpose
Deep **Wonder** and **Curiosity** through scroll- or click-driven storytelling about Polo Forest ecology, history, and community — editorial differentiator vs OTA listings.

### Wireframe Layout

```
SECTION (surface-1 background; padding 120px vertical; min-height panel 60vh)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  THE POLO FOREST STORY                                       │
│ [TEXT: H2]        Where the Aravalli whispers meet living ecology             │
│                                                                               │
│ ┌─ WF-STORY-INTERACTIVE (60vh min-height) ───────────────────────────────────┐│
│ │ [chapter pills overlaid on image] Ecology │ Heritage │ Community │ Seasons ││
│ │ ───────────────────────────────────────────────────────────────────────────││
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ││
│ │ [IMG: full-panel active chapter]  (optional video thumbnail w/ play icon) ││
│ │                                                                            ││
│ │ [TEXT: H3] Monsoon transforms the forest                                   ││
│ │ [TEXT: Body] After the first rains, migratory birds return... (2 lines)  ││
│ │ [TEXT: Link] Read full Polo Forest story →                                 ││
│ └────────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: left-aligned, cols 1–8
- Interactive panel: 12 cols full width; min-height **60vh**
- Chapter pills overlaid on top edge of image panel (not separate tab bar above)

### Layout Pattern
Immersive chapter viewer (National Geographic interactive features)

### Image / Text Ratio
**70%** photography · **30%** text (max 2 sentences copy)

### Components
`WF-STORY-INTERACTIVE`, `WF-MEDIA-BLOCK`, `WF-TYPE-H3`, `WF-TYPE-BODY`, `WF-TYPE-LINK`, chapter pills, optional video play icon

### Hierarchy
Overline → H2 → Chapter pills on image → Active panel copy → Deep link

### CTA Position
**Read full Polo Forest story →** → `/polo-forest` (secondary text link only)

### Responsive Behaviour
- Desktop: chapter pills on image; full-panel media
- Mobile: swipeable panels; pills become dot indicators

### Accessibility Notes
- Chapter pills: `role="tablist"`, `aria-selected`, arrow key navigation
- Reduced-motion: instant panel swap, no scroll-jacking

### Future Motion Placeholder
`[MOTION: crossfade]` — panel media swap

---

## 13. Adventure

### Section Name
Adventure — Trekking & Outdoor Pillar Block

### Purpose
Highlight achievement-oriented experiences with **full-width panorama**, horizontal activity cards, and interactive map — spatial and physical, not equal card grid.

### Wireframe Layout

```
SECTION (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│  ADVENTURE — Push your limits in Polo Forest  (large typography overlay)     │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│  [IMG: 21:9 adventure panorama]                                               │
│                                                                               │
│ ← [Night Safari ₹2499] [Monsoon Trek ₹3299] [Rappelling ₹1999] → scroll      │
│   (landscape 16:9 horizontal activity cards)                                  │
│                                                                               │
│ ┌─ 8 cols ──────────────────────────┐  ┌─ 4 cols ─────────────────────────┐  │
│ │ [MAP: Polo Forest trail map]      │  │ 1 Night Safari                   │  │
│ │ numbered stops                    │  │ 2 Monsoon Trek                   │  │
│ │                                   │  │ 3 Rappelling                     │  │
│ └───────────────────────────────────┘  └──────────────────────────────────┘  │
│ [TEXT: Link]  All adventure experiences →                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Full-width 21:9 panorama with large typography overlay
- Horizontal activity cards: landscape 16:9, scroll-snap
- Map: 8 cols + activity list 4 cols
- **No body paragraph** — one-line H2 in panorama only

### Layout Pattern
Full-width + horizontal cards + map (Cambodia tour reference)

### Image / Text Ratio
**75%** photography · **25%** text

### Components
`WF-CARD-EXPERIENCE`, `WF-MEDIA-219`, `WF-MAP-EMBED`, `WF-BTN-PRIMARY`, `WF-TYPE-H2`, `WF-TYPE-LINK`

### Hierarchy
Panorama headline → Horizontal activity cards → Map + list → View all

### CTA Position
- Per card: **Book Now** → booking flow (login gate)
- Map pins link to experience detail pages
- Section: **All adventure experiences →** → `/experiences/category/adventure`

### Responsive Behaviour
- Mobile: map stacks below card scroll

### Accessibility Notes
- Book buttons labeled with experience name
- Map: text list alternative for screen readers

### Future Motion Placeholder
`[MOTION: stagger]` — cards on scroll

---

## 14. Heritage

### Section Name
Heritage — Culture & Temple Trails Pillar Block

### Purpose
Showcase Polo Forest's ancient temples, stepwells, and tribal heritage — asymmetric gallery with enlarged panoramic photography.

### Wireframe Layout

```
SECTION (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  HERITAGE & CULTURE                                          │
│ [TEXT: H2]        1,000 years of stories in the Aravalli foothills            │
│                                                                               │
│ ┌─ 8 cols ──────────────────────────────┐ ┌─ 4 cols ──────────────────────┐  │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ┌─ image thumbnail card ──────┐ │  │
│ │ [IMG: 2:1 panoramic] Temple       │ │ │ ▓▓▓ Heritage Walk            │ │  │
│ │                                       │ │ │ (title overlay; Book on hover)│ │  │
│ │                                       │ │ └────────────────────────────────┘ │  │
│ │                                       │ │ ┌─ image thumbnail card ──────┐ │  │
│ │                                       │ │ │ ▓▓▓ Stepwell & Ruins Tour    │ │  │
│ │                                       │ │ └────────────────────────────────┘ │  │
│ └───────────────────────────────────────┘ └───────────────────────────────────┘  │
│ [TEXT: Link]  Explore heritage experiences →    [TEXT: Link] Polo Forest story → │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 8 + 4 split: hero image **2:1 panoramic** left, image-only thumbnail cards right
- Side cards: image with title overlay; Book on hover/focus only

### Layout Pattern
Asymmetric gallery (left image dominant)

### Image / Text Ratio
**80%** photography · **20%** text

### Components
`WF-PILLAR-SECTION`, `WF-MEDIA-21`, `WF-CARD-EXPERIENCE` (compact image), `WF-BTN-PRIMARY`, `WF-TYPE-LINK`

### CTA Position
- Card **Book Now** → standard booking flow
- **Explore heritage experiences →** → `/experiences/category/heritage`
- **Polo Forest story →** → `/polo-forest`

### Responsive Behaviour
- Mobile: panoramic full width; cards stack below

### Future Motion Placeholder
`[MOTION: fade-in]` — side cards stagger

---

## 15. Family

### Section Name
Family — Memory-Making Getaways Pillar Block

### Purpose
Promote family-friendly weekends — **portrait editorial** right-image layout selling memory, not package specs.

### Wireframe Layout

```
SECTION — WF-PILLAR-SECTION (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  FAMILY GETAWAYS                                             │
│ ┌─ 6 cols ───────────────────────────┐ ┌─ 6 cols ─────────────────────────┐  │
│ │ [TEXT: H2] Weekends your children   │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  │
│ │ will remember                         │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  │
│ │ [TEXT: Body] Safe, guided camping     │ │ [IMG: 4:5 portrait]              │  │
│ │ for ages 4+.                        │ │ Family around campfire           │  │
│ │ [TEXT: Caption] From ₹4,999 · 2D/1N  │ │                                  │  │
│ │ [█ Book Family Weekend]               │ │                                  │  │
│ │ View packages →                       │ │                                  │  │
│ └─────────────────────────────────────┘ └──────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- 6 + 6 split: content left, **4:5 portrait** image right (full section height)
- Badges moved to caption line — not prominent
- Single primary CTA; secondary as text link

### Layout Pattern
Portrait editorial right-image (Airbnb family stories)

### Image / Text Ratio
**65%** photography · **35%** text

### Components
`WF-PILLAR-SECTION`, `WF-MEDIA-45`, `WF-TYPE-PRICE`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`

### CTA Position
- **Book Family Weekend** → `/plan/book/family-camping-weekend/dates`
- **View packages →** → `/family` or `/experiences/category/family`

### Responsive Behaviour
- Mobile: image full-width top; content below

### Future Motion Placeholder
`[MOTION: slide-up]` — content block

---

## 16. Popular Destinations

### Section Name
Popular Destinations — Geographic Grouping

### Purpose
Group experiences by geography; **Polo Forest** as dominant hero destination with portrait secondary cards.

### Wireframe Layout

```
SECTION  id="popular-destinations" (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  POPULAR DESTINATIONS                                        │
│ [TEXT: H2]        Start with Polo Forest — explore wider Gujarat               │
│                                                                               │
│ ┌─ WF-DESTINATION-CARD (featured, 12 cols, 21:9 panorama) ────────────────────┐│
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ││
│ │ [IMG: 21:9] Polo Forest — Idar, Gujarat (title overlay)                      ││
│ │ [TEXT: Caption] 12 experiences · 2 hr from Ahmedabad                        ││
│ │ [█ Explore Polo Forest]                                                     ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ ┌─ 4 cols ────────┐ ┌─ 4 cols ────────┐ ┌─ 4 cols ────────┐                  │
│ │ ▓▓▓ [IMG: 3:4]  │ │ ▓▓▓ [IMG: 3:4]  │ │ ▓▓▓ [IMG: 3:4]  │                  │
│ │ Saputara          │ │ Gir               │ │ Rann of Kutch     │                  │
│ │ [TEXT: Link] →  │ │ [TEXT: Link] →  │ │ [TEXT: Link] →  │                  │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Featured destination: **12 cols full-width 21:9 panorama**
- Secondary destinations: 3 × 4 cols **portrait 3:4** (different ratio from featured)

### Layout Pattern
Panorama + portrait grid (Apple destination pages)

### Image / Text Ratio
**85%** photography · **15%** text

### Components
`WF-DESTINATION-CARD`, `WF-MEDIA-219`, `WF-MEDIA-34`, `WF-TYPE-H3`, `WF-TYPE-CAP`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`

### CTA Position
- Featured: **Explore Polo Forest** → `/polo-forest`
- Secondary cards: `/destinations/[slug]` or placeholder `#`

### Responsive Behaviour
- Mobile: featured full width; secondary cards horizontal scroll

### Future Motion Placeholder
`[MOTION: slide-up]` — featured card entrance

---

## 17. Packages

### Section Name
Packages — Bundled Offers & Multi-Day Deals

### Purpose
Present bundled value with **asymmetric landscape comparison strip** — not equal 3-up pricing grid.

### Wireframe Layout

```
SECTION (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  PACKAGES                                                    │
│ [TEXT: H2]        Curated Polo Forest getaways                                │
│ [TEXT: Body]      Multi-day bundles with stays, meals, and guided activities. │
│                                                                               │
│ ┌─ WF-PACKAGE-CARD (5 cols, Best value) ─┐ ┌─ 3.5 cols ─┐ ┌─ 3.5 cols ─┐    │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓▓▓ │    │
│ │ [IMG: 16:9 landscape]                  │ │ Ecology   │ │ Family    │    │
│ │ [WF-BADGE] Best value                  │ │ Package   │ │ Adventure │    │
│ │ Weekend Escape 2D/1N                   │ │ 3D/2N     │ │ 3D/2N     │    │
│ │ From ₹7,999/person                     │ │ ₹9,499    │ │ ₹12,999   │    │
│ │ [█ Book Package]  Details →            │ │ [Book]    │ │ [Book]    │    │
│ └────────────────────────────────────────┘ └───────────┘ └───────────┘    │
└──────────────────────────────────────────────────────────────────────────────┘
```

**No inclusion bullet lists on homepage** — Details → link only.

### Grid
- Asymmetric: 5 cols featured + 3.5 + 3.5 cols
- Landscape 16:9 image top per card

### Layout Pattern
Landscape comparison strip (image-forward pricing)

### Image / Text Ratio
**60%** photography · **40%** text

### Components
`WF-PACKAGE-CARD`, `WF-BADGE`, `WF-MEDIA-169`, `WF-TYPE-H3`, `WF-TYPE-PRICE`, `WF-BTN-PRIMARY`, `WF-TYPE-LINK`

### CTA Position
- **Book Package** → `/plan/book/[package-slug]/dates` (login required)
- **Details →** → package detail page

### Responsive Behaviour
- Mobile: horizontal scroll all three cards at equal width

### Future Motion Placeholder
`[MOTION: stagger]` — package cards

---

## 18. Gallery Preview

### Section Name
Gallery Preview — Visual Proof

### Purpose
Full-bleed masonry photography pause — pure visual emotion before editorial content continues.

### Wireframe Layout

```
SECTION (full-bleed edge-to-edge; breaks 1280px container)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  GALLERY          [TEXT: H2] Moments from Polo Forest       │
│ (header left-aligned within container)                                        │
│                                                                               │
│ ┌─ WF-GALLERY-MASONRY (8–10 images; 4px gap) ───────────────────────────────┐│
│ │ ┌────┐┌────┐┌──────────┐                                                   ││
│ │ │3:4 ││3:4 ││          │                                                   ││
│ │ │    ││vid ││  16:9    │                                                   ││
│ │ ├────┤│play││  drone   │                                                   ││
│ │ │1:1 │└────┘│          │                                                   ││
│ │ ├──────────┤└──────────┘                                                   ││
│ │ │  wide    │┌────┐                                                         ││
│ │ └──────────┘│3:4 │                                                         ││
│ │              └────┘                                                         ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│                                        [TEXT: Link] View full gallery →       │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- **Break container** — masonry edge-to-edge to 1440px cap
- 8–10 images: mix portrait, landscape, square, one **video thumbnail** (play), one **drone aerial**
- Largest cell: 6 cols × 2 rows
- Gap: **4px** (tight Pinterest/Instagram feel)
- CTA floats bottom-right over grid or below grid right-aligned

### Layout Pattern
Full-bleed masonry (Pinterest / Instagram explore)

### Image / Text Ratio
**95%** photography · **5%** text

### Components
`WF-GALLERY-MASONRY`, `WF-MEDIA-BLOCK`, `WF-TYPE-H2`, `WF-TYPE-LINK`

### CTA Position
**View full gallery →** → `/gallery`

### Responsive Behaviour
- Tablet: 2-col masonry
- Mobile: 2-col tight grid

### Future Motion Placeholder
`[MOTION: stagger]` — grid cells on scroll

---

## 19. Blogs Preview

### Section Name
Stories & Insights — Blog Preview

### Purpose
SEO and editorial **Curiosity** — magazine layout, not equal card grid.

### Wireframe Layout

```
SECTION (padding 96px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  STORIES & INSIGHTS                                          │
│ [TEXT: H2]        From the Polo Forest journal                                │
│                                                                               │
│ ┌─ featured 7 cols ─────────────────────┐ ┌─ supporting 5 cols ────────────┐ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ ┌─ thumb ─ Monsoon ecology     │ │
│ │ [IMG: 3:2 featured story]             │ │ │ 12 Jun                       │ │
│ │ [TEXT: Caption] 12 Jun                │ │ ├─ thumb ─ School trip checklist│ │
│ │ [TEXT: H3] Monsoon ecology at Polo    │ │ │ 3 Jun                        │ │
│ │ Forest (no excerpt)                   │ │ ├─ thumb ─ Temple architecture │ │
│ │                                       │ │ │ 28 May                       │ │
│ └───────────────────────────────────────┘ │ └──────────────────────────────┘ │
│                                                                               │
│ [TEXT: Link]  All stories →                                                   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Featured story: 7 cols, 3:2 image + date + H3 only (**no excerpt**)
- Supporting stories: 5 cols stacked — thumbnail + title + date only
- Entire row clickable per story

### Layout Pattern
Editorial magazine feature (NYT Travel / Monocle)

### Image / Text Ratio
**70%** photography · **30%** text

### Components
`WF-BLOG-MAGAZINE`, `WF-MEDIA-32`, `WF-TYPE-H3`, `WF-TYPE-CAP`, `WF-TYPE-LINK`

### CTA Position
- Each story row links to `/blog/[slug]`
- Section: **All stories →** → `/blog`

### Responsive Behaviour
- Mobile: featured full width; supporting stack below

### Future Motion Placeholder
`[MOTION: stagger]` — story rows

---

## 20. Journey Timeline

### Section Name
Journey Timeline — From Browse to Polo Forest

### Purpose
Demystify the **full online booking flow** with illustrated steps — placed after Blog, before FAQ.

### Wireframe Layout

```
SECTION (padding 64px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  YOUR JOURNEY                                                │
│ [TEXT: H2]        From browsing to arriving at Polo Forest                     │
│                                                                               │
│ ┌─ WF-JOURNEY-TIMELINE (horizontal stepper with photo per step) ─────────────┐│
│ │  (1)          (2)           (3)           (4)           (5)                ││
│ │  [img]        [img]         [img]         [img]         [img]              ││
│ │  ○────────────○────────────○────────────○────────────○                     ││
│ │  Browse       Login &       Pick dates    Pay UPI/      Confirmation       ││
│ │  experiences  create        & guests      card online   & e-ticket         ││
│ │               account                                                      ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Body]  Corporate and school groups: use Request Proposal — custom     │
│               quotes within 48 hours.                                         │
│ [TEXT: Link]  View cancellation policy →                                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Header: 8 cols centred
- Timeline: 12 cols; 5 steps with small photo/illustration above each (icon-free)
- Widen step cells for readability

### Layout Pattern
Illustrated horizontal stepper (Stripe onboarding steps)

### Image / Text Ratio
**30%** photography/illustration · **70%** text

### Components
`WF-JOURNEY-TIMELINE`, `WF-STEPPER`, `WF-MEDIA-BLOCK`, `WF-TYPE-H2`, `WF-TYPE-BODY`, `WF-TYPE-LINK`

### CTA Position
No primary button — informational. Policy link → `/legal/cancellation`

### Responsive Behaviour
- Mobile: vertical stepper with photos left of each step

### Future Motion Placeholder
`[MOTION: stagger]` — steps reveal left-to-right

---

## 21. Partners

### Section Name
Partners — Collaborators & Affiliates

### Purpose
Slow auto-scroll marquee of resort/transport partners — supplementary trust after visual gallery immersion.

### Wireframe Layout

```
SECTION (padding 64px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  IN PARTNERSHIP WITH                                         │
│ ┌─ WF-PARTNER-MARQUEE (slow auto-scroll) ────────────────────────────────────┐│
│ │  [LOGO] [LOGO] [LOGO] [LOGO] [LOGO] [LOGO] [LOGO]  →  →  →              ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  Become a partner →                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**No H2** — overline only. Marquee replaces static logo row.

### Layout Pattern
Logo marquee carousel

### Image / Text Ratio
**80%** logos · **20%** text

### Components
`WF-PARTNER-MARQUEE`, `WF-LOGO`, `WF-TYPE-LINK`

### CTA Position
**Become a partner →** → `/contact?subject=partnership`

### Responsive Behaviour
- Mobile: continuous slow scroll; pause on hover/focus

### Future Motion Placeholder
`[MOTION: marquee-scroll]` — slow continuous loop; respect reduced-motion (static row)

---

## 22. FAQ

### Section Name
FAQ — Homepage Accordion Preview

### Purpose
Resolve objections before conversion — compact functional pause before emotional CTA band.

### Wireframe Layout

```
SECTION (padding 64px vertical)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Overline]  FAQ                                                         │
│ [TEXT: H2]        Common questions                                            │
│                                                                               │
│ ┌─ 6 cols centred (cols 4–9) ──────────────────────────────────────────────┐│
│ │ ┌─ WF-FAQ-ACCORDION (4 items) ──────────────────────────────────────────┐ ││
│ │ │ ▼ Do I need an account to book?                                        │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ What payment methods do you accept?                                  │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ How is a corporate retreat different from online booking?            │ ││
│ │ ├────────────────────────────────────────────────────────────────────────┤ ││
│ │ │ ▶ What is your cancellation policy?                                    │ ││
│ │ └────────────────────────────────────────────────────────────────────────┘ ││
│ └────────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Link]  View all FAQs →                                                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Accordion: **6 cols** centred (tighter than before)
- **4 items** on homepage (travel/directions question on full FAQ page only)

### Layout Pattern
Centred accordion (Apple support preview)

### Image / Text Ratio
0% image · 100% text

### Components
`WF-FAQ-ACCORDION`, `WF-TYPE-H2`, `WF-TYPE-LINK`

### CTA Position
**View all FAQs →** → `/faq`

### Responsive Behaviour
- Full width accordion on mobile with 16px side padding

### Future Motion Placeholder
`[MOTION: none]` — expand/collapse 150ms (respect reduced-motion)

---

## 23. Emotional CTA Band (Newsletter + Contact)

### Section Name
Emotional CTA Band — Merged Newsletter & Contact Conversion

### Purpose
Final **Action** capture with emotional invitation — merges former §23 Newsletter and §24 Contact CTA. Ends scroll with invitation, not form-first layout.

### Wireframe Layout

```
SECTION — WF-EMOTIONAL-CTA-BAND (full width; misty trail bg at 20% opacity)
┌──────────────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│        [TEXT: H2]  Ready for your next journey?                              │
│        [TEXT: Body] Explore Gujarat's hidden forest with people who know       │
│                     every trail.                                               │
│                                                                               │
│  [█ Explore Polo Forest]  [Talk to our expert]  [WhatsApp]  [Call]           │
│                                                                               │
│        ┌ Email address ─────────────────────┐ [Subscribe]                    │
│        [TEXT: Caption] Seasonal stories, no spam · Privacy policy            │
│        Ahmedabad office · Mon–Sat 9am–7pm · GST invoice available            │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
- Content: 8 cols centred
- Actions row: primary + secondary + WhatsApp + Call with **visible text labels** (not icon-only)
- Newsletter: **single email field** inline — no first-name field on homepage (full form in footer per Step 1 if needed)

### Layout Pattern
Emotional conversion band (Patagonia / Aman enquiry)

### Image / Text Ratio
**40%** background photography · **60%** text/CTAs

### Components
`WF-EMOTIONAL-CTA-BAND`, `WF-FORM-NEWSLETTER` (email only), `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`, `WF-BTN-GHOST`, `WF-TYPE-H2`, `WF-TYPE-CAP`

### Hierarchy
H2 → Body → Action buttons → Email subscribe row → Office hours caption

### CTA Position
- Primary: **Explore Polo Forest** → `/polo-forest`
- Secondary: **Talk to our expert** → `/plan/enquire`
- Tertiary: **WhatsApp** + **Call** → WhatsApp deep link / `tel:`
- **Subscribe** — email capture inline below actions

### Responsive Behaviour
- Mobile: stacked full-width buttons; WhatsApp prominent for Gujarat market
- Email field full-width on mobile

### Accessibility Notes
- Phone/WhatsApp: visible text labels
- Consent: privacy policy link adjacent to subscribe
- H2 not duplicated elsewhere near footer

### Future Motion Placeholder
`[MOTION: slide-up]` — band entrance on scroll

---

## 24. Footer

### Section Name
Global Footer — Homepage Instance

### Purpose
Multi-zone hierarchy: destinations first, map, awards, social — reinforces geography, trust, and contact.

### Wireframe Layout

```
(See Step 1 § D10 — extended zones below)

┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Polo Safari — Gujarat's experiential travel brand                     │
├─────────────┬─────────────┬─────────────┬───────────────────────────────────┤
│ Destinations│ Experiences │ Plan        │ Contact                           │
│ Polo Forest │ 5 pillars   │ Book online │ Phone · WhatsApp                  │
│ Saputara    │ View all    │ Enquire     │ Ahmedabad office                  │
│ Gir · Rann  │             │ Cancellation│                                   │
├─────────────┴─────────────┴─────────────┴───────────────────────────────────┤
│ [Mini map placeholder — Polo Forest location → /polo-forest]                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ Awards: [badge][badge][badge]     Social: [Instagram][Facebook][YouTube][WA]  │
├─────────────────────────────────────────────────────────────────────────────┤
│ © 2026 Polo Safari · Privacy · Terms · Sitemap              [EN] [Theme]      │
└─────────────────────────────────────────────────────────────────────────────┘

HOMEPAGE-SPECIFIC NOTES:
- **Destinations column first** (geographic IA priority)
- Experiences column lists five pillar links + View all
- Plan column: Plan your visit, Book online (login note), Cancellation policy
- **Mini map** static image placeholder linking to `/polo-forest`
- **Awards row** above legal bar
- **Newsletter omitted** in footer — merged in §23 Emotional CTA band (DEFAULT)
- Legal bar: © 2026 Polo Safari · Privacy · Terms · Sitemap
- Language: EN only (active); Theme toggle present
```

### Grid
See Step 1 § D10 — 4 link columns (3 cols each) + map row + awards/social row + legal bar

### Layout Pattern
Zoned footer (Airbnb footer with map + destinations)

### Components
`WF-SHELL-FOOTER`, `WF-LOGO`, `WF-MAP-EMBED` (static mini map), `WF-AWARD-GRID`, `WF-NAV-LANG`, `WF-THEME-TOGGLE`, `WF-TYPE-H4`, `WF-TYPE-LINK`

### Hierarchy
Brand → Link columns → Mini map → Awards + Social → Legal/utilities

### CTA Position
No competing primary (header CTA remains sitewide primary). Map and destination links are secondary navigation.

### Responsive Behaviour
See Step 1 § D10 — 4→2→1 column collapse; map full width on mobile

### Accessibility Notes
See Step 1 § D10 — footer landmark, social `aria-label`s, map alt text

### Future Motion Placeholder
`[MOTION: none]`

---

# Appendix

## A. Booking & auth flow summary (homepage touchpoints)

| User state | CTA behaviour |
|------------|---------------|
| Guest clicks **Book Now** | Redirect to `/account/login?returnUrl=/plan/book/[slug]/dates` |
| Authenticated | Proceed to booking step 1 (dates & guests) |
| Checkout | Payment step shows **UPI** and **Card** options |
| Corporate/Education CTAs | Route to RFP forms — no login required to submit proposal |

## B. Section → component quick reference

| Section | Primary WF-* components |
|---------|-------------------------|
| Navigation | `WF-SHELL-HEADER`, `WF-NAV-*`, `WF-NAV-PROFILE` |
| Announcement Bar | `WF-ANNOUNCEMENT-BAR` |
| Hero | `WF-HERO-CAROUSEL`, `WF-PAGE-HERO`, `WF-MEDIA-219` |
| Quick Search | `WF-QUICK-SEARCH` (glass pill) |
| Experience Categories | `WF-CATEGORY-SCROLL`, `WF-MEDIA-34` |
| Featured Experiences | `WF-CARD-EXPERIENCE`, `WF-MEDIA-45` |
| Trust Stats Bar | `WF-TRUST-STATS-BAR` |
| Testimonials | `WF-CARD-REVIEW`, `WF-MEDIA-34` |
| Trust Wall | `WF-TRUST-WALL`, `WF-REVIEWS-GOOGLE`, `WF-AWARD-GRID` |
| Educational Tours | `WF-PILLAR-JOURNEY` |
| Corporate Retreats | `WF-PILLAR-DARK` |
| Interactive Story | `WF-STORY-INTERACTIVE` |
| Adventure | `WF-CARD-EXPERIENCE`, `WF-MAP-EMBED`, `WF-MEDIA-219` |
| Heritage / Family | `WF-PILLAR-SECTION`, `WF-MEDIA-21`, `WF-MEDIA-45` |
| Popular Destinations | `WF-DESTINATION-CARD`, `WF-MEDIA-219`, `WF-MEDIA-34` |
| Packages | `WF-PACKAGE-CARD` |
| Gallery | `WF-GALLERY-MASONRY` |
| Blogs | `WF-BLOG-MAGAZINE` |
| Journey Timeline | `WF-JOURNEY-TIMELINE` |
| Partners | `WF-PARTNER-MARQUEE` |
| FAQ | `WF-FAQ-ACCORDION` |
| Emotional CTA Band | `WF-EMOTIONAL-CTA-BAND`, `WF-FORM-NEWSLETTER` |
| Footer | `WF-SHELL-FOOTER`, `WF-MAP-EMBED` |

## C. Step 3 handoff

| Item | Status |
|------|--------|
| All 24 homepage sections specified (Newsletter + Contact merged) | Complete |
| Premium editorial UX revision (v0.2.0) | Complete |
| Layout pattern ledger — no adjacent duplicates | Complete |
| Decisions log | Complete |
| Login-required booking reflected | Complete |
| UPI/card payment referenced | Complete |
| Corporate/education RFP vs standard booking | Complete |
| Confirmed taxonomy locked | Complete |
| Rotating seasonal hero (85vh cinematic) | Complete |
| Trust cluster elevated after Featured | Complete |
| Content ratio target 65/20/15 documented | Complete |

---

**Document path:** `docs/ux-wireframes/02-homepage.md`  
**Prepared for:** Polo Safari experiential travel platform  
**Informed by:** Step 1 global foundation, project brief, vision bible, confirmed user decisions
