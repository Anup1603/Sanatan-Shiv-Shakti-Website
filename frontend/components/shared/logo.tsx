import { cn } from "@/lib/utils";
import { OmDisc } from "./sacred";

export interface LogoProps {
  name?: string;
  tagline?: string;
  showText?: boolean;
  className?: string;
  textClassName?: string;
  /** Use light text on dark backgrounds (e.g. footer). */
  variant?: "default" | "light";
}

export function Logo({
  name = "Sanatan Shiv Shakti",
  tagline = "Seva · Sanskar · Sanskriti",
  showText = true,
  className,
  textClassName,
  variant = "default",
}: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <OmDisc className="size-10 shrink-0 text-lg" />
      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-display text-base font-semibold tracking-tight",
              variant === "light" ? "text-white" : "text-foreground",
              textClassName,
            )}
          >
            {name}
          </span>
          <span
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.12em]",
              variant === "light" ? "text-gold-soft" : "text-primary",
            )}
          >
            {tagline}
          </span>
        </span>
      )}
    </span>
  );
}
