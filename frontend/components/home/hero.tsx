import { ArrowRight } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { Link } from "@/i18n/navigation";
import { localize } from "@/lib/content";
import { cn } from "@/lib/utils";
import { MandalaPattern } from "@/components/shared/sacred";
import { SmartImage } from "@/components/shared/smart-image";

const CTA_STYLES: Record<string, string> = {
  primary:
    "bg-linear-to-r from-saffron-bright to-primary text-white shadow-lg hover:brightness-105",
  secondary: "bg-white text-maroon-deep shadow-md hover:bg-white/90",
  outline:
    "border border-white/40 bg-white/5 text-white backdrop-blur hover:bg-white/15",
};

export function Hero({ locale }: { locale: string }) {
  const { hero } = siteContent;
  const hasRealImage = !hero.backgroundImage.startsWith("ph:");

  return (
    <section className="relative isolate overflow-hidden">
      {/* Base spiritual gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-maroon-deep via-maroon to-[#9a3412]" />
      {hasRealImage && (
        <SmartImage
          src={hero.backgroundImage}
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full opacity-30 mix-blend-overlay"
        />
      )}
      {/* Glows + pattern */}
      <div
        className="absolute inset-0 -z-10 bg-dots opacity-[0.12]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-saffron-bright/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 -left-40 -z-10 size-[34rem] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <MandalaPattern
        className="absolute -right-24 top-1/2 -z-10 hidden size-[40rem] -translate-y-1/2 text-white/[0.07] lg:block"
      />

      <div className="container-app relative flex flex-col items-center py-24 text-center text-white duration-700 ease-out animate-in fade-in slide-in-from-bottom-6 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-gold-soft backdrop-blur">
          <span className="size-1.5 animate-pulse rounded-full bg-gold-soft" />
          {localize(hero.badge, locale)}
        </span>

        <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          {localize(hero.title, locale)}
        </h1>

        <p className="mt-4 font-display text-2xl tracking-wide text-gold-soft sm:text-3xl">
          {localize(hero.tagline, locale)}
        </p>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          {localize(hero.mission, locale)}
        </p>

        <div className="mt-9 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
          {hero.ctas.map((cta, i) => (
            <Link
              key={i}
              href={cta.href}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-maroon active:scale-[0.98]",
                CTA_STYLES[cta.variant ?? "outline"],
              )}
            >
              {localize(cta.label, locale)}
              {i === 0 && <ArrowRight className="size-4" />}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom curve into the page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-background"
        style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
