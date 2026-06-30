import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const steps = [
  {
    title: "Curriculum-aligned programs",
    body: "Std 5–12 · Gujarat board compatible",
    image: homeImages.educationStep1,
    align: "left" as const,
  },
  {
    title: "Hands-on field studies",
    body: "Biodiversity · Heritage · Archaeology",
    image: homeImages.educationStep2,
    align: "right" as const,
  },
  {
    title: "Expert naturalists",
    body: "30–500 students per program",
    image: homeImages.educationStep3,
    align: "left" as const,
  },
  {
    title: "Outcomes that last",
    body: "Field journals · Certificates",
    image: homeImages.educationStep4,
    align: "right" as const,
  },
];

export function EducationJourney() {
  return (
    <section className="bg-surface-nature py-[var(--space-15)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          Educational Tours
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
          Ecology beyond the classroom
        </h2>

        <ol className="mt-12 space-y-16">
          {steps.map((step, i) => (
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
                <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/education#rfp"
            className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
          >
            Request School Program
          </Link>
          <Link
            href="/experiences/category/education"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View programs →
          </Link>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          Custom proposal — not instant online booking
        </p>
      </Container>
    </section>
  );
}
