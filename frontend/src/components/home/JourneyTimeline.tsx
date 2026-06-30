import Link from "next/link";
import { Container } from "@/components/layout/Container";

const steps = [
  { label: "Browse experiences", detail: "Find your perfect Polo Forest trip" },
  { label: "Login & create account", detail: "Required to complete booking" },
  { label: "Pick dates & guests", detail: "Real-time availability" },
  { label: "Pay UPI / card online", detail: "Secure checkout" },
  { label: "Confirmation & e-ticket", detail: "Instant email confirmation" },
];

export function JourneyTimeline() {
  return (
    <section className="bg-surface-muted py-[var(--space-8)]">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          Your Journey
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold">
          From browsing to arriving at Polo Forest
        </h2>

        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.label} className="relative text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-subtle text-sm font-semibold text-primary">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+28px)] top-7 hidden h-0.5 w-[calc(100%-56px)] bg-border md:block"
                  aria-hidden
                />
              )}
              <p className="text-sm font-semibold">{step.label}</p>
              <p className="mt-1 text-xs text-text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-muted">
          Corporate and school groups: use Request Proposal — custom quotes within 48 hours.
        </p>
        <p className="mt-4 text-center">
          <Link href="/legal/cancellation" className="text-sm font-semibold text-primary hover:underline">
            View cancellation policy →
          </Link>
        </p>
      </Container>
    </section>
  );
}
