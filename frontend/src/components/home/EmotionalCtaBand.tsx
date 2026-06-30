"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

export function EmotionalCtaBand() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden py-[var(--space-15)]">
      <div className="absolute inset-0">
        <MediaImage src={homeImages.emotionalCta} alt="" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1e2a24]/75" aria-hidden />
      </div>

      <Container className="relative z-10 text-on-dark">
        <h2 className="max-w-xl font-display text-3xl font-semibold text-text-inverse md:text-5xl">
          Ready for your next journey?
        </h2>
        <p className="mt-4 max-w-lg text-text-on-dark/90">
          Plan your Polo Forest escape — book online, request a proposal, or talk to our team.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/polo-forest"
            className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
          >
            Explore Polo Forest
          </Link>
          <Link
            href="/plan/enquire"
            className="rounded-[var(--radius-button)] border border-white/40 px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-white/10"
          >
            Talk to an expert
          </Link>
          <Link
            href="https://wa.me/919876543210"
            className="rounded-[var(--radius-button)] border border-white/40 px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-white/10"
          >
            WhatsApp
          </Link>
          <Link
            href="tel:+919876543210"
            className="text-sm font-medium text-text-inverse/90 underline-offset-4 hover:underline"
          >
            Call us
          </Link>
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
