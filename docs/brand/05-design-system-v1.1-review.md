# Polo Safari — Design System v1.0 Review (Updated)

**Version:** 1.1.0  
**Status:** Brand research — delta analysis vs prior extraction + production readiness re-assessment  
**Source asset (updated):** `TEMP/ChatGPT Image Jul 1, 2026, 03_40_09 AM.png`  
**Prior review:** [03-design-system-v1-review.md](./03-design-system-v1-review.md) (from `03_35_01 AM.png`)  
**Cross-reference:** [01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md), [02-logo-svg-analysis.md](./02-logo-svg-analysis.md), [00-index.md](../ux-wireframes/00-index.md), [04-design-tokens.css](./04-design-tokens.css)  
**Last updated:** July 2026  

---

## Executive Summary

The **03:40 AM** revision of the Design System v1.0 infographic is a **polish pass**, not a strategic realignment. It adds structural specificity (multi-tier shadows, radius scale, explicit hover hex values, footer tagline bar, full-color category cards) and reorganizes the color palette (River Blue and Polo Lime promoted to Primary; new **Wings** beige token). **Critical conflicts with logo SVG and locked wireframes are unchanged.**

| Dimension | v1.0 (03:35) | v1.0 (03:40) | Verdict |
|-----------|--------------|--------------|---------|
| **Production readiness** | **6 / 10** | **6.5 / 10** | Marginal ↑ — more tokens; same blockers |
| **Typography (Playfair + Inter)** | ✅ Adopt | ✅ Adopt | Unchanged |
| **Grid & spacing** | ✅ Adopt | ✅ Adopt | Unchanged |
| **Color palette vs logo** | ⚠️ Adapt | ⚠️ Adapt (worse on blue) | River Blue drifted further from Polo Blue |
| **Primary CTA color** | ❌ Forest Green | ❌ Forest Green | Still reject — use `#005CA9` |
| **Experience taxonomy** | ❌ 6 pillars | ❌ 6 pillars | Still reject Wildlife as pillar |
| **Nav CTA copy** | ❌ Enquire Now | ❌ Enquire Now | Still reject — use Plan Your Visit / Book Now |
| **Shadow / radius spec** | Partial | ✅ Improved | Adopt tiered shadows + radius scale |
| **Footer brand bar** | Not shown | ✅ New | Adopt copy pattern |

**Recommendation:** **Adopt structural refinements** (shadow tiers, radius scale, hover states, footer tagline, card fill treatment as optional variant). **Continue rejecting** Forest Green primary, Enquire-first IA, and Wildlife pillar. **Reconcile all colors to logo SVG** via [04-design-tokens.css](./04-design-tokens.css) — no change to primary interactive semantics.

---

## 1. Full Extraction — Design System v1.0 (03:40 AM)

### 01. Color Palette

#### Primary Colors

| Swatch name | Hex | Stated role |
|-------------|-----|-------------|
| Forest Green | `#234A3A` | Primary CTA / brand green |
| Warm Ivory | `#F9F7F2` | Background |
| Charcoal | `#1F2521` | Text / dark |
| River Blue | `#2E7C8F` | Primary palette (promoted from secondary) |
| Polo Lime | `#D7E64A` | Primary palette (promoted from accent) |

#### Secondary Colors

| Swatch name | Hex |
|-------------|-----|
| Leaf Green | `#7DA85A` |
| Sky Blue | `#A5DCEC` |
| Adventure Gold | `#CB9A3D` |
| Heritage Terracotta | `#8E433D` |
| Wings | `#EDE6D6` |

> **Note:** "Wings" is a new beige/sand neutral — likely named for logo wing/bird tones. Not present in 03:35 extraction.

#### Background System

| Token name | Hex | Use |
|------------|-----|-----|
| Main | `#F9F7F2` | Default page surface |
| Nature | `#EEF4ED` | Ecology / education bands |
| Water | `#E6F7FB` | Adventure / river bands |
| Dark Experience | `#14261E` | Gallery, immersive dark sections |

---

### 02. Button Styles

| Variant | Default | Hover | Notes |
|---------|---------|-------|-------|
| **Primary** | Pill, Forest Green `#234A3A`, white text + arrow ("Explore Experiences") | Charcoal `#1F2521` | Solid filled CTA |
| **Secondary** | White fill, **Forest Green border + text**, arrow ("View Details") | Nature band `#EEF4ED` | Outlined pill |
| **Ghost** | Transparent, Forest Green text, arrow ("Learn More") | `#EEF4ED` background | Text-forward |
| **Disabled** | Light grey `#D1D1D1`, white text | — | Lower contrast than 03:35 |

---

### 03. Card Styles (By Experience Type)

Six vertical cards with **full category-color backgrounds** (not white + top border), outline icon, title, description, **"Explore More →"** link.

| Card | Background accent | Icon |
|------|-------------------|------|
| Educational Tours | Leaf Green `#7DA85A` | Book |
| Corporate Retreats | Forest Green `#234A3A` | People / group |
| Adventure Tours | River Blue `#2E7C8F` | Mountain |
| Heritage Journeys | Heritage Terracotta `#8E433D` | Temple |
| Family Getaways | Adventure Gold `#CB9A3D` | Family |
| Wildlife Experiences | Dark Olive `#5B6E4E` | Deer |

---

### 04. Typography

| Role | Typeface | Weights shown |
|------|----------|---------------|
| **Display / Heading** | Playfair Display | Bold, SemiBold |
| **Body / UI** | Inter | Regular, Medium |

Text colors not explicitly labeled in 03:40 panel (03:35 inferred Charcoal `#1F2521`, paragraph `#5F6B64`, muted `#8A948F` from adjacent sections).

---

### 05. Icon Style

- **Style:** Outline / line icons  
- **Stroke:** 2px  
- **Corners:** Rounded  
- **Aesthetic:** Minimal, nature/travel motifs  

**Examples shown:** book, group, mountain, temple, deer, camera, map pin, tent.

---

### 06. Radius & Shadow

#### Radius scale (new in 03:40)

| Token | Value |
|-------|-------|
| Small | `8px` |
| Medium | `16px` |
| Large | `24px` |
| XL | `32px` |

#### Shadow tiers (new in 03:40)

| Tier | Value |
|------|-------|
| **Soft** | `0 4px 20px rgba(0, 0, 0, 0.06)` |
| **Medium** | `0 8px 30px rgba(0, 0, 0, 0.08)` |
| **Large** | `0 16px 40px rgba(0, 0, 0, 0.10)` |

> 03:35 specified a single shadow (`0 12px 40px rgba(0,0,0,0.08)`) and card/image/button radii (`24px` / `28px` / `999px` pill) without a named scale.

---

### 07. Section Background Examples

| Section | Treatment |
|---------|-----------|
| Hero | Full-bleed cinematic photography + dark overlay |
| About | Warm Ivory `#F9F7F2` |
| Educational | Soft green (Nature `#EEF4ED`) |
| Adventure | Water blue (`#E6F7FB`) |
| Gallery | Dark Experience `#14261E` |
| Testimonials | Warm Ivory |

---

### 08. Navigation — Desktop

| Zone | Content |
|------|---------|
| Left | Polo Safari full-color logo |
| Center | Home · Experiences · Destinations · Packages · About Us · Blog · Contact |
| Right | **"Enquire Now"** (Forest Green) + **hamburger icon** (far right) |

> **Change vs 03:35:** Moon/dark-mode toggle replaced by hamburger on desktop right edge.

---

### 09. Navigation — Mobile

| Zone | Content |
|------|---------|
| Left | Hamburger menu |
| Center | Logo |
| Right | **"Enquire Now"** + **search icon** |

> **Change vs 03:35:** Moon icon → search icon.

---

### 10. Grid System

| Property | Value |
|----------|-------|
| Columns | 12 |
| Max width | `1440px` |
| Content width | `1280px` |
| Gutter | `24px` |
| Base unit | `8px` |

Unchanged from 03:35.

---

### 11. Experience Category Colors

| Category | Hex |
|----------|-----|
| Education | `#7DA85A` |
| Corporate | `#234A3A` |
| Adventure | `#2E7C8F` |
| Heritage | `#8E433D` |
| Family | `#CB9A3D` |
| **Wildlife** | `#5B6E4E` |

---

### 12. Color Usage Ratio

| Share | Color family |
|-------|--------------|
| 60% | Warm Ivory / White |
| 25% | Forest Green |
| 10% | Charcoal |
| 5% | Accent colors |

Unchanged from 03:35.

---

### 13. Glass Effect Examples

Three UI patterns — **subtle blur + 10–15% opacity**:

1. Search box (frosted field over photography)  
2. Floating CTA pill over hero  
3. Info card with translucent white fill  

Unchanged intent from 03:35.

---

### 14. CTA Examples

| Card | Headline | Action |
|------|----------|--------|
| Large hero CTA | "Explore the Unexplored" | **"Explore Experiences →"** (primary button) |
| Medium — schools | "Plan Your School Trip" | **"Inquire Now →"** (text link) |
| Medium — corporate | "Corporate Retreats" | **"Get a Quote →"** (text link) |

Unchanged from 03:35.

---

### 15. Footer Brand Bar (new in 03:40)

Thin footer strip:

- **Left:** `NATURE. CULTURE. ADVENTURE. TOGETHER.` (leaf icon separator)  
- **Right:** `COME. STAY. EXPLORE.`  

Aligns with logo tagline copy (period-separated in logo SVG: `COME.STAY.EXPLORE`).

---

## 2. Delta Table — v1.0 (03:35) vs v1.0 (03:40)

| Section | Attribute | 03:35 AM | 03:40 AM | Δ severity | Notes |
|---------|-----------|----------|----------|------------|-------|
| **01 Colors** | River Blue hex | `#2E7CBF` | `#2E7C8F` | Medium | Shifted toward teal; **farther from logo Polo Blue `#005CA9`** |
| **01 Colors** | Sky Blue hex | `#A9DCEC` | `#A5DCEC` | Low | Minor RGB drift |
| **01 Colors** | Adventure Gold hex | `#C69A3D` | `#CB9A3D` | Low | Minor warm shift |
| **01 Colors** | Polo Lime placement | Accent tier | **Primary tier** | Low | Organizational only |
| **01 Colors** | River Blue placement | Secondary tier | **Primary tier** | Low | Organizational only |
| **01 Colors** | Wings beige | — | **`#EDE6D6`** | New | New secondary neutral; useful for warm surfaces |
| **01 Colors** | Water background | `#EEF7FB` | `#E6F7FB` | Low | Slightly more saturated blue tint |
| **01 Colors** | Nature background | `#EEF4ED` | `#EEF4ED` | — | Unchanged |
| **01 Colors** | Forest Green, Ivory, Charcoal, Terracotta | Same hex | Same hex | — | Core palette stable |
| **02 Buttons** | Secondary border color | Dark/black border | **Forest Green border** | Low | Stronger green brand lock-in |
| **02 Buttons** | Secondary/Ghost hover | Light green/ivory (approx.) | **`#EEF4ED` explicit** | Low | Now matches Nature band |
| **02 Buttons** | Disabled bg | `#E0E0E0` (approx.) | **`#D1D1D1`** | Low | Slightly darker grey |
| **02 Buttons** | Secondary label | Generic outlined | **"View Details"** | Low | Copy only |
| **03 Cards** | Card surface treatment | White + colored top border | **Full category-color fill** | Medium | Visual treatment change; same taxonomy |
| **03 Cards** | Wildlife accent | `#6B8E4E` | `#5B6E4E` | Low | Darker olive |
| **03 Cards** | Adventure accent | `#2E7CBF` | `#2E7C8F` | Medium | Follows River Blue shift |
| **03 Cards** | CTA link copy | "Explore More →" | "Explore More →" | — | Unchanged |
| **04 Typography** | Pairing | Playfair + Inter | Playfair + Inter | — | Unchanged |
| **05 Icons** | Style spec | 2px outline rounded | 2px outline rounded | — | Unchanged; deer replaces paw in examples |
| **06 Radius** | Scale | 24 / 28 / pill only | **8 / 16 / 24 / 32 scale** | New | Production improvement |
| **06 Shadow** | Tiers | Single `0 12px 40px 0.08` | **Soft / Medium / Large** | New | Production improvement |
| **07 Sections** | Band colors | Same family | Water band hex updated | Low | See above |
| **08 Nav desktop** | Right utility | Enquire + **moon (dark mode)** | Enquire + **hamburger** | Low | IA ambiguity; neither matches wireframes |
| **09 Nav mobile** | Right utility | Enquire + moon | Enquire + **search** | Low | Search aligns with `WF-NAV-SEARCH` |
| **10 Grid** | All values | 12 / 1440 / 1280 / 24 / 8 | Same | — | Unchanged |
| **11 Categories** | Pillar count | 6 (incl. Wildlife) | 6 (incl. Wildlife) | — | **Conflict persists** |
| **12 Ratio** | Distribution | 60/25/10/5 | Same | — | Unchanged |
| **13 Glass** | Spec | 10–15% opacity blur | Same | — | Unchanged |
| **14 CTAs** | Copy set | Explore / Inquire / Get Quote | Same | — | **Enquire conflict persists** |
| **15 Footer** | Brand bar | Not shown | **NATURE.CULTURE.ADVENTURE + tagline** | New | Adopt for footer micro-copy |

### Summary of meaningful changes

1. **Structural spec improved** — radius scale, shadow tiers, explicit hover hex values.  
2. **Palette reorganized** — River Blue + Polo Lime promoted; Wings beige added.  
3. **River Blue hex drift** — `#2E7CBF` → `#2E7C8F` moves away from logo `#005CA9`.  
4. **Card visual pattern** — full-color category cards vs bordered white cards.  
5. **Nav utilities** — dark-mode moon removed; search on mobile.  
6. **Footer tagline bar** — new brand rhythm element.  
7. **No resolution** of logo color, booking CTA, or five-pillar taxonomy conflicts.

---

## 3. Critical Conflict Re-check

### 3.1 Logo SVG mismatch (high severity — unchanged)

Authoritative logo colors ([02-logo-svg-analysis.md](./02-logo-svg-analysis.md)):

| Logo token | Hex | Guidelines nearest | Match? |
|------------|-----|-------------------|--------|
| Polo Blue | `#005CA9` | River Blue `#2E7C8F` | ❌ Δ significant — guidelines blue is teal-muted |
| Safari Red | `#98211E` | Heritage Terracotta `#8E433D` | ⚠️ Same hue family, duller (−Δ RGB ~20) |
| Forest Green | `#00963F` | Forest Green `#234A3A` | ❌ Logo green is vibrant; guidelines green is dark olive |
| Canopy Lime | `#7EAF39` | Leaf Green `#7DA85A` | ⚠️ Acceptable accent drift |
| Kingfisher Orange | `#EC6602` | Adventure Gold `#CB9A3D` | ❌ Gold replaces orange for Adventure pillar |
| River Slate | `#346982` | River Blue `#2E7C8F` | ⚠️ Different role assignment |

**03:40 impact vs 03:35:** River Blue shift **widens** the gap to Polo Blue. Building UI in guidelines teal-green will still disconnect the full-color logo on header surfaces.

**Reconciled decision (unchanged):** Primary interactive = **Polo Blue `#005CA9`**. Pillar accents = logo-derived. Guidelines greens/teals = section tints only.

### 3.2 "Enquire Now" vs full online booking (high severity — unchanged)

Locked decision #1 ([00-index.md](../ux-wireframes/00-index.md)): **Full online booking** with UPI/card, login gate.

| Surface | 03:40 guidelines | Wireframe lock | Status |
|---------|------------------|----------------|--------|
| Global header CTA | **Enquire Now** | **Plan Your Visit** → `/plan` | ❌ Conflict |
| Experience detail | Not shown | **Book Now** → `/plan/book/[slug]/dates` | ❌ Missing |
| School CTA | Inquire Now | **Request Proposal** → `/education#rfp` | ❌ Conflict |
| Corporate CTA | Get a Quote | **Request Proposal** → `/corporate#rfp` | ⚠️ Acceptable variant |

**Dual CTA model still required** — reject Enquire as global primary.

### 3.3 Wildlife as 6th category vs five pillars (high severity — unchanged)

Six experience cards including **Wildlife Experiences** (`#5B6E4E`) vs locked five slugs: `heritage`, `education`, `corporate`, `family`, `adventure`.

**Recommendation unchanged:** Wildlife = content tag / gallery filter / Adventure sub-theme — not admin category pillar.

### 3.4 Navigation IA drift (medium severity — unchanged)

| Guidelines nav | Wireframe IA |
|----------------|--------------|
| Home, Experiences, Destinations, Packages, About Us, Blog, Contact | Experiences▾, Discover▾, Polo Forest, Plan, About + utilities |
| Packages (top-level) | Under Experiences / Plan |
| Blog | **Blog** → `/blog` (legacy `/stories` → 301 redirect) |

---

## 4. Reconciliation — Updated Guidelines vs Logo vs Wireframes

| Token / role | 03:40 guidelines | Logo SVG | Wireframes | **Reconciled (04-design-tokens.css)** |
|--------------|------------------|----------|------------|--------------------------------------|
| Primary CTA | Forest Green `#234A3A` | Polo Blue `#005CA9` | Book / Plan Your Visit | **`#005CA9`** |
| Primary hover | Charcoal `#1F2521` | `#004A88` | — | **`#004A88`** |
| Adventure pillar | River Blue `#2E7C8F` | Kingfisher Orange `#EC6602` | Adventure badge | **`#EC6602`** |
| Education pillar | Leaf Green `#7DA85A` | Forest Green `#00963F` | Education band | **`#00963F`** |
| Heritage pillar | Terracotta `#8E433D` | Safari Red `#98211E` | Heritage band | **`#98211E`** |
| Corporate pillar | Forest Green `#234A3A` | River Slate `#346982` | Corporate band | **`#346982`** |
| Family pillar | Gold `#CB9A3D` | Canopy Lime `#7EAF39` | Family band | **`#7EAF39`** |
| Water UI / map | Sky Blue `#A5DCEC` | Harnav Sky `#8FD0E1` | Map modules | **`#8FD0E1`** |
| Warm neutral | Wings `#EDE6D6` | — | Editorial warmth | **`#EDE6D6`** as optional `--color-surface-warm` |
| Water band bg | `#E6F7FB` | — | Adventure sections | **`#E6F7FB`** (updated from `#EEF7FB`) |
| Shadow system | Soft / Med / Large | — | — | **Adopt all three tiers** |
| Radius scale | 8 / 16 / 24 / 32 | — | Cards 24, images 28 | **Adopt scale**; keep image at 28px |

---

## 5. Element-by-Element Recommendation (Updated)

| # | Section | v1.0 (03:35) | v1.0 (03:40) | Action |
|---|---------|--------------|--------------|--------|
| 01 | Color Palette | Adapt | Adapt | Replace primaries with logo hex; adopt Wings + water band shift |
| 02 | Button Styles | Adopt structure | Adopt structure | Keep anatomy; primary fill = Polo Blue; hover states from 03:40 |
| 03 | Card Styles | Adapt (5 pillars) | Adapt (5 pillars) | Prefer bordered white cards for readability; optional full-fill hero variant |
| 04 | Typography | Adopt | Adopt | Unchanged |
| 05 | Icon Style | Adopt | Adopt | Unchanged |
| 06 | Radius & Shadow | Adopt | **Adopt++** | Add 8/16/32 scale + three shadow tiers |
| 07 | Section Backgrounds | Adopt | Adopt | Update water band to `#E6F7FB` |
| 08–09 | Navigation | Adapt | Adapt | Wireframe IA + Plan Your Visit; mobile search ✅ |
| 10 | Grid System | Adopt | Adopt | Unchanged |
| 11 | Category Colors | Adapt (5) | Adapt (5) | Logo-derived hex; drop Wildlife |
| 12 | Color Usage Ratio | Adapt | Adapt | Shift 25% green → 15% blue + 10% green accents |
| 13 | Glass Effects | Adapt sparingly | Adapt sparingly | Unchanged |
| 14 | CTA Examples | Adapt | Adapt | Book / Explore / Request Proposal |
| 15 | Footer bar | — | **Adopt** | Tagline micro-copy pattern |

---

## 6. Production Readiness Rating

### Score: **6.5 / 10** (was **6 / 10**)

| Criterion | 03:35 | 03:40 | Rationale |
|-----------|-------|-------|-----------|
| Completeness of modules | 8/10 | **8.5/10** | Shadow tiers, radius scale, footer bar |
| Logo fidelity | 3/10 | **2.5/10** | River Blue drift worsens Polo Blue gap |
| UX decision alignment | 4/10 | 4/10 | Enquire + Wildlife unchanged |
| Wireframe compatibility | 7/10 | **7.5/10** | Mobile search aligns; nav IA still drifts |
| Reference direction fit | 7/10 | 7/10 | Editorial structure sound |
| Implementation specificity | 5/10 | **6/10** | Explicit hover hex, shadow tiers |
| Token export readiness | 6/10 | **6.5/10** | More named tokens; still needs reconciliation |

**+0.5 overall** for structural token improvements. **Not 7+/10** until colors reconcile to logo, Wildlife removed, and CTA semantics fixed.

**To reach 8+/10:** Same as 03:35 review — logo-aligned palette, five pillars, booking CTAs, type scale in Figma, form specs, logo clear-space rules.

---

## 7. Summary Verdict

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ADOPT          Typography, grid, radius SCALE, shadow TIERS, button    │
│                 anatomy + explicit hovers, icon style, section bands,   │
│                 footer tagline bar, mobile search utility, corporate    │
│                 quote CTA pattern                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  ADAPT          All colors (logo truth), five pillars not six, nav IA,  │
│                 primary CTA copy, glass scope, card fill vs border    │
│                 variant, color ratio, Wings as warm surface token       │
├─────────────────────────────────────────────────────────────────────────┤
│  REJECT         Forest Green as primary brand/CTA, Wildlife as pillar,  │
│                 "Enquire Now" as global primary CTA, enquiry-only       │
│                 booking implication, River Blue as logo substitute      │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Changes Applied to `04-design-tokens.css`

Based on 03:40 structural adoptions (logo-aligned primaries **unchanged**):

| Token | Change | Source |
|-------|--------|--------|
| `--color-surface-water` | `#eef7fb` → `#e6f7fb` | 03:40 Water background band |
| `--color-surface-warm` | **Added** `#ede6d6` | 03:40 Wings secondary |
| `--radius-sm/md/lg/xl` | **Added** 8 / 16 / 24 / 32px | 03:40 radius scale |
| `--shadow-soft/medium/large` | **Added** three tiers | 03:40 shadow spec |
| `--shadow-card` | Maps to `--shadow-medium` | Backward compat |
| `--color-disabled-bg` | `#e0e0e0` → `#d1d1d1` | 03:40 disabled button |

Primary (`#005CA9`), pillar accents, and header CTA semantics **not changed** — logo + wireframes remain authoritative.

---

## 9. Related Documents

| Document | Relationship |
|----------|--------------|
| [03-design-system-v1-review.md](./03-design-system-v1-review.md) | Prior extraction (03:35 AM) |
| [04-design-tokens.css](./04-design-tokens.css) | Reconciled implementation tokens |
| [01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md) | Logo palette recommendations |
| [02-logo-svg-analysis.md](./02-logo-svg-analysis.md) | Authoritative hex values |
| [00-index.md](../ux-wireframes/00-index.md) | Locked product decisions |

---

**Document path:** `docs/brand/05-design-system-v1.1-review.md`  
**Prepared for:** Polo Safari experiential travel platform — design system v1.0 (03:40) delta review → production handoff
