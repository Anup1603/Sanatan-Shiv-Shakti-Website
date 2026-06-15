import { Resend } from "resend";

import { siteContent } from "@/content/site-content";

/**
 * Where form submissions are delivered. Defaults to the organization email in
 * content/contact.ts; override with the CONTACT_TO_EMAIL env var.
 */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || siteContent.contact.email;

/**
 * The "From" address. On Resend's free tier (no verified domain) this must stay
 * as the shared onboarding sender; once you verify a domain you can change it to
 * e.g. "Sanatan Shiv Shakti <contact@yourdomain.org>" via CONTACT_FROM_EMAIL.
 */
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Sanatan Shiv Shakti <onboarding@resend.dev>";

export async function sendOrgEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Surfaced as a 500 by the route handler so the form shows its error state.
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local and to your Vercel env vars.",
    );
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message || "Resend failed to send the email.");
  }

  return data;
}
