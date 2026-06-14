import { getTranslations } from "next-intl/server";

import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/shared/motion";

export async function StatsBand({ locale }: { locale: string }) {
  const t = await getTranslations("home.stats");
  const stats = siteContent.about.stats;

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-maroon-deep via-maroon to-primary py-14 text-white">
      <div className="absolute inset-0 bg-dots opacity-10" aria-hidden="true" />
      <div className="container-app relative">
        <h2 className="text-center font-display text-2xl font-semibold text-gold-soft">
          {t("title")}
        </h2>
        <RevealGroup className="mt-9 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s, i) => (
            <RevealItem key={i} className="flex flex-col items-center">
              <span className="font-display text-4xl font-bold tabular-nums sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-1.5 text-sm text-white/80">
                {localize(s.label, locale)}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
