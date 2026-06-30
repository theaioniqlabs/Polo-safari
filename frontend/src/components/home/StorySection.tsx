"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const chapters = [
  {
    id: "ecology",
    label: "Ecology",
    title: "Monsoon transforms the forest",
    body: "After the first rains, migratory birds return and the canopy erupts in green.",
    image: homeImages.storyEcology,
  },
  {
    id: "heritage",
    label: "Heritage",
    title: "Ancient temples in the Aravalli",
    body: "15th-century shrines hidden among teak and bamboo — living history at every turn.",
    image: homeImages.heritageTemple,
  },
  {
    id: "community",
    label: "Community",
    title: "Villages that steward the forest",
    body: "Local guides and artisans share generations of knowledge with every guest.",
    image: homeImages.poloForestPanorama,
  },
  {
    id: "seasons",
    label: "Seasons",
    title: "Four seasons, four moods",
    body: "From misty monsoon trails to crisp winter star-gazing — Polo Forest never repeats.",
    image: homeImages.heroMonsoon,
  },
];

export function StorySection() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];

  return (
    <section className="bg-surface py-[var(--space-15)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          The Polo Forest Story
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold md:text-4xl">
          Where the Aravalli whispers meet living ecology
        </h2>

        <div className="relative mt-10 min-h-[60vh] overflow-hidden rounded-[var(--radius-lg)]">
          <MediaImage src={chapter.image} alt="" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div
            className="absolute left-4 right-4 top-4 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Story chapters"
          >
            {chapters.map((c, i) => (
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
            <h3 className="font-display text-2xl font-semibold text-text-inverse md:text-3xl">
              {chapter.title}
            </h3>
            <p className="mt-2 max-w-2xl text-text-on-dark/90">{chapter.body}</p>
            <Link
              href="/polo-forest"
              className="mt-4 inline-block text-sm font-semibold text-text-inverse hover:underline"
            >
              Read full Polo Forest story →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
