import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";

import { getEventDateParts, localize } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { OrgEvent } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { SmartImage } from "./smart-image";

export function EventCard({
  event,
  locale,
  upcomingLabel,
  pastLabel,
  comingSoonLabel,
  className,
}: {
  event: OrgEvent;
  locale: string;
  upcomingLabel: string;
  pastLabel: string;
  comingSoonLabel: string;
  className?: string;
}) {
  const dateParts = getEventDateParts(event.date, locale);
  const isUpcoming = event.status === "upcoming";
  const timeText = localize(event.time, locale);
  const locationText = localize(event.location, locale);

  return (
    <article
      id={event.slug}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg scroll-mt-24",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <SmartImage
          src={event.images[0]?.src ?? "ph:event"}
          alt={localize(event.images[0]?.alt ?? event.title, locale)}
          className="aspect-[16/10] w-full"
          sizes="(max-width: 768px) 100vw, 33vw"
          hoverZoom
        />
        {/* Date chip — or a "Coming Soon" pill when no date is set */}
        {dateParts ? (
          <div className="absolute left-3 top-3 flex flex-col items-center rounded-xl bg-background/95 px-3 py-1.5 text-center shadow-md backdrop-blur">
            <span className="font-display text-xl font-bold leading-none text-primary">
              {dateParts.day}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {dateParts.month}
            </span>
          </div>
        ) : (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/95 px-3 py-1.5 text-center shadow-md backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">
              {comingSoonLabel}
            </span>
          </div>
        )}
        <Badge
          variant={isUpcoming ? "solid" : "secondary"}
          className="absolute right-3 top-3 shadow-sm"
        >
          {isUpcoming ? upcomingLabel : pastLabel}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">
          {localize(event.title, locale)}
        </h3>
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-primary" />
            {dateParts
              ? `${dateParts.day} ${dateParts.month} ${dateParts.year}`
              : comingSoonLabel}
          </span>
          {timeText && (
            <span className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-primary" />
              {timeText}
            </span>
          )}
          {locationText && (
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {locationText}
            </span>
          )}
        </div>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground/90">
          {localize(event.description, locale)}
        </p>
      </div>
    </article>
  );
}
