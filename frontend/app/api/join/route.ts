import { NextResponse } from "next/server";

import { sendOrgEmail } from "@/lib/email/resend";
import { volunteerEmailHtml } from "@/lib/email/templates";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam honeypot.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const fullName = (body.fullName || "").trim();
  const mobile = (body.mobile || "").trim();
  const email = (body.email || "").trim();
  const interestArea = (body.interestArea || "").trim();

  if (!fullName || !mobile || !interestArea) {
    return NextResponse.json(
      { error: "Please fill in your name, mobile number, and area of interest." },
      { status: 400 },
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await sendOrgEmail({
      subject: `New volunteer: ${fullName} — Sanatan Shiv Shakti website`,
      html: volunteerEmailHtml(
        {
          fullName,
          mobile,
          email,
          address: (body.address || "").trim(),
          occupation: (body.occupation || "").trim(),
          age: (body.age || "").trim(),
          interestArea,
          message: (body.message || "").trim(),
        },
        new Date(),
      ),
      replyTo: email || undefined,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/join] send failed:", err);
    return NextResponse.json(
      { error: "Could not submit your registration right now." },
      { status: 500 },
    );
  }
}
