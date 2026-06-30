# Polo Safari — UI Design System (Production Spec)

**Version:** 1.0.0  
**Status:** High-fidelity design specification — Step 2 of 3  
**Scope:** Production-ready component library for public website  
**Token source:** [04-design-tokens.css](../brand/04-design-tokens.css)  
**Reconciliation rules:** [05-design-system-v1.1-review.md](../brand/05-design-system-v1.1-review.md)  
**Wireframe mapping:** [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md)

---

## Locked Decisions (Non-Negotiable)

| Decision | Spec value |
|----------|------------|
| Primary interactive color | Polo Blue `#005CA9` — **not** Forest Green |
| Typography | Playfair Display (display) + Inter (body/UI) |
| Experience pillars | Five only: Heritage, Educational Tours, Corporate Retreats, Family, Adventure |
| Global header CTA | "Plan Your Visit" → `/plan` |
| Booking CTA | "Book Now" → `/plan/book/[slug]/dates` (login gate) |
| Blog canonical | `/blog` |
| Glass effect scope | Nav (transparent state) + Quick Search card only |

---

## 1. Color System

### 1.1 Primary & Interactive

| Token | Hex | CSS variable | Usage rule |
|-------|-----|--------------|------------|
| Polo Blue | `#005CA9` | `--color-primary` | Primary buttons, links on hover, focus ring base, active nav underline, carousel dot active |
| Polo Blue Hover | `#004A88` | `--color-primary-hover` | Primary button hover, link hover |
| Polo Blue Active | `#003D70` | `--color-primary-active` | Primary button pressed |
| Polo Blue Subtle | `#E6F0F8` | `--color-primary-subtle` | Selected filter chip bg, info banner bg, date picker highlight |
| On Primary | `#FFFFFF` | `--color-primary-on` | Text/icons on primary buttons |

**Do not use** guidelines Forest Green `#234A3A` or River Blue `#2E7C8F` for primary CTAs.

### 1.2 Surfaces & Section Backgrounds

| Token | Hex | CSS variable | Usage rule |
|-------|-----|--------------|------------|
| White | `#FFFFFF` | `--color-surface` | Cards, inputs, header scrolled state, Quick Search card |
| Warm Ivory | `#F9F7F2` | `--color-surface-muted` | Default page bg, testimonials, newsletter, `.bg-surface-main` |
| Nature | `#EEF4ED` | `--color-surface-nature` | Educational pillar sections, secondary button hover, ecology bands |
| Water | `#E6F7FB` | `--color-surface-water` | Adventure sections, map module subtle bg |
| Wings Warm | `#EDE6D6` | `--color-surface-warm` | Heritage editorial bands, optional warm accent sections |
| Dark Experience | `#1E2A24` | `--color-surface-dark` | Gallery preview, footer brand bar, immersive dark sections |
| Dark Elevated | `#14261E` | `--color-surface-dark-elevated` | Footer main, dark card overlays |

**Section background assignment (homepage):**

| Section type | Background token |
|--------------|------------------|
| Default content | `--color-surface-muted` (Warm Ivory) |
| Education / ecology | `--color-surface-nature` |
| Adventure / water | `--color-surface-water` |
| Gallery / immersive | `--color-surface-dark` |
| Cards on any band | `--color-surface` (white) |

### 1.3 Text

| Token | Hex | CSS variable | Usage |
|-------|-----|--------------|-------|
| Body | `#2C3E50` | `--color-text` | Paragraphs, card descriptions |
| Heading | `#1F2521` | `--color-text-heading` | H1–H4, button secondary text |
| Muted | `#5F6B64` | `--color-text-muted` | Secondary meta, filter labels |
| Subtle | `#8A948F` | `--color-text-subtle` | Captions, legal, placeholder text |
| Inverse | `#FFFFFF` | `--color-text-inverse` | On primary buttons, hero overlay |
| On Dark | `#F9F7F2` | `--color-text-on-dark` | Footer, dark sections |

### 1.4 Pillar Accents (Badges & Category Tiles Only)

| Pillar | Hex | Subtle bg | Usage |
|--------|-----|-----------|-------|
| Heritage | `#98211E` | `#F5E8E8` | Badge border-left, category tile icon ring |
| Education | `#00963F` | `#E8F5ED` | Same pattern |
| Corporate | `#346982` | `#E8EEF2` | Same pattern |
| Family | `#7EAF39` | `#F0F5E8` | Same pattern |
| Adventure | `#EC6602` | `#FDF0E6` | Same pattern |

Pillar colors are **accent only** — never used for primary buttons. Apply via `data-pillar="heritage"` etc.

### 1.5 Semantic & Borders

| Role | Token | Hex |
|------|-------|-----|
| Success | `--color-success` | `#00963F` |
| Warning | `--color-warning` | `#EC6602` |
| Error | `--color-error` | `#98211E` |
| Info | `--color-info` | `#005CA9` |
| Border default | `--color-border` | `#D4D8DC` |
| Border strong | `--color-border-strong` | `#B8C0C8` |

### 1.6 Color Usage Ratio (Adapted)

| Share | Application |
|-------|-------------|
| 60% | Warm Ivory + White surfaces |
| 20% | Photography + neutral text |
| 10% | Polo Blue (CTAs, links, focus) |
| 10% | Pillar accents + semantic colors |

Logo swirl palette (`--color-logo-*`) — **logo/mark only**, never UI chrome.

---

## 2. Typography Scale

### 2.1 Font Families

| Role | Family | CSS variable | Weights |
|------|--------|--------------|---------|
| Display / Headings | Playfair Display | `--font-display` | 600 (SemiBold), 700 (Bold) |
| Body / UI | Inter | `--font-body` | 400, 500, 600, 700 |

Load via Google Fonts: `Playfair+Display:wght@600;700&Inter:wght@400;500;600;700`

### 2.2 Type Scale — Desktop (≥1280px)

| Role | Component ID | Size | Weight | Line-height | Letter-spacing | Font | Color |
|------|--------------|------|--------|-------------|----------------|------|-------|
| Display | `UI-TYPE-DISPLAY` | 60px / 3.75rem | 700 | 1.2 | -0.02em | Playfair | `#FFFFFF` on hero; `#1F2521` on light |
| H1 | `UI-TYPE-H1` | 48px / 3rem | 700 | 1.2 | -0.02em | Playfair | `--color-text-heading` |
| H2 | `UI-TYPE-H2` | 36px / 2.25rem | 600 | 1.25 | -0.01em | Playfair | `--color-text-heading` |
| H3 | `UI-TYPE-H3` | 24px / 1.5rem | 600 | 1.35 | 0 | Playfair | `--color-text-heading` |
| H4 | `UI-TYPE-H4` | 20px / 1.25rem | 600 | 1.35 | 0 | Inter | `--color-text-heading` |
| Body Large | `UI-TYPE-BODY-LG` | 18px / 1.125rem | 400 | 1.65 | 0 | Inter | `--color-text` |
| Body | `UI-TYPE-BODY` | 16px / 1rem | 400 | 1.5 | 0 | Inter | `--color-text` |
| Body Small | `UI-TYPE-BODY-SM` | 14px / 0.875rem | 400 | 1.5 | 0 | Inter | `--color-text-muted` |
| Caption | `UI-TYPE-CAP` | 12px / 0.75rem | 500 | 1.5 | 0 | Inter | `--color-text-subtle` |
| Overline | `UI-TYPE-OVERLINE` | 12px / 0.75rem | 600 | 1.5 | 0.12em | Inter | `--color-primary` or pillar accent |
| Price | `UI-TYPE-PRICE` | 20px / 1.25rem | 700 | 1.2 | 0 | Inter | `--color-text-heading` |
| Stat | `UI-TYPE-STAT` | 24px / 1.5rem | 700 | 1.2 | 0 | Inter | `--color-text-heading` |
| Button label | `UI-TYPE-BUTTON` | 14px / 0.875rem | 600 | 1 | 0.02em | Inter | per button variant |
| Link | `UI-TYPE-LINK` | inherit | 500 | inherit | 0 | Inter | `--color-primary` |

**Editorial headline pattern (Mindful Living reference):** Line 1 regular Playfair ("Discover Polo Forest"); Line 2 italic Playfair ("After the Rains") — both in Display size on hero.

### 2.3 Type Scale — Mobile (375px)

| Role | Size adjustment |
|------|-----------------|
| Display | 36px / 2.25rem |
| H1 | 32px / 2rem |
| H2 | 28px / 1.75rem |
| H3 | 20px / 1.25rem |
| Body | 16px minimum (never below) |
| Max prose width | 65ch (~100% on 375px with 16px padding) |

### 2.4 Typography Accessibility

- One `<h1>` per page; never skip heading levels
- Body line-height ≥ 1.5
- Link text descriptive ("Browse heritage experiences" not "Click here")
- Overline uses uppercase via CSS `text-transform: uppercase` — source copy in sentence case for i18n

---

## 3. Spacing, Radius & Shadow

### 3.1 Spacing Scale (8px base)

| Token | px | Primary use |
|-------|-----|-------------|
| `--space-1` | 8 | Icon gaps, tight inline |
| `--space-2` | 16 | Input padding, card inner gap |
| `--space-3` | 24 | Card padding, component gaps |
| `--space-4` | 32 | Hero overlap margin, section sub-blocks |
| `--space-5` | 40 | Announcement bar height zone |
| `--space-6` | 48 | Section padding mobile |
| `--space-8` | 64 | Header condensed height, section padding tablet |
| `--space-10` | 80 | Section padding desktop |
| `--space-12` | 96 | Hero top padding |
| `--space-16` | 128 | Major section separation |

### 3.2 Layout Grid

| Property | Value | CSS variable |
|----------|-------|--------------|
| Max viewport | 1440px | `--layout-max` |
| Content width | 1280px | `--layout-content` |
| Columns | 12 | `--grid-columns` |
| Gutter | 24px | `--grid-gutter` |
| Side margin at 1440 | 80px each | `(1440 - 1280) / 2` |

### 3.3 Border Radius

| Token | px | Use |
|-------|-----|-----|
| `--radius-sm` | 8 | Thumbnails, chips inner |
| `--radius-md` | 16 | Inputs, filter drawer |
| `--radius-lg` / `--radius-card` | 24 | Cards, mega menu panel |
| `--radius-xl` | 32 | Quick Search card, booking widget |
| `--radius-image` | 28 | Hero and card photography |
| `--radius-button` / `--radius-chip` | 999px | Pill buttons, badges, filter chips |
| `--radius-input` | 12 | Text fields, selects |

### 3.4 Shadow Tiers

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-soft` | `0 4px 20px rgba(0,0,0,0.06)` | Category tiles hover |
| `--shadow-medium` / `--shadow-card` | `0 8px 30px rgba(0,0,0,0.08)` | Experience cards, Quick Search |
| `--shadow-large` / `--shadow-elevated` | `0 16px 40px rgba(0,0,0,0.10)` | Mega menu, mobile drawer, modals |
| `--shadow-header` | `0 1px 0 rgba(0,0,0,0.06)` | Scrolled header bottom edge |

### 3.5 Glass Effect (Restricted)

| Property | Value | Allowed on |
|----------|-------|------------|
| Background | `rgba(255,255,255,0.12)` | Transparent header over hero only |
| Border | `rgba(255,255,255,0.18)` | Same |
| Backdrop blur | 12px | Same + Quick Search when over hero photography |
| Text on glass | White + text-shadow `0 1px 2px rgba(0,0,0,0.3)` | Nav links in transparent state |

---

## 4. Buttons

### 4.1 Primary (`UI-BTN-PRIMARY`)

| Property | Value |
|----------|-------|
| Background | `#005CA9` |
| Text | `#FFFFFF`, 14px, weight 600 |
| Padding | 12px 24px (`--btn-padding-y` × `--btn-padding-x`) |
| Min height | 44px |
| Border radius | 999px (pill) |
| Border | none |
| Shadow | none default; `--shadow-soft` on hover (desktop) |
| Icon | Optional 16px arrow right, 8px gap |

| State | Background | Text | Other |
|-------|------------|------|-------|
| Default | `#005CA9` | `#FFFFFF` | — |
| Hover | `#004A88` | `#FFFFFF` | `transform: translateY(-1px)`; transition 200ms |
| Active/Pressed | `#003D70` | `#FFFFFF` | `transform: translateY(0)` |
| Focus | `#005CA9` | `#FFFFFF` | `box-shadow: var(--focus-ring)` |
| Disabled | `#D1D1D1` | `#8A948F` | `pointer-events: none` |
| Loading | `#005CA9` | transparent | Spinner centered; min-width preserved |

**Labels:** "Plan Your Visit", "Book Now", "Book Monsoon Safari", "Search", "Subscribe", "Apply filters" (mobile)

**Responsive:** Full-width on mobile when sole CTA in section; inline when paired with secondary.

**A11y:** Native `<button>` or `<a role="button">`; visible focus ring; loading state `aria-busy="true"`.

---

### 4.2 Secondary (`UI-BTN-SECONDARY`)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | 1.5px solid `#1F2521` |
| Text | `#1F2521`, 14px, weight 600 |
| Padding | 12px 24px |
| Min height | 44px |
| Border radius | 999px |

| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | `#FFFFFF` | `#1F2521` | `#1F2521` |
| Hover | `#EEF4ED` | `#1F2521` | `#1F2521` |
| Active | `#E6F0F8` | `#005CA9` | `#005CA9` |
| Focus | `#FFFFFF` | `#005CA9` | `#1F2521` + focus ring |
| Disabled | `#FFFFFF` | `#D4D8DC` | `#8A948F` |

**Labels:** "Explore Experiences", "View", "Send Enquiry", "Leave a Google review"

---

### 4.3 Ghost (`UI-BTN-GHOST`)

| Property | Value |
|----------|-------|
| Background | transparent |
| Border | none |
| Text | `#1F2521`, 14px, weight 600 |
| Padding | 12px 16px |
| Min height | 44px |

| State | Background | Text |
|-------|------------|------|
| Default | transparent | `#1F2521` |
| Hover | `#F9F7F2` | `#1F2521` |
| Active | `#E6F0F8` | `#005CA9` |
| Focus | transparent | `#1F2521` + focus ring |

**Labels:** "Corporate FAQ →", "Call / WhatsApp", text links styled as ghost with arrow icon.

**On dark backgrounds:** Text `#F9F7F2`; hover bg `rgba(255,255,255,0.1)`.

---

### 4.4 Disabled (`UI-BTN-DISABLED`)

Applies to any variant when disabled.

| Property | Value |
|----------|-------|
| Background | `#D1D1D1` |
| Text | `#8A948F` |
| Border | none (primary/secondary) |
| Cursor | `not-allowed` |
| Opacity | 1 (contrast via colors, not opacity) |

---

### 4.5 Icon Button (`UI-BTN-ICON`)

| Property | Value |
|----------|-------|
| Size | 44×44px touch target |
| Icon size | 20px (`--icon-size-md`) |
| Stroke | 2px |
| Border radius | 50% or 8px |
| Background | transparent; hover `#F9F7F2` |

**Use:** Search trigger, profile, dismiss announcement, carousel prev/next, share.

**A11y:** Required `aria-label` — never icon-only without label.

---

## 5. Cards

### 5.1 Experience Card (`UI-CARD-EXPERIENCE`)

**Use:** Featured experiences, listing grid, mega menu mini cards.

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border radius | 24px (`--radius-card`) |
| Shadow | `0 8px 30px rgba(0,0,0,0.08)` |
| Border | 1px solid `#D4D8DC` (optional; omit if shadow sufficient) |
| Overflow | hidden |
| Image aspect | 16:9 |
| Image radius | 28px top corners only OR full card clip |

**Anatomy (top → bottom):**

| Zone | Spec |
|------|------|
| Image | 16:9 cover; object-fit cover; hover scale 1.03 (desktop, 300ms) |
| Badge row | 8px from image bottom overlap OR 16px padding-top; pillar badge + difficulty |
| Title | H3 Playfair 24px → 20px mobile; max 2 lines ellipsis |
| Meta | Body Sm `#5F6B64` — "Polo Forest · 1 day · Ages 8+" |
| Rating | ★★★★★ 4.9 (128 reviews) — `#EC6602` stars, caption size |
| Price | "From ₹1,899 per person" — Price token |
| CTAs | Book Now (primary) + View (secondary); gap 8px; side-by-side |
| Caption | "Login required · Pay via UPI or card at checkout" — 12px `#8A948F` |
| Padding | 16px all sides below image |

| State | Treatment |
|-------|-----------|
| Hover (desktop) | `translateY(-2px)`; shadow → large tier |
| Focus within | Focus ring on first button |
| Loading | Skeleton: image rect + 3 text bars |

**Listing variant (`UI-CARD-EXPERIENCE-LIST`):** Same anatomy; 2-col within 9-col main; slightly compact meta.

**Responsive:**
- Desktop: 3-up (homepage) or 2-up (listing)
- Tablet: 2-up
- Mobile 375: 1-col stack or horizontal snap carousel

**A11y:** Card not fully clickable when two buttons present; price in button `aria-label`: "Book Polo Forest Heritage Walk from ₹1,899 per person".

---

### 5.2 Category Pillar Tile (`UI-CARD-CATEGORY`)

**Use:** Homepage §5 Experience Categories grid.

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border radius | 24px |
| Shadow | soft default; medium on hover |
| Min height | 160px desktop; 140px mobile |
| Padding | 24px |
| Border top | 3px solid `var(--pillar-color)` via `data-pillar` |

**Anatomy:**

| Zone | Spec |
|------|------|
| Icon | 32px outline icon; color = pillar accent; stroke 2px |
| Label | H4 Inter 16px weight 600; centered |
| Subtitle | Caption optional — "Heritage & Culture" |

**Six tiles:** Heritage, Education, Corporate, Family, Adventure, Popular Destinations (icon: map pin; accent `#005CA9`).

| State | Treatment |
|-------|-----------|
| Hover | bg → pillar subtle; shadow medium; icon scale 1.05 |
| Active/Current | border-top 4px; bg pillar subtle |
| Focus | focus ring |

**Responsive:** Desktop 6×2-col; tablet 3×2; mobile 2×3 or horizontal scroll snap.

**A11y:** Entire tile is `<a href>`; icon `aria-hidden="true"`.

---

### 5.3 Testimonial Card (`UI-CARD-TESTIMONIAL`)

**Use:** Homepage §16 Testimonials.

**Featured variant:**

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border radius | 24px |
| Shadow | medium |
| Padding | 32px desktop; 24px mobile |
| Border left | 4px solid `#005CA9` |

| Zone | Spec |
|------|------|
| Quote | Playfair 24px italic `#2C3E50`; `<blockquote>` |
| Attribution | Inter 16px weight 600 + role/org in muted |
| Avatar | 48px circle; optional |
| Badge | Pillar badge — "Educational Tour" |

**Secondary variant (3-up grid):** Quote 16px Playfair; padding 24px; no border-left; shadow soft.

**A11y:** `<blockquote cite="...">`; attribution in `<cite>`.

---

### 5.4 Additional Card Specs (Summary)

| Component ID | Key visual difference |
|--------------|----------------------|
| `UI-CARD-PACKAGE` | Badge top ("Best value"); inclusion list with checkmarks; divider before price |
| `UI-CARD-DESTINATION` | Full-bleed image 21:9 featured; gradient overlay; white text on image |
| `UI-CARD-STORY` | 16:9 image; date caption `#8A948F`; H3 title; excerpt 2 lines |
| `UI-CARD-REVIEW-COMPACT` | Google review mini; 5 orange stars; 14px quote truncate |
| `UI-CARD-FEATURE` | Icon 24px + H4 + Body Sm; used in corporate pillar mini-features |

---

## 6. Form Inputs

### 6.1 Text Input (`UI-INPUT-TEXT`)

| Property | Value |
|----------|-------|
| Height | 48px |
| Padding | 12px 16px |
| Background | `#FFFFFF` |
| Border | 1px solid `#D4D8DC` |
| Border radius | 12px |
| Font | Inter 16px `#2C3E50` |
| Placeholder | `#8A948F` |

| State | Border | Background | Other |
|-------|--------|------------|-------|
| Default | `#D4D8DC` | `#FFFFFF` | — |
| Hover | `#B8C0C8` | `#FFFFFF` | — |
| Focus | `#005CA9` | `#FFFFFF` | focus ring |
| Error | `#98211E` | `#F5E8E8` | error message below in `#98211E` 12px |
| Disabled | `#D4D8DC` | `#F9F7F2` | text `#8A948F` |

**Label:** Visible above field; Inter 14px weight 500 `#1F2521`; margin-bottom 8px.

---

### 6.2 Select (`UI-INPUT-SELECT`)

Same dimensions as text input. Chevron icon 16px right; padding-right 40px. Native `<select>` on mobile for a11y.

---

### 6.3 Date Picker (`UI-INPUT-DATE`)

Same shell as text input. Calendar icon left (optional). Selected date highlight `#E6F0F8`; today border `#005CA9`.

---

### 6.4 Checkbox (`UI-INPUT-CHECKBOX`)

| Property | Value |
|----------|-------|
| Box | 20×20px; radius 4px |
| Checked bg | `#005CA9` |
| Checkmark | white |
| Label | 16px Inter; 12px gap |
| Touch target | 44px min (padding on label) |

---

### 6.5 Filter Controls

| Component | Spec |
|-----------|------|
| `UI-FILTER-CHIP` | Pill 32px height; bg `#E6F0F8`; text `#005CA9`; × dismiss 16px |
| `UI-RANGE-SLIDER` | Track `#D4D8DC`; fill `#005CA9`; handle 20px white circle border 2px `#005CA9` |
| `UI-FILTER-GROUP` | Fieldset; legend H4 16px; checkbox list 8px gap |

---

## 7. Navigation

### 7.1 Header — Transparent State (`UI-NAV-HEADER`)

**Context:** Homepage at scroll position 0; hero visible behind.

| Property | Value |
|----------|-------|
| Height | 72px |
| Background | transparent OR glass (`--glass-bg` + blur) |
| Position | sticky; top 0; z-index 100 |
| Border bottom | none |
| Logo | Full-color Polo Safari mark; max-height 40px |
| Nav links | Inter 15px weight 500; `#FFFFFF`; text-shadow for legibility |
| Utility icons | `#FFFFFF` |
| CTA | Primary button; unchanged Polo Blue (not white ghost) |

| Property | Value |
|----------|-------|
| Link gap | 24px |
| Utility gap | 16px |
| Container | 1280px centered; 80px side padding at 1440 |

**Active link:** 2px bottom border `#FFFFFF` at 80% opacity.

---

### 7.2 Header — Scrolled State (`UI-NAV-HEADER-SCROLLED`)

**Trigger:** `scrollY > 80px`

| Property | Value |
|----------|-------|
| Height | 64px (transition 200ms) |
| Background | `#FFFFFF` |
| Border bottom | `1px solid #D4D8DC` + `--shadow-header` |
| Nav links | `#2C3E50`; hover `#005CA9` |
| Utility icons | `#2C3E50` |
| Logo | Full-color (unchanged) |

**A11y:** `scroll-padding-top: 80px` on `html`; skip link first focusable.

---

### 7.3 Header — Default (Non-Homepage)

Listing, detail, inner pages: **start in scrolled state** (white bg, 64px).

---

### 7.4 Mega Menu (`UI-NAV-MEGA`)

| Property | Value |
|----------|-------|
| Width | 1280px aligned to container |
| Background | `#FFFFFF` |
| Border radius | 0 0 24px 24px |
| Shadow | large tier |
| Padding | 32px |
| Layout | 4-col category list + 8-col featured cards (3 mini experience cards) |

**Category links:** Inter 16px; hover bg `#F9F7F2`; pillar dot 8px circle in accent color.

**Featured cards:** Compact experience card at ~280px width.

**Animation:** opacity 0→1 + translateY(-8px→0); 180ms ease-out.

**A11y:** Enter/Space opens; Escape closes; focus trap while open; hover insufficient alone.

---

### 7.5 Discover Dropdown (`UI-NAV-DROPDOWN`)

| Property | Value |
|----------|-------|
| Width | 240px |
| Background | `#FFFFFF` |
| Shadow | medium |
| Border radius | 12px |
| Item padding | 12px 16px |
| Item hover | bg `#F9F7F2` |

**Links:** Polo Forest Story, Gallery, Stories & Insights (`/blog`), Guest Reviews, FAQ, About.

---

### 7.6 Mobile Drawer (`UI-NAV-MOBILE-DRAWER`)

| Property | Value |
|----------|-------|
| Width | 100vw max 400px |
| Background | `#FFFFFF` |
| Shadow | large |
| Scrim | `rgba(30,42,36,0.5)` |
| Header | 64px; logo + close |
| Accordion | Experiences, Discover sections |
| Bottom CTA | Plan Your Visit full-width; sticky above safe area |
| Footer links | Contact · Login |

**Animation:** translateX(100%→0); 300ms; instant if reduced-motion.

**A11y:** `role="dialog"` `aria-modal="true"`; focus trap; body scroll lock.

---

### 7.7 Profile Dropdown (`UI-NAV-PROFILE`)

| Property | Value |
|----------|-------|
| Width | 260px |
| Background | `#FFFFFF` |
| Shadow | medium |
| Border radius | 12px |

**Guest:** Login, Create account, caption "Login required to book".  
**Auth:** Avatar 32px, name, email, My bookings, Profile settings, Log out.

---

## 8. Footer (`UI-SHELL-FOOTER`)

| Property | Value |
|----------|-------|
| Background | `#1E2A24` (`--color-surface-dark`) |
| Text | `#F9F7F2` |
| Padding | 80px top, 48px bottom |
| Link color | `#F9F7F2`; hover `#8FD0E1` |
| Column headings | H4 Inter 16px weight 600 |

**Layout:** Brand 3-col + 4 link columns 3-col each + newsletter full-width + legal bar.

**Brand bar (above main footer):** `#14261E`; centered copy: `NATURE · CULTURE · ADVENTURE · TOGETHER` | `COME · STAY · EXPLORE` — Caption 11px letter-spacing 0.15em.

**Newsletter:** Email input dark variant (bg `#14261E`, border `#346982`); Subscribe secondary button (white outline).

**A11y:** `<footer aria-label="Site footer">`; social links with platform `aria-label`.

---

## 9. Utility Components

### 9.1 Badge (`UI-BADGE`)

| Property | Value |
|----------|-------|
| Height | 28px |
| Padding | 4px 12px |
| Radius | 999px |
| Font | 12px weight 600 |
| Background | pillar subtle |
| Text | pillar accent |
| Border | optional 1px pillar accent at 30% opacity |

---

### 9.2 Announcement Bar (`UI-ANNOUNCEMENT-BAR`)

| Property | Value |
|----------|-------|
| Height | ~40px |
| Background | `#E6F0F8` |
| Text | 14px `#2C3E50` |
| Link | `#005CA9` weight 600 |
| Dismiss | 44×44 icon button |

---

### 9.3 Trust Stats Bar (`UI-TRUST-STATS-BAR`)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` or transparent on Warm Ivory section |
| Border | 1px top/bottom `#D4D8DC` OR card with shadow |
| Padding | 24px 32px |
| Stat | 24px weight 700; label 12px muted |
| Divider | vertical `#D4D8DC` between stats |

**Copy:** "12+ Years · 50,000+ Guests · 120+ Experiences · 4.8★"

---

### 9.4 Breadcrumb (`UI-BREADCRUMB`)

Caption 12px `#8A948F`; separator ›; current page `#2C3E50` weight 500; links `#005CA9`.

---

### 9.5 FAQ Accordion (`UI-FAQ-ACCORDION`)

| Property | Value |
|----------|-------|
| Item border | 1px bottom `#D4D8DC` |
| Trigger | 16px weight 600; padding 16px 0; chevron right |
| Panel | 16px body; padding-bottom 16px |
| Expanded | chevron rotate 180deg |

Transition height 150ms; instant if reduced-motion.

---

### 9.6 Booking Widget (`UI-BOOKING-WIDGET`)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | 1px `#D4D8DC` |
| Radius | 24px |
| Shadow | medium |
| Padding | 24px |
| Sticky top | header height + 16px |

See [02-key-pages-hifi.md](./02-key-pages-hifi.md) for full anatomy.

---

## 10. Motion & Interaction

| Pattern | Duration | Easing | Reduced motion |
|---------|----------|--------|----------------|
| Header condense | 200ms | default | instant |
| Button hover lift | 200ms | default | no transform |
| Card hover lift | 200ms | default | disabled on touch |
| Carousel crossfade | 300ms | default | instant cut |
| Mega menu open | 180ms | ease-out | instant |
| Drawer slide | 300ms | default | instant |
| Accordion expand | 150ms | default | instant |

Hero carousel auto-advance: 8s; pause on hover/focus; **disabled** when `prefers-reduced-motion: reduce`.

---

## 11. Iconography

| Property | Value |
|----------|-------|
| Style | Outline / line |
| Stroke | 2px (`--icon-stroke`) |
| Sizes | 16 / 20 / 24px |
| Color | inherit from parent text |
| Library | Lucide or Phosphor (implementation choice) |

**Motifs:** temple, book, users, mountain, tent, map-pin, camera, leaf, calendar, search, user, chevron, star, check, x.

---

## 12. Component Index

| # | Component ID | Category |
|---|--------------|----------|
| 1 | `UI-BTN-PRIMARY` | Button |
| 2 | `UI-BTN-SECONDARY` | Button |
| 3 | `UI-BTN-GHOST` | Button |
| 4 | `UI-BTN-DISABLED` | Button state |
| 5 | `UI-BTN-ICON` | Button |
| 6 | `UI-CARD-EXPERIENCE` | Card |
| 7 | `UI-CARD-EXPERIENCE-LIST` | Card |
| 8 | `UI-CARD-CATEGORY` | Card |
| 9 | `UI-CARD-TESTIMONIAL` | Card |
| 10 | `UI-CARD-PACKAGE` | Card |
| 11 | `UI-CARD-DESTINATION` | Card |
| 12 | `UI-CARD-STORY` | Card |
| 13 | `UI-CARD-FEATURE` | Card |
| 14 | `UI-INPUT-TEXT` | Form |
| 15 | `UI-INPUT-SELECT` | Form |
| 16 | `UI-INPUT-DATE` | Form |
| 17 | `UI-INPUT-CHECKBOX` | Form |
| 18 | `UI-FILTER-CHIP` | Form |
| 19 | `UI-RANGE-SLIDER` | Form |
| 20 | `UI-NAV-HEADER` | Navigation |
| 21 | `UI-NAV-HEADER-SCROLLED` | Navigation |
| 22 | `UI-NAV-MEGA` | Navigation |
| 23 | `UI-NAV-DROPDOWN` | Navigation |
| 24 | `UI-NAV-MOBILE-DRAWER` | Navigation |
| 25 | `UI-NAV-PROFILE` | Navigation |
| 26 | `UI-SHELL-FOOTER` | Shell |
| 27 | `UI-ANNOUNCEMENT-BAR` | Shell |
| 28 | `UI-BADGE` | Primitive |
| 29 | `UI-TRUST-STATS-BAR` | Trust |
| 30 | `UI-BREADCRUMB` | Navigation |
| 31 | `UI-FAQ-ACCORDION` | Content |
| 32 | `UI-BOOKING-WIDGET` | Conversion |
| 33 | `UI-BOOKING-CTA-STICKY` | Conversion |
| 34 | `UI-QUICK-SEARCH` | Conversion |
| 35 | `UI-HERO-CAROUSEL` | Hero |
| 36 | `UI-PILLAR-SECTION` | Layout |
| 37 | `UI-STORY-INTERACTIVE` | Content |
| 38 | `UI-JOURNEY-TIMELINE` | Content |
| 39 | `UI-REVIEWS-GOOGLE` | Trust |
| 40 | `UI-AWARD-GRID` | Trust |
| 41 | `UI-PARTNER-LOGO-ROW` | Trust |
| 42 | `UI-GALLERY-GRID` | Media |
| 43 | `UI-CONTACT-CTA-BAND` | Conversion |
| 44 | `UI-FORM-NEWSLETTER` | Form |
| 45 | `UI-FILTER-SIDEBAR` | Listing |
| 46 | `UI-SORT-SELECT` | Listing |
| 47 | `UI-PAGINATION` | Listing |
| 48 | `UI-SKELETON` | Loading |
| 49 | `UI-TOAST` | Feedback |
| 50 | `UI-MAP-EMBED` | Media |

**Total documented components: 50**

---

## 13. Wireframe → UI Component Mapping

| Wireframe ID | UI Component ID |
|--------------|-----------------|
| `WF-BTN-PRIMARY` | `UI-BTN-PRIMARY` |
| `WF-BTN-SECONDARY` | `UI-BTN-SECONDARY` |
| `WF-BTN-GHOST` | `UI-BTN-GHOST` |
| `WF-CARD-EXPERIENCE` | `UI-CARD-EXPERIENCE` |
| `WF-CATEGORY-GRID` | `UI-CARD-CATEGORY` × 6 |
| `WF-CARD-REVIEW` | `UI-CARD-TESTIMONIAL` |
| `WF-SHELL-HEADER` | `UI-NAV-HEADER` / `UI-NAV-HEADER-SCROLLED` |
| `WF-NAV-MEGA` | `UI-NAV-MEGA` |
| `WF-NAV-MOBILE-DRAWER` | `UI-NAV-MOBILE-DRAWER` |
| `WF-SHELL-FOOTER` | `UI-SHELL-FOOTER` |
| `WF-QUICK-SEARCH` | `UI-QUICK-SEARCH` |
| `WF-HERO-CAROUSEL` | `UI-HERO-CAROUSEL` |
| `WF-BOOKING-WIDGET` | `UI-BOOKING-WIDGET` |

---

**Document path:** `docs/ui/00-ui-design-system.md`  
**Next:** [01-homepage-hifi.md](./01-homepage-hifi.md) · [02-key-pages-hifi.md](./02-key-pages-hifi.md)
