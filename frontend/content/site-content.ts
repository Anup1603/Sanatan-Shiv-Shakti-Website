import type { SiteContent } from "@/types/content";

import { about } from "./about";
import { activities } from "./activities";
import { announcements } from "./announcements";
import { certificates } from "./certificates";
import { contact } from "./contact";
import { donation } from "./donation";
import { events } from "./events";
import { faqs } from "./faqs";
import { gallery, galleryCategories } from "./gallery";
import { hero } from "./hero";
import { interestAreas } from "./interest-areas";
import { members, otherMembers } from "./members";
import { site } from "./site";
import { testimonials } from "./testimonials";
import { weeklyActivity } from "./weekly-activity";

/**
 * ============================================================================
 *  SANATAN SHIV SHAKTI — CONTENT (composer)
 * ============================================================================
 *
 *  All site content is split into one file per domain in this folder. This
 *  file simply assembles them into a single `siteContent` object — you rarely
 *  need to edit it. To change the website, open the matching file:
 *
 *    site.ts          — name, tagline, description, domain (SEO defaults)
 *    contact.ts       — address, phone, email, map, social links
 *    hero.ts          — home hero
 *    about.ts         — story, vision, mission, values, objectives, stats
 *    activities.ts    — the nine activities
 *    weekly-activity.ts — the Tuesday temple satsang
 *    events.ts        — upcoming & past events
 *    gallery.ts       — gallery photos/videos + categories
 *    certificates.ts  — registrations (active: true to show)
 *    members.ts       — team members
 *    testimonials.ts  — community voices
 *    announcements.ts — top banner (active: true to show)
 *    donation.ts      — donation details (enabled: true to show)
 *    faqs.ts          — FAQ + structured data
 *    interest-areas.ts— Join-form interest options
 *
 *  TEXT: plain string (all languages) or { en, hi, bn }.
 *  IMAGES: "/images/x.jpg" (real file in /public/images) or "ph:seed"
 *          (renders a branded saffron placeholder tile).
 * ============================================================================
 */
export const siteContent: SiteContent = {
  site,
  contact,
  hero,
  about,
  activities,
  weeklyActivity,
  events,
  gallery,
  galleryCategories,
  certificates,
  members,
  otherMembers,
  testimonials,
  announcements,
  donation,
  faqs,
  interestAreas,
};

export default siteContent;
