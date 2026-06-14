import type { DonationInfo } from "@/types/content";

/**
 * Donation details. `enabled: false` hides all donation UI.
 * ⚠️ Set enabled: true and fill the bank/UPI details to turn donations on.
 */
export const donation: DonationInfo = {
  enabled: true,
  title: {
    en: "Support Our Seva",
    hi: "हमारी सेवा में सहयोग करें",
    bn: "আমাদের সেবায় সহযোগিতা করুন",
  },
  description: {
    en: "Your generous contribution helps us serve more meals, care for cows, and run our spiritual and welfare programs.",
    hi: "आपका उदार योगदान हमें अधिक भोजन परोसने, गायों की देखभाल करने और हमारे आध्यात्मिक एवं कल्याण कार्यक्रम चलाने में मदद करता है।",
    bn: "আপনার উদার অবদান আমাদের আরও খাবার পরিবেশন করতে, গরুদের যত্ন নিতে এবং আমাদের আধ্যাত্মিক ও কল্যাণমূলক কর্মসূচি চালাতে সাহায্য করে।",
  },
  upiId: "",
  accountName: "",
  accountNumber: "",
  ifsc: "",
  bankName: "",
  note: {
    en: "Sanatan Shiv Shakti is run entirely by volunteers. Every rupee goes directly to seva.",
    hi: "सनातन शिव शक्ति पूरी तरह से स्वयंसेवकों द्वारा संचालित है। हर रुपया सीधे सेवा में जाता है।",
    bn: "সনাতন শিব শক্তি সম্পূর্ণরূপে স্বেচ্ছাসেবকদের দ্বারা পরিচালিত। প্রতিটি টাকা সরাসরি সেবায় ব্যয় হয়।",
  },
};
