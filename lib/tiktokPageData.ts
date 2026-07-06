/** TikTok font generator page — bio templates, FAQ, and related tools. */

export type TikTokBioTemplateCategory = {
  title: string;
  templates: string[];
};

/** Every template here is verified under TikTok's 80-character bio limit. */
export const TIKTOK_BIO_TEMPLATES: TikTokBioTemplateCategory[] = [
  {
    title: "Creator / influencer bios",
    templates: [
      "🎥 Creator | Daily content drops",
      "✨ Turning ideas into videos",
      "📈 Growing one video at a time",
      "🎬 Storyteller. Creator. Dreamer.",
      "🔥 New videos every week",
      "🎵 Making moments worth watching",
    ],
  },
  {
    title: "Aesthetic / vibe bios",
    templates: [
      "🌙 soft life, loud dreams",
      "☁️ living in my own aesthetic",
      "🌸 quiet vibes, big energy",
      "✨ main character energy",
      "🖤 dark aesthetic, soft heart",
      "🌊 chasing good vibes only",
    ],
  },
  {
    title: "Funny bios",
    templates: [
      "😅 professional overthinker",
      "🍕 powered by snacks & chaos",
      "🛋️ certified couch potato",
      "🤖 error 404: bio not found",
      "😴 sleep is my cardio",
      "🐱 cat parent, mess maker",
    ],
  },
  {
    title: "Business / brand bios",
    templates: [
      "🛍️ Shop small, dream big",
      "📦 Handmade with love, shipped daily",
      "💼 Your local business, now online",
      "☕ Small business, big flavor",
      "🎨 Custom designs, made for you",
      "📍 Serving customers since day one",
      "🛒 Quality products, honest prices",
    ],
  },
];

export function getAllBioTemplateNames(): string[] {
  return TIKTOK_BIO_TEMPLATES.flatMap((category) => category.templates);
}

export const TIKTOK_FAQ = [
  {
    question: "What is a TikTok font generator?",
    answer:
      "A TikTok font generator turns plain text into stylish Unicode fonts you can copy and paste into your TikTok bio, username, or comments. It uses special Unicode letterforms — not an app font setting — so the styled text pastes correctly on any device without installing anything.",
  },
  {
    question: "Do TikTok fonts work on Instagram Reels and YouTube Shorts too?",
    answer:
      "Yes. Unicode fonts are platform-agnostic — the exact same styled text that pastes into a TikTok bio also pastes cleanly into an Instagram Reels bio or a YouTube Shorts channel description. If you create across all three platforms, you can style your bio once and reuse it everywhere.",
  },
  {
    question: "Is this similar to fikfak TikTok font?",
    answer:
      "Yes — it works the same way. Both tools convert plain text into stylish Unicode fonts for TikTok. The difference is that stylishnamegenerator.in also includes ready-made TikTok bio templates and a bio-vs-username compatibility guide, so you can see which styles are safe for your username before you paste.",
  },
  {
    question: "Why don't some fonts work in my TikTok username?",
    answer:
      "TikTok usernames run through a stricter character allowlist than bios do, so several Unicode styles that look fine in a bio get silently stripped or rejected in a username. Stick to the styles marked ✅ Works in bio and username in the compatibility grid above — Sans Bold and Small Caps are the safest choices for usernames.",
  },
] as const;

export const TIKTOK_RELATED_TOOLS = [
  {
    href: "/",
    title: "Stylish Name Generator",
    description: "Every Unicode font style in one place — all platforms.",
  },
  {
    href: "/instagram-stylish-fonts",
    title: "Instagram Stylish Fonts",
    description: "Fancy Unicode fonts and bio templates for Instagram.",
  },
  {
    href: "/facebook-stylish-name-generator",
    title: "Facebook Stylish Name Generator",
    description: "Fancy Unicode fonts tested for Facebook profile names.",
  },
  {
    href: "/freestyle-nickname-generator",
    title: "Freestyle Nickname Generator",
    description: "Mix symbols and fonts for gaming, social, and chat apps.",
  },
  {
    href: "/wavy-text-generator",
    title: "Wavy Text Generator",
    description: "Turn your bio into wavy Unicode text — copy paste wave fonts.",
  },
] as const;
