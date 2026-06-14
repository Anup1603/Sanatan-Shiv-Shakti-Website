import type { SiteMeta } from "@/types/content";

/**
 * Site identity & SEO defaults.
 * ⚠️ Set `url` to your real production domain before launch.
 */
export const site: SiteMeta = {
  name: {
    en: "Sanatan Shiv Shakti",
    hi: "सनातन शिव शक्ति",
    bn: "সনাতন শিব শক্তি",
  },
  shortName: "Sanatan Shiv Shakti",
  tagline: {
    en: "Seva · Sanskar · Sanskriti",
    hi: "सेवा · संस्कार · संस्कृति",
    bn: "সেবা · সংস্কার · সংস্কৃতি",
  },
  description: {
    en: "Sanatan Shiv Shakti is a non-political spiritual and charitable organization founded by the youth of Ward 35, Howrah, West Bengal. We promote Sanatan Dharma values through Bhajan Kirtan, Sundar Kand, Ramayan & Geeta Path, Gau Seva, food distribution, charity and youth development programs.",
    hi: "सनातन शिव शक्ति हावड़ा, पश्चिम बंगाल के वार्ड 35 के युवाओं द्वारा स्थापित एक गैर-राजनीतिक आध्यात्मिक एवं सेवाभावी संगठन है। हम भजन-कीर्तन, सुंदरकांड, रामायण एवं गीता पाठ, गौ सेवा, अन्न वितरण, दान एवं युवा विकास कार्यक्रमों के माध्यम से सनातन धर्म के मूल्यों का प्रचार करते हैं।",
    bn: "সনাতন শিব শক্তি হল হাওড়া, পশ্চিমবঙ্গের ওয়ার্ড ৩৫-এর যুবকদের দ্বারা প্রতিষ্ঠিত একটি অরাজনৈতিক আধ্যাত্মিক ও সেবামূলক সংগঠন। আমরা ভজন-কীর্তন, সুন্দরকাণ্ড, রামায়ণ ও গীতা পাঠ, গো সেবা, অন্ন বিতরণ, দান ও যুব উন্নয়ন কর্মসূচির মাধ্যমে সনাতন ধর্মের মূল্যবোধ প্রচার করি।",
  },
  url: "https://www.sanatanshivshakti.org",
  ogImage: "/opengraph-image",
  foundingYear: "2023",
  establishedLocation: {
    en: "Ward No. 35, Howrah City, West Bengal, India",
    hi: "वार्ड नं. 35, हावड़ा शहर, पश्चिम बंगाल, भारत",
    bn: "ওয়ার্ড নং ৩৫, হাওড়া শহর, পশ্চিমবঙ্গ, ভারত",
  },
  // Site designer/developer credit shown in the footer.
  // ⚠️ Replace linkedinUrl with your real LinkedIn profile URL.
  credit: {
    name: "Anup Shaw (Member)",
    linkedinUrl: "https://www.linkedin.com/in/anup-kumar-shaw-538a16214/",
  },
};
