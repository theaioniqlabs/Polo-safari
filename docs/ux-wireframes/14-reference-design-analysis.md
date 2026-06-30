# Polo Safari — Reference Design Analysis

**Version:** 0.1.0  
**Status:** Design direction research — structure and UX patterns only (not visual styling)  
**Scope:** Four external reference designs evaluated against Polo Safari wireframe system  
**Prerequisite:** [00-index.md](./00-index.md), [02-homepage.md](./02-homepage.md), [04-experience-detail.md](./04-experience-detail.md)  
**Last updated:** Step 14 — Reference design synthesis  

---

## Purpose

This document analyses four reference designs shared during the Polo Safari UX project. Each reference is evaluated for **structural and interaction patterns** that can inform Polo Safari wireframes and eventual visual design — not for colour, illustration style, or brand mimicry.

**Locked Polo Safari constraints applied throughout:**

| Constraint | Implication for references |
|------------|---------------------------|
| Full online booking + login gate | Booking/search widgets must route to `/plan/book/[slug]/dates`, not enquiry-only |
| UPI/card checkout | Trust copy near conversion; payment clarity in journey timeline |
| Five pillars + geographic destinations | Category grids and maps must not conflate product type with location |
| Corporate/education RFP separate | Dual CTA patterns (Book vs Request Proposal) are intentional |
| English-only | No Cyrillic or multilingual nav patterns |
| Premium editorial, story-driven UX | Photography-forward, editorial typography — not OTA utilitarian |
| Polo Forest / Gujarat focus | Maps, heroes, and itineraries anchor regional geography |

---

## Reference 1 — Atelier Arc (Architecture Studio)

**Source image:** `assets/...image-75419b2c-ecf1-4a3a-9f9c-0b733a3d2833.png`

### What it is / design language

A bespoke architecture and spatial design studio landing page. Visual language: **glassmorphism** (frosted pill nav, translucent secondary buttons), full-bleed nature photography hero, bold sans-serif headline, and a **3D curved project carousel** at the hero base — cards arc toward the viewer with depth, glow, and scale variation.

Tone: premium, minimal, spatial, editorial — architecture as experience.

### Patterns that FIT Polo Safari

| Reference pattern | Polo Safari wireframe mapping |
|-------------------|-------------------------------|
| Floating glass nav over hero | `WF-SHELL-HEADER` transparent-over-hero state (Homepage §1); condenses on scroll |
| Dual hero CTAs (solid primary + ghost secondary) | `WF-HERO-CAROUSEL` — Book vs Explore / Request Proposal (Homepage §3) |
| Full-bleed immersive hero photography | `WF-PAGE-HERO`, `WF-DETAIL-HERO` — seasonal campaigns and experience detail |
| Curved / depth carousel of visual cards | Featured Experiences (§6), Gallery Preview (§20), `WF-RELATED-TOURS` on detail page |
| Project cards as portfolio storytelling | Heritage pillar wide image + side cards (Homepage §11); `WF-CARD-EXPERIENCE` grid |
| Left-aligned headline block over scrim | Hero text overlay pattern — cols 1–7 content block (Homepage §3) |

### Patterns that DON'T fit or need caution

| Pattern | Caution |
|---------|---------|
| Glassmorphism as dominant UI skin | Can reduce readability on bright safari photography; use sparingly on nav/search bar only |
| Architecture-as-product framing | Polo Safari sells **time-bound experiences**, not static spatial portfolios — carousel items need dates, price, pillar badges |
| House-icon minimal branding | Polo Safari needs richer brand identity, trust signals, and five-pillar taxonomy — not a single abstract mark |
| Dark translucent secondary CTA only | Corporate/education need distinct RFP CTAs; booking needs login/payment trust copy |
| 3D carousel as sole discovery | Performance and accessibility cost; wireframes specify horizontal snap or 3-up grid as default |

### Specific borrowable UX ideas (structure only)

1. **Hero-bottom visual rail** — A shallow curved card strip below the hero headline (not replacing Quick Search) surfacing 5–7 top experiences with snap scroll; centre card enlarged.
2. **Transparent → solid header transition** — Already in wireframes; reference validates scroll-triggered surface change.
3. **Primary + ghost CTA pairing** — Reinforce Book Now / Explore Experiences and Request Proposal / Learn More pairs per slide.
4. **Immersive media-first fold** — Min-height hero with gradient scrim; text never competes with imagery without overlay treatment.

### Rating: Polo Safari relevance

**3 / 5** — Strong hero, nav, and visual-carousel patterns; weak on booking, taxonomy, trust, and travel-specific information architecture.

---

## Reference 2 — Cambodia Travel Tour Landing

**Source image:** `assets/...image-d639c45d-1bdc-4b3a-ae18-44e2d4e88e2b.png`

### What it is / design language

A long-form **destination tour landing page** for a multi-day Cambodia itinerary. Visual language: rounded-corner photography, clean white header, large destination wordmark on hero, **3×3 experience grid** with pill labels, **interactive route map** with numbered stops, and **asymmetrical day-by-day program** sections alternating text and image clusters.

Tone: boutique tour operator, editorial travel, geography-first storytelling.

### Patterns that FIT Polo Safari

| Reference pattern | Polo Safari wireframe mapping |
|-------------------|-------------------------------|
| Destination hero with large typographic title | `WF-HERO-CAROUSEL` campaign slides; `WF-DETAIL-HERO` experience titles |
| "Everything you will see/hear/taste/feel" grid | Homepage Gallery Preview (§20); `WF-HIGHLIGHTS-GRID` on experience detail (§9) |
| Pill labels on grid images | `WF-BADGE` on experience cards; destination/experience name chips on gallery tiles |
| Interactive map with route line + numbered stops | `WF-MAP-EMBED` (detail §13); `WF-DEST-MAP` (destinations §7); multi-day itinerary route overlay |
| Map-embedded CTA | Sticky `WF-BOOKING-WIDGET` proximity; Contact CTA band (§24) |
| Day-by-day program with Day N pills | `WF-ITINERARY-ACCORDION` (detail §8); `WF-TIMELINE-VERTICAL` (detail §7) |
| Asymmetric text + image cluster per day | Pillar sections `WF-PILLAR-SECTION` (Homepage §7–11); itinerary accordion expanded panels |
| Header with phone, social, Book CTA | `WF-SHELL-HEADER` utilities; `WF-CONTACT-CTA-BAND` (§24) |
| View Program CTA on hero | Maps to **Book Now** or **View itinerary** on experience detail |

### Patterns that DON'T fit or need caution

| Pattern | Caution |
|---------|---------|
| Single-tour landing scope | Polo Safari is a **platform** with five pillars — Cambodia page is one product; don't collapse IA to one tour |
| Russian / Cyrillic copy | English-only at launch |
| Telegram-first social row | WhatsApp/phone align better with Gujarat market — match `WF-CONTACT-CTA-BAND` |
| Hamburger on desktop | Polo Safari wireframes use full mega menu at desktop |
| 11-stop national tour map | Polo Forest experiences are shorter radius — map scale must match (forest, Idar, Ahmedabad departure) |
| Book CTA on map without login gate | Must preserve login redirect and UPI/card trust copy |

### Specific borrowable UX ideas (structure only)

1. **Sensory highlights grid** — 3×3 (or 2×4) labelled photo grid: "Ancient temples," "River trails," "Night safari," etc., each pill linking to filtered `/experiences` or gallery.
2. **Route map module** — Numbered stops along a dotted path for multi-day packages; clicking a stop scrolls to itinerary day or expands accordion panel.
3. **Day pill + alternating layout** — Left text / right image cluster on odd days, flipped on even days; use for 2D/1N and 3D/2N packages.
4. **Program anchor CTA** — Hero secondary CTA "View itinerary" jumps to `#itinerary` on detail page before booking.
5. **Experience grid as scannable preview** — Above-the-fold curiosity before deep scroll; maps to Featured Experiences or category section.

### Rating: Polo Safari relevance

**5 / 5** — Closest structural match: destination hero, experience preview grid, map + itinerary, and conversion path align directly with Polo Safari homepage and experience detail wireframes.

---

## Reference 3 — Mindful Living Platform

**Source image:** `assets/...image-d5cebe57-8e3f-4e9d-93e1-10213cdee926.png`

### What it is / design language

A wellness / mindful living platform hero. Visual language: **cream paper texture** background, **editorial serif display headline** (two-tone: regular + italic), centred composition, small overline tag, dual CTAs (primary pill + ghost with icon), bottom **nature illustration** band, and **partner logo row** for trust.

Tone: calm, premium editorial, nature-connected, optimistic.

### Patterns that FIT Polo Safari

| Reference pattern | Polo Safari wireframe mapping |
|-------------------|-------------------------------|
| Overline tag above headline | `WF-TYPE-OVERLINE` — "MONSOON 2026", pillar labels (Homepage §3, §5) |
| Serif display headline for emotional hook | Heritage (§11), Interactive Story (§12), About page — editorial differentiation |
| Dual CTA (primary action + secondary explore) | Hero carousel, pillar sections, Contact CTA band (§24) |
| Partner / trust logo row at hero base | `WF-PARTNER-LOGO-ROW` (§19), `WF-AWARD-GRID` (§18) |
| Centred hero copy stack | Alternative hero layout for seasonal campaigns — optional centred variant |
| Nature imagery as mood anchor | Polo Forest photography, gallery, destination cards |
| Sign in + primary nav CTA split | `WF-NAV-PROFILE` login + `WF-BTN-PRIMARY` Plan Your Visit |

### Patterns that DON'T fit or need caution

| Pattern | Caution |
|---------|---------|
| Illustration-heavy hero (painted hills) | Polo Safari should use **real Polo Forest photography** — illustration reads wellness retreat, not safari |
| Centred-only hero layout | Wireframes specify left-aligned hero for campaign clarity and carousel controls — centred variant only for special campaigns |
| "Sign in" as prominent nav item | Login is **booking-gate**, not primary nav story — keep subordinate to Plan Your Visit |
| Soft cream palette | Brand tokens will differ — Gujarat safari = earth, forest green, temple stone — not spa minimal |
| Birds / decorative motion | Subtle only; avoid distracting from CTAs and Quick Search |
| Generic partner logos | Replace with Gujarat Tourism, resort partners, school/corporate clients |

### Specific borrowable UX ideas (structure only)

1. **Two-line editorial headline** — Line 1 factual ("Discover Polo Forest"); Line 2 emotional italic ("After the Rains") on hero slides.
2. **Overline • Category • Overline** pattern — `• Heritage & Culture •` above pillar section H2s.
3. **Trust strip integrated into hero fold** — Partner logos or stat strip ("12+ years · 50,000+ guests") immediately below hero CTAs before scroll.
4. **Ghost CTA with icon** — "View retreats" / "Watch film" secondary with play or map icon on story sections.
5. **Emotion arc copy structure** — Tagline → headline → one-sentence subcopy → dual CTA → trust — matches Wonder → Trust → Action.

### Rating: Polo Safari relevance

**4 / 5** — Excellent typography, trust, and CTA hierarchy patterns; illustration style and wellness tone need adaptation for adventure/safari positioning.

---

## Reference 4 — Smirnovs' Houses Glamping

**Source image:** `assets/...image-9ca41ceb-9630-49c0-aaba-8845f2bffa12.png`

### What it is / design language

A glamping / holiday rental site. Visual language: **watercolor illustration** hero, scalloped decorative frames, centred pill nav, **embedded booking bar** (check-in, check-out, guests), **family story** section with Polaroid photo, and **illustrated site map** with labelled pointers.

Tone: artisanal, cozy, family-run, boutique hospitality — cottage-core.

### Patterns that FIT Polo Safari

| Reference pattern | Polo Safari wireframe mapping |
|-------------------|-------------------------------|
| Embedded booking/search bar on hero | `WF-QUICK-SEARCH` overlapping hero bottom (Homepage §4) |
| Booking fields: date + guests + search | Quick Search — experience type, date, guests (§4) |
| Family / founder story section | About page (`09-about.md`); Testimonials (§16); Interactive Story (§12) |
| Illustrated / labelled property map | `/polo-forest` hub — campsite, temple trail, meeting point labels |
| Personal photography + editorial text split | `WF-PILLAR-SECTION` — Family (§10), Educational (§7) |
| Centred pill navigation | Optional simplified nav variant for campaign landing pages |
| Check availability CTA | Maps to Search → `/experiences` with date params or booking flow |

### Patterns that DON'T fit or need caution

| Pattern | Caution |
|---------|---------|
| Watercolor illustration aesthetic | Too whimsical for safari/adventure — use photography or topographic map style |
| Check-in / check-out lodging model | Polo Safari sells **experiences and packages**, not room nights — Quick Search uses experience type + date + guests |
| Single-property site map | Polo Forest hub is broader — trails, temples, camps, multiple operators |
| Scalloped / decorative UI frames | Conflicts with premium editorial minimalism |
| Russian copy | English-only |
| Cottage glamping tone | Corporate MICE and school ecology need professional credibility |
| Availability as only conversion | Platform needs Book Now, RFP, enquiry, and login flows |

### Specific borrowable UX ideas (structure only)

1. **Hero-anchored Quick Search card** — Elevated card overlapping hero (-32px margin per wireframe); four fields in one row.
2. **Spatial map with pointer labels** — Polo Forest hub: "Heritage trail," "Eco camp," "Harnav river," "Meeting point" — clickable to experiences or map section.
3. **Human story block** — Founder/team narrative with authentic photo treatment (not Polaroid tape — clean editorial frame) on About and homepage story section.
4. **Availability-first microcopy** — "Find your Polo Forest experience" as section H3 above search fields.
5. **Popular shortcuts below search** — "Popular: Night Safari · School Trip · Corporate Day" as quick links (already in wireframe §4).

### Rating: Polo Safari relevance

**3 / 5** — Strong booking bar and spatial map patterns; visual style and lodging-centric IA are misaligned with experiential travel platform scope.

---

## Synthesis — Recommended Reference Direction

### Primary reference: **Cambodia Travel Tour (Reference 2)**

**Why:** It is the only reference built as a **travel product story** — destination hero → sensory preview grid → geographic orientation (map) → day-by-day program → book. This maps almost 1:1 to Polo Safari's homepage curiosity arc and experience detail page anatomy (`WF-DETAIL-HERO` → highlights → map → itinerary → booking widget).

**Apply for:**

- Long-form experience and package pages
- Multi-day itinerary layout and map-route module
- Homepage "what you'll experience" grid
- Hero → program → book narrative flow

### Secondary reference: **Mindful Living Platform (Reference 3)**

**Why:** Supplies **editorial typography hierarchy**, calm premium tone, dual CTA discipline, and trust/partner integration without dictating travel IA. Complements Cambodia's structure with Polo Safari's "premium editorial immersive" positioning.

**Apply for:**

- Hero headline treatment (overline + display + subcopy)
- Trust cluster placement (stats, partners, awards near conversion)
- Heritage and story sections (`WF-STORY-INTERACTIVE`, About)
- Secondary ghost CTAs with icons

### Supporting references (use sparingly)

| Reference | Use for | Avoid |
|-----------|---------|-------|
| **Atelier Arc (1)** | Hero immersion, glass nav, visual card carousel at fold | Architecture portfolio framing, heavy glassmorphism |
| **Smirnovs' Houses (4)** | Quick Search overlap pattern, labelled spatial map on `/polo-forest` | Watercolor style, lodging booking model, cottage tone |

---

## Homepage Mapping — Reference → Polo Safari Sections

| Homepage section (Step 2) | Primary reference | Pattern to borrow |
|-------------------------|-------------------|-------------------|
| §1 Navigation | Atelier Arc + Cambodia | Transparent over hero; utilities + primary CTA right |
| §2 Announcement Bar | — | No direct reference; keep wireframe as-is |
| §3 Hero Carousel | Cambodia + Mindful Living | Destination photo hero; editorial headline stack; dual CTA |
| §4 Quick Search | Smirnovs' Houses | Embedded bar overlapping hero; date + guests + search |
| §5 Experience Categories | Cambodia (grid labels) | Scannable labelled tiles — pillar names as pills |
| §6 Featured Experiences | Atelier Arc | Horizontal card rail with depth; centre emphasis optional |
| §7–11 Pillar sections | Cambodia + Mindful Living | Alternating split layouts; day-style editorial blocks |
| §12 Interactive Story | Mindful Living | Editorial serif H2; tabbed story panels |
| §13 Popular Destinations | Cambodia (map) | Geographic featured card + secondary destinations |
| §14 Packages | Cambodia (program) | Multi-day summary with inclusions before price |
| §15 Journey Timeline | Mindful Living | Clear step sequence; trust before action |
| §16–18 Trust cluster | Mindful Living | Testimonials + partner/award row placement |
| §19 Partners | Mindful Living | Logo row below story/trust |
| §20 Gallery Preview | Cambodia (experience grid) | Labelled image grid — sensory preview |
| §21 Blogs Preview | Mindful Living | Editorial card treatment |
| §22 FAQ | — | Wireframe accordion preferred |
| §23 Newsletter | — | Wireframe split band |
| §24 Contact CTA | Cambodia | Phone/social/book triad |
| §25 Footer | Cambodia | Full link columns + conversion repeat |

---

## Experience Detail Mapping — Cambodia-Style Patterns

The experience detail page (`04-experience-detail.md`) is where Reference 2 (Cambodia) delivers the most implementation value.

### Section-by-section mapping

| Detail section | Wireframe ID | Cambodia reference pattern | Implementation notes |
|----------------|--------------|---------------------------|----------------------|
| §3 Hero | `WF-DETAIL-HERO` | Full-width rounded hero + destination title | Use experience name + pillar badge; rating snippet in overlay |
| §4 Quick Facts | `WF-QUICK-FACTS-BAR` | — (Cambodia lacks fact strip) | Keep wireframe — adds confidence before itinerary |
| §5 Gallery | `WF-GALLERY-CAROUSEL` | Experience grid cells | Grid labels become gallery captions |
| §6 Overview | — | Tour intro paragraphs | Editorial lead before structured content |
| §7 Timeline | `WF-TIMELINE-VERTICAL` | Day schedule summary | Single-day: time blocks; multi-day: day summaries |
| §8 Itinerary | `WF-ITINERARY-ACCORDION` | **Day 1, Day 2… program sections** | Adopt alternating text/image clusters per day; green day pills → pillar-colour `WF-BADGE` |
| §9 Highlights | `WF-HIGHLIGHTS-GRID` | **"See, hear, taste, feel" grid** | 3×3 or 2×4 photo grid with experience moment labels |
| §10–12 Inclusions / Packing | `WF-INCLUSION-LIST` | — | Keep wireframe lists — Cambodia doesn't show these |
| §13 Map | `WF-MAP-EMBED` | **Interactive route map with numbered stops** | For multi-day: dotted route + stops 1–N; click stop → itinerary accordion; meeting point pin for 1-day |
| §14 Reviews | `WF-REVIEWS-SECTION` | — | Keep wireframe trust section |
| §15 FAQ | `WF-FAQ-ACCORDION` | — | Keep wireframe |
| Sidebar | `WF-BOOKING-WIDGET` | Map-embedded "Book Tour" | Sticky widget replaces map CTA; login + UPI/card copy |
| §17 Mobile sticky | `WF-BOOKING-CTA-STICKY` | — | Price + Book Now fixed bottom |

### Multi-day package enhancement (from Cambodia)

For packages (Homepage §14) and multi-day experiences, add a **route map module** not fully specified in grayscale wireframes:

```
┌─ WF-ITINERARY-ROUTE-MAP (proposed) ─────────────────────────────────────────┐
│ [TEXT: H2]  Your route through Polo Forest & Gujarat                          │
│ ┌─ map embed ─────────────────────────────────────────────────────────────┐ │
│ │  ○1 Idar meeting point ──○2 Temple trail ──○3 River camp ──○4 Return   │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│ Click a stop to jump to day in itinerary ↓                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

Place between **Overview** and **Itinerary**, or integrated into **Map** (§13) for multi-day slugs only.

### `/polo-forest` destination hub (from Cambodia + Smirnovs)

| Pattern | Source | Application |
|---------|--------|-------------|
| Regional map with hubs | Cambodia | Gujarat map on `/destinations`; Polo Forest inset |
| Labelled site map | Smirnovs | Property/trail map with pointer labels — photography base, not watercolor |
| Experience grid | Cambodia | Filtered experience cards below map |

---

## What to Avoid

Given Polo Safari is **premium experiential travel** (not architecture, wellness app, or glamping boutique):

### Visual and tonal avoids

| Avoid | Reason | Instead |
|-------|--------|---------|
| Heavy glassmorphism everywhere | Reduces clarity on busy nature photos; feels architecture/UI demo | Solid or subtle blur on nav/search only |
| Watercolor / cottage illustration | Reads family glamping, not safari operator | Real Polo Forest photography, optional topographic map lines |
| Wellness/spa cream minimalism | Undercuts adventure and corporate credibility | Earth tones, forest green, temple stone — editorial contrast |
| Architecture portfolio carousel | Products need price, duration, pillar, book CTA | Experience cards with metadata |
| Cyrillic / multi-language UI | English-only at launch | EN nav; future i18n separate |
| Decorative scalloped frames | Dated; fights clean editorial | Standard radius per design system |

### UX and IA avoids

| Avoid | Reason | Instead |
|-------|--------|---------|
| Single-tour landing as site model | Platform has five pillars + destinations | Homepage category grid + mega menu |
| Check-in/check-out lodging flow | Experiences ≠ room inventory | Experience type + date + guests Quick Search |
| Map CTA without login/payment context | Locked decisions require auth + UPI/card trust | Sticky booking widget with full copy |
| Enquiry-only "Book a Tour" | Full online booking is locked | Route to `/plan/book/[slug]/dates` |
| Conflating destinations with pillars | Taxonomy locked | Geographic map separate from category filters |
| 3D carousel as default discovery | a11y, performance, mobile | Horizontal snap or 3-up grid; 3D optional enhancement |
| Corporate/education as standard book | Separate RFP flows | Request Proposal CTAs on hero slides and pillar blocks |
| Illustrated-only site map | Reduces trust for B2B (schools, corporate) | Photo satellite or stylised map with real landmarks |

### Content avoids

| Avoid | Reason | Instead |
|-------|--------|---------|
| Generic "LOGO" / placeholder partner names | Trust is priority | Verified awards, Google reviews, named partners |
| Telegram-first contact | Market mismatch | WhatsApp, phone, `/contact` |
| "Mindful living" / wellness copy | Wrong category | Ecology, heritage, adventure, family memory language |
| National-scale 11-stop maps for every product | Polo Forest focus | Scale map to experience duration and region |

---

## Summary Ratings

| Reference | Relevance | Best for | Weakest for |
|-----------|-----------|----------|-------------|
| 1 — Atelier Arc | **3/5** | Hero immersion, nav, visual carousel | Booking, taxonomy, travel IA |
| 2 — Cambodia Tour | **5/5** | Itinerary, map, experience grid, tour narrative | Platform multi-pillar IA (adapt) |
| 3 — Mindful Living | **4/5** | Editorial type, trust row, dual CTAs | Illustration style, wellness tone |
| 4 — Smirnovs' Glamping | **3/5** | Quick Search bar, spatial map, family story | Visual style, lodging model |

---

## Recommended Next Steps

1. **Design system tokens** — Serif display + sans body (Mindful Living); earth/forest palette; photography-first imagery rules.
2. **Hero templates** — Two variants: left-aligned campaign (Cambodia + Atelier) and optional centred editorial (Mindful Living) for seasonal slides.
3. **Experience detail v2** — Add `WF-ITINERARY-ROUTE-MAP` for multi-day products; adopt Cambodia alternating day layout in `WF-ITINERARY-ACCORDION`.
4. **Quick Search visual** — Implement Smirnovs-style hero overlap card per Homepage §4.
5. **Polo Forest hub** — Labelled trail map (Smirnovs structure, photographic style) on `/polo-forest`.
6. **Prototype priority** — Homepage hero + Quick Search + Featured grid; Experience detail itinerary + map for one multi-day package.

---

## Related Documents

| Document | Relationship |
|----------|--------------|
| [02-homepage.md](./02-homepage.md) | Section targets for homepage mapping |
| [04-experience-detail.md](./04-experience-detail.md) | Itinerary, map, highlights targets |
| [07-destinations.md](./07-destinations.md) | Regional map and destination cards |
| [09-about.md](./09-about.md) | Family/brand story patterns |
| [00-index.md](./00-index.md) | Locked decisions and component index |

---

**Document path:** `docs/ux-wireframes/14-reference-design-analysis.md`  
**Prepared for:** Polo Safari experiential travel platform — visual/UX direction handoff
