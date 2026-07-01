export type EnquiryType =
  | "general"
  | "corporate_rfp"
  | "education_rfp"
  | "plan_journey";

export type EnquiryPayload = {
  type: EnquiryType;
  name: string;
  email: string;
  phone: string;
  company?: string;
  destination?: string;
  departure_from?: string;
  group_size?: string;
  date_start?: string;
  date_end?: string;
  trip_type?: string;
  objectives?: string;
  metadata?: Record<string, unknown>;
  consent: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(
  body: unknown,
): { ok: true; data: EnquiryPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const p = body as Record<string, unknown>;
  const type = p.type as EnquiryType;
  const validTypes: EnquiryType[] = [
    "general",
    "corporate_rfp",
    "education_rfp",
    "plan_journey",
  ];

  if (!validTypes.includes(type)) {
    return { ok: false, error: "Invalid enquiry type" };
  }

  for (const key of ["name", "email", "phone"] as const) {
    if (!p[key] || typeof p[key] !== "string" || !String(p[key]).trim()) {
      return { ok: false, error: `Missing required field: ${key}` };
    }
  }

  if (p.consent !== true) {
    return { ok: false, error: "Consent is required" };
  }

  const email = String(p.email).trim();
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Invalid email address" };
  }

  return {
    ok: true,
    data: {
      type,
      name: String(p.name).trim(),
      email,
      phone: String(p.phone).trim(),
      company: p.company ? String(p.company).trim() : undefined,
      destination: p.destination ? String(p.destination).trim() : undefined,
      departure_from: p.departure_from ? String(p.departure_from).trim() : undefined,
      group_size: p.group_size ? String(p.group_size).trim() : undefined,
      date_start: p.date_start ? String(p.date_start) : undefined,
      date_end: p.date_end ? String(p.date_end) : undefined,
      trip_type: p.trip_type ? String(p.trip_type).trim() : undefined,
      objectives: p.objectives ? String(p.objectives).trim() : undefined,
      metadata:
        p.metadata && typeof p.metadata === "object"
          ? (p.metadata as Record<string, unknown>)
          : undefined,
      consent: true,
    },
  };
}

export function formatEnquiryEmail(data: EnquiryPayload): string {
  const lines = [
    `New ${data.type.replace("_", " ")} enquiry — Polo Safari`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
  ];

  if (data.company) lines.push(`Company: ${data.company}`);
  if (data.trip_type) lines.push(`Trip type: ${data.trip_type}`);
  if (data.destination) lines.push(`Destination: ${data.destination}`);
  if (data.departure_from) lines.push(`Departure from: ${data.departure_from}`);
  if (data.group_size) lines.push(`Group size: ${data.group_size}`);
  if (data.date_start || data.date_end) {
    lines.push(`Dates: ${data.date_start ?? "TBC"} → ${data.date_end ?? "TBC"}`);
  }
  if (data.objectives) {
    lines.push("", "Details:", data.objectives);
  }
  if (data.metadata && Object.keys(data.metadata).length > 0) {
    lines.push("", "Metadata:", JSON.stringify(data.metadata, null, 2));
  }

  return lines.join("\n");
}

export async function sendEnquiryEmail(data: EnquiryPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RFP_NOTIFY_EMAIL ?? "Chirag@polo-safari.in";
  const from = process.env.RFP_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn("[enquiries] RESEND_API_KEY not set — email skipped");
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
      subject: `Enquiry (${data.type}): ${data.name}`,
      text: formatEnquiryEmail(data),
    }),
  });

  if (!res.ok) {
    console.error("[enquiries] Resend error:", await res.text());
    return false;
  }
  return true;
}

export async function notifyEnquiryWebhook(data: EnquiryPayload): Promise<void> {
  const webhook = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhook) return;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: data.type, payload: data }),
    });
  } catch (err) {
    console.error("[enquiries] WhatsApp webhook error:", err);
  }
}
