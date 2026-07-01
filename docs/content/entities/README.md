# Entity Files — Step 2 Complete

**Status:** Complete — shared entity YAML authored  
**Schema:** [`../schema/content-model.schema.json`](../schema/content-model.schema.json)  
**Architecture:** [`../00-CONTENT-ARCHITECTURE.md`](../00-CONTENT-ARCHITECTURE.md)

Shared **entity YAML** files hold reusable content atoms. Page sections reference them via `entityRefs` in `pages/*.yaml` (Step 3+).

## Entity files

| File | `entityFile` key | Contents |
|------|------------------|----------|
| [`company.yaml`](./company.yaml) | `company` | Story, vision, mission, values, philosophy, contact, credentials, specializations |
| [`founder.yaml`](./founder.yaml) | `founder` | Chirag Shah — origin, bio, first-person quote, photo brief |
| [`awards.yaml`](./awards.yaml) | `awards` | Gujarat Tourism S6/S7, Swiftnlift, certificates, timeline 2014–2025 |
| [`destinations-india.yaml`](./destinations-india.yaml) | `destinations-india` | PDF-confirmed India destinations + state expansion placeholders |
| [`destinations-international.yaml`](./destinations-international.yaml) | `destinations-international` | PDF-confirmed outbound + regional expansion placeholders, inbound Vietnam |
| [`themes.yaml`](./themes.yaml) | `themes` | Nine theme package taxonomy entries |
| [`services.yaml`](./services.yaml) | `services` | PDF p.40 media and merchandise services only |
| [`clients-corporate.yaml`](./clients-corporate.yaml) | `clients-corporate` | Eight corporate logo placeholders with industry tags |
| [`clients-education.yaml`](./clients-education.yaml) | `clients-education` | Eight educational institution logo placeholders |
| [`partners.yaml`](./partners.yaml) | `partners` | Six partner/association logo placeholders (PDF p.5) |
| [`testimonials.yaml`](./testimonials.yaml) | `testimonials` | Review stats, appreciation letters, generic quote placeholders |
| [`gallery-categories.yaml`](./gallery-categories.yaml) | `gallery-categories` | Eleven gallery categories with stock keyword briefs |
| [`blog-categories.yaml`](./blog-categories.yaml) | `blog-categories` | Ten blog taxonomy categories |

## Conventions

- Each file wraps records in `items[]` with `entityType` on every record.
- Destination `themes[]` references `id` values from `themes.yaml`.
- Duration and state categorization live in destination `summary` (schema has no `byDuration` field).
- Gallery stock keywords are embedded in `description` (schema has no `stockImage` on gallery categories).
- Verification flags: see [`../01-REVIEW-STATS-PENDING.md`](../01-REVIEW-STATS-PENDING.md) and award certificate placeholders.

## Validate

```bash
# When a YAML validator is wired (Step 7+)
# ajv validate -s docs/content/schema/content-model.schema.json -d docs/content/entities/*.yaml
```
