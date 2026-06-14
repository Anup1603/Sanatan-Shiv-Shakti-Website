"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { localeNames, routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", fullWidth && "w-full", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${localeNames[locale].english}`}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          fullWidth && "w-full justify-between",
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <Globe className="size-4 text-primary" />
          {localeNames[locale].native}
        </span>
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className={cn(
            "absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-lg",
            fullWidth && "w-full",
          )}
        >
          {routing.locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <Link
                href={pathname}
                locale={l}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted",
                  l === locale && "font-semibold text-primary",
                )}
              >
                <span className="flex flex-col leading-tight">
                  <span>{localeNames[l].native}</span>
                  <span className="text-xs text-muted-foreground">
                    {localeNames[l].english}
                  </span>
                </span>
                {l === locale && <Check className="size-4 text-primary" />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
