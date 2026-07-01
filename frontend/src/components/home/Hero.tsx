"use client";

import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { QuickSearch } from "@/components/home/QuickSearch";
import type { HeroSlideContent, getSearchContent } from "@/content/home-content";

const INTERVAL_MS = 8000;

const CARD_MIN_H =
  "min-h-[clamp(280px,48vh,520px)] sm:min-h-[clamp(360px,54vh,600px)] lg:min-h-[clamp(416px,62vh,702px)]";

type HeroProps = {
  slides: HeroSlideContent[];
  searchContent: ReturnType<typeof getSearchContent>;
};

export function Hero({ slides, searchContent }: HeroProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const slide = slides[active];

  return (
    <section
      className="bg-surface-muted pt-3 pb-10 sm:pt-4 sm:pb-[calc(var(--hero-search-overlap)+1.5rem)] md:pb-[calc(var(--hero-search-overlap)+2rem)]"
      aria-label="Seasonal campaigns"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Container className="!px-2.5 sm:!px-4 md:!px-6">
        <div
          className={`relative w-full ${CARD_MIN_H} rounded-[var(--hero-radius,var(--radius-lg))] text-text-inverse`}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== active}
              >
                <MediaImage
                  src={s.image}
                  alt=""
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1280px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#1e2a24]/90 via-[#1e2a24]/45 to-transparent"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#1e2a24]/30 to-transparent"
                  aria-hidden
                />
              </div>
            ))}
          </div>

          <h1 className="sr-only">
            {slide.title}
            {slide.titleItalic ? ` ${slide.titleItalic}` : ""}
          </h1>

          <div className="absolute bottom-10 left-2.5 z-10 w-24 sm:bottom-12 sm:left-4 sm:w-28 md:bottom-14 md:left-6 md:w-32 lg:bottom-16 lg:w-40">
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

          <div className="absolute bottom-0 left-1/2 z-20 w-[calc(100%-1.25rem)] max-w-[min(960px,calc(100%-1.25rem))] -translate-x-1/2 translate-y-1/2 sm:w-[calc(100%-2rem)] sm:max-w-[min(960px,calc(100%-2rem))]">
            <QuickSearch content={searchContent} variant="floating" />
          </div>
        </div>
      </Container>
    </section>
  );
}
