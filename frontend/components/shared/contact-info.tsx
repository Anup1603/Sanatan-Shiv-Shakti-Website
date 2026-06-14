import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { siteContent } from "@/content/site-content";
import { localize } from "@/lib/content";
import { Button } from "@/components/ui/button";

export async function ContactInfo({ locale }: { locale: string }) {
  const tc = await getTranslations("common");
  const { contact } = siteContent;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Address */}
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
        <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
          <MapPin className="size-5" />
        </span>
        <address className="not-italic leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">
            {localize(contact.organizationName, locale)}
          </span>
          {contact.addressLines.map((line, i) => (
            <span key={i} className="block">
              {localize(line, locale)}
            </span>
          ))}
          <span className="block">PIN {contact.pincode}</span>
        </address>
        <Button asChild variant="outline" size="sm" className="mt-1 w-fit">
          <a href={contact.mapsLink} target="_blank" rel="noopener noreferrer">
            <Navigation className="size-4" />
            {tc("getDirections")}
          </a>
        </Button>
      </div>

      {/* Phone + WhatsApp */}
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
        <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
          <Phone className="size-5" />
        </span>
        <div className="text-muted-foreground">
          <a
            href={`tel:${contact.phone}`}
            className="block font-semibold text-foreground transition-colors hover:text-primary"
          >
            {contact.phoneDisplay}
          </a>
          {contact.officeHours && (
            <span className="mt-1 block text-sm">
              {localize(contact.officeHours, locale)}
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap gap-2">
          <Button asChild size="sm" className="w-fit">
            <a href={`tel:${contact.phone}`}>
              <Phone className="size-4" />
              {tc("callNow")}
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm" className="w-fit">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              {tc("whatsapp")}
            </a>
          </Button>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
        <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
          <Mail className="size-5" />
        </span>
        <a
          href={`mailto:${contact.email}`}
          className="break-all font-semibold text-foreground transition-colors hover:text-primary"
        >
          {contact.email}
        </a>
      </div>

      {/* Hours */}
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm">
        <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
          <Clock className="size-5" />
        </span>
        <p className="leading-relaxed text-muted-foreground">
          {contact.officeHours
            ? localize(contact.officeHours, locale)
            : localize(siteContent.weeklyActivity.day, locale)}
        </p>
      </div>
    </div>
  );
}
