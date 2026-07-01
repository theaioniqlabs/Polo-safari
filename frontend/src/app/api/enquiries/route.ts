import { NextResponse } from "next/server";
import {
  notifyEnquiryWebhook,
  sendEnquiryEmail,
  validateEnquiry,
} from "@/lib/enquiry";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validated = validateEnquiry(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const data = validated.data;
  const emailSent = await sendEnquiryEmail(data);
  await notifyEnquiryWebhook(data);

  return NextResponse.json(
    {
      ok: true,
      message: emailSent
        ? "Thank you — our team will respond within 48 hours."
        : "Thank you — our team will respond within 48 hours.",
      emailSent,
    },
    { status: 201 },
  );
}
