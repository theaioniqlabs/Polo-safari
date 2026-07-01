import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getClientsContent } from "@/content/home-content";

export function PartnersMarquee() {
  const content = getClientsContent();
  const partners = content.clients.map((c) => c.label);
  const doubled = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-surface py-[var(--space-8)]">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold">{content.heading}</h2>
        {content.description && (
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-muted">
            {content.description}
          </p>
        )}
      </Container>

      <div className="relative mt-6">
        <div className="flex animate-[marquee_40s_linear_infinite] gap-8 whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex h-12 min-w-[140px] items-center justify-center rounded border border-border bg-surface-muted px-6 text-sm font-medium text-text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-6 text-center">
          {content.cta && (
            <Link href={content.cta.href} className="text-sm font-semibold text-primary hover:underline">
              {content.cta.label} →
            </Link>
          )}
        </p>
      </Container>
    </section>
  );
}
