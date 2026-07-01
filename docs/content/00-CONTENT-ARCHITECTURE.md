# Polo Safari — Content Architecture

**Version:** 1.0.0  
**Status:** Content model complete (Steps 1–7)  
**Primary source:** [`TEMP/Polo Company Profile/Polo Safari Company Profile_1.pdf`](../../TEMP/Polo%20Company%20Profile/Polo%20Safari%20Company%20Profile_1.pdf) (44 pages)  
**Schema:** [`schema/content-model.schema.json`](./schema/content-model.schema.json)

---

## Introduction

This document defines the **content architecture** for the Polo Safari website redesign. It supersedes wireframe route copy for **content purposes**; frontend route implementation is a separate task.

Content is authored as **YAML** under `docs/content/`, validated against a shared JSON Schema, and structured for import into Next.js now and Laravel CMS later. Step 1 establishes the schema and directory layout. Full page copy and shared entities follow in Steps 2–3+.

**Content voice (applied in later steps):** Premium editorial tone for families, HR managers, school principals, college coordinators, and corporate decision-makers. Factual, founder-authentic, award-backed — not generic OTA copy.

---

## Information Architecture — 17 Pages

| # | Page | Route | Slug | Primary keyword | PDF source (indicative) |
|---|------|-------|------|-----------------|-------------------------|
| 1 | Home | `/` | *(empty)* | polo safari tours ahmedabad | All (synthesis) |
| 2 | About | `/about` | `about` | about polo safari | Pp. 1–3, 42–43 |
| 3 | India | `/india` | `india` | india tour packages gujarat | Pp. 16–18, 28, 41 |
| 4 | International | `/international` | `international` | international tours from ahmedabad | Pp. 27, 29–31 |
| 5 | Theme Tour Packages | `/theme-tour-packages` | `theme-tour-packages` | themed tour packages india | Pp. 4, 22–26 |
| 6 | Corporate | `/corporate` | `corporate` | corporate retreat gujarat | Pp. 16–18, 22–26, 40 |
| 7 | Schools & Colleges | `/schools-colleges` | `schools-colleges` | school college educational tours | Pp. 19–21 |
| 8 | Services | `/services` | `services` | polo safari travel services | P. 40 (PDF-confirmed only) |
| 9 | Gallery | `/gallery` | `gallery` | polo safari gallery | Pp. 16–26 (structure) |
| 10 | Awards | `/awards` | `awards` | polo safari awards gujarat tourism | Pp. 8–15, 42 |
| 11 | Clients | `/clients` | `clients` | polo safari corporate clients | Pp. 5–7, 32–34 |
| 12 | Blog | `/blog` | `blog` | polo safari travel blog | Categories only |
| 13 | FAQ | `/faq` | `faq` | polo safari faq | Synthesized |
| 14 | Contact | `/contact` | `contact` | contact polo safari ahmedabad | P. 43 |
| 15 | Privacy | `/legal/privacy` | `privacy` | — | Legal boilerplate |
| 16 | Terms | `/legal/terms` | `terms` | — | Legal boilerplate |
| 17 | 404 | — | `not-found` | — | Brand voice only |

**Services scope (PDF-confirmed):** Photography, videography, drone (on request), reel/social content, trip merchandise (mugs, T-shirts), book/collateral printing. **Excluded:** flights, hotels, visa, passport, insurance.

---

## Directory Structure

```
docs/content/
├── 00-CONTENT-ARCHITECTURE.md      # This file — IA, audit summary, checklist
├── 01-REVIEW-STATS-PENDING.md      # Dual review stats — pending user confirmation
├── schema/
│   └── content-model.schema.json   # JSON Schema for pages + entities
├── entities/                       # Step 2 — reusable atoms (single source of truth)
│   ├── company.yaml
│   ├── founder.yaml
│   ├── awards.yaml
│   ├── destinations-india.yaml
│   ├── destinations-international.yaml
│   ├── themes.yaml
│   ├── services.yaml
│   ├── clients-corporate.yaml
│   ├── clients-education.yaml
│   ├── partners.yaml
│   ├── testimonials.yaml
│   ├── gallery-categories.yaml
│   └── blog-categories.yaml
└── pages/                          # Step 3+ — one YAML file per route
    ├── home.yaml
    ├── about.yaml
    ├── india.yaml
    ├── international.yaml
    ├── theme-tour-packages.yaml
    ├── corporate.yaml
    ├── schools-colleges.yaml
    ├── services.yaml
    ├── gallery.yaml
    ├── awards.yaml
    ├── clients.yaml
    ├── blog.yaml
    ├── faq.yaml
    ├── contact.yaml
    ├── privacy.yaml
    ├── terms.yaml
    └── not-found.yaml
```

### Schema types

| Type | Purpose |
|------|---------|
| **Page** | Root document: `id`, `slug`, `title`, `seo`, `sections[]` |
| **Seo** | `title`, `metaDescription`, `slug`, `primaryKeyword`, `secondaryKeywords[]`, `internalLinks[]`, `ctaSuggestions[]` |
| **Section** | `id`, `heading`, `subheading`, `description`, `cta`, `contentNotes`, `seoNotes`, `stockImage`, `replacementNote`, optional `entityRefs[]` |
| **Entity** | Reusable records (company, founder, awards, destinations, themes, services, clients, testimonials, categories, FAQ items) |

Pages reference entities via `entityRefs` on sections; entity files hold canonical facts so updates propagate across pages.

---

## PDF Audit Summary (44 pages)

**Source:** `TEMP/Polo Company Profile/Polo Safari Company Profile_1.pdf`

### Company & founder

| Fact | Detail |
|------|--------|
| **Founder** | Chirag Shah — native of Vijaynagar (~12 km from Polo Forest) |
| **Origin story** | Childhood encounter with foreign tourists led by a non-local guide sharing inaccurate Polo Forest history; purpose became authentic heritage research and storytelling |
| **Founded** | **2014** in **Ahmedabad** |
| **Evolution** | Polo Forest–only tours → pan-India → international |
| **Current focus** | Corporate tours, school picnics, college tours — corporate and educational are primary revenue pillars |

### Specializations (P. 4)

Corporate · Adventure/Trekking · Educational · Industry Visit · 1-Day Picnics · Family Tours

### Offerings (selected)

| Pillar | PDF evidence |
|--------|--------------|
| **Corporate** | Team-building, games, yoga, meditation, rejuvenation; destinations include Polo Forest, Udaipur, Jambughoda, Jaisalmer, Diu, Matheran, Saputara, Lonavala, Daman |
| **Educational** | Hyderabad & Chennai (2025), Polo Forest, Manali, Devs camp — curriculum-style outdoor learning |
| **Adventure** | Manali, Polo Forest, Bakor — trekking and adventure activities |
| **Wellness** | Meditation / pause-reconnect sessions for corporate groups |
| **International outbound** | Singapore, Malaysia, Bali, Dubai, Vietnam (+ more) |
| **International inbound** | Vietnamese guest groups hosted in Ahmedabad (2023–2025) |
| **Domestic family** | All-India family tours |

### Awards & credentials

- **Gujarat Tourism Season 7:** Best Inbound Corporate (Gujarat + Ahmedabad), Best Adventure/Trekking (Ahmedabad)
- **Gujarat Tourism Season 6:** Award (see entity file in Step 2)
- **Swiftnlift Business Magazine:** Best Corporate Tour Operator in Gujarat (presented by Bhagyashree)
- **Credentials (P. 38):** MSME Registered · GST Certified · Verified & Authorized Company

### Trust & media

- **Review stats:** See [`01-REVIEW-STATS-PENDING.md`](./01-REVIEW-STATS-PENDING.md) — dual sources pending confirmation
- **Media services (P. 40):** Reel maker, photographer, videographer, drone (on request); trip merchandise — mugs, T-shirts, book printing
- **Milestone (P. 42):** 11 years; thousands of travelers across corporate, family, group, and educational segments

### Contact (P. 43)

| Field | Value |
|-------|-------|
| Address | D-906, Ganesh Glory 11, Nr. BSNL Office, S.G. Highway, Jagatpur, Ahmedabad 382470 |
| Phone | +91 94085 10911 · +91 87990 17801 · +91 93285 65243 |
| Email | Chirag@polo-safari.in |
| Web | www.polo-safari.in |

### Image-only pages (placeholders required)

| Pages | Content | Placeholder pattern |
|-------|---------|---------------------|
| 5 | Partner / association logos | `[Partner_01]` … |
| 6–7 | Corporate + educational client logos | `[Corporate_Client_01]`, `[Edu_Institution_01]` |
| 14–15 | Award / certificate visuals | `[Certificate_01]` |
| 32–34 | Client appreciation letters | `[Appreciation_Letter_01]` |
| 41 | India map (footprint visual) | Not a destination list |

### Content to rewrite or omit (do not carry verbatim)

- Marketing fluff: *"Excellence Redefined"*, *"Every Trip Becomes an Experience"*
- Vision/Mission/Values triple-repeat on P. 3 — collapse to one vision, one mission, four values
- Unverifiable claim: *"25% of global corporates/edu in 5 years"*
- Slide watermarks and filler corporate snapshot copy

---

## Route Migration (Wireframes → Content IA)

The content model uses the **user-approved IA** (geographic + pillar structure from the company profile). Frontend must map or redirect from legacy wireframe routes.

| Old wireframe route | New content route | Notes |
|---------------------|-------------------|-------|
| `/education` | `/schools-colleges` | **301 redirect** recommended; RFP flow unchanged |
| `/destinations` | `/india` | **301 redirect**; India hub replaces generic destinations index |
| `/polo-forest` | `/india` (anchor or child) | Polo Forest remains hero destination within India content |
| `/experiences` | `/theme-tour-packages` | Experience taxonomy maps to theme packages |
| `/experiences/category/*` | `/theme-tour-packages#*` | Pillar slugs preserved as anchors where applicable |
| `/about` | `/about` | Unchanged |
| `/reviews` | `/clients` | Social proof consolidates under Clients + home trust section |
| `/plan`, `/plan/book/*` | *(out of content scope)* | Booking flow unchanged; content CTAs may still link to `/plan` |

Reference: [`docs/ux-wireframes/00-index.md`](../ux-wireframes/00-index.md) for legacy route map.

---

## Implementation Checklist

| Step | Task | Status |
|------|------|--------|
| **1** | Content model schema + `docs/content/` directory foundation | **Complete** |
| **2** | Author shared entity YAML files (`entities/*.yaml`) | **Complete** |
| **3** | Author core page files: home, about, corporate, schools-colleges | **Complete** |
| **4** | Author geo/theme pages: india, international, theme-tour-packages | **Complete** |
| **5** | Author support pages: services, awards, clients, gallery, blog, faq, contact | **Complete** |
| **6** | Author legal + 404: privacy, terms, not-found | **Complete** |
| **7** | Flag verification items (review platforms, hours, social URLs, CSR, safety copy) | **Complete** |
| **8** | Frontend route migration + CMS wiring | Out of scope for content pass |

---

## Step 7 — Verification Backlog (Consolidated)

Items flagged across entity and page YAML. **Do not publish live copy until client, ops, or solicitor confirms.**

| # | Item | Source | Action required |
|---|------|--------|-----------------|
| 1 | **Review stats** — Google 4.7 · 1,304+ vs 96% · 253 (platform TBC) | [`01-REVIEW-STATS-PENDING.md`](./01-REVIEW-STATS-PENDING.md), `home.yaml`, `clients.yaml`, `testimonials.yaml` | Confirm platform for stat 2; do not cite TripAdvisor without approval |
| 2 | **Working hours** | `contact.yaml` | Verify Mon–Sat (or actual) schedule with client |
| 3 | **Social media URLs** | `contact.yaml`, `home.yaml` | Confirm Instagram, Facebook, LinkedIn, YouTube handles |
| 4 | **Emergency contact line** | `contact.yaml` | Confirm dedicated 24/7 public number vs on-trip briefing only |
| 5 | **Client logos** | `clients.yaml`, entity files | Replace `[Corporate_Client_*]`, `[Edu_Institution_*]` placeholders |
| 6 | **Partner / association logos** | `clients.yaml`, `awards.yaml`, `partners` entity | Replace `[Partner_*]`, `[Gov_Association_*]`; verify affiliation names |
| 7 | **Award certificates** | `awards.yaml`, `awards` entity | Replace `[Certificate_*]`; verify Season 6 details from certificate |
| 8 | **Ops safety copy** | `schools-colleges.yaml`, `faq.yaml`, `corporate.yaml` | Supervision ratios, insurance scope, emergency protocols, facilitator credentials |
| 9 | **Cancellation & refund policy** | `terms.yaml` | Standard tiered policy from ops + solicitor—currently [TBC] |
| 10 | **CSR scope** | `corporate.yaml` | Verify CSR menu with ops before expanding |
| 11 | **Solicitor legal review** | `privacy.yaml`, `terms.yaml` | Full review before production; DPDP grievance officer if required |
| 12 | **Map embed URL** | `contact.yaml`, `company` entity | Add `mapEmbedUrl` when verified |
| 13 | **Seasonal / monsoon copy** | `india.yaml` | Ops verification for availability windows beyond PDF list |

---

## Content Model Complete — Summary

| Metric | Count |
|--------|------:|
| **Pages** | 17 |
| **Entity files** | 13 |
| **Sections (all pages)** | 175 |

### Page inventory

| File | Route | Sections |
|------|-------|----------:|
| `home.yaml` | `/` | 18 |
| `about.yaml` | `/about` | 13 |
| `india.yaml` | `/india` | 7 |
| `international.yaml` | `/international` | 12 |
| `theme-tour-packages.yaml` | `/theme-tour-packages` | 12 |
| `corporate.yaml` | `/corporate` | 15 |
| `schools-colleges.yaml` | `/schools-colleges` | 12 |
| `services.yaml` | `/services` | 12 |
| `gallery.yaml` | `/gallery` | 14 |
| `awards.yaml` | `/awards` | 10 |
| `clients.yaml` | `/clients` | 10 |
| `blog.yaml` | `/blog` | 5 |
| `faq.yaml` | `/faq` | 8 |
| `contact.yaml` | `/contact` | 11 |
| `privacy.yaml` | `/legal/privacy` | 11 |
| `terms.yaml` | `/legal/terms` | 12 |
| `not-found.yaml` | *(404)* | 3 |

### Remaining verification (pre-launch)

1. Review stats dual-source confirmation  
2. Office working hours  
3. Social profile URLs  
4. Client, partner, and certificate image assets  
5. Ops safety and supervision copy  
6. Standard cancellation/refund policy  
7. Solicitor review of privacy and terms  
8. Map embed and analytics/cookie stack (privacy implementation)

### Next implementation step

**Wire content YAML into Next.js or Laravel CMS** — load page files by route, resolve `entityRefs` from `entities/`, render sections with design-system components, implement 301 redirects per Route Migration table, and attach `noindex` to 404 responses.

---

## Internal Linking (Preview)

```
Home → Corporate, Schools & Colleges, India, International, Theme Packages
Corporate → Awards, Clients
Schools & Colleges → Clients
India / International → Theme Packages
Theme Packages → Gallery
About → Awards, Corporate
Services → Corporate
FAQ → Contact
Awards → Clients
```

Full `internalLinks` and `ctaSuggestions` are authored per page in Steps 3+.

---

**Prepared for:** Polo Safari experiential travel platform  
**Next:** Step 8 — frontend route migration + CMS wiring (out of content scope)
