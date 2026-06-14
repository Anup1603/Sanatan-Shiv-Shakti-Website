import type { Metadata } from "next";
import { Check, Eye, Sparkles, Target } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StatsBand } from "@/components/home/stats-band";
import { VolunteerCta } from "@/components/home/volunteer-cta";
import { ContentIcon } from "@/components/shared/icon";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/motion";
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
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return buildPageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.about");
  const tnav = await getTranslations("nav");
  const { about } = siteContent;

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("about") }]}
      />

      {/* STORY */}
      <section className="container-app py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SmartImage
              src="/images/temple-1.jpg"
              alt={localize(siteContent.site.name, locale)}
              className="aspect-4/3 w-full rounded-2xl shadow-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
              hoverZoom
            />
          </Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold">
              {t("storyTitle")}
            </h2>
            {about.story.map((para, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {localize(para, locale)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-app grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Eye className="size-6" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold">
              {t("visionTitle")}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {localize(about.vision, locale)}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <span className="grid size-12 place-items-center rounded-xl bg-secondary/10 text-secondary">
              <Target className="size-6" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold">
              {t("missionTitle")}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {localize(about.mission, locale)}
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="container-app py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold">
          {t("objectivesTitle")}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {about.objectives.map((obj, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="size-4" />
              </span>
              <span className="text-foreground/90">{localize(obj, locale)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CORE VALUES */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-app">
          <h2 className="text-center font-display text-3xl font-semibold">
            {t("valuesTitle")}
          </h2>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value, i) => (
              <RevealItem
                key={i}
                className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-saffron/15 to-primary/15 text-primary ring-1 ring-primary/10">
                  <ContentIcon name={value.icon} className="size-7" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {localize(value.title, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {localize(value.description, locale)}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* WHY JOIN + CULTURE + IMPACT */}
      <section className="container-app py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold">
              {t("whyJoinTitle")}
            </h2>
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
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-2xl font-semibold">
                {t("culturalTitle")}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {localize(about.culturalValues, locale)}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">
                {t("impactTitle")}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {localize(about.communityImpact, locale)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand locale={locale} />
      <VolunteerCta />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("about"), path: "/about" },
        ])}
      />
    </>
  );
}
