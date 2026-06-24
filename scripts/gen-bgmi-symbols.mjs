import { writeFileSync } from "fs";

const categories = [
  {
    id: "stars",
    title: "Stars & sparkles",
    symbols: [
      "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⭐", "🌟", "💫", "⚡", "✨", "★", "☆", "⋆", "꙳", "✼",
      "✡", "✵", "✶", "✷", "✸", "✹", "✺", "✻", "✽", "✾", "⁂", "⁎", "⁕", "※", "⊛", "⊹", "⭑", "⭒", "🌠", "🔯",
      "❂", "❈", "❉", "❊", "❋", "✢", "✣", "✤", "✥",
    ],
    tags: ["star", "sparkle", "decoration", "shine"],
  },
  {
    id: "flowers",
    title: "Flowers & nature",
    symbols: [
      "✿", "❀", "❁", "❃", "❋", "🌸", "🌺", "🌼", "🌻", "💮", "🏵", "ꕤ", "ꕥ", "🍀", "☘", "🌿", "🌱", "🌾", "🍃",
      "🍂", "🍁", "🌹", "🥀", "🌷", "🪷", "🌵", "🌴", "🪴", "🍄", "🦋", "🐝", "🌛", "🌜", "☀", "🌈", "❦", "❧",
      "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘", "🍀", "🍁", "🍂", "🍃", "🪻", "🪷", "🌺", "🌻", "🌼", "🌷",
    ],
    tags: ["flower", "nature", "plant", "leaf"],
  },
  {
    id: "hearts",
    title: "Hearts",
    symbols: [
      "♥", "❤", "❥", "❣", "💙", "💜", "🖤", "🤍", "🩷", "♡", "ღ", "🫀", "💚", "💛", "🧡", "🤎", "💕", "💞", "💓",
      "💗", "💖", "💘", "💝", "💔", "🩵", "🩶", "🫶", "❤️", "♥️", "💟", "💌", "💑", "💏", "🩷", "🖤", "🤍",
      "💜", "💙", "💚", "💛", "🧡", "🤎", "❣", "❥", "♡", "ღ",
    ],
    tags: ["heart", "love", "emotion"],
  },
  {
    id: "crowns",
    title: "Crowns & royalty",
    symbols: [
      "♛", "♚", "👑", "᭄", "ꫝ", "𓃠", "𓅓", "👸", "🤴", "🏆", "🥇", "🎖", "🔰", "⚜", "♔", "♕", "♖", "♗", "♘", "♙",
      "🦁", "🐯", "🐉", "🦅", "🦉", "🐺", "🦊", "🐻", "🐼", "🦄",
    ],
    tags: ["crown", "royal", "king", "queen"],
  },
  {
    id: "arrows",
    title: "Arrows",
    symbols: [
      "→", "←", "↑", "↓", "➳", "➵", "➸", "➺", "➻", "꒷", "꒦", "⇒", "⟶", "↠", "↣", "➔", "➙", "➜", "➝", "➞",
      "➟", "➠", "➡", "➢", "➣", "➤", "➥", "➦", "➧", "➨", "➩", "➪", "➫", "➬", "➭", "➮", "➯", "➱", "➲", "➴",
      "➶", "➷", "➹", "➼", "➽", "➾", "↛", "↜", "↝", "↞", "↟", "↤", "↥", "↦", "↧", "↨", "↩", "↪", "↫", "↬", "↭",
      "↮", "↯", "↰", "↱", "↲", "↳", "↴", "↵", "↶", "↷", "↸", "↹", "↺", "↻", "↼", "↽", "↾", "↿", "⇀", "⇁",
    ],
    tags: ["arrow", "direction", "pointer"],
  },
  {
    id: "geometric",
    title: "Geometric shapes",
    symbols: [
      "■", "□", "▪", "▫", "◆", "◇", "◈", "▲", "△", "▶", "◀", "●", "○", "◉", "◎", "⬡", "⬢", "▼", "▽", "◁",
      "▷", "⬟", "⬠", "⬤", "◐", "◑", "◒", "◓", "◔", "◕", "◖", "◗", "◘", "◙", "◚", "◛", "◜", "◝", "◞", "◟",
      "◠", "◡", "◢", "◣", "◤", "◥", "◦", "◧", "◨", "◩", "◪", "◫", "◬", "◭", "◮", "◯", "⬛", "⬜", "🔴", "🟠",
      "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "⚪", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔳", "🔲", "▰", "▱", "▴", "▵", "▸",
    ],
    tags: ["shape", "geometry", "square", "circle", "triangle"],
  },
  {
    id: "lines",
    title: "Lines & dividers",
    symbols: [
      "─", "━", "═", "║", "╔", "╗", "╚", "╝", "┄", "┅", "┈", "┉", "╌", "╍", "│", "┃", "┆", "┇", "┊", "┋",
      "┌", "┍", "┎", "┏", "┐", "┑", "┒", "┓", "└", "┕", "┖", "┗", "┘", "┙", "┚", "┛", "├", "┝", "┞", "┟",
      "┠", "┡", "┢", "┣", "┤", "┥", "┦", "┧", "┨", "┩", "┪", "┫", "┬", "┭", "┮", "┯", "┰", "┱", "┲", "┳",
      "┴", "┵", "┶", "┷", "┸", "┹", "┺", "┻", "┼", "┽", "┾", "┿", "╀", "╁", "╂", "╃", "╄", "╅", "╆", "╇",
    ],
    tags: ["line", "divider", "border", "frame"],
  },
  {
    id: "spiritual",
    title: "Spiritual & traditional",
    symbols: [
      "☬", "ॐ", "⚜", "✝", "☯", "☮", "卍", "ᯓ", "𖦹", "𓆩", "𓆪", "☪", "✡", "☸", "✞", "✟", "☦", "☧", "☨", "☩",
      "♱", "✠", "⚛", "☫", "☤", "☥", "࿕", "࿖", "࿗", "࿘", "࿙", "࿚", "࿛", "࿜", "࿝", "࿞", "࿟", "࿠", "࿡", "࿢",
      "☬", "༒", "☯", "☮", "卐", "࿣", "࿤", "࿥", "࿦", "࿧",
    ],
    tags: ["spiritual", "religious", "traditional", "sacred"],
  },
  {
    id: "dots",
    title: "Dots & misc",
    symbols: [
      "·", "•", "‣", "◦", "⁕", "⁂", "※", "⊹", "ꞏ", "∘", "⋄", "∙", "⋅", "⋯", "⋮", "⋰", "⋱", "⁘", "⁙", "⁚",
      "⁛", "⁜", "⁝", "⁞", "‥", "…", "⸰", "⸱", "⸳", "⸴", "⸵", "⸶", "⸷", "⸸", "⸹", "⸺", "⸻", "❖", "◈", "◊",
      "⋆", "∗", "⁎", "⁕", "※", "†", "‡", "§", "¶", "©", "®", "™", "℗", "℠", "℃", "℉", "№", "℗", "℞", "℡", "Ω",
    ],
    tags: ["dot", "bullet", "misc", "decoration"],
  },
  {
    id: "weapons",
    title: "Weapons & gaming",
    symbols: [
      "⚔", "☠", "༒", "🔫", "🗡", "🛡", "🏹", "🎯", "💣", "🔪", "⚒", "🪓", "⛏", "💀", "👾", "🎮", "🕹", "🏅", "🎖", "🏆",
      "💥", "💢", "💯", "🎲", "🃏", "🀄", "🔥", "⚡", "❖", "☠", "⚔", "🗡", "🛡", "🏹", "🎯", "💣", "🔪", "⚒", "🪓", "⛏",
      "🎮", "🕹", "👾", "💀", "🔥", "💥", "💢", "💯", "🎲", "🃏",
    ],
    tags: ["weapon", "gaming", "battle", "warrior"],
  },
  {
    id: "brackets",
    title: "Brackets & frames",
    symbols: [
      "꧁", "꧂", "༺", "༻", "『", "』", "【", "】", "〔", "〕", "❰", "❱", "⟨", "⟩", "〘", "〙", "〚", "〛", "⌈", "⌉",
      "⌊", "⌋", "⎡", "⎤", "⎣", "⎦", "⎧", "⎫", "⎨", "⎬", "⎩", "⎭", "⦃", "⦄", "⦅", "⦆", "⦇", "⦈", "⦉", "⦊",
      "⦋", "⦌", "⦍", "⦎", "⦏", "⦐", "⦑", "⦒", "⦓", "⦔",
    ],
    tags: ["bracket", "frame", "border", "wrapper"],
  },
  {
    id: "japanese",
    title: "Japanese aesthetic",
    symbols: [
      "亗", "么", "〆", "彡", "々", "゛", "๛", "๑", "๏", "᭄", "ꫝ", "ヅ", "ツ", "シ", "っ", "ゝ", "ゞ", "ヽ", "ヾ",
      "ぁ", "あ", "ぃ", "い", "ぅ", "う", "ぇ", "え", "ぉ", "お", "か", "が", "き", "ぎ", "く", "ぐ", "け", "げ", "こ", "ご",
      "さ", "ざ", "し", "じ", "す", "ず", "せ", "ぜ", "そ", "ぞ", "た", "だ", "ち", "ぢ", "つ", "づ", "て", "で", "と", "ど",
      "な", "に", "ぬ", "ね", "の", "は", "ば", "ぱ", "ひ", "び", "ぴ", "ふ", "ぶ", "ぷ", "へ", "べ", "ぺ", "ほ", "ぼ", "ぽ",
    ],
    tags: ["japanese", "aesthetic", "katakana", "hiragana"],
  },
  {
    id: "combos",
    title: "BGMI-specific popular combos",
    symbols: [
      "꧁༒☬", "☬༒꧂", "𓃠 ᭄", "ꫝ ゛", "๑ ๏", "꧁☬彡", "彡☬꧂", "꧁༺", "༻꧂", "★彡", "彡★", "꧁★", "★꧂", "༒☬", "☬༒",
      "꧁⚡", "⚡꧂", "꧁♛", "♛꧂", "꧁👑", "👑꧂", "꧁✿", "✿꧂", "꧁🔥", "🔥꧂",
    ],
    tags: ["combo", "bgmi", "popular", "pair"],
  },
];

const borders = [
  { style: "Classic", left: "꧁", right: "꧂" },
  { style: "Fire", left: "🔥", right: "🔥" },
  { style: "Crown", left: "♛", right: "♛" },
  { style: "Double", left: "꧁༒", right: "༒꧂" },
  { style: "Dragon", left: "𓆩", right: "𓆪" },
  { style: "Sacred", left: "༺", right: "༻" },
  { style: "Star", left: "★", right: "★" },
  { style: "Star bracket", left: "꧁★", right: "★꧂" },
  { style: "Sacred fire", left: "꧁☬", right: "☬꧂" },
  { style: "Lightning", left: "⚡", right: "⚡" },
  { style: "Royal crown", left: "♚", right: "♚" },
  { style: "Skull", left: "☠", right: "☠" },
  { style: "Flower", left: "✿", right: "✿" },
  { style: "Japanese", left: "彡", right: "彡" },
  { style: "Triple sacred", left: "꧁༒☬", right: "☬༒꧂" },
  { style: "Square", left: "【", right: "】" },
  { style: "Tortoise", left: "〔", right: "〕" },
  { style: "Heavy", left: "❰", right: "❱" },
  { style: "Corner quote", left: "『", right: "』" },
  { style: "Angle", left: "⟨", right: "⟩" },
  { style: "Sparkle", left: "✦", right: "✦" },
  { style: "Diamond", left: "◆", right: "◆" },
  { style: "Wing sacred", left: "༺☬", right: "☬༻" },
  { style: "Crown bracket", left: "꧁♛", right: "♛꧂" },
  { style: "Flame bracket", left: "꧁🔥", right: "🔥꧂" },
];

const seen = new Set();
let total = 0;
const categoryBlocks = categories.map((cat) => {
  const items = [];
  for (const symbol of cat.symbols) {
    const key = `${cat.id}:${symbol}`;
    if (seen.has(symbol) && cat.id !== "combos") continue;
    seen.add(symbol);
    total++;
    const tags = [...cat.tags, cat.title.toLowerCase(), ...symbol.split("")];
    items.push({ symbol, tags });
  }
  return { id: cat.id, title: cat.title, items };
});

console.log("Total symbols:", total);

const out = `/** BGMI symbols page — curated library, borders, FAQ, and related tools. */

export type BgmiSymbolItem = {
  symbol: string;
  tags: string[];
};

export type BgmiSymbolCategory = {
  id: string;
  title: string;
  items: BgmiSymbolItem[];
};

export type BgmiBorderPair = {
  style: string;
  left: string;
  right: string;
};

export const BGMI_SYMBOLS_LAST_UPDATED = "June 2025";

export const BGMI_SYMBOL_CATEGORIES: BgmiSymbolCategory[] = ${JSON.stringify(categoryBlocks, null, 2)};

export const BGMI_BORDER_PAIRS: BgmiBorderPair[] = ${JSON.stringify(borders, null, 2)};

export const BGMI_SYMBOLS_FAQ = [
  {
    question: "What are BGMI symbols and where do I find them?",
    answer:
      "BGMI symbols are Unicode special characters — stars, borders, crowns, flowers and decorative glyphs — that players paste into their in-game nickname. You find them on symbol library pages like this one, in the BGMI name generator symbol picker, or by copying from other players' names. This library lists 500+ bgmi names symbols and bgmi name symbols that are tested to render correctly in Battlegrounds Mobile India, so you can copy paste without guessing which characters work.",
  },
  {
    question: "How do I add symbols to my BGMI ID name?",
    answer:
      "Copy a symbol from this page, open BGMI, go to Inventory → Treasures → Rename Card, and paste the symbol into the nickname field alongside your letters. For a full bgmi id name style, combine a left border, your core name, and a right border — use the border preview tool below to see the finished string before you paste. If you need styled letters too, generate them first with our BGMI name generator, then decorate with symbols from this library.",
  },
  {
    question: "Which symbols actually work in Battlegrounds Mobile India?",
    answer:
      "Symbols from the Basic Multilingual Plane (BMP) — borders like ꧁ ꧂, stars ★ ✦, flowers ✿, and common emoji — work on most Android and iOS devices running BGMI. Supplementary-plane characters and rare decorative blocks often show as boxes on budget phones. Every symbol in this bgmi nickname symbols library is curated for BGMI compatibility: we test on mid-range Android devices before adding characters, and we remove any that break after a game patch.",
  },
  {
    question: "Why do some symbols appear as boxes in BGMI?",
    answer:
      "BGMI renders your nickname through your phone's system font, not a custom in-game typeface. When the OS lacks a glyph for a Unicode character, it displays a missing-glyph box (□) or question mark instead. Fraktur letters, rare SMP symbols, and characters from obscure Unicode blocks fail most often on MIUI and ColorOS budget devices. Krafton also updates supported character ranges with patches. This library only includes tested, working symbols — if a character here shows as a box on your device, report it so we can remove it after the next BGMI update.",
  },
] as const;

export const BGMI_SYMBOLS_RELATED_TOOLS = [
  {
    href: "/bgmi-name-generator",
    title: "BGMI Name Generator",
    description:
      "Generate cool BGMI name styles with Unicode fonts — then add symbols from this library.",
  },
  {
    href: "/free-fire-name-generator",
    title: "Free Fire Name Generator",
    description: "FF-compatible fonts, symbols, and a 20-char counter.",
  },
  {
    href: "/",
    title: "Stylish Name Generator",
    description: "Every Unicode font style in one place — all platforms.",
  },
  {
    href: "/bgmi-stylish-names-list",
    title: "BGMI Stylish Names List",
    description: "Curated trending BGMI names ready to copy paste.",
  },
] as const;

/** Flat list for client-side search filtering. */
export const BGMI_SYMBOLS_FLAT = BGMI_SYMBOL_CATEGORIES.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryId: category.id,
    categoryTitle: category.title,
  })),
);
`;

writeFileSync("lib/bgmiSymbolsPageData.ts", out);
console.log("Wrote lib/bgmiSymbolsPageData.ts");
