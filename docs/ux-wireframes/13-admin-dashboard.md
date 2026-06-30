# Polo Safari — UX Wireframe System
## Step 13: Admin Dashboard

**Version:** 0.1.0  
**Status:** Wireframe specification (grayscale only)  
**Scope:** Laravel admin panel (`/admin/*`) — CMS, bookings, content, users, analytics  
**Prerequisite:** [Step 1 — Global Foundation](./01-global-foundation-and-navigation.md), [@@Docs/PoloSafari_AI_StarterKit_Part2/docs/07_ADMIN_PANEL.md](../../@@Docs/PoloSafari_AI_StarterKit_Part2/docs/07_ADMIN_PANEL.md)  
**Next step:** Implementation sprint — Public Website → Admin → Booking Flow  

**Platform:** Laravel admin — separate app shell from public site. Desktop-first; minimum 1280px content width recommended.

---

## Decisions Log

| # | Decision | Admin impact |
|---|----------|--------------|
| 1 | **Full online booking** | Bookings module is primary ops surface — status workflow, payment refs |
| 2 | **UPI/card at checkout** | Booking records store payment method, gateway ref, refund status |
| 3 | **Login required for booking** | Users module links customer accounts to bookings |
| 4 | **English-only** | Admin UI English at launch |
| 5 | **Five pillars locked** | Categories CRUD maps to five pillar slugs — no sixth category |
| 6 | **Corporate/education RFP separate** | Bookings table filters `source: online|rfp-corporate|rfp-education` |
| 7 | **Trust signals** | Reviews/Testimonials and Gallery feed public trust components |

### Admin shell layout

```
┌─ WF-ADMIN-SIDEBAR (240px fixed) ─┬─ WF-ADMIN-MAIN ─────────────────────────────┐
│ [LOGO] Polo Safari Admin         │ WF-ADMIN-TOPBAR (breadcrumb, user, logout) │
│                                  ├─────────────────────────────────────────────┤
│ ● Dashboard                      │                                             │
│   Bookings                       │  Page content (tables, forms, widgets)      │
│   Experiences                    │                                             │
│   Categories                     │                                             │
│   Gallery                        │                                             │
│   Blogs                          │                                             │
│   Users                          │                                             │
│   Reviews                        │                                             │
│   Settings                       │                                             │
│   Media library                  │                                             │
│   Analytics                      │                                             │
└──────────────────────────────────┴─────────────────────────────────────────────┘
```

### Admin-only components (new IDs)

| ID | Description |
|----|-------------|
| `WF-ADMIN-SHELL` | Sidebar + main layout wrapper |
| `WF-ADMIN-SIDEBAR` | Fixed nav with active state |
| `WF-ADMIN-TOPBAR` | Page title, breadcrumb, admin user menu |
| `WF-ADMIN-STAT-WIDGET` | Dashboard KPI card |
| `WF-ADMIN-DATA-TABLE` | Sortable filterable table |
| `WF-ADMIN-FILTER-BAR` | Date range, status, search filters |
| `WF-ADMIN-FORM-CRUD` | Create/edit form layout |
| `WF-ADMIN-MEDIA-PICKER` | Media library modal selector |

---

# Admin Views

---

## 1. Dashboard

**Route:** `/admin` or `/admin/dashboard`

### Purpose
At-a-glance operations — today's departures, revenue, pending enquiries, content health.

### Wireframe Layout

```
WF-ADMIN-TOPBAR: Dashboard · Admin User ▾ · Logout

STAT WIDGETS (4 col row)
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Bookings     │ │ Revenue      │ │ Departures   │ │ Pending RFP  │
│ this month   │ │ MTD          │ │ today        │ │ enquiries    │
│ 142  ↑12%    │ │ ₹18.4L       │ │ 6 trips      │ │ 8 open       │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

RECENT BOOKINGS (table preview)                    QUICK ACTIONS
┌─────────────────────────────────────────────┐   ┌─────────────────┐
│ Ref      │ Experience    │ Date  │ Status   │   │ + New experience│
│ PS-8842  │ Heritage Walk │ 15 Jul│ Confirmed│   │ + Upload media  │
│ PS-8841  │ Night Safari  │ 14 Jul│ Paid     │   │ View calendar   │
│ ...      │               │       │          │   └─────────────────┘
│ [View all bookings →]                       │
└─────────────────────────────────────────────┘

CHART PLACEHOLDER (bookings trend — 30 days)
┌─────────────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ [TEXT: Caption] Bookings & revenue trend                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Components
`WF-ADMIN-STAT-WIDGET`, `WF-ADMIN-DATA-TABLE`, chart placeholder

### Key actions
- View all bookings → `/admin/bookings`
- Quick create experience / upload media
- Export today's manifest (PDF — build phase)

---

## 2. Bookings

**Route:** `/admin/bookings`, `/admin/bookings/[id]`

### Purpose
Manage all reservations — online checkout, status changes, refunds, manifest export.

### Wireframe Layout

```
WF-ADMIN-FILTER-BAR
[Search ref/name…] [Status ▾ All|Pending|Paid|Confirmed|Cancelled] [Source ▾]
[Date range: __ to __] [Experience ▾] [█ Filter] [Export CSV]

WF-ADMIN-DATA-TABLE
┌────────┬──────────────────┬──────────┬────────┬─────────┬──────────┬────────┐
│ Ref    │ Experience       │ Customer │ Date   │ Guests  │ Amount   │ Status │
├────────┼──────────────────┼──────────┼────────┼─────────┼──────────┼────────┤
│ PS-8842│ Heritage Walk    │ R.Patel  │ 15 Jul │ 2       │ ₹3,798   │ Paid   │
│ PS-8840│ School Ecology   │ St.Xavier│ 20 Jul │ 45      │ Quote    │ RFP    │
│ ...    │                  │          │        │         │          │        │
└────────┴──────────────────┴──────────┴────────┴─────────┴──────────┴────────┘
[Pagination ◀ 1 2 3 ▶]

DETAIL VIEW /admin/bookings/[id]
┌─ booking detail ─────────────────────────────────────────────────────────────┐
│ PS-2025-8842 · Paid · UPI · Gateway ref PAY-xyz                              │
│ Customer · Travellers · Line items · Payment · Activity log · [Refund] [Email]│
└──────────────────────────────────────────────────────────────────────────────┘
```

### Components
`WF-ADMIN-DATA-TABLE`, `WF-ADMIN-FILTER-BAR`, `WF-BADGE` (status)

### Key actions
- Filter by status, source (online / RFP), date, experience
- View/edit booking detail
- Mark confirmed, issue refund, resend confirmation email
- Export CSV / daily manifest

---

## 3. Experiences

**Route:** `/admin/experiences`, `/admin/experiences/create`, `/admin/experiences/[id]/edit`

### Purpose
CRUD for bookable tours — pricing, itinerary, availability, SEO, gallery links. Maps to API `tours`.

### Wireframe Layout

```
LIST: /admin/experiences
[+ New experience]  [Search…] [Category ▾] [Status ▾ Published|Draft]

┌────────┬────────────────────────┬───────────┬─────────┬──────────┬─────────┐
│ Thumb  │ Title                  │ Category  │ Price   │ Status   │ Actions │
├────────┼────────────────────────┼───────────┼─────────┼──────────┼─────────┤
│ ▓▓▓▓   │ Polo Forest Heritage   │ Heritage  │ ₹1,899  │ Published│ Edit ⋮  │
│ ▓▓▓▓   │ Night Safari           │ Adventure │ ₹2,499  │ Published│ Edit ⋮  │
└────────┴────────────────────────┴───────────┴─────────┴──────────┴─────────┘

EDIT FORM (tabbed)
[Tabs: General | Itinerary | Pricing | Media | SEO | Availability]
┌─ WF-ADMIN-FORM-CRUD ────────────────────────────────────────────────────────┐
│ Title *          ░ Polo Forest Heritage Walk                                  │
│ Slug             ░ polo-forest-heritage-walk                                  │
│ Category *       ░ Heritage ▾  (five pillars only)                            │
│ Destination      ░ Polo Forest ▾                                              │
│ Duration         ░ 1 day    Max guests ░ 20                                   │
│ From price *     ░ 1899     Description [rich text editor]                    │
│ [Save draft]  [Publish]  [Preview on site ↗]                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Components
`WF-ADMIN-FORM-CRUD`, `WF-ADMIN-DATA-TABLE`, rich text editor placeholder

### Key actions
- Create / edit / duplicate experience
- Publish / unpublish
- Preview public detail page
- Manage availability calendar (Availability tab)

---

## 4. Categories

**Route:** `/admin/categories`

### Purpose
Manage five pillar categories — names, slugs, descriptions, ordering. **Locked to five pillars** — admin cannot add sixth product category.

### Wireframe Layout

```
/admin/categories
[TEXT: Body Sm] Five experience pillars are locked. Edit display names and descriptions only.

┌────────┬─────────────────────┬────────────┬─────────────┬─────────┐
│ Order  │ Name                │ Slug       │ Experiences │ Actions │
├────────┼─────────────────────┼────────────┼─────────────┼─────────┤
│ 1      │ Heritage            │ heritage   │ 12          │ Edit    │
│ 2      │ Educational Tours   │ education  │ 8           │ Edit    │
│ 3      │ Corporate Retreats  │ corporate  │ 6           │ Edit    │
│ 4      │ Family              │ family     │ 10          │ Edit    │
│ 5      │ Adventure           │ adventure  │ 9           │ Edit    │
└────────┴─────────────────────┴────────────┴─────────────┴─────────┘

EDIT MODAL: display name, description, hero image, SEO meta
[+ Add category] — DISABLED / hidden (taxonomy locked)
```

### Components
`WF-ADMIN-DATA-TABLE`, edit modal

### Key actions
- Edit pillar metadata
- Reorder display (optional drag)
- Cannot create/delete pillars (business rule)

---

## 5. Gallery

**Route:** `/admin/gallery`

### Purpose
Manage public gallery media — photos, videos, drone; pillar and destination tags.

### Wireframe Layout

```
/admin/gallery
[+ Upload] [Type ▾ Photo|Video|Drone] [Category ▾] [Destination ▾] [Search…]

MEDIA GRID (admin)
┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
│ ▓▓ │ │ ▓▓ │ │ ▓▓ │ │ ▓▓ │ │ ▓▓ │ │ ▓▓ │
│ ✓  │ │    │ │    │ │    │ │    │ │    │
└────┘ └────┘ └────┘ └────┘ └────┘ └────┘
Bulk: [Tag] [Delete]  Selected: 2

EDIT PANEL (slide-over)
Title · Caption · Type · Pillar tags · Destination · Linked experience ▾
[Save]
```

### Components
`WF-ADMIN-MEDIA-PICKER`, `WF-GALLERY-GRID` (admin variant)

### Key actions
- Upload / bulk upload
- Tag with pillar + destination
- Link to experience
- Delete / archive

---

## 6. Blogs

**Route:** `/admin/blogs`, `/admin/blogs/create`, `/admin/blogs/[id]/edit`

### Purpose
CMS for `/blog` — articles, featured flag, category chips, SEO.

### Wireframe Layout

```
/admin/blogs
[+ New post] [Status ▾] [Category ▾] [Search…]

┌──────────────────────────────┬──────────┬──────────┬─────────┬─────────┐
│ Title                        │ Category │ Status   │ Date    │ Actions │
├──────────────────────────────┼──────────┼──────────┼─────────┼─────────┤
│ School trip checklist        │ Education│ Published│ 12 Jun  │ Edit    │
│ Monsoon ecology at Polo      │ Ecology  │ Featured │ 28 May  │ Edit    │
└──────────────────────────────┴──────────┴──────────┴─────────┴─────────┘

EDIT: title, slug, excerpt, body, featured toggle, pillar category, hero image, publish date
```

### Components
`WF-ADMIN-FORM-CRUD`, `WF-ADMIN-DATA-TABLE`

### Key actions
- Create / edit / schedule posts
- Mark featured (homepage + stories hero)
- Publish / draft

---

## 7. Users

**Route:** `/admin/users`, `/admin/users/[id]`

### Purpose
Customer and staff accounts — roles, booking history link, profile.

### Wireframe Layout

```
/admin/users
[Search email/name…] [Role ▾ Customer|Staff|Admin]

┌────────────────┬─────────────────────┬──────────┬──────────┬─────────┐
│ Name           │ Email               │ Role     │ Bookings │ Actions │
├────────────────┼─────────────────────┼──────────┼──────────┼─────────┤
│ Rajesh Patel   │ rajesh@example.com  │ Customer │ 3        │ View    │
│ Admin User     │ admin@polo-safari.in│ Admin    │ —        │ Edit    │
└────────────────┴─────────────────────┴──────────┴──────────┴─────────┘

DETAIL: profile fields · booking list · reset password · deactivate
```

### Components
`WF-ADMIN-DATA-TABLE`, user detail panel

### Key actions
- View customer booking history
- Create staff accounts
- Deactivate / reset password

---

## 8. Reviews

**Route:** `/admin/reviews` (Testimonials in schema)

### Purpose
Moderate guest testimonials and Google review highlights for public `/reviews` and homepage.

### Wireframe Layout

```
/admin/reviews
[Status ▾ Pending|Approved|Rejected] [Source ▾ Website|Google|Manual]

┌────────┬──────────────┬─────────────────────────────┬────────┬─────────┐
│ Rating │ Author       │ Excerpt                     │ Status │ Actions │
├────────┼──────────────┼─────────────────────────────┼────────┼─────────┤
│ ★★★★★  │ Priya S.     │ "School trip was seamless…" │ Approved│ Edit   │
│ ★★★★☆  │ Amit K.      │ "Heritage walk guide…"      │ Pending │ Approve│
└────────┴──────────────┴─────────────────────────────┴────────┴─────────┘

EDIT: author, role, quote, experience link, photo, featured toggle, approve/reject
```

### Components
`WF-ADMIN-DATA-TABLE`, `WF-CARD-REVIEW` (preview)

### Key actions
- Approve / reject pending reviews
- Feature on homepage
- Link to experience

---

## 9. Settings

**Route:** `/admin/settings`

### Purpose
Site-wide config — contact info, social links, announcement bar, payment keys (masked), FAQ seed.

### Wireframe Layout

```
/admin/settings
[Tabs: General | Contact | Booking | Payment | SEO | Announcements]

GENERAL TAB
Site name          ░ Polo Safari
Tagline            ░ Experiential travel · Polo Forest, Gujarat
Logo               [Upload]  Favicon [Upload]

CONTACT TAB
HQ address · phones · emails · WhatsApp number · office hours · branch entries

PAYMENT TAB
Gateway provider ▾ · UPI merchant ID (masked) · Test mode toggle

[Save settings]
```

### Components
`WF-ADMIN-FORM-CRUD`, `WF-ADMIN-MEDIA-PICKER`

### Key actions
- Update contact details (feeds `/contact`)
- Configure payment gateway
- Manage announcement bar copy

---

## 10. Media Library

**Route:** `/admin/media`

### Purpose
Central asset repository — reused by experiences, blogs, gallery, settings.

### Wireframe Layout

```
/admin/media
[+ Upload] [Folder ▾] [Type ▾] [Search…]  View: [Grid|List]

┌────┐ ┌────┐ ┌────┐ ┌────┐
│ ▓▓ │ │ ▓▓ │ │ ▓▓ │ │ ▓▓ │
└────┘ └────┘ └────┘ └────┘

DETAIL PANEL: filename, dimensions, size, alt text, used in (links), copy URL, delete
```

### Components
`WF-ADMIN-MEDIA-PICKER`, grid/list toggle

### Key actions
- Upload / organise folders
- Edit alt text (accessibility)
- Insert into content via picker modal
- Delete unused assets

---

## 11. Analytics

**Route:** `/admin/analytics`

### Purpose
Traffic and conversion reporting — bookings funnel, top experiences, enquiry sources.

### Wireframe Layout

```
/admin/analytics
[Date range: Last 30 days ▾] [Export report]

KPIS
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Sessions    │ │ Booking     │ │ Conversion  │ │ Avg order   │
│ 24,500      │ │ starts 842  │ │ 3.2%        │ │ ₹4,120      │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

FUNNEL CHART PLACEHOLDER
Experience view → Book click → Login → Step 1 → Payment → Confirm

TOP EXPERIENCES TABLE
Heritage Walk · Night Safari · School Ecology · …

TRAFFIC SOURCES
Organic · Direct · WhatsApp · Social · Referral
```

### Components
`WF-ADMIN-STAT-WIDGET`, chart placeholders, `WF-ADMIN-DATA-TABLE`

### Key actions
- Change date range
- Export PDF/CSV report
- Drill into experience performance

---

# Appendix

## A. Sidebar navigation map

| Label | Route | Public surface |
|-------|-------|----------------|
| Dashboard | `/admin` | — |
| Bookings | `/admin/bookings` | Account bookings |
| Experiences | `/admin/experiences` | `/experiences/*` |
| Categories | `/admin/categories` | Pillar filters |
| Gallery | `/admin/gallery` | `/gallery` |
| Blogs | `/admin/blogs` | `/blog` |
| Users | `/admin/users` | `/account/*` |
| Reviews | `/admin/reviews` | `/reviews` |
| Settings | `/admin/settings` | Sitewide |
| Media library | `/admin/media` | All media |
| Analytics | `/admin/analytics` | — |

## B. Handoff checklist

| Requirement | Status |
|-------------|--------|
| Sidebar layout | Complete |
| Dashboard stats widgets | Complete |
| Bookings table + filters | Complete |
| Experiences CRUD | Complete |
| Categories (five pillars locked) | Complete |
| Gallery | Complete |
| Blogs | Complete |
| Users | Complete |
| Reviews | Complete |
| Settings | Complete |
| Media library | Complete |
| Analytics | Complete |
| Per-view: purpose, wireframe, components, actions | Complete |

---

**Document path:** `docs/ux-wireframes/13-admin-dashboard.md`  
**Prepared for:** Polo Safari Laravel admin (CMS + operations)
