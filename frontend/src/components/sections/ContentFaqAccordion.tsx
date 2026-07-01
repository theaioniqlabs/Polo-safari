"use client";

import { useState } from "react";
import type { ParsedFaqItem } from "@/content/parse-faq";

type ContentFaqAccordionProps = {
  items: ParsedFaqItem[];
};

export function ContentFaqAccordion({ items }: ContentFaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  if (items.length === 0) return null;

  return (
    <div className="mt-8 divide-y divide-border rounded-[var(--radius-lg)] border border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-muted"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium leading-snug text-text-heading">{item.question}</span>
              <span className="shrink-0 text-2xl text-text-subtle" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-text-muted leading-relaxed">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
