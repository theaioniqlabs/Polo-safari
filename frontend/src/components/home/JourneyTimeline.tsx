import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getJourneyTimelineContent } from "@/content/home-content";

export function JourneyTimeline() {
  const content = getJourneyTimelineContent();

  return (
    <section className="bg-surface-muted py-[var(--space-8)]">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 text-center type-display text-3xl">{content.heading}</h2>
        {content.description && (
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-muted">
            {content.description}
          </p>
        )}

        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {content.milestones.map((step, i) => (
            <li key={step.id} className="relative text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-subtle text-sm font-semibold text-primary">
                {step.year}
              </div>
              {i < content.milestones.length - 1 && (
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

        <p className="mt-8 text-center">
          <Link href={content.awardsHref} className="text-sm font-semibold text-primary hover:underline">
            View all awards & milestones →
          </Link>
          {" · "}
          <Link href={content.aboutHref} className="text-sm font-semibold text-primary hover:underline">
            Our founder story →
          </Link>
        </p>
      </Container>
    </section>
  );
}
