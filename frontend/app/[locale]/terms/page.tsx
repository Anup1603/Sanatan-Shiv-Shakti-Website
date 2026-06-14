import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/shared/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

const LAST_UPDATED = "June 2026";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.terms" });
  return buildPageMetadata({
    locale,
    path: "/terms",
    title: t("title"),
    description: t("description"),
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.terms");
  const tnav = await getTranslations("nav");
  const { contact } = siteContent;
  const orgName = localize(siteContent.site.name, "en");

  const sections: { heading: string; body: string[] }[] = [
    {
      heading: "1. Acceptance of Terms",
      body: [
        `By accessing and using the ${orgName} website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.`,
      ],
    },
    {
      heading: "2. About Us",
      body: [
        `${orgName} is a non-political, non-profit spiritual and charitable organization based in Howrah, West Bengal. This website is provided for informational and community purposes.`,
      ],
    },
    {
      heading: "3. Use of the Website",
      body: [
        "You may use this website for lawful, personal and non-commercial purposes only. You agree not to misuse the website, attempt to gain unauthorized access, or disrupt its normal functioning.",
      ],
    },
    {
      heading: "4. Volunteer & Contact Forms",
      body: [
        "Information you submit through our Join Us or Contact forms is provided voluntarily and is used solely to respond to you and coordinate participation. Submitting a form does not create any binding obligation on either party.",
      ],
    },
    {
      heading: "5. Donations",
      body: [
        "Any donations made to the organization are voluntary and used to support our spiritual, cultural and charitable activities. Unless required by law, donations are non-refundable. Please verify all payment details before contributing.",
      ],
    },
    {
      heading: "6. Intellectual Property",
      body: [
        `All content on this website — text, graphics, logos and images — is the property of ${orgName} or used with permission, and may not be reproduced for commercial use without consent. Some imagery may be licensed stock used as placeholders.`,
      ],
    },
    {
      heading: "7. Third-Party Links & Embeds",
      body: [
        "This website may contain links to, or embeds from, third-party services (such as Google Maps and YouTube). We are not responsible for the content or privacy practices of those services.",
      ],
    },
    {
      heading: "8. Disclaimer & Limitation of Liability",
      body: [
        "This website is provided on an \"as is\" basis. While we strive for accuracy, we make no warranties regarding the completeness or reliability of its content. We are not liable for any loss arising from the use of this website.",
      ],
    },
    {
      heading: "9. Changes to These Terms",
      body: [
        "We may update these Terms & Conditions from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.",
      ],
    },
    {
      heading: "10. Governing Law",
      body: [
        "These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts of Howrah / Kolkata, West Bengal.",
      ],
    },
    {
      heading: "11. Contact",
      body: [
        `For any questions about these terms, contact us at ${contact.email} or ${contact.phoneDisplay}.`,
      ],
    },
  ];

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: t("title") }]}
      />

      <article className="container-app max-w-3xl py-14 sm:py-16">
        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-semibold">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: t("title"), path: "/terms" },
        ])}
      />
    </>
  );
}
