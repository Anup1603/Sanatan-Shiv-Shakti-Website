import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { localize } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Activity } from "@/types/content";
import { ContentIcon } from "./icon";

export function ActivityCard({
  activity,
  locale,
  learnMoreLabel,
  className,
}: {
  activity: Activity;
  locale: string;
  learnMoreLabel: string;
  className?: string;
}) {
  return (
    <Link
      href={`/activities#${activity.slug}`}
      className={cn(
        "group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-saffron/15 to-primary/15 text-primary ring-1 ring-primary/10 transition-colors group-hover:from-saffron/25 group-hover:to-primary/25">
        <ContentIcon name={activity.icon} className="size-7" />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-display text-xl font-semibold leading-tight">
          {localize(activity.title, locale)}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {localize(activity.shortDescription, locale)}
        </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {learnMoreLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
