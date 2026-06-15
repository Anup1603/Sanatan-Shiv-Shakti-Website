import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";

/**
 * Branded, email-client-safe HTML for form notification emails.
 * Uses table layout + inline styles (Gmail strips <style> and most modern CSS).
 * Colors mirror app/globals.css (saffron / maroon / gold / cream).
 */

const C = {
  cream: "#fffaf2",
  card: "#ffffff",
  border: "#ece0cd",
  primary: "#c2410c",
  saffron: "#f59324",
  maroon: "#7a1e27",
  maroonDeep: "#5c141b",
  gold: "#c8a248",
  goldSoft: "#e9d49a",
  text: "#2a2520",
  muted: "#6f6457",
  highlightBg: "#fbf3e6",
};

export function escapeHtml(input: string): string {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function formatStamp(date: Date): string {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

interface Field {
  label: string;
  value?: string;
  /** Render in a highlighted block (used for the message). */
  block?: boolean;
}

function fieldRows(fields: Field[]): string {
  return fields
    .filter((f) => f.value && f.value.trim() !== "")
    .map((f) => {
      const value = escapeHtml(f.value!).replace(/\n/g, "<br/>");
      if (f.block) {
        return `
          <tr>
            <td style="padding:14px 0 4px;">
              <div style="font-size:12px;font-weight:bold;letter-spacing:.04em;text-transform:uppercase;color:${C.muted};">${escapeHtml(
                f.label,
              )}</div>
              <div style="margin-top:6px;padding:14px 16px;background:${C.highlightBg};border-left:3px solid ${C.primary};border-radius:8px;font-size:15px;line-height:1.6;color:${C.text};">${value}</div>
            </td>
          </tr>`;
      }
      return `
        <tr>
          <td style="padding:9px 0;border-bottom:1px solid ${C.border};">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="38%" style="font-size:12px;font-weight:bold;letter-spacing:.04em;text-transform:uppercase;color:${C.muted};vertical-align:top;padding-right:10px;">${escapeHtml(
                  f.label,
                )}</td>
                <td style="font-size:15px;color:${C.text};vertical-align:top;">${value}</td>
              </tr>
            </table>
          </td>
        </tr>`;
    })
    .join("");
}

function wrapEmail(opts: {
  subtitle: string;
  heading: string;
  fields: Field[];
  replyEmail?: string;
  replyName?: string;
  dateStr: string;
}): string {
  const orgName = localize(siteContent.site.name, "en");
  const tagline = localize(siteContent.site.tagline, "en");
  const address = siteContent.contact.addressLines
    .map((l) => escapeHtml(localize(l, "en")))
    .join(", ");

  const replyButton = opts.replyEmail
    ? `
      <tr>
        <td style="padding:22px 0 4px;">
          <a href="mailto:${escapeHtml(opts.replyEmail)}?subject=${encodeURIComponent(
            "Re: Your message to " + orgName,
          )}" style="display:inline-block;background:${C.primary};color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;padding:12px 24px;border-radius:9999px;">Reply to ${escapeHtml(
            opts.replyName || opts.replyEmail,
          )}</a>
        </td>
      </tr>`
    : "";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${C.cream};">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${C.cream};padding:24px 12px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:${C.card};border:1px solid ${C.border};border-radius:16px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
            <!-- Header -->
            <tr>
              <td style="background-color:${C.primary};background-image:linear-gradient(135deg, ${C.saffron}, ${C.primary} 55%, ${C.maroon});padding:30px 28px;text-align:center;">
                <div style="font-size:34px;line-height:1;color:#ffffff;">&#2384;</div>
                <div style="margin-top:10px;font-size:22px;font-weight:bold;color:#ffffff;letter-spacing:.01em;">${escapeHtml(
                  orgName,
                )}</div>
                <div style="margin-top:4px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:${C.goldSoft};">${escapeHtml(
                  tagline,
                )}</div>
                <div style="margin-top:14px;display:inline-block;background:rgba(255,255,255,0.16);color:#ffffff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:9999px;">${escapeHtml(
                  opts.subtitle,
                )}</div>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:26px 28px 24px;">
                <h1 style="margin:0 0 4px;font-size:19px;color:${C.text};">${escapeHtml(
                  opts.heading,
                )}</h1>
                <p style="margin:0 0 14px;font-size:13px;color:${C.muted};">Received ${escapeHtml(
                  opts.dateStr,
                )}</p>
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  ${fieldRows(opts.fields)}
                  ${replyButton}
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background:${C.maroonDeep};padding:20px 28px;text-align:center;">
                <div style="font-size:13px;font-weight:bold;color:#ffffff;">${escapeHtml(
                  orgName,
                )}</div>
                <div style="margin-top:4px;font-size:12px;color:rgba(255,255,255,0.75);line-height:1.5;">${address}</div>
                <div style="margin-top:8px;font-size:11px;color:${C.goldSoft};">${escapeHtml(
                  tagline,
                )}</div>
              </td>
            </tr>
          </table>
          <p style="margin:14px 0 0;font-size:11px;color:${C.muted};">This message was sent from the ${escapeHtml(
            orgName,
          )} website.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/* ---------- Per-form emails ---------- */

export function contactEmailHtml(
  data: { name: string; email: string; phone?: string; message: string },
  date: Date,
): string {
  return wrapEmail({
    subtitle: "New Contact Message",
    heading: `New message from ${data.name}`,
    dateStr: formatStamp(date),
    replyEmail: data.email,
    replyName: data.name,
    fields: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email },
      { label: "Phone", value: data.phone },
      { label: "Message", value: data.message, block: true },
    ],
  });
}

export function volunteerEmailHtml(
  data: {
    fullName: string;
    mobile: string;
    email?: string;
    address?: string;
    occupation?: string;
    age?: string;
    interestArea?: string;
    message?: string;
  },
  date: Date,
): string {
  const interest = data.interestArea
    ? localize(
        siteContent.interestAreas.find((a) => a.value === data.interestArea)
          ?.label,
        "en",
      ) || data.interestArea
    : "";

  return wrapEmail({
    subtitle: "New Volunteer Registration",
    heading: `${data.fullName} wants to join`,
    dateStr: formatStamp(date),
    replyEmail: data.email,
    replyName: data.fullName,
    fields: [
      { label: "Full Name", value: data.fullName },
      { label: "Mobile", value: data.mobile },
      { label: "Email", value: data.email },
      { label: "Address", value: data.address },
      { label: "Occupation", value: data.occupation },
      { label: "Age", value: data.age },
      { label: "Area of Interest", value: interest },
      { label: "Message", value: data.message, block: true },
    ],
  });
}
