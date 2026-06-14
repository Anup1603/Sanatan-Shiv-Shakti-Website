import type { Metadata } from "next";
import { CalendarDays, History } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { VolunteerCta } from "@/components/home/volunteer-cta";
import { EventCard } from "@/components/shared/event-card";
import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup, RevealItem } from "@/components/shared/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { getPastEvents, getUpcomingEvents } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, eventSchema } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.events" });
  return buildPageMetadata({
    locale,
    path: "/events",
    title: t("title"),
    description: t("description"),
  });
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.events");
  const tnav = await getTranslations("nav");
  const tc = await getTranslations("common");

  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("events") }]}
      />

      {/* UPCOMING */}
      <section className="container-app py-16 sm:py-20">
        <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold sm:text-3xl">
          <CalendarDays className="size-6 text-primary" />
          {t("upcomingTitle")}
        </h2>
        {upcoming.length > 0 ? (
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <RevealItem key={event.id} className="h-full">
                <EventCard
                  event={event}
                  locale={locale}
                  upcomingLabel={tc("upcomingEvents")}
                  pastLabel={t("pastTitle")}
                  comingSoonLabel={tc("comingSoon")}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <p className="mt-6 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground">
            {t("noUpcoming")}
          </p>
        )}
      </section>

      {/* PAST */}
      {past.length > 0 && (
        <section className="bg-muted/40 py-16 sm:py-20">
          <div className="container-app">
            <h2 className="flex items-center gap-2.5 font-display text-2xl font-semibold sm:text-3xl">
              <History className="size-6 text-secondary" />
              {t("pastTitle")}
            </h2>
            <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <RevealItem key={event.id} className="h-full">
                  <EventCard
                    event={event}
                    locale={locale}
                    upcomingLabel={tc("upcomingEvents")}
                    pastLabel={t("pastTitle")}
                    comingSoonLabel={tc("comingSoon")}
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <VolunteerCta />

      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: tnav("home"), path: "/" },
            { name: tnav("events"), path: "/events" },
          ]),
          ...upcoming.filter((e) => e.date).map((e) => eventSchema(e, locale)),
        ]}
      />
    </>
  );
}
