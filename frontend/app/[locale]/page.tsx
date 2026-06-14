import { ArrowRight, Eye, HeartHandshake, Target } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactInfo } from "@/components/shared/contact-info";
import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { VolunteerCta } from "@/components/home/volunteer-cta";
import { WeeklyActivitySection } from "@/components/home/weekly-activity";
import { ActivityCard } from "@/components/shared/activity-card";
import { CertificateCard } from "@/components/shared/certificate-card";
import { EventCard } from "@/components/shared/event-card";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";
import { Link } from "@/i18n/navigation";
import {
  getActiveCertificates,
  getFeaturedActivities,
  getFeaturedGallery,
  getUpcomingEvents,
  localize,
} from "@/lib/content";
import { faqSchema } from "@/lib/structured-data";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tc = await getTranslations("common");

  const { about } = siteContent;
  const activities = getFeaturedActivities();
  const upcoming = getUpcomingEvents().slice(0, 3);
  const certificates = getActiveCertificates();
  const galleryItems = getFeaturedGallery(8).map((g) => ({
    id: g.id,
    type: g.type,
    src: g.type === "video" ? g.thumbnail ?? g.src : g.src,
    embedUrl: g.embedUrl,
    title: localize(g.title, locale),
    alt: localize(g.alt, locale),
    category: g.category,
  }));
  const faqItems = siteContent.faqs.map((f) => ({
    question: localize(f.question, locale),
    answer: localize(f.answer, locale),
  }));

  return (
    <>
      <Hero locale={locale} />

      {/* ABOUT PREVIEW */}
      <section className="container-app py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <SmartImage
                src="/images/bhajan-kirtan.jpg"
                alt={localize(siteContent.site.name, locale)}
                className="aspect-3/4 w-full rounded-2xl"
                sizes="(max-width: 1024px) 50vw, 25vw"
                hoverZoom
              />
              <div className="flex flex-col gap-3 pt-8">
                <SmartImage
                  src="/images/gau-seva.jpg"
                  alt="Seva"
                  className="aspect-square w-full rounded-2xl"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  hoverZoom
                />
                <SmartImage
                  src="/images/food-distribution.jpg"
                  alt="Sanskriti"
                  className="aspect-square w-full rounded-2xl"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  hoverZoom
                />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              subtitle={t("about.subtitle")}
              align="left"
            />
            <p className="leading-relaxed text-muted-foreground">
              {localize(about.story[0], locale)}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <Eye className="size-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {t("about.vision")}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {localize(about.vision, locale)}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <Target className="size-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {t("about.mission")}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {localize(about.mission, locale)}
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-fit">
              <Link href="/about">
                {t("about.cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow={t("activities.eyebrow")}
            title={t("activities.title")}
            subtitle={t("activities.subtitle")}
            divider
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <RevealItem key={activity.slug} className="h-full">
                <ActivityCard
                  activity={activity}
                  locale={locale}
                  learnMoreLabel={tc("learnMore")}
                />
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/activities">
                {t("activities.cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WEEKLY TEMPLE ACTIVITY */}
      <WeeklyActivitySection locale={locale} />

      {/* IMPACT STATS */}
      <StatsBand locale={locale} />

      {/* UPCOMING EVENTS */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeading
          eyebrow={t("events.eyebrow")}
          title={t("events.title")}
          subtitle={t("events.subtitle")}
          divider
        />
        {upcoming.length > 0 ? (
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <RevealItem key={event.id} className="h-full">
                <EventCard
                  event={event}
                  locale={locale}
                  upcomingLabel={tc("upcomingEvents")}
                  pastLabel=""
                  comingSoonLabel={tc("comingSoon")}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <p className="mt-10 text-center text-muted-foreground">
            {t("events.none")}
          </p>
        )}
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/events">
              {t("events.cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            subtitle={t("gallery.subtitle")}
            divider
          />
          <div className="mt-12">
            <GalleryGrid items={galleryItems} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/gallery">
                {t("gallery.cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CERTIFICATES (only if any active) */}
      {certificates.length > 0 && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeading
            eyebrow={t("certificates.eyebrow")}
            title={t("certificates.title")}
            subtitle={t("certificates.subtitle")}
            divider
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <CertificateCard
                key={c.id}
                cert={{
                  id: c.id,
                  title: localize(c.title, locale),
                  description: localize(c.description, locale),
                  issuer: c.issuer ? localize(c.issuer, locale) : undefined,
                  image: c.image,
                  pdf: c.pdf || undefined,
                }}
                viewLabel={tc("viewCertificate")}
                downloadLabel={tc("downloadPdf")}
              />
            ))}
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      {siteContent.testimonials.length > 0 && (
        <section className="bg-muted/40 py-16 sm:py-20">
          <div className="container-app">
            <SectionHeading
              eyebrow={t("testimonials.eyebrow")}
              title={t("testimonials.title")}
              subtitle={t("testimonials.subtitle")}
              divider
            />
            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {siteContent.testimonials.map((testimonial) => (
                <RevealItem key={testimonial.id} className="h-full">
                  <TestimonialCard testimonial={testimonial} locale={locale} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* FAQ — AEO/GEO */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
          divider
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <VolunteerCta />

      {/* CONTACT */}
      <section className="container-app pb-20">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          divider
        />
        <div className="mt-12">
          <ContactInfo locale={locale} />
        </div>
      </section>

      <JsonLd data={faqSchema(locale)} />
    </>
  );
}
