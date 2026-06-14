import { HeartHandshake, MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/shared/motion";
import { MandalaPattern } from "@/components/shared/sacred";

export async function VolunteerCta() {
  const t = await getTranslations("home.volunteer");

  return (
    <section className="container-app py-16 sm:py-20">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-primary via-saffron to-maroon px-6 py-14 text-center text-white shadow-xl sm:px-12">
          <MandalaPattern className="absolute -right-16 -top-16 -z-10 size-72 text-white/10" />
          <MandalaPattern className="absolute -bottom-20 -left-16 -z-10 size-72 text-white/10" />
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-white/90">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/join"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-maroon-deep shadow-md transition-all hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
            >
              <HeartHandshake className="size-4" />
              {t("cta")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
            >
              <MessageCircle className="size-4" />
              {t("secondary")}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
