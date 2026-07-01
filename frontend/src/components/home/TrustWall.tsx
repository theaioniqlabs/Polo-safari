import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getAwardsContent } from "@/content/home-content";

export function TrustWall() {
  const content = getAwardsContent();

  return (
    <section className="border-t border-border bg-surface-muted py-[var(--space-8)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 type-display text-3xl">{content.heading}</h2>
        {content.description && (
          <p className="mt-3 max-w-3xl text-text-muted">{content.description}</p>
        )}

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="rounded-[var(--radius-md)] bg-surface p-6 shadow-[var(--shadow-soft)] md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Recognition
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.awards.map((award) => (
                <span
                  key={award.id}
                  className="rounded-[var(--radius-md)] border border-border bg-surface-muted px-4 py-3 text-sm font-medium"
                  title={award.title}
                >
                  {award.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {content.cta && (
              <Link
                href={content.cta.href}
                className="inline-flex rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
              >
                {content.cta.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
