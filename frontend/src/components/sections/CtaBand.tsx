import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import type { Cta, Section } from "@/content/types";
import { stockImageUrl } from "@/content/stock-images";

type CtaBandProps = {
  section: Section;
  variant?: "primary" | "dark" | "image";
  extraCtas?: Cta[];
};

export function CtaBand({ section, variant = "primary", extraCtas = [] }: CtaBandProps) {
  const imageSrc =
    variant === "image" && section.stockImage
      ? stockImageUrl(section.stockImage)
      : null;

  const bg =
    variant === "dark"
      ? "bg-surface-dark-elevated text-text-on-dark"
      : variant === "image"
        ? "relative text-text-inverse"
        : "bg-primary text-text-inverse";

  return (
    <section className={`relative overflow-hidden py-[var(--space-12)] md:py-[var(--space-15)] ${bg}`}>
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <MediaImage src={imageSrc} alt="" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[#1e2a24]/80" aria-hidden />
        </>
      )}
      <Container className={variant === "image" ? "relative z-10" : ""}>
        {section.heading && (
          <h2 className="type-display text-3xl md:text-4xl">{section.heading}</h2>
        )}
        {section.subheading && (
          <p className="mt-2 text-lg opacity-90">{section.subheading}</p>
        )}
        {section.description && (
          <p className="mt-4 max-w-2xl opacity-90 whitespace-pre-line">
            {section.description.trim()}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          {section.cta && (
            <Link
              href={section.cta.href}
              className="rounded-[var(--radius-button)] bg-surface px-6 py-3 text-sm font-semibold text-text-heading transition-colors hover:bg-surface-muted"
            >
              {section.cta.label}
            </Link>
          )}
          {extraCtas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="rounded-[var(--radius-button)] border border-white/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

type RfpFormProps = {
  section: Section;
  type: "corporate" | "education" | "general";
};

export function RfpForm({ section, type }: RfpFormProps) {
  const formId = type === "corporate" ? "rfp" : type === "education" ? "rfp" : "enquiry";

  return (
    <section id={formId} className="scroll-mt-24 bg-surface-muted py-[var(--space-12)]">
      <Container>
        <div className="mx-auto max-w-2xl">
          {section.heading && (
            <h2 className="type-display text-3xl">{section.heading}</h2>
          )}
          {section.subheading && (
            <p className="mt-2 text-text-muted">{section.subheading}</p>
          )}
          {section.description && (
            <p className="mt-4 text-text-muted whitespace-pre-line">
              {section.description.trim()}
            </p>
          )}
          <form className="mt-8 space-y-4" action="/contact" method="get">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium">Phone</span>
              <input
                type="tel"
                name="phone"
                className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
              />
            </label>
            {type === "corporate" && (
              <>
                <label className="block">
                  <span className="text-sm font-medium">Company</span>
                  <input
                    type="text"
                    name="company"
                    className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Team size</span>
                  <select
                    name="team_size"
                    className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
                  >
                    <option value="20-50">20–50</option>
                    <option value="51-100">51–100</option>
                    <option value="101-200">101–200</option>
                    <option value="200+">200+</option>
                  </select>
                </label>
              </>
            )}
            {type === "education" && (
              <label className="block">
                <span className="text-sm font-medium">Institution</span>
                <input
                  type="text"
                  name="institution"
                  className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
                />
              </label>
            )}
            <label className="block">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm"
                placeholder={
                  type === "corporate"
                    ? "Preferred dates, destinations, activities, budget range..."
                    : "Grade levels, group size, learning objectives..."
                }
              />
            </label>
            <input type="hidden" name="type" value={type} />
            <button
              type="submit"
              className="rounded-[var(--radius-button)] bg-primary px-8 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              {section.cta?.label ?? "Submit enquiry"}
            </button>
          </form>
          <p className="mt-4 text-sm text-text-subtle">
            Or call{" "}
            <a href="tel:+919408510911" className="text-primary hover:underline">
              +91 94085 10911
            </a>{" "}
            ·{" "}
            <a
              href="https://wa.me/919408510911"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
