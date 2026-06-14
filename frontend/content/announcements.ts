import type { Announcement } from "@/types/content";

/** Top-banner announcements. Only `active: true` entries show; newest first. */
export const announcements: Announcement[] = [
  {
    id: "a1",
    active: true,
    date: "2026-06-01",
    title: {
      en: "Weekly Satsang",
      hi: "साप्ताहिक सत्संग",
      bn: "সাপ্তাহিক সৎসঙ্গ",
    },
    message: {
      en: "Join us every Tuesday at 6:00 PM for Hanuman Ji Puja & Bhajan Kirtan at Ram Janki Mandir, Shibpur.",
      hi: "हर मंगलवार शाम 6:00 बजे राम जानकी मंदिर, शिबपुर में हनुमान जी पूजा एवं भजन कीर्तन में शामिल हों।",
      bn: "প্রতি মঙ্গলবার সন্ধ্যা ৬টায় রাম জানকী মন্দির, শিবপুরে হনুমান জী পূজা ও ভজন কীর্তনে যোগ দিন।",
    },
    link: {
      label: {
        en: "See Activities",
        hi: "गतिविधियाँ देखें",
        bn: "কার্যক্রম দেখুন",
      },
      href: "/activities",
    },
  },
];
