import { SITE_URL } from "@/lib/site";

export const BGMI_LIST_PAGE_PATH = "/bgmi-stylish-names-list";
export const BGMI_LIST_PAGE_URL = `${SITE_URL}${BGMI_LIST_PAGE_PATH}`;
export const BGMI_LIST_LAST_UPDATED = "2026-07-08";

export type BgmiNameCategoryId =
  | "cool"
  | "attitude"
  | "funny"
  | "girl"
  | "pro"
  | "short";

export type BgmiNameCategory = {
  id: BgmiNameCategoryId;
  pillLabel: string;
  h2: string;
  itemListLabel: string;
  intro: string;
  names: string[];
};

export const BGMI_NAME_CATEGORIES: BgmiNameCategory[] = [
  {
    id: "cool",
    pillLabel: "🔥 Cool",
    h2: "Cool BGMI Names 2025",
    itemListLabel: "Cool BGMI name",
    intro:
      "Cool BGMI names work for any playstyle — they sound impressive without trying too hard. This mix of Bold Fraktur, Cursive Script, and border-decorated names covers Hinglish and English picks alike.",
    names: [
      "꧁𝕾𝖍𝖆𝖉𝖔𝖜꧂",
      "𝑺𝒉𝒂𝒅𝒐𝒘𝑯𝒖𝒏𝒕",
      "𝕾𝖙𝖔𝖗𝖒",
      "꧁𝑺𝒕𝒐𝒓𝒎𝑩𝒓𝒆𝒂𝒌꧂",
      "𝑫𝒂𝒓𝒌𝑭𝒐𝒓𝒆𝒔𝒕",
      "𝕭𝖑𝖆𝖈𝖐𝕱𝖎𝖗𝖊",
      "꧁𝕷𝖊𝖌𝖊𝖓𝖉꧂",
      "𝑬𝒍𝒊𝒕𝒆𝑮𝒖𝒂𝒓𝒅",
      "𝕭𝖆𝖆𝖕𝕭𝖔𝖞",
      "꧁𝑫𝒆𝒔𝒊𝑩𝒐𝒔𝒔꧂",
      "𝑵𝒊𝒈𝒉𝒕𝑾𝒐𝒍𝒇",
      "𝕴𝖈𝖊𝕶𝖎𝖓𝖌",
      "꧁𝕻𝖍𝖆𝖓𝖙𝖔𝖒꧂",
      "𝖁𝖔𝖗𝖙𝖊𝖝",
      "𝑭𝒂𝒍𝒄𝒐𝒏",
      "꧁𝕭𝖑𝖆𝖟𝖊꧂",
      "𝑹𝒐𝒈𝒖𝒆𝑶𝒏𝒆",
      "𝕿𝖎𝖙𝖆𝖓",
      "꧁𝑴𝒂𝒗𝒆𝒓𝒊𝒄𝒌꧂",
      "𝖂𝖗𝖆𝖎𝖙𝖍",
    ],
  },
  {
    id: "attitude",
    pillLabel: "😈 Attitude",
    h2: "Attitude BGMI Names",
    itemListLabel: "Attitude BGMI name",
    intro:
      "Attitude BGMI names are built to intimidate before the first bullet flies. Dark Gothic fonts and aggressive vocabulary — King, Devil, Killer, Ghost — dominate this list, and it pairs well with our Psycho stylish name page if you want even more.",
    names: [
      "꧁𝕯𝖊𝖛𝖎𝖑𝕶𝖎𝖑𝖑𝖊𝖗꧂",
      "𝕯𝖆𝖗𝖐𝕯𝖊𝖛𝖎𝖑",
      "𝕶𝖎𝖓𝖌𝕺𝖋𝕶𝖎𝖑𝖑𝖘",
      "꧁𝕶𝖎𝖑𝖑𝖊𝖗𝕶𝖎𝖓𝖌꧂",
      "𝕲𝖍𝖔𝖘𝖙𝕾𝖓𝖎𝖕𝖊𝖗",
      "𝕾𝖍𝖆𝖉𝖔𝖜𝕭𝖊𝖆𝖘𝖙",
      "꧁𝕹𝖔𝕸𝖊𝖗𝖈𝖞꧂",
      "𝕭𝖑𝖔𝖔𝖉𝕳𝖚𝖓𝖙",
      "𝕾𝖆𝖛𝖆𝖌𝖊",
      "꧁𝖂𝖆𝖗𝕷𝖔𝖗𝖉꧂",
      "𝕭𝖊𝖗𝖘𝖊𝖗𝖐𝖊𝖗",
      "𝕽𝖚𝖙𝖍𝖑𝖊𝖘𝖘",
      "꧁𝕯𝖊𝖆𝖙𝖍𝕯𝖊𝖆𝖑𝖊𝖗꧂",
      "𝕴𝖗𝖔𝖓𝕱𝖎𝖘𝖙",
      "𝕿𝖞𝖗𝖆𝖓𝖙",
      "꧁𝕾𝖑𝖆𝖞𝖊𝖗꧂",
      "𝔅𝔞𝔡𝔅𝔬𝔶",
      "꧁𝕺𝖚𝖙𝖑𝖆𝖜꧂",
      "𝕽𝖊𝖆𝖕𝖊𝖗",
      "꧁𝖁𝖊𝖓𝖉𝖊𝖙𝖙𝖆꧂",
    ],
  },
  {
    id: "funny",
    pillLabel: "😂 Funny",
    h2: "Funny BGMI Names",
    itemListLabel: "Funny BGMI name",
    intro:
      "Funny BGMI names are the ones your squad actually screenshots and shares. Self-deprecating noob jokes, Hinglish memes, and relatable BGMI struggles dominate this category — most of them double as unique names for Free Fire too — and it's a close cousin of our Nobita nickname style page.",
    names: [
      "꧁𝑴𝒊𝒔𝒔𝒊𝒏𝒈𝑺𝒉𝒐𝒕𝒔꧂",
      "𝑷𝒆𝒓𝒎𝒂𝑵𝒐𝒐𝒃",
      "𝑫𝒊𝒆𝒔𝑭𝒊𝒓𝒔𝒕",
      "꧁𝑩𝒐𝒕𝒆𝑳𝒐𝒐𝒕𝒆𝒅꧂",
      "𝑩𝒖𝒔𝒉𝑪𝒂𝒎𝒑𝒆𝒓",
      "𝑯𝒊𝒅𝒊𝒏𝒈𝑰𝒏𝑩𝒖𝒔𝒉",
      "꧁𝑲𝒚𝒂𝑨𝒂𝒂𝒂꧂",
      "𝑩𝒉𝒂𝒊𝑵𝒂𝒉𝒊𝒀𝒂𝒓",
      "𝑾𝒊𝒇𝒊𝑵𝒆𝒕𝒘𝒐𝒓𝒌",
      "𝑵𝒐𝒐𝒃𝑴𝒂𝒔𝒕𝒆𝒓",
      "꧁𝑹𝒖𝒔𝒉𝑴𝒂𝒓𝒐꧂",
      "𝑷𝒖𝒃𝒈𝑨𝒅𝒅𝒊𝒄𝒕",
      "꧁𝑷𝒊𝒏𝒈𝑲𝒂𝑩𝒂𝒅𝒍𝒂꧂",
      "𝑮𝒉𝒂𝒔𝒕𝒂𝑮𝒂𝒎𝒊𝒏𝒈",
      "𝑭𝒓𝒆𝒆𝑲𝒊𝒍𝒍𝑫𝒆𝒅𝒐",
      "𝑺𝒆𝒓𝒗𝒆𝒓𝑫𝒐𝒘𝒏",
      "𝑪𝒉𝒊𝒄𝒌𝒆𝒏𝑫𝒊𝒏𝒏𝒆𝒓",
      "𝑭𝒖𝒍𝒍𝑺𝒒𝒖𝒂𝒅𝑾𝒊𝒑𝒆",
      "꧁𝑳𝒂𝒈𝑲𝒂𝑫𝒂𝒓𝒅꧂",
      "𝑵𝒐𝑺𝒌𝒊𝒍𝒍𝑶𝒏𝒍𝒚𝑳𝒖𝒄𝒌",
    ],
  },
  {
    id: "girl",
    pillLabel: "🌸 Girl",
    h2: "Girl BGMI Names",
    itemListLabel: "Girl BGMI name",
    intro:
      "Girl BGMI names deserve better than an afterthought — this list is elegant, confident, and never babyish. Flower borders, royal vocabulary, and one-word power names all make the cut.",
    names: [
      "꧁𝑸𝒖𝒆𝒆𝒏𝑶𝒇𝑲𝒊𝒍𝒍𝒔꧂",
      "𝕾𝖙𝖆𝖗𝕲𝖎𝖗𝖑",
      "𝕰𝖒𝖕𝖗𝖊𝖘𝖘𝕶𝖎𝖑𝖑𝖊𝖗",
      "꧁𝕲𝖎𝖗𝖑𝕬𝖙𝖙𝖎𝖙𝖚𝖉𝖊꧂",
      "𝑫𝒆𝒂𝒅𝒍𝒚𝑳𝒂𝒅𝒚",
      "𝑺𝒉𝒆𝑪𝒐𝒏𝒒𝒖𝒆𝒓𝒔",
      "꧁𝑷𝒓𝒊𝒏𝒄𝒆𝒔𝒔𝑯𝒖𝒏𝒕꧂",
      "𝑪𝒖𝒕𝒆𝑺𝒏𝒊𝒑𝒆𝒓",
      "𝑹𝒐𝒚𝒂𝒍𝑸𝒖𝒆𝒆𝒏",
      "꧁𝑷𝒊𝒏𝒌𝑾𝒂𝒓𝒓𝒊𝒐𝒓꧂",
      "𝑺𝒘𝒆𝒆𝒕𝑲𝒊𝒍𝒍𝒆𝒓",
      "𝑴𝒐𝒐𝒏𝑸𝒖𝒆𝒆𝒏",
      "✿𝑭𝒊𝒆𝒓𝒚𝑨𝒏𝒈𝒆𝒍✿",
      "𝑸𝒖𝒆𝒆𝒏𝑩𝒆𝒆",
      "𝑫𝒊𝒗𝒂𝑮𝒂𝒎𝒆𝒓",
      "🌸𝑩𝒂𝒅𝑮𝒊𝒓𝒍𝑽𝒊𝒃𝒆🌸",
      "𝑴𝒚𝒔𝒕𝒊𝒄𝑮𝒊𝒓𝒍",
      "𝑹𝒐𝒔𝒆𝑸𝒖𝒆𝒆𝒏",
      "꧁👑𝑺𝒂𝒔𝒔𝒚𝑸𝒖𝒆𝒆𝒏꧂",
      "𝑮𝒐𝒍𝒅𝒆𝒏𝑮𝒊𝒓𝒍",
    ],
  },
  {
    id: "pro",
    pillLabel: "🏆 Pro",
    h2: "Pro Player Style BGMI Names",
    itemListLabel: "Pro Player BGMI name",
    intro:
      "Pro player style BGMI names mimic the clean, minimal look of top esports players and streamers. Double Struck fonts and precise formatting signal serious intent the moment your name loads into the lobby.",
    names: [
      "꧁𝔻𝕣𝔸꧂",
      "𝕰𝖑𝖎𝖙𝖊",
      "ℙ𝕣𝕠",
      "꧁𝕷𝖎𝖛𝖊𝕲𝖔𝖉꧂",
      "𝕾𝖙𝖗𝖊𝖆𝖒𝕶𝖎𝖑𝖑",
      "𝔾𝕠𝕕𝕃𝕖𝕧𝕖𝕝",
      "꧁𝕄𝕒𝕩𝕊𝕜𝕚𝕝𝕝꧂",
      "𝔸𝕡𝕖𝕩𝔸𝕚𝕞",
      "𝕮𝖑𝖚𝖙𝖈𝖍𝕶𝖎𝖓𝖌",
      "꧁ℙ𝕣𝕠𝔾𝕒𝕞𝕖𝕣꧂",
      "𝕋𝕠𝕡𝔽𝕣𝕒𝕘",
      "𝕄𝕒𝕚𝕟ℂ𝕒𝕣𝕣𝕪",
      "꧁𝕊𝕜𝕚𝕝𝕝𝔾𝕠𝕕꧂",
      "𝔸𝕔𝕖𝕊𝕙𝕠𝕥",
      "ℤ𝕖𝕣𝕠𝔻𝕖𝕒𝕥𝕙",
    ],
  },
  {
    id: "short",
    pillLabel: "⚡ Short",
    h2: "Short BGMI Names (Under 10 Characters)",
    itemListLabel: "Short BGMI name",
    intro:
      "Short BGMI names stay under 10 characters, which matters because BGMI's 16-character cap eats up fast once you add a clan tag prefix. Every name below shows its exact character count so you know it fits before you copy.",
    names: [
      "꧁𝑫𝒆𝒂𝒅꧂",
      "𝑮𝒐𝒅𝒛",
      "𝕷𝖔𝖗𝖉",
      "꧁𝕲𝖍𝖔𝖘𝖙꧂",
      "𝑪𝒉𝒂𝒐𝒔",
      "𝕭𝖊𝖆𝖘𝖙",
      "꧁𝑵𝒐𝒗𝒂꧂",
      "𝖅𝖊𝖚𝖘",
      "𝑭𝒐𝒙",
      "꧁𝖂𝖔𝖑𝖋꧂",
      "𝑺𝒍𝒚",
      "𝔸𝕔𝕖",
      "꧁𝕽𝖊𝖝꧂",
      "𝑲𝒂𝒊",
      "⚡𝑱𝒊𝒏𝒙⚡",
    ],
  },
];

export function getAllBgmiListNames(): string[] {
  return BGMI_NAME_CATEGORIES.flatMap((category) => category.names);
}

export function charCount(name: string): number {
  return [...name].length;
}

export type BgmiListFaqItem = {
  question: string;
  answer: string;
};

export const BGMI_LIST_FAQ: BgmiListFaqItem[] = [
  {
    question: "What are the best BGMI stylish names for 2025?",
    answer:
      "The best BGMI stylish names for 2025 balance a bold look with readability in the lobby — the Cool and Pro Player sections above are the best starting points, since they use clean Bold Fraktur, Cursive Script, and Double Struck fonts that top players actually use. Want it personalised? Run your own name through our BGMI name generator to get 18 fancy Unicode styles instantly.",
  },
  {
    question: "How do I copy a BGMI stylish name from this list?",
    answer:
      "Tap the Copy button next to any name on this list — it copies instantly to your clipboard. Then open BGMI, tap your avatar in the top-left corner, choose Edit Profile, tap the Name field, long-press inside the text box, and select Paste. Tap Save and your new stylish name is live.",
  },
  {
    question: "Do these BGMI names work after the latest update?",
    answer:
      "Yes. These names use standard Unicode characters that BGMI has supported since launch, so they are independent of game updates and season patches. The 16-character name limit hasn't changed either — every name on this list was checked to fit within it.",
  },
  {
    question: "Can I use these names in Free Fire too?",
    answer:
      "Yes — most names on this list work in Free Fire as well. Free Fire's character limit is 20, higher than BGMI's 16, so anything that fits here will fit there too. For more Free Fire–specific styles, try our Free Fire name generator.",
  },
];

export function buildBgmiListJsonLd() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "100+ BGMI Stylish Names List 2025",
    url: BGMI_LIST_PAGE_URL,
    description:
      "100+ copy paste ready BGMI stylish names for 2025 — cool, attitude, funny and girl BGMI names tested to work in Battlegrounds Mobile India.",
    datePublished: "2025-01-01",
    dateModified: BGMI_LIST_LAST_UPDATED,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "BGMI Stylish Names List",
        item: BGMI_LIST_PAGE_URL,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BGMI_LIST_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  let position = 0;
  const itemListElement = BGMI_NAME_CATEGORIES.flatMap((category) =>
    category.names.map((name) => {
      position += 1;
      return {
        "@type": "ListItem",
        position,
        name,
        description: category.itemListLabel,
      };
    }),
  );

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BGMI Stylish Names List 2025",
    description:
      "100+ copy paste ready stylish names for Battlegrounds Mobile India — cool, attitude, funny and girl BGMI names",
    numberOfItems: itemListElement.length,
    itemListElement,
  };

  return { webPage, breadcrumb, faq, itemList };
}
