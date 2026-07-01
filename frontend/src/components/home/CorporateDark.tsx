import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getCorporateContent } from "@/content/home-content";

export function CorporateDark() {
  const content = getCorporateContent();
  const backgroundImage = content.image ?? content.cards[0]?.image;

  return (
    <section
      data-theme="dark-section"
      className="relative min-h-[70vh] overflow-hidden bg-surface-inverse py-[var(--space-15)] text-on-dark"
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <MediaImage src={backgroundImage} alt="" sizes="100vw" />
          <div className="absolute inset-0 bg-[#1a1f2e]/85" aria-hidden />
        </div>
      )}

      <Container className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
          {content.subheading}
        </p>
        <h2 className="mt-2 max-w-2xl type-display text-3xl text-text-inverse md:text-5xl">
          {content.heading}
        </h2>
        {content.description && (
          <p className="mt-4 max-w-xl text-lg text-text-on-dark/90">{content.description}</p>
        )}

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-md)]"
            >
              <MediaImage src={card.image} alt={card.title} sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-text-inverse">
                {card.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {content.cta && (
            <Link
              href={content.cta.href}
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              {content.cta.label}
            </Link>
          )}
          <Link
            href="/corporate"
            className="text-sm font-medium text-text-inverse/90 hover:text-text-inverse hover:underline"
          >
            Corporate programs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
