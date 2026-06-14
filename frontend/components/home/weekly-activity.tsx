import { CalendarClock, Clock, MapPin, Navigation } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartImage } from "@/components/shared/smart-image";

export async function WeeklyActivitySection({ locale }: { locale: string }) {
  const t = await getTranslations("home.weekly");
  const tc = await getTranslations("common");
  const w = siteContent.weeklyActivity;
  const mapsLink = siteContent.contact.mapsLink;

  return (
    <section className="container-app py-16 sm:py-20">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        divider
      />

      <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card p-7 shadow-sm surface-warm sm:p-9">
            <Badge variant="solid" className="mb-4">
              <CalendarClock className="size-3.5" />
              {localize(w.day, locale)}
            </Badge>
            <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
              {localize(w.title, locale)}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {localize(w.description, locale)}
            </p>

            <dl className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-4.5" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("locationLabel")}
                  </dt>
                  <dd className="font-medium">
                    {localize(w.templeName, locale)}
                    <span className="block text-sm font-normal text-muted-foreground">
                      {w.addressLines.map((l) => localize(l, locale)).join(", ")}
                    </span>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Clock className="size-4.5" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("timingLabel")}
                  </dt>
                  <dd className="font-medium">{localize(w.timing, locale)}</dd>
                </div>
              </div>
            </dl>

            <Button asChild variant="secondary" className="mt-7">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <Navigation className="size-4" />
                {tc("getDirections")}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            <SmartImage
              src={w.images[0]?.src ?? "ph:temple-1"}
              alt={localize(w.images[0]?.alt ?? w.title, locale)}
              className="col-span-2 aspect-[16/10] w-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              hoverZoom
            />
            {w.images.slice(1, 3).map((img, i) => (
              <SmartImage
                key={i}
                src={img.src}
                alt={localize(img.alt, locale)}
                className="aspect-square w-full rounded-2xl"
                sizes="(max-width: 1024px) 50vw, 25vw"
                hoverZoom
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
