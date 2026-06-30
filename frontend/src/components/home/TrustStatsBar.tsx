import { Container } from "@/components/layout/Container";

const stats = [
  { value: "12+", label: "Years" },
  { value: "50,000+", label: "Guests" },
  { value: "120+", label: "Experiences" },
  { value: "4.8★", label: "Google rating" },
];

export function TrustStatsBar() {
  return (
    <section className="border-y border-border bg-surface py-[var(--space-8)]">
      <Container>
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <dt className="font-display text-3xl font-semibold text-text-heading md:text-4xl">
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
