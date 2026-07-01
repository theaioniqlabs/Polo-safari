"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { Section } from "@/content/types";

const EVENT_TYPES = [
  { id: "team_building", label: "Team building" },
  { id: "leadership_lab", label: "Leadership lab" },
  { id: "awards_ceremony", label: "Awards ceremony" },
  { id: "meetup", label: "Meetup" },
  { id: "meeting", label: "Meeting" },
  { id: "hangout", label: "Hangout" },
  { id: "adventure", label: "Adventure" },
  { id: "wellness", label: "Wellness" },
  { id: "mice", label: "MICE" },
  { id: "csr", label: "CSR" },
  { id: "other", label: "Other" },
] as const;

const PACKAGE_TIERS = [
  { value: "", label: "Select tier (optional)" },
  { value: "essential", label: "Essential — Day offsite" },
  { value: "premium", label: "Premium — 2D/1N retreat" },
  { value: "executive", label: "Executive — Leadership program" },
  { value: "custom", label: "Custom mix" },
];

const inputClass =
  "mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm";

type CorporateRfpFormProps = {
  section: Section;
};

type SubmitResult = {
  ok: boolean;
  message?: string;
  whatsappUrl?: string;
};

export function CorporateRfpForm({ section }: CorporateRfpFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const eventTypes = EVENT_TYPES.filter((t) => data.get(`event_${t.id}`) === "on").map(
      (t) => t.id,
    );

    const payload = {
      company: String(data.get("company") ?? ""),
      name: String(data.get("name") ?? ""),
      designation: String(data.get("designation") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      departure_from: String(data.get("departure_from") ?? ""),
      destination: String(data.get("destination") ?? ""),
      date_start: String(data.get("date_start") ?? ""),
      date_end: String(data.get("date_end") ?? ""),
      group_size: String(data.get("group_size") ?? ""),
      duration: String(data.get("duration") ?? ""),
      event_types: eventTypes,
      objectives: String(data.get("objectives") ?? ""),
      package_tier: String(data.get("package_tier") ?? ""),
      budget: String(data.get("budget") ?? ""),
      notes: String(data.get("notes") ?? ""),
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/rfp/corporate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as SubmitResult & { error?: string };
      if (!res.ok) {
        throw new Error(json.error ?? "Submission failed");
      }
      setResult(json);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success" && result?.ok) {
    return (
      <section id="rfp" className="scroll-mt-24 bg-surface-muted py-[var(--space-12)]">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[var(--radius-lg)] border border-border bg-surface p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-primary">Proposal request received</h2>
            <p className="mt-4 text-text-muted">
              {result.message ??
                "Our Ahmedabad corporate team will respond within 48 hours with a tailored proposal."}
            </p>
            {result.whatsappUrl && (
              <a
                href={result.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-[var(--radius-button)] bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Follow up on WhatsApp
              </a>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="rfp" className="scroll-mt-24 bg-surface-muted py-[var(--space-12)]">
      <Container>
        <div className="mx-auto max-w-3xl">
          {section.heading && (
            <h2 className="font-display text-3xl font-semibold">{section.heading}</h2>
          )}
          {section.subheading && (
            <p className="mt-2 text-text-muted">{section.subheading}</p>
          )}
          {section.description && (
            <p className="mt-4 text-text-muted whitespace-pre-line">{section.description.trim()}</p>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Company *</span>
                <input type="text" name="company" required className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Your name *</span>
                <input type="text" name="name" required className={inputClass} />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Designation</span>
                <input type="text" name="designation" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Work email *</span>
                <input type="email" name="email" required className={inputClass} />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium">Phone *</span>
              <input type="tel" name="phone" required className={inputClass} placeholder="+91" />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Departure from *</span>
                <input
                  type="text"
                  name="departure_from"
                  required
                  className={inputClass}
                  placeholder="e.g. Ahmedabad"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Destination *</span>
                <input
                  type="text"
                  name="destination"
                  required
                  className={inputClass}
                  placeholder="e.g. Polo Forest, Udaipur"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block">
                <span className="text-sm font-medium">Start date</span>
                <input type="date" name="date_start" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-medium">End date</span>
                <input type="date" name="date_end" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Duration</span>
                <select name="duration" className={inputClass} defaultValue="">
                  <option value="">Select</option>
                  <option value="day">Day trip</option>
                  <option value="2d1n">2D/1N</option>
                  <option value="3d2n">3D/2N</option>
                  <option value="4d+">4D+</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium">Group size *</span>
              <select name="group_size" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select team size
                </option>
                <option value="20-50">20–50</option>
                <option value="51-100">51–100</option>
                <option value="101-200">101–200</option>
                <option value="200+">200+</option>
              </select>
            </label>

            <fieldset>
              <legend className="text-sm font-medium">Event types</legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {EVENT_TYPES.map((type) => (
                  <label key={type.id} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" name={`event_${type.id}`} className="rounded border-border" />
                    {type.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="text-sm font-medium">Objectives *</span>
              <textarea
                name="objectives"
                rows={4}
                required
                className={inputClass}
                placeholder="Team building, annual offsite, leadership lab, celebration..."
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Package interest</span>
                <select name="package_tier" className={inputClass} defaultValue="">
                  {PACKAGE_TIERS.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium">Budget range</span>
                <input
                  type="text"
                  name="budget"
                  className={inputClass}
                  placeholder="e.g. ₹5–8 lakh all-inclusive"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium">Additional notes</span>
              <textarea name="notes" rows={3} className={inputClass} />
            </label>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" name="consent" required className="mt-1 rounded border-border" />
              <span>
                I agree to the{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  privacy policy
                </Link>{" "}
                and consent to Polo Safari contacting me about this enquiry. *
              </span>
            </label>

            {status === "error" && errorMessage && (
              <p className="text-sm text-red-600" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-[var(--radius-button)] bg-primary px-8 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover disabled:opacity-60"
            >
              {status === "submitting"
                ? "Submitting…"
                : (section.cta?.label ?? "Submit proposal request")}
            </button>
          </form>

          <p className="mt-4 text-sm text-text-subtle">
            Or call{" "}
            <a href="tel:+919408510911" className="text-primary hover:underline">
              +91 94085 10911
            </a>{" "}
            · Mon–Sat 9–7
          </p>
        </div>
      </Container>
    </section>
  );
}
