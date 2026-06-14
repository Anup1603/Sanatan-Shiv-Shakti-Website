import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfo } from "@/components/shared/contact-info";
import { PageHero } from "@/components/shared/page-hero";
import { SocialIcon } from "@/components/shared/social-icons";
import { JsonLd } from "@/components/seo/json-ld";
import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.contact");
  const tf = await getTranslations("forms.contact");
  const tnav = await getTranslations("nav");
  const { contact } = siteContent;

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("contact") }]}
      />

      <section className="container-app py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl font-semibold">
              {t("reachTitle")}
            </h2>
            <ContactInfo locale={locale} />

            <div>
              <h3 className="font-display text-lg font-semibold">
                {t("followTitle")}
              </h3>
              <div className="mt-3 flex gap-2.5">
                {contact.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label ?? s.platform}
                    className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <SocialIcon platform={s.platform} className="size-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold">
              {tf("heading")}
            </h2>
            <p className="mb-6 mt-1 text-sm text-muted-foreground">
              {t("subtitle")}
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container-app pb-20">
        <h2 className="mb-6 font-display text-2xl font-semibold">
          {t("mapTitle")}
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            src={contact.mapsEmbedUrl}
            title={localize(contact.organizationName, locale)}
            className="aspect-video w-full sm:aspect-[21/7]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("contact"), path: "/contact" },
        ])}
      />
    </>
  );
}
