import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getInternationalContent } from "@/content/home-content";

export function HeritageSection() {
  const content = getInternationalContent();
  const heroImage = content.image ?? content.destinations[0]?.image;

  return (
    <section className="bg-surface-muted py-[var(--space-12)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {heroImage && (
            <div className="relative aspect-[2/1] overflow-hidden rounded-[var(--radius-lg)] lg:col-span-7">
              <MediaImage
                src={heroImage}
                alt={content.heading}
                sizes="(max-width:1024px) 100vw, 55vw"
              />
            </div>
          )}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
              {content.subheading}
            </p>
            <h2 className="mt-2 type-display text-3xl">{content.heading}</h2>
            {content.description && (
              <p className="mt-4 text-text-muted">{content.description}</p>
            )}
            {content.cta && (
              <Link
                href={content.cta.href}
                className="mt-6 inline-block rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
              >
                {content.cta.label}
              </Link>
            )}
          </div>
        </div>

        {content.destinations.length > 0 && (
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {content.destinations.map((d) => (
              <Link
                key={d.id}
                href={d.href}
                className="group relative h-48 w-56 shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)]"
              >
                <MediaImage src={d.image} alt={d.name} sizes="224px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 font-semibold text-text-inverse">{d.name}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
