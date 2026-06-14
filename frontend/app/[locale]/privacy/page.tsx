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
  const t = await getTranslations({ locale, namespace: "meta.privacy" });
  return buildPageMetadata({
    locale,
    path: "/privacy",
    title: t("title"),
    description: t("description"),
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.privacy");
  const tnav = await getTranslations("nav");
  const { contact } = siteContent;
  const orgName = localize(siteContent.site.name, "en");

  const sections: { heading: string; body: string[] }[] = [
    {
      heading: "Our Commitment",
      body: [
        `${orgName} respects your privacy. This policy explains what information we collect through this website and how we use it. We collect as little personal information as possible.`,
      ],
    },
    {
      heading: "Information We Collect",
      body: [
        "We only collect the information you choose to provide when you fill in a form on this site (for example, the Join Us or Contact form) — such as your name, mobile number, email address and message.",
        "We do not require you to create an account, and we do not knowingly collect sensitive personal data.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "Information you submit is used only to respond to your enquiry, coordinate volunteering, or keep you informed about our activities and events. We do not sell, rent or trade your personal information to anyone.",
      ],
    },
    {
      heading: "Cookies & Analytics",
      body: [
        "This website does not set advertising or tracking cookies of its own. If analytics are added in the future, this policy will be updated to reflect what is collected.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "Some pages embed third-party content, such as Google Maps (for our location) and YouTube (for videos). These services may set their own cookies and collect data according to their own privacy policies, which we do not control.",
      ],
    },
    {
      heading: "Data Security",
      body: [
        "We take reasonable measures to protect any information shared with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        "We do not knowingly collect personal information from children without the consent of a parent or guardian. If you believe a child has provided us information, please contact us so we can remove it.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You may request access to, correction of, or deletion of any personal information you have shared with us by contacting us using the details below.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. The latest version will always be available on this page.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        `If you have any questions about this Privacy Policy, please contact us at ${contact.email} or ${contact.phoneDisplay}, or write to us at ${contact.addressLines
          .map((l) => localize(l, "en"))
          .join(", ")} – ${contact.pincode}.`,
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
          { name: t("title"), path: "/privacy" },
        ])}
      />
    </>
  );
}
