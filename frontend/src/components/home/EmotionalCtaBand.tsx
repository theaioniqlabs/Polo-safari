"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import type { getNewsletterCtaContent } from "@/content/home-content";

type EmotionalCtaBandProps = {
  content: ReturnType<typeof getNewsletterCtaContent>;
};

export function EmotionalCtaBand({ content }: EmotionalCtaBandProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden py-[var(--space-15)]">
      <div className="absolute inset-0">
        <MediaImage src={content.backgroundImage} alt="" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1e2a24]/75" aria-hidden />
      </div>

      <Container className="relative z-10 text-on-dark">
        <h2 className="max-w-xl type-display text-3xl text-text-inverse md:text-5xl">
          {content.heading}
        </h2>
        <p className="mt-2 text-sm text-text-on-dark/80">{content.subheading}</p>
        <p className="mt-4 max-w-lg text-text-on-dark/90">{content.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {content.cta && (
            <Link
              href={content.cta.href}
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              {content.cta.label}
            </Link>
          )}
          {content.secondaryCtas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="rounded-[var(--radius-button)] border border-white/40 px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-white/10"
            >
              {cta.label}
            </Link>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="cta-email" className="sr-only">
            Email for updates
          </label>
          <input
            id="cta-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email for seasonal updates"
            className="min-h-[48px] flex-1 rounded-[var(--radius-button)] border border-white/30 bg-white/10 px-4 text-sm text-text-inverse placeholder:text-white/60 backdrop-blur-sm"
          />
          <button
            type="submit"
            className="min-h-[48px] rounded-[var(--radius-button)] bg-white px-6 text-sm font-semibold text-text hover:bg-white/90"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-2 text-sm text-text-on-dark/80" role="status">
            Thank you — we&apos;ll be in touch.
          </p>
        )}
      </Container>
    </section>
  );
}
