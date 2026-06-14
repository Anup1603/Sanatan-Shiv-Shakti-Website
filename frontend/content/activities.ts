import type { Activity } from "@/types/content";

/**
 * Activities the organization runs. Each appears as a card (home/activities)
 * and a detailed section on /activities#<slug>.
 */
export const activities: Activity[] = [
  {
    slug: "bhajan-kirtan",
    icon: "music",
    category: "bhajan-kirtan",
    featured: true,
    title: { en: "Bhajan Kirtan", hi: "भजन कीर्तन", bn: "ভজন কীর্তন" },
    shortDescription: {
      en: "Soulful devotional singing that unites the community in joy and devotion.",
      hi: "भावपूर्ण भक्ति संगीत जो समुदाय को आनंद और भक्ति में एकजुट करता है।",
      bn: "ভাবগম্ভীর ভক্তিসঙ্গীত যা সম্প্রদায়কে আনন্দ ও ভক্তিতে একত্রিত করে।",
    },
    description: {
      en: "Our Bhajan Kirtan gatherings fill the air with the names of the divine. Through music, rhythm and collective singing, devotees of every age experience peace and togetherness. It is the heartbeat of our weekly satsang.",
      hi: "हमारे भजन कीर्तन सत्संग वातावरण को ईश्वर के नामों से भर देते हैं। संगीत, लय और सामूहिक गायन के माध्यम से हर आयु के भक्त शांति और एकता का अनुभव करते हैं। यह हमारे साप्ताहिक सत्संग की धड़कन है।",
      bn: "আমাদের ভজন কীর্তনের আসর পরিবেশকে ঈশ্বরের নামে ভরিয়ে তোলে। সঙ্গীত, ছন্দ ও সম্মিলিত গানের মাধ্যমে সব বয়সের ভক্তরা শান্তি ও একাত্মতা অনুভব করেন। এটি আমাদের সাপ্তাহিক সৎসঙ্গের প্রাণ।",
    },
    benefits: [
      { en: "Inner peace and devotion", hi: "आंतरिक शांति और भक्ति", bn: "অন্তরের শান্তি ও ভক্তি" },
      { en: "Community bonding", hi: "सामुदायिक एकता", bn: "সামাজিক বন্ধন" },
      { en: "Preserving devotional music", hi: "भक्ति संगीत का संरक्षण", bn: "ভক্তিসঙ্গীত সংরক্ষণ" },
    ],
    images: [{ src: "/images/bhajan-kirtan.jpg", alt: { en: "Devotees during Bhajan Kirtan", hi: "भजन कीर्तन के दौरान भक्त", bn: "ভজন কীর্তনে ভক্তরা" } }],
  },
  {
    slug: "sundar-kand",
    icon: "flame",
    category: "sundar-kand",
    featured: true,
    title: { en: "Hanuman Ji Sundar Kand Path", hi: "हनुमान जी सुंदरकांड पाठ", bn: "হনুমান জী সুন্দরকাণ্ড পাঠ" },
    shortDescription: {
      en: "Recitation of the Sundar Kand to invoke the blessings and strength of Hanuman Ji.",
      hi: "हनुमान जी के आशीर्वाद और शक्ति के लिए सुंदरकांड का पाठ।",
      bn: "হনুমান জীর আশীর্বাদ ও শক্তির জন্য সুন্দরকাণ্ড পাঠ।",
    },
    description: {
      en: "The Sundar Kand, the most revered chapter of the Ramcharitmanas, is recited collectively to invoke courage, protection and devotion. These gatherings are deeply uplifting and open to all.",
      hi: "रामचरितमानस का सबसे पूजनीय अध्याय सुंदरकांड, साहस, रक्षा और भक्ति के लिए सामूहिक रूप से पढ़ा जाता है। ये सत्संग अत्यंत उत्थानकारी और सभी के लिए खुले हैं।",
      bn: "রামচরিতমানসের সবচেয়ে শ্রদ্ধেয় অধ্যায় সুন্দরকাণ্ড, সাহস, রক্ষা ও ভক্তির জন্য সম্মিলিতভাবে পাঠ করা হয়। এই আসরগুলি অত্যন্ত উদ্দীপক ও সকলের জন্য উন্মুক্ত।",
    },
    benefits: [
      { en: "Courage and protection", hi: "साहस और सुरक्षा", bn: "সাহস ও সুরক্ষা" },
      { en: "Spiritual discipline", hi: "आध्यात्मिक अनुशासन", bn: "আধ্যাত্মিক শৃঙ্খলা" },
      { en: "Collective devotion", hi: "सामूहिक भक्ति", bn: "সম্মিলিত ভক্তি" },
    ],
    images: [{ src: "/images/sundar-kand.jpg", alt: { en: "Sundar Kand Path", hi: "सुंदरकांड पाठ", bn: "সুন্দরকাণ্ড পাঠ" } }],
  },
  {
    slug: "ramayan-path",
    icon: "book-open",
    category: "ramayan-path",
    featured: true,
    title: { en: "Ramayan Path", hi: "रामायण पाठ", bn: "রামায়ণ পাঠ" },
    shortDescription: {
      en: "Recitation and reflection on the timeless teachings of the Ramayan.",
      hi: "रामायण की कालजयी शिक्षाओं का पाठ और मनन।",
      bn: "রামায়ণের চিরন্তন শিক্ষার পাঠ ও অনুধ্যান।",
    },
    description: {
      en: "We organize Ramayan Path on special occasions, narrating the life of Lord Ram as a guide to righteous living, dharma and ideal conduct for the whole family.",
      hi: "हम विशेष अवसरों पर रामायण पाठ आयोजित करते हैं, भगवान राम के जीवन को धर्म और आदर्श आचरण के मार्गदर्शक के रूप में पूरे परिवार के लिए प्रस्तुत करते हैं।",
      bn: "আমরা বিশেষ অনুষ্ঠানে রামায়ণ পাঠের আয়োজন করি, ভগবান রামের জীবনকে ধর্ম ও আদর্শ আচরণের পথপ্রদর্শক হিসেবে সমগ্র পরিবারের জন্য উপস্থাপন করি।",
    },
    benefits: [
      { en: "Moral and ethical guidance", hi: "नैतिक मार्गदर्शन", bn: "নৈতিক পথনির্দেশ" },
      { en: "Family togetherness", hi: "पारिवारिक एकता", bn: "পারিবারিক ঐক্য" },
      { en: "Cultural preservation", hi: "सांस्कृतिक संरक्षण", bn: "সাংস্কৃতিক সংরক্ষণ" },
    ],
    images: [{ src: "/images/ramayan.jpg", alt: { en: "Ramayan Path", hi: "रामायण पाठ", bn: "রামায়ণ পাঠ" } }],
  },
  {
    slug: "geeta-path",
    icon: "scroll-text",
    category: "geeta-path",
    title: { en: "Geeta Path", hi: "गीता पाठ", bn: "গীতা পাঠ" },
    shortDescription: {
      en: "Study and recitation of the Bhagavad Geeta and its timeless wisdom.",
      hi: "भगवद् गीता और उसके शाश्वत ज्ञान का अध्ययन और पाठ।",
      bn: "ভগবদ্গীতা ও তার চিরন্তন জ্ঞানের অধ্যয়ন ও পাঠ।",
    },
    description: {
      en: "Through Geeta Path we explore the teachings of Lord Krishna — karma, devotion and detachment — making ancient philosophy practical and relevant for modern youth.",
      hi: "गीता पाठ के माध्यम से हम भगवान कृष्ण की शिक्षाओं — कर्म, भक्ति और वैराग्य — का अन्वेषण करते हैं, प्राचीन दर्शन को आधुनिक युवाओं के लिए व्यावहारिक और प्रासंगिक बनाते हैं।",
      bn: "গীতা পাঠের মাধ্যমে আমরা ভগবান কৃষ্ণের শিক্ষা — কর্ম, ভক্তি ও বৈরাগ্য — অন্বেষণ করি, প্রাচীন দর্শনকে আধুনিক যুবসমাজের জন্য ব্যবহারিক ও প্রাসঙ্গিক করে তুলি।",
    },
    benefits: [
      { en: "Clarity of purpose", hi: "उद्देश्य की स्पष्टता", bn: "উদ্দেশ্যের স্পষ্টতা" },
      { en: "Mental strength", hi: "मानसिक शक्ति", bn: "মানসিক শক্তি" },
      { en: "Wisdom for daily life", hi: "दैनिक जीवन हेतु ज्ञान", bn: "দৈনন্দিন জীবনের জ্ঞান" },
    ],
    images: [{ src: "/images/geeta.jpg", alt: { en: "Geeta Path", hi: "गीता पाठ", bn: "গীতা পাঠ" } }],
  },
  {
    slug: "gau-seva",
    icon: "heart",
    category: "gau-seva",
    featured: true,
    title: { en: "Gau Seva", hi: "गौ सेवा", bn: "গো সেবা" },
    shortDescription: {
      en: "Care, feeding and welfare of cows — revered as sacred in Sanatan Dharma.",
      hi: "गायों की देखभाल, चारा और कल्याण — जो सनातन धर्म में पूजनीय हैं।",
      bn: "গরুর যত্ন, খাদ্য ও কল্যাণ — যা সনাতন ধর্মে পূজনীয়।",
    },
    description: {
      en: "Our volunteers regularly feed and care for cows, supporting their welfare and treatment. Gau Seva is one of the most cherished forms of service in our tradition.",
      hi: "हमारे स्वयंसेवक नियमित रूप से गायों को चारा खिलाते और उनकी देखभाल करते हैं, उनके कल्याण और उपचार में सहायता करते हैं। गौ सेवा हमारी परंपरा में सेवा का सबसे प्रिय रूप है।",
      bn: "আমাদের স্বেচ্ছাসেবকরা নিয়মিত গরুদের খাওয়ান ও যত্ন নেন, তাদের কল্যাণ ও চিকিৎসায় সহায়তা করেন। গো সেবা আমাদের ঐতিহ্যে সেবার সবচেয়ে প্রিয় রূপ।",
    },
    benefits: [
      { en: "Animal welfare", hi: "पशु कल्याण", bn: "পশুকল্যাণ" },
      { en: "Compassion in action", hi: "करुणा का व्यवहार", bn: "করুণার প্রয়োগ" },
      { en: "Honouring tradition", hi: "परंपरा का सम्मान", bn: "ঐতিহ্যের প্রতি শ্রদ্ধা" },
    ],
    images: [{ src: "/images/gau-seva.jpg", alt: { en: "Gau Seva", hi: "गौ सेवा", bn: "গো সেবা" } }],
  },
  {
    slug: "food-distribution",
    icon: "utensils",
    category: "food-distribution",
    featured: true,
    title: { en: "Food Distribution", hi: "अन्न वितरण", bn: "অন্ন বিতরণ" },
    shortDescription: {
      en: "Distributing prasad and meals to the needy, hungry and the underprivileged.",
      hi: "ज़रूरतमंदों, भूखों और वंचितों को प्रसाद और भोजन वितरित करना।",
      bn: "দুঃস্থ, ক্ষুধার্ত ও সুবিধাবঞ্চিতদের প্রসাদ ও খাবার বিতরণ।",
    },
    description: {
      en: "Annadaan — the gift of food — is among the highest forms of charity. We distribute meals and prasad during events and welfare drives, ensuring no one near us goes hungry.",
      hi: "अन्नदान — भोजन का दान — दान का सर्वोच्च रूप है। हम कार्यक्रमों और कल्याण अभियानों के दौरान भोजन और प्रसाद वितरित करते हैं, यह सुनिश्चित करते हुए कि हमारे आसपास कोई भूखा न रहे।",
      bn: "অন্নদান — খাদ্যের দান — দানের সর্বোচ্চ রূপ। আমরা অনুষ্ঠান ও কল্যাণ কর্মসূচির সময় খাবার ও প্রসাদ বিতরণ করি, নিশ্চিত করি যেন আমাদের আশেপাশে কেউ অভুক্ত না থাকে।",
    },
    benefits: [
      { en: "Feeding the hungry", hi: "भूखों को भोजन", bn: "ক্ষুধার্তকে খাবার" },
      { en: "Dignity and care", hi: "गरिमा और देखभाल", bn: "মর্যাদা ও যত্ন" },
      { en: "Community welfare", hi: "सामुदायिक कल्याण", bn: "সমাজকল্যাণ" },
    ],
    images: [{ src: "/images/food-distribution.jpg", alt: { en: "Food distribution drive", hi: "अन्न वितरण अभियान", bn: "অন্ন বিতরণ কর্মসূচি" } }],
  },
  {
    slug: "charity-programs",
    icon: "hand-heart",
    category: "charity",
    title: { en: "Charity Programs", hi: "दान कार्यक्रम", bn: "দান কর্মসূচি" },
    shortDescription: {
      en: "Donation drives for clothes, essentials and support for families in need.",
      hi: "ज़रूरतमंद परिवारों के लिए वस्त्र, आवश्यक वस्तुओं और सहायता के दान अभियान।",
      bn: "দুঃস্থ পরিবারের জন্য বস্ত্র, প্রয়োজনীয় সামগ্রী ও সহায়তার দান কর্মসূচি।",
    },
    description: {
      en: "From distributing blankets in winter to supporting families during hardship, our charity programs extend a helping hand to those who need it most, funded by the generosity of our community.",
      hi: "सर्दियों में कंबल वितरण से लेकर कठिनाई के समय परिवारों की सहायता तक, हमारे दान कार्यक्रम सबसे अधिक ज़रूरतमंद लोगों की मदद करते हैं, जो हमारे समुदाय की उदारता से संचालित होते हैं।",
      bn: "শীতে কম্বল বিতরণ থেকে দুর্দিনে পরিবারের পাশে দাঁড়ানো পর্যন্ত, আমাদের দান কর্মসূচি সবচেয়ে অভাবী মানুষদের সহায়তা করে, যা আমাদের সম্প্রদায়ের উদারতায় পরিচালিত।",
    },
    benefits: [
      { en: "Direct community help", hi: "प्रत्यक्ष सामुदायिक सहायता", bn: "সরাসরি সমাজসেবা" },
      { en: "Relief in hardship", hi: "कठिनाई में राहत", bn: "দুর্দিনে স্বস্তি" },
      { en: "Spirit of giving", hi: "दान की भावना", bn: "দানের চেতনা" },
    ],
    images: [{ src: "/images/charity.jpg", alt: { en: "Charity program", hi: "दान कार्यक्रम", bn: "দান কর্মসূচি" } }],
  },
  {
    slug: "youth-development",
    icon: "graduation-cap",
    category: "youth",
    title: { en: "Youth Development Programs", hi: "युवा विकास कार्यक्रम", bn: "যুব উন্নয়ন কর্মসূচি" },
    shortDescription: {
      en: "Building leadership, confidence and life skills in young people.",
      hi: "युवाओं में नेतृत्व, आत्मविश्वास और जीवन कौशल का निर्माण।",
      bn: "যুবসমাজে নেতৃত্ব, আত্মবিশ্বাস ও জীবন দক্ষতা গড়ে তোলা।",
    },
    description: {
      en: "We help young people grow through workshops, teamwork and responsibility. By organizing events themselves, our youth develop leadership, communication and the confidence to lead with values.",
      hi: "हम कार्यशालाओं, टीम वर्क और ज़िम्मेदारी के माध्यम से युवाओं को विकसित होने में मदद करते हैं। स्वयं कार्यक्रम आयोजित करके हमारे युवा नेतृत्व, संवाद और मूल्यों के साथ नेतृत्व करने का आत्मविश्वास विकसित करते हैं।",
      bn: "আমরা কর্মশালা, দলগত কাজ ও দায়িত্বের মাধ্যমে যুবকদের বেড়ে উঠতে সাহায্য করি। নিজেরাই অনুষ্ঠান আয়োজন করে আমাদের যুবকরা নেতৃত্ব, যোগাযোগ ও মূল্যবোধসহ নেতৃত্ব দেওয়ার আত্মবিশ্বাস গড়ে তোলে।",
    },
    benefits: [
      { en: "Leadership skills", hi: "नेतृत्व कौशल", bn: "নেতৃত্ব দক্ষতা" },
      { en: "Confidence & communication", hi: "आत्मविश्वास और संवाद", bn: "আত্মবিশ্বাস ও যোগাযোগ" },
      { en: "Social responsibility", hi: "सामाजिक उत्तरदायित्व", bn: "সামাজিক দায়িত্ব" },
    ],
    images: [{ src: "/images/youth.jpg", alt: { en: "Youth development program", hi: "युवा विकास कार्यक्रम", bn: "যুব উন্নয়ন কর্মসূচি" } }],
  },
  {
    slug: "social-service",
    icon: "hand-helping",
    category: "social-service",
    title: { en: "Social Service Activities", hi: "सामाजिक सेवा गतिविधियाँ", bn: "সমাজসেবা কার্যক্রম" },
    shortDescription: {
      en: "Cleanliness drives, awareness programs and community welfare initiatives.",
      hi: "स्वच्छता अभियान, जागरूकता कार्यक्रम और सामुदायिक कल्याण पहल।",
      bn: "পরিচ্ছন্নতা অভিযান, সচেতনতা কর্মসূচি ও সমাজকল্যাণমূলক উদ্যোগ।",
    },
    description: {
      en: "Beyond the temple, we serve society through cleanliness drives, health and social awareness campaigns, and support during local needs — putting our values into action for everyone.",
      hi: "मंदिर से परे, हम स्वच्छता अभियानों, स्वास्थ्य एवं सामाजिक जागरूकता अभियानों और स्थानीय आवश्यकताओं में सहायता के माध्यम से समाज की सेवा करते हैं — सभी के लिए अपने मूल्यों को कार्य में बदलते हैं।",
      bn: "মন্দিরের বাইরেও আমরা পরিচ্ছন্নতা অভিযান, স্বাস্থ্য ও সামাজিক সচেতনতা প্রচার এবং স্থানীয় প্রয়োজনে সহায়তার মাধ্যমে সমাজের সেবা করি — সবার জন্য আমাদের মূল্যবোধকে কাজে রূপান্তরিত করি।",
    },
    benefits: [
      { en: "Cleaner surroundings", hi: "स्वच्छ परिवेश", bn: "পরিচ্ছন্ন পরিবেশ" },
      { en: "Public awareness", hi: "जन जागरूकता", bn: "জনসচেতনতা" },
      { en: "Stronger community", hi: "सशक्त समुदाय", bn: "শক্তিশালী সম্প্রদায়" },
    ],
    images: [{ src: "/images/social-service.jpg", alt: { en: "Social service activity", hi: "सामाजिक सेवा गतिविधि", bn: "সমাজসেবা কার্যক্রম" } }],
  },
];
