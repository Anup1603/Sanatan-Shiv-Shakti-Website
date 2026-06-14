import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CertificateCard } from "@/components/shared/certificate-card";
import { PageHero } from "@/components/shared/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { getActiveCertificates, localize } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.certificates" });
  return buildPageMetadata({
    locale,
    path: "/certificates",
    title: t("title"),
    description: t("description"),
  });
}

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.certificates");
  const tnav = await getTranslations("nav");
  const tc = await getTranslations("common");

  const certificates = getActiveCertificates();

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("certificates") }]}
      />

      <section className="container-app py-16 sm:py-20">
        {certificates.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <CertificateCard
                key={c.id}
                cert={{
                  id: c.id,
                  title: localize(c.title, locale),
                  description: localize(c.description, locale),
                  issuer: c.issuer ? localize(c.issuer, locale) : undefined,
                  issuedLabel: t("issuedBy"),
                  image: c.image,
                  pdf: c.pdf || undefined,
                }}
                viewLabel={tc("viewCertificate")}
                downloadLabel={tc("downloadPdf")}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <FileText className="size-7" />
            </span>
            <p className="text-muted-foreground">{t("empty")}</p>
          </div>
        )}
      </section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("certificates"), path: "/certificates" },
        ])}
      />
    </>
  );
}
