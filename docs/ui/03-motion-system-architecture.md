# Polo Safari — Motion System Architecture

**Version:** 1.0.0  
**Status:** READY FOR REVIEW — Phase 6 complete. Awaiting approval for Phase 7.  
**Scope:** Motion architecture ONLY — no code, no implementation  
**Phase:** 6 of Polo Safari Cursor Master Workflow v1.0  
**Token source:** [04-design-tokens.css](../brand/04-design-tokens.css)  
**Design system:** [00-ui-design-system.md](./00-ui-design-system.md)  
**Homepage:** [01-homepage-hifi.md](./01-homepage-hifi.md)  
**Inner pages:** [02-key-pages-hifi.md](./02-key-pages-hifi.md) + UX wireframes Steps 5–10

---

## Summary

Polo Safari motion is **editorial, restrained, and purpose-driven** — motion exists to guide emotion arcs (Wonder → Trust → Curiosity → Action), clarify hierarchy, and reinforce premium trust. It must never compete with photography or slow conversion.

**Core stance:** Native browser scroll (no Lenis). CSS for micro-interactions and layout transitions. Framer Motion for React orchestration (scroll reveals, page shells, carousels, modals). GSAP only where Framer Motion cannot meet a documented need (partner marquee, optional hero Ken Burns). Three.js deferred to Phase 2+ immersive modules. Intersection Observer for visibility triggers and lazy count-up — not as an animation library.

**MVP alignment:** Enquiry-first — motion prioritizes RFP forms, Plan Your Visit / Plan My Journey CTAs, and trust-building over booking wizard flourishes. Booking UI motion is spec'd but gated behind Phase 2.

**Performance contract:** Lighthouse Performance ≥ 90. Motion JS budget ≤ 45 KB gzipped (Framer Motion tree-shaken + shared motion utils). GPU-only properties (`transform`, `opacity`). `prefers-reduced-motion` zeroes all duration tokens globally.

---

## Files Reviewed

| File | Role in Phase 6 |
|------|-----------------|
| `TEMP/UI 1.0/MOTION_DESIGN_SYSTEM.txt.md` | Reference library list, duration tiers, anti-patterns — **filtered** for over-animation |
| `@@Docs/.../09_MOTION_SYSTEM.md` | Pillar emotion cues (fog, bloom, team formation) |
| `@@Docs/.../02_VISION_AND_EXPERIENCE_BIBLE.md` | Homepage + pillar emotion arcs |
| `docs/brand/04-design-tokens.css` | Motion token primitives (`--duration-*`, `--ease-default`) |
| `docs/brand/05-design-system-v1.1-review.md` | Locked color/CTA reconciliation |
| `docs/ui/00-ui-design-system.md` | Phase 5 component motion baselines |
| `docs/ui/01-homepage-hifi.md` | 24-section homepage motion targets |
| `docs/ui/02-key-pages-hifi.md` | Listing, detail, nav motion |
| `docs/ux-wireframes/05-corporate.md` | Corporate emotion arc + RFP |
| `docs/ux-wireframes/06-educational-tours.md` | Education emotion arc + school RFP |
| `docs/ux-wireframes/07-destinations.md` | Destination discovery motion |
| `docs/ux-wireframes/08-gallery.md` | Masonry + lightbox |
| `docs/ux-wireframes/10-blogs.md` | Editorial blog motion |
| `docs/ux-wireframes/11-contact.md` | Conversion page motion |
| `docs/ux-wireframes/12-booking-flow.md` | Wizard stepper (Phase 2 reference) |

---

## Motion Principles (Aligned to Experience Bible)

Every animation answers: **"Why does this improve the experience?"**

| Principle | Rule | Experience Bible tie-in |
|-----------|------|-------------------------|
| **Purpose over polish** | No motion without UX or storytelling job | "Motion must communicate meaning" |
| **Invisible craft** | Users feel smoothness, not animation | Wonder without spectacle |
| **Emotion arc pacing** | Early = wonder (slow, soft); mid = trust (steady); late = action (snappy) | Homepage Wonder → Trust → Curiosity → Action |
| **Pillar vocabulary** | Education = gentle emergence; Corporate = confident slides; Adventure = energetic but not gaming; Family = warm fades; Heritage = editorial reveals | Per-pillar arcs in Bible |
| **Photography first** | Motion frames content; never obscures hero imagery | 65% photography ratio |
| **One hero moment per viewport** | Max one scroll-triggered reveal per screen height | Prevents TEMP "never repeat" overload |
| **Touch ≠ hover** | Hover motion desktop-only; touch gets instant state change | Performance + a11y |
| **Enquiry gravity** | CTA-adjacent motion slightly faster/snappier than editorial bands | Enquiry-first MVP |
| **Respect the forest** | Organic easing, no bounce/elastic except micro spring on success check | Premium, not cartoon |

### Global "Why" checklist (required per motion spec)

1. Does it improve **orientation** (where am I, what changed)?  
2. Does it improve **hierarchy** (what matters first)?  
3. Does it improve **trust** (stability, polish, credibility)?  
4. Does it improve **storytelling** (pillar emotion)?  
5. If none → **None** (no animation).

---

## Motion Token System

Maps to Phase 5 `04-design-tokens.css`. Extend tokens in Phase 7 scaffold — do not invent parallel scales.

### Durations

| Token | Value | Phase 5 mapping | Use |
|-------|-------|-----------------|-----|
| `--motion-duration-instant` | `0ms` | `prefers-reduced-motion` override | All motion when reduced |
| `--motion-duration-fast` | `150ms` | `--duration-fast` | Accordion chevron, chip dismiss, focus rings |
| `--motion-duration-normal` | `200ms` | `--duration-normal` | Button hover, header condense, card hover |
| `--motion-duration-slow` | `300ms` | `--duration-slow` | Drawer, carousel crossfade, dropdown |
| `--motion-duration-reveal` | `500ms` | *new semantic* | Section scroll reveals (max per element) |
| `--motion-duration-hero` | `700ms` | *new semantic* | Hero text entrance (slide 1 only) |
| `--motion-duration-hero-max` | `1000ms` | TEMP cap | Ken Burns / progress bar fill — never exceed |
| `--motion-duration-marquee` | `40000ms` | *new semantic* | Partner logo loop (linear OK here) |
| `--motion-duration-carousel` | `8000ms` | homepage spec | Hero auto-advance interval (not transition) |

**Hard cap:** No UI transition > `1200ms`.

### Easings

| Token | Value | Use |
|-------|-------|-----|
| `--motion-ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | `--ease-default` — general UI |
| `--motion-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Entrances, menus opening |
| `--motion-ease-in-out` | `cubic-bezier(0.4, 0, 0.6, 1)` | Carousels, drawer close |
| `--motion-ease-emphasis` | `cubic-bezier(0.22, 1, 0.36, 1)` | Hero headline reveal only |
| `--motion-ease-linear` | `linear` | Progress bars, marquee, loading bars only |

**Never:** `linear` on UI entrances. **Avoid:** aggressive spring (>300 stiffness) except success micro-feedback.

### Distances (transform offsets)

| Token | Value | Phase 5 mapping | Use |
|-------|-------|-----------------|-----|
| `--motion-distance-xs` | `4px` | `--space-1` / 2 | Button lift, mega menu Y |
| `--motion-distance-sm` | `8px` | `--space-1` | Scroll reveal translateY |
| `--motion-distance-md` | `16px` | `--space-2` | Drawer slide reference |
| `--motion-distance-lg` | `24px` | `--space-3` | Section group reveal |
| `--motion-distance-card-lift` | `2px` | design system | Card hover translateY |
| `--motion-distance-card-hover-image` | `3%` scale | design system | Image zoom 1.03 |
| `--motion-distance-parallax-max` | `8%` | TEMP 15% **reduced** | Hero background only |

### Stagger

| Token | Value | Use |
|-------|-------|-----|
| `--motion-stagger-tight` | `50ms` | FAQ items, filter chips |
| `--motion-stagger-normal` | `80ms` | Card grids (max 4 items) |
| `--motion-stagger-relaxed` | `120ms` | Hero headline lines (max 3) |
| `--motion-stagger-cap` | `4` | Never stagger more than 4 children per group |

### Opacity & blur budgets

| Token | Value | Use |
|-------|-------|-----|
| `--motion-opacity-enter` | `0 → 1` | Standard fade-in |
| `--motion-opacity-scrim` | `0.5` | Drawer/lightbox scrim |
| `--motion-blur-glass` | `12px` | Nav glass, Quick Search — **static**, not animated |
| `--motion-blur-max-animated` | `4px` | Page transition fade-blur — avoid in MVP |

---

## Technology Decision Matrix

**One recommendation per use case.**

| Use case | Library | Why | MVP |
|----------|---------|-----|-----|
| **Hero** (carousel + text entrance) | **Framer Motion** | React carousel orchestration, `AnimatePresence` for slides, respects reduced motion via tokens | Yes |
| **Scroll reveals** (sections) | **Intersection Observer** + **Framer Motion** | IO triggers once; Framer applies variants — avoids scroll-linked JS | Yes |
| **Page transitions** | **Framer Motion** (layout shell) | Next.js App Router shared layout fade; no route morph MVP | Yes — fade only |
| **Mega menu** | **CSS only** + Framer `AnimatePresence` optional | Opacity + translateY is trivial; design system already specifies 180ms | Yes — CSS preferred |
| **Mobile drawer** | **Framer Motion** | Focus trap + slide + scrim sync | Yes |
| **Carousels** (hero, testimonials, related) | **Embla Carousel** + **CSS** transitions | Already in stack; Framer only for slide content crossfade | Yes |
| **Cards hover** | **CSS only** | `transform` + `box-shadow` in stylesheet; no JS | Yes |
| **Forms** (focus, validation) | **CSS only** | Border, ring, shake via `@keyframes` once on error | Yes |
| **Wizard stepper** (Plan / booking) | **Framer Motion** | Step slide + progress — Phase 2 | Deferred |
| **Gallery lightbox** | **Framer Motion** | Modal enter/exit, swipe between images | Yes |
| **Stats count-up** | **Intersection Observer** + **CSS** or **light JS** | Count only when visible; no GSAP DrawSVG | Yes |
| **Parallax** | **CSS only** (`scroll-timeline` progressive) or **None** | Prefer static hero; subtle CSS if supported, else skip | Optional — None default |
| **Video** | **None** (native) | `autoplay muted playsinline`; opacity fade on poster swap via CSS | Yes |
| **Partner marquee** | **CSS** `@keyframes` or **GSAP** | Infinite loop; CSS preferred; GSAP if pause/sync needed | Yes — CSS |
| **Interactive story** (§12) | **Framer Motion** | Panel crossfade on chapter pill | Yes |
| **Map route highlight** | **None** | Static embed; no animated pins MVP | Yes |
| **Search overlay** | **Framer Motion** | Expand + results fade | Yes |
| **Sticky CTAs** (booking bar) | **Intersection Observer** + **CSS** | Show/hide bar — no animation library | Yes |
| **Reduced-motion fallbacks** | **CSS** `@media (prefers-reduced-motion)` | Zeroes tokens globally | Yes |
| **Three.js** (fog, river, 3D forest) | **Three.js (future)** | Experience Bible hero fog — not MVP; LCP risk | Phase 2+ |
| **Lenis smooth scroll** | **None** | Conflicts with a11y, hijacks scroll — **rejected** | No |
| **Lottie** | **None** MVP | Loading/success only Phase 2; no hero Lottie | Deferred |
| **Cursor effects** | **None** | TEMP magnetic cursor — rejected | No |
| **Confetti** | **None** | TEMP success confetti — rejected | No |

---

## Page-Level Motion Architecture

### Homepage (`/`)

**Emotion arc:** Wonder → Trust → Curiosity → Action  
**Note:** Homepage spec defines **24 sections** (Announcement through Footer). Motion is **sparse** — ~40% of sections use scroll reveal; remainder are static or hover-only.

| § | Section | Motion intent | Library | Trigger | Duration | Reduced-motion fallback |
|---|---------|---------------|---------|---------|----------|-------------------------|
| 1 | Navigation | Orient: condense on scroll; glass is static | CSS | `scrollY > 80px` | 200ms | Instant height/bg swap |
| 2 | Announcement | None — informational | None | — | — | — |
| 3 | Hero carousel | Wonder: first-slide text reveal; slide crossfade | Framer Motion + Embla | Mount + 8s interval | 700ms text; 300ms slide | First slide static; manual only; no auto-advance |
| 4 | Quick Search | Action: pill already overlaps hero — subtle fade-in on mount | Framer Motion | `inView` once, threshold 0.3 | 300ms | Fully visible immediately |
| 5 | Categories | Curiosity: horizontal scroll native; no per-card reveal | None | — | — | — |
| 6 | Featured experiences | Trust: asymmetric block fade-up once | IO + Framer | `inView` 0.2 | 500ms; stagger 80ms ×3 max | Static layout |
| 7 | Trust stats | Trust: count-up when visible | IO + light JS | `inView` 0.5 | 1200ms count | Show final numbers instantly |
| 8 | Testimonials | Trust: featured quote fade; scroll row native | IO + Framer | `inView` 0.3 | 500ms | Static |
| 9 | Trust wall | Trust: logos static; no auto-scroll faces | None | — | — | — |
| 10 | Education pillar | Wonder: step images alternate fade | IO + Framer | per step `inView` | 500ms | Static |
| 11 | Corporate pillar | Confidence: dark scrim static; cards fade | IO + Framer | `inView` 0.2 | 500ms | Static |
| 12 | Interactive story | Storytelling: chapter panel crossfade | Framer Motion | Pill click / swipe | 300ms | Instant swap |
| 13 | Adventure | Curiosity: panorama static; cards hover only | CSS hover | hover | 200ms | No hover transform |
| 14 | Heritage | Editorial: panoramic static; thumb hover | CSS hover | hover | 200ms | No hover |
| 15 | Family | Warmth: 6+6 split — image fade only | IO + Framer | `inView` 0.3 | 500ms | Static |
| 16 | Destinations | Curiosity: featured card static; hover zoom | CSS | hover | 200ms | No scale |
| 17 | Packages | Action: cards hover only | CSS | hover | 200ms | No lift |
| 18 | Gallery preview | Immersion: masonry static; hover zoom | CSS | hover | 200ms | No scale |
| 19 | Blog | Editorial: featured fade once | IO + Framer | `inView` 0.2 | 500ms | Static |
| 20 | Journey timeline | Flow: steps stagger once | IO + Framer | `inView` 0.3 | 500ms; stagger 80ms ×5 | All visible |
| 21 | Partners | Ambient: slow marquee | CSS `@keyframes` | always | 40s linear | Static row |
| 22 | FAQ | Utility: accordion expand | CSS | click | 150ms | Instant expand |
| 23 | Emotional CTA | Action: band fade once | IO + Framer | `inView` 0.4 | 500ms | Static |
| 24 | Footer | None | None | — | — | — |

**Homepage rules:**
- Max **one** scroll reveal animation per viewport height.
- Never animate announcement, trust wall logos, or footer.
- Hero Ken Burns (scale 1 → 1.05): CSS `@keyframes` over 20s on active slide only — disable when reduced motion.

---

### Corporate (`/corporate`)

**Emotion arc:** Ambition → Confidence → Commitment  
**Pillar motion cue:** Team formation — elements resolve into structure (staggered grid, not literal people animation).

| Section | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Hero | Confidence: split layout fade-up | IO + Framer | `inView` | 500ms | Static |
| Benefits grid | Team formation: 4 cards stagger | IO + Framer | `inView` | 500ms; stagger 80ms ×4 | Static grid |
| Team building | None — image-forward | None | — | — | — |
| Activities | Editorial alternate: odd fade-left, even fade-right | IO + Framer | per row `inView` | 500ms | Static |
| Case studies | Trust: metric count optional | IO + JS | `inView` | 1000ms | Final values |
| Clients | Logo wall static (no infinite scroll) | None | — | — | — |
| Packages | Hover lift only | CSS | hover | 200ms | None |
| FAQ | Accordion | CSS | click | 150ms | Instant |
| RFP form | Focus on submit success — check fade | CSS | submit | 300ms | Instant check |

**Sticky RFP prompt (if implemented):** IO show + CSS `translateY` 200ms when hero CTA scrolls out.

---

### Schools / Educational Tours (`/education`)

**Emotion arc:** Wonder → Confidence → Trust → Action  
**Pillar motion cue:** Gentle emergence (bloom) — soft opacity + slight Y, no literal butterfly SVG animation MVP.

| Section | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Hero | Wonder: soft fade-up | IO + Framer | `inView` | 700ms | Static |
| Learning outcomes | Bloom: cards stagger | IO + Framer | `inView` | 500ms; stagger 80ms | Static |
| Subjects | None — grid static | None | — | — | — |
| Age bands | Tab switch crossfade | Framer Motion | tab click | 200ms | Instant |
| Activities | Gentle fade per card | IO + Framer | `inView` | 500ms | Static |
| Safety | Trust: icon row static | None | — | — | — |
| Teacher benefits | Split fade | IO + Framer | `inView` | 500ms | Static |
| Schools logos | Static grid | None | — | — | — |
| Gallery strip | Hover zoom only | CSS | hover | 200ms | None |
| Testimonials | Fade once | IO + Framer | `inView` | 500ms | Static |
| School inquiry form | Same as corporate RFP | CSS | submit | 300ms | Instant |

---

### Destinations (`/destinations`, `/polo-forest`)

**Emotion arc:** Wonder → Exploration → Action

| Section | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Hero | Immersive fade | IO + Framer | `inView` | 500ms | Static |
| Featured destination | Parallax **None** MVP | None | — | — | — |
| Destination cards | Hover image scale | CSS | hover | 200ms | None |
| Experience list embed | Card hover only | CSS | hover | 200ms | None |
| Map | Static | None | — | — | — |
| CTA band | Fade once | IO + Framer | `inView` | 500ms | Static |

---

### Tour Packages (`/packages`, package detail)

**Emotion arc:** Comparison → Confidence → Enquiry

| Section | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Listing grid | Stagger cards once | IO + Framer | `inView` | 500ms; cap 4 | Static |
| Package detail hero | Fade | IO + Framer | mount | 300ms | Static |
| Itinerary accordion | Expand | CSS | click | 150ms | Instant |
| Day pills | Underline slide | CSS | click | 200ms | Instant |
| Pricing CTA | Sticky bar IO | IO + CSS | sidebar out of view | 200ms | Always visible |

---

### Gallery (`/gallery`)

**Emotion arc:** Wonder → Immersion → Curiosity

| Section | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Filter bar | Chip active state | CSS | click | 150ms | Instant |
| Masonry grid | **No** scroll reveal per tile | None | — | — | — |
| Tile hover | Scale + overlay | CSS | hover | 200ms | None |
| Lightbox open | Fade + scale 0.98→1 | Framer Motion | click | 300ms | Instant full opacity |
| Lightbox navigate | Horizontal slide | Framer Motion | prev/next | 250ms | Instant swap |
| Video tile | Play icon opacity | CSS | hover | 150ms | None |
| Load more | Button loading state | CSS | click | 200ms | Spinner only |

---

### Blog (`/blog`, `/blog/[slug]`)

**Emotion arc:** Curiosity → Engagement → Action

| Section | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Index featured | Editorial fade | IO + Framer | `inView` | 500ms | Static |
| Card grid | None — static | None | — | — | — |
| Article hero | None — readability first | None | — | — | — |
| In-article images | Lazy fade-in | CSS | `loading=lazy` onload | 300ms | Instant |
| Related posts | Horizontal scroll native | None | — | — | — |

---

### Conversion Pages

#### Contact (`/contact`)

| Element | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Form sections | None | None | — | — | — |
| Field error | Shake once | CSS `@keyframes` | validation | 400ms | Border only |
| Submit success | Checkmark draw | CSS | success | 300ms | Static check |
| Map embed | Static | None | — | — | — |

#### Plan Your Visit / Enquiry (`/plan`)

| Element | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Page enter | Soft fade | Framer Motion | route | 200ms | Instant |
| Wizard steps (Phase 2) | Slide horizontal | Framer Motion | step change | 300ms | Instant |
| Progress bar | Width transition | CSS | step change | 300ms linear | Jump to width |

#### Newsletter (homepage §23 band)

| Element | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Subscribe | Button loading | CSS | submit | 200ms | Same |
| Success | Inline message fade | CSS | success | 200ms | Instant |

---

### Experience Listing (`/experiences`)

| Element | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Page header | Fade once | IO + Framer | `inView` | 300ms | Static |
| Filter sidebar | None — sticky static | None | — | — | — |
| Results grid | Skeleton → content crossfade | CSS | data load | 200ms | Instant |
| Filter drawer | Slide up | Framer Motion | open | 300ms | Instant |
| Pagination | None | None | — | — | — |
| Empty state | Illustration fade | IO + Framer | mount | 300ms | Static |

---

### Experience Detail (`/experiences/[slug]`)

| Element | Motion intent | Library | Trigger | Duration | Reduced fallback |
|---------|---------------|---------|---------|----------|------------------|
| Hero | None — LCP image priority | None | — | — | — |
| Quick facts | Fade once | IO + Framer | `inView` | 300ms | Static |
| Booking widget | None — conversion clarity | None | — | — | — |
| Sticky mobile bar | Slide up | IO + CSS | widget out of view | 200ms | Visible always |
| Gallery | Lightbox per gallery spec | Framer Motion | click | 300ms | Instant |
| Itinerary accordion | Expand | CSS | click | 150ms | Instant |
| Related tours | Embla scroll | Embla | native | — | — |

---

## Component Motion Specs

### Header (`UI-NAV-HEADER`)

| State | Motion | Library | Duration | Reduced |
|-------|--------|---------|----------|---------|
| Transparent → scrolled | Height 72→64px, bg glass→white, link color | CSS `transition` | 200ms | Instant |
| Mega menu open | opacity 0→1, translateY −8→0 | CSS | 180ms ease-out | Instant display |
| Discover dropdown | opacity + translateY −4→0 | CSS | 150ms | Instant |
| Active link underline | scaleX 0→1 | CSS | 200ms | Static underline |
| Search icon | None | — | — | — |

**Why:** Orients without distracting from hero photography.

---

### Buttons (`UI-BTN-*`)

| Variant | Hover | Active | Loading | Focus |
|---------|-------|--------|---------|-------|
| Primary | `translateY(-1px)` + shadow soft | `translateY(0)` | spinner opacity | ring — no animation |
| Secondary | bg transition | border color | spinner | ring |
| Ghost | bg fade | color | — | ring |
| Icon | bg fade | scale 0.98 | — | ring |

**Library:** CSS only — `transition: transform 200ms, background 200ms, box-shadow 200ms`  
**Reduced:** No transform; color/bg change only.  
**Why:** Tactile feedback without ripple/magnetic effects.

---

### Cards (`UI-CARD-*`)

| Card type | Hover (desktop) | Scroll reveal | Touch |
|-----------|-----------------|---------------|-------|
| Experience | translateY −2px, shadow large, image scale 1.03 | Optional listing only | No lift |
| Category scroll | None — scroll snap | None | — |
| Destination | image scale 1.03, overlay opacity | None | No scale |
| Package | translateY −2px | None | No lift |
| Testimonial | None | Featured fade once | — |

**Library:** CSS hover; IO+Framer for listing grid stagger only.  
**Why:** Hover signals interactivity; scroll reveal reserved for first grid row only.

---

### Forms (`UI-INPUT-*`, RFP forms)

| Interaction | Motion | Library | Duration | Reduced |
|-------------|--------|---------|----------|---------|
| Focus | border color + focus ring | CSS | 150ms | Same (ring required) |
| Error | shake 4px × 2 + border | CSS keyframes | 400ms once | Border only |
| Success | checkmark opacity | CSS | 300ms | Instant |
| Submit loading | button spinner | CSS | infinite | Same |
| Floating labels | **None** MVP — visible labels per spec | — | — | — |

**Why:** Validation motion draws attention to errors without blocking input.

---

### Accordion (`UI-FAQ-ACCORDION`, itinerary)

| Property | Value |
|----------|-------|
| Panel | `grid-template-rows: 0fr → 1fr` or height auto with CSS |
| Chevron | `rotate(180deg)` |
| Duration | 150ms |
| Library | CSS |
| Reduced | `display` toggle — instant |

---

### Search overlay (`UI-SEARCH-OVERLAY`)

| Phase | Motion | Library | Duration |
|-------|--------|---------|----------|
| Open | scrim fade + panel translateY −16→0 | Framer Motion | 250ms |
| Results | list opacity stagger max 4 | Framer Motion | 50ms stagger |
| Close | reverse | Framer Motion | 200ms |
| Reduced | instant show/hide | CSS | 0ms |

**Why:** Confirms mode change from browsing to search.

---

### Sticky CTAs (`UI-BOOKING-CTA-STICKY`, floating enquiry)

| Behavior | Motion | Library | Trigger |
|----------|--------|---------|---------|
| Enter | translateY 100%→0 | CSS | IO when anchor leaves viewport |
| Exit | translateY 0→100% | CSS | IO when anchor enters |
| Duration | 200ms ease-out | CSS | — |
| Reduced | always visible or always hidden per UX — prefer visible | — | — |

**Floating WhatsApp:** opacity fade on scroll stop only — **no** bounce loop. Optional static position MVP.

---

### Trust ribbons (`UI-TRUST-STATS-BAR`, `UI-ANNOUNCEMENT-BAR`)

| Component | Motion | Notes |
|-----------|--------|-------|
| Stats count-up | IO + requestAnimationFrame | Once; final value fallback |
| Announcement dismiss | height collapse | CSS 200ms — optional |
| Award badges | None | Static credibility |
| Partner marquee | CSS linear 40s | `animation-play-state: paused` on hover/focus |

---

## Performance Budget

### JS bundle (motion-specific)

| Package | Gzipped budget | Load strategy |
|---------|----------------|---------------|
| `framer-motion` (tree-shaken) | ≤ 35 KB | Dynamic import for lightbox, drawer, story |
| `embla-carousel` + autoplay | ≤ 8 KB | Hero + testimonial only |
| GSAP (if marquee fallback) | ≤ 25 KB | **Defer** — only if CSS marquee insufficient |
| Motion utils (shared hooks) | ≤ 2 KB | `useReducedMotion`, `useInViewOnce` |
| **Total motion JS** | **≤ 45 KB** | Excludes React/Next core |

### Core Web Vitals rules

| Metric | Rule |
|--------|------|
| **LCP** | Hero image/video poster must load with zero JS animation dependency. No Framer on LCP element. Ken Burns is CSS on loaded image only. |
| **CLS** | Reserve space for cards, stats, sticky bar. No height animations on layout-critical elements — use `transform` only. |
| **INP** | No scroll-linked JS. Debounce IO callbacks. Accordion < 16ms paint. |
| **FID** | Drawer/menu open < 100ms to first frame |

### When NOT to animate

- LCP image and above-the-fold hero text on repeat visits (use `sessionStorage` skip hero entrance)
- More than 6 simultaneous animations on screen
- Any animation on `width`, `height`, `top`, `left`, `margin`, `padding`
- Blur > 4px animated
- Scroll-jacking, parallax on mobile, infinite particle systems
- Every card in a grid — stagger cap 4
- Blog article body text
- Footer, legal, breadcrumbs
- Filter sidebar while user is adjusting filters
- Payment/checkout fields (Phase 2) — stability over delight

### Lighthouse target

≥ 90 Performance on homepage mobile (Moto G4 emulation). Motion must not pull below 90 — if it does, remove scroll reveals before removing image quality.

---

## Accessibility

### `prefers-reduced-motion`

```css
/* Already in 04-design-tokens.css — Phase 7 must preserve */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
```

**Additional Phase 7 requirements:**
- `useReducedMotion()` hook from Framer — disable `AnimatePresence`, auto-advance, marquee
- Hero carousel: manual control only; visible pause/play button when reduced motion
- Count-up: show final values immediately
- Partner marquee: static grid with wrap

### Pause controls

| Component | Control |
|-----------|---------|
| Hero carousel | Pause on hover/focus; **required** pause button if auto-advance enabled |
| Testimonial auto-scroll | Pause on hover/focus — prefer manual scroll MVP |
| Video | Native controls; no autoplay with sound |
| Marquee | `animation-play-state: paused` on hover/focus |

### Vestibular disorder safeguards

- No full-screen zoom transitions
- No 3D rotate on scroll
- Max translateY reveal: 24px
- No parallax on mobile viewports
- No oscillating/bounce loops (floating CTA, WhatsApp)
- Page transition: fade only — no slide/blur MVP

### Focus management

- Mega menu, drawer, lightbox, search: focus trap + restore on close
- Motion never removes focus rings
- Skip link bypasses all entrance animations

---

## Conflicts Resolved

| TEMP / earlier doc | Phase 6 decision | Rationale |
|--------------------|------------------|-----------|
| Lenis smooth scroll | **Rejected** | Hijacks scroll; bad for a11y and INP |
| Cursor magnetic effects | **Rejected** | Gimmick; excludes keyboard/touch users |
| Confetti on success | **Rejected** | Cheap; conflicts with premium trust |
| Hero fog/birds/river SVG animation | **Deferred** (Three.js Phase 2+) | LCP and bundle cost; photography carries wonder MVP |
| Lottie hero | **Rejected** | TEMP allows Lottie loading only — no large hero |
| Animate every section differently | **Rejected** | Max one reveal per viewport; rhythm via layout not motion |
| Card lift −6px | **Reduced to −2px** | Phase 5 spec; subtler |
| Image zoom 1.05 | **Reduced to 1.03** | Phase 5 spec |
| Parallax 15% | **Reduced to 8% max; default None** | Vestibular + mobile performance |
| Ripple on buttons | **Rejected** | Not in Phase 5; visual noise |
| Blur page transitions | **Rejected** MVP | GPU cost; fade only |
| Shared element image morph | **Deferred** Phase 2 | Complex; low enquiry value |
| Forest Green primary CTA motion glow | **Rejected** | Phase 5: Polo Blue `#005CA9` for interactive motion accents |
| "Enquire Now" pulse animations | **Rejected** | CTA is Plan Your Visit / Plan My Journey — no attention-seeking pulse |
| Auto-scroll testimonials | **Manual scroll preferred** | User control; pause issues |
| React Spring, Motion One | **Not in stack** | Framer Motion covers orchestration |
| SplitText / text scramble | **Rejected** | Gaming feel; hurts readability |
| Every state must animate (TEMP) | **Refined** | Focus, error, success, loading only — not disabled/hover on every atom |
| Booking wizard motion priority | **Deferred** | Enquiry-first MVP |

---

## Recommendations

1. **Add motion tokens to `04-design-tokens.css` in Phase 7** — extend with `--motion-distance-*`, `--motion-stagger-*`, `--motion-ease-*` from this doc; keep single source of truth.

2. **Create `lib/motion/` in Phase 7** — `useReducedMotion`, `useInViewOnce`, `motionVariants` (fadeUp, fadeIn, slidePanel) — max 3 shared variants to prevent animation sprawl.

3. **Hero entrance runs once per session** — `sessionStorage` flag to skip 700ms text reveal on return navigation.

4. **CSS-first audit gate** — before adding Framer to any component, confirm CSS cannot achieve it in < 10 lines.

5. **GSAP only if CSS marquee fails** cross-browser pause/hover tests on partner row — otherwise stay CSS.

6. **Education "bloom"** — interpret as opacity + 8px Y stagger, not SVG butterfly paths.

7. **Corporate "team formation"** — interpret as benefits grid stagger, not character animation.

8. **Document per-PR motion checklist** in Phase 7 CONTRIBUTING — every PR with motion must cite "Why" from checklist.

9. **Performance CI** — Lighthouse CI budget on `/` and `/corporate`; fail if Performance < 88.

10. **Phase 2 motion candidates** — Three.js hero atmosphere, shared element transitions on experience cards, booking wizard step slides, subtle map route draw.

---

## Phase 7 Preview (Technical Architecture)

Phase 7 will translate this document into:

| Deliverable | Contents |
|-------------|----------|
| **Folder structure** | `lib/motion/`, `components/motion/`, CSS `@layer motion` |
| **Dependencies** | `framer-motion`, `embla-carousel-react` — GSAP optional devDep |
| **Next.js patterns** | App Router layout fade; dynamic import for drawer/lightbox |
| **Hooks** | `useReducedMotion`, `useInViewOnce`, `useScrollHeader` |
| **CSS foundation** | Token extensions, reduced-motion media query, hover `@media (hover: hover)` |
| **Component map** | Each `UI-*` ID → motion spec section reference |
| **Testing** | Playwright reduced-motion snapshot; Lighthouse CI |
| **No implementation in Phase 7 doc** | Architecture + scaffold plan only — code in Phase 8 |

**Stack alignment:**
- Next.js 15 App Router
- Tailwind v4 with motion tokens as CSS variables
- Framer Motion 11+ with `LazyMotion` + `domAnimation` feature bundle
- Embla for carousels (already in project)
- No Lenis, no custom cursor, no global GSAP

---

## STATUS

**READY FOR REVIEW — Phase 6 complete. Awaiting approval for Phase 7.**

---

**Document path:** `docs/ui/03-motion-system-architecture.md`  
**Previous:** [00-ui-design-system.md](./00-ui-design-system.md) · [01-homepage-hifi.md](./01-homepage-hifi.md) · [02-key-pages-hifi.md](./02-key-pages-hifi.md)  
**Next (on approval):** Phase 7 — Technical Architecture
