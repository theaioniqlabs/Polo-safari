import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getFeaturedToursContent } from "@/content/home-content";

export function FeaturedExperiences() {
  const content = getFeaturedToursContent();
  const [hero, ...stacked] = content.cards;

  if (!hero) {
    return null;
  }

  return (
    <section className="bg-surface-muted py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 type-display text-3xl md:text-4xl">{content.heading}</h2>
        {content.description && (
          <p className="mt-3 max-w-2xl text-text-muted">{content.description}</p>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="group relative overflow-hidden rounded-[var(--radius-md)] lg:col-span-7">
            <div className="relative aspect-[4/5] w-full">
              <Link href={hero.href} className="absolute inset-0">
                <MediaImage src={hero.image} alt={hero.title} sizes="(max-width:1024px) 100vw, 60vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-text-inverse">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  {hero.badge}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-text-inverse">
                  <Link href={hero.href}>{hero.title}</Link>
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/85">{hero.summary}</p>
                <Link
                  href={hero.href}
                  className="mt-4 inline-flex rounded-[var(--radius-button)] bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
                >
                  Explore
                </Link>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {stacked.map((card) => (
              <article
                key={card.id}
                className="group flex flex-1 overflow-hidden rounded-[var(--radius-md)] bg-surface shadow-[var(--shadow-soft)]"
              >
                <Link
                  href={card.href}
                  className="relative h-36 w-2/5 shrink-0 sm:h-auto sm:min-h-[140px]"
                >
                  <MediaImage src={card.image} alt={card.title} sizes="200px" />
                </Link>
                <div className="flex flex-col justify-center p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-text-subtle">
                    {card.badge}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">
                    <Link href={card.href} className="hover:text-primary">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-text-muted">{card.summary}</p>
                  <Link
                    href={card.href}
                    className="mt-3 inline-flex w-fit rounded-[var(--radius-button)] bg-primary px-4 py-2 text-xs font-semibold text-text-inverse hover:bg-primary-hover"
                  >
                    Explore
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
