import { defineRouting } from "next-intl/routing";

/**
 * Central i18n routing config.
 *
 * Languages supported: English (default), Hindi, Bengali.
 * `localePrefix: "always"` gives every language a clear, SEO-friendly prefix
 * (`/en/about`, `/hi/about`, `/bn/about`); `/` redirects to `/en`.
 *
 * To add a language: add the code here AND create `messages/<code>.json`.
 */
export const routing = defineRouting({
  locales: ["en", "hi", "bn"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  hi: { native: "हिन्दी", english: "Hindi" },
  bn: { native: "বাংলা", english: "Bengali" },
};
