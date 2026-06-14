import type { InterestArea } from "@/types/content";

/** Options shown in the "Area of Interest" dropdown on the Join Us form. */
export const interestAreas: InterestArea[] = [
  {
    value: "bhajan-kirtan",
    label: { en: "Bhajan Kirtan", hi: "भजन कीर्तन", bn: "ভজন কীর্তন" },
  },
  {
    value: "sundar-kand",
    label: {
      en: "Sundar Kand / Path",
      hi: "सुंदरकांड / पाठ",
      bn: "সুন্দরকাণ্ড / পাঠ",
    },
  },
  {
    value: "gau-seva",
    label: { en: "Gau Seva", hi: "गौ सेवा", bn: "গো সেবা" },
  },
  {
    value: "food-distribution",
    label: { en: "Food Distribution", hi: "अन्न वितरण", bn: "অন্ন বিতরণ" },
  },
  {
    value: "charity",
    label: {
      en: "Charity & Welfare",
      hi: "दान एवं कल्याण",
      bn: "দান ও কল্যাণ",
    },
  },
  {
    value: "youth-development",
    label: { en: "Youth Development", hi: "युवा विकास", bn: "যুব উন্নয়ন" },
  },
  {
    value: "events",
    label: {
      en: "Event Organizing",
      hi: "कार्यक्रम आयोजन",
      bn: "অনুষ্ঠান আয়োজন",
    },
  },
  {
    value: "any",
    label: {
      en: "Wherever I am needed",
      hi: "जहाँ भी आवश्यकता हो",
      bn: "যেখানেই প্রয়োজন",
    },
  },
];
