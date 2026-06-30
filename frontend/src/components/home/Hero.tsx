"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const slides = [
  {
    id: "monsoon",
    overline: "MONSOON 2026",
    title: "Discover Polo Forest",
    titleItalic: "After the Rains",
    body: "Guided ecology walks in Gujarat's hidden forest.",
    primary: { label: "Book Monsoon Safari", href: "/plan/book/monsoon-safari/dates" },
    secondary: { label: "Explore experiences →", href: "/experiences" },
    caption: "From ₹2,499 · 1 day",
    image: homeImages.heroMonsoon,
  },
  {
    id: "corporate",
    overline: "CORPORATE RETREATS",
    title: "Build Teams Where",
    titleItalic: "Nature Inspires",
    body: "Custom offsite programs at Polo Forest for 20–200 guests.",
    primary: { label: "Request Proposal", href: "/corporate#rfp" },
    secondary: { label: "View Corporate Programs →", href: "/experiences/category/corporate" },
    caption: "Custom pricing · 48-hour proposal turnaround",
    image: homeImages.heroCorporate,
  },
  {
    id: "education",
    overline: "EDUCATIONAL TOURS",
    title: "Ecology Lessons That",
    titleItalic: "Leave the Classroom",
    body: "Curriculum-aligned field studies for Std 5–12 at Polo Forest.",
    primary: { label: "Request School Program", href: "/education#rfp" },
    secondary: { label: "Learn More →", href: "/education" },
    caption: "Custom proposal — not instant online booking",
    image: homeImages.heroEducation,
  },
] as const;

const INTERVAL_MS = 8000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <section
      className="relative -mt-[calc(var(--header-height)+var(--announcement-height,0px))] flex min-h-[85vh] items-end overflow-hidden text-text-inverse"
      aria-label="Seasonal campaigns"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <MediaImage src={s.image} alt="" priority={i === 0} sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1e2a24]/90 via-[#1e2a24]/40 to-transparent"
            aria-hidden
          />
        </div>
      ))}

      <Container className="relative z-10 pb-24 pt-32 text-on-dark">
        <div aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fd0e1]">
            {slide.overline}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-text-inverse md:text-6xl">
            {slide.title}
            <br />
            <span className="italic">{slide.titleItalic}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-on-dark/90">{slide.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={slide.primary.href}
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
            >
              {slide.primary.label}
            </Link>
            <Link
              href={slide.secondary.href}
              className="text-sm font-medium text-text-inverse/90 underline-offset-4 hover:text-text-inverse hover:underline"
            >
              {slide.secondary.label}
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-on-dark/75">{slide.caption}</p>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-4">
        <div className="mx-auto max-w-[var(--layout-content)]">
          <div
            className="h-0.5 w-full overflow-hidden rounded-full bg-white/20"
            role="progressbar"
            aria-valuenow={active + 1}
            aria-valuemin={1}
            aria-valuemax={slides.length}
            aria-label={`Slide ${active + 1} of ${slides.length}`}
          >
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((active + 1) / slides.length) * 100}%` }}
            />
          </div>
          <div className="sr-only">
            {slides.map((s, i) => (
              <button key={s.id} type="button" onClick={() => goTo(i)}>
                Go to slide {i + 1}: {s.overline}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
