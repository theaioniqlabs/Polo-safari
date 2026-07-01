import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getEducationalContent } from "@/content/home-content";

export function EducationJourney() {
  const content = getEducationalContent();

  return (
    <section className="bg-surface-nature py-[var(--space-15)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 max-w-2xl type-display text-3xl md:text-4xl">
          {content.heading}
        </h2>
        {content.description && (
          <p className="mt-4 max-w-2xl text-text-muted">{content.description}</p>
        )}

        <ol className="mt-12 space-y-16">
          {content.steps.map((step, i) => (
            <li
              key={step.title}
              className={`grid items-center gap-8 lg:grid-cols-12 ${
                step.align === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative aspect-video overflow-hidden rounded-[var(--radius-lg)] lg:col-span-7 ${
                  step.align === "right" ? "lg:col-start-6" : ""
                }`}
              >
                <MediaImage src={step.image} alt={step.title} sizes="(max-width:1024px) 100vw, 60vw" />
              </div>
              <div
                className={`lg:col-span-5 ${step.align === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {content.cta && (
            <Link
              href={content.cta.href}
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              {content.cta.label}
            </Link>
          )}
          <Link
            href="/schools-colleges"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View programs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
