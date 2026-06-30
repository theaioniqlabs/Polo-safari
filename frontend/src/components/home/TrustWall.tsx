import Link from "next/link";
import { Container } from "@/components/layout/Container";

const awards = ["Gujarat Tourism", "TripAdvisor 2024", "Safe Travel"];

const reviews = [
  { text: "Excellent guides who know every trail...", author: "Guest" },
  { text: "Professional team, seamless school trip...", author: "Guest" },
];

export function TrustWall() {
  return (
    <section className="border-t border-border bg-surface-muted py-[var(--space-8)]">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[var(--radius-md)] bg-surface p-6 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-text-muted">Google Reviews</p>
            <p className="mt-2 font-display text-5xl font-semibold">4.8</p>
            <p className="mt-1 text-sm text-text-muted">Based on 340+ reviews</p>
            <div className="mt-4 space-y-3">
              {reviews.map((r) => (
                <p key={r.text} className="text-sm text-text">
                  ★★★★★ &ldquo;{r.text}&rdquo; — {r.author}
                </p>
              ))}
            </div>
            <Link href="#" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
              Leave a Google review →
            </Link>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Recognition
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {awards.map((a) => (
                <span
                  key={a}
                  className="rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3 text-sm font-medium"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Schools &amp; enterprises
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-12 items-center justify-center rounded bg-surface text-xs text-text-subtle shadow-sm"
                >
                  Partner
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 shrink-0 rounded-full bg-primary-subtle"
              aria-hidden
            />
          ))}
        </div>

        <Link href="#" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
          View on Google Maps →
        </Link>
      </Container>
    </section>
  );
}
