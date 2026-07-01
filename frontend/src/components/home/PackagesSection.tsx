import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getPackagesContent } from "@/content/home-content";

export function PackagesSection() {
  const content = getPackagesContent();

  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 type-display text-3xl">{content.heading}</h2>
        {content.description && (
          <p className="mt-3 max-w-2xl text-text-muted">{content.description}</p>
        )}

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {content.cards.map((pkg) => (
            <article
              key={pkg.id}
              className="w-[320px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[16/9]">
                <MediaImage src={pkg.image} alt={pkg.title} sizes="320px" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  {pkg.duration}
                  {pkg.summary ? ` · ${pkg.summary}` : ""}
                </p>
                <Link
                  href={pkg.href}
                  className="mt-4 inline-flex rounded-[var(--radius-button)] border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-subtle"
                >
                  View theme
                </Link>
              </div>
            </article>
          ))}
        </div>

        {content.cta && (
          <Link
            href={content.cta.href}
            className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {content.cta.label} →
          </Link>
        )}
      </Container>
    </section>
  );
}
