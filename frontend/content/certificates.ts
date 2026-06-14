import type { Certificate } from "@/types/content";

/**
 * Certificates & registrations. Only entries with `active: true` are shown
 * anywhere on the site. ⚠️ Set active + add a real image/PDF once available.
 */
export const certificates: Certificate[] = [
  {
    id: "cert-registration",
    active: false,
    title: {
      en: "Organization Registration",
      hi: "संगठन पंजीकरण",
      bn: "সংগঠন নিবন্ধন",
    },
    description: {
      en: "Official registration certificate of Sanatan Shiv Shakti.",
      hi: "सनातन शिव शक्ति का आधिकारिक पंजीकरण प्रमाणपत्र।",
      bn: "সনাতন শিব শক্তির আনুষ্ঠানিক নিবন্ধন শংসাপত্র।",
    },
    issuer: {
      en: "Government of West Bengal",
      hi: "पश्चिम बंगाल सरकार",
      bn: "পশ্চিমবঙ্গ সরকার",
    },
    issuedDate: "2023-01-01",
    image: "ph:certificate-1",
    pdf: "",
  },
];
