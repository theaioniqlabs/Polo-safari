"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const faqs = [
  {
    q: "Do I need to log in to book?",
    a: "Yes — creating an account is required to complete online bookings for standard experiences.",
  },
  {
    q: "How do school and corporate groups book?",
    a: "Use Request Proposal on Education or Corporate pages. Our team sends a custom quote within 48 hours.",
  },
  {
    q: "What payment methods are accepted?",
    a: "UPI and card payments are accepted at checkout for eligible experiences.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Policies vary by experience. See our cancellation policy for full details.",
    href: "/legal/cancellation",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-[var(--space-8)]">
      <Container className="max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          FAQ
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold">
          Questions before you go
        </h2>

        <div className="mt-8 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left font-semibold"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className="text-text-muted">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="pb-4 text-sm text-text-muted">
                  {faq.a}
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
          <Link href="/faq" className="text-sm font-semibold text-primary hover:underline">
            View all FAQs →
          </Link>
        </p>
      </Container>
    </section>
  );
}
