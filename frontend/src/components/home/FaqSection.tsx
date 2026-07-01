"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { FaqPreviewItem } from "@/content/home-content";

type FaqSectionProps = {
  heading: string;
  subheading?: string;
  faqs: FaqPreviewItem[];
  viewAllHref: string;
};

export function FaqSection({ heading, subheading, faqs, viewAllHref }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-[var(--space-8)]">
      <Container className="max-w-3xl">
        {subheading && (
          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
            {subheading}
          </p>
        )}
        <h2 className="mt-2 text-center type-display text-3xl">{heading}</h2>

        <div className="mt-8 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium leading-snug text-text-heading transition-colors hover:text-primary"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.question}
                <span className="shrink-0 text-lg text-text-subtle" aria-hidden>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="pb-5 text-[0.9375rem] leading-relaxed text-text-muted">
                  {faq.answer}
                  {faq.href && (
                    <>
                      {" "}
                      <Link href={faq.href} className="font-semibold text-primary hover:underline">
                        Read more →
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center">
          <Link href={viewAllHref} className="text-sm font-semibold text-primary hover:underline">
            View all FAQs →
          </Link>
        </p>
      </Container>
    </section>
  );
}
