import { siteContent } from "@/content/site-content";
import type { Locale } from "@/i18n/routing";
import type { LocalizedText } from "@/types/content";

/**
 * Resolve a localized field to a plain string for the active locale.
 * Falls back to English, then to an empty string.
 */
export function localize(
  text: LocalizedText | undefined | null,
  locale: string,
): string {
  if (text == null) return "";
  if (typeof text === "string") return text;
  const l = locale as Locale;
  return text[l] ?? text.en ?? "";
}

/** Curried helper: `const t = makeLocalizer(locale); t(field)`. */
export function makeLocalizer(locale: string) {
  return (text: LocalizedText | undefined | null) => localize(text, locale);
}

/* ---------- Derived content selectors ---------- */

export function getUpcomingEvents() {
  return siteContent.events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => {
      // Dated events first (soonest), undated ("Coming Soon") at the end.
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return a.date.localeCompare(b.date);
    });
}

export function getPastEvents() {
  return siteContent.events
    .filter((e) => e.status === "past")
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getEventBySlug(slug: string) {
  return siteContent.events.find((e) => e.slug === slug);
}

export function getActiveCertificates() {
  return siteContent.certificates.filter((c) => c.active);
}

export function getActiveAnnouncements() {
  return siteContent.announcements
    .filter((a) => a.active)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getActivityBySlug(slug: string) {
  return siteContent.activities.find((a) => a.slug === slug);
}

export function getFeaturedActivities() {
  const featured = siteContent.activities.filter((a) => a.featured);
  return featured.length ? featured : siteContent.activities.slice(0, 6);
}

export function getSortedMembers() {
  return [...siteContent.members].sort((a, b) => a.order - b.order);
}

export function getFeaturedGallery(limit = 8) {
  const featured = siteContent.gallery.filter((g) => g.featured);
  const pool = featured.length >= limit ? featured : siteContent.gallery;
  return pool.slice(0, limit);
}

export function getGalleryByCategory(categoryKey: string) {
  if (categoryKey === "all") return siteContent.gallery;
  return siteContent.gallery.filter((g) => g.category === categoryKey);
}

/* ---------- Date / number formatting ---------- */

const INTL_LOCALES: Record<Locale, string> = {
  en: "en-IN",
  hi: "hi-IN",
  bn: "bn-IN",
};

export function formatEventDate(
  iso: string | undefined,
  locale: string,
): string {
  if (!iso) return "";
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(INTL_LOCALES[locale as Locale] ?? "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Returns day/month/year parts, or `null` when the event has no date. */
export function getEventDateParts(iso: string | undefined, locale: string) {
  if (!iso) return null;
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return null;
  const intl = INTL_LOCALES[locale as Locale] ?? "en-IN";
  return {
    day: new Intl.DateTimeFormat(intl, { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat(intl, { month: "short" }).format(date),
    year: new Intl.DateTimeFormat(intl, { year: "numeric" }).format(date),
  };
}
