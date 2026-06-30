# Polo Safari — Key Pages High-Fidelity UI Spec

**Version:** 1.0.0  
**Status:** High-fidelity design specification — Step 2 of 3  
**Scope:** Experience Listing · Experience Detail · Navigation (Mega Menu + Mobile Drawer)  
**Breakpoints:** Desktop 1440px · Mobile 375px  
**Design system:** [00-ui-design-system.md](./00-ui-design-system.md)  
**Wireframe sources:** [03-experience-listing.md](../ux-wireframes/03-experience-listing.md), [04-experience-detail.md](../ux-wireframes/04-experience-detail.md), [01-global-foundation-and-navigation.md](../ux-wireframes/01-global-foundation-and-navigation.md)

---

## Part A — Experience Listing Page

**Routes:** `/experiences` · `/experiences/category/[slug]`  
**Reference:** Cambodia experience grid + platform filter patterns  
**Emotion arc:** Curiosity → Comparison → Action

---

### A1. Page Shell

| Property | Value |
|----------|-------|
| Header state | Scrolled default — white bg, 64px (no transparent hero) |
| Page background | Warm Ivory `#F9F7F2` |
| Active nav | "Experiences" — 2px bottom border `#005CA9`; `aria-current="page"` |
| Main padding bottom | 80px |

---

### A2. Breadcrumb & Page Header

**Components:** `UI-BREADCRUMB`, `UI-TYPE-OVERLINE`, `UI-TYPE-H1`, `UI-TRUST-STATS-BAR`

#### Visual treatment

| Property | Value |
|----------|-------|
| Breadcrumb | Caption 12px `#8A948F`; links `#005CA9` |
| Header padding | 32px top, 24px bottom |
| Header width | 8 cols left-aligned |
| Trust strip | White card; radius 16px; shadow soft; padding 20px 24px |

#### Copy — Index route (`/experiences`)

| Element | Text |
|---------|------|
| Breadcrumb | Home › Experiences |
| Overline | POLO FOREST EXPERIENCES |
| H1 | All experiences |
| Body | Browse guided walks, safaris, family weekends, and adventure trips at Polo Forest and across Gujarat. Book online — login required at checkout. |
| Trust stats | 4.8★ guest rating · 120+ experiences · 50,000+ guests |
| Link | Read guest reviews → |

#### Copy — Category route (`/experiences/category/heritage`)

| Element | Text |
|---------|------|
| Breadcrumb | Home › Experiences › Heritage & Culture |
| H1 | Heritage & Culture experiences |
| Body | Ancient temples, stepwells, and guided heritage walks in the Aravalli foothills near Idar, Gujarat. |

**Category accent:** Overline and trust strip left border 4px pillar color (`#98211E` for heritage).

---

### A3. Listing Toolbar

**Components:** `UI-LISTING-TOOLBAR`, `UI-INPUT-TEXT`, `UI-RESULTS-COUNT`, `UI-SORT-SELECT`, `UI-FILTER-CHIP`

#### Visual treatment

| Property | Value |
|----------|-------|
| Row height | 56px min |
| Background | transparent on page bg |
| Search field | 6 cols; 48px; white bg; radius 12px |
| Results count | Inter 16px `#5F6B64` |
| Sort select | 200px; right-aligned |

#### Copy

| Element | Text |
|---------|------|
| Search placeholder | Search experiences — e.g. night safari, temple walk, camping |
| Results | Showing 1–12 of 47 experiences |
| Sort label | Sort by |
| Sort default | Recommended |

**Sort options:** Recommended · Price: low to high · Price: high to low · Duration: shortest first · Duration: longest first · Guest rating · Newest

**Mobile 375:** Full-width search; filter trigger button `[Filters (3)]` + sort on second row.

---

### A4. Filter Sidebar (Desktop)

**Components:** `UI-FILTER-SIDEBAR`, `UI-FILTER-GROUP`, `UI-INPUT-CHECKBOX`, `UI-RANGE-SLIDER`

#### Visual treatment

| Property | Value |
|----------|-------|
| Width | 3 cols (of 12) |
| Position | sticky; `top: 80px` |
| Background | `#FFFFFF` |
| Border radius | 24px |
| Shadow | soft |
| Padding | 24px |
| Group divider | 1px `#D4D8DC`; margin 16px 0 |

#### Filter groups

| Group | Options |
|-------|---------|
| **Category** | All experiences · Heritage & Culture · Educational Tours · Family Getaways · Adventure & Trekking |
| **Location** | Polo Forest (Idar) · Saputara · Gir · Ahmedabad day trips |
| **Duration** | Half day (≤4 hrs) · Full day · 2D/1N · 3+ days |
| **Price** | Range slider ₹500 – ₹15,000 per person |
| **Difficulty** | Easy · Moderate · Challenging |
| **Age** | All ages · Ages 4+ · Ages 12+ · Adults 18+ |

**Category note caption:** *Corporate programs use a custom proposal flow →* link `/corporate`

**Header row:** H3 "Filters" 16px weight 600 + ghost link "Clear all filters"

#### Active filter chips (above results grid)

| Property | Value |
|----------|-------|
| Chip bg | `#E6F0F8` |
| Chip text | `#005CA9` 14px weight 500 |
| Height | 32px pill |
| Example | `[Heritage ×] [Polo Forest ×] [Full day ×] [₹500–₹5000 ×] [Clear all]` |

---

### A5. Results Grid

**Components:** `UI-CARD-EXPERIENCE-LIST` × n, `UI-SKELETON`, `UI-PAGINATION`

#### Visual treatment

| Property | Value |
|----------|-------|
| Main column | 9 cols |
| Grid | 2 cards per row |
| Gap | 24px |
| Cards per page | 12 (6 rows) |

#### Sample card specs

**Card 1 — Polo Forest Heritage Walk**

| Field | Value |
|-------|-------|
| Image | Temple courtyard; 16:9; radius 28px top |
| Badges | Heritage `#98211E` · Easy |
| Title | Polo Forest Heritage Walk |
| Meta | Polo Forest · 1 day · Ages 8+ · Guided walk |
| Rating | ★★★★★ 4.9 (128 reviews) |
| Price | From ₹1,899 per person |
| CTAs | Book Now · View |
| Caption | Login required · UPI/card at checkout |

**Card 2 — Night Safari at Polo Forest**

| Field | Value |
|-------|-------|
| Badges | Adventure `#EC6602` · Moderate |
| Meta | Polo Forest · 1 night · Ages 12+ |
| Rating | ★★★★☆ 4.7 (86 reviews) |
| Price | From ₹2,499 per person |

#### Card hover (desktop)

`translateY(-2px)`; shadow → large; image scale 1.03.

#### Pagination

| Property | Value |
|----------|-------|
| Style | Numbered pills + prev/next |
| Active page | bg `#005CA9`; text white |
| Inactive | white bg; border `#D4D8DC` |
| Position | centered below grid; margin-top 48px |

#### Empty state

| Property | Value |
|----------|-------|
| Illustration | Map pin outline 64px `#8A948F` |
| H3 | No experiences match your filters |
| Body | Try adjusting your filters or browse all Polo Forest experiences. |
| CTA | Clear all filters (secondary) · View all experiences (primary) |

---

### A6. Mobile Filter Drawer

**Components:** `UI-FILTER-DRAWER` (extends mobile drawer pattern)

| Property | Value |
|----------|-------|
| Presentation | Bottom sheet 90vh max OR full-screen |
| Background | `#FFFFFF` |
| Header | "Filters" + Close + "Clear all" |
| Footer | Sticky **Apply filters** primary full-width |
| Body scroll | Filter groups stacked |

**Trigger:** `[Filters (3)]` button — secondary outline; badge count in `#005CA9`.

---

### A7. Listing Page — Responsive Summary

| Element | Desktop 1440 | Mobile 375 |
|---------|--------------|------------|
| Layout | 3-col sidebar + 9-col grid | Single column |
| Cards | 2-up | 1-up stack |
| Filters | Sticky sidebar | Drawer |
| Toolbar | Single row | 2 rows |
| Trust strip | Inline horizontal | 2-line wrap |

---

## Part B — Experience Detail Page

**Route:** `/experiences/polo-forest-heritage-walk` (reference)  
**Reference:** Cambodia day-by-day program + map + sticky book  
**Layout:** 8-col main + 4-col sticky booking sidebar

---

### B1. Breadcrumb

| Element | Text |
|---------|------|
| Trail | Home › Experiences › Heritage & Culture › Polo Forest Heritage Walk |

Caption 12px; terminal crumb `#2C3E50` weight 500.

**Mobile:** Home › … › Polo Forest Heritage Walk

---

### B2. Detail Hero

**Components:** `UI-HERO-CAROUSEL` variant `UI-DETAIL-HERO`, `UI-BADGE`

#### Visual treatment

| Property | Value |
|----------|-------|
| Min-height | 480px desktop · 360px mobile |
| Image | Full bleed; ancient temple at Polo Forest; cover |
| Overlay | Gradient bottom-heavy: `transparent 40%` → `rgba(30,42,36,0.85) 100%` |
| Content position | Bottom-left; 8 cols |
| Image radius | none (full bleed) |

#### Copy

| Element | Text |
|---------|------|
| Badges | Heritage & Culture · Easy · 1 day |
| H1 | Polo Forest Heritage Walk |
| Lead | Ancient temples, stepwells, and tribal heritage in the Aravalli foothills of Idar, Gujarat. |
| Meta | Polo Forest, Idar · Gujarat · ★★★★★ 4.9 (128 reviews) |
| Utilities | Share · Save to wishlist (Phase 2) |

**Badge colors:** Heritage pill bg `#F5E8E8` text `#98211E`; Easy/1 day neutral `#F9F7F2` bg on dark overlay.

**No CTA in hero** — conversion in booking widget only.

---

### B3. Quick Facts Bar

**Components:** `UI-TRUST-STATS-BAR` variant fact strip

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | bottom 1px `#D4D8DC` |
| Layout | 6 cells × 2 cols |
| Icon | 20px outline `#005CA9` |
| Label | Caption 12px `#8A948F` |
| Value | Body 16px `#2C3E50` weight 500 |

| Fact | Value |
|------|-------|
| Duration | 1 day · 8am–6pm |
| Group size | Max 20 guests |
| Difficulty | Easy |
| Ages | Ages 8+ |
| Language | English guide |
| Departure | Polo Forest gate |
| Price from | From ₹1,899 / person |

**Mobile 375:** 2×3 grid or horizontal scroll snap.

---

### B4. Main Content + Booking Sidebar Layout

**Components:** `UI-DETAIL-LAYOUT`, `UI-BOOKING-WIDGET`, `UI-BOOKING-CTA-STICKY`

| Property | Desktop 1440 | Mobile 375 |
|----------|--------------|------------|
| Main | cols 1–8 | 12 cols |
| Sidebar | cols 9–12 sticky | hidden → bottom bar |
| Sticky top | 80px | — |
| Gap | 24px | — |

---

### B5. Booking Widget (Desktop Sidebar)

#### Visual treatment

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | 1px `#D4D8DC` |
| Radius | 24px |
| Shadow | medium |
| Padding | 24px |
| Width | 4 cols (~400px max) |

#### Anatomy & copy

| Zone | Spec |
|------|------|
| Price | **From ₹1,899 per person** — Price token 20px bold |
| Trust line | ★ 4.9 (128 reviews) · Free cancellation 48hrs before — Caption |
| Divider | 1px `#D4D8DC` |
| Date label | H4 "Select date" |
| Date input | 48px; placeholder "Pick a date" |
| Guests label | H4 "Guests" |
| Guests select | "2 adults" default |
| Guest note | Max 20 guests per departure — Caption |
| Divider | 1px `#D4D8DC` |
| CTA | **Book Now** — primary full-width |
| Caption | Login required · Pay via UPI or card at checkout |
| Link | Cancellation policy → |

#### States

| State | Behavior |
|-------|----------|
| Guest click Book Now | Redirect `/account/login?returnUrl=/plan/book/polo-forest-heritage-walk/dates` |
| Authenticated | `/plan/book/polo-forest-heritage-walk/dates?date=...&guests=...` |
| Date unavailable | Input border error `#98211E`; message below |
| Loading | Button spinner; inputs disabled |

---

### B6. Mobile Sticky Booking Bar

**Components:** `UI-BOOKING-CTA-STICKY`

| Property | Value |
|----------|-------|
| Position | fixed bottom; full width |
| Height | 64px + safe area |
| Background | `#FFFFFF` |
| Shadow | `0 -4px 20px rgba(0,0,0,0.08)` |
| Z-index | 90 (below drawer 100; above content) |
| Main padding-bottom | 80px (prevent overlap) |

| Zone | Content |
|------|---------|
| Left | From ₹1,899/person · ★ 4.9 · Login to book |
| Right | Book Now primary button ~140px |

**Appear trigger:** Intersection observer when desktop sidebar scrolls out of view (tablet/mobile).

---

### B7. Gallery Section

**Components:** `UI-GALLERY-GRID`, lightbox modal

| Property | Value |
|----------|-------|
| H2 | Photo gallery |
| Layout | 1 large hero image + 4 thumbnails |
| Gap | 8px |
| Radius | 16px |
| Primary image height | ~360px |
| "+12 more" tile | bg `#1E2A24`; white text centered |

**Alt text examples:** Temple courtyard at Polo Forest · Harnav river trail · Heritage guide with group · Stepwell ruins

**Link:** View all photos in gallery →

---

### B8. Overview

| Property | Value |
|----------|-------|
| H2 | Overview |
| Lead | Walk through 1,000 years of history in a single day at Polo Forest — Gujarat's best-kept heritage secret. |
| Body | Your guided journey begins at the Polo Forest gate near Idar, winding through 15th-century Jain temples, the ancient stepwell, and riverside trails where local Bhil guides share stories passed down for generations. |
| Stats row | 128 reviews · 4.9★ avg · 98% would recommend |

Stats: inline pills; bg `#F9F7F2`; padding 8px 16px; radius 999px.

---

### B9. Timeline — Your Day at a Glance

**Components:** `UI-JOURNEY-TIMELINE` vertical variant

| Property | Value |
|----------|-------|
| Connector | 2px line `#D4D8DC` |
| Node | 12px circle; border 2px `#005CA9`; fill white |
| Time | Caption 12px `#005CA9` weight 600 |
| Title | H4 16px |
| Description | Body Sm `#5F6B64` |

| Time | Activity |
|------|----------|
| 08:00 | Meet at Polo Forest gate, Idar |
| 08:30 | Jain temple circuit |
| 11:00 | Stepwell & archaeology stop |
| 12:30 | Gujarati lunch at forest dhaba |
| 14:00 | Harnav river trail |
| 16:30 | Tribal heritage storytelling |
| 18:00 | Return to gate · departure |

**Caption:** Times approximate; may vary by season and group size.

---

### B10. Detailed Itinerary (Cambodia alternating layout)

**Components:** `UI-FAQ-ACCORDION` variant `UI-ITINERARY-ACCORDION`

| Property | Value |
|----------|-------|
| H2 | Detailed itinerary |
| Item header | 16px weight 600; chevron; min-height 56px |
| Expanded panel | Body 16px; padding 16px 0 24px |
| First item | Open by default |
| Multi-day | Day pills: Day 1 `#005CA9` active · Day 2 inactive |

**Expanded Stop 1 copy:**  
Arrive at the main gate 2 km from Idar town. Your Polo Safari guide distributes water, sun hats, and a route map. Safety rules for temple visits and forest paths explained.  
*Meeting point: Google Maps pin linked in Map section ↓*

**Multi-day enhancement:** Odd days — text left / image cluster right; even days — flipped (Cambodia pattern). Day pill badge uses pillar color.

---

### B11. Highlights Grid (Cambodia sensory grid)

**Components:** `UI-HIGHLIGHTS-GRID`

| Property | Value |
|----------|-------|
| Layout | 4 × 2 cols |
| Cell | White card; padding 24px; radius 16px; shadow soft |
| Icon | 24px `#005CA9` |

| Highlight | Description |
|-----------|-------------|
| 15th-century Jain temples | 3 sites on route |
| Expert Bhil storytellers | Living oral history |
| Gujarati forest lunch | Vegetarian thali included |
| Small groups max 20 | Personal attention |

---

### B12. Inclusions / Exclusions / Packing

**Layout:** Desktop 6+6 split for Included | Not Included; packing full width below.

| Included | Not included |
|----------|--------------|
| ✓ Expert heritage guide | ✗ Transport from Ahmedabad |
| ✓ Entry fees to temples | ✗ Personal expenses |
| ✓ Gujarati vegetarian lunch | ✗ Travel insurance |
| ✓ Water and refreshments | |
| ✓ Route map and safety briefing | |

Checkmark `#00963F`; cross `#98211E`.

**Packing list categories:** Clothing (comfortable walking shoes, hat) · Essentials (sunscreen, water bottle) · Optional (binoculars, camera).

---

### B13. Map Section

**Components:** `UI-MAP-EMBED`

| Property | Value |
|----------|-------|
| H2 | Location & meeting point |
| Map height | 400px desktop · 280px mobile |
| Border radius | 24px |
| Pin | Polo Blue `#005CA9` |
| Route line (multi-day) | Dotted `#005CA9`; numbered stops 1–4 |

**Copy:**  
**Meeting point:** Polo Forest main gate, near Idar, Sabarkantha district, Gujarat — approximately 2 hours from Ahmedabad.

**Multi-day route map (packages):** Stops — 1 Idar meeting · 2 Temple trail · 3 River camp · 4 Return. Click stop → scroll to itinerary day.

**Map bg subtle:** `#EEF7FB` (`--color-accent-water-subtle`) behind embed.

---

### B14. Reviews Section

| Property | Value |
|----------|-------|
| H2 | Guest reviews |
| Aggregate | 4.9 ★★★★★ — 128 reviews |
| Distribution bar | 5-star 82% · 4-star 12% · etc. |
| Cards | 3 review cards; avatar 40px; badge pillar |
| CTA | Load more reviews |

**Sample review:**  
*"The heritage guide's knowledge of the Jain temples was extraordinary — our family learned more in one day than in any museum."* — **Priya & Amit Shah** · Family trip · ★★★★★

---

### B15. FAQ (Experience-specific)

5 accordion items: fitness level · what to wear · pickup from Ahmedabad · cancellation · children allowed.

---

### B16. Related Tours

**Components:** `UI-CARD-EXPERIENCE` horizontal scroll

| Property | Value |
|----------|-------|
| Layout | Horizontal snap row; 3 visible |
| Card width | 320px |
| Heading | More Heritage experiences |

**Cards:** Stepwell & Ruins Tour · Tribal Village Walk · Polo Forest Photography Walk

---

### B17. Detail Page — Responsive Summary

| Section | Desktop 1440 | Mobile 375 |
|---------|--------------|------------|
| Hero | 480px; 8-col text | 360px; full width |
| Quick facts | 6-col row | 2×3 grid |
| Booking | Sticky sidebar | Fixed bottom bar |
| Gallery | Hero + 4 thumbs | Swipe carousel |
| Itinerary | Accordion | Same; 48px headers |
| Map | 400px embed | 280px |
| Related | Horizontal scroll | Snap scroll |

---

## Part C — Navigation Mega Menu (Desktop)

**Component:** `UI-NAV-MEGA`  
**Trigger:** Experiences ▾ — click primary; keyboard Enter/Space  
**Reference:** Wireframe D2 + Cambodia category + featured grid

---

### C1. Panel Container

| Property | Value |
|----------|-------|
| Width | 1280px (aligned to content container) |
| Position | Absolute; below header; left 50% translateX(-50%) at 1440 |
| Background | `#FFFFFF` |
| Border radius | 0 0 24px 24px |
| Shadow | `0 16px 40px rgba(0,0,0,0.10)` |
| Padding | 32px |
| Z-index | 110 |

---

### C2. Two-Column Layout

| Column | Grid | Content |
|--------|------|---------|
| Left — Browse by type | 4 cols | Category link list |
| Right — Featured | 8 cols | 3 mini experience cards |

---

### C3. Category List (Left)

**Heading:** H4 Inter 14px uppercase tracking 0.08em `#8A948F` — "Browse by type"

| Link | Pillar dot | href |
|------|------------|------|
| Heritage & Culture | `#98211E` | `/experiences/category/heritage` |
| Education & Ecology | `#00963F` | `/experiences/category/education` |
| Corporate & MICE | `#346982` | `/corporate` |
| Family Getaways | `#7EAF39` | `/experiences/category/family` |
| Adventure & Trekking | `#EC6602` | `/experiences/category/adventure` |

| Property | Value |
|----------|-------|
| Link style | Inter 16px `#2C3E50`; padding 10px 12px; radius 8px |
| Hover | bg `#F9F7F2` |
| Dot | 8px circle before label |

**Footer links (left column bottom):**  
View all experiences → `/experiences`

---

### C4. Featured Experiences (Right)

**Heading:** "Featured experiences"

**3 mini cards (~280px each):**

| Card | Image | Title | Caption |
|------|-------|-------|---------|
| 1 | Temple thumb | Polo Forest Heritage Walk | From ₹1,899 · 1 day |
| 2 | Forest night | Night Safari | From ₹2,499 · 1 night |
| 3 | Campfire | Family Camping Weekend | From ₹4,999 · 2D/1N |

Mini card spec: image 16:9 radius 16px top; padding 12px; shadow soft; entire card links to detail page.

**Footer link (right):** Corporate programs → `/corporate`

---

### C5. Mega Menu States & Motion

| State | Treatment |
|-------|-----------|
| Closed | hidden; `pointer-events: none` |
| Open | opacity 1; translateY(0) |
| Opening | opacity 0→1; translateY(-8px→0); 180ms ease-out |
| Hover on trigger | underline 2px `#005CA9` (scrolled header) |

**Close:** Escape key · click outside · focus leaves panel

---

### C6. Mega Menu Accessibility

- `aria-expanded` on trigger
- Focus moves into panel on open; Tab cycles within; Shift+Tab returns to trigger
- `role="navigation"` `aria-label="Experiences menu"`
- Featured cards: descriptive link text including price

---

## Part D — Mobile Navigation Drawer

**Component:** `UI-NAV-MOBILE-DRAWER`  
**Trigger:** Hamburger ≡ at `<768px`  
**Breakpoint:** Mobile 375 primary target

---

### D1. Scrim & Panel

| Property | Value |
|----------|-------|
| Scrim | `rgba(30,42,36,0.5)` |
| Panel width | 100vw max 400px |
| Panel bg | `#FFFFFF` |
| Slide | from right; 300ms |
| Z-index | 100 |

---

### D2. Drawer Header

| Property | Value |
|----------|-------|
| Height | 64px |
| Logo | 36px height left |
| Close | 44×44 X icon right |
| Border bottom | 1px `#D4D8DC` |

---

### D3. Search (Inline)

| Property | Value |
|----------|-------|
| Padding | 16px |
| Input | Full width 48px; icon left; placeholder below |

**Placeholder:** Search experiences, stories...

---

### D4. Accordion Navigation

| Section | Items |
|---------|-------|
| **▼ Experiences** | Heritage & Culture · Education & Ecology · Corporate & MICE · Family Getaways · Adventure & Trekking · View all experiences |
| **▼ Discover** | Polo Forest Story · Gallery · Stories & Insights (`/blog`) · Guest Reviews · FAQ · About Polo Safari |
| **Top-level links** | Polo Forest · Plan Your Trip |

| Property | Value |
|----------|-------|
| Accordion header | 48px min-height; 16px weight 600 |
| Child link | 44px min-height; 16px `#2C3E50`; padding-left 32px |
| Active | color `#005CA9`; bg `#E6F0F8` |
| Chevron | rotate 180deg when expanded |

---

### D5. Utilities Block

| Row | Content |
|-----|---------|
| Language | 🌐 Language: English ▾ |
| Theme | ☀ Theme: Light ▾ |

Caption labels visible (not icon-only).

---

### D6. Bottom CTA Zone (Sticky)

| Property | Value |
|----------|-------|
| Position | sticky bottom of drawer |
| Padding | 16px + safe area |
| Background | `#FFFFFF` |
| Border top | 1px `#D4D8DC` |
| Button | Plan Your Visit — primary full-width |
| Secondary row | Contact · Login — ghost links centered |

---

### D7. Discover Dropdown (Desktop companion)

**Component:** `UI-NAV-DROPDOWN` — documented for completeness

| Property | Value |
|----------|-------|
| Width | 240px |
| Items | Polo Forest Story · Gallery · Stories & Insights · Guest Reviews · FAQ · divider · About Polo Safari |
| Shadow | medium |
| Radius | 12px |

Same links as Discover accordion in mobile drawer.

---

### D8. Profile Dropdown (Both breakpoints)

**Guest:**

```
Login
Create account
─────────────────
Login required to book
```

**Authenticated:**

```
○ Priya Shah
  priya@email.com
─────────────────
My bookings
Profile settings
─────────────────
Log out
```

Width 260px; shadow medium; radius 12px.

---

## Part E — Cross-Page Component Count

| Page / Area | Distinct UI components |
|-------------|------------------------|
| Experience Listing | 14 (`UI-BREADCRUMB`, `UI-FILTER-SIDEBAR`, `UI-FILTER-DRAWER`, `UI-FILTER-CHIP`, `UI-LISTING-TOOLBAR`, `UI-SORT-SELECT`, `UI-RESULTS-COUNT`, `UI-CARD-EXPERIENCE-LIST`, `UI-PAGINATION`, `UI-SKELETON`, `UI-TRUST-STATS-BAR`, `UI-NAV-HEADER-SCROLLED`, `UI-SHELL-FOOTER`, empty state) |
| Experience Detail | 18 (`UI-DETAIL-HERO`, `UI-QUICK-FACTS-BAR`, `UI-DETAIL-LAYOUT`, `UI-BOOKING-WIDGET`, `UI-BOOKING-CTA-STICKY`, `UI-GALLERY-GRID`, `UI-ITINERARY-ACCORDION`, `UI-HIGHLIGHTS-GRID`, `UI-MAP-EMBED`, `UI-JOURNEY-TIMELINE`, review section, `UI-CARD-EXPERIENCE`, `UI-FAQ-ACCORDION`, inclusion lists, etc.) |
| Mega Menu | 1 (`UI-NAV-MEGA` + 3 mini cards) |
| Mobile Drawer | 1 (`UI-NAV-MOBILE-DRAWER`) |
| Discover Dropdown | 1 (`UI-NAV-DROPDOWN`) |
| Profile Menu | 1 (`UI-NAV-PROFILE`) |

**Key pages total distinct components: 22** (excluding shared design system primitives already counted in [00-ui-design-system.md](./00-ui-design-system.md))

---

## Part F — CSS Custom Properties Quick Reference (Key Pages)

| Context | Key tokens |
|---------|------------|
| Page bg | `--color-surface-muted` |
| Cards | `--color-surface`, `--shadow-card`, `--radius-card` |
| Primary CTA | `--color-primary`, `--color-primary-hover` |
| Pillar badges | `--color-pillar-*`, `--color-pillar-*-subtle` |
| Sticky offsets | `--header-height-condensed` (64px) + 16px |
| Focus | `--focus-ring` |
| Map accent | `--color-accent-water`, `--color-accent-water-subtle` |

---

**Document path:** `docs/ui/02-key-pages-hifi.md`  
**Previous:** [01-homepage-hifi.md](./01-homepage-hifi.md)
