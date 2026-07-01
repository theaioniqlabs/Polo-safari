"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import type { getWhyPoloSafariContent } from "@/content/home-content";

type StorySectionProps = {
  content: ReturnType<typeof getWhyPoloSafariContent>;
};

export function StorySection({ content }: StorySectionProps) {
  const [active, setActive] = useState(0);
  const chapter = content.chapters[active];

  return (
    <section className="bg-surface py-[var(--space-15)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 max-w-3xl type-display text-3xl md:text-4xl">
          {content.heading}
        </h2>
        {content.description && (
          <p className="mt-4 max-w-3xl text-text-muted">{content.description}</p>
        )}

        <div className="relative mt-10 min-h-[60vh] overflow-hidden rounded-[var(--radius-lg)]">
          <MediaImage src={chapter.image} alt="" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div
            className="absolute left-4 right-4 top-4 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Why Polo Safari"
          >
            {content.chapters.map((c, i) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-[var(--radius-button)] px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-colors ${
                  i === active
                    ? "bg-white text-text"
                    : "bg-black/40 text-text-inverse hover:bg-black/60"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-on-dark">
            <h3 className="text-2xl font-semibold text-text-inverse md:text-3xl">
              {chapter.title}
            </h3>
            <p className="mt-2 max-w-2xl text-text-on-dark/90">{chapter.body}</p>
            {content.cta && (
              <Link
                href={content.cta.href}
                className="mt-4 inline-block text-sm font-semibold text-text-inverse hover:underline"
              >
                {content.cta.label} →
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
