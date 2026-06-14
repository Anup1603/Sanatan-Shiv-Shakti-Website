import type { GalleryCategory, GalleryItem } from "@/types/content";

/** Categories shown as filter pills on the Gallery page ("all" must stay first). */
export const galleryCategories: GalleryCategory[] = [
  { key: "all", label: { en: "All", hi: "सभी", bn: "সব" } },
  { key: "puja", label: { en: "Puja", hi: "पूजा", bn: "পূজা" } },
  {
    key: "bhajan-kirtan",
    label: { en: "Bhajan Kirtan", hi: "भजन कीर्तन", bn: "ভজন কীর্তন" },
  },
  {
    key: "sundar-kand",
    label: { en: "Sundar Kand", hi: "सुंदरकांड", bn: "সুন্দরকাণ্ড" },
  },
  {
    key: "ramayan-path",
    label: { en: "Ramayan Path", hi: "रामायण पाठ", bn: "রামায়ণ পাঠ" },
  },
  {
    key: "food-distribution",
    label: { en: "Food Distribution", hi: "अन्न वितरण", bn: "অন্ন বিতরণ" },
  },
  { key: "gau-seva", label: { en: "Gau Seva", hi: "गौ सेवा", bn: "গো সেবা" } },
  {
    key: "community",
    label: {
      en: "Community Events",
      hi: "सामुदायिक कार्यक्रम",
      bn: "সামাজিক অনুষ্ঠান",
    },
  },
];

/**
 * Gallery items. `type: "photo" | "video"`. For videos, set `embedUrl`
 * (YouTube /embed/...) and use `thumbnail` for the preview tile.
 */
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    type: "photo",
    category: "puja",
    featured: true,
    src: "/images/temple-1.jpg",
    alt: {
      en: "Tuesday Hanuman Ji Puja",
      hi: "मंगलवार हनुमान जी पूजा",
      bn: "মঙ্গলবার হনুমান জী পূজা",
    },
    title: { en: "Tuesday Puja", hi: "मंगलवार पूजा", bn: "মঙ্গলবার পূজা" },
  },
  {
    id: "g2",
    type: "photo",
    category: "bhajan-kirtan",
    featured: true,
    src: "/images/bhajan-kirtan.jpg",
    alt: {
      en: "Bhajan Kirtan evening",
      hi: "भजन कीर्तन संध्या",
      bn: "ভজন কীর্তন সন্ধ্যা",
    },
    title: { en: "Bhajan Sandhya", hi: "भजन संध्या", bn: "ভজন সন্ধ্যা" },
  },
  {
    id: "g3",
    type: "photo",
    category: "sundar-kand",
    featured: true,
    src: "/images/sundar-kand.jpg",
    alt: {
      en: "Sundar Kand Path gathering",
      hi: "सुंदरकांड पाठ सत्संग",
      bn: "সুন্দরকাণ্ড পাঠ আসর",
    },
    title: { en: "Sundar Kand", hi: "सुंदरकांड", bn: "সুন্দরকাণ্ড" },
  },
  {
    id: "g4",
    type: "photo",
    category: "food-distribution",
    featured: true,
    src: "/images/food-distribution.jpg",
    alt: {
      en: "Food distribution drive",
      hi: "अन्न वितरण अभियान",
      bn: "অন্ন বিতরণ কর্মসূচি",
    },
    title: { en: "Annadaan", hi: "अन्नदान", bn: "অন্নদান" },
  },
  {
    id: "g5",
    type: "photo",
    category: "gau-seva",
    featured: true,
    src: "/images/gau-seva.jpg",
    alt: {
      en: "Gau Seva activity",
      hi: "गौ सेवा गतिविधि",
      bn: "গো সেবা কার্যক্রম",
    },
    title: { en: "Gau Seva", hi: "गौ सेवा", bn: "গো সেবা" },
  },
  {
    id: "g6",
    type: "photo",
    category: "community",
    featured: true,
    src: "/images/youth.jpg",
    alt: {
      en: "Community gathering",
      hi: "सामुदायिक सत्संग",
      bn: "সামাজিক সমাবেশ",
    },
    title: { en: "Community", hi: "समुदाय", bn: "সম্প্রদায়" },
  },
  {
    id: "g7",
    type: "photo",
    category: "ramayan-path",
    featured: true,
    src: "/images/ramayan.jpg",
    alt: { en: "Ramayan Path", hi: "रामायण पाठ", bn: "রামায়ণ পাঠ" },
    title: { en: "Ramayan Path", hi: "रामायण पाठ", bn: "রামায়ণ পাঠ" },
  },
  {
    id: "g8",
    type: "video",
    category: "bhajan-kirtan",
    featured: true,
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/bhajan-kirtan.jpg",
    alt: {
      en: "Bhajan Kirtan video",
      hi: "भजन कीर्तन वीडियो",
      bn: "ভজন কীর্তন ভিডিও",
    },
    title: { en: "Kirtan Highlights", hi: "कीर्तन झलकियाँ", bn: "কীর্তন ঝলক" },
  },
  {
    id: "g9",
    type: "photo",
    category: "puja",
    src: "/images/temple-2.jpg",
    alt: { en: "Aarti at temple", hi: "मंदिर में आरती", bn: "মন্দিরে আরতি" },
    title: { en: "Sandhya Aarti", hi: "संध्या आरती", bn: "সন্ধ্যা আরতি" },
  },
  {
    id: "g10",
    type: "photo",
    category: "community",
    src: "/images/social-service.jpg",
    alt: {
      en: "Youth volunteers",
      hi: "युवा स्वयंसेवक",
      bn: "যুব স্বেচ্ছাসেবক",
    },
    title: {
      en: "Our Volunteers",
      hi: "हमारे स्वयंसेवक",
      bn: "আমাদের স্বেচ্ছাসেবক",
    },
  },
  {
    id: "g11",
    type: "photo",
    category: "food-distribution",
    src: "/images/temple-3.jpg",
    alt: { en: "Prasad distribution", hi: "प्रसाद वितरण", bn: "প্রসাদ বিতরণ" },
    title: { en: "Prasad Seva", hi: "प्रसाद सेवा", bn: "প্রসাদ সেবা" },
  },
  {
    id: "g12",
    type: "photo",
    category: "gau-seva",
    src: "/images/gau-seva.jpg",
    alt: { en: "Feeding cows", hi: "गायों को चारा", bn: "গরুদের খাওয়ানো" },
    title: { en: "Gau Seva", hi: "गौ सेवा", bn: "গো সেবা" },
  },
];
