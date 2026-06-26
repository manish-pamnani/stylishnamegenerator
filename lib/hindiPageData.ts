import { MARATHI_DECORATION_PATTERNS } from "@/lib/marathiPageData";
import { transliterateToDevanagari } from "@/lib/transliterate";

/** Section A reuses the exact same border patterns as the Marathi page. */
export const HINDI_DECORATION_PATTERNS = MARATHI_DECORATION_PATTERNS;

export function generateDecoratedHindi(input: string) {
  // Romanised input (e.g. "manish") is converted to Devanagari so the
  // "Decorated Hindi text" tool always produces Hindi, matching its label.
  // Text already in Devanagari passes through unchanged.
  const text = transliterateToDevanagari(input.trim()) || "हिंदी";

  return HINDI_DECORATION_PATTERNS.map((pattern) => ({
    id: pattern.id,
    name: pattern.name,
    text: `${pattern.prefix}${text}${pattern.suffix}`,
  }));
}

export type PremadeSnippet = {
  id: string;
  text: string;
};

export type PremadeCategory = {
  id: string;
  title: string;
  description: string;
  items: PremadeSnippet[];
};

/**
 * Section C — 30 pre-styled Devanagari snippets in three categories.
 * Newlines in `text` are real "\n" characters so the copy + WhatsApp share
 * actions preserve line breaks when pasted.
 */
export const HINDI_PREMADE_CATEGORIES: PremadeCategory[] = [
  {
    id: "whatsapp-status",
    title: "WhatsApp Status in Hindi",
    description:
      "Attitude, motivational, and funny stylish Hindi status — copy or share straight to WhatsApp.",
    items: [
      { id: "wa-1", text: "꧁ अपने अंदाज़ में जीते हैं ꧂" },
      { id: "wa-2", text: "🔥 शेर अकेला ही काफ़ी है 🔥" },
      { id: "wa-3", text: "★彡 ज़िंदगी अपने रूल्स पे 彡★" },
      {
        id: "wa-4",
        text: "✦ मेहनत इतनी ख़ामोशी से करो\nकि सफलता शोर मचा दे ✦",
      },
      { id: "wa-5", text: "༺ सपने वो जो सोने न दें ༻" },
      { id: "wa-6", text: "『 मूड ऑफ है, चार्जिंग पे लगा हूँ 』" },
      { id: "wa-7", text: "🌟 खुद पर भरोसा रखो, बाक़ी सब बहाना है 🌟" },
      { id: "wa-8", text: "❰ दिल बड़ा रखो, सोच ऊँची रखो ❱" },
      {
        id: "wa-9",
        text: "💫 चुप रहना मेरी कमज़ोरी नहीं\nमेरी ज़बान की इज़्ज़त है 💫",
      },
      { id: "wa-10", text: "✿ हँसते रहो, जीते रहो, आगे बढ़ते रहो ✿" },
    ],
  },
  {
    id: "instagram-bio",
    title: "Instagram Bio in Hindi",
    description:
      "Aesthetic, attitude, and love bios in Devanagari — ready for your Instagram profile.",
    items: [
      { id: "ig-1", text: "✦ सपनों का शहर ✦\n📍 दिल से हिंदुस्तानी" },
      { id: "ig-2", text: "꧁ राजा अपनी मर्ज़ी का ꧂\n👑 बेताज बादशाह" },
      { id: "ig-3", text: "❤️ तेरे नाम की दीवानी ❤️\n✨ बस तुम्हारी" },
      { id: "ig-4", text: "🌸 सादगी में ही ख़ूबसूरती है 🌸" },
      { id: "ig-5", text: "༺ ख़्वाबों का सौदागर ༻\n🎯 मंज़िल अभी बाक़ी है" },
      { id: "ig-6", text: "🔥 अटिट्यूड नहीं, ये मेरा स्टाइल है 🔥" },
      { id: "ig-7", text: "🌙 चाँद सी हूँ, दूर से देखो ⭐" },
      { id: "ig-8", text: "☕ कॉफ़ी, किताबें और थोड़ा सुकून 📖" },
      { id: "ig-9", text: "❁ ज़िंदगी एक सफ़र है ❁\n🚀 चलते रहो" },
      { id: "ig-10", text: "♛ क्वीन वाइब्स ♛\n💖 खुद से प्यार करो" },
    ],
  },
  {
    id: "hindi-name-styles",
    title: "Hindi Name Styles",
    description:
      "Popular Hindi names pre-styled in fancy Unicode borders — copy your name instantly.",
    items: [
      { id: "nm-1", text: "꧁ राहुल ꧂" },
      { id: "nm-2", text: "🔥 प्रिया 🔥" },
      { id: "nm-3", text: "★彡 अमित 彡★" },
      { id: "nm-4", text: "༺ पूजा ༻" },
      { id: "nm-5", text: "『 विकास 』" },
      { id: "nm-6", text: "𓆩 नेहा 𓆪" },
      { id: "nm-7", text: "☬ रोहित ☬" },
      { id: "nm-8", text: "♛ अंजली ♛" },
      { id: "nm-9", text: "✦ सूरज ✦" },
      { id: "nm-10", text: "❰ काजल ❱" },
    ],
  },
];

export const HINDI_FAQ_ITEMS = [
  {
    question: "What is a Hindi stylish fonts generator?",
    answer:
      "A Hindi stylish fonts generator is a free online tool that turns plain Hindi text into decorative Unicode styles you can copy and paste anywhere. Our stylish Hindi fonts generator wraps your Devanagari word or name in borders and symbols (like ꧁ राहुल ꧂) in real time, and also offers fancy Latin styles for Hindi names typed in English. Because everything is standard Unicode, the hindi stylish font generator output works on WhatsApp, Instagram, and Facebook without any app.",
  },
  {
    question: "How do I use stylish Hindi fonts on WhatsApp?",
    answer:
      "Type your Hindi word or name in the generator, tap Copy on the style you like, then open WhatsApp and paste it into a chat, group name, or your status. You can also tap the green WhatsApp button on any pre-made status card to share it directly. Stylish Hindi fonts paste exactly like normal text — line breaks are preserved, so your multi-line status looks the same in WhatsApp as it does here.",
  },
  {
    question: "Do Hindi stylish fonts work on Instagram bio?",
    answer:
      "Yes. Instagram bios fully support Hindi Unicode (Devanagari) text and decorative symbols. Copy a styled bio from the pre-made section or generator above, open Instagram → Edit Profile → Bio, long-press the field, and paste. Keep your bio under 150 characters when you add borders and emojis so nothing gets cut off.",
  },
  {
    question: "Why does my Hindi stylish font look different on different phones?",
    answer:
      "Devanagari Unicode rendering depends on the system font installed on each device, so the same text can look slightly different across phones. Most phones made after 2018 render Hindi decorations correctly, but very old Android devices sometimes show empty boxes or misaligned matras. If the Devanagari borders look broken on a particular phone, use the Latin fancy font section (type your name in English) — those styles render reliably on almost every device.",
  },
] as const;

export const HINDI_RELATED_TOOLS = [
  {
    href: "/stylish-marathi-fonts",
    title: "Stylish Marathi Fonts",
    description: "Decorated Marathi text and fancy Latin styles for WhatsApp.",
  },
  {
    href: "/instagram-stylish-fonts",
    title: "Instagram Stylish Fonts",
    description: "Fancy Unicode bios, captions, and emoji for Instagram.",
  },
  {
    href: "/",
    title: "Stylish Name Generator",
    description: "Every Unicode font style in one place — all platforms.",
  },
] as const;
