# Polo Safari — Logo & Brand Color Analysis

**Version:** 1.1.0  
**Status:** Brand research — asset inventory and design token recommendations  
**Source assets:** `TEMP/Polo-SafariLogo/` (raster), `docs/brand/Polo S logo CDR.svg` (vector)  
**Cross-reference:** [02-logo-svg-analysis.md](./02-logo-svg-analysis.md) (authoritative hex values), [14-reference-design-analysis.md](../ux-wireframes/14-reference-design-analysis.md), [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md)  
**Last updated:** July 2026  

---

## Executive Summary

The Polo Safari brand assets include **two raster files** plus an **authoritative SVG vector export** (`docs/brand/Polo S logo CDR.svg`). The logo is a **rich combination mark** (illustrated wordmark + abstract circular swirl + kingfisher + fish + tagline) with a vibrant, nature-forward palette anchored by **Polo Blue** and **Safari Red**.

> **Color authority:** Hex values below updated from SVG analysis ([02-logo-svg-analysis.md](./02-logo-svg-analysis.md)). Raster-sampled values differed due to JPEG/PNG compression; SVG supersedes raster for design tokens.

| Role | Recommended token | Hex (SVG) | RGB |
|------|-------------------|-----------|-----|
| **Primary** | Polo Blue | `#005CA9` | `rgb(0, 92, 169)` |
| **Secondary** | Forest Green | `#00963F` | `rgb(0, 150, 63)` |
| **Accent — Heritage** | Safari Red | `#98211E` | `rgb(152, 33, 30)` |
| **Accent — Nature** | Canopy Lime | `#7EAF39` | `rgb(126, 175, 57)` |
| **Accent — Water/Sky** | Harnav Sky | `#8FD0E1` | `rgb(143, 208, 225)` |
| **Accent — Warmth** | Kingfisher Orange | `#EC6602` | `rgb(236, 102, 2)` |
| **Neutral — Surface** | Mist Stone | `#E8ECEE` | `rgb(232, 236, 238)` |
| **Neutral — Text** | Temple Slate | `#2C3E50` | `rgb(44, 62, 80)` |
| **Neutral — Dark** | Night Forest | `#1E2A24` | `rgb(30, 42, 36)` |

**Key recommendations:**

1. **Use the SVG for web** — vector source available (~12.7 KB, `viewBox="0 0 449.9 227.2"`); split into header/favicon variants before production (see [02-logo-svg-analysis.md](./02-logo-svg-analysis.md)).
2. **Use the full logo on light backgrounds** (`Polosafari Logo.jpg` treatment); the PNG-on-black version suits dark footers, hero scrims, and print on dark stock.
3. **Create simplified variants** — favicon, mobile header, and transparent-over-hero nav require a mark-only or wordmark-only version; the full lockup is too detailed below ~120px width.
4. **Align UI tokens with wireframe direction** — Cambodia-style clean travel IA + Mindful Living editorial typography; **restrict UI palette to 2–3 logo colors** plus neutrals; reserve multi-color swirl for logo/mark only, not interface chrome.
5. **Fix accessibility gaps** — Safari Red and script tagline fail contrast on black/dark photography; use Polo Blue or white knockouts on dark backgrounds.

---

## 1. Asset Inventory

**Raster folder:** `TEMP/Polo-SafariLogo/`  
**Vector file:** `docs/brand/Polo S logo CDR.svg`

| File | Format | Dimensions | Size | Background | Notes |
|------|--------|------------|------|------------|-------|
| `Polo S logo CDR.svg` | SVG (vector) | viewBox 449.9 × 227.2 | ~12.7 KB | **Transparent** | Adobe Illustrator export; full horizontal lockup; authoritative colors |
| `PoloS Logo.png` | PNG (raster) | 4500 × 4500 px | ~639 KB | **Solid black** (`#000000`) | High-res master; suitable for dark-bg and print prep |
| `Polosafari Logo.jpg` | JPEG (raster) | 623 × 623 px | ~24 KB | **Light grey-blue** (~`#E0E8E8`) | Web-friendly light-bg variant; compression artifacts at edges |

### Missing asset types (gaps)

| Expected | Status | Impact |
|----------|--------|--------|
| SVG | ✅ Present | Full lockup only — needs split variants |
| AI / EPS / CDR source | ❌ Not in repo | No editable source for designers/print vendors |
| PDF | ❌ Not present | No print-ready vector lockup |
| Favicon ICO / PNG set | ❌ Not present | Derive from swirl mark crop (see [02-logo-svg-analysis.md](./02-logo-svg-analysis.md)) |
| Monochrome / knockout variants | ❌ Not present | Required for hero-overlay header, embroidery |
| Stacked lockup | ❌ Not present | Only horizontal composition exists |
| Wordmark-only / mark-only SVG | ❌ Not present | Needed for header, app icon, social avatars |

---

## 2. Logo Structure Analysis

### 2.1 Components

```
┌─ POLO SAFARI LOGO ANATOMY ─────────────────────────────────────────────────┐
│                                                                             │
│  [Kingfisher]──┐                                                            │
│                │   P  o  l  [SWIRL MARK]                          TM       │
│                └── (blue serif P with flourish)  (replaces final "o")    │
│                                                                             │
│                Safari  ──────────  COME.STAY.EXPLORE                       │
│                (red script)         (red caps sans tagline)                 │
│                ↑ fish forms "i"                                             │
│                ↑ blue wave underline                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Element | Description |
|---------|-------------|
| **Mark (symbol)** | Large circular swirl of overlapping petal/leaf shapes — yellow, lime, forest green, sky blue, maroon. Functions as the second "o" in "Polo". |
| **Wordmark — "Polo"** | Eclectic mix: ornate serif **P** (blue), small green circle **o**, block sans **l**. Highly decorative, not a single typeface. |
| **Wordmark — "Safari"** | Hand-drawn / brush script in deep red; organic, adventurous tone. |
| **Illustrative accents** | Kingfisher perched on P flourish; leaping fish forms the **i** in Safari; blue wave under Safari. |
| **Tagline** | `COME.STAY.EXPLORE` — thin all-caps sans-serif, same red family as Safari. |
| **Legal** | ™ symbol top-right of swirl mark. |

### 2.2 Typography hints

The logo does **not** specify a single commercial typeface — it uses custom/illustrated letterforms. For the **website design system** (per wireframes + reference analysis), typography should be **separate from the logo**:

| Logo element | Website analogue (recommended) |
|--------------|-------------------------------|
| "Polo" serif flourish | **Editorial serif display** — e.g. Fraunces, Lora, or Playfair Display (Mindful Living reference) |
| "Safari" script | **Not used in UI** — reserve script for logo/brand lockups only |
| Tagline sans | **UI sans body** — Inter (wireframe placeholder) or similar clean grotesk |
| Caps tagline style | **Overline labels** — `WF-TYPE-OVERLINE` pattern from wireframes |

### 2.3 Variants observed

| Variant | File | Use case |
|---------|------|----------|
| **Light background (default digital)** | `Polosafari Logo.jpg` | Header on white/cream, documents, light UI |
| **Dark background** | `PoloS Logo.png` | Footer, dark hero scrim, merchandise, night-safari campaigns |
| **Horizontal lockup** | Both files | Single horizontal composition — wordmark left, mark + tagline right |
| **Stacked / vertical** | ❌ Not provided | Would help mobile header and square social formats |
| **Mark only (swirl)** | ❌ Not provided | Favicon, app icon candidate |
| **Wordmark only** | ❌ Not provided | Narrow header, co-branding lockups |

---

## 3. Extracted Brand Colors

> **Authoritative source:** SVG style block in `Polo S logo CDR.svg`. Full analysis in [02-logo-svg-analysis.md](./02-logo-svg-analysis.md). Raster values retained below for reference only.

### 3.1 Core logo colors (SVG — canonical)

| Name | Hex | RGB | Role in logo |
|------|-----|-----|--------------|
| **Polo Blue** | `#005CA9` | `0, 92, 169` | P, l, wave, kingfisher body |
| **Safari Red** | `#98211E` | `152, 33, 30` | Safari script, tagline, swirl petal |
| **Sun Canopy** | `#E1DA10` | `225, 218, 16` | Yellow swirl petal |
| **Harnav Sky** | `#8FD0E1` | `143, 208, 225` | Light blue swirl, water tones |
| **Canopy Lime** | `#7EAF39` | `126, 175, 57` | Green swirl petal |
| **Yellow-Green Accent** | `#AFCA05` | `175, 202, 5` | Swirl highlight petal |
| **Forest Green** | `#00963F` | `0, 150, 63` | Small "o" |
| **Kingfisher Orange** | `#EC6602` | `236, 102, 2` | Bird beak |
| **Kingfisher Magenta** | `#E5007D` | `229, 0, 125` | Bird breast accent |
| **River Slate** | `#346982` | `52, 105, 130` | Bird detail |
| **Deep Teal** | `#134152` | `19, 65, 82` | Bird shadow |

### 3.1b Raster-sampled values (superseded)

| Name | Raster hex | SVG hex | Notes |
|------|------------|---------|-------|
| Polo Blue | `#2060A8` | `#005CA9` | Raster anti-aliasing shifted blue |
| Safari Red | `#982028` | `#98211E` | Near match |
| Forest Green | `#30A050` | `#00963F` | Raster sampled lighter |
| Canopy Lime | `#88B050` | `#7EAF39` | Raster merged two SVG greens |

### 3.2 Background colors in provided files

| File | Background | Hex (approx.) |
|------|------------|---------------|
| `PoloS Logo.png` | Black | `#000000` |
| `Polosafari Logo.jpg` | Light grey-blue | `#E0E8E8` – `#E8ECEE` |

---

## 4. Recommended Design System Palette

Derived from logo extraction, adjusted for **web UI** per wireframe direction (earth, forest green, temple stone — not spa minimal).

### 4.1 Primary & secondary

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-primary` | `#005CA9` | `0, 92, 169` | Primary CTAs (`WF-BTN-PRIMARY`), links, active nav, booking widget accent |
| `--color-primary-hover` | `#004A88` | `0, 74, 136` | Button hover, pressed states |
| `--color-primary-subtle` | `#E6F0F8` | `230, 240, 248` | Tinted backgrounds, selected pills, info banners |
| `--color-secondary` | `#00963F` | `0, 150, 63` | Secondary CTAs, ecology/education pillar accent |
| `--color-secondary-subtle` | `#E8F5ED` | `232, 245, 237` | Education/ecology section backgrounds |

### 4.2 Accent colors (pillar & semantic mapping)

| Token | Hex | Pillar / semantic |
|-------|-----|-------------------|
| `--color-accent-heritage` | `#98211E` | Heritage pillar, warm editorial headlines |
| `--color-accent-adventure` | `#EC6602` | Adventure pillar, urgency badges |
| `--color-accent-family` | `#7EAF39` | Family pillar, positive states |
| `--color-accent-corporate` | `#346982` | Corporate pillar — professional slate |
| `--color-accent-water` | `#8FD0E1` | Map modules, river/ecology content |

### 4.3 Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-surface` | `#FFFFFF` | Cards, header solid state |
| `--color-surface-muted` | `#F5F3EF` | Editorial cream — Mindful Living influence, not pure spa white |
| `--color-surface-alt` | `#E8ECEE` | Matches JPG logo background; section bands |
| `--color-border` | `#D4D8DC` | Dividers, input borders |
| `--color-text` | `#2C3E50` | Body copy — temple stone |
| `--color-text-muted` | `#5A6B7D` | Captions, meta |
| `--color-text-inverse` | `#FFFFFF` | Text on primary/dark surfaces |

### 4.4 Semantic (UI feedback)

| Token | Hex | Notes |
|-------|-----|-------|
| `--color-success` | `#00963F` | Align with secondary green |
| `--color-warning` | `#EC6602` | Kingfisher orange — distinct from error |
| `--color-error` | `#98211E` | Safari red |
| `--color-info` | `#005CA9` | Primary blue |

> **Rule:** Do not use all five swirl colors simultaneously in UI components. The multi-color palette belongs to the **logo mark only**; the interface should feel editorial and restrained (Cambodia + Mindful Living synthesis).

---

## 5. Suitability for Polo Safari Platform

### 5.1 Brand–business alignment

| Dimension | Assessment | Notes |
|-----------|------------|-------|
| **Polo Forest / Gujarat nature** | ✅ Strong | Kingfisher, fish, river wave, leaf swirl evoke forest + Harnav river ecology |
| **Heritage & culture** | ✅ Good | Ornate serif P, temple-stone red family, artisanal script |
| **Educational tours** | ✅ Good | Approachable, colourful — resonates with school groups |
| **Family experiences** | ✅ Good | Warm, playful illustration; not intimidating |
| **Adventure / safari** | ⚠️ Moderate | Reads eco-resort/adventure more than rugged safari; still credible for night safari, trails |
| **Corporate retreats / MICE** | ⚠️ Moderate | Illustrative busy style may feel less premium/B2B than photography-led editorial sites |
| **Premium editorial positioning** | ⚠️ Tension | Wireframes target Cambodia + Mindful Living — clean, photo-forward, restrained UI. Logo is **maximalist**; workable if UI stays minimal and logo is hero of brand touchpoints only |

### 5.2 Wireframe & reference design fit

From [14-reference-design-analysis.md](../ux-wireframes/14-reference-design-analysis.md):

| Reference | Rating | Logo compatibility |
|-----------|--------|-------------------|
| **Cambodia Travel (primary)** | 5/5 | ✅ Clean white header + destination photography pairs well with **JPG logo on light header**. Avoid placing full logo over busy hero photos. |
| **Mindful Living (secondary)** | 4/5 | ⚠️ Editorial serif headlines align; logo's multi-color illustration conflicts with calm cream minimalism — use logo sparingly in hero, not as decorative pattern. |
| **Atelier Arc** | 3/5 | ⚠️ Glass nav over hero needs **white/knockout logo** variant — not provided. |
| **Smirnovs Glamping** | 3/5 | ❌ Watercolor/cottage tone differs; logo is more polished but still illustrative. |

**Wireframe-specific notes:**

- `WF-SHELL-HEADER` transparent-over-hero state → needs **white or reversed logo** (not in asset folder).
- `WF-LOGO` placeholder in header/footer → use JPG variant at ~140–180px width desktop; simplified mark on mobile.
- Pillar badge colours (`WF-BADGE`) → map to accent tokens above, not raw swirl yellow/lime (fails contrast on white).
- Trust/partner rows → full colour logo acceptable at small sizes alongside partner marks.

---

## 6. Accessibility & Contrast

WCAG 2.1 contrast ratios calculated for extracted colors. Thresholds: **AA normal text = 4.5:1**, **AA large text = 3.0:1**.

### 6.1 Logo color on common backgrounds

| Foreground | On white | On `#E8ECEE` | On black | On cream `#F5F3EF` | On dark scrim `#1E2A24` |
|------------|----------|--------------|----------|--------------------|-------------------------|
| Polo Blue `#005CA9` | **6.7:1** ✅ AA | **5.4:1** ✅ AA | 3.1:1 ⚠️ large only | **5.9:1** ✅ AA | 2.2:1 ❌ |
| Safari Red `#98211E` | **≥7:1** ✅ AAA | **6.5:1** ✅ AA | 2.6:1 ❌ | — | 1.8:1 ❌ |
| Forest Green `#00963F` | 3.5:1 ⚠️ large | 2.8:1 ❌ | **6.1:1** ✅ AA | 3.0:1 ⚠️ large | 4.2:1 ⚠️ large |
| Lime Yellow `#E1DA10` | 1.4:1 ❌ | 1.1:1 ❌ | — | 1.2:1 ❌ | — |
| Harnav Sky `#8FD0E1` | 1.7:1 ❌ | 1.4:1 ❌ | — | 1.5:1 ❌ | — |
| Kingfisher Orange `#EC6602` | 3.2:1 ⚠️ large | 2.6:1 ❌ | **5.5:1** ✅ AA | 2.8:1 ❌ | 3.7:1 ⚠️ large |

### 6.2 Accessibility concerns

1. **Dark-background PNG** — Safari Red script and tagline on black **fail WCAG** for body/small text. Acceptable for decorative logo art; do not use red-on-black for UI copy.
2. **Hero overlay** — Full logo over photography (transparent header) requires white knockout or dark scrim patch behind logo.
3. **Yellow/lime swirl colors** — Never use as text or icon fill on light backgrounds.
4. **Small-size legibility** — Fish detail, script "Safari", and tagline become illegible below ~100px logo width. Hide tagline in header; use mark-only on mobile.
5. **Color-only meaning** — Wireframes require pillar badges with visible text labels, not color alone (`04-experience-detail.md`).

### 6.3 UI text pairings (recommended)

| Context | Foreground | Background | Ratio |
|---------|------------|------------|-------|
| Body text | `#2C3E50` | `#FFFFFF` | 12.4:1 ✅ AAA |
| Body text | `#2C3E50` | `#F5F3EF` | 11.2:1 ✅ AAA |
| Primary button | `#FFFFFF` | `#005CA9` | 6.7:1 ✅ AA |
| Primary button | `#FFFFFF` | `#98211E` | ≥7:1 ✅ AAA |
| Muted caption | `#5A6B7D` | `#FFFFFF` | 5.8:1 ✅ AA |

---

## 7. Usage Recommendations

### 7.1 Header (`WF-SHELL-HEADER`)

| State | Logo variant | Min height | Notes |
|-------|--------------|------------|-------|
| Solid white header (scrolled) | JPG / light-bg full lockup | 40–48px | Tagline optional — omit in nav for clarity |
| Transparent over hero | **White knockout** (needs creation) | 36–44px | Do not use blue/red logo on busy photos |
| Mobile | Mark-only (swirl) or "Polo" wordmark | 32px | Hide tagline and fish detail |

**Clear space:** Minimum padding = height of green "o" circle on all sides.

### 7.2 Favicon & app icon

| Size | Recommendation |
|------|----------------|
| 32×32, 16×16 | **Not suitable** with full lockup — extract **swirl mark only** or stylised **P + bird silhouette** |
| 180×180 (Apple touch) | Swirl mark on `#005CA9` or white background |
| SVG favicon | Crop swirl from `Polo S logo CDR.svg` — see [02-logo-svg-analysis.md](./02-logo-svg-analysis.md) |

### 7.3 Dark vs light backgrounds

| Background | Asset to use |
|------------|--------------|
| White, cream, light grey UI | `Polosafari Logo.jpg` (or PNG with transparent/light treatment) |
| Black footer, dark bands | `PoloS Logo.png` |
| Photography / hero | White reversed logo + optional scrim |
| Print on white paper | Full-colour JPG/PNG or CMYK vector |
| Print on dark stock | PNG black-bg version |

### 7.4 Print

- **Current assets:** 4500×4500 PNG adequate for moderate print (brochures, signage up to ~15″ width at 300 DPI).
- **Limitation:** JPEG logo is low-res (623px) — **not print-ready**.
- **Recommendation:** Obtain CMYK vector PDF from designer; specify Pantone equivalents for `#005CA9` (blue) and `#98211E` (red) for brand consistency across merchandise and resort signage.

### 7.5 Co-branding & partners

- Full lockup includes ™ — retain in formal brand contexts.
- For `WF-PARTNER-LOGO-ROW`, scale Polo Safari logo to match partner mark cap-height; prefer monochrome partner-style if partners use greyscale.

---

## 8. Action Items for Design Handoff

| Priority | Action | Owner |
|----------|--------|-------|
| P0 | Split SVG into **header / mark-only / tagline-less** variants | Brand designer / Frontend |
| P0 | Create **white knockout** + **single-color** variants | Brand designer |
| P0 | Derive **favicon set** (mark-only, 16–512px) from swirl crop | Frontend / designer |
| P1 | Produce **horizontal + stacked** lockups | Brand designer |
| P1 | Document official **typefaces** for web (serif display + sans body) | Design system |
| P1 | Map pillar badges to accent tokens in CSS/Tailwind | Frontend |
| P2 | CMYK/Pantone spec sheet for print | Brand designer |
| P2 | Social avatar crops (1:1 mark, 16:9 cover-safe) | Marketing |

---

## 9. Related Documents

| Document | Relationship |
|----------|--------------|
| [02-logo-svg-analysis.md](./02-logo-svg-analysis.md) | Vector asset audit — authoritative colors, web readiness, component map |
| [14-reference-design-analysis.md](../ux-wireframes/14-reference-design-analysis.md) | Visual direction — Cambodia primary, Mindful Living secondary |
| [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md) | `WF-LOGO`, header states, design token placeholders |
| [00-index.md](../ux-wireframes/00-index.md) | Wireframe system index — "design system token mapping" next step |
| `@@Docs/.../08_DESIGN_SYSTEM.md` | Stub — to be populated from this analysis |

---

**Document path:** `docs/brand/01-logo-and-color-analysis.md`  
**Prepared for:** Polo Safari experiential travel platform — brand → design system handoff
