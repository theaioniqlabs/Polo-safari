# Polo Safari — Navigation Architecture (Reconciled v1)

**Version:** 1.0.0  
**Status:** Approved for implementation — Step 1 (nav shell)  
**Date:** July 2026  
**Sources:** NAVIGATION_ARCHITECTURE v1.0 (client doc), Phase 7–10 frontend, wireframes, locked MVP decisions

---

## Executive Summary

This document reconciles the **new business-first navigation IA** (Tours, Corporate, Schools, Destinations, Services…) with **locked MVP decisions** (enquiry-first, Plan My Journey CTA, Forest Green primary, no login) and the **mega menu visual pattern** (glass header, two-column mega panel with colored dots + featured image cards).

**Visual style:** Adopt screenshot mega menu layout (rounded white panel, Browse by type + featured cards).  
**Content:** Adopt new NAV doc labels and groupings, pruned to mega menu rules (≤8 links per group).  
**Defer:** Flights, hotels, visa, passport under Services — footer “Future services” only.

---

## Conflict Table

| Topic | Screenshot / old wireframes | New NAV doc | Current frontend (Phase 8) | Locked MVP | Decision |
|-------|----------------------------|-------------|---------------------------|------------|----------|
| Primary CTA label | Plan Your Visit (blue) | Enquire Now | Plan My Journey ✅ | Plan My Journey | **Keep Plan My Journey** (Forest Green) |
| Secondary CTA | — | Enquire Now (primary in doc) | Enquire Now utility ✅ | Enquiry-first | **Enquire Now** outline/text in utilities |
| Login / Profile | Login button in screenshot | — | Removed ✅ | No login MVP | **Omit** |
| Experiences vs Tours | “Experiences” mega, 5 pillars | “Tours” mega, Domestic/Intl/Theme | “Tour Packages” flat | Business-first IA | **Rename to Tours**; pillar dots map to tour types |
| Discover grouping | Discover dropdown | Not in new doc | Not wired | New doc wins | **Dissolve** — items distributed to Destinations, About, Gallery |
| India / International top-level | Not in wireframes | Under Tours + Destinations | `/india`, `/international` routes exist | Geographic as filters | **Under mega menus**, not top-level |
| Services | Not in wireframes | Flight, Hotel, Visa, 7 items | `/services` page | Media/merchandise MVP | **MVP dropdown only** — custom planning, photography, merchandise; **defer** travel ancillaries |
| Polo Forest placement | Top-level link | Under Destinations | `/destinations/india/polo-forest` | Polo-centric | **Featured in Destinations mega** |
| Gallery / Blog | Under Discover | Top-level | Top-level flat | New doc | **Top-level**; Gallery link, Blog link |
| About sub-pages | Under Discover | 5 children | Flat `/about` | Launch single page OK | **Dropdown** with Story, Awards, Clients (≤4) |
| Contact | Drawer footer | Top-level | Top-level | Conversion paths | **Top-level**; hide below `lg` on desktop |
| Home | Logo only (screenshot) | Top-level | Logo only | New doc | **Logo = Home**; optional drawer link |
| Mega menu layout | 2-col dots + cards | Generic mega | `ExperiencesMegaMenu` unused | Screenshot style | **Adopt** rounded panel pattern |
| Header colors | Blue CTA | — | Forest Green ✅ | Forest Green primary | **Keep brand tokens** |
| Theme / Language | In wireframes | — | Not implemented | English MVP | **Defer** Phase 2 |
| Announcement bar | — | Optional | `AnnouncementBar` exists | Optional | **Keep** optional via SiteShell |

---

## Reconciled Primary Navigation (Desktop)

| # | Label | Type | Base URL | Notes |
|---|-------|------|----------|-------|
| — | *(Logo)* | Link | `/` | Home |
| 1 | Tours | Mega | `/tour-packages` | Left: browse types; right: featured packages |
| 2 | Corporate | Mega | `/corporate` | Left: program types; right: featured retreats |
| 3 | Schools & Colleges | Mega | `/schools-colleges` | Left: program types; right: featured trips |
| 4 | Destinations | Mega | `/destinations` | Left: regions; right: featured destinations |
| 5 | Services | Dropdown | `/services` | MVP enquiry services only (≤5 links) |
| 6 | Gallery | Link | `/gallery` | Simple link |
| 7 | About | Dropdown | `/about` | Story, Awards, Clients |
| 8 | Blog | Link | `/blog` | Simple link |
| 9 | Contact | Link | `/contact` | Hidden below `lg` |

**Utilities (right cluster):** Search · Enquire Now · **Plan My Journey** (primary filled)

---

## Mega Menu Structures (max 8 links per group)

### Tours

| Left — Browse by type | Right — Featured packages |
|-----------------------|---------------------------|
| Domestic Tours → `/india` | Corporate Tour (card) |
| International Tours → `/international` | School Tour (card) |
| Theme Tours → `/theme-tour-packages` | Group Tour (card) |
| All Tour Packages → `/tour-packages` | |
| *View all tour packages →* | |

### Corporate

| Left — Programs | Right — Featured |
|-----------------|------------------|
| Overview → `/corporate` | Polo Forest Offsite (card) |
| Team Building → `/corporate#team-building` | Leadership Retreat (card) |
| Offsites & Retreats → `/corporate#offsites` | Conference Getaway (card) |
| Leadership Camps → `/corporate#leadership` | |
| Conferences → `/corporate#conferences` | |
| Request Proposal → `/corporate#rfp` | |

### Schools & Colleges

| Left — Programs | Right — Featured |
|-----------------|------------------|
| Educational Tours → `/schools-colleges` | Nature Camp (card) |
| Nature Camps → `/schools-colleges#nature-camps` | Industrial Visit (card) |
| Industrial Visits → `/schools-colleges#industrial` | School Picnic (card) |
| School Picnics → `/schools-colleges#picnics` | |
| Request Proposal → `/schools-colleges#rfp` | |

### Destinations

| Left — Explore | Right — Featured |
|----------------|------------------|
| All Destinations → `/destinations` | Polo Forest (card) |
| Polo Forest → `/destinations/india/polo-forest` | Gujarat Highlights (card) |
| India → `/india` | International Favourites (card) |
| International → `/international` | |

---

## Services (MVP Dropdown)

**Included (enquiry model):**

| Link | URL |
|------|-----|
| Custom Trip Planning | `/plan-my-journey` |
| Photography & Media | `/services#photography` |
| Merchandise & Gear | `/services#merchandise` |
| Event & Group Support | `/services#event-support` |
| All Services | `/services` |

**Deferred (document only — `nav-config.ts` comment + footer):**

- Flights · Hotels · Car Rental · Visa · Passport · Travel Insurance

*Rationale: MVP is enquiry-first; ancillary booking services require supplier integrations and conflict with locked Phase 7 scope.*

---

## About Dropdown

| Link | URL |
|------|-----|
| Our Story | `/about` |
| Awards & Recognition | `/awards` |
| Our Clients | `/clients` |
| FAQ | `/faq` |

---

## Mobile Drawer

- Inline search at top
- Accordions: Tours, Corporate, Schools & Colleges, Destinations, Services, About
- Flat links: Gallery, Blog, Contact, FAQ
- Sticky bottom: **Plan My Journey** (primary)
- Footer row: Enquire Now · Contact
- No Login

---

## Visual Specification (Step 1)

| Element | Token / behaviour |
|---------|-------------------|
| Header (top) | Glass blur `--glass-bg`, `--glass-blur` |
| Header (scrolled) | Solid `--ps-surface` + border + shadow |
| Nav cluster | Pill container, rounded `--radius-button` |
| Active nav item | `--ps-primary-subtle` pill, `--ps-primary` text |
| Mega panel | White `--ps-surface`, `--ps-radius-lg`, soft shadow |
| Mega left links | Colored dots per category (`--color-pillar-*`) |
| Primary CTA | `--ps-primary` (Forest Green), not Polo Blue |
| Enquire CTA | Ghost/text — no filled blue |

---

## Implementation Plan

1. **Nav shell (this run)** — `nav-config.ts`, `MegaMenu.tsx`, `NavDropdown.tsx`, `Header.tsx`, `MobileDrawer.tsx`, tokens if needed, this doc.
2. **Route & content alignment** — Verify mega menu anchors exist on landing pages; add section IDs where missing.
3. **Search overlay** — Align suggestions with new IA labels (Tours, Destinations).
4. **Footer sync** — Mirror deferred Services in footer “Future” column; align pillar links with Tours mega.
5. **Motion polish** — Mega fade/slide per motion system doc; `prefers-reduced-motion` fallbacks.
6. **QA & a11y audit** — Keyboard nav, screen reader labels, focus trap regression on all megas.

---

## File Index

| File | Role |
|------|------|
| `frontend/src/components/layout/navigation/nav-config.ts` | Single source of nav data |
| `frontend/src/components/layout/navigation/MegaMenu.tsx` | Reusable two-column mega |
| `frontend/src/components/layout/navigation/NavDropdown.tsx` | Services + About dropdowns |
| `frontend/src/components/layout/Header.tsx` | Glass header + nav shell |
| `frontend/src/components/layout/navigation/MobileDrawer.tsx` | Accordion mobile nav |
| `docs/navigation/02-navigation-architecture-v1.md` | This document |

---

**Prepared for:** Polo Safari experiential travel platform  
**Next approval gate:** Step 2 — landing page anchor IDs and footer sync
