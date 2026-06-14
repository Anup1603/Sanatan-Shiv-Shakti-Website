import type { HeroContent } from "@/types/content";

/** Home-page hero section. */
export const hero: HeroContent = {
  badge: {
    en: "Non-political · Youth-led · Howrah",
    hi: "गैर-राजनीतिक · युवा-नेतृत्व · हावड़ा",
    bn: "অরাজনৈতিক · যুব-নেতৃত্বাধীন · হাওড়া",
  },
  title: {
    en: "Sanatan Shiv Shakti",
    hi: "सनातन शिव शक्ति",
    bn: "সনাতন শিব শক্তি",
  },
  tagline: {
    en: "Seva · Sanskar · Sanskriti",
    hi: "सेवा · संस्कार · संस्कृति",
    bn: "সেবা · সংস্কার · সংস্কৃতি",
  },
  mission: {
    en: "A non-political, youth-led spiritual and charitable organization from Ward 35, Howrah — serving society through devotion, culture and selfless service.",
    hi: "वार्ड 35, हावड़ा के युवाओं द्वारा संचालित एक गैर-राजनीतिक आध्यात्मिक एवं सेवाभावी संगठन — भक्ति, संस्कृति और निःस्वार्थ सेवा के माध्यम से समाज की सेवा को समर्पित।",
    bn: "ওয়ার্ড ৩৫, হাওড়ার যুবকদের দ্বারা পরিচালিত একটি অরাজনৈতিক আধ্যাত্মিক ও সেবামূলক সংগঠন — ভক্তি, সংস্কৃতি ও নিঃস্বার্থ সেবার মাধ্যমে সমাজের সেবায় নিবেদিত।",
  },
  backgroundImage: "/images/hero-temple.jpg",
  ctas: [
    {
      label: { en: "Join Us", hi: "हमसे जुड़ें", bn: "যুক্ত হোন" },
      href: "/join",
      variant: "primary",
    },
    {
      label: {
        en: "Upcoming Events",
        hi: "आगामी कार्यक्रम",
        bn: "আসন্ন অনুষ্ঠান",
      },
      href: "/events",
      variant: "secondary",
    },
    {
      label: { en: "Contact Us", hi: "संपर्क करें", bn: "যোগাযোগ" },
      href: "/contact",
      variant: "outline",
    },
  ],
};
