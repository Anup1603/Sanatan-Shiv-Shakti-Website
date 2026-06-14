import type { WeeklyActivity } from "@/types/content";

/** The weekly Tuesday temple satsang highlighted on the home page. */
export const weeklyActivity: WeeklyActivity = {
  day: { en: "Every Tuesday", hi: "हर मंगलवार", bn: "প্রতি মঙ্গলবার" },
  title: {
    en: "Hanuman Ji Puja, Archana & Bhajan Kirtan",
    hi: "हनुमान जी पूजा, अर्चना एवं भजन कीर्तन",
    bn: "হনুমান জী পূজা, অর্চনা ও ভজন কীর্তন",
  },
  templeName: { en: "Ram Janki Mandir", hi: "राम जानकी मंदिर", bn: "রাম জানকী মন্দির" },
  addressLines: [
    { en: "R.N.R.C Ghar Road", hi: "आर.एन.आर.सी घर रोड", bn: "আর.এন.আর.সি ঘর রোড" },
    { en: "Shibpur, Howrah", hi: "शिबपुर, हावड़ा", bn: "শিবপুর, হাওড়া" },
    { en: "West Bengal", hi: "पश्चिम बंगाल", bn: "পশ্চিমবঙ্গ" },
  ],
  timing: { en: "6:00 PM onwards", hi: "शाम 6:00 बजे से", bn: "সন্ধ্যা ৬:০০ থেকে" },
  description: {
    en: "Every Tuesday, devotees gather at Ram Janki Mandir for the weekly Hanuman Ji Puja and Archana, followed by soulful Bhajan Kirtan. It is the spiritual centre of our community — open to all, regardless of background. Come early, sing along, and share in the prasad.",
    hi: "हर मंगलवार, भक्त राम जानकी मंदिर में साप्ताहिक हनुमान जी पूजा और अर्चना के लिए एकत्र होते हैं, जिसके बाद भावपूर्ण भजन कीर्तन होता है। यह हमारे समुदाय का आध्यात्मिक केंद्र है — पृष्ठभूमि की परवाह किए बिना सभी के लिए खुला। जल्दी आएँ, साथ गाएँ और प्रसाद ग्रहण करें।",
    bn: "প্রতি মঙ্গলবার ভক্তরা রাম জানকী মন্দিরে সাপ্তাহিক হনুমান জী পূজা ও অর্চনার জন্য একত্রিত হন, এরপর হয় ভাবগম্ভীর ভজন কীর্তন। এটি আমাদের সম্প্রদায়ের আধ্যাত্মিক কেন্দ্র — পটভূমি নির্বিশেষে সকলের জন্য উন্মুক্ত। তাড়াতাড়ি আসুন, সঙ্গে গান গান এবং প্রসাদ গ্রহণ করুন।",
  },
  images: [
    { src: "/images/temple-1.jpg", alt: { en: "Hanuman Ji Puja at Ram Janki Mandir", hi: "राम जानकी मंदिर में हनुमान जी पूजा", bn: "রাম জানকী মন্দিরে হনুমান জী পূজা" } },
    { src: "/images/temple-2.jpg", alt: { en: "Tuesday Bhajan Kirtan", hi: "मंगलवार भजन कीर्तन", bn: "মঙ্গলবার ভজন কীর্তন" } },
    { src: "/images/temple-3.jpg", alt: { en: "Devotees at the temple", hi: "मंदिर में भक्त", bn: "মন্দিরে ভক্তরা" } },
  ],
};
