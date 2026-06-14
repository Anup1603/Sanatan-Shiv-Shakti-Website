import type { Metadata } from "next";
import { Check } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { VolunteerCta } from "@/components/home/volunteer-cta";
import { ContentIcon } from "@/components/shared/icon";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/motion";
import { SmartImage } from "@/components/shared/smart-image";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.activities" });
  return buildPageMetadata({
    locale,
    path: "/activities",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.activities");
  const tnav = await getTranslations("nav");
  const { activities } = siteContent;

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("activities") }]}
      />

      <div className="flex flex-col">
        {activities.map((activity, index) => {
          const reversed = index % 2 === 1;
          return (
            <section
              key={activity.slug}
              id={activity.slug}
              className={cn(
                "scroll-mt-24 py-14 sm:py-16",
                index % 2 === 1 ? "bg-muted/40" : "",
              )}
            >
              <div className="container-app grid items-center gap-10 lg:grid-cols-2">
                <Reveal className={cn(reversed && "lg:order-2")}>
                  <SmartImage
                    src={activity.images[0]?.src ?? "ph:activity"}
                    alt={localize(activity.images[0]?.alt ?? activity.title, locale)}
                    className="aspect-4/3 w-full rounded-2xl shadow-sm"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    hoverZoom
                  />
                </Reveal>

                <div className={cn("flex flex-col gap-4", reversed && "lg:order-1")}>
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-saffron/15 to-primary/15 text-primary ring-1 ring-primary/10">
                      <ContentIcon name={activity.icon} className="size-6" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                      {localize(activity.title, locale)}
                    </h2>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {localize(activity.description, locale)}
                  </p>
                  <div className="mt-1">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">
                      {t("benefitsTitle")}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {activity.benefits.map((b, i) => (
                        <li key={i}>
                          <Badge variant="gold" className="gap-1.5 py-1.5">
                            <Check className="size-3.5" />
                            {localize(b, locale)}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <VolunteerCta />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("activities"), path: "/activities" },
        ])}
      />
    </>
  );
}
