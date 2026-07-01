import Link from "next/link";
import { MediaImage } from "@/components/home/MediaImage";
import type {
  AwardEntity,
  BlogCategoryEntity,
  ClientEntity,
  DestinationEntity,
  EntityRecord,
  GalleryCategoryEntity,
  PartnerEntity,
  ServiceEntity,
  TestimonialEntity,
  ThemeEntity,
} from "@/content/types";
import { stockImageUrl, stockImageUrlFromKeywords } from "@/content/stock-images";

export function PlaceholderTile({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[120px] items-center justify-center rounded-[var(--radius-md)] border-2 border-dashed border-border bg-surface-muted p-4 text-center ${className}`}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-text-subtle">
        {label}
      </span>
    </div>
  );
}

type CardGridProps = {
  entities: EntityRecord[];
  columns?: 2 | 3 | 4;
};

export function CardGrid({ entities, columns = 3 }: CardGridProps) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`mt-8 grid gap-6 ${colClass}`}>
      {entities.map((entity) => (
        <EntityCard key={entity.id} entity={entity} />
      ))}
    </div>
  );
}

function EntityCard({ entity }: { entity: EntityRecord }) {
  switch (entity.entityType) {
    case "destination": {
      const d = entity as DestinationEntity;
      const img = d.image
        ? stockImageUrl(d.image)
        : stockImageUrlFromKeywords([d.name, d.region], "card");
      const href = d.region === "india" ? "/india" : "/international";
      return (
        <Link
          href={href}
          className="group overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface transition-shadow hover:shadow-md"
        >
          <div className="relative aspect-video overflow-hidden">
            <MediaImage src={img} alt={d.name} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="p-4">
            <p className="text-xs text-text-subtle">{d.stateOrCountry}</p>
            <h3 className="mt-1 text-lg font-semibold group-hover:text-primary">
              {d.name}
            </h3>
            {d.summary && (
              <p className="mt-2 line-clamp-3 text-sm text-text-muted">{d.summary.trim()}</p>
            )}
          </div>
        </Link>
      );
    }
    case "theme": {
      const t = entity as ThemeEntity;
      const href = t.anchorSlug
        ? `/theme-tour-packages#${t.anchorSlug}`
        : "/theme-tour-packages";
      return (
        <Link
          href={href}
          className="rounded-[var(--radius-md)] border border-border bg-surface p-6 transition-shadow hover:shadow-md"
        >
          <h3 className="text-lg font-semibold">{t.name}</h3>
          {t.summary && (
            <p className="mt-2 text-sm text-text-muted line-clamp-4">{t.summary.trim()}</p>
          )}
        </Link>
      );
    }
    case "service": {
      const s = entity as ServiceEntity;
      return (
        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">{s.name}</h3>
          {s.summary && (
            <p className="mt-2 text-sm text-text-muted">{s.summary.trim()}</p>
          )}
          {s.availability && (
            <span className="mt-3 inline-block rounded-full bg-primary-subtle px-3 py-1 text-xs font-medium text-primary">
              {s.availability.replace("-", " ")}
            </span>
          )}
        </div>
      );
    }
    case "award": {
      const a = entity as AwardEntity;
      return (
        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6">
          {a.imagePlaceholder ? (
            <PlaceholderTile label={a.imagePlaceholder} className="mb-4 min-h-[100px]" />
          ) : null}
          <h3 className="text-lg font-semibold">{a.title}</h3>
          {a.issuer && <p className="mt-1 text-sm text-text-subtle">{a.issuer}</p>}
          {a.description && (
            <p className="mt-2 text-sm text-text-muted">{a.description.trim()}</p>
          )}
        </div>
      );
    }
    case "client": {
      const c = entity as ClientEntity;
      return <PlaceholderTile label={c.logoPlaceholder} className="min-h-[100px]" />;
    }
    case "partner": {
      const p = entity as PartnerEntity;
      return <PlaceholderTile label={p.logoPlaceholder} className="min-h-[100px]" />;
    }
    case "gallery-category": {
      const g = entity as GalleryCategoryEntity;
      const img = stockImageUrlFromKeywords([g.name, "travel photography"], "card");
      return (
        <Link
          href="/gallery"
          className="group overflow-hidden rounded-[var(--radius-md)] border border-border"
        >
          <div className="relative aspect-video">
            <MediaImage src={img} alt={g.name} sizes="400px" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold group-hover:text-primary">{g.name}</h3>
            {g.description && (
              <p className="mt-1 text-sm text-text-muted line-clamp-2">{g.description}</p>
            )}
          </div>
        </Link>
      );
    }
    case "blog-category": {
      const b = entity as BlogCategoryEntity;
      const img = stockImageUrlFromKeywords([b.name, "travel blog"], "card");
      return (
        <Link
          href="/blog"
          className="group overflow-hidden rounded-[var(--radius-md)] border border-border"
        >
          <div className="relative aspect-video">
            <MediaImage src={img} alt={b.name} sizes="400px" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold group-hover:text-primary">{b.name}</h3>
            {b.description && (
              <p className="mt-1 text-sm text-text-muted line-clamp-2">{b.description}</p>
            )}
          </div>
        </Link>
      );
    }
    case "testimonial": {
      const t = entity as TestimonialEntity;
      if (t.id.includes("stat") || t.id.includes("reviews")) {
        return null;
      }
      return (
        <blockquote className="rounded-[var(--radius-md)] border border-border bg-surface-muted p-6">
          {t.assetPlaceholder && (
            <PlaceholderTile label={t.assetPlaceholder} className="mb-4 min-h-[80px]" />
          )}
          {t.quote && (
            <p className="text-lg italic text-text-heading">&ldquo;{t.quote.trim()}&rdquo;</p>
          )}
          {(t.author || t.role) && (
            <footer className="mt-4 text-sm text-text-muted">
              {t.author && <cite className="font-semibold not-italic">{t.author}</cite>}
              {t.role && <span> — {t.role}</span>}
              {t.organization && <span>, {t.organization}</span>}
            </footer>
          )}
        </blockquote>
      );
    }
    default:
      return null;
  }
}
