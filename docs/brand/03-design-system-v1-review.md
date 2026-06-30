# Polo Safari — Design System v1.0 Review

**Version:** 1.0.0  
**Status:** Brand research — guidelines extraction, reconciliation, and production readiness assessment  
**Source asset:** `TEMP/ChatGPT Image Jul 1, 2026, 03_35_01 AM.png` (Design System v1.0 infographic)  
**Cross-reference:** [01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md), [02-logo-svg-analysis.md](./02-logo-svg-analysis.md), [00-index.md](../ux-wireframes/00-index.md), [14-reference-design-analysis.md](../ux-wireframes/14-reference-design-analysis.md)  
**Companion:** [04-design-tokens.css](./04-design-tokens.css) — reconciled production token set  
**Last updated:** July 2026  

---

## Executive Summary

The **Polo Safari Design System v1.0** infographic is a well-structured visual direction document with strong layout discipline (grid, radius, typography pairing, section backgrounds) but **does not align with authoritative logo colors** or several **locked UX decisions**. It reads as an AI-generated or aspirational mood board rather than a logo-derived brand system.

| Dimension | Verdict |
|-----------|---------|
| **Overall production readiness** | **6 / 10** — adopt structure; reject/reconcile colors and IA |
| **Typography (Playfair + Inter)** | ✅ Adopt |
| **Grid & spacing** | ✅ Adopt (matches wireframes) |
| **Color palette** | ⚠️ Adapt — reconcile to SVG logo hex values |
| **Primary CTA color** | ❌ Reject Forest Green as primary — use Polo Blue `#005CA9` |
| **Experience taxonomy** | ❌ Reject Wildlife as 6th pillar |
| **Nav CTA copy** | ❌ Reject "Enquire Now" as primary — use "Plan Your Visit" / "Book Now" |
| **Glass effects** | ⚠️ Adapt sparingly (nav/search only) |

**Recommendation:** **Adopt the system skeleton** (type, grid, radius, shadow, button variants, icon style, section background rhythm) and **replace all color and conversion semantics** with logo truth + wireframe locks. See [04-design-tokens.css](./04-design-tokens.css).

---

## 1. Full Extraction — Design System v1.0

### 01. Color Palette

#### Primary Colors

| Swatch name | Hex | Stated role |
|-------------|-----|-------------|
| Forest Green | `#234A3A` | Primary CTA |
| Warm Ivory | `#F9F7F2` | Background |
| Charcoal | `#1F2521` | Text / Dark |

#### Secondary Colors

| Swatch name | Hex |
|-------------|-----|
| River Blue | `#2E7CBF` |
| Leaf Green | `#7DA85A` |
| Sky Blue | `#A9DCEC` |

#### Accent Colors

| Swatch name | Hex |
|-------------|-----|
| Adventure Gold | `#C69A3D` |
| Heritage Terracotta | `#8E433D` |
| Polo Lime | `#D7E64A` |

#### Background System

| Token name | Hex | Use |
|------------|-----|-----|
| Main | `#F9F7F2` | Default page surface |
| Nature | `#EEF4ED` | Ecology / education bands |
| Water | `#EEF7FB` | Adventure / river bands |
| Dark Experience | `#14261E` | Gallery, immersive dark sections |

---

### 02. Button Styles

| Variant | Default | Hover | Notes |
|---------|---------|-------|-------|
| **Primary** | Pill (`999px` radius), Forest Green `#234A3A` fill, white text, right arrow | Charcoal `#1F2521` fill | Solid filled CTA |
| **Secondary** | White fill, thin dark border, dark text, arrow | Light green/ivory tint | Outlined pill |
| **Ghost** | Transparent, dark text, arrow | Light ivory pill background | Text-forward |
| **Disabled** | Light grey `#E0E0E0` (approx.), grey text | — | Low contrast, non-interactive |

---

### 03. Card Styles (By Experience Type)

Six vertical cards: white surface, **colored top border**, outline icon, title, short description.

| Card | Border accent (visual) | Icon |
|------|------------------------|------|
| Educational Tours | Green | Leaf |
| Corporate Retreats | Dark green | People / group |
| Adventure Tours | Blue | Mountain |
| Heritage Journeys | Terracotta / red | Temple |
| Family Getaways | Gold | Family |
| Wildlife Experiences | Olive green | Paw print |

---

### 04. Typography

| Role | Typeface | Weights shown |
|------|----------|---------------|
| **Display / Heading** | Playfair Display | Bold, SemiBold, Medium |
| **Body / UI** | Inter | Regular, Medium, SemiBold |

| Text role | Hex |
|-----------|-----|
| Heading | `#1F2521` |
| Paragraph | `#5F6B64` |
| Muted | `#8A948F` |

> **Note:** The infographic does not specify type scale (px/rem sizes). Wireframes use role labels (`H1`, `H2`, overline) only.

---

### 05. Icon Style

- **Style:** Outline / line icons  
- **Stroke:** 2px  
- **Corners:** Rounded  
- **Aesthetic:** Minimal, nature/travel motifs  

**Examples shown:** leaf, mountain, group, temple, family, paw print, camera, map pin, warning, car, building.

---

### 06. Radius & Shadow

| Element | Radius |
|---------|--------|
| Cards | `24px` |
| Images | `28px` |
| Buttons | `999px` (full pill) |

**Shadow:** `0 12px 40px rgba(0, 0, 0, 0.08)`

---

### 07. Section Background Examples

| Section | Treatment |
|---------|-----------|
| Hero | Full-bleed cinematic photography + dark overlay |
| About | Warm Ivory `#F9F7F2` |
| Educational | Soft green (Nature band `#EEF4ED`) |
| Adventure | Water blue (`#EEF7FB`) |
| Gallery | Dark Experience `#14261E` |
| Testimonials | Warm Ivory |

---

### 08. Navigation — Desktop

| Zone | Content |
|------|---------|
| Left | Polo Safari full-color logo |
| Center | Home · Experiences · Destinations · Packages · About Us · Blog · Contact |
| Right | **"Enquire Now"** primary button + moon icon (dark mode toggle) |

---

### 09. Navigation — Mobile

| Zone | Content |
|------|---------|
| Left | Hamburger menu |
| Center | Logo |
| Right | **"Enquire Now"** + moon icon |

---

### 10. Grid System

| Property | Value |
|----------|-------|
| Columns | 12 |
| Max width | `1440px` |
| Content width | `1280px` |
| Gutter | `24px` |
| Base unit | `8px` |

---

### 11. Experience Category Colors

| Category | Hex |
|----------|-----|
| Education | `#7DA85A` |
| Corporate | `#234A3A` |
| Adventure | `#2E7CBF` |
| Heritage | `#8E433D` |
| Family | `#C69A3D` |
| **Wildlife** | `#6B8E4E` |

---

### 12. Color Usage Ratio

| Share | Color family |
|-------|--------------|
| 60% | Warm Ivory / White |
| 25% | Forest Green |
| 10% | Charcoal |
| 5% | Accent colors |

---

### 13. Glass Effect Examples

Three UI patterns with **subtle blur + 10–15% opacity**:

1. Search box (frosted field over photography)  
2. Floating CTA pill over hero  
3. Info card with translucent white fill  

---

### 14. CTA Examples

| Card | Headline | Action |
|------|----------|--------|
| Large hero CTA | "Explore the Unexplored" | **"Explore Experiences"** (primary button) |
| Medium — schools | "Plan Your School Trip" | **"Inquire Now →"** (text link) |
| Medium — corporate | "Corporate Retreats" | **"Get a Quote →"** (text link) |

---

## 2. Reconciliation Table — Guidelines vs Logo vs Wireframes

### 2.1 Color reconciliation

| Token / role | Guidelines v1.0 | Logo SVG (authoritative) | Wireframes / brand docs | **Reconciled decision** |
|--------------|-----------------|--------------------------|-------------------------|-------------------------|
| Primary CTA | Forest Green `#234A3A` | Polo Blue `#005CA9` | `WF-BTN-PRIMARY` → booking path | **Polo Blue `#005CA9`** |
| Primary hover | Charcoal `#1F2521` | `#004A88` (derived) | — | **`#004A88`** |
| Secondary brand | River Blue `#2E7CBF` | Polo Blue `#005CA9` | Links, info states | **Polo Blue** (merge roles) |
| Forest / nature green | `#234A3A`, Leaf `#7DA85A` | Forest Green `#00963F`, Lime `#7EAF39` | Education pillar | **Education: `#00963F`**; nature accents: `#7EAF39` |
| Heritage red | Terracotta `#8E433D` | Safari Red `#98211E` | Heritage pillar | **Safari Red `#98211E`** |
| Adventure accent | River Blue `#2E7CBF` | Kingfisher Orange `#EC6602` | Adventure pillar badge | **Orange `#EC6602`** (pillar); blue for water/map UI |
| Family accent | Adventure Gold `#C69A3D` | Canopy Lime `#7EAF39` | Family pillar | **Lime `#7EAF39`** (logo); gold reserved for badges only |
| Corporate accent | Forest Green `#234A3A` | River Slate `#346982` | Corporate pillar | **River Slate `#346982`** |
| Sky / water | Sky Blue `#A9DCEC` | Harnav Sky `#8FD0E1` | Map modules | **Harnav Sky `#8FD0E1`** |
| Page background | Warm Ivory `#F9F7F2` | JPG bg ~`#E8ECEE` | Editorial cream `#F5F3EF` | **Warm Ivory `#F9F7F2`** (guidelines) |
| Body text | Charcoal `#1F2521` | Temple Slate `#2C3E50` | WCAG-tested pairings | **Temple Slate `#2C3E50`** |
| Dark sections | Dark Experience `#14261E` | Night Forest `#1E2A24` | Footer, gallery bands | **`#1E2A24`** |
| Lime accent | Polo Lime `#D7E64A` | Sun Canopy `#E1DA10`, `#AFCA05` | Logo swirl only | **Logo-only** — not UI chrome |

### 2.2 Typography reconciliation

| Aspect | Guidelines v1.0 | Logo | Wireframes / reference | **Decision** |
|--------|-----------------|------|------------------------|--------------|
| Display font | Playfair Display | Custom illustrated "Polo" | Mindful Living editorial serif | ✅ **Adopt Playfair Display** |
| Body font | Inter | Tagline sans (custom) | `WF-TYPE-*` placeholders | ✅ **Adopt Inter** |
| Script face | — | "Safari" script in logo | Not for UI | **Logo-only** |
| Type scale | Not specified | — | Role labels only | **Define in CSS** (see `04-design-tokens.css`) |

### 2.3 Layout & components

| Aspect | Guidelines v1.0 | Wireframes | **Decision** |
|--------|-----------------|------------|--------------|
| Grid 12-col | ✅ 1440 / 1280 / 24 / 8px | ✅ Identical | ✅ **Adopt** |
| Card radius 24px | ✅ | Implied editorial cards | ✅ **Adopt** |
| Image radius 28px | ✅ | Cambodia-style rounded photos | ✅ **Adopt** |
| Button pills | ✅ | `WF-BTN-*` trio | ✅ **Adopt structure** |
| Shadow token | ✅ | Not specified | ✅ **Adopt** |
| Glass blur | Nav/search examples | Atelier Arc — sparing use | ⚠️ **Nav + Quick Search only** |

### 2.4 IA, navigation & conversion

| Aspect | Guidelines v1.0 | Wireframes (locked) | **Decision** |
|--------|-----------------|---------------------|--------------|
| Primary header CTA | "Enquire Now" | **"Plan Your Visit"** | ❌ Reject enquire as primary |
| Experience booking | Implied enquiry | `/plan/book/[slug]/dates` + login | **Book Now / Check Availability** |
| School CTA | "Inquire Now" | `/education#rfp` RFP form | **Request Proposal** (education) |
| Corporate CTA | "Get a Quote" | `/corporate#rfp` | ✅ **Adopt copy** for corporate only |
| Nav links | Home, Experiences, Destinations, Packages, About Us, Blog, Contact | Experiences▾, Discover▾, Polo Forest, Plan, About + utilities | **Follow wireframe IA** |
| Blog route | "Blog" | `/blog` (canonical) | **Blog** → `/blog`; nav label may read "Stories & Insights" |
| Packages | Top-level nav item | Packages section on homepage; book via experiences | **Under Experiences / Plan**, not top-level |
| Dark mode toggle | Moon icon in nav | `WF-THEME-TOGGLE` optional | ⚠️ Defer — not launch-critical |
| Language | Not shown | EN-only; `WF-NAV-LANG` | **English only** at launch |
| Login | Not shown | `WF-NAV-PROFILE` booking gate | **Add account menu** |

### 2.5 Experience taxonomy (five pillars)

| Guidelines category | Locked pillar? | Slug | **Decision** |
|--------------------|----------------|------|--------------|
| Educational Tours | ✅ | `education` | Map to Education & Ecology |
| Corporate Retreats | ✅ | `corporate` | Map to Corporate & MICE |
| Adventure Tours | ✅ | `adventure` | Map to Adventure |
| Heritage Journeys | ✅ | `heritage` | Map to Heritage & Culture |
| Family Getaways | ✅ | `family` | Map to Family |
| **Wildlife Experiences** | ❌ **Not a pillar** | — | **Reject as 6th category** — use as experience tag, gallery filter, or Adventure sub-theme (e.g. Night Safari) |

---

## 3. Critical Analysis

### 3.1 Logo color mismatch (high severity)

The guidelines position **muted Forest Green `#234A3A`** as the primary brand and CTA color. The authoritative SVG logo ([02-logo-svg-analysis.md](./02-logo-svg-analysis.md)) anchors identity on **vibrant Polo Blue `#005CA9`**, **Safari Red `#98211E`**, and **Forest Green `#00963F`** (small "o" only) — a fundamentally different temperature and saturation.

| Guidelines color | Δ from logo nearest | Issue |
|------------------|---------------------|-------|
| `#234A3A` "Forest Green" | ≠ `#00963F` (logo green) and ≠ `#005CA9` (logo blue) | Dark olive replaces logo primaries |
| `#2E7CBF` "River Blue" | ≠ `#005CA9` Polo Blue | Lighter, greener blue |
| `#8E433D` "Heritage Terracotta" | ≈ `#98211E` Safari Red (Δ RGB ~20) | Close hue family but duller |
| `#7DA85A` "Leaf Green" | ≈ `#7EAF39` Canopy Lime | Acceptable accent drift |
| `#D7E64A` "Polo Lime" | ≈ `#E1DA10` / `#AFCA05` | Usable as logo-adjacent accent only |

**Impact:** Building the UI in guidelines green will make the **full-color logo feel disconnected** on header and marketing surfaces. Users perceive the logo blues/reds as brand truth; the guidelines palette reads as a separate "eco-luxury" rebrand.

**Fix:** Primary interactive color = **Polo Blue**. Pillar accents = logo-derived tokens. Guidelines greens become **section background tints**, not primary chrome.

### 3.2 "Enquire Now" vs full online booking (high severity)

Locked decision #1 ([00-index.md](../ux-wireframes/00-index.md)): **Full online booking** with UPI/card at checkout and login gate.

The guidelines consistently push **enquiry-first language**:

- Nav: "Enquire Now"  
- School card: "Inquire Now"  
- No "Book Now", "Plan Your Visit", or payment trust copy  

This conflicts with:

- `WF-BOOKING-WIDGET` sticky sidebar on experience detail  
- `/plan/book/[slug]/*` four-step flow  
- Cambodia reference pattern: map-embedded **Book Tour** (adapted to login + UPI)  

**Assessment:** Not a total rejection — **dual CTA model is correct**:

| Context | CTA | Route |
|---------|-----|-------|
| Global header / bookable experiences | **Plan Your Visit** / **Book Now** | `/plan` or `/plan/book/[slug]/dates` |
| Corporate pillar | **Get a Quote** / **Request Proposal** | `/corporate#rfp` |
| Education pillar | **Request Proposal** | `/education#rfp` |
| General questions | **Contact Us** | `/contact` |

**Reject** "Enquire Now" as the **primary** nav CTA. Reserve enquiry language for non-bookable or RFP paths only.

### 3.3 Wildlife as 6th category vs five pillars (high severity)

Guidelines §03 and §11 define **six** experience types including **Wildlife Experiences** (`#6B8E4E`). Wireframes lock **five pillars**; Popular Destinations is geographic only.

**Assessment:** Wildlife is a **content theme** (night safari, birding, ecology) that spans Adventure and Education — not a product taxonomy pillar. Admin `categories` module is locked to five slugs.

**Recommendation:** Drop Wildlife card from category grid. Surface wildlife via:

- Experience tags (`night-safari`, `birding`)  
- Gallery filters  
- Adventure pillar hero imagery  

### 3.4 Reference direction alignment

| Reference | Guidelines alignment | Gap |
|-----------|---------------------|-----|
| **Cambodia (primary)** | ✅ Hero photography, rounded images, experience grid, section bands | Nav IA differs; guidelines lack itinerary/map modules |
| **Mindful Living (secondary)** | ✅ Playfair + Inter, editorial cream, dual CTAs, trust placement | Guidelines cream `#F9F7F2` vs "spa minimal" — acceptable with Polo photography |
| **Atelier Arc** | ✅ Glass nav/search | Guidelines show heavier glass — wireframes say sparing use |
| **Smirnovs** | ❌ Cottage watercolor tone | Guidelines are photography-forward — good |

**Typography pairing is the strongest alignment** with Mindful Living + wireframe editorial intent. **Color direction leans wellness-retreat green** rather than Gujarat safari blue/red logo identity.

### 3.5 Additional gaps for production

| Gap | Severity | Notes |
|-----|----------|-------|
| No form/input specs | Medium | Wireframes define `WF-INPUT-*` — not in guidelines |
| No type scale (px/rem) | Medium | Must derive from wireframe roles |
| No responsive breakpoints | Medium | Mobile nav shown; no tablet rules |
| No accessibility contrast audit | Medium | Forest green on ivory may pass; lime/gold fail as text |
| No logo usage rules | High | Shows full logo on light nav only |
| No payment / trust UI | High | Required for booking flow |
| Dark mode undefined | Low | Icon only — no token swap |
| Disabled button grey unspecified | Low | ~`#E0E0E0` observed |

---

## 4. Element-by-Element Recommendation

| # | Section | Verdict | Action |
|---|---------|---------|--------|
| 01 | Color Palette | **Adapt** | Replace primaries with logo SVG hex; keep ivory/nature/water/dark band structure |
| 02 | Button Styles | **Adopt** | Keep pill + arrow + 4 variants; primary fill = Polo Blue |
| 03 | Card Styles | **Adapt** | Five pillar cards only; logo-aligned border colors |
| 04 | Typography | **Adopt** | Playfair Display + Inter; add scale in tokens |
| 05 | Icon Style | **Adopt** | 2px outline rounded — map to Lucide or similar |
| 06 | Radius & Shadow | **Adopt** | As specified |
| 07 | Section Backgrounds | **Adopt** | Band system matches homepage pillar sections |
| 08–09 | Navigation | **Adapt** | Wireframe IA + "Plan Your Visit"; drop Packages/Blog labels |
| 10 | Grid System | **Adopt** | Matches wireframes exactly |
| 11 | Category Colors | **Adapt** | Five pillars; logo-derived hex |
| 12 | Color Usage Ratio | **Adapt** | Shift 25% "forest green" → 15% primary blue + 10% green accents |
| 13 | Glass Effects | **Adapt** | Nav + Quick Search only |
| 14 | CTA Examples | **Adapt** | Book / Explore / Request Proposal — not enquire-primary |

---

## 5. Production Readiness Rating

### Score: **6 / 10**

| Criterion | Score | Rationale |
|-----------|-------|-----------|
| Completeness of modules | 8/10 | 14 clear sections cover core UI |
| Logo fidelity | 3/10 | Primary palette diverges from SVG |
| UX decision alignment | 4/10 | Enquire-first, 6th pillar, nav IA drift |
| Wireframe compatibility | 7/10 | Grid, type, cards align |
| Reference direction fit | 7/10 | Editorial + travel structure sound |
| Implementation specificity | 5/10 | Missing type scale, forms, breakpoints, a11y |
| Token export readiness | 6/10 | Hex present but needs reconciliation |

**To reach 8+/10:** Reconcile colors to logo, remove Wildlife pillar, fix CTA semantics, add type scale + form tokens, document logo clear-space and knockout variants.

---

## 6. Summary Verdict

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ADOPT          Typography, grid, radius, shadow, button anatomy,       │
│                 icon style, section background rhythm, corporate quote  │
│                 CTA pattern                                             │
├─────────────────────────────────────────────────────────────────────────┤
│  ADAPT          All colors (logo truth), pillar mapping (5 not 6),      │
│                 nav IA, primary CTA copy, glass scope, color ratio      │
├─────────────────────────────────────────────────────────────────────────┤
│  REJECT         Forest Green as primary brand/CTA, Wildlife as pillar,  │
│                 "Enquire Now" as global primary CTA, enquiry-only       │
│                 booking implication                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Related Documents

| Document | Relationship |
|----------|--------------|
| [04-design-tokens.css](./04-design-tokens.css) | Reconciled CSS custom properties — implementation source |
| [01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md) | Logo palette and UI recommendations |
| [02-logo-svg-analysis.md](./02-logo-svg-analysis.md) | Authoritative hex values |
| [00-index.md](../ux-wireframes/00-index.md) | Locked product decisions |
| [14-reference-design-analysis.md](../ux-wireframes/14-reference-design-analysis.md) | Cambodia + Mindful Living direction |
| [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md) | Header CTA, grid, components |

---

**Document path:** `docs/brand/03-design-system-v1-review.md`  
**Prepared for:** Polo Safari experiential travel platform — design system v1.0 → production token handoff
