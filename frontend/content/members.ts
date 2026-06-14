import type { Member } from "@/types/content";

/**
 * Team / committee members. An empty array hides the Members section.
 * ⚠️ Replace "Member Name" with real names; add real photos (e.g. "/images/members/name.jpg").
 * Member photos intentionally stay as branded placeholders until real ones are added.
 */
export const members: Member[] = [
  {
    id: "m1",
    name: "Member Name",
    designation: {
      en: "Founder & President",
      hi: "संस्थापक एवं अध्यक्ष",
      bn: "প্রতিষ্ঠাতা ও সভাপতি",
    },
    order: 1,
    photo: "ph:member-1",
    socials: [],
  },
  {
    id: "m2",
    name: "Member Name",
    designation: { en: "Vice President", hi: "उपाध्यक्ष", bn: "সহ-সভাপতি" },
    order: 2,
    photo: "ph:member-2",
    socials: [],
  },
  {
    id: "m3",
    name: "Member Name",
    designation: { en: "Secretary", hi: "सचिव", bn: "সম্পাদক" },
    order: 3,
    photo: "ph:member-3",
    socials: [],
  },
  {
    id: "m4",
    name: "Member Name",
    designation: { en: "Treasurer", hi: "कोषाध्यक्ष", bn: "কোষাধ্যক্ষ" },
    order: 4,
    photo: "ph:member-4",
    socials: [],
  },
  {
    id: "m5",
    name: "Member Name",
    designation: {
      en: "Cultural Head",
      hi: "सांस्कृतिक प्रमुख",
      bn: "সাংস্কৃতিক প্রধান",
    },
    order: 5,
    photo: "ph:member-5",
    socials: [],
  },
  {
    id: "m6",
    name: "Member Name",
    designation: {
      en: "Seva Coordinator",
      hi: "सेवा समन्वयक",
      bn: "সেবা সমন্বয়ক",
    },
    order: 6,
    photo: "ph:member-6",
    socials: [],
  },
];

/**
 * Additional member names (no photos) shown in the "Other Members" block
 * below the main members grid. Add as many names as you like.
 */
export const otherMembers: string[] = [
  "Member Name",
  "Member Name",
  "Member Name",
  "Member Name",
  "Member Name",
  "Member Name",
  "Member Name",
  "Member Name",
];
