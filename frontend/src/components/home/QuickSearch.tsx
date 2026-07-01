"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SearchIcon } from "@/components/layout/navigation/icons";
import type { getSearchContent } from "@/content/home-content";

type QuickSearchProps = {
  content: ReturnType<typeof getSearchContent>;
  variant?: "standalone" | "floating";
};

function SearchFields({
  category,
  guests,
  onCategoryChange,
  onGuestsChange,
  floating,
}: {
  category: string;
  guests: string;
  onCategoryChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  floating: boolean;
}) {
  const fieldShell = floating
    ? "flex min-h-[48px] flex-1 flex-col justify-center px-4 py-2 md:border-r md:border-border md:py-3"
    : "min-h-[48px] flex-1 rounded-[var(--radius-button)] border-0 bg-transparent px-4 text-sm text-text md:border-r md:border-border";

  const labelClass = floating
    ? "text-xs font-semibold text-text-heading"
    : "sr-only";

  const controlClass = floating
    ? "mt-0.5 w-full border-0 bg-transparent p-0 text-sm text-text outline-none"
    : "min-h-[48px] flex-1 rounded-[var(--radius-button)] border-0 bg-transparent px-4 text-sm text-text md:border-r md:border-border";

  const dateControlClass = floating
    ? "mt-0.5 w-full border-0 bg-transparent p-0 text-sm text-text-muted outline-none"
    : "min-h-[48px] flex-1 rounded-[var(--radius-button)] border-0 bg-transparent px-4 text-sm text-text-muted md:border-r md:border-border";

  if (floating) {
    return (
      <>
        <div className={fieldShell}>
          <label className={labelClass} htmlFor="qs-category">
            Experience
          </label>
          <select
            id="qs-category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={controlClass}
          >
            <option value="">All experiences</option>
            <option value="heritage">Heritage</option>
            <option value="education">Educational Tours</option>
            <option value="corporate">Corporate Retreats</option>
            <option value="family">Family</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>

        <div className={fieldShell}>
          <label className={labelClass} htmlFor="qs-date">
            Dates
          </label>
          <input
            id="qs-date"
            type="text"
            readOnly
            placeholder="Add dates"
            className={dateControlClass}
          />
        </div>

        <div className={`${fieldShell} md:border-r-0`}>
          <label className={labelClass} htmlFor="qs-guests">
            Guests
          </label>
          <select
            id="qs-guests"
            value={guests}
            onChange={(e) => onGuestsChange(e.target.value)}
            className={controlClass}
          >
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="4">4 guests</option>
            <option value="6">6+ guests</option>
          </select>
        </div>
      </>
    );
  }

  return (
    <>
      <label className={labelClass} htmlFor="qs-category">
        Experience type
      </label>
      <select
        id="qs-category"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={controlClass}
      >
        <option value="">All experiences</option>
        <option value="heritage">Heritage</option>
        <option value="education">Educational Tours</option>
        <option value="corporate">Corporate Retreats</option>
        <option value="family">Family</option>
        <option value="adventure">Adventure</option>
      </select>

      <label className={labelClass} htmlFor="qs-date">
        Dates
      </label>
      <input
        id="qs-date"
        type="text"
        readOnly
        placeholder="Add dates"
        className={dateControlClass}
      />

      <label className={labelClass} htmlFor="qs-guests">
        Guests
      </label>
      <select
        id="qs-guests"
        value={guests}
        onChange={(e) => onGuestsChange(e.target.value)}
        className={controlClass}
      >
        <option value="1">1 guest</option>
        <option value="2">2 guests</option>
        <option value="4">4 guests</option>
        <option value="6">6+ guests</option>
      </select>
    </>
  );
}

export function QuickSearch({ content, variant = "standalone" }: QuickSearchProps) {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [guests, setGuests] = useState("2");
  const floating = variant === "floating";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    params.set("guests", guests);
    router.push(`/tour-packages?${params.toString()}`);
  }

  const barClass = floating
    ? "shadow-hero-search flex flex-col gap-2 rounded-[var(--radius-lg)] border border-white/70 bg-white/95 p-3 backdrop-blur-xl md:flex-row md:items-stretch md:gap-0 md:p-2"
    : "flex flex-col gap-2 rounded-[var(--radius-button)] border border-white/40 bg-white/85 p-2 shadow-[var(--shadow-medium)] backdrop-blur-[16px] md:flex-row md:items-center md:gap-0 md:p-2";

  const form = (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-2 ${floating ? "w-full" : "mx-auto max-w-[960px]"}`}
      role="search"
    >
      <h2 className="sr-only">{content.heading}</h2>
      <p className="sr-only">{content.subheading}</p>

      <div className={barClass} style={{ backdropFilter: floating ? "blur(24px)" : "blur(16px)" }}>
        <SearchFields
          category={category}
          guests={guests}
          onCategoryChange={setCategory}
          onGuestsChange={setGuests}
          floating={floating}
        />

        {floating ? (
          <>
            <button
              type="submit"
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[var(--radius-button)] bg-primary text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover md:hidden"
            >
              <SearchIcon className="h-5 w-5" />
              Search
            </button>
            <div className="hidden items-center px-2 md:flex">
              <button
                type="submit"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-text-inverse transition-colors hover:bg-primary-hover"
                aria-label="Search experiences"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </>
        ) : (
          <button
            type="submit"
            className="min-h-[48px] rounded-[var(--radius-button)] bg-primary px-8 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover md:mx-1"
          >
            Search
          </button>
        )}
      </div>

      {!floating ? (
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
      ) : null}
    </form>
  );

  if (floating) {
    return form;
  }

  return (
    <section className="relative z-20 -mt-6 pb-8 md:-mt-6" aria-label={content.heading}>
      <Container>{form}</Container>
    </section>
  );
}
