import type { Metadata, Viewport } from "next";
import {
  Inter,
  Marcellus,
  Noto_Sans_Bengali,
  Noto_Sans_Devanagari,
} from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { siteContent } from "@/content/site-content";
import { routing } from "@/i18n/routing";
import { getActiveAnnouncements, localize } from "@/lib/content";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});
const notoDeva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-deva",
  display: "swap",
});
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#c2410c",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  const base = buildPageMetadata({
    locale,
    path: "/",
    title: t("title"),
    description: t("description"),
  });

  return {
    ...base,
    metadataBase: new URL(SITE_URL),
    applicationName: "Sanatan Shiv Shakti",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Sanatan Shiv Shakti",
      "Howrah spiritual organization",
      "Bhajan Kirtan Howrah",
      "Sundar Kand",
      "Gau Seva",
      "food distribution Howrah",
      "Sanatan Dharma youth",
      "NGO Howrah",
      "Ram Janki Mandir Shibpur",
    ],
    authors: [{ name: "Sanatan Shiv Shakti" }],
    creator: "Sanatan Shiv Shakti",
    publisher: "Sanatan Shiv Shakti",
    category: "Nonprofit",
    formatDetection: { telephone: true, address: true, email: true },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "common" });
  const messages = await getMessages();
  const siteName = localize(siteContent.site.name, locale);
  const tagline = localize(siteContent.site.tagline, locale);

  const announcement = getActiveAnnouncements()[0];

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${marcellus.variable} ${notoDeva.variable} ${notoBengali.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          {announcement && (
            <AnnouncementBar
              message={localize(announcement.message, locale)}
              linkLabel={
                announcement.link
                  ? localize(announcement.link.label, locale)
                  : undefined
              }
              href={announcement.link?.href}
              closeLabel={t("close")}
            />
          )}
          <Navbar siteName={siteName} tagline={tagline} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <ScrollToTop label={t("backToTop")} />
        </NextIntlClientProvider>

        <JsonLd data={organizationSchema(locale)} />
        <JsonLd data={websiteSchema(locale)} />
      </body>
    </html>
  );
}
