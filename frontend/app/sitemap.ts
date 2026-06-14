import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/seo";

const ROUTES = [
  "/",
  "/about",
  "/activities",
  "/events",
  "/gallery",
  "/certificates",
  "/members",
  "/join",
  "/contact",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = absoluteUrl(locale, route);
    }
    return {
      url: absoluteUrl(routing.defaultLocale, route),
      lastModified: now,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route === "/contact" || route === "/join" ? 0.9 : 0.8,
      alternates: { languages },
    };
  });
}
