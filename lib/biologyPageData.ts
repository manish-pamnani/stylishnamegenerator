/** Biology font style page — use-case tabs, FAQ, and related tools. */

export type BiologyUseCaseTab = {
  id: string;
  label: string;
  message: string;
  recommendedStyleIds: readonly string[];
};

export const BIOLOGY_USE_CASE_TABS: BiologyUseCaseTab[] = [
  {
    id: "projects",
    label: "📚 For Projects",
    message:
      "Making a biology project cover page or heading? Double Struck and Fraktur fonts have a science-manuscript look that reads as academic, not gimmicky — perfect for Class 10–12 project titles.",
    recommendedStyleIds: ["double-struck", "fraktur-gothic", "bold-fraktur"],
  },
  {
    id: "instagram",
    label: "📱 For Instagram Bio",
    message:
      "Want your bio to say you're a biology student without spelling it out plainly? Cursive-style and Bold Cursive fonts look elegant in an Instagram bio and pair well with a 🧬 or 🦠 emoji.",
    recommendedStyleIds: ["sans-italic", "bold-cursive"],
  },
  {
    id: "whatsapp",
    label: "💬 For WhatsApp",
    message:
      "For a WhatsApp status or group name, Sans Bold and Fullwidth render cleanly on every phone with no missing characters — reliable picks when you're not sure what the other person's device supports.",
    recommendedStyleIds: ["sans-bold", "fullwidth"],
  },
];

export const BIOLOGY_LAST_UPDATED = "July 2026";

export const BIOLOGY_FAQ = [
  {
    question: "What is a biology font style?",
    answer:
      "A biology font style is a stylish Unicode version of regular text — Double Struck, Fraktur, Monospace, and similar fonts — that gives your text a science or academic look. It copy-pastes like normal text, so it works in Word, Google Docs, Canva, Instagram bios, and WhatsApp statuses without installing anything.",
  },
  {
    question: "Which font style looks best for a biology project?",
    answer:
      "Double Struck and Fraktur work best for project headings — they have a scientific-manuscript feel that suits cover pages and section titles. For body text and labels, use Sans Bold for a clean, presentation-ready look, and Monospace for lab report data or observation tables where a code-like, structured font fits the content.",
  },
  {
    question: "Can I use biology font styles in my Instagram bio?",
    answer:
      "Yes — Cursive-style and Bold Cursive fonts work perfectly in Instagram bios. Type your text in the generator above, tap the Instagram Bio tab for recommended styles, then copy and paste into Edit Profile. Pair it with a 🧬 or 🦠 symbol from the library below. For more bio ideas, see our Instagram stylish fonts page.",
  },
  {
    question: "What are the Unicode symbols used in biology?",
    answer:
      "Unicode includes the full Greek alphabet (α, β, γ, Σ, Δ and more), used in biology for naming proteins, processes, and constants; subscript and superscript numbers, needed for chemical formulas like H₂O and C₆H₁₂O₆; and scientific notation symbols like °, ±, and √. All of these are just text characters — they copy-paste into Word, Google Docs, and WhatsApp with no special software or fonts required.",
  },
] as const;

export const BIOLOGY_RELATED_TOOLS = [
  {
    href: "/",
    title: "Stylish Name Generator",
    description: "Every Unicode font style in one place — all platforms.",
  },
  {
    href: "/instagram-stylish-fonts",
    title: "Instagram Stylish Fonts",
    description: "Fancy Unicode bios, captions, and emoji for Instagram.",
  },
  {
    href: "/tiktok-font-generator",
    title: "TikTok Font Generator",
    description: "Stylish fonts and bio templates for TikTok, Reels, and Shorts.",
  },
  {
    href: "/wavy-text-generator",
    title: "Wavy Text Generator",
    description: "Turn your bio into wavy Unicode text — copy paste wave fonts.",
  },
  {
    href: "/hindi-stylish-fonts-generator",
    title: "Hindi Stylish Fonts",
    description: "Fancy Devanagari fonts for bios, captions, and status — for Hindi-medium biology notes.",
  },
  {
    href: "/freestyle-nickname-generator",
    title: "Freestyle Nickname Generator",
    description: "Mix symbols and fonts for gaming, social, and chat apps.",
  },
] as const;
