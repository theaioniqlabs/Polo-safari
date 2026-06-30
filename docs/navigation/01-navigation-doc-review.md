# Polo Safari — Navigation Documentation Review

**Version:** 1.0.0  
**Status:** Reconciliation analysis  
**Date:** July 2026  
**Source zip:** `TEMP/PoloSafari_Navigation_Documentation.zip`  
**Compared against:** Wireframes, UI design system, frontend scaffold, brand guidelines  

---

## Executive Summary

The zip contains **three sparse markdown files** describing a **legacy, full-service travel-agency navigation model** (India/International geography, theme packages, ancillary services, flat top-level links). This IA reflects a **broad OTA/tour-operator site**, not the **Polo Forest–centric experiential platform** defined in locked wireframes and UI specs.

| Dimension | Zip doc | Locked project spec | Verdict |
|-----------|---------|---------------------|---------|
| **Overall alignment** | — | — | **2 / 10** |
| **IA structure** | Geographic + theme taxonomy | Five experience pillars + Discover grouping | **Reject** |
| **Header CTA** | "Enquire Now" | "Plan Your Visit" → `/plan` | **Reject** |
| **Blog path** | Top-level "Blog" | "Stories & Insights" → `/blog` (label differs; URL OK) | **Merge label only** |
| **Corporate / Education** | Sub-menus under nav items | Pillar landings `/corporate`, `/education` with RFP flows | **Reject structure; keep RFP paths** |
| **Mega menu** | Generic one-liner | Five-pillar list + 3 featured cards | **Merge patterns only** |
| **Sticky / search / a11y** | Brief UX notes | Fully specified in wireframes + UI | **Adopt principles** |

**Recommendation:** **Reject the zip IA wholesale.** Cherry-pick only **interaction principles** (sticky header, always-visible search, keyboard accessibility, responsive accordion) and **high-level mega-menu patterns** (featured destination image, View All, sticky mobile enquiry). Do **not** adopt India/International nav, Theme Tour Packages taxonomy, Services (flights/hotels/visa), or "Enquire Now" as the global CTA.

---

## 1. Zip Archive Inventory

**Extracted to:** `TEMP/PoloSafari_Navigation_Documentation/PoloSafari_Navigation_Documentation/`

| # | File | Size (approx.) | Type |
|---|------|----------------|------|
| 1 | `01_NAVIGATION_ARCHITECTURE.md` | ~1.5 KB | Markdown — full IA tree |
| 2 | `02_MEGA_MENU_GUIDE.md` | ~200 B | Markdown — interaction bullets |
| 3 | `03_UX_NOTES.md` | ~150 B | Markdown — UX principles |

**Not present in zip:** PDFs, HTML, images, wireframes, URL slug tables, mobile drawer specs, component tokens, or brand assets.

---

## 2. Zip Documentation — Full Extraction

### 2.1 Main Navigation (`01_NAVIGATION_ARCHITECTURE.md`)

**Top-level items (14 + utilities):**

| Item | Sub-structure |
|------|---------------|
| Home | — |
| India | 16 regions/destinations (North/South/East/West/Central/NE India, Gujarat, Rajasthan, Goa, Kerala, Kashmir, Himachal, Uttarakhand, Andaman, **Polo Forest**, Statue of Unity, Saputara) |
| International | 5 regions (Asia, Europe, Middle East, Africa, Australia & NZ) |
| Theme Tour Packages | 13 themes (Adventure, Hill Station, Monsoon, Family, Wildlife, Pilgrimage, Honeymoon, Luxury, Photography, Weekend, Summer, Winter, Festival) |
| Schools & Colleges | 6 sub-types (Educational Tours, Industrial Visits, Nature Camps, University Tours, School Picnics, Custom Tours) |
| Corporate | 6 sub-types (Team Building, Offsites, Leadership Camps, Conferences, Reward Trips, CSR) |
| Services | 7 items (Flight, Hotel, Car Rental, Visa, Passport, Insurance, Customized Tours) |
| Gallery | — |
| About | 5 sub-pages (Story, Vision, Founder, Awards, Careers) |
| Blog | — |
| Contact | — |
| Search | utility |
| **Enquire Now** | **global CTA** |

**Implied URL patterns (not explicitly documented):** Likely `/india/...`, `/international/...`, `/theme-tour-packages/...`, flat slugs — **no slug table provided**.

### 2.2 Mega Menu Guide (`02_MEGA_MENU_GUIDE.md`)

**Desktop:**
- Visual mega menu
- Featured destination image
- CTA
- View All

**Mobile:**
- Accordion navigation
- Two levels maximum
- Sticky enquiry button

### 2.3 UX Notes (`03_UX_NOTES.md`)

- Sticky header
- Search always visible
- Enquire CTA always visible
- SEO-friendly URLs
- Keyboard accessible
- Responsive first

---

## 3. Locked Project Navigation Spec (Reference)

### 3.1 Desktop Header (Wireframes D1 + UI §7)

| Zone | Content |
|------|---------|
| Logo | Home link |
| Primary nav | **Experiences ▾** · **Discover ▾** · Polo Forest · Plan · About |
| Utilities | Search · Profile · Language (EN) · Theme toggle |
| CTA | **Plan Your Visit** → `/plan` |

**Sticky:** 72px default → 64px condensed after 80px scroll. CTA never hides.

### 3.2 Experiences Mega Menu (Wireframes D2 + UI §7.4 + HiFi Part C)

| Left — Browse by type | Right — Featured |
|------------------------|------------------|
| Heritage & Culture → `/experiences/category/heritage` | 3 mini experience cards |
| Education & Ecology → `/experiences/category/education` | |
| Corporate & MICE → `/corporate` | Footer: Corporate programs → `/corporate` |
| Family Getaways → `/experiences/category/family` | |
| Adventure & Trekking → `/experiences/category/adventure` | |
| View all experiences → `/experiences` | |

### 3.3 Discover Dropdown (Wireframes D3 + UI §7.5)

| Link | URL |
|------|-----|
| Polo Forest Story | `/polo-forest` |
| Gallery | `/gallery` |
| Stories & Insights | `/blog` |
| Guest Reviews | `/reviews` |
| FAQ | `/faq` |
| About Polo Safari | `/about` |

### 3.4 Mobile Drawer (Wireframes D4 + UI §7.6 + HiFi Part D)

- Hamburger at `<768px`
- Inline search at top
- Accordions: Experiences (5 pillars + view all), Discover (6 links)
- Top-level: Polo Forest · Plan Your Trip
- Utilities: Language · Theme
- Sticky bottom CTA: **Plan Your Visit**
- Footer row: Contact · Login

### 3.5 Five Pillars (Locked — Decisions Log #5)

| Pillar | Slug | Landing |
|--------|------|---------|
| Heritage | `heritage` | `/experiences/category/heritage` |
| Educational Tours | `education` | `/education` (RFP) + category listing |
| Corporate Retreats | `corporate` | `/corporate` (RFP) |
| Family | `family` | `/family` + category listing |
| Adventure | `adventure` | `/adventure` + category listing |

**Popular Destinations** = geographic grouping only — **not** a sixth pillar or top-level nav item.

### 3.6 CTA Model (Locked)

| Context | Label | Destination |
|---------|-------|-------------|
| Global header / mobile drawer | Plan Your Visit | `/plan` |
| Experience detail / listing cards | Book Now | `/plan/book/[slug]/dates` (login gate) |
| General non-transactional | Enquire | `/plan/enquire` (not header primary) |
| Corporate / Education landings | Request Proposal | On-page RFP form |

---

## 4. Frontend Implementation (Current)

**File:** `frontend/src/components/layout/Header.tsx`

| Aspect | Current state | Spec alignment |
|--------|---------------|----------------|
| Nav structure | Flat 8 links (no mega menu, no Discover dropdown) | **Partial** — missing D2/D3 |
| Links | Experiences, Destinations, Corporate, Education, Gallery, About, Blog, Contact | **Drift** — `/destinations` not in wireframe sitemap; no Polo Forest, Plan, Discover |
| Header CTA | Plan Your Visit → `/plan` | **✅ Correct** |
| Login | `/login` | **Drift** — spec uses `/account/login` |
| Sticky | `fixed` header; condenses at 24px scroll | **Partial** — spec triggers at 80px, uses `sticky` |
| Mega menu | Not implemented | **Missing** |
| Mobile drawer | Not implemented (`hidden lg:flex` only) | **Missing** |
| Search / profile / language / theme | Not implemented | **Missing** |

**Footer** (`Footer.tsx`): Five pillar links under Experiences; Stories → `/blog`; Corporate RFP + School Programs paths — **closer to spec than header**.

---

## 5. Conflict Analysis vs Locked Decisions

### 5.1 Critical Conflicts (Must Reject)

| # | Locked decision | Zip doc | Severity |
|---|-----------------|---------|----------|
| C1 | **Five pillars only** — no Wildlife, Hill Station, etc. as categories | Theme Tour Packages lists 13 themes including Wildlife, Hill Station, Pilgrimage, Honeymoon… | **Critical** |
| C2 | **Polo Forest–centric** experiential platform | India/International geographic IA dominates; Polo Forest is one of 16 India sub-items | **Critical** |
| C3 | **Plan Your Visit** global header CTA | **Enquire Now** | **Critical** |
| C4 | **Corporate & Education RFP** at `/corporate`, `/education` | Corporate/Schools as nav parents with service-type children (Team Building, Industrial Visits…) | **High** |
| C5 | **No ancillary travel services** in public IA | Services: Flight, Hotel, Visa, Passport, Insurance | **Critical** |
| C6 | **Experiences + Discover** nav grouping | 14 flat top-level items; no mega menu structure | **High** |
| C7 | **Book Now** for transactional paths | Zip implies enquiry-only ("Enquire CTA always visible") | **High** |

### 5.2 Moderate Conflicts (Label / Placement)

| # | Locked decision | Zip doc | Resolution |
|---|-----------------|---------|------------|
| M1 | "Stories & Insights" label; URL `/blog` | Top-level "Blog" | Keep `/blog`; use wireframe label in nav |
| M2 | Polo Forest as **top-level** nav link | Buried under India | Promote to top-level per wireframes |
| M3 | About under Discover dropdown | Top-level About with 5 sub-pages | Keep `/about`; sub-pages optional Phase 2 |
| M4 | `/reviews`, `/faq` in Discover | Not listed | Add per wireframes |
| M5 | Popular Destinations as geographic grouping | India regions = primary nav | Repurpose as **filter/grouping** inside experiences or destination pages, not primary IA |

### 5.3 Alignments (Safe to Adopt)

| # | Zip principle | Project spec | Action |
|---|---------------|--------------|--------|
| A1 | Sticky header | D9, UI §7.2 | Already specified — implement |
| A2 | Search always visible | D5, UI §7.1 utilities | Already specified — implement |
| A3 | Keyboard accessible | Wireframes a11y notes | Already specified — implement |
| A4 | SEO-friendly URLs | B2 URL taxonomy | Already specified — implement |
| A5 | Responsive first / mobile accordion | D4 mobile drawer | Already specified — implement |
| A6 | Mega menu: featured image + View All | D2, UI-NAV-MEGA | **Merge** — zip adds no new detail beyond existing spec |
| A7 | Mobile: 2-level accordion max | D4 accordions | **Merge** — consistent with wireframes |
| A8 | Sticky mobile enquiry button | D4 sticky Plan Your Visit | **Merge** — relabel to Plan Your Visit, not Enquire |

### 5.4 Destination Names Worth Preserving (Not as Nav Pillars)

These India sub-destinations from the zip may appear later as **Popular Destinations** content or SEO landing pages — not as primary nav:

- Polo Forest ✅ (already central)
- Statue of Unity
- Saputara
- Gujarat regions

**Reject** as primary nav: Kashmir, Kerala, International regions (out of Polo Safari product scope per wireframe brief).

---

## 6. Alignment Rating

| Layer | Score | Rationale |
|-------|-------|-----------|
| **Zip vs Wireframes** | **2 / 10** | Fundamentally different product model; only micro UX principles overlap |
| **Zip vs UI Design System** | **2 / 10** | Conflicts on CTA, pillars, IA; mega menu guide too thin to add value |
| **Zip vs Brand Guidelines** | **3 / 10** | Same rejection patterns as v1.1 brand review (Enquire, Wildlife, broad IA) |
| **Frontend vs Wireframes** | **4 / 10** | Correct header CTA; missing mega menu, drawer, utilities; flat IA drift |
| **Frontend vs UI Design System** | **4 / 10** | Scaffold stage; transparent header exists; most nav components absent |
| **Wireframes vs UI Design System** | **9 / 10** | Strong internal consistency; minor href nuances (corporate → `/corporate` vs category slug) |

**Composite recommendation target:** Implement wireframes + UI design system. Ignore zip IA.

---

## 7. Recommendations by Element

| Element | Zip doc | Recommendation | Rationale |
|---------|---------|----------------|-----------|
| India / International nav | Full geographic tree | **Reject** | Out of scope; conflicts with Polo Forest focus |
| Theme Tour Packages (13 themes) | Top-level + children | **Reject** | Conflicts with five-pillar taxonomy; Wildlife etc. not pillars |
| Schools & Colleges sub-menu | 6 service types | **Reject** as nav; **keep** `/education` RFP landing | Wireframe Decision #6 |
| Corporate sub-menu | 6 program types | **Reject** as nav; **keep** `/corporate` RFP landing | Content can live on landing page sections |
| Services (flights, hotels, visa) | Top-level | **Reject** | Not in product constitution or sitemap |
| About sub-pages (Story, Vision, Founder…) | 5 children | **Defer** — single `/about` at launch | Wireframes use one About in Discover |
| Blog top-level | Flat link | **Merge** — use Discover grouping, `/blog` URL, "Stories & Insights" label | URL locked; placement per wireframes |
| Enquire Now CTA | Global primary | **Reject** | Locked: Plan Your Visit; Enquire at `/plan/enquire` only |
| Enquire sticky mobile button | Sticky bottom | **Merge** — relabel to Plan Your Visit | Same interaction, correct copy |
| Mega menu (featured image, View All) | Generic bullets | **Merge** into existing UI-NAV-MEGA | No new structure; confirms existing spec |
| Search always visible | UX note | **Adopt** | Matches WF-NAV-SEARCH |
| Sticky header | UX note | **Adopt** | Already in D9 + Header.tsx (partial) |
| Polo Forest under India | Sub-item | **Reject placement** — promote to top-level | Wireframe D1 |
| Statue of Unity, Saputara | India sub-items | **Defer** — Popular Destinations content, not nav | Geographic grouping only |

---

## 8. Reconciliation Table

| Topic | Zip Documentation | Wireframes (`01-global-foundation-and-navigation.md`) | UI Design System (`00-ui-design-system.md` + `02-key-pages-hifi.md`) | Frontend (`Header.tsx` / `Footer.tsx`) | Brand Guidelines (`05-design-system-v1.1-review.md`) | Decision |
|-------|-------------------|------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------|------------------------------------------------------|----------|
| **Primary IA model** | Geographic (India/Intl) + themes | Experience pillars + Discover + Polo Forest | Same as wireframes | Flat links; mixed | Five pillars; reject broad IA | **Wireframes win** |
| **Top-level nav count** | 14 items | 5 labels + utilities | 5 labels + utilities | 8 flat links | N/A | **Wireframes win** |
| **Experiences entry** | Theme Tour Packages | Experiences ▾ mega menu | UI-NAV-MEGA five pillars | `/experiences` flat link | N/A | **Wireframes win** |
| **Heritage pillar** | Not listed | Heritage & Culture | `/experiences/category/heritage` | Footer only | Heritage terracotta accent | **Wireframes win** |
| **Education pillar** | Schools & Colleges menu | Education & Ecology; `/education` RFP | `/experiences/category/education` + `/education` | `/education` link | Nature band for education | **Wireframes win** |
| **Corporate pillar** | Corporate sub-menu (6 types) | Corporate & MICE; `/corporate` RFP | `/corporate` | `/corporate` link + footer RFP | N/A | **Wireframes win** |
| **Family pillar** | Under Theme: Family | Family Getaways | `/experiences/category/family` | Footer only | Family green accent | **Wireframes win** |
| **Adventure pillar** | Under Theme: Adventure | Adventure & Trekking | `/experiences/category/adventure` | Footer only | Adventure orange accent | **Wireframes win** |
| **Wildlife** | Theme sub-item | **Not a pillar** | **Not a pillar** | Not present | **Rejected** as pillar | **Reject zip** |
| **Polo Forest** | India → sub-item | Top-level nav link | Top-level + `/polo-forest` story | Footer only | N/A | **Wireframes win** |
| **Discover grouping** | Not present | Discover ▾ dropdown | UI-NAV-DROPDOWN | Not implemented | N/A | **Wireframes win** |
| **Gallery** | Top-level | Under Discover | Under Discover | Top-level link | N/A | **Wireframes win** |
| **Blog / Stories** | Top-level "Blog" | Stories & Insights → `/blog` | `/blog` | Top-level "Blog" | N/A | **Merge**: `/blog` + wireframe label |
| **Reviews** | Not listed | Guest Reviews → `/reviews` | Same | Not present | N/A | **Wireframes win** |
| **FAQ** | Not listed | Under Discover → `/faq` | Same | Not present | N/A | **Wireframes win** |
| **About** | Top-level + 5 children | Under Discover → `/about` | Same | Top-level link | N/A | **Wireframes win** (placement) |
| **Plan** | Not listed | Top-level "Plan" | Plan Your Trip in drawer | CTA only → `/plan` | N/A | **Wireframes win** |
| **Contact** | Top-level | Drawer footer + `/contact` | Same | Top-level link | N/A | **Merge** — not primary desktop nav |
| **Services (travel)** | Flight, hotel, visa… | **Not in sitemap** | **Not in sitemap** | Not present | N/A | **Reject zip** |
| **International tours** | Full section | **Not in sitemap** | **Not in sitemap** | Not present | N/A | **Reject zip** |
| **Global header CTA** | Enquire Now | Plan Your Visit → `/plan` | Plan Your Visit | Plan Your Visit ✅ | Reject Enquire Now | **Wireframes win** |
| **Booking CTA** | Not specified | Book Now → `/plan/book/...` | Book Now + login gate | Not in header | Book Now for transactional | **Wireframes win** |
| **Enquire path** | Implied primary | `/plan/enquire` secondary | Secondary only | Not linked | Dual CTA model | **Wireframes win** |
| **Corporate RFP** | Sub-menu items | `/corporate` landing form | Request Proposal flow | Footer: Corporate RFP | N/A | **Wireframes win** |
| **Education RFP** | Sub-menu items | `/education` landing form | School Programs link | Footer: School Programs | N/A | **Wireframes win** |
| **Mega menu layout** | Featured image + View All | 4-col categories + 8-col cards | UI-NAV-MEGA detailed | Not implemented | N/A | **Wireframes win** (zip confirms pattern) |
| **Mobile nav** | Accordion, 2 levels, sticky enquiry | Full drawer spec | UI-NAV-MOBILE-DRAWER | Not implemented | Mobile search noted | **Wireframes win** |
| **Sticky header** | Yes | 72→64px at 80px | UI-NAV-HEADER-SCROLLED | Fixed; condense at 24px | N/A | **Wireframes win** (threshold) |
| **Search** | Always visible | Overlay + `/search` | WF-NAV-SEARCH | Not implemented | Aligns with WF | **Wireframes win** |
| **Profile / account** | Not listed | Profile dropdown | `/account/login` | `/login` | N/A | **Wireframes win** |
| **Language selector** | Not listed | EN placeholder (D8) | Drawer + desktop | Not implemented | N/A | **Wireframes win** |
| **Theme toggle** | Not listed | D7 placeholder | Drawer + desktop | Not implemented | Brand had moon icon | **Wireframes win** |
| **URL: `/blog`** | Implied `/blog` | `/blog` | `/blog` locked | `/blog` ✅ | `/blog` locked | **Aligned** |
| **URL: `/stories`** | Not used | **Not used** | **Not used** | Not used | N/A | **Aligned — no conflict** |
| **URL: `/destinations`** | N/A | Not in sitemap | Not in sitemap | Header + footer | N/A | **Remove from frontend** |
| **India region slugs** | Implied | Not in sitemap | Not in sitemap | Not present | N/A | **Reject zip** |
| **Keyboard a11y** | Stated | Per-component a11y | Per-component a11y | Not implemented | N/A | **Adopt principle** |
| **SEO URLs** | Stated | B2 slug rules | Same | Next.js routes TBD | N/A | **Adopt principle** |

---

## 9. Frontend Gap List (Post-Review)

Priority work to align `Header.tsx` with locked spec — **do not use zip IA as source:**

1. Replace flat nav with **Experiences ▾**, **Discover ▾**, Polo Forest, Plan, About (desktop).
2. Implement **UI-NAV-MEGA** (five pillars + featured cards).
3. Implement **UI-NAV-DROPDOWN** (Discover links).
4. Implement **UI-NAV-MOBILE-DRAWER** with accordions + sticky Plan Your Visit.
5. Add utilities: search, profile (`/account/login`), language, theme.
6. Remove `/destinations` from header (not in sitemap); use `/polo-forest` top-level.
7. Align scroll threshold to **80px** and height tokens **72px / 64px**.
8. Rename Blog nav label to **Stories & Insights** (keep `/blog` href).

---

## 10. Source Document Index

| Document | Path |
|----------|------|
| Zip — Navigation Architecture | `TEMP/PoloSafari_Navigation_Documentation/.../01_NAVIGATION_ARCHITECTURE.md` |
| Zip — Mega Menu Guide | `TEMP/PoloSafari_Navigation_Documentation/.../02_MEGA_MENU_GUIDE.md` |
| Zip — UX Notes | `TEMP/PoloSafari_Navigation_Documentation/.../03_UX_NOTES.md` |
| Wireframes — Global & Nav | `docs/ux-wireframes/01-global-foundation-and-navigation.md` |
| UI Design System | `docs/ui/00-ui-design-system.md` |
| UI HiFi — Mega Menu & Drawer | `docs/ui/02-key-pages-hifi.md` (Parts C–D) |
| Brand Review | `docs/brand/05-design-system-v1.1-review.md` |
| Frontend Header | `frontend/src/components/layout/Header.tsx` |
| Frontend Footer | `frontend/src/components/layout/Footer.tsx` |

---

**Prepared for:** Polo Safari experiential travel platform  
**Conclusion:** Treat zip navigation docs as **historical / out-of-scope reference**. Single source of truth for navigation remains **wireframes + UI design system**. Frontend scaffold should be updated toward that spec, not the zip.
