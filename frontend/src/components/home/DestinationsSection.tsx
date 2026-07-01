import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getDomesticContent } from "@/content/home-content";

export function DestinationsSection() {
  const content = getDomesticContent();
  const bannerImage = content.image ?? content.destinations[0]?.image;

  return (
    <section id="popular-destinations" className="bg-surface-muted py-[var(--space-12)]">
      {bannerImage && (
        <div className="relative mb-10 h-[35vh] min-h-[240px] w-full overflow-hidden">
          <MediaImage src={bannerImage} alt={content.heading} sizes="100vw" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 type-display text-3xl">{content.heading}</h2>
        {content.description && (
          <p className="mt-3 max-w-2xl text-text-muted">{content.description}</p>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {content.destinations.map((d) => (
            <Link
              key={d.id}
              href={d.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)]"
            >
              <MediaImage src={d.image} alt={d.name} sizes="(max-width:768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-text-inverse">
                {d.name}
              </p>
            </Link>
          ))}
        </div>

        {content.cta && (
          <Link
            href={content.cta.href}
            className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {content.cta.label} →
          </Link>
        )}
      </Container>
    </section>
  );
}
