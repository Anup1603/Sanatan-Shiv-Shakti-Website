import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { siteContent } from "@/content/site-content";
import { Link } from "@/i18n/navigation";
import { localize } from "@/lib/content";
import { NAV_LINKS } from "@/lib/nav";
import { Logo } from "@/components/shared/logo";
import { SocialIcon } from "@/components/shared/social-icons";

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations("footer");
  const tnav = await getTranslations("nav");
  const { contact, site } = siteContent;
  const credit = site.credit;

  const name = localize(site.name, locale);
  const tagline = localize(site.tagline, locale);
  const description = localize(site.description, locale);

  return (
    <footer className="relative mt-16 bg-maroon-deep text-white/85">
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-[0.06]"
        aria-hidden="true"
      />
      <div className="container-app relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo name={name} tagline={tagline} variant="light" />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {description}
            </p>
            <div className="flex gap-2.5 pt-1">
              {contact.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label ?? s.platform}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                >
                  <SocialIcon platform={s.platform} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-semibold text-white">
              {t("quickLinks")}
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-gold-soft"
                  >
                    {tnav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-semibold text-white">
              {t("contactTitle")}
            </h3>
            <address className="flex flex-col gap-3 text-sm not-italic text-white/75">
              <span className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-soft" />
                <span>
                  {contact.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {localize(line, locale)}
                    </span>
                  ))}
                  <span className="block">PIN {contact.pincode}</span>
                </span>
              </span>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
              >
                <Phone className="size-4 shrink-0 text-gold-soft" />
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-gold-soft"
              >
                <Mail className="size-4 shrink-0 text-gold-soft" />
                {contact.email}
              </a>
            </address>
            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-gold-soft hover:text-gold-soft"
            >
              <MapPin className="size-3.5" />
              {t("viewMap")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 pt-5 pb-16 text-center text-xs text-white/60 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {name}. {t("rights")}
          </p>

          <nav
            aria-label="Legal"
            className="flex items-center gap-4 order-last md:order-none"
          >
            <Link href="/terms" className="transition-colors hover:text-gold-soft">
              {t("terms")}
            </Link>
            <span className="text-white/25" aria-hidden="true">
              ·
            </span>
            <Link href="/privacy" className="transition-colors hover:text-gold-soft">
              {t("privacy")}
            </Link>
          </nav>

          {credit && (
            <p className="flex items-center gap-1.5">
              {t("madeBy")}{" "}
              {credit.linkedinUrl ? (
                <a
                  href={credit.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${credit.name} on LinkedIn`}
                  className="inline-flex items-center gap-1 font-medium text-gold-soft transition-colors hover:text-white"
                >
                  {credit.name}
                  <SocialIcon platform="linkedin" className="size-3.5" />
                </a>
              ) : (
                <span className="font-medium text-gold-soft">{credit.name}</span>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
