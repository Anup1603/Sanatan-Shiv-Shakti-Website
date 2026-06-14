/**
 * Content type definitions for the Sanatan Shiv Shakti website.
 *
 * Everything the site renders is described here and filled in
 * `content/site-content.ts`. Editing the website = editing that one file.
 *
 * Any user-facing string can be either:
 *   - a plain string  ->  "Bhajan Kirtan"   (shown in every language)
 *   - a localized map  ->  { en: "...", hi: "...", bn: "..." }
 */

export type LocalizedText =
  | string
  | {
      en: string;
      hi?: string;
      bn?: string;
    };

export interface SocialLink {
  platform:
    | "facebook"
    | "instagram"
    | "youtube"
    | "whatsapp"
    | "twitter"
    | "linkedin";
  url: string;
  label?: string;
}

export interface CtaButton {
  label: LocalizedText;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface SiteMeta {
  name: LocalizedText;
  shortName: string;
  tagline: LocalizedText;
  description: LocalizedText;
  /** Absolute production URL, no trailing slash. Used for SEO + sitemap. */
  url: string;
  /** Path to the default social-share image (relative to /public). */
  ogImage: string;
  foundingYear: string;
  establishedLocation: LocalizedText;
  /** Credit for the person who designed & developed the site (shown in footer). */
  credit?: { name: string; linkedinUrl?: string };
}

export interface ContactInfo {
  organizationName: LocalizedText;
  addressLines: LocalizedText[];
  pincode: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  mapsEmbedUrl: string;
  mapsLink: string;
  socials: SocialLink[];
  officeHours?: LocalizedText;
}

export interface HeroContent {
  badge?: LocalizedText;
  title: LocalizedText;
  tagline: LocalizedText;
  mission: LocalizedText;
  backgroundImage: string;
  ctas: CtaButton[];
}

export interface ValueItem {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface StatItem {
  value: string;
  label: LocalizedText;
}

export interface AboutContent {
  story: LocalizedText[];
  vision: LocalizedText;
  mission: LocalizedText;
  objectives: LocalizedText[];
  values: ValueItem[];
  whyJoin: LocalizedText[];
  culturalValues: LocalizedText;
  communityImpact: LocalizedText;
  stats: StatItem[];
}

export interface Activity {
  slug: string;
  icon: string;
  category: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  benefits: LocalizedText[];
  images: ImageAsset[];
  featured?: boolean;
}

export interface ImageAsset {
  src: string;
  alt: LocalizedText;
  width?: number;
  height?: number;
}

export interface WeeklyActivity {
  day: LocalizedText;
  title: LocalizedText;
  templeName: LocalizedText;
  addressLines: LocalizedText[];
  timing: LocalizedText;
  description: LocalizedText;
  images: ImageAsset[];
}

export type EventStatus = "upcoming" | "past";

export interface OrgEvent {
  id: string;
  slug: string;
  title: LocalizedText;
  /** ISO date e.g. "2026-07-12". OPTIONAL — events without a date show "Coming Soon". */
  date?: string;
  endDate?: string;
  time: LocalizedText;
  location: LocalizedText;
  locationAddress?: LocalizedText;
  status: EventStatus;
  featured?: boolean;
  description: LocalizedText;
  images: ImageAsset[];
  videos?: VideoAsset[];
}

export interface VideoAsset {
  /** YouTube/Vimeo URL or local mp4 path. */
  url: string;
  /** Embed URL for iframe (YouTube /embed/...). Optional for local files. */
  embedUrl?: string;
  thumbnail: string;
  title: LocalizedText;
}

export type GalleryType = "photo" | "video";

export interface GalleryItem {
  id: string;
  type: GalleryType;
  category: string;
  title: LocalizedText;
  src: string;
  thumbnail?: string;
  embedUrl?: string;
  alt: LocalizedText;
  featured?: boolean;
}

export interface GalleryCategory {
  key: string;
  label: LocalizedText;
}

export interface Certificate {
  id: string;
  active: boolean;
  title: LocalizedText;
  description: LocalizedText;
  issuer?: LocalizedText;
  issuedDate?: string;
  image: string;
  pdf?: string;
}

export interface Member {
  id: string;
  name: string;
  designation: LocalizedText;
  photo?: string;
  order: number;
  socials?: SocialLink[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedText;
  message: LocalizedText;
  image?: string;
  rating?: number;
}

export interface Announcement {
  id: string;
  active: boolean;
  title: LocalizedText;
  message: LocalizedText;
  date: string;
  link?: { label: LocalizedText; href: string };
}

export interface DonationInfo {
  enabled: boolean;
  title: LocalizedText;
  description: LocalizedText;
  upiId?: string;
  qrImage?: string;
  accountName?: string;
  accountNumber?: string;
  ifsc?: string;
  bankName?: string;
  note?: LocalizedText;
}

export interface Faq {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface InterestArea {
  value: string;
  label: LocalizedText;
}

export interface SiteContent {
  site: SiteMeta;
  contact: ContactInfo;
  hero: HeroContent;
  about: AboutContent;
  activities: Activity[];
  weeklyActivity: WeeklyActivity;
  events: OrgEvent[];
  gallery: GalleryItem[];
  galleryCategories: GalleryCategory[];
  certificates: Certificate[];
  members: Member[];
  /** Extra member names (no photo) shown under the main Members grid. */
  otherMembers: string[];
  testimonials: Testimonial[];
  announcements: Announcement[];
  donation: DonationInfo;
  faqs: Faq[];
  interestAreas: InterestArea[];
}
