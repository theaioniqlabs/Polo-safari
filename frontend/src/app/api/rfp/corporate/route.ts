import { NextResponse } from "next/server";

export const runtime = "nodejs";

type CorporateRfpPayload = {
  company: string;
  name: string;
  designation?: string;
  email: string;
  phone: string;
  departure_from: string;
  destination: string;
  date_start?: string;
  date_end?: string;
  group_size: string;
  duration?: string;
  event_types?: string[];
  objectives: string;
  package_tier?: string;
  budget?: string;
  notes?: string;
  consent: boolean;
};

function validatePayload(body: unknown): { ok: true; data: CorporateRfpPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }
  const p = body as Record<string, unknown>;

  const required = ["company", "name", "email", "phone", "departure_from", "destination", "group_size", "objectives"] as const;
  for (const key of required) {
    if (!p[key] || typeof p[key] !== "string" || !String(p[key]).trim()) {
      return { ok: false, error: `Missing required field: ${key}` };
    }
  }

  if (p.consent !== true) {
    return { ok: false, error: "Consent is required" };
  }

  const email = String(p.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Invalid email address" };
  }

  return {
    ok: true,
    data: {
      company: String(p.company).trim(),
      name: String(p.name).trim(),
      designation: p.designation ? String(p.designation).trim() : undefined,
      email: email.trim(),
      phone: String(p.phone).trim(),
      departure_from: String(p.departure_from).trim(),
      destination: String(p.destination).trim(),
      date_start: p.date_start ? String(p.date_start) : undefined,
      date_end: p.date_end ? String(p.date_end) : undefined,
      group_size: String(p.group_size).trim(),
      duration: p.duration ? String(p.duration) : undefined,
      event_types: Array.isArray(p.event_types) ? p.event_types.map(String) : [],
      objectives: String(p.objectives).trim(),
      package_tier: p.package_tier ? String(p.package_tier) : undefined,
      budget: p.budget ? String(p.budget) : undefined,
      notes: p.notes ? String(p.notes) : undefined,
      consent: true,
    },
  };
}

function formatEmailBody(data: CorporateRfpPayload): string {
  const lines = [
    "New Corporate RFP — Polo Safari",
    "",
    `Company: ${data.company}`,
    `Contact: ${data.name}${data.designation ? ` (${data.designation})` : ""}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    `Departure from: ${data.departure_from}`,
    `Destination: ${data.destination}`,
    `Dates: ${data.date_start ?? "TBC"} → ${data.date_end ?? "TBC"}`,
    `Group size: ${data.group_size}`,
    `Duration: ${data.duration ?? "Not specified"}`,
    `Package tier: ${data.package_tier || "Not specified"}`,
    `Budget: ${data.budget || "Not specified"}`,
    "",
    `Event types: ${data.event_types?.length ? data.event_types.join(", ") : "None selected"}`,
    "",
    "Objectives:",
    data.objectives,
  ];
  if (data.notes) {
    lines.push("", "Notes:", data.notes);
  }
  return lines.join("\n");
}

function buildWhatsAppMessage(data: CorporateRfpPayload): string {
  return [
    "Corporate RFP — Polo Safari",
    `${data.company} · ${data.name}`,
    `${data.group_size} guests · ${data.destination}`,
    `From: ${data.departure_from}`,
    `Contact: ${data.phone}`,
  ].join("\n");
}

async function sendEmail(data: CorporateRfpPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RFP_NOTIFY_EMAIL ?? "Chirag@polo-safari.in";
  const from = process.env.RFP_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn("[rfp/corporate] RESEND_API_KEY not set — email skipped");
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Corporate RFP: ${data.company} — ${data.group_size} guests`,
      text: formatEmailBody(data),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[rfp/corporate] Resend error:", err);
    return false;
  }
  return true;
}

async function notifyWhatsAppWebhook(data: CorporateRfpPayload): Promise<void> {
  const webhook = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhook) return;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "corporate_rfp",
        message: buildWhatsAppMessage(data),
        payload: data,
      }),
    });
  } catch (err) {
    console.error("[rfp/corporate] WhatsApp webhook error:", err);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validated = validatePayload(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const data = validated.data;
  const emailSent = await sendEmail(data);
  await notifyWhatsAppWebhook(data);

  const notifyPhone = process.env.WHATSAPP_NOTIFY_PHONE ?? "919408510911";
  const whatsappUrl = `https://wa.me/${notifyPhone.replace(/\D/g, "")}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;

  return NextResponse.json({
    ok: true,
    message: emailSent
      ? "Thank you — our corporate team will respond within 48 hours. A confirmation has been sent to our team."
      : "Thank you — our corporate team will respond within 48 hours.",
    emailSent,
    whatsappUrl,
  });
}
