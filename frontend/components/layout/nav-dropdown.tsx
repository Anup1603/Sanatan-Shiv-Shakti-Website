"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import type { NavChild } from "@/lib/nav";
import { cn } from "@/lib/utils";

/**
 * Desktop navbar dropdown: opens on hover (with a small close delay so the
 * pointer can travel into the menu) and on click; closes on Escape / outside.
 */
export function NavDropdown({
  triggerKey,
  items,
}: {
  triggerKey: string;
  items: NavChild[];
}) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const childActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isActive = items.some((i) => childActive(i.href));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive ? "text-primary" : "text-foreground/80",
        )}
      >
        {t(triggerKey)}
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 min-w-52 pt-2">
          <ul className="overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-lg">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted",
                    childActive(item.href)
                      ? "font-semibold text-primary"
                      : "text-foreground",
                  )}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
