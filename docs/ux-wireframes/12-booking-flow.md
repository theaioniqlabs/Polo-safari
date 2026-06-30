# Polo Safari — UX Wireframe System
## Step 12: Booking Flow

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Multi-step online booking (`/plan/book/[experience-slug]/*`) — login gate, 4 steps, payment, confirmation  
**Prerequisite:** [Step 1 — Global Foundation](./01-global-foundation-and-navigation.md), [Step 4 — Experience Detail](./04-experience-detail.md) §17 Booking Widget  
**Next step:** [Step 13 — Admin Dashboard](./13-admin-dashboard.md)  

**Reference experience:** Polo Forest Heritage Walk — Heritage pillar, 1 day, from ₹1,899/person.

---

## Decisions Log

| # | Decision | Booking flow impact |
|---|----------|---------------------|
| 1 | **Full online booking** | Complete 4-step flow through payment and confirmation |
| 2 | **UPI/card at checkout** | Step 4 offers UPI (GPay, PhonePe, Paytm) and card (Visa/MC/RuPay) |
| 3 | **Login required for booking** | **Login gate before Step 1** — guest redirected to `/account/login?returnUrl=...` |
| 4 | **English-only** | All step labels, errors, and policy copy in English |
| 5 | **Confirmed taxonomy (Option A)** | Experience summary shows pillar badge — standard bookable tours only |
| 6 | **Corporate & education RFP separate** | Flow not used for custom MICE/school RFP — those use pillar RFP forms |
| 7 | **Trust signals** | Step 3 review shows policies, cancellation terms, secure payment badges |

### Route map

| Step | URL | Purpose |
|------|-----|---------|
| Login gate | `/account/login?returnUrl=/plan/book/[slug]/dates` | Auth before booking |
| Step 1 | `/plan/book/[slug]/dates` | Select experience — dates, guests, summary |
| Step 2 | `/plan/book/[slug]/details` | Traveller details |
| Step 3 | `/plan/book/[slug]/review` | Line items, policies |
| Step 4 | `/plan/book/[slug]/payment` | UPI/card checkout |
| Confirmation | `/plan/book/[slug]/confirmation?ref=[id]` | Success state |
| Abandon | Session saved — resume banner on return | See § Abandon State |

---

## Flow Overview

### Shell anatomy (all steps)

```
┌─ WF-BOOKING-SHELL-HEADER (minimal — logo + help, no full nav) ────────────────┐
├─ WF-STEPPER (4 steps + login complete indicator) ────────────────────────────┤
├─ WF-BOOKING-MAIN (8 col form) + WF-BOOKING-SUMMARY (4 col sticky) ────────────┤
├─ WF-BOOKING-ACTIONS (Back | Next / Pay) ─────────────────────────────────────┤
└─ WF-BOOKING-FOOTER-MINI (legal links, support) ──────────────────────────────┘
```

### Booking-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-BOOKING-SHELL-HEADER` | Minimal header — logo, booking ref, Help link |
| `WF-BOOKING-STEPPER` | 4-step progress with completed/current/upcoming states |
| `WF-BOOKING-SUMMARY` | Sticky sidebar — experience thumb, dates, guests, running total |
| `WF-BOOKING-ACTIONS` | Back + Next/Pay button row |
| `WF-BOOKING-FOOTER-MINI` | Compact footer — cancellation policy, contact |
| `WF-PAYMENT-UPI` | UPI app selector + QR placeholder |
| `WF-PAYMENT-CARD` | Card number, expiry, CVV fields |
| `WF-BOOKING-CONFIRMATION` | Success screen with reference and next steps |

---

# Login Gate (Pre–Step 1)

### Section Name
Login Gate — Account Required

### Purpose
Enforce authenticated booking — capture customer record before date hold and payment.

### Wireframe Layout

```
LOGIN GATE — /account/login?returnUrl=/plan/book/polo-forest-heritage-walk/dates
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]                                                    [Help] /contact      │
├──────────────────────────────────────────────────────────────────────────────┤
│                    ┌─ login card (max 480px) ─────────────────────────────┐   │
│                    │ [TEXT: H1]  Sign in to book                          │   │
│                    │ [TEXT: Body]  Login is required to complete your       │   │
│                    │ Polo Forest Heritage Walk booking.                     │   │
│                    │ ░ Email _________________________                      │   │
│                    │ ░ Password ______________________                      │   │
│                    │ ☐ Remember me   [Link] Forgot password?                │   │
│                    │ █ Continue to booking                                  │   │
│                    │ ─────────── or ───────────                             │   │
│                    │ ░ Create account                                       │   │
│                    │ ░ Continue as guest — disabled / hidden in v1          │   │
│                    └────────────────────────────────────────────────────────┘   │
│                                                                               │
│ ┌─ experience reminder strip ──────────────────────────────────────────────┐ │
│ │ [IMG thumb] Polo Forest Heritage Walk · from ₹1,899 · 1 day              │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Key actions
- **Continue to booking** → redirect to `returnUrl` on success
- **Create account** → register with same returnUrl
- Invalid credentials → inline field errors + error summary

### Components
`WF-BOOKING-SHELL-HEADER`, `WF-INPUT-TEXT`, `WF-BTN-PRIMARY`, `WF-CARD-EXPERIENCE` (mini)

### Accessibility Notes
Focus email on load. Error summary `role="alert"`. returnUrl validated server-side.

---

# Step 1: Select Experience

**URL:** `/plan/book/[slug]/dates`

### Section Name
Step 1 — Dates, Guests & Experience Summary

### Purpose
Confirm product, select travel date and party size, validate availability.

### Wireframe Layout

```
STEPPER:  [● Dates] ─── [○ Details] ─── [○ Review] ─── [○ Payment]
           Step 1 of 4

MAIN (8 col)                              SUMMARY SIDEBAR (4 col, sticky)
┌─────────────────────────────────────┐   ┌──────────────────────────────┐
│ [TEXT: H2] Select your visit        │   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│                                     │   │ [IMG] Heritage Walk          │
│ Experience summary (read-only)      │   │ [BADGE] Heritage             │
│ ┌─────────────────────────────────┐ │   │ 1 day · Polo Forest, Gujarat │
│ │ Polo Forest Heritage Walk       │ │   │ ──────────────────────────── │
│ │ [BADGE] Heritage · 1 day        │ │   │ Date: — (updates live)       │
│ │ From ₹1,899 / person            │ │   │ Guests: 2 adults             │
│ │ [Link] Change experience →      │ │   │ ──────────────────────────── │
│ └─────────────────────────────────┘ │   │ Subtotal: ₹3,798             │
│                                     │   │ Taxes/fees: ₹0               │
│ Travel date *                       │   │ Total: ₹3,798                │
│ ┌─ WF-INPUT-DATE ────────────────┐  │   └──────────────────────────────┘
│ │ ░ Select date      [ICON cal] │  │
│ └────────────────────────────────┘  │
│ [TEXT: Caption] Next available: 15 Jul, 16 Jul, 18 Jul                       │
│                                     │
│ Guests *                            │
│ Adults (12+)    [ − ]  2  [ + ]     │
│ Children (5–11) [ − ]  0  [ + ]     │
│ Infants (0–4)   [ − ]  0  [ + ]     │
│ [TEXT: Caption] Max 20 guests per departure                                   │
│                                     │
│ Special date note (optional)        │
│ ░ e.g. school group alignment…      │
└─────────────────────────────────────┘

ACTIONS:  [◀ Back to experience]          [Next: Traveller details ▶]
           → /experiences/[slug]            → /plan/book/[slug]/details

ERROR STATE (no date selected):
┌─ error banner ──────────────────────────────────────────────────────────────┐
│ Please select a travel date to continue.                                      │
└─────────────────────────────────────────────────────────────────────────────┘

ERROR STATE (sold out):
┌─ error banner ──────────────────────────────────────────────────────────────┐
│ This date is fully booked. Try 16 Jul or [view similar experiences].         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Grid
8 + 4 col; stepper full width above.

### Components
`WF-BOOKING-STEPPER`, `WF-FORM-BOOKING-STEP`, `WF-INPUT-DATE`, `WF-BOOKING-SUMMARY`, `WF-BTN-PRIMARY`, `WF-BTN-SECONDARY`

### CTA Position
**Next: Traveller details** — primary, disabled until valid date + ≥1 guest.

### Responsive Behaviour `[MOBILE]`
- Summary collapses to accordion above form ("View booking summary ▼")
- Steppers show icons + short labels; step names below icons
- Date picker native on mobile
- Sticky bottom bar: Total + **Next** button

### Mobile layout wireframe

```
[MOBILE] STEP 1
┌──────────────────────────┐
│ [LOGO]          [Help]   │
├──────────────────────────┤
│ ● ○ ○ ○  Step 1 of 4     │
├──────────────────────────┤
│ ▼ Summary · ₹3,798       │
├──────────────────────────┤
│ Select date [cal]        │
│ Guest steppers           │
├──────────────────────────┤
│ STICKY: ₹3,798 [Next ▶]  │
└──────────────────────────┘
```

### Accessibility Notes
Stepper `aria-current="step"` on step 1. Guest counters have accessible labels. Live region updates total.

### Future Motion Placeholder
`[MOTION: summary-update]` — total fade on change

---

# Step 2: Traveller Details

**URL:** `/plan/book/[slug]/details`

### Section Name
Step 2 — Traveller Names, Contact & Requirements

### Purpose
Collect lead traveller and additional guest names, contact for confirmations, special needs.

### Wireframe Layout

```
STEPPER:  [✓ Dates] ─── [● Details] ─── [○ Review] ─── [○ Payment]

MAIN (8 col)
┌─────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2] Traveller details                                                 │
│                                                                              │
│ Lead traveller (account holder — pre-filled if profile complete)               │
│ Full name *          ░ Rajesh Patel                                          │
│ Email *              ░ rajesh@example.com                                    │
│ Phone *              ░ +91 ___________                                       │
│                                                                              │
│ Additional travellers (1 adult required — names for manifest)                │
│ Adult 2 name *       ░ ___________________                                   │
│ ☐ Same as lead traveller for Adult 1                                       │
│                                                                              │
│ Special requirements (optional)                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐│
│ │ ░ Dietary needs, mobility, medical notes, pickup requests…               ││
│ └──────────────────────────────────────────────────────────────────────────┘│
│ [TEXT: Caption] Shared with field team only — not published.                 │
│                                                                              │
│ Emergency contact (optional)                                                   │
│ Name                 ░ ___________________                                   │
│ Phone                ░ ___________________                                   │
└─────────────────────────────────────────────────────────────────────────────┘

ACTIONS:  [◀ Back]  → step 1          [Next: Review booking ▶]  → step 3

ERROR STATE:
┌─ error summary ─────────────────────────────────────────────────────────────┐
│ Phone number must be 10 digits · Adult 2 name is required                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Components
`WF-INPUT-TEXT`, `WF-INPUT-CHECKBOX`, `WF-BOOKING-STEPPER`, profile pre-fill from account

### CTA Position
**Next: Review booking** — validates required fields.

### Responsive Behaviour
Single column; sticky mobile bar with Back/Next.

### Accessibility Notes
Pre-filled fields editable. Error links focus first invalid field.

### Future Motion Placeholder
`[MOTION: none]`

---

# Step 3: Review

**URL:** `/plan/book/[slug]/review`

### Section Name
Step 3 — Line Items, Policies & Confirm

### Purpose
Final review before payment — transparent pricing, cancellation policy, terms acceptance.

### Wireframe Layout

```
STEPPER:  [✓ Dates] ─── [✓ Details] ─── [● Review] ─── [○ Payment]

MAIN (8 col)                              SUMMARY (4 col)
┌─────────────────────────────────────┐   (expanded line items)
│ [TEXT: H2] Review your booking      │
│                                     │
│ LINE ITEMS                          │
│ ─────────────────────────────────── │
│ Polo Forest Heritage Walk × 2 adult │   Experience    ₹1,899 × 2
│ Travel date: 15 Jul 2025            │   Date          15 Jul 2025
│ Lead: Rajesh Patel                  │   Guests        2 adults
│ ─────────────────────────────────── │
│ Subtotal                     ₹3,798 │
│ GST (if applicable)              ₹0 │
│ Total                        ₹3,798 │
│                                     │
│ POLICIES                            │
│ ┌─ policy card ───────────────────┐ │
│ │ Cancellation                    │ │
│ │ Free cancel up to 7 days before │ │
│ │ 50% refund 3–7 days · No refund│ │
│ │ within 72 hours                 │ │
│ │ [Link] Full cancellation policy │ │
│ └─────────────────────────────────┘ │
│ ┌─ policy card ───────────────────┐ │
│ │ Weather & safety                │ │
│ │ Polo Forest experiences may     │ │
│ │ adjust routes during monsoon…   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ☐ I agree to terms & cancellation * │
│ ☐ Send me trip tips by email        │
└─────────────────────────────────────┘

ACTIONS:  [◀ Back]                    [Continue to payment ▶]
```

### Components
`WF-CARD`, `WF-DIVIDER`, `WF-INPUT-CHECKBOX`, policy links to `/legal/cancellation`

### CTA Position
**Continue to payment** — disabled until terms accepted.

### Responsive Behaviour
Policies stack; summary merges into mobile accordion.

### Accessibility Notes
Terms checkbox required with linked policy pages opening in new tab.

### Future Motion Placeholder
`[MOTION: none]`

---

# Step 4: Payment & Submit

**URL:** `/plan/book/[slug]/payment`

### Section Name
Step 4 — UPI / Card Checkout

### Purpose
Collect payment via UPI or card; submit booking on success.

### Wireframe Layout

```
STEPPER:  [✓ Dates] ─── [✓ Details] ─── [✓ Review] ─── [● Payment]

MAIN (8 col)
┌─────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2] Pay securely                                                      │
│ [TEXT: Body Sm] 🔒 SSL encrypted · UPI & card accepted                       │
│                                                                              │
│ PAYMENT METHOD (tabs)                                                        │
│ [█ UPI]  [Card]                                                              │
│                                                                              │
│ UPI PANEL (active)                                                           │
│ ┌─ WF-PAYMENT-UPI ─────────────────────────────────────────────────────────┐│
│ │ Select app:  [GPay] [PhonePe] [Paytm] [Other UPI]                        ││
│ │ ┌─ QR placeholder ─────┐   OR   UPI ID: polo-safari@upi                ││
│ │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                                                ││
│ │ │ [QR CODE]           │   [TEXT: Caption] Scan with any UPI app         ││
│ │ └─────────────────────┘                                                ││
│ │ Amount due: ₹3,798                                                      ││
│ └──────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
│ CARD PANEL (alternate tab)                                                   │
│ ┌─ WF-PAYMENT-CARD ────────────────────────────────────────────────────────┐│
│ │ Card number    ░ ____ ____ ____ ____                                     ││
│ │ Name on card   ░ ___________________                                    ││
│ │ Expiry         ░ MM/YY    CVV ░ ___                                     ││
│ │ [ICON] Visa · Mastercard · RuPay                                         ││
│ └──────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
│ █ Pay ₹3,798 & confirm booking                                               │
│ [TEXT: Caption] You will receive confirmation email and SMS                  │
└─────────────────────────────────────────────────────────────────────────────┘

PROCESSING STATE:
┌─────────────────────────────────────────────────────────────────────────────┐
│ [SKELETON/spinner] Processing payment… Do not close this window.             │
└─────────────────────────────────────────────────────────────────────────────┘

ERROR STATE (payment failed):
┌─ error banner ──────────────────────────────────────────────────────────────┐
│ Payment could not be processed. Please try again or use a different method. │
│ Error ref: PAY-8842 · [Retry] [Contact support]                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Components
`WF-PAYMENT-UPI`, `WF-PAYMENT-CARD`, `WF-TABS`, `WF-SKELETON`, `WF-BTN-PRIMARY`

### CTA Position
**Pay ₹3,798 & confirm booking** — submits to payment gateway; redirect to confirmation on success.

### Responsive Behaviour
UPI QR scales to full width mobile; tab labels icon-only on narrow screens.

### Accessibility Notes
Payment iframe/tab panel keyboard accessible. Processing state announced via live region.

### Future Motion Placeholder
`[MOTION: skeleton-pulse]` during processing

---

# Confirmation

**URL:** `/plan/book/[slug]/confirmation?ref=PS-2025-8842`

### Wireframe Layout

```
WF-BOOKING-CONFIRMATION
┌──────────────────────────────────────────────────────────────────────────────┐
│                         [ICON] ✓                                              │
│              [TEXT: H1]  Booking confirmed!                                   │
│              [TEXT: Body]  Reference PS-2025-8842 · Confirmation sent to       │
│                          rajesh@example.com and +91 98765 43210               │
│                                                                               │
│ ┌─ booking recap card ─────────────────────────────────────────────────────┐│
│ │ Polo Forest Heritage Walk · 15 Jul 2025 · 2 adults · ₹3,798 paid          ││
│ │ Meeting point: Polo Forest gate, 08:00 IST                                 ││
│ └───────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ [█ View my bookings]  → /account/bookings                                    │
│ [░ Download receipt]  [░ Add to calendar]  [░ Back to experience]             │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Abandon State

### Purpose
User leaves mid-flow — session persisted for logged-in users; banner on return.

### Wireframe Layout

```
RESUME BANNER (on /experiences/[slug] or homepage when draft exists)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [ICON] You have an unfinished booking — Polo Forest Heritage Walk · Step 2  │
│ [█ Resume booking]  [Dismiss]                                                │
└──────────────────────────────────────────────────────────────────────────────┘

EXPIRED DRAFT (dates no longer available):
┌──────────────────────────────────────────────────────────────────────────────┐
│ Your saved booking expired. Please select new dates.                         │
│ [Select dates]                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Key actions
- **Resume booking** → last incomplete step URL
- **Dismiss** → clears banner (draft retained 48h)

---

# Global Error & Edge States

| State | Trigger | UI treatment |
|-------|---------|--------------|
| Session expired | Idle > 30 min | Redirect login with returnUrl; toast "Session expired" |
| Experience unavailable | Tour deactivated | Full-page empty state; link to `/experiences` |
| Price changed | Admin rate update | Banner on review step; user must re-confirm |
| Network error | API fail on Next | Inline retry button; preserve form data |
| Double submit | Rapid Pay clicks | Disable button; processing spinner |

---

# Full Flow Composite (Desktop)

```
LOGIN → STEP1(dates) → STEP2(details) → STEP3(review) → STEP4(payment) → CONFIRMATION
         ↑_______________|  Back links preserve state _______________|
```

---

# Appendix

## A. Stepper states

| Visual | Meaning | aria |
|--------|---------|------|
| `[●]` | Current step | `aria-current="step"` |
| `[✓]` | Completed | `aria-label="Step N complete"` |
| `[○]` | Upcoming | default |

## B. Handoff checklist

| Requirement | Status |
|-------------|--------|
| Login gate before step 1 | Complete |
| Step 1: dates, guests, summary | Complete |
| Step 2: traveller details | Complete |
| Step 3: review, line items, policies | Complete |
| Step 4: UPI/card payment | Complete |
| Confirmation screen | Complete |
| Progress stepper | Complete |
| Back / Next actions | Complete |
| Abandon / resume state | Complete |
| Error states | Complete |
| Mobile layout | Complete |
| Login + UPI/card decisions | Complete |
| 12-col / 8px; 1440/1280 | Complete |

---

**Document path:** `docs/ux-wireframes/12-booking-flow.md`  
**Prepared for:** Polo Safari experiential travel platform
