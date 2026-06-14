"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { NAV_GROUPS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { LanguageSwitcher } from "./language-switcher";
import { NavDropdown } from "./nav-dropdown";

export function Navbar({
  siteName,
  tagline,
}: {
  siteName: string;
  tagline: string;
}) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change + lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur",
      )}
    >
      <nav
        className="container-app flex h-16 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label={siteName} className="shrink-0">
          {/* <Logo name={siteName} tagline={tagline} /> */}
          <img src="/images/Logo2.png" alt={siteName} className="h-30 w-30" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_GROUPS.map((entry) => (
            <li key={entry.key}>
              {entry.type === "link" ? (
                <Link
                  href={entry.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive(entry.href)
                      ? "text-primary"
                      : "text-foreground/80",
                  )}
                >
                  {t(entry.key)}
                  {isActive(entry.href) && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              ) : (
                <NavDropdown triggerKey={entry.key} items={entry.items} />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/join">{t("join")}</Link>
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
            aria-label={t("menu")}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — anchored below the header (avoids the header's
          backdrop-filter containing block collapsing a fixed panel). */}
      {open && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background shadow-lg lg:hidden">
          <div className="container-app flex flex-col gap-1 py-5">
            {NAV_GROUPS.map((entry) =>
              entry.type === "link" ? (
                <Link
                  key={entry.key}
                  href={entry.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(entry.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {t(entry.key)}
                </Link>
              ) : (
                <div key={entry.key} className="flex flex-col">
                  <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t(entry.key)}
                  </p>
                  {entry.items.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              ),
            )}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-5">
              <LanguageSwitcher fullWidth />
              <Button asChild size="lg" className="w-full">
                <Link href="/join">{t("join")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
