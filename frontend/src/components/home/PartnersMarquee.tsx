import Link from "next/link";
import { Container } from "@/components/layout/Container";

const partners = [
  "Forest Lodge",
  "Idar Resorts",
  "Gujarat Trails",
  "Eco Transport",
  "Heritage Stays",
  "Adventure Co",
  "School Partners",
];

export function PartnersMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-surface py-[var(--space-8)]">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          In partnership with
        </p>
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
          <Link href="/contact#partners" className="text-sm font-semibold text-primary hover:underline">
            Become a partner →
          </Link>
        </p>
      </Container>
    </section>
  );
}
