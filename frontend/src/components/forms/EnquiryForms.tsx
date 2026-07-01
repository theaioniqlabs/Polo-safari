"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";

const inputClass =
  "mt-1 w-full rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-sm";

const TRIP_TYPES = [
  { value: "corporate", label: "Corporate retreat" },
  { value: "education", label: "School / college tour" },
  { value: "family", label: "Family getaway" },
  { value: "heritage", label: "Heritage & culture" },
  { value: "adventure", label: "Adventure & trekking" },
  { value: "international", label: "International" },
] as const;

const STEPS = ["Trip type", "Details", "Contact"] as const;

export function PlanMyJourneyWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    trip_type: "",
    destination: "",
    departure_from: "Ahmedabad",
    group_size: "",
    date_start: "",
    date_end: "",
    name: "",
    email: "",
    phone: "",
    objectives: "",
    consent: false,
  });

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
      return;
    }

    setStatus("submitting");
    setError(null);

    const res = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "plan_journey",
        ...form,
        metadata: { wizard: "plan-my-journey", step_count: STEPS.length },
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    router.push("/enquire/thank-you?source=plan-my-journey");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
      <ol className="mb-8 flex gap-2" aria-label="Progress">
        {STEPS.map((label, i) => (
          <li
            key={label}
            className={`flex-1 rounded-full py-2 text-center text-xs font-semibold ${
              i <= step ? "bg-primary text-text-inverse" : "bg-surface-muted text-text-muted"
            }`}
            aria-current={i === step ? "step" : undefined}
          >
            {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset className="space-y-3">
          <legend className="type-display text-2xl">What kind of journey?</legend>
          <p className="text-sm text-text-muted">Select the trip type closest to your needs.</p>
          {TRIP_TYPES.map((t) => (
            <label
              key={t.value}
              className={`flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border p-4 ${
                form.trip_type === t.value ? "border-primary bg-primary-subtle/40" : "border-border"
              }`}
            >
              <input
                type="radio"
                name="trip_type"
                value={t.value}
                checked={form.trip_type === t.value}
                onChange={() => update("trip_type", t.value)}
                required
                className="h-4 w-4"
              />
              {t.label}
            </label>
          ))}
        </fieldset>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="type-display text-2xl">Trip details</h2>
          <label className="block">
            <span className="text-sm font-medium">Preferred destination</span>
            <input
              type="text"
              value={form.destination}
              onChange={(e) => update("destination", e.target.value)}
              placeholder="e.g. Polo Forest, Manali, Vietnam"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Departure city</span>
            <input
              type="text"
              value={form.departure_from}
              onChange={(e) => update("departure_from", e.target.value)}
              required
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Group size</span>
            <input
              type="text"
              value={form.group_size}
              onChange={(e) => update("group_size", e.target.value)}
              placeholder="e.g. 25 students, 40 corporate"
              required
              className={inputClass}
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Start date (optional)</span>
              <input
                type="date"
                value={form.date_start}
                onChange={(e) => update("date_start", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">End date (optional)</span>
              <input
                type="date"
                value={form.date_end}
                onChange={(e) => update("date_end", e.target.value)}
                className={inputClass}
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium">Anything else we should know?</span>
            <textarea
              value={form.objectives}
              onChange={(e) => update("objectives", e.target.value)}
              rows={4}
              className={inputClass}
              placeholder="Objectives, accessibility needs, budget range…"
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="type-display text-2xl">Your contact details</h2>
          <label className="block">
            <span className="text-sm font-medium">Full name</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
              autoComplete="name"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              autoComplete="email"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Phone / WhatsApp</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              autoComplete="tel"
              className={inputClass}
            />
          </label>
          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              required
              className="mt-1 h-4 w-4"
            />
            <span>
              I agree to be contacted about my enquiry. See{" "}
              <Link href="/legal/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>
      )}

      {error && (
        <p className="mt-4 text-sm text-[var(--color-error,#98211e)]" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex gap-4">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-muted"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover disabled:opacity-60"
        >
          {step < STEPS.length - 1 ? "Continue" : status === "submitting" ? "Sending…" : "Submit enquiry"}
        </button>
      </div>
    </form>
  );
}

export function EnquiryForm({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "general",
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        trip_type: String(data.get("trip_type") ?? "") || undefined,
        objectives: String(data.get("message") ?? ""),
        consent: data.get("consent") === "on",
      }),
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setStatus("error");
      setError(json.error ?? "Something went wrong.");
      return;
    }

    router.push("/enquire/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <label className="block">
        <span className="text-sm font-medium">Name</span>
        <input type="text" name="name" required autoComplete="name" className={inputClass} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Email</span>
        <input type="email" name="email" required autoComplete="email" className={inputClass} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Phone</span>
        <input type="tel" name="phone" required autoComplete="tel" className={inputClass} />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Trip type (optional)</span>
        <select name="trip_type" className={inputClass} defaultValue="">
          <option value="">Select…</option>
          {TRIP_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium">How can we help?</span>
        <textarea name="message" required rows={5} className={inputClass} />
      </label>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4" />
        <span>
          I agree to be contacted.{" "}
          <Link href="/legal/privacy" className="text-primary underline">
            Privacy Policy
          </Link>
        </span>
      </label>
      {error && (
        <p className="text-sm text-[var(--color-error,#98211e)]" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

export function EnquiryFormSection({ title, description }: { title: string; description?: string }) {
  return (
    <section className="py-[var(--space-12)]">
      <Container>
        <div className="mx-auto max-w-xl">
          <h1 className="type-display text-3xl md:text-4xl">{title}</h1>
          {description && <p className="mt-3 text-text-muted">{description}</p>}
          <EnquiryForm className="mt-8" />
        </div>
      </Container>
    </section>
  );
}
