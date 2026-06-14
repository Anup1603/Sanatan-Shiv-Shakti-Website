import { cn } from "@/lib/utils";
import { LotusDivider } from "./sacred";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "default" | "light";
  divider?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "default",
  divider = false,
  className,
}: SectionHeadingProps) {
  const light = variant === "light";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
            light
              ? "bg-white/15 text-gold-soft"
              : "bg-primary/10 text-primary",
          )}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed",
            light ? "text-white/80" : "text-muted-foreground",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {subtitle}
        </p>
      )}
      {divider && (
        <LotusDivider className={cn("mt-1", align === "center" ? "" : "self-start")} />
      )}
    </div>
  );
}
