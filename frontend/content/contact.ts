import type { ContactInfo } from "@/types/content";

/**
 * Contact details, office address, map & social links.
 * ⚠️ Replace phone / phoneDisplay / whatsapp / email and the social URLs.
 */
export const contact: ContactInfo = {
  organizationName: {
    en: "Sanatan Shiv Shakti",
    hi: "सनातन शिव शक्ति",
    bn: "সনাতন শিব শক্তি",
  },
  addressLines: [
    "Ram Janki Mandir, RNRC Ghat Rd, Choura Bustee, Shibpur, Howrah, West Bengal 711102",
  ],
  pincode: "711102",
  phone: "+919830000000", // ⚠️ placeholder — replace with real number
  phoneDisplay: "+91 98300 00000", // ⚠️ placeholder
  whatsapp: "919830000000", // ⚠️ placeholder (country code + number, no +)
  email: "sanatanshivshakti.howrah@gmail.com", // ⚠️ placeholder
  // Map points to the temple/office location (Ram Janki Mandir).
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Ram+Janki+Mandir,+RNRC+Ghat+Rd,+Choura+Bustee,+Shibpur,+Howrah,+West+Bengal+711102&output=embed",
  mapsLink:
    "https://maps.google.com/?q=Ram+Janki+Mandir,+RNRC+Ghat+Rd,+Choura+Bustee,+Shibpur,+Howrah,+West+Bengal+711102",
  officeHours: {
    en: "Open to all devotees · Weekly Satsang every Tuesday from 6:00 PM",
    hi: "सभी भक्तों के लिए खुला · प्रत्येक मंगलवार शाम 6:00 बजे से साप्ताहिक सत्संग",
    bn: "সকল ভক্তের জন্য উন্মুক্ত · প্রতি মঙ্গলবার সন্ধ্যা ৬টা থেকে সাপ্তাহিক সৎসঙ্গ",
  },
  socials: [
    {
      platform: "facebook",
      url: "https://www.facebook.com",
      label: "Facebook",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com",
      label: "Instagram",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com",
      label: "YouTube",
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/919830000000", // ⚠️ placeholder (country code + number, no +)
      label: "WhatsApp",
    },
  ],
};
