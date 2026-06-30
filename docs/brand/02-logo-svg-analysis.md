# Polo Safari — Logo SVG Analysis

**Version:** 1.0.0  
**Status:** Brand research — vector asset audit  
**Source asset:** `docs/brand/Polo S logo CDR.svg`  
**Cross-reference:** [01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md) (raster baseline), [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md)  
**Last updated:** July 2026  

---

## Executive Summary

The Polo Safari logo now has an **authoritative vector source** exported from Adobe Illustrator 30.3.0 (filename references CorelDRAW origin). The file is a **single horizontal lockup** at **449.9 × 227.2** viewBox (~**1.98:1** aspect ratio), **~12.7 KB**, with **31 vector shapes** (29 paths, 1 rect, 1 polygon) and **no `<text>`, `<g>`, or gradient elements**.

| Metric | Value |
|--------|-------|
| **Web readiness score** | **72 / 100** — usable in production with cleanup |
| **Unique fill/stroke colors** | **16** (15 fills + 1 stroke) |
| **Text handling** | Fully outlined to paths ✅ |
| **Semantic grouping** | None ❌ |
| **Variants in file** | Full lockup only (mark + wordmark + tagline + ™) |

**Key findings vs raster analysis:**

| Token | Raster (01-doc) | SVG (authoritative) | Δ |
|-------|-----------------|---------------------|---|
| Polo Blue | `#2060A8` | `#005CA9` | **Update primary** — SVG is deeper, more saturated |
| Safari Red | `#982028` | `#98211E` | Confirm — negligible Δ (1 hex digit) |
| Forest Green | `#30A050` | `#00963F` | **Update** — SVG is darker |
| Canopy Lime | `#88B050` | `#7EAF39` / `#AFCA05` | Two distinct lime/yellow-greens in SVG |
| Harnav Sky | `#98C8D8` | `#8FD0E1` | Close — minor shift |
| Sun Canopy | `#D8D848` | `#E1DA10` | Brighter, more yellow in SVG |
| Kingfisher Orange | `#D06828` | `#EC6602` | **Update** — more vivid orange |
| Kingfisher Magenta | `#C80080` | `#E5007D` | Close |
| River Slate | `#406078` | `#346982` / `#134152` | Two slate/teal tones in SVG |

**Top recommendations:**

1. **Adopt SVG hex values** as canonical brand colors; raster sampling was approximate.
2. **Split into layered SVGs** — mark-only, wordmark-only, tagline-less header, white knockout.
3. **Rename CSS classes** from `.st0`–`.st15` to semantic tokens (`--logo-blue`, etc.).
4. **Favicon:** crop swirl mark (`viewBox="248 0 202 175"`) — do not scale full lockup below 120px width.
5. **White knockout:** not feasible via simple CSS recolor — requires dedicated export (15 non-white fills).

---

## 1. File Metadata

| Property | Value |
|----------|-------|
| **Path** | `docs/brand/Polo S logo CDR.svg` |
| **File size** | 12,964 bytes (~12.7 KB) |
| **Dimensions** | `viewBox="0 0 449.9 227.2"` |
| **Aspect ratio** | 1.98 : 1 (horizontal lockup) |
| **Root element** | `<svg id="Layer_1">` — flat, single layer |
| **Generator** | Adobe Illustrator 30.3.0, SVG Export Plug-In (Build 182) |
| **XML declaration** | Present (`UTF-8`) |
| **Namespaces** | Standard SVG 1.1 |

> **Note:** Filename suggests CorelDRAW (`.CDR`) origin, but the embedded comment identifies an **Illustrator export**. Treat as designer handoff, not a raw CDR-to-SVG conversion.

---

## 2. Structure

### 2.1 Element inventory

| Element | Count | Notes |
|---------|-------|-------|
| `<path>` | 29 | All letterforms and illustrations |
| `<rect>` | 1 | "l" in "Polo" — vertical bar (`x=211.7, y=31.2, w=20.1, h=130.4`) |
| `<polygon>` | 1 | Small Safari script detail (`st12`) |
| `<text>` | 0 | All type outlined ✅ |
| `<g>` (groups) | 0 | No semantic grouping ❌ |
| Gradients | 0 | All fills are flat solids |
| `<image>` | 0 | No embedded rasters ✅ |
| `@font-face` | 0 | No embedded fonts ✅ |
| `transform` | 0 | No transforms — coordinates are absolute |

### 2.2 Style system

Colors are defined in `<defs><style>` as **16 CSS classes** (`.st0`–`.st15`). Classes `.st0`–`.st14` share `fill-rule: evenodd`. Class `.st15` duplicates `.st7` fill (`#005ca9`) — redundant alias for the "l" rect.

| Class | Fill | Stroke | Usage count | Role |
|-------|------|--------|-------------|------|
| `.st7`, `.st15` | `#005CA9` | — | 5 + 1 | Polo Blue — P, l, wave, kingfisher body, flourish |
| `.st12` | `#98211E` | — | 7 | Safari Red — script, tagline, swirl petal, kingfisher wing |
| `.st13` | `#8FD0E1` | — | 3 | Harnav Sky — swirl petals |
| `.st6` | `#7EAF39` | — | 2 | Canopy Lime — swirl petals |
| `.st9` | `#E1DA10` | — | 2 | Sun Canopy — swirl petals |
| `.st1` | `#AFCA05` | — | 1 | Yellow-green swirl accent |
| `.st11` | `#00963F` | — | 1 | Forest Green — small "o" |
| `.st3` | `#346982` | — | 1 | River Slate — kingfisher head/wing detail |
| `.st8` | `#EC6602` | — | 1 | Kingfisher Orange — beak |
| `.st5` | `#E5007D` | — | 1 | Kingfisher Magenta — breast |
| `.st14` | `#134152` | — | 2 | Deep Teal — kingfisher shadow/detail |
| `.st4` | `#FFFFFF` | — | 1 | White highlight — kingfisher eye dot |
| `.st10` | `#000003` | — | 1 | Near-black — kingfisher eye ring |
| `.st0` | `#1A1A18` | — | 1 | ™ symbol |
| `.st2` | none | `#005CA9` 0.3px | 1 | Decorative stroke flourish |

**Total unique colors:** 15 fill + 1 stroke (14 unique hex values; blue used as both fill and stroke).

### 2.3 Component map (by coordinate region)

```
viewBox 0 0 449.9 227.2
┌──────────────────────────────────────────────────────────────────────────────┐
│  [Kingfisher]     [P][o][l]  [Safari script]              [Swirl Mark]    ™  │
│   x: 0–130        x: 130–240  (st12 red)                  x: 250–450  st0   │
│   y: 85–160       y: 31–190   y: 148–205                y: 5–170           │
│                                                                               │
│                   ─── blue wave (st7, y≈214) ─────────────────────────────── │
│                   COME.STAY.EXPLORE (st12 paths, y≈188–203)                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

| Component | Approx. bounds | Classes | Elements |
|-----------|----------------|---------|----------|
| **Kingfisher illustration** | x 0–130, y 85–160 | st3, st7, st8, st12, st5, st14, st4, st10 | 9 paths |
| **Wordmark — "Polo"** | x 130–232, y 31–162 | st7 (P), st11 (o), st15 (l rect), st11 (o counter) | 3 paths + 1 rect |
| **Wordmark — "Safari"** | x 130–240, y 148–205 | st12 (script), st7 (wave), st2 (stroke accent) | 4 paths + 1 polygon |
| **Swirl mark** | x 250–450, y 5–170 | st12, st13, st1, st6, st9 | 10 paths |
| **Tagline** | x 112–450, y 188–203 | st12 | 1 large path (~3,488 chars) |
| **Wave underline** | x 128–240, y 214 | st7 | 1 path |
| **™ symbol** | x 402–420, y 0–18 | st0 | 1 path |

### 2.4 Embedded variants

| Variant | Present? | Notes |
|---------|----------|-------|
| Full horizontal lockup | ✅ | Only composition in file |
| Mark-only (swirl) | ❌ | Must crop/export |
| Wordmark-only | ❌ | Must crop/export |
| Tagline-less | ❌ | Must hide/remove tagline paths |
| White knockout | ❌ | 15 colored fills — needs dedicated art |
| Monochrome | ❌ | Not provided |
| Stacked / vertical | ❌ | Not provided |
| Dark-background treatment | ❌ | Transparent background (no bg rect) |

---

## 3. Extracted Colors (Authoritative)

All values from SVG `<style>` block. RGB computed from hex.

### 3.1 Core logo palette

| Name | Hex | RGB | SVG class | Logo role |
|------|-----|-----|-----------|-----------|
| **Polo Blue** | `#005CA9` | `0, 92, 169` | st7, st15, st2 | P, l, wave, kingfisher, flourish stroke |
| **Safari Red** | `#98211E` | `152, 33, 30` | st12 | Safari script, tagline, swirl petal, bird wing |
| **Forest Green** | `#00963F` | `0, 150, 63` | st11 | Small "o" in Polo |
| **Canopy Lime** | `#7EAF39` | `126, 175, 57` | st6 | Swirl petals |
| **Sun Canopy** | `#E1DA10` | `225, 218, 16` | st9 | Swirl petals |
| **Yellow-Green Accent** | `#AFCA05` | `175, 202, 5` | st1 | Swirl highlight petal |
| **Harnav Sky** | `#8FD0E1` | `143, 208, 225` | st13 | Swirl petals, water tones |
| **Kingfisher Orange** | `#EC6602` | `236, 102, 2` | st8 | Bird beak |
| **Kingfisher Magenta** | `#E5007D` | `229, 0, 125` | st5 | Bird breast |
| **River Slate** | `#346982` | `52, 105, 130` | st3 | Bird detail |
| **Deep Teal** | `#134152` | `19, 65, 82` | st14 | Bird shadow |
| **White** | `#FFFFFF` | `255, 255, 255` | st4 | Bird eye highlight |
| **Near Black** | `#000003` | `0, 0, 3` | st10 | Bird eye ring |
| **TM Gray** | `#1A1A18` | `26, 26, 24` | st0 | ™ symbol |

### 3.2 Raster vs SVG comparison

Prior raster sampling ([01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md) §3) differed on several primaries due to JPEG/PNG compression and anti-aliasing. **SVG values should supersede raster approximations** for design tokens.

| Token | Raster hex | SVG hex | Verdict |
|-------|------------|---------|---------|
| Polo Blue | `#2060A8` | `#005CA9` | **Update** — Δ≈24 in G/B channels |
| Safari Red | `#982028` | `#98211E` | **Confirm** — within 1–2 units |
| Forest Green | `#30A050` | `#00963F` | **Update** |
| Canopy Lime | `#88B050` | `#7EAF39` | **Update** (+ `#AFCA05` secondary lime) |
| Harnav Sky | `#98C8D8` | `#8FD0E1` | **Update** (minor) |
| Sun Canopy | `#D8D848` | `#E1DA10` | **Update** |
| Kingfisher Orange | `#D06828` | `#EC6602` | **Update** |
| Kingfisher Magenta | `#C80080` | `#E5007D` | **Update** (minor) |
| River Slate | `#406078` | `#346982` | **Update** (+ `#134152` deep variant) |

---

## 4. Web / Production Readiness

### 4.1 Score: 72 / 100

| Criterion | Score | Notes |
|-----------|-------|-------|
| Valid viewBox & scaling | 10/10 | Clean numeric viewBox |
| Outlined typography | 10/10 | No font dependencies |
| File size | 8/10 | 12.7 KB acceptable; optimizable to ~8 KB |
| No external dependencies | 10/10 | Self-contained |
| Semantic structure | 3/10 | Flat layer, no `<g id="...">` groups |
| CSS/token naming | 4/10 | Generic `.st0`–`.st15` classes |
| Variant coverage | 2/10 | Single lockup only |
| Path optimization | 5/10 | Longest path 3,488 chars; Illustrator cruft (`h0`, `s0-.6`) |
| Accessibility variants | 0/10 | No white knockout or monochrome |
| Background handling | 10/10 | Transparent (no background rect) — works on light UI |
| **Total** | **72/100** | Production-ready for `<img>` / inline SVG on light backgrounds after token rename |

### 4.2 Optimization opportunities

| Action | Est. savings | Priority |
|--------|--------------|----------|
| SVGO pass (precision, remove comments, merge paths) | 20–35% | P1 |
| Replace `.st0`–`.st15` with semantic `fill="currentColor"` groups | Dev ergonomics | P0 |
| Split tagline into separate `<g id="tagline">` for header toggle | UX | P0 |
| Round path coordinates to 1 decimal | 10–15% | P2 |
| Remove empty subpaths (`h0`, zero-length segments) | Minor | P2 |
| Convert `.st15` → reuse `.st7` | Cleanup | P3 |

### 4.3 Usage guidance

#### Header (`WF-SHELL-HEADER`)

```html
<!-- Recommended: tagline-less crop for nav -->
<img src="/brand/polo-safari-logo-header.svg"
     alt="Polo Safari"
     width="180" height="91"
     style="height: 44px; width: auto;" />
```

| State | SVG approach | Min height |
|-------|--------------|------------|
| Solid white header | Full lockup or tagline-less export | 40–48px |
| Transparent over hero | **White knockout SVG** (not in source) | 36–44px |
| Mobile | Mark-only crop `viewBox="248 0 202 175"` | 32px |

#### Favicon extraction

| Size | Crop | Background |
|------|------|------------|
| 32×32, 16×16 | Swirl mark only | `#005CA9` or white |
| 180×180 (Apple touch) | Swirl mark centered | White or brand blue |
| SVG favicon | Optimized mark-only SVG | Transparent |

Suggested mark crop: `viewBox="248 0 202 175"` (adjust after visual QA).

#### White knockout feasibility

| Approach | Feasible? | Notes |
|----------|-----------|-------|
| CSS `filter: brightness(0) invert(1)` | ⚠️ Partial | Multi-color logo becomes flat white silhouette — loses swirl color identity |
| `currentColor` + single-fill variant | ❌ | Requires designer export |
| Manual path recolor to `#FFFFFF` | ✅ | Feasible but tedious — 15 fill colors |
| Dedicated white SVG from designer | ✅ **Recommended** | Preserve mark color OR full white mono |

**Verdict:** Simple CSS recolor is **not recommended**. Request a **white knockout SVG** from brand designer for hero-overlay header.

---

## 5. CSS Design Token Mapping (Updated)

Replace raster-derived tokens in `01-logo-and-color-analysis.md` §4 with SVG-authoritative values:

```css
:root {
  /* Primary — from SVG Polo Blue */
  --color-primary: #005CA9;
  --color-primary-hover: #004A88;
  --color-primary-subtle: #E6F0F8;

  /* Secondary — from SVG Forest Green */
  --color-secondary: #00963F;
  --color-secondary-subtle: #E8F5ED;

  /* Logo-only accents (do not use all in UI chrome) */
  --color-accent-heritage: #98211E;
  --color-accent-adventure: #EC6602;
  --color-accent-family: #7EAF39;
  --color-accent-corporate: #346982;
  --color-accent-water: #8FD0E1;
  --color-accent-sun: #E1DA10;

  /* Neutrals (unchanged — not in logo SVG) */
  --color-surface: #FFFFFF;
  --color-surface-muted: #F5F3EF;
  --color-surface-alt: #E8ECEE;
  --color-text: #2C3E50;
  --color-text-inverse: #FFFFFF;
}
```

> **Rule unchanged:** Multi-color swirl palette is **logo-only**. UI restricts to primary blue, secondary green, heritage red, plus neutrals.

---

## 6. Issues & Artifacts

| Issue | Severity | Detail |
|-------|----------|--------|
| **No semantic groups** | Medium | Cannot toggle tagline/mark via CSS without splitting file |
| **Illustrator path cruft** | Low | `h0`, `s0-.6`, `s0,2.6` zero/near-zero segments in paths (lines 79, 87) |
| **Generic class names** | Medium | `.st0`–`.st15` not meaningful for theming |
| **Duplicate color class** | Low | `.st15` duplicates `.st7` |
| **Monolithic tagline path** | Low | Single 3,488-char path — hard to edit |
| **Missing white knockout** | High | Required for transparent hero header |
| **Missing mark-only export** | High | Required for favicon/mobile |
| **No CDR source in repo** | Info | Only Illustrator SVG export present |
| **Broken paths** | None observed | All paths render as closed shapes with evenodd |
| **Embedded fonts** | None ✅ | — |
| **Gradients lost** | Info | Any source gradients flattened to solids (acceptable for web) |
| **™ baked in** | Low | May need version without ™ for small sizes |

---

## 7. Action Items (Updated)

| Priority | Action | Owner | Status |
|----------|--------|-------|--------|
| P0 | Adopt SVG hex values in design tokens | Frontend | **Ready** — see §5 |
| P0 | Export **tagline-less header SVG** | Designer | Pending |
| P0 | Export **white knockout SVG** | Designer | Pending |
| P0 | Export **mark-only SVG** + favicon set (16–512px) | Designer / Frontend | Pending |
| P1 | Run SVGO + add semantic `<g id="...">` groups | Frontend | Pending |
| P1 | Rename fills to CSS custom properties | Frontend | Pending |
| P2 | Provide native `.AI` / `.CDR` source in repo | Designer | Pending |
| P2 | CMYK/Pantone spec from SVG hex | Designer | Pending |

---

## 8. Related Documents

| Document | Relationship |
|----------|--------------|
| [01-logo-and-color-analysis.md](./01-logo-and-color-analysis.md) | Raster baseline — superseded for hex values by this doc |
| [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md) | `WF-LOGO` header placement |
| [14-reference-design-analysis.md](../ux-wireframes/14-reference-design-analysis.md) | Visual direction |

---

**Document path:** `docs/brand/02-logo-svg-analysis.md`  
**Prepared for:** Polo Safari experiential travel platform — vector asset → design system handoff
