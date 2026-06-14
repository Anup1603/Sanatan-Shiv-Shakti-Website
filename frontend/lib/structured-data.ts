import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import type { OrgEvent } from "@/types/content";

const HREFLANG = ["en", "hi", "bn"];

function sameAs() {
  return siteContent.contact.socials
    .map((s) => s.url)
    .filter((u) => u && u !== "#" && u.startsWith("http"));
}

function postalAddress(locale: string) {
  return {
    "@type": "PostalAddress",
    streetAddress: siteContent.contact.addressLines
      .map((l) => localize(l, locale))
      .join(", "),
    addressLocality: "Howrah",
    addressRegion: "West Bengal",
    postalCode: siteContent.contact.pincode,
    addressCountry: "IN",
  };
}

/** Organization / NGO schema — powers local SEO + knowledge panels. */
export function organizationSchema(locale: string) {
  const { site, contact } = siteContent;
  return {
    "@context": "https://schema.org",
    "@type": ["NGO", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: localize(site.name, locale),
    alternateName: "Sanatan Shiv Shakti",
    url: absoluteUrl(locale, "/"),
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description: localize(site.description, locale),
    foundingDate: site.foundingYear,
    slogan: localize(site.tagline, locale),
    nonprofitStatus: "Nonprofit",
    address: postalAddress(locale),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "customer support",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
    areaServed: {
      "@type": "City",
      name: "Howrah",
    },
    sameAs: sameAs(),
    knowsAbout: siteContent.activities.map((a) => localize(a.title, "en")),
  };
}

export function websiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: localize(siteContent.site.name, locale),
    url: absoluteUrl(locale, "/"),
    inLanguage: HREFLANG,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** FAQ schema — critical for AEO/GEO (answer engines & AI search). */
export function faqSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faqs.map((f) => ({
      "@type": "Question",
      name: localize(f.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: localize(f.answer, locale),
      },
    })),
  };
}

export function eventSchema(event: OrgEvent, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: localize(event.title, locale),
    ...(event.date ? { startDate: event.date } : {}),
    ...(event.endDate ? { endDate: event.endDate } : {}),
    eventStatus:
      event.status === "upcoming"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: localize(event.description, locale),
    location: {
      "@type": "Place",
      name: localize(event.location, locale),
      address: postalAddress(locale),
    },
    organizer: {
      "@type": "Organization",
      name: localize(siteContent.site.name, locale),
      url: absoluteUrl(locale, "/"),
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    performer: {
      "@type": "Organization",
      name: localize(siteContent.site.name, locale),
    },
  };
}

export function breadcrumbSchema(
  locale: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}
