import type { OrgEvent } from "@/types/content";

/**
 * Events. `status: "upcoming" | "past"`. Upcoming events auto-sort soonest-first
 * and show on the home page; both show on /events with Event structured data.
 */
export const events: OrgEvent[] = [
  {
    id: "evt-sundarkand-2026-06-16",
    slug: "sundar-kand-2026-06-16",
    status: "upcoming",
    featured: true,
    title: {
      en: "Hanuman Ji's Sundar Kand Path",
      hi: "हनुमान जी का सुंदरकांड पाठ",
      bn: "হনুমান জীর সুন্দরকাণ্ড পাঠ",
    },
    date: "2026-06-16",
    time: { en: "4:00 PM", hi: "शाम 4:00 बजे", bn: "বিকাল ৪:০০" },
    location: {
      en: "Ram Janki Mandir, Shibpur, Howrah",
      hi: "राम जानकी मंदिर, शिबपुर, हावड़ा",
      bn: "রাম জানকী মন্দির, শিবপুর, হাওড়া",
    },
    description: {
      en: "Join us this Tuesday for a collective recitation of Hanuman Ji's Sundar Kand at Ram Janki Mandir, followed by aarti and prasad. All devotees are warmly welcome.",
      hi: "इस मंगलवार राम जानकी मंदिर में हनुमान जी के सुंदरकांड के सामूहिक पाठ में शामिल हों, जिसके बाद आरती और प्रसाद होगा। सभी भक्तों का हार्दिक स्वागत है।",
      bn: "এই মঙ্গলবার রাম জানকী মন্দিরে হনুমান জীর সুন্দরকাণ্ডের সম্মিলিত পাঠে যোগ দিন, এরপর হবে আরতি ও প্রসাদ। সকল ভক্তকে সাদর আমন্ত্রণ।",
    },
    images: [{ src: "/images/sundar-kand.jpg", alt: { en: "Hanuman Ji Sundar Kand Path", hi: "हनुमान जी सुंदरकांड पाठ", bn: "হনুমান জী সুন্দরকাণ্ড পাঠ" } }],
  },
  {
    id: "evt-hanuman-jayanti-2026",
    slug: "hanuman-jayanti-2026",
    status: "upcoming",
    featured: true,
    title: { en: "Hanuman Jayanti Mahotsav", hi: "हनुमान जयंती महोत्सव", bn: "হনুমান জয়ন্তী মহোৎসব" },
    date: "",
    time: { en: "5:00 PM onwards", hi: "शाम 5:00 बजे से", bn: "সন্ধ্যা ৫:০০ থেকে" },
    location: { en: "Ram Janki Mandir, Shibpur, Howrah", hi: "राम जानकी मंदिर, शिबपुर, हावड़ा", bn: "রাম জানকী মন্দির, শিবপুর, হাওড়া" },
    description: {
      en: "A grand celebration of Hanuman Jayanti with special puja, Sundar Kand Path, Bhajan Kirtan and mahaprasad distribution for the entire community.",
      hi: "हनुमान जयंती का भव्य उत्सव — विशेष पूजा, सुंदरकांड पाठ, भजन कीर्तन और पूरे समुदाय के लिए महाप्रसाद वितरण के साथ।",
      bn: "হনুমান জয়ন্তীর বিশেষ পূজা, সুন্দরকাণ্ড পাঠ, ভজন কীর্তন ও সমগ্র সম্প্রদায়ের জন্য মহাপ্রসাদ বিতরণসহ এক বিশাল উদযাপন।",
    },
    images: [{ src: "/images/event-hanuman.jpg", alt: { en: "Hanuman Jayanti celebration", hi: "हनुमान जयंती उत्सव", bn: "হনুমান জয়ন্তী উদযাপন" } }],
  },
  {
    id: "evt-annadaan-2026",
    slug: "annadaan-seva-2026",
    status: "upcoming",
    title: { en: "Annadaan Seva (Food Distribution)", hi: "अन्नदान सेवा", bn: "অন্নদান সেবা" },
    date: "",
    time: { en: "11:00 AM", hi: "सुबह 11:00 बजे", bn: "সকাল ১১:০০" },
    location: { en: "Bagdi Para, Shibpur, Howrah", hi: "बागदी पारा, शिबपुर, हावड़ा", bn: "বাগদী পাড়া, শিবপুর, হাওড়া" },
    description: {
      en: "A special food distribution drive serving fresh, wholesome meals to the underprivileged in our locality on Independence Day.",
      hi: "स्वतंत्रता दिवस पर हमारे क्षेत्र के वंचितों को ताज़ा, पौष्टिक भोजन परोसने का विशेष अन्न वितरण अभियान।",
      bn: "স্বাধীনতা দিবসে আমাদের এলাকার সুবিধাবঞ্চিতদের তাজা, পুষ্টিকর খাবার পরিবেশনের বিশেষ অন্ন বিতরণ কর্মসূচি।",
    },
    images: [{ src: "/images/food-distribution.jpg", alt: { en: "Annadaan Seva", hi: "अन्नदान सेवा", bn: "অন্নদান সেবা" } }],
  },
  {
    // EXAMPLE of a date-less upcoming event — shows "Coming Soon" in the UI.
    // Add a `date` (and `time`) once confirmed, or delete this entry.
    id: "evt-community-bhandara",
    slug: "community-bhandara",
    status: "upcoming",
    title: {
      en: "Community Bhandara (Maha Prasad)",
      hi: "सामुदायिक भंडारा (महाप्रसाद)",
      bn: "সামাজিক ভাণ্ডারা (মহাপ্রসাদ)",
    },
    // no `date` and no `time` — both are optional
    time: { en: "", hi: "", bn: "" },
    location: { en: "Shibpur, Howrah", hi: "शिबपुर, हावड़ा", bn: "শিবপুর, হাওড়া" },
    description: {
      en: "A community Maha Prasad and Bhandara is being planned. The date will be announced soon — stay tuned!",
      hi: "एक सामुदायिक महाप्रसाद और भंडारे की योजना बनाई जा रही है। तिथि शीघ्र ही घोषित की जाएगी — जुड़े रहें!",
      bn: "একটি সামাজিক মহাপ্রসাদ ও ভাণ্ডারার পরিকল্পনা চলছে। তারিখ শীঘ্রই ঘোষণা করা হবে — সঙ্গে থাকুন!",
    },
    images: [{ src: "/images/food-distribution.jpg", alt: { en: "Community Bhandara", hi: "सामुदायिक भंडारा", bn: "সামাজিক ভাণ্ডারা" } }],
  },
  {
    id: "evt-sundarkand-2026",
    slug: "grand-sundar-kand-2026",
    status: "past",
    title: { en: "Grand Sundar Kand Path", hi: "विशाल सुंदरकांड पाठ", bn: "বিশাল সুন্দরকাণ্ড পাঠ" },
    date: "2026-04-12",
    time: { en: "6:00 PM", hi: "शाम 6:00 बजे", bn: "সন্ধ্যা ৬:০০" },
    location: { en: "Ram Janki Mandir, Shibpur, Howrah", hi: "राम जानकी मंदिर, शिबपुर, हावड़ा", bn: "রাম জানকী মন্দির, শিবপুর, হাওড়া" },
    description: {
      en: "Hundreds of devotees joined our grand collective Sundar Kand Path, followed by aarti and prasad. A truly uplifting evening of devotion.",
      hi: "सैकड़ों भक्तों ने हमारे विशाल सामूहिक सुंदरकांड पाठ में भाग लिया, जिसके बाद आरती और प्रसाद हुआ। भक्ति की एक सच्ची उत्थानकारी संध्या।",
      bn: "শত শত ভক্ত আমাদের বিশাল সম্মিলিত সুন্দরকাণ্ড পাঠে যোগ দেন, এরপর হয় আরতি ও প্রসাদ। ভক্তিতে ভরা এক সত্যিকারের উদ্দীপক সন্ধ্যা।",
    },
    images: [{ src: "/images/sundar-kand.jpg", alt: { en: "Grand Sundar Kand Path", hi: "विशाल सुंदरकांड पाठ", bn: "বিশাল সুন্দরকাণ্ড পাঠ" } }],
  },
  {
    id: "evt-winter-charity-2025",
    slug: "winter-blanket-drive-2025",
    status: "past",
    title: { en: "Winter Blanket Distribution", hi: "शीतकालीन कंबल वितरण", bn: "শীতকালীন কম্বল বিতরণ" },
    date: "2025-12-25",
    time: { en: "10:00 AM", hi: "सुबह 10:00 बजे", bn: "সকাল ১০:০০" },
    location: { en: "Shibpur, Howrah", hi: "शिबपुर, हावड़ा", bn: "শিবপুর, হাওড়া" },
    description: {
      en: "Our volunteers distributed warm blankets to homeless and needy families during the peak of winter — warmth shared with compassion.",
      hi: "हमारे स्वयंसेवकों ने कड़ाके की सर्दी में बेघर और ज़रूरतमंद परिवारों को गर्म कंबल वितरित किए — करुणा के साथ बांटी गई गर्माहट।",
      bn: "আমাদের স্বেচ্ছাসেবকরা কনকনে শীতে গৃহহীন ও দুঃস্থ পরিবারগুলিকে গরম কম্বল বিতরণ করেন — করুণার সঙ্গে ভাগ করা উষ্ণতা।",
    },
    images: [{ src: "/images/charity.jpg", alt: { en: "Winter blanket distribution", hi: "शीतकालीन कंबल वितरण", bn: "শীতকালীন কম্বল বিতরণ" } }],
  },
];
