import type { Metadata } from "next";

import { siteContent } from "@/content/site-content";
import { routing, type Locale } from "@/i18n/routing";
import { localize } from "@/lib/content";

export const SITE_URL = siteContent.site.url.replace(/\/$/, "");

const OG_LOCALE: Record<Locale, string> = {
  en: "en_IN",
  hi: "hi_IN",
  bn: "bn_IN",
};

/** Build a locale-aware path honouring `localePrefix: "always"`. */
export function localizedPath(locale: string, path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `/${locale}${clean}`;
}

export function absoluteUrl(locale: string, path: string): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

/**
 * Standard metadata for a page: canonical + hreflang alternates, Open Graph
 * and Twitter cards. The file-based opengraph-image supplies the share image.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = absoluteUrl(locale, path);

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = absoluteUrl(l, path);
  }
  languages["x-default"] = absoluteUrl(routing.defaultLocale, path);

  const siteName = localize(siteContent.site.name, locale);

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName,
      locale: OG_LOCALE[locale as Locale] ?? "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
