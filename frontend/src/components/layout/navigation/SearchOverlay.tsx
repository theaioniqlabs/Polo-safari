"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  searchPlaceholderExperiences,
  searchSuggestions,
} from "./nav-config";
import { CloseIcon, SearchIcon } from "./icons";
import { useBodyScrollLock, useFocusTrap } from "./useFocusTrap";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  useBodyScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  const filtered = query.trim()
    ? searchPlaceholderExperiences.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : [];

  return (
    <div className="fixed inset-0 z-[120]" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(30,42,36,0.5)]"
        aria-label="Close search"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="absolute left-1/2 top-[calc(var(--header-height)+16px)] w-[min(640px,calc(100vw-32px))] -translate-x-1/2 rounded-[var(--radius-lg)] bg-surface p-6 shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
      >
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <SearchIcon className="shrink-0 text-text-muted" />
          <input
            type="search"
            role="searchbox"
            aria-label="Search experiences"
            placeholder="Search Polo Forest experiences, stories..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full bg-transparent text-base text-text outline-none placeholder:text-text-subtle"
            autoFocus
          />
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
            aria-label="Close search"
          >
            <CloseIcon />
          </button>
        </div>

        {!query.trim() ? (
          <div className="pt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Popular searches
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {searchSuggestions.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="rounded-[var(--radius-button)] bg-surface-muted px-4 py-2 text-sm text-text-muted transition-colors hover:bg-primary-subtle hover:text-primary"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="pt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Experiences
            </p>
            {filtered.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {filtered.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-text transition-colors hover:bg-surface-muted hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 px-3 py-2 text-sm text-text-muted">
                No experiences match &ldquo;{query}&rdquo;
              </p>
            )}
            <Link
              href={`/experiences?q=${encodeURIComponent(query.trim())}`}
              onClick={onClose}
              className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-hover"
            >
              View all results for &ldquo;{query.trim()}&rdquo; →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
