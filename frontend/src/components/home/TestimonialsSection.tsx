import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getTestimonialsContent } from "@/content/home-content";

export function TestimonialsSection() {
  const content = getTestimonialsContent();
  const featured = content.featured;
  const supporting = content.supporting;

  if (!featured) {
    return null;
  }

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

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {content.image && (
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] lg:col-span-5">
              <MediaImage
                src={content.image}
                alt={content.heading}
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
          )}
          <blockquote
            className={`flex flex-col justify-center border-l-4 border-primary pl-6 ${content.image ? "lg:col-span-7" : "lg:col-span-12"}`}
          >
            <p className="type-display text-2xl italic leading-relaxed text-text-heading md:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="font-semibold text-text">{featured.name}</span>
                <span className="text-text-muted"> · {featured.role}</span>
              </cite>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {featured.badge}
              </p>
            </footer>
          </blockquote>
        </div>

        {supporting.length > 0 && (
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {supporting.map((item) => (
              <figure
                key={item.id}
                className="w-[260px] shrink-0 snap-start rounded-[var(--radius-md)] bg-surface-muted p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="mb-3 h-10 w-10 rounded-full bg-primary-subtle" aria-hidden />
                <blockquote className="text-sm text-text">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs text-text-muted">
                  {item.name} · {item.badge}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

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
