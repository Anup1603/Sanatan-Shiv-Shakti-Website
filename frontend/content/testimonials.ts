import type { Testimonial } from "@/types/content";

/** Community testimonials. Empty array hides the section. */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Devotee",
    role: { en: "Community Member", hi: "समुदाय सदस्य", bn: "সম্প্রদায় সদস্য" },
    rating: 5,
    message: {
      en: "The Tuesday Bhajan Kirtan gives me peace I cannot find anywhere else. These young volunteers are doing wonderful work for our community.",
      hi: "मंगलवार का भजन कीर्तन मुझे ऐसी शांति देता है जो मुझे कहीं और नहीं मिलती। ये युवा स्वयंसेवक हमारे समुदाय के लिए अद्भुत कार्य कर रहे हैं।",
      bn: "মঙ্গলবারের ভজন কীর্তন আমাকে এমন শান্তি দেয় যা আর কোথাও পাই না। এই তরুণ স্বেচ্ছাসেবকরা আমাদের সম্প্রদায়ের জন্য অসাধারণ কাজ করছেন।",
    },
  },
  {
    id: "t2",
    name: "Volunteer",
    role: { en: "Young Volunteer", hi: "युवा स्वयंसेवक", bn: "তরুণ স্বেচ্ছাসেবক" },
    rating: 5,
    message: {
      en: "Joining Sanatan Shiv Shakti changed my life. I found purpose, friends and the confidence to lead. Seva truly is the best teacher.",
      hi: "सनातन शिव शक्ति से जुड़ना मेरे जीवन का बदलाव बन गया। मुझे उद्देश्य, मित्र और नेतृत्व का आत्मविश्वास मिला। सेवा सचमुच सबसे अच्छी शिक्षक है।",
      bn: "সনাতন শিব শক্তিতে যোগ দেওয়া আমার জীবন বদলে দিয়েছে। আমি উদ্দেশ্য, বন্ধু ও নেতৃত্বের আত্মবিশ্বাস পেয়েছি। সেবাই সত্যিকারের সেরা শিক্ষক।",
    },
  },
  {
    id: "t3",
    name: "Beneficiary",
    role: { en: "Local Resident", hi: "स्थानीय निवासी", bn: "স্থানীয় বাসিন্দা" },
    rating: 5,
    message: {
      en: "During winter they gave us blankets, and during their drives, warm meals. May God bless these children for their kindness.",
      hi: "सर्दियों में उन्होंने हमें कंबल दिए, और अपने अभियानों में गर्म भोजन। ईश्वर इन बच्चों को उनकी दया के लिए आशीर्वाद दे।",
      bn: "শীতে তাঁরা আমাদের কম্বল দিয়েছেন, আর তাঁদের কর্মসূচিতে গরম খাবার। ঈশ্বর এই সন্তানদের তাঁদের দয়ার জন্য আশীর্বাদ করুন।",
    },
  },
];
