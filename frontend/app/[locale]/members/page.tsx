import type { Metadata } from "next";
import { Users } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { VolunteerCta } from "@/components/home/volunteer-cta";
import { MemberCard } from "@/components/shared/member-card";
import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup, RevealItem } from "@/components/shared/motion";
import { LotusDivider } from "@/components/shared/sacred";
import { JsonLd } from "@/components/seo/json-ld";
import { siteContent } from "@/content/site-content";
import { getSortedMembers } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.members" });
  return buildPageMetadata({
    locale,
    path: "/members",
    title: t("title"),
    description: t("description"),
  });
}

export default async function MembersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.members");
  const tnav = await getTranslations("nav");
  const members = getSortedMembers();
  const otherMembers = siteContent.otherMembers;

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        homeLabel={tnav("home")}
        crumbs={[{ label: tnav("members") }]}
      />

      <section className="container-app py-16 sm:py-20">
        {members.length > 0 ? (
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member) => (
              <RevealItem key={member.id} className="h-full">
                <MemberCard member={member} locale={locale} />
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <Users className="size-7" />
            </span>
            <p className="text-muted-foreground">{t("empty")}</p>
          </div>
        )}

        {/* Other members (names only) */}
        {otherMembers.length > 0 && (
          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <LotusDivider />
            <h2 className="font-display text-2xl font-semibold">
              {t("otherTitle")}
            </h2>
            <ul className="flex max-w-3xl flex-wrap justify-center gap-2.5">
              {otherMembers.map((member, i) => (
                <li
                  key={i}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <VolunteerCta />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tnav("home"), path: "/" },
          { name: tnav("members"), path: "/members" },
        ])}
      />
    </>
  );
}
