# Polo Safari — UX Wireframe System
## Step 11: Contact Page

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Contact hub (`/contact`) — locations, WhatsApp, general inquiry form, FAQ  
**Prerequisite:** [Step 1 — Global Foundation & Navigation](./01-global-foundation-and-navigation.md), [Step 9 — About](./09-about.md) §9 Office strip  
**Next step:** [Step 12 — Booking Flow](./12-booking-flow.md)  

**Reference context:** Head office near Polo Forest, Idar, Gujarat. Branches/support for Ahmedabad corporate clients and school coordinators. General inquiry is distinct from booking checkout and corporate/education RFP forms.

---

## Decisions Log

| # | Decision | Contact page impact |
|---|----------|---------------------|
| 1 | **Full online booking** | Form is **general inquiry** — booking CTAs point to `/experiences` or resume `/plan/book/*` |
| 2 | **UPI/card at checkout** | Not on contact — FAQ may reference payment at booking step 4 |
| 3 | **Login required for booking** | Contact form does **not** require login |
| 4 | **English-only** | All labels, FAQ, and office hours in English |
| 5 | **Confirmed taxonomy (Option A)** | Subject dropdown may include pillar interest — not a booking selector |
| 6 | **Corporate & education RFP separate** | Form copy directs MICE/school groups to `/corporate#rfp` or `/education#rfp` |
| 7 | **Trust signals** | Map, office cards, WhatsApp, and FAQ build pre-conversion confidence |

### Scope boundary

| Included | Excluded |
|----------|----------|
| General inquiry (`POST /api/contact`) | Booking flow forms |
| Office/branch cards + map | Corporate RFP (`WF-FORM-RFP-CORPORATE`) |
| WhatsApp CTA | Education RFP (`WF-FORM-RFP-EDUCATION`) |
| Contact-scoped FAQ | Account/login screens |

---

## Page Overview

### Route & template

| Property | Value |
|----------|-------|
| URL | `/contact` |
| Query params | `?subject=partnership|careers|general` pre-selects form subject |
| Template | `WF-SHELL` + contact layout |
| H1 | "Contact us" |
| Emotion arc | Clarity → Confidence → Action |

### Section order

```
1.  Navigation
2.  Hero / Page Header
3.  Google Map placeholder
4.  Head office card
5.  Branch cards
6.  WhatsApp CTA block
7.  General inquiry form
8.  FAQ accordion
9.  Footer
```

### Contact-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-MAP-GOOGLE-PLACEHOLDER` | Embedded map block — Polo Forest / Idar HQ pin |
| `WF-OFFICE-CARD` | Location card — address, hours, phone, directions |
| `WF-BRANCH-GRID` | Secondary office/branch cards |
| `WF-WHATSAPP-CTA` | Prominent WhatsApp chat band with deep link |
| `WF-FORM-CONTACT-GENERAL` | General inquiry — distinct from RFP/booking |

---

# Contact Page Sections

---

## 1. Navigation

### Section Name
Global Header — Contact Page

### Wireframe Layout

```
CONTACT PAGE — HEADER (surface-1, 64px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Experiences▾  Discover▾  Polo Forest  Plan  About                    │
│                              [ICON] [ICON] [EN▾] [██ Plan Your Visit]        │
└──────────────────────────────────────────────────────────────────────────────┘

Footer and Plan column link Contact → /contact (aria-current when active)
```

### Grid
See Step 1 § D1.

### Components
`WF-SHELL-HEADER`, `WF-NAV-*`, `WF-SKIP-LINK`

### Hierarchy
Standard shell header.

### CTA Position
Header Plan Your Visit; page-level WhatsApp and form CTAs dominate.

### Responsive Behaviour
See Step 1 § D1.

### Accessibility Notes
Skip link → `#main-content`.

### Future Motion Placeholder
`[MOTION: header-condense]`

---

## 2. Hero / Page Header

### Section Name
Contact Hero

### Purpose
Immediate clarity — how to reach Polo Safari for general questions, partnerships, and directions.

### Wireframe Layout

```
WF-PAGE-HEADER (no full-bleed media — clean utility page)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: Caption]  Home  ›  Contact                                               │
│ [TEXT: Overline]  POLO FOREST · GUJARAT                                        │
│ [TEXT: H1]        Contact us                                                   │
│ [TEXT: Body Lg]   Reach our team for trip questions, partnerships, and         │
│                   directions to Polo Forest — we respond within 24 hours.      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
Cols 1–8 intro; optional 4 col quick-actions column on wide layouts.

### Components
`WF-BREADCRUMB`, `WF-PAGE-HEADER`, `WF-TYPE-H1`

### Hierarchy
Breadcrumb → H1 → Intro

### CTA Position
None in hero — WhatsApp block follows map.

### Responsive Behaviour
Single column mobile.

### Accessibility Notes
One H1 per page.

### Future Motion Placeholder
`[MOTION: none]`

---

## 3. Google Map Placeholder

### Section Name
Map — Head Office Location

### Purpose
Visual orientation for visitors driving from Ahmedabad (~2 hrs) to Polo Forest / Idar HQ.

### Wireframe Layout

```
WF-MAP-GOOGLE-PLACEHOLDER (full-width within container, height ~400px)
┌──────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  [TEXT: Caption]  Google Maps embed — Polo Safari HQ, Idar, Gujarat          │
│  ○ Pin: Polo Safari · Near Polo Forest gate                                   │
│  [TEXT: Link]  Open in Google Maps ↗                                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
Cols 1–12; 400px height desktop, 280px mobile.

### Components
`WF-MAP-GOOGLE-PLACEHOLDER`, `WF-MAP-PLACEHOLDER`, `WF-TYPE-LINK`

### Hierarchy
Map canvas → Pin label → External directions link

### CTA Position
**Open in Google Maps** — external link, new tab.

### Responsive Behaviour
Full-width; touch-friendly zoom controls in implementation.

### Accessibility Notes
Map iframe `title="Polo Safari office location"`. Text address duplicated in office card §4.

### Future Motion Placeholder
`[MOTION: none]`

---

## 4. Head Office Card

### Section Name
Head Office — Primary Location Card

### Purpose
Authoritative contact details for HQ near Polo Forest.

### Wireframe Layout

```
WF-OFFICE-CARD (featured — cols 1–12 or 8 col with emphasis border)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [BADGE] Head office                                                           │
│ [TEXT: H2]  Polo Safari HQ — Idar, Gujarat                                    │
│ ─────────────────────────────────────────────────────────────────────────────│
│ [ICON] Address    Near Polo Forest, Idar, Gujarat 383430                      │
│ [ICON] Hours      Mon–Sat 9:00–18:00 IST · Sun by appointment                 │
│ [ICON] Phone      +91 98765 43210  ·  +91 79 1234 5678 (Ahmedabad line)     │
│ [ICON] Email      hello@polo-safari.in                                        │
│ [TEXT: Link]  Get directions → (Google Maps)                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
Full-width card; internal 2-col on desktop (details | optional small map repeat).

### Components
`WF-OFFICE-CARD`, `WF-CARD`, `WF-BADGE`, `WF-TYPE-H2`

### Hierarchy
Badge → Title → Detail rows → Directions link

### CTA Position
Directions link; `tel:` and `mailto:` on phone/email.

### Responsive Behaviour
Single column stack.

### Accessibility Notes
Structured definition list or address in `<address>` element.

### Future Motion Placeholder
`[MOTION: none]`

---

## 5. Branch Cards

### Section Name
Branch Cards — Regional Presence

### Purpose
Show Ahmedabad sales/support office and on-site Polo Forest operations base for corporate and school clients.

### Wireframe Layout

```
WF-BRANCH-GRID (2–3 cards)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Our locations                                                     │
│                                                                               │
│ ┌─ branch (4 col) ──────┐ ┌─ branch (4 col) ──────┐ ┌─ branch (4 col) ──────┐ │
│ │ [BADGE] Branch        │ │ [BADGE] On-site base  │ │ [BADGE] Partner desk  │ │
│ │ Ahmedabad — SG Highway│ │ Polo Forest camp      │ │ Saputara (seasonal)   │ │
│ │ Corporate & school    │ │ Field operations      │ │ Adventure extensions  │ │
│ │ sales                 │ │                       │ │                       │ │
│ │ Mon–Fri 10–19         │ │ Trip days only        │ │ Apr–Jun, Oct–Feb      │ │
│ │ +91 79 1234 5678      │ │ On-trip coordinator   │ │ By appointment        │ │
│ │ [Link] Directions →   │ │ [Link] Polo Forest →  │ │ [Link] Enquire →      │ │
│ └───────────────────────┘ └───────────────────────┘ └───────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
3 × 4 col; 2 col tablet; 1 col mobile.

### Components
`WF-BRANCH-GRID`, `WF-OFFICE-CARD`, `WF-CARD`, `WF-BADGE`

### Hierarchy
Section H2 → Equal-weight branch cards

### CTA Position
Per-card direction or landing links — not primary booking.

### Responsive Behaviour
3 → 1 column stack.

### Accessibility Notes
Each card self-contained; phone links labeled with location name.

### Future Motion Placeholder
`[MOTION: stagger]`

---

## 6. WhatsApp CTA Block

### Section Name
WhatsApp — Instant Chat CTA

### Purpose
High-intent channel for Indian market — quick trip questions without form friction.

### Wireframe Layout

```
WF-WHATSAPP-CTA (full-width band, surface-2)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [ICON]  [TEXT: H3]  Chat with us on WhatsApp                                  │
│         [TEXT: Body]  Fast replies Mon–Sat 9:00–20:00 — share dates, group     │
│         size, or ask about school and corporate programs.                     │
│         ┌─────────────────────────────┐                                     │
│         │ █ Message on WhatsApp         │                                     │
│         └─────────────────────────────┘                                     │
│         [TEXT: Caption]  wa.me/919876543210 · Do not share payment details    │
│                          via chat — book securely online.                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
Centred content; max 640px text block; button left-aligned.

### Components
`WF-WHATSAPP-CTA`, `WF-BTN-PRIMARY`, `WF-TYPE-H3`

### Hierarchy
Headline → Body → Primary button → Safety caption

### CTA Position
**Message on WhatsApp** → `https://wa.me/919876543210?text=Hello%20Polo%20Safari`

### Responsive Behaviour
Full-width button mobile.

### Accessibility Notes
Button opens WhatsApp app/web. Caption clarifies payment security.

### Future Motion Placeholder
`[MOTION: none]`

---

## 7. General Inquiry Form

### Section Name
General Inquiry Form

### Purpose
Capture non-transactional enquiries — distinct from `/plan/book/*`, `/corporate#rfp`, `/education#rfp`. Maps to `POST /api/contact`.

### Wireframe Layout

```
WF-FORM-CONTACT-GENERAL (2-col form layout on desktop)
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Send us a message                                                 │
│ [TEXT: Body Sm]  For custom corporate offsites or school programs, use        │
│                  Request Proposal on [Corporate] or [Education] pages.        │
│                  To book a standard experience, [browse experiences].         │
│ ─────────────────────────────────────────────────────────────────────────────│
│ ┌─ col 6 ─────────────┐  ┌─ col 6 ─────────────┐                             │
│ │ Full name *         │  │ Email *             │                             │
│ │ ░________________   │  │ ░________________   │                             │
│ │ Phone *             │  │ Subject *           │                             │
│ │ ░________________   │  │ ░ Select subject ▾  │                             │
│ └─────────────────────┘  └─────────────────────┘                             │
│ Subject options: General · Trip planning · Partnership · Careers · Media      │
│                                                                               │
│ Message *                                                                     │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ │
│ │ ░ Tell us about your trip, dates, group size, or question…               ░ │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│ ☐ I agree to the privacy policy *                                             │
│ ┌──────────────────────┐                                                     │
│ │ █ Send message       │                                                     │
│ └──────────────────────┘                                                     │
│                                                                               │
│ SUCCESS STATE (after submit):                                                 │
│ ┌─ WF-TOAST / inline banner ────────────────────────────────────────────────┐│
│ │ ✓ Message sent — we'll reply within 24 hours. Reference #PS-2025-1842    ││
│ └───────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│ ERROR STATE (validation):                                                     │
│ ┌─ error summary ───────────────────────────────────────────────────────────┐│
│ │ Please fix 2 errors: email format, message required                       ││
│ └───────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
12 col form; fields 6+6 pairs; message full width.

### Components
`WF-FORM-CONTACT-GENERAL`, `WF-INPUT-TEXT`, `WF-INPUT-SELECT`, `WF-INPUT-CHECKBOX`, `WF-BTN-PRIMARY`, `WF-TOAST`

### Hierarchy
Disambiguation copy → Fields → Consent → Submit → Success/error feedback

### CTA Position
**Send message** — primary. No login required.

### Responsive Behaviour
Single column fields on mobile.

### Accessibility Notes
Error summary at top on fail. Required fields marked. Success message `role="status"`.

### Future Motion Placeholder
`[MOTION: toast-slide-in]` on success

---

## 8. FAQ Accordion

### Section Name
Contact FAQ

### Purpose
Reduce form volume — hours, response time, booking vs enquiry, RFP routing, payment questions.

### Wireframe Layout

```
WF-FAQ-ACCORDION
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TEXT: H2]  Frequently asked questions                                        │
│                                                                               │
│ │ ▼ How quickly will you respond to my message?                              ││
│ │   We reply within 24 hours on business days…                               ││
│ │ ▶ What's the difference between contact, enquiry, and booking?             ││
│ │ ▶ How do I request a corporate or school proposal?                         ││
│ │ ▶ Can I change a booking after paying online?                              ││
│ │ ▶ Do you offer WhatsApp support for international guests?                  ││
│ │ ▶ Where is Polo Forest and how do I get there from Ahmedabad?              ││
│                                                                               │
│ [TEXT: Link]  View all FAQs → /faq                                           │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Grid
Cols 1–8 centred or full 12 col.

### Components
`WF-FAQ-ACCORDION`, `WF-TYPE-H2`

### Hierarchy
H2 → Expandable items → View all link

### CTA Position
**View all FAQs** → `/faq`

### Responsive Behaviour
Full-width accordion.

### Accessibility Notes
Accordion buttons with `aria-expanded`. One or multiple open — single open recommended.

### Future Motion Placeholder
`[MOTION: accordion-expand]`

---

## 9. Footer

### Section Name
Global Footer — Contact Page

### Wireframe Layout

```
(See Step 1 § D10 — full footer wireframe)

CONTACT-SPECIFIC: Contact link aria-current; phone/email repeat in footer column
```

### Grid
See Step 1 § D10.

### Components
`WF-SHELL-FOOTER`

### Hierarchy
See Step 1 § D10.

### CTA Position
Newsletter Subscribe — secondary.

### Responsive Behaviour
See Step 1 § D10.

### Accessibility Notes
See Step 1 § D10.

### Future Motion Placeholder
`[MOTION: none]`

---

# Full Page Wireframe (Desktop Composite)

```
VIEWPORT 1440px — CONTENT 1280px
┌──────────────────────────────────────────────────────────────────────────────┐
│ WF-SHELL-HEADER                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ Home › Contact · H1 Contact us                                               │
├──────────────────────────────────────────────────────────────────────────────┤
│ [GOOGLE MAP PLACEHOLDER — full width 400px]                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ [HEAD OFFICE CARD — featured]                                                │
├──────────────────────────────────────────────────────────────────────────────┤
│ [BRANCH CARDS × 3]                                                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ [WHATSAPP CTA BAND]                                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ [GENERAL INQUIRY FORM]                                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ [FAQ ACCORDION]                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ WF-SHELL-FOOTER                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# Appendix

## A. Form routing disambiguation

| User intent | Correct path |
|-------------|--------------|
| Book standard experience | `/plan/book/[slug]/dates` (login required) |
| Corporate MICE / offsite | `/corporate#rfp` |
| School / ecology program | `/education#rfp` |
| General question | `/contact` form (this page) |
| Trip planner hub | `/plan` or `/plan/enquire` |

## B. Handoff checklist

| Requirement | Status |
|-------------|--------|
| Hero/header | Complete |
| Google Map placeholder | Complete |
| Head office card | Complete |
| Branch cards | Complete |
| WhatsApp CTA block | Complete |
| General inquiry form (≠ booking/RFP) | Complete |
| FAQ accordion | Complete |
| Footer | Complete |
| Success/error states | Complete |
| 12-col / 8px; 1440/1280 | Complete |

---

**Document path:** `docs/ux-wireframes/11-contact.md`  
**Prepared for:** Polo Safari experiential travel platform
