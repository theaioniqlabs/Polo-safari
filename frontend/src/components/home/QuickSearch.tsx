"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import type { getSearchContent } from "@/content/home-content";

type QuickSearchProps = {
  content: ReturnType<typeof getSearchContent>;
};

export function QuickSearch({ content }: QuickSearchProps) {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    params.set("guests", guests);
    router.push(`/theme-tour-packages?${params.toString()}`);
  }

  return (
    <section className="relative z-20 -mt-6 pb-8 md:-mt-6" aria-label={content.heading}>
      <Container>
        <h2 className="sr-only">{content.heading}</h2>
        <p className="sr-only">{content.subheading}</p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-[960px] flex-col gap-3"
          role="search"
        >
          <div
            className="flex flex-col gap-2 rounded-[var(--radius-button)] border border-white/40 bg-white/85 p-2 shadow-[var(--shadow-medium)] backdrop-blur-[16px] md:flex-row md:items-center md:gap-0 md:p-2"
            style={{ backdropFilter: "blur(16px)" }}
          >
            <label className="sr-only" htmlFor="qs-category">
              Experience type
            </label>
            <select
              id="qs-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="min-h-[48px] flex-1 rounded-[var(--radius-button)] border-0 bg-transparent px-4 text-sm text-text md:border-r md:border-border"
            >
              <option value="">All experiences</option>
              <option value="heritage">Heritage</option>
              <option value="education">Educational Tours</option>
              <option value="corporate">Corporate Retreats</option>
              <option value="family">Family</option>
              <option value="adventure">Adventure</option>
            </select>

            <label className="sr-only" htmlFor="qs-date">
              Dates
            </label>
            <input
              id="qs-date"
              type="text"
              readOnly
              placeholder="Add dates"
              className="min-h-[48px] flex-1 rounded-[var(--radius-button)] border-0 bg-transparent px-4 text-sm text-text-muted md:border-r md:border-border"
            />

            <label className="sr-only" htmlFor="qs-guests">
              Guests
            </label>
            <select
              id="qs-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="min-h-[48px] flex-1 rounded-[var(--radius-button)] border-0 bg-transparent px-4 text-sm text-text md:border-r md:border-border"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="4">4 guests</option>
              <option value="6">6+ guests</option>
            </select>

            <button
              type="submit"
              className="min-h-[48px] rounded-[var(--radius-button)] bg-primary px-8 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover md:mx-1"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {content.chips.map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="rounded-[var(--radius-button)] bg-surface/80 px-3 py-1.5 text-xs font-medium text-text-muted shadow-sm backdrop-blur-sm transition-colors hover:text-primary"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </form>
      </Container>
    </section>
  );
}
