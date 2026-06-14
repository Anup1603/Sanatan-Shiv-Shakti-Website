import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JoinForm } from "@/components/forms/join-form";
import { PageHero } from "@/components/shared/page-hero";
import { SmartImage } from "@/components/shared/smart-image";
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
  const t = await getTranslations({ locale, namespace: "meta.join" });
  return buildPageMetadata({
    locale,
    path: "/join",
    title: t("title"),
    description: t("description"),
  });
}

export default async function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.join");
  const tf = await getTranslations("forms.join");
  const tnav = await getTranslations("nav");
  const { about } = siteContent;

  const interestAreas = siteContent.interestAreas.map((a) => ({
    value: a.value,
    label: localize(a.label, locale),
  }));

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("join") }]}
      />

      <section className="container-app py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Why join */}
          <div className="flex flex-col gap-6">
            <SmartImage
              src="/images/youth.jpg"
              alt={localize(siteContent.site.name, locale)}
              className="aspect-4/3 w-full rounded-2xl shadow-sm"
              sizes="(max-width: 1024px) 100vw, 45vw"
              hoverZoom
            />
            <ul className="flex flex-col gap-3">
              {about.whyJoin.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-foreground/90">
                    {localize(item, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold">
              {tf("heading")}
            </h2>
            <p className="mb-6 mt-1 text-sm text-muted-foreground">
              {t("subtitle")}
            </p>
            <JoinForm interestAreas={interestAreas} />
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("join"), path: "/join" },
        ])}
      />
    </>
  );
}
