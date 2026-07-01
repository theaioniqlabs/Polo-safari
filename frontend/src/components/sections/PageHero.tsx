import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import type { Cta, Section } from "@/content/types";
import { aspectRatioClass, stockImageUrl } from "@/content/stock-images";
import { StatStrip, type StatItem } from "./StatStrip";

type PageHeroProps = {
  section: Section;
  dark?: boolean;
  trustStats?: StatItem[];
  secondaryCta?: Cta;
};

export function PageHero({ section, dark = true, trustStats, secondaryCta }: PageHeroProps) {
  const imageSrc = section.stockImage ? stockImageUrl(section.stockImage) : null;

  return (
    <section
      className={`relative overflow-hidden ${dark ? "text-text-inverse" : "bg-surface-muted text-text-heading"}`}
      aria-labelledby={`hero-${section.id}`}
    >
      {imageSrc && (
        <div className="absolute inset-0">
          <MediaImage src={imageSrc} alt="" priority sizes="100vw" />
          {dark && (
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#1e2a24]/95 via-[#1e2a24]/50 to-[#1e2a24]/30"
              aria-hidden
            />
          )}
        </div>
      )}
      <Container
        className={`relative z-10 py-[var(--space-15)] md:py-24 ${dark ? "pt-32" : ""}`}
      >
        {section.subheading && (
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-light">
            {section.subheading}
          </p>
        )}
        {section.heading && (
          <h1
            id={`hero-${section.id}`}
            className="mt-3 max-w-4xl type-display text-4xl leading-tight md:text-5xl lg:text-6xl"
          >
            {section.heading}
          </h1>
        )}
        {section.description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-90 whitespace-pre-line">
            {section.description.trim()}
          </p>
        )}
        {(section.cta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {section.cta && <CtaButton cta={section.cta} primary />}
            {secondaryCta && <CtaButton cta={secondaryCta} />}
          </div>
        )}
        {trustStats && trustStats.length > 0 && (
          <div className="mt-10 rounded-[var(--radius-lg)] border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
            <StatStrip stats={trustStats} variant="default" />
          </div>
        )}
      </Container>
    </section>
  );
}

type CtaButtonProps = {
  cta: Cta;
  className?: string;
  primary?: boolean;
};

export function CtaButton({ cta, className = "", primary = false }: CtaButtonProps) {
  return (
    <Link
      href={cta.href}
      className={`inline-flex rounded-[var(--radius-button)] px-6 py-3 text-sm font-semibold transition-colors ${
        primary
          ? "bg-primary text-text-inverse hover:bg-primary-hover"
          : "border border-border bg-surface text-text-heading hover:bg-surface-muted"
      } ${className}`}
    >
      {cta.label}
    </Link>
  );
}

type SectionBlockProps = {
  section: Section;
  variant?: "default" | "muted" | "dark";
  imagePosition?: "left" | "right" | "none" | "top";
  children?: ReactNode;
};

export function SectionBlock({
  section,
  variant = "default",
  imagePosition = "right",
  children,
}: SectionBlockProps) {
  const bg =
    variant === "muted"
      ? "bg-surface-muted"
      : variant === "dark"
        ? "bg-surface-dark-elevated text-text-on-dark"
        : "bg-surface";

  const imageSrc = section.stockImage ? stockImageUrl(section.stockImage) : null;
  const hasImage = imagePosition !== "none" && imageSrc;

  return (
    <section
      id={section.id}
      className={`py-[var(--space-12)] md:py-[var(--space-15)] ${bg}`}
      aria-labelledby={section.heading ? `section-${section.id}` : undefined}
    >
      <Container>
        {imagePosition === "top" && hasImage && (
          <div
            className={`relative mb-10 overflow-hidden rounded-[var(--radius-lg)] ${aspectRatioClass(section.stockImage!.aspectRatio)}`}
          >
            <MediaImage src={imageSrc!} alt={section.heading ?? ""} sizes="(max-width: 768px) 100vw, 1200px" />
          </div>
        )}

        <div
          className={
            hasImage && imagePosition !== "top"
              ? `grid items-center gap-10 lg:grid-cols-2 ${imagePosition === "left" ? "" : ""}`
              : ""
          }
        >
          {hasImage && imagePosition === "left" && (
            <div
              className={`relative overflow-hidden rounded-[var(--radius-lg)] ${aspectRatioClass(section.stockImage!.aspectRatio)}`}
            >
              <MediaImage src={imageSrc!} alt={section.heading ?? ""} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          )}

          <div>
            {section.subheading && (
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                {section.subheading}
              </p>
            )}
            {section.heading && (
              <h2
                id={`section-${section.id}`}
                className="mt-2 type-display text-3xl md:text-4xl"
              >
                {section.heading}
              </h2>
            )}
            {section.description && (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted whitespace-pre-line">
                {section.description.trim()}
              </p>
            )}
            {section.cta && (
              <div className="mt-6">
                <CtaButton cta={section.cta} primary />
              </div>
            )}
            {children}
          </div>

          {hasImage && imagePosition === "right" && (
            <div
              className={`relative overflow-hidden rounded-[var(--radius-lg)] ${aspectRatioClass(section.stockImage!.aspectRatio)}`}
            >
              <MediaImage src={imageSrc!} alt={section.heading ?? ""} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          )}
        </div>

        {children && imagePosition === "none" && <div className="mt-8">{children}</div>}
        {children && imagePosition === "top" && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
