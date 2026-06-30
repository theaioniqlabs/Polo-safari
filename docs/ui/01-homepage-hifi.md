# Polo Safari — Homepage High-Fidelity UI Spec

**Version:** 1.1.0  
**Status:** High-fidelity design specification — premium editorial UX revision (wireframe v0.2.0)  
**Route:** `/`  
**Breakpoints:** Desktop 1440px · Mobile 375px  
**Design system:** [00-ui-design-system.md](./00-ui-design-system.md)  
**Wireframe source:** [02-homepage.md](../ux-wireframes/02-homepage.md)  
**Reference direction:** Cambodia editorial (structure) + Mindful Living (typography/trust) + Smirnovs (Quick Search overlap)

---

## Page Overview

| Property | Value |
|----------|-------|
| Template | Global shell + 24 content sections (Newsletter + Contact merged) |
| Emotion arc | Wonder → Trust → Curiosity → Action |
| Page background default | Warm Ivory `#F9F7F2` |
| H1 | Hero campaign headline (one per active slide) |
| Content ratio target | 65% photography · 20% layout · 15% text |
| Scroll order | See wireframe [02-homepage.md](../ux-wireframes/02-homepage.md) §Section order |

### Canonical scroll sequence

```
Nav → Announcement → Hero → Quick Search → Categories → Featured →
  Trust Stats → Testimonials → Trust Wall →
  Education → Corporate → Story → Adventure → Heritage → Family →
  Destinations → Packages → Gallery → Blog → Journey → Partners →
  FAQ → Emotional CTA Band → Footer
```

---

## Global Layout — Desktop 1440px

| Property | Value |
|----------|-------|
| Viewport max | 1440px centered |
| Content container | 1280px |
| Side margin | 80px |
| Grid | 12 columns × 24px gutter |
| Section padding (desktop) | Alternate **120px** editorial / **96px** cards / **64px** compact |
| Section padding (mobile) | 48px vertical (`--space-6`) |
| Hero min-height | **85vh** desktop · **75vh** mobile |
| Photography | May break 1280px container for full-bleed sections |

---

## Section 1 — Navigation

**Wireframe:** §1 · **Components:** `UI-NAV-HEADER`, `UI-NAV-MEGA`, `UI-NAV-DROPDOWN`, `UI-NAV-PROFILE`, `UI-BTN-PRIMARY`

### Visual treatment

| Property | At top (transparent) | Scrolled (>80px) |
|----------|---------------------|------------------|
| Height | 72px | 64px |
| Background | Glass: `rgba(255,255,255,0.12)` + blur 12px | `#FFFFFF` |
| Nav link color | `#FFFFFF` + text-shadow | `#2C3E50` |
| Border | none | 1px `#D4D8DC` |
| Logo | Full-color SVG, 40px height | Same |
| CTA "Plan Your Visit" | Polo Blue pill, always | Same |

**Nav items:** Experiences ▾ · Discover ▾ · Polo Forest · Plan · About  
**Utilities:** Search icon · Profile · EN ▾ · Theme toggle

### Copy (exact)

- CTA: **Plan Your Visit**
- Profile guest dropdown caption: *Login required to book*
- Profile guest items: Login · Create account

### Desktop 1440

| Zone | Grid span |
|------|-----------|
| Logo | cols 1–2 |
| Primary nav | cols 3–8, gap 24px |
| Utilities + CTA | cols 9–12, right-aligned |

### Mobile 375

- Header 64px; hamburger replaces nav
- Logo left; Search + Profile + Menu right
- Drawer: see [02-key-pages-hifi.md § Mobile Drawer](./02-key-pages-hifi.md)

### Accessibility

- Skip link → `#main-content`; first focusable
- `<nav aria-label="Primary">`
- Profile trigger: `aria-label="Account menu"`
- `scroll-padding-top: 80px`

---

## Section 2 — Announcement Bar

**Components:** `UI-ANNOUNCEMENT-BAR`

### Visual treatment

| Property | Value |
|----------|-------|
| Background | `#E6F0F8` (primary subtle) |
| Height | 32px min |
| Text | Inter 14px `#2C3E50` |
| Icon | None — editorial tone only |
| Link | `#005CA9` weight 600 "View the season →" |
| Dismiss | 44×44 ghost icon |

### Copy

> Monsoon ecology tours now open — [View the season →]

### Responsive

- Desktop: single centered line
- Mobile 375: truncate message with ellipsis; link + dismiss remain tappable

---

## Section 3 — Hero Carousel

**Components:** `UI-HERO-CAROUSEL`, `UI-BTN-PRIMARY`, `UI-BTN-SECONDARY`

### Visual treatment (Cambodia + Mindful Living)

| Property | Value |
|----------|-------|
| Min-height | **85vh** desktop · **75vh** mobile |
| Width | Full bleed to 1440px cap |
| Photography | Real Polo Forest imagery; cover; 21:9 preferred |
| Overlay | Linear gradient rising from **bottom**: `rgba(30,42,36,0.85)` bottom → transparent top |
| Image radius | none (edge-to-edge) |
| Content alignment | **Bottom-left**, lower third — cols 1–7 within 1280px container |
| Padding bottom | 64px above progress bar / search pill overlap |

**Typography on overlay:**

| Element | Style | Color |
|---------|-------|-------|
| Overline | 12px uppercase tracking 0.12em weight 600 | `#8FD0E1` or white 90% |
| Display H1 | Playfair 60px/36px mobile; line 2 italic | `#FFFFFF` |
| Body lead | Inter 18px | `rgba(255,255,255,0.9)` |
| Caption | 12px | `rgba(255,255,255,0.75)` |

**Controls:** Thin **progress bar** at bottom edge (not dot indicators); swipe on mobile; no visible prev/next arrows (keyboard nav retained).

### Desktop 1440 vs Mobile 375

| Property | Desktop | Mobile |
|----------|---------|--------|
| Text block | Bottom-left, 7 cols | Centred-bottom, full width |
| Display size | 60px | 36px |
| CTAs | Primary button + text link inline | Stacked full-width primary |
| Carousel | Progress bar | Swipe + progress bar |
| Auto-advance | 8s; pause hover/focus | Same; disabled reduced-motion |

### Slide 1 — Monsoon Ecology (default)

| Element | Copy |
|---------|------|
| Overline | MONSOON 2026 |
| H1 line 1 | Discover Polo Forest |
| H1 line 2 (italic) | After the Rains |
| Body | Guided ecology walks in Gujarat's hidden forest. |
| Primary CTA | Book Monsoon Safari |
| Secondary CTA | Explore experiences → (text link, not button) |
| Caption | From ₹2,499 · 1 day |

**Photography direction:** Misty Aravalli trail after monsoon; green canopy; soft diffused light.

### Slide 2 — Corporate Retreats

| Element | Copy |
|---------|------|
| Overline | CORPORATE RETREATS |
| H1 | Build Teams Where Nature Inspires |
| Body | Custom offsite programs at Polo Forest for 20–200 guests from Ahmedabad and across Gujarat. |
| Primary CTA | Request Proposal |
| Secondary CTA | View Corporate Programs |
| Caption | Custom pricing · 48-hour proposal turnaround |

**Photography:** Corporate team activity at Polo Forest campsite; warm golden hour.

### Slide 3 — Educational Tours

| Element | Copy |
|---------|------|
| Overline | EDUCATIONAL TOURS |
| H1 | Ecology Lessons That Leave the Classroom |
| Body | Curriculum-aligned field studies for Std 5–12 at Polo Forest — biodiversity, heritage, and hands-on science. |
| Primary CTA | Request School Program |
| Secondary CTA | Learn More |
| Caption | Custom proposal — not instant online booking |

**Photography:** School group with naturalist on forest trail; engaged students.

### Slide 4 — Winter Heritage (optional 4th)

| Element | Copy |
|---------|------|
| Overline | WINTER 2026 |
| H1 line 1 | Walk Through |
| H1 line 2 (italic) | A Thousand Years of History |
| Body | Jain temples, ancient stepwells, and Bhil heritage stories in the Aravalli foothills near Idar. |
| Primary CTA | Book Heritage Walk |
| Secondary CTA | Explore Heritage |
| Caption | From ₹1,899 · Half day · Login to complete booking |

### Desktop 1440 vs Mobile 375

| Property | Desktop | Mobile |
|----------|---------|--------|
| Text block width | 7 cols (~640px) | 12 cols full width |
| Display size | 60px | 36px |
| CTAs | Inline row, gap 16px | Stacked full-width |
| Carousel | Dots + arrows | Swipe + centered dots |
| Auto-advance | 8s; pause hover/focus | Same; disabled reduced-motion |

### Accessibility

- One `<h1>` on active slide only; inactive slides `aria-hidden="true"`
- Region `aria-label="Seasonal campaigns"`; `aria-live="polite"`
- Auto-advance off when `prefers-reduced-motion`

---

## Section 4 — Quick Search

**Components:** `UI-QUICK-SEARCH`, `UI-INPUT-SELECT`, `UI-INPUT-DATE`, `UI-BTN-PRIMARY`

### Visual treatment (glass pill — Airbnb pattern)

| Property | Value |
|----------|-------|
| Position | Centred; overlap hero bottom by **−24px** |
| Background | Glass: `rgba(255,255,255,0.85)` + blur 16px |
| Border | 1px `rgba(255,255,255,0.6)` |
| Border radius | **pill** (`--radius-full` or 999px) |
| Shadow | `0 8px 32px rgba(0,0,0,0.08)` |
| Padding | 12px 24px desktop |
| Max-width | ~960px centred |
| Z-index | 10 |

**No section H3 title.**

**Field row (desktop, single pill):**

| Field | Placeholder |
|-------|-------------|
| Experience type | All experiences |
| Date | Add dates |
| Guests | 2 guests |
| Search button | Primary inline right |

**Popular chips below pill:**  
Night Safari · School Trip · Corporate Day (small pill links, 8px gap)

### Mobile 375

- Full-width pill; fields stack 2 rows if needed
- Chips horizontal scroll with snap
- Overlap flush below hero if cramped

### Accessibility

- Visible labels (visually hidden or inline)
- Form `role="search"`
- Submit → `/experiences?date=&guests=&category=`

---

## Section 5 — Experience Categories

**Components:** `UI-CARD-CATEGORY-SCROLL` × 6, `UI-TYPE-H2`

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory `#F9F7F2` |
| Header | **Left-aligned** cols 1–8 |
| Layout | **Horizontal scroll** portrait cards (3:4); no icons |
| Card width | ~200px; gradient overlay + pillar label at bottom |
| Gap | 16px; peek next card 16px |

### Copy

| Element | Text |
|---------|------|
| H2 | How do you want to experience Polo Forest? |
| Link | View all experiences → |

**Tiles (photography per pillar):** Heritage · Educational Tours · Corporate Retreats · Family Getaways · Adventure · Popular Destinations

### Mobile 375

- Snap scroll one card at a time

---

## Section 6 — Featured Experiences

**Components:** `UI-CARD-EXPERIENCE`, asymmetric layout

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory |
| Layout | **7-col hero card (4:5 portrait)** + **5-col stacked medium cards (16:9)** |
| Header | Left-aligned |
| Cards | White; shadow medium; **Book Now only** (image/title links to detail) |

### Copy & card data

| Card | Badge | Title | Price | Image direction |
|------|-------|-------|-------|-----------------|
| Hero | Heritage | Polo Forest Heritage Walk | From ₹1,899 | Temple courtyard 4:5 |
| Medium 1 | Adventure | Night Safari | From ₹2,499 | Spotlight in forest |
| Medium 2 | Family | Family Camping Weekend | From ₹4,999 | Campfire family |

**Footer link:** Browse all experiences →

**Trust stats moved to §7** — not embedded here.

### Mobile 375

- Hero full width; medium cards horizontal scroll

---

## Section 7 — Trust Stats Bar

**Components:** `UI-TRUST-STATS-BAR`

| Property | Value |
|----------|-------|
| Section bg | Subtle Polo Forest texture 10% opacity on Warm Ivory |
| Layout | 4-up horizontal large numerals |
| Padding | 64px vertical |

| Stat | Value |
|------|-------|
| Years | 12+ Years |
| Guests | 50,000+ Guests |
| Experiences | 120+ Experiences |
| Rating | 4.8★ |

---

## Section 8 — Testimonials (Trust Cluster)

**Components:** `UI-CARD-TESTIMONIAL`, guest photography

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory |
| Layout | **5-col guest photo** + **7-col featured quote**; horizontal scroll row below |
| Featured quote | Playfair 24px italic; left border 4px `#005CA9` |

**Featured:** School principal quote with school group photo.  
**Scroll row:** 4 compact cards with circular guest photos.  
**Link:** Read all guest reviews →

---

## Section 9 — Trust Wall (Google + Awards + Logos)

**Components:** `UI-TRUST-WALL`, `UI-REVIEWS-GOOGLE`, `UI-AWARD-GRID`

| Property | Value |
|----------|-------|
| Layout | 4+4+4: Google rating · 3 large award badges · school + corporate logos |
| Customer strip | Instagram-style guest faces along bottom |
| Padding | 64px vertical |

**CTAs:** Leave a Google review → · View on Google Maps →

---

## Section 10 — Educational Tours (Pillar)

**Components:** `UI-PILLAR-JOURNEY`

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Nature `#EEF4ED` |
| Layout | **Vertical alternating photo journey** — 4 steps, image left/right |
| Image | 16:9 per step; 60% image / 40% one-line copy |
| Padding | 120px vertical |
| Overline color | `#00963F` |

### Copy

| Element | Text |
|---------|------|
| Overline | EDUCATIONAL TOURS |
| H2 | Ecology beyond the classroom |
| Steps | Curriculum · Field studies · Naturalists · Outcomes |
| Primary CTA | Request School Program |
| Secondary | View programs → |
| Caption | Custom proposal — not instant online booking |

---

## Section 11 — Corporate Retreats (Pillar)

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | **Dark `#1A1F2E`** — only dark section on homepage |
| Layout | Full-bleed 70vh campfire photography + 3 landscape image cards |
| Typography | White on dark scrim |
| Padding | 120px vertical |

### Copy

| Element | Text |
|---------|------|
| Overline | CORPORATE RETREATS |
| H2 | Build teams where nature inspires |
| Body | Offsites for 20–200 guests · Ahmedabad & Gujarat |
| Cards | Team building · Leadership labs · MICE events (image-forward, no icons) |
| Primary CTA | Request Proposal |
| Secondary | Corporate FAQ → |

---

## Section 12 — Interactive Story

**Components:** `UI-STORY-INTERACTIVE`

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | White `#FFFFFF` |
| Panel min-height | **60vh** |
| Chapter pills | Overlaid on image (Ecology · Heritage · Community · Seasons) |
| Copy max | 2 sentences per panel |

---

## Section 13 — Adventure (Pillar)

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Water `#E6F7FB` |
| Layout | **21:9 panorama** + horizontal scroll activity cards + **8-col map** + 4-col list |
| Cards | Landscape 16:9; Book Now only |

**Cards:** Night Safari ₹2,499 · Monsoon Trek ₹3,299 · Rappelling ₹1,999  
**Link:** All adventure experiences →

---

## Section 14 — Heritage (Pillar)

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Wings warm `#EDE6D6` |
| Layout | 8-col **2:1 panoramic** + 4-col image thumbnail cards |
| Side cards | Title overlay; Book on hover/focus |

---

## Section 15 — Family (Pillar)

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory |
| Layout | **6+6 portrait editorial** — content left, **4:5 image** right |
| Badges | In caption line only |

### Copy

| Element | Text |
|---------|------|
| H2 | Weekends your children will remember |
| Body | Safe, guided camping for ages 4+. |
| Caption | From ₹4,999 · 2D/1N |
| Primary CTA | Book Family Weekend |

---

## Section 16 — Popular Destinations

**Components:** `UI-CARD-DESTINATION`

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory |
| Featured card | 12 cols; 21:9 image; gradient overlay bottom |
| Secondary | 3 × 4 cols |

### Copy

| Card | Title | Body | Meta |
|------|-------|------|------|
| Featured | Polo Forest | Ancient temples, river trails, and eco-resorts in the Aravalli. | 12 experiences · 2 hr from Ahmedabad |
| Secondary | Saputara | Hill station getaways |
| Secondary | Gir | Wildlife day trips |
| Secondary | Rann of Kutch | Seasonal desert experiences |

**Featured CTA:** Explore Polo Forest (primary on card overlay)

---

## Section 17 — Packages

**Components:** `UI-CARD-PACKAGE` × 3 asymmetric

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | White band on Warm Ivory |
| Layout | **5-col featured + 3.5 + 3.5** landscape cards |
| Inclusions | **Not on homepage** — Details → link only |

### Copy

| Package | Badge | Price |
|---------|-------|-------|
| Weekend Escape 2D/1N | Best value | From ₹7,999/person |
| Ecology Package 3D/2N | Monsoon | From ₹9,499/person |
| 3D/2N Family Adventure | Family | From ₹12,999/person |

Each: **Book Package** + Details →

---

## Section 18 — Gallery Preview

**Components:** `UI-GALLERY-MASONRY`

### Visual treatment

| Property | Value |
|----------|-------|
| Section | **Full-bleed** edge-to-edge (breaks container) |
| Grid | 8–10 images; 4px gap; mix portrait/landscape/square/video/drone |
| Header | Left-aligned within container |
| CTA | View full gallery → bottom-right |

---

## Section 19 — Blogs Preview

**Components:** `UI-BLOG-MAGAZINE`

### Visual treatment

| Property | Value |
|----------|-------|
| Layout | **7-col featured (3:2 image)** + **5-col stacked supporting** (no excerpts) |
| Section bg | Warm Ivory |

### Copy

| Date | Title |
|------|-------|
| 12 Jun 2026 | Monsoon ecology at Polo Forest (featured) |
| 3 Jun 2026 | Planning a school trip checklist |
| 28 May 2026 | Temple architecture guide |

**Link:** All stories → `/blog`

---

## Section 20 — Journey Timeline

**Components:** `UI-JOURNEY-TIMELINE`

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory |
| Stepper | Horizontal 5 steps with **small photo per step** |
| Placement | After Blog, before FAQ |

(Same step copy as wireframe §20.)

---

## Section 21 — Partners

**Components:** `UI-PARTNER-MARQUEE`

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Warm Ivory |
| Layout | Slow auto-scroll logo marquee |
| Overline only | IN PARTNERSHIP WITH — no H2 |

**Link:** Become a partner →

---

## Section 22 — FAQ

**Components:** `UI-FAQ-ACCORDION`

### Visual treatment

| Property | Value |
|----------|-------|
| Accordion width | **6 cols** centred (tighter) |
| Items | **4** on homepage (directions question on full FAQ page) |

(Same FAQ copy items 1–4 as prior spec.)

---

## Section 23 — Emotional CTA Band (Newsletter + Contact)

**Components:** `UI-EMOTIONAL-CTA-BAND`, `UI-FORM-NEWSLETTER` (email only)

### Visual treatment

| Property | Value |
|----------|-------|
| Section bg | Misty trail photography at 20% opacity over Warm Ivory |
| Content | 8 cols centred |
| Newsletter | Single email field inline below action buttons |

### Copy

| Element | Text |
|---------|------|
| H2 | Ready for your next journey? |
| Body | Explore Gujarat's hidden forest with people who know every trail. |
| Primary | Explore Polo Forest |
| Secondary | Talk to our expert |
| Tertiary | WhatsApp · Call (visible labels) |
| Subscribe | Email + Subscribe button |
| Caption | Seasonal stories, no spam · Ahmedabad office · Mon–Sat 9am–7pm |

### Mobile 375

- Stacked full-width buttons; WhatsApp prominent

---

## Section 24 — Footer

**Components:** `UI-SHELL-FOOTER`, `UI-MAP-EMBED` (mini static map)

### Zones

1. Brand tagline  
2. **Destinations** (first column) · Experiences · Plan · Contact  
3. Mini map → `/polo-forest`  
4. Awards row + Social icons  
5. Legal bar  

**Newsletter omitted** in footer (merged in §23).

See design system §8 and wireframe §24.

---

## Section Background Map (Quick Reference)

| Section | Background hex | Token |
|---------|----------------|-------|
| 1 Nav | transparent / white | — |
| 2 Announcement | `#E6F0F8` | primary subtle |
| 3 Hero | photography | — |
| 4 Quick Search | glass pill | — |
| 5 Categories | `#F9F7F2` | warm ivory |
| 6 Featured | `#F9F7F2` | warm ivory |
| 7 Trust Stats | texture on ivory | — |
| 8–9 Trust | `#F9F7F2` / white | mixed |
| 10 Education | `#EEF4ED` | nature |
| 11 Corporate | **`#1A1F2E`** | dark inverse |
| 12 Story | `#FFFFFF` | surface |
| 13 Adventure | `#E6F7FB` | water |
| 14 Heritage | `#EDE6D6` | wings warm |
| 15 Family | `#F9F7F2` | warm ivory |
| 16 Destinations | `#F9F7F2` | warm ivory |
| 17 Packages | `#FFFFFF` band | surface |
| 18 Gallery | full-bleed photos | — |
| 19 Blog | `#F9F7F2` | warm ivory |
| 20 Journey | `#F9F7F2` | warm ivory |
| 21 Partners | `#F9F7F2` | warm ivory |
| 22 FAQ | `#F9F7F2` | warm ivory |
| 23 Emotional CTA | photo overlay | — |
| 24 Footer | `#1E2A24` | dark |

---

## Component Mapping Summary

| Section | Primary UI components |
|---------|----------------------|
| 1 | `UI-NAV-HEADER`, `UI-NAV-MEGA`, `UI-NAV-PROFILE` |
| 2 | `UI-ANNOUNCEMENT-BAR` |
| 3 | `UI-HERO-CAROUSEL` |
| 4 | `UI-QUICK-SEARCH` (glass pill) |
| 5 | `UI-CARD-CATEGORY-SCROLL` |
| 6 | `UI-CARD-EXPERIENCE` (asymmetric) |
| 7 | `UI-TRUST-STATS-BAR` |
| 8 | `UI-CARD-TESTIMONIAL` |
| 9 | `UI-TRUST-WALL` |
| 10 | `UI-PILLAR-JOURNEY` |
| 11 | `UI-PILLAR-DARK` |
| 12 | `UI-STORY-INTERACTIVE` |
| 13 | `UI-CARD-EXPERIENCE`, `UI-MAP-EMBED` |
| 14–15 | `UI-PILLAR-SECTION` |
| 16 | `UI-CARD-DESTINATION` |
| 17 | `UI-CARD-PACKAGE` |
| 18 | `UI-GALLERY-MASONRY` |
| 19 | `UI-BLOG-MAGAZINE` |
| 20 | `UI-JOURNEY-TIMELINE` |
| 21 | `UI-PARTNER-MARQUEE` |
| 22 | `UI-FAQ-ACCORDION` |
| 23 | `UI-EMOTIONAL-CTA-BAND` |
| 24 | `UI-SHELL-FOOTER`, `UI-MAP-EMBED` |

**Homepage section count: 24** (Newsletter + Contact merged)  
**Wireframe source:** v0.2.0 premium editorial UX revision

---

**Document path:** `docs/ui/01-homepage-hifi.md`  
**Previous:** [00-ui-design-system.md](./00-ui-design-system.md) · **Next:** [02-key-pages-hifi.md](./02-key-pages-hifi.md)
