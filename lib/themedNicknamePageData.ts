import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export type ThemedNameCategory = {
  id: string;
  tabLabel: string;
  title: string;
  names: string[];
};

export type ThemedFaqItem = {
  question: string;
  answer: string;
};

export type ThemedNicknameConfig = {
  id: "nobita" | "psycho";
  slug: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  h1: string;
  ogImage: string;
  ogImageAlt: string;
  lastUpdated: string;
  culturalHeading: string;
  culturalContext: string;
  namesHeading: string;
  ctaHeading: string;
  faqHeading: string;
  categories: ThemedNameCategory[];
  faq: ThemedFaqItem[];
  relatedTools: { href: string; title: string; description: string }[];
  webPageName: string;
  webPageDescription: string;
  keywords: string;
  itemListName: string;
  itemListDescription: string;
};

export const THEMED_NICKNAME_LAST_UPDATED = "July 2025";

const NOBITA_CATEGORIES: ThemedNameCategory[] = [
  {
    id: "classic",
    tabLabel: "Classic",
    title: "Classic Nobita Style",
    names: [
      "꧁𝓝𝓸𝓫𝓲𝓽𝓪꧂",
      "『𝒩𝑜𝒷𝒾𝓉𝒶』",
      "✿ Ñøbítá ✿",
      "★ℕ𝕆𝔹𝕀𝕋𝔸★",
      "꧁DoraNobita꧂",
      "『𝓢𝓱𝓲𝔃𝓾𝓴𝓪』",
      "✰ 𝕹𝖔𝖇𝖎𝖙𝖆𝕻𝖗𝖔 ✰",
      "꧁𝓝𝓸𝓫𝓲𝓣𝓪𝓝𝓸𝓸𝓫꧂",
      "『𝒟𝑜𝓇𝒶𝑒𝓂𝑜𝓃』",
      "♡ 𝒩𝑜𝒷𝒾𝓉𝒶 ♡",
      "꧁𝓝𝓸𝓫𝓲𝓾꧂",
      "✦ 𝓢𝓾𝓷𝓲𝓸 𝓛𝓾𝓿 ✦",
      "『𝓝𝓸𝓫𝓲𝓴𝓲𝓷𝓰』",
      "꧁𝕹𝕺𝔹𝕴𝕿𝕬꧂",
      "☆ Ñøbítá Gãmër ☆",
    ],
  },
  {
    id: "noob",
    tabLabel: "Noob Squad",
    title: "Noob Squad Style",
    names: [
      "꧁𝕭𝖆𝖉𝕬𝖎𝖒꧂",
      "『𝓟𝓮𝓻𝓶𝓪𝓝𝓸𝓸𝓫』",
      "★ Miss✗Karo✗Mat ★",
      "꧁𝓝𝓸𝓸𝓫𝓛𝓲𝓯𝓮꧂",
      "『𝓑𝓪𝓭𝓐𝓲𝓶𝓝𝓸𝓸𝓫』",
      "✗ NoobForever ✗",
      "꧁𝕴𝓂𝓃𝓸𝓸𝓫꧂",
      "『𝓟𝓻𝓸𝓝𝓸𝓸𝓫』",
      "★ Aim✗Nahi★",
      "꧁𝓝𝓸𝓸𝓫𝓑𝓾𝓽𝓕𝓾𝓷꧂",
      "『𝓡𝓪𝓷𝓭𝓸𝓶𝓝𝓸𝓸𝓫』",
      "✿ Noob×Squad ✿",
      "꧁𝕻𝖗𝖔𝕹𝖔𝖔𝖇꧂",
      "『𝓜𝓲𝓼𝓼𝓝𝓪𝓱𝓲』",
      "★ Headshot?Never ★",
    ],
  },
  {
    id: "cute",
    tabLabel: "Cute Funny",
    title: "Cute Funny Style",
    names: [
      "꧁𝓢𝓱𝓸𝓷𝓪𝓑𝓪𝓫𝔂꧂",
      "『𝓒𝓾𝓽𝓮𝓝𝓸𝓸𝓫』",
      "✿ Kawaii×Gamer ✿",
      "꧁𝓑𝓪𝓫𝔂𝓝𝓸𝓸𝓫꧂",
      "『𝓒𝓾𝓽𝓮𝓚𝓲𝓵𝓵𝓮𝓻』",
      "♡ Noob×Princess ♡",
      "꧁𝓢𝓱𝓸𝓷𝓪𝓖𝓪𝓶𝓮𝓻꧂",
      "『𝓒𝓾𝓽𝓲𝓮𝓝𝓸𝓸𝓫』",
      "✰ Silly×Squad ✰",
      "꧁𝓝𝓸𝓸𝓫𝓑𝓪𝓫𝔂꧂",
      "『𝓚𝓪𝔀𝓪𝓲𝓲𝓝𝓸𝓸𝓫』",
      "☆ Funny×Gamers ☆",
      "꧁𝓒𝓾𝓽𝓮×Noob꧂",
      "『𝓝𝓸𝓸𝓫×Shona』",
      "✿ Ladki×Noob ✿",
    ],
  },
  {
    id: "clan",
    tabLabel: "Clan Tags",
    title: "Nobita Clan Tags",
    names: [
      "[𝓝𝓑𝓣]",
      "꧁𝑁𝐵꧂",
      "『𝓝𝓞𝓞𝓑』",
      "★𝓝𝓑★",
      "꧁ℕ𝕆𝔹꧂",
      "『𝓝𝓑𝓣』",
      "✿𝓝𝓸𝓸𝓫✿",
      "꧁𝑁𝑜𝑏𝑖꧂",
      "『𝓝𝓑』",
      "★𝓝𝓸𝓫𝓲★",
    ],
  },
];

const PSYCHO_CATEGORIES: ThemedNameCategory[] = [
  {
    id: "classic",
    tabLabel: "Classic",
    title: "Classic Psycho Attitude",
    names: [
      "꧁𝕻𝖘𝖞𝖈𝖍𝖔𝕶𝖎𝖑𝖑𝖊𝖗꧂",
      "𓆩𝓟𝓼𝔂𝓬𝓱𝓸𝓕𝓸𝓻𝓬𝓮𓆪",
      "꧁𝕻𝖘𝖞𝖈𝖍𝖔𒆜꧂",
      "『𝓟𝓢𝓨𝓒𝓗𝓞』",
      "𓆩𝕻𝖘𝖞𝖈𝖍𝖔𓆪",
      "꧁𝕯𝖆𝖗𝖐𝕾𝖔𝖚𝖑꧂",
      "『𝓝𝓸𝓜𝓮𝓻𝓬𝔂』",
      "𓆩𝕻𝖘𝖞𝖈𝖍𝖔𝕭𝖊𝖆𝖘𝖙𓆪",
      "꧁𝕰𝖛𝖎𝖑𝕸𝖎𝖓𝖉꧂",
      "『𝓟𝓼𝔂𝓬𝓱𝓸𝓚𝓲𝓷𝓰』",
      "𓆩𝔇𝔢𝔞𝔱𝔥𝔐𝔞𝔠𝔥𝔦𝔫𝔢𓆪",
      "꧁𝕾𝖎𝖑𝖊𝖓𝖙𝕶𝖎𝖑𝖑𝖊𝖗꧂",
      "『𝓟𝓢𝓨𝓒𝓗𝓞×𝟕』",
      "𓆩𝕭𝖑𝖔𝖔𝖉𝕳𝖚𝖓𝖙𝖊𝖗𓆪",
      "꧁𝕻𝖘𝖞𝖈𝖍𝖔×𝕯𝖊𝖆𝖙𝖍꧂",
    ],
  },
  {
    id: "lone",
    tabLabel: "Lone Wolf",
    title: "Lone Wolf Style",
    names: [
      "꧁𝕷𝖔𝖓𝖊𝕎𝖔𝖑𝖋꧂",
      "『𝓢𝓸𝓵𝓸𝓚𝓲𝓵𝓵𝓮𝓻』",
      "𓆩𝕷𝖔𝖓𝖊𝕽𝖆𝖓𝖌𝖊𝖗𓆪",
      "꧁𝕾𝖔𝖑𝖎𝖙𝖆𝖗𝖞꧂",
      "『𝓛𝓸𝓷𝓮𝓛𝔂𝓷𝔁』",
      "𓆩𝕾𝖍𝖆𝖉𝖔𝖜𝕳𝖚𝖓𝖙𝖊𝖗𓆪",
      "꧁𝕺𝖓𝖊𝕸𝖆𝖓𝕬𝖗𝖒𝖞꧂",
      "『𝓢𝓸𝓵𝓸𝔀𝓪𝓵𝓴』",
      "𓆩𝕯𝖆𝖗𝖐𝕷𝖔𝖓𝖊𓆪",
      "꧁𝕬𝖓𝖙𝖎𝕾𝖔𝖈𝖎𝖆𝖑꧂",
      "『𝓝𝓸𝓣𝓮𝓪𝓶』",
      "𓆩𝕽𝖔𝖌𝖚𝖊𝕳𝖚𝖓𝖙𝖊𝖗𓆪",
      "꧁𝕾𝖔𝖑𝖔𝕭𝖊𝖆𝖘𝖙꧂",
      "『𝓛𝓸𝓷𝓮×𝕯𝖊𝖆𝖙𝖍』",
      "𓆩𝕾𝖍𝖆𝖉𝖔𝖜𝕯𝖊𝖆𝖙𝖍𓆪",
    ],
  },
  {
    id: "attitude",
    tabLabel: "Attitude",
    title: "Attitude One-Liners",
    names: [
      "꧁𝕾𝖎𝖑𝖊𝖓𝖙𝕭𝖚𝖙𝕯𝖊𝖆𝖉𝖑𝖞꧂",
      "『𝓝𝓸𝓒𝓱𝓪𝓷𝓬𝓮』",
      "𓆩𝕯𝖔𝖓𝖙𝕿𝖔𝖚𝖈𝖍𓆪",
      "꧁𝕯𝖊𝖆𝖙𝖍𝕸𝖆𝖈𝖍𝖎𝖓𝖊꧂",
      "『𝓝𝓸𝓕𝓮𝓪𝓻』",
      "𓆩𝕲𝖆𝖒𝖊𝕺𝖛𝖊𝖗𓆪",
      "꧁𝕿𝖔𝖚𝖈𝖍𝕸𝖊𝕯𝖎𝖊꧂",
      "『𝓝𝓸𝓡𝓾𝓵𝓮𝓼』",
      "𓆩𝕲𝖎𝖛𝖊𝕦𝕻𓆪",
      "꧁𝕭𝖔𝖘𝖘𝕸𝖔𝖉𝖊꧂",
      "『𝓝𝓸𝓛𝓲𝓶𝓲𝓽』",
      "𓆩𝕴𝖒𝕻𝖔𝖘𝖘𝖎𝖇𝖑𝖊𓆪",
      "꧁𝕾𝖐𝖎𝖑𝖑𝕺𝖗𝕯𝖎𝖊꧂",
      "『𝓝𝓸𝓜𝓮𝓻𝓬𝔂×𝟕』",
      "𓆩𝕾𝖎𝖑𝖊𝖓𝖙𝕶𝖎𝖑𝖑𝖊𝖗×𝟗𓆪",
    ],
  },
  {
    id: "clan",
    tabLabel: "Clan Tags",
    title: "Psycho Clan Tags",
    names: [
      "[𝓟𝓢𝓨]",
      "꧁𝕻𝕾𝖄꧂",
      "『𝓟𝓢𝓨𝓒𝓗𝓞』",
      "★𝓟𝓢𝓨★",
      "꧁𝕻𝕾𝖀𝕮𝕳𝕺꧂",
      "『𝓟𝓢𝓨』",
      "✿𝓟𝓢𝓨✿",
      "꧁𝕻𝕾꧂",
      "『𝓟𝓢𝓨×𝟕』",
      "★𝒫𝒮𝒴★",
    ],
  },
];

export const NOBITA_CONFIG: ThemedNicknameConfig = {
  id: "nobita",
  slug: "/nobita-nickname-style",
  breadcrumbLabel: "Nobita Nickname Style",
  title:
    "Nobita Nickname Style 😂 Funny BGMI & Free Fire Names Copy Paste (2026)",
  description:
    "Copy paste 50+ Nobita-style nicknames for BGMI and Free Fire — funny, cute and stylish Unicode names inspired by Nobita. Updated for 2026.",
  h1: "Nobita Nickname Style — Funny & Stylish BGMI Names",
  ogImage: "/nobita-nickname-style-bgmi-names.svg",
  ogImageAlt:
    "Nobita nickname style — funny BGMI name ideas with copy paste Unicode fonts",
  lastUpdated: THEMED_NICKNAME_LAST_UPDATED,
  culturalHeading: "What is Nobita Style in Gaming Names?",
  culturalContext:
    "Nobita is the lovable, lazy hero of Doraemon — the anime that shaped a whole generation of Indian gamers. In BGMI and Free Fire squads, Nobita-style names are self-deprecating humour: you joke about being a noob while dropping headshots. The look mixes cute Unicode script fonts with Nobita, Doraemon, and noob-culture references. It is a running gag in Indian gaming — funny on the profile, deadly in the lobby. Season resets are when these names spike, because everyone wants a fresh identity that makes the squad laugh.",
  namesHeading: "Nobita Nickname Ideas — Copy Paste",
  ctaHeading: "Make Your Own Nobita Style Name",
  faqHeading: "Frequently Asked Questions",
  categories: NOBITA_CATEGORIES,
  faq: [
    {
      question: "What is Nobita nickname style in gaming?",
      answer:
        "Nobita nickname style is a funny, self-aware naming trend in Indian gaming where players use cute Unicode fonts and Nobita or Doraemon references — often paired with noob jokes — as their BGMI or Free Fire profile name. It is humour-first, not try-hard cool.",
    },
    {
      question: "Are Nobita-style names good for BGMI?",
      answer:
        "Yes — especially for squads that play with a funny or troll theme. Nobita BGMI names stand out in the lobby, work great as clan tags, and signal that your squad does not take itself too seriously (even when you are grinding Conqueror).",
    },
    {
      question: "Can I use these Nobita names in Free Fire too?",
      answer:
        "Absolutely. The same Unicode characters work in Free Fire and Free Fire MAX. Copy any Nobita Free Fire name from the list above and paste it through your rename card — no separate formatting needed.",
    },
    {
      question: "How do I make my own Nobita-style name?",
      answer:
        "Use our BGMI name generator to convert your real name into cute or funny Unicode fonts, then wrap it with a Nobita-style border from the lists above. Mix a childish script font with a noob joke and you have a custom Nobita nickname in under a minute.",
    },
  ],
  relatedTools: [
    {
      href: "/bgmi-name-generator",
      title: "BGMI Name Generator",
      description:
        "Convert any name into cute Unicode fonts — perfect for Nobita-style BGMI names.",
    },
    {
      href: "/free-fire-name-generator",
      title: "Free Fire Name Generator",
      description:
        "Stylish FF fonts for your next Nobita Free Fire name — copy paste in one tap.",
    },
    {
      href: "/psycho-stylish-name",
      title: "Psycho Stylish Name",
      description:
        "Want the opposite vibe? Aggressive attitude names for when you are done being funny.",
    },
    {
      href: "/j-stylish-name",
      title: "J Stylish Name",
      description: "Letter J name ideas with fancy Unicode fonts for gaming profiles.",
    },
    {
      href: "/bgmi-symbols",
      title: "BGMI Symbols",
      description: "Border and decoration characters to finish your Nobita nickname.",
    },
  ],
  webPageName: "Nobita Nickname Style — Funny BGMI Names",
  webPageDescription:
    "50+ Nobita-style nicknames for BGMI and Free Fire — funny, cute Unicode names with copy paste.",
  keywords: "nobita nickname style, nobita bgmi name, nobita free fire name",
  itemListName: "Nobita Nickname Style Ideas",
  itemListDescription:
    "Funny and cute Nobita-style gaming nicknames for BGMI and Free Fire",
};

export const PSYCHO_CONFIG: ThemedNicknameConfig = {
  id: "psycho",
  slug: "/psycho-stylish-name",
  breadcrumbLabel: "Psycho Stylish Name",
  title: "Psycho Stylish Name 😈 Attitude BGMI Names Copy Paste (2026)",
  description:
    "Copy paste 50+ psycho stylish names for BGMI and Free Fire — attitude, aggressive and stylish Unicode names. Updated for 2026.",
  h1: "Psycho Stylish Name — Attitude BGMI & Free Fire Names",
  ogImage: "/psycho-stylish-name-bgmi-attitude.svg",
  ogImageAlt:
    "Psycho stylish name — attitude BGMI and Free Fire names copy paste",
  lastUpdated: THEMED_NICKNAME_LAST_UPDATED,
  culturalHeading: "What is Psycho Style in Gaming Names?",
  culturalContext:
    "Psycho-style names are a staple of Indian competitive gaming — dark, intense, and built to intimidate before the first bullet flies. Players lean on Bold Fraktur, Gothic script, and heavy border characters to signal a serious, aggressive playstyle. You will see these in ranked BGMI and Free Fire lobbies when a new season starts and everyone wants to rebrand for the next tier push. It is posturing with purpose: the name sets the tone, and the gameplay backs it up.",
  namesHeading: "Psycho Nickname Ideas — Copy Paste",
  ctaHeading: "Make Your Own Psycho Style Name",
  faqHeading: "Frequently Asked Questions",
  categories: PSYCHO_CATEGORIES,
  faq: [
    {
      question: "What is a psycho stylish name in gaming?",
      answer:
        "A psycho stylish name is an attitude-heavy gaming nickname styled with dark Unicode fonts — Bold Fraktur, Gothic script, and border characters — meant to look intense in BGMI and Free Fire lobbies. It is one of the most searched name styles in Indian gaming.",
    },
    {
      question: "What fonts are used in psycho-style BGMI names?",
      answer:
        "Bold Fraktur and Fraktur Gothic from our BGMI name generator are the go-to fonts for a psycho stylish name. Pair them with BGMI border characters — ꧁ ꧂, 𓆩 𓆪, or 『 』 — from our BGMI symbols library for the full attitude look.",
    },
    {
      question: "Are psycho names allowed in BGMI?",
      answer:
        "Yes, as long as they do not violate Krafton's content policy. Attitude names, dark fonts, and aggressive vocabulary are fine. Slurs, hate speech, and impersonation are not — keep it intense, not offensive.",
    },
    {
      question: "How do I create my own psycho stylish name?",
      answer:
        "Open our BGMI name generator, type your name, and pick a Bold Fraktur or Gothic style. Then add a psycho-style border from the BGMI symbols page. Combine both and you have a custom attitude nickname ready to paste.",
    },
  ],
  relatedTools: [
    {
      href: "/bgmi-name-generator",
      title: "BGMI Name Generator",
      description:
        "Dark Gothic and Fraktur fonts — the base for any psycho stylish name.",
    },
    {
      href: "/bgmi-symbols",
      title: "BGMI Symbols",
      description: "Add psycho-style borders to your name with tested Unicode frames.",
    },
    {
      href: "/freestyle-nickname-generator",
      title: "Freestyle Nickname Generator",
      description: "More attitude nicknames across gaming, cute, and bold vibe buckets.",
    },
    {
      href: "/free-fire-name-generator",
      title: "Free Fire Name Generator",
      description: "Psycho Free Fire name fonts that work in FF and FF MAX.",
    },
    {
      href: "/nobita-nickname-style",
      title: "Nobita Nickname Style",
      description: "The funny opposite — self-deprecating Nobita names for your squad.",
    },
  ],
  webPageName: "Psycho Stylish Name — Attitude BGMI Names",
  webPageDescription:
    "50+ psycho-style attitude nicknames for BGMI and Free Fire — dark Unicode fonts with copy paste.",
  keywords: "psycho stylish name, psycho bgmi name, psycho free fire name",
  itemListName: "Psycho Stylish Name Ideas",
  itemListDescription:
    "Aggressive attitude gaming nicknames for BGMI and Free Fire",
};

export function getAllThemedNames(config: ThemedNicknameConfig): string[] {
  return config.categories.flatMap((category) => category.names);
}

export function buildThemedMetadata(config: ThemedNicknameConfig): Metadata {
  const pageUrl = `${SITE_URL}${config.slug}`;

  return {
    title: config.title,
    description: config.description,
    robots: { index: true, follow: true },
    alternates: { canonical: config.slug },
    openGraph: {
      title: config.title,
      description: config.description,
      url: pageUrl,
      type: "website",
      siteName: "Stylish Name Generator",
      locale: "en_IN",
      images: [
        {
          url: config.ogImage,
          width: 640,
          height: 400,
          alt: config.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.ogImage],
    },
  };
}

export function buildThemedJsonLd(config: ThemedNicknameConfig) {
  const pageUrl = `${SITE_URL}${config.slug}`;
  const allNames = getAllThemedNames(config);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.webPageName,
    url: pageUrl,
    description: config.webPageDescription,
    keywords: config.keywords,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: config.breadcrumbLabel,
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: config.itemListName,
    description: config.itemListDescription,
    numberOfItems: allNames.length,
    itemListElement: allNames.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };

  return { webPage, breadcrumb, faq, itemList };
}
