import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getAdventureContent } from "@/content/home-content";

export function AdventureSection() {
  const content = getAdventureContent();

  return (
    <section className="bg-surface-water py-[var(--space-12)]">
      <div className="relative mb-10 h-[40vh] min-h-[280px] w-full overflow-hidden md:h-[50vh]">
        <MediaImage src={content.heroImage} alt={content.heading} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a24]/60 to-transparent" />
        <Container className="relative flex h-full items-end pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
              {content.subheading}
            </p>
            <h2 className="mt-2 type-display text-3xl text-text-inverse md:text-4xl">
              {content.heading}
            </h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {content.adventures.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)]"
            >
              <MediaImage src={item.image} alt={item.title} sizes="256px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-semibold text-text-inverse">{item.title}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-muted">
            <div className="flex h-64 items-center justify-center bg-primary-subtle text-sm text-text-muted">
              Map embed — adventure trail network
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {content.description && (
              <p className="text-text-muted">{content.description}</p>
            )}
            {content.cta && (
              <Link
                href={content.cta.href}
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                {content.cta.label} →
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
