import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Thank You | Polo Safari",
  robots: { index: false },
};

type Props = { searchParams: Promise<{ source?: string }> };

export default async function EnquireThankYouPage({ searchParams }: Props) {
  const { source } = await searchParams;
  const isPlan = source === "plan-my-journey";

  return (
    <SiteShell>
      <section className="py-[var(--space-15)]">
        <Container className="mx-auto max-w-lg text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-subtle text-2xl text-primary"
            aria-hidden
          >
            ✓
          </div>
          <h1 className="mt-6 type-display text-3xl">Thank you</h1>
          <p className="mt-4 text-lg text-text-muted">
            {isPlan
              ? "Your journey plan has been received. Our team will respond with a tailored proposal within 48 hours."
              : "Your enquiry has been received. Our team will be in touch within 48 hours."}
          </p>
          <p className="mt-2 text-sm text-text-subtle">
            For urgent requests, WhatsApp us at{" "}
            <a href="https://wa.me/919408510911" className="text-primary hover:underline">
              +91 94085 10911
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              Back to Home
            </Link>
            <Link
              href="/tour-packages"
              className="rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-muted"
            >
              Browse Tour Packages
            </Link>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
