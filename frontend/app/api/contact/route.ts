import { NextResponse } from "next/server";

import { sendOrgEmail } from "@/lib/email/resend";
import { contactEmailHtml } from "@/lib/email/templates";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam honeypot — bots fill every field; humans never see this one.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  try {
    await sendOrgEmail({
      subject: `New message from ${name} — Sanatan Shiv Shakti website`,
      html: contactEmailHtml({ name, email, phone, message }, new Date()),
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] send failed:", err);
    return NextResponse.json(
      { error: "Could not send your message right now." },
      { status: 500 },
    );
  }
}
