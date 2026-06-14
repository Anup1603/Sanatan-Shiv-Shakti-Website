import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { GalleryGrid } from "@/components/shared/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.gallery" });
  return buildPageMetadata({
    locale,
    path: "/gallery",
    title: t("title"),
    description: t("description"),
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.gallery");
  const tnav = await getTranslations("nav");

  const items = siteContent.gallery.map((g) => ({
    id: g.id,
    type: g.type,
    src: g.type === "video" ? g.thumbnail ?? g.src : g.src,
    embedUrl: g.embedUrl,
    title: localize(g.title, locale),
    alt: localize(g.alt, locale),
    category: g.category,
  }));

  const categories = siteContent.galleryCategories.map((c) => ({
    key: c.key,
    label: localize(c.label, locale),
  }));

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("gallery") }]}
      />

      <section className="container-app py-14 sm:py-16">
        <GalleryGrid
          items={items}
          categories={categories}
          filterLabel={t("filterLabel")}
          emptyLabel={t("noItems")}
        />
      </section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("gallery"), path: "/gallery" },
        ])}
      />
    </>
  );
}
