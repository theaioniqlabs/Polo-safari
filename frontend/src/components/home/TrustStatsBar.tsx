import { Container } from "@/components/layout/Container";
import { getTrustStatsContent } from "@/content/home-content";

export function TrustStatsBar() {
  const content = getTrustStatsContent();

  return (
    <section className="border-y border-border bg-surface py-[var(--space-8)]">
      <Container>
        <h2 className="sr-only">{content.heading}</h2>
        {content.subheading && <p className="sr-only">{content.subheading}</p>}
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              {stat.platform && (
                <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle">
                  {stat.platform}
                </p>
              )}
              <dt className="type-stat text-3xl text-text-heading md:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
