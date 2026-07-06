/**
 * Wavy text is NOT a font — it is normal letters with invisible Unicode
 * combining characters (diacritics) layered on top. Each style defines a
 * pattern of combining marks applied cyclically across the input letters, so
 * the output is just the input string with combiners interleaved. No font
 * maps, no character substitution tables.
 */

export type WaveStyle = {
  id: string;
  name: string;
  /** Short label used on the style-switcher preview cards. */
  blurb: string;
  /** Set when the style stacks heavy combiners that some apps may drop. */
  warn?: boolean;
  apply: (text: string) => string;
};

/** Skip spaces/line breaks so combiners never land on whitespace. */
function isSkippable(ch: string): boolean {
  return ch === " " || ch === "\n" || ch === "\t" || ch === "\r";
}

/** Apply a repeating pattern of combining-character sequences per letter. */
function cyclic(pattern: readonly string[]): (text: string) => string {
  return (text: string) => {
    let slot = 0;
    return Array.from(text)
      .map((ch) => {
        if (isSkippable(ch)) return ch;
        const marks = pattern[slot % pattern.length];
        slot += 1;
        return ch + marks;
      })
      .join("");
  };
}

// Zalgo-lite combiner pools for the Chaos Wave style.
const ZALGO_UP = [
  "\u0300",
  "\u0301",
  "\u0303",
  "\u0304",
  "\u0306",
  "\u0308",
  "\u030A",
  "\u030B",
  "\u0312",
  "\u0314",
  "\u033D",
  "\u0350",
  "\u0357",
] as const;

const ZALGO_DOWN = [
  "\u0316",
  "\u0317",
  "\u0319",
  "\u031C",
  "\u0323",
  "\u0324",
  "\u0325",
  "\u032E",
  "\u0330",
  "\u0332",
  "\u0345",
] as const;

const ZALGO_MID = ["\u0334", "\u0335", "\u0337"] as const;

/**
 * Deterministic Chaos Wave. A seeded PRNG keyed on the character and its
 * position guarantees the same input always produces the same output, so the
 * server-rendered markup matches the client render (no hydration mismatch).
 */
function chaosWave(text: string): string {
  return Array.from(text)
    .map((ch, i) => {
      if (isSkippable(ch)) return ch;

      let seed = ((ch.codePointAt(0) ?? 0) * 73 + i * 131 + 17) >>> 0;
      const rand = () => {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return seed / 0x7fffffff;
      };

      let out = ch;
      const ups = 1 + Math.floor(rand() * 2);
      const mids = Math.floor(rand() * 2);
      const downs = 1 + Math.floor(rand() * 2);
      for (let j = 0; j < ups; j += 1)
        out += ZALGO_UP[Math.floor(rand() * ZALGO_UP.length)];
      for (let j = 0; j < mids; j += 1)
        out += ZALGO_MID[Math.floor(rand() * ZALGO_MID.length)];
      for (let j = 0; j < downs; j += 1)
        out += ZALGO_DOWN[Math.floor(rand() * ZALGO_DOWN.length)];
      return out;
    })
    .join("");
}

export const WAVE_STYLES: readonly WaveStyle[] = [
  {
    id: "classic",
    name: "Classic Wave",
    blurb: "Tilde above every letter — clean and widely supported.",
    apply: cyclic(["\u0303"]),
  },
  {
    id: "deep",
    name: "Deep Wave",
    blurb: "Dots stacked below the line for a sunken wave look.",
    apply: cyclic(["\u0323", "\u0324"]),
  },
  {
    id: "double",
    name: "Double Wave",
    blurb: "A double tilde that ripples across the whole word.",
    apply: cyclic(["\u0360"]),
  },
  {
    id: "bubble",
    name: "Bubble Wave",
    blurb: "A single dot floating above each letter.",
    apply: cyclic(["\u0307"]),
  },
  {
    id: "shadow",
    name: "Shadow Wave",
    blurb: "Underline plus a curl above for a layered wave.",
    apply: cyclic(["\u0332\u0311", "\u0332"]),
  },
  {
    id: "ocean",
    name: "Ocean Wave",
    blurb: "A wavy tilde underline that flows like water.",
    apply: cyclic(["\u0330"]),
  },
  {
    id: "ring",
    name: "Ring Wave",
    blurb: "Tiny rings above and below in an alternating wave.",
    apply: cyclic(["\u0366", "\u035A"]),
  },
  {
    id: "chaos",
    name: "Chaos Wave",
    blurb: "Heavy Zalgo-lite glitch — stands out, may not work everywhere.",
    warn: true,
    apply: chaosWave,
  },
] as const;

export const WAVE_STYLE_IDS = WAVE_STYLES.map((s) => s.id);

const WAVE_STYLE_MAP = new Map(WAVE_STYLES.map((s) => [s.id, s]));

export const DEFAULT_WAVE_STYLE_ID = "classic";

/** Word shown on the style preview cards when the input is empty. */
export const WAVE_SAMPLE_WORD = "Hello";

export function applyWaveStyle(text: string, styleId: string): string {
  const style = WAVE_STYLE_MAP.get(styleId) ?? WAVE_STYLES[0]!;
  return style.apply(text);
}

export type WaveUseCase = {
  id: string;
  title: string;
  href?: string;
  /** Anchor text for the internal link when href is present. */
  linkLabel?: string;
};

export const WAVE_USE_CASES: readonly WaveUseCase[] = [
  {
    id: "instagram",
    title: "Wavy text stands out in your Instagram bio.",
    href: "/instagram-stylish-fonts",
    linkLabel: "Instagram stylish fonts",
  },
  {
    id: "bgmi",
    title: "Classic wave style works in BGMI and Free Fire names.",
    href: "/bgmi-name-generator",
    linkLabel: "BGMI name generator",
  },
  {
    id: "whatsapp",
    title: "Wave fonts render correctly in WhatsApp on all devices.",
  },
  {
    id: "twitter",
    title: "Unicode wavy text works natively on Twitter and X bios.",
  },
] as const;

export type WaveFaqItem = {
  question: string;
  answer: string;
};

/** Plain-text answers power the FAQPage JSON-LD; the component renders a
 * link-enriched version for the questions that need internal links. */
export const WAVE_FAQ_ITEMS: readonly WaveFaqItem[] = [
  {
    question: "What is a wavy text generator?",
    answer:
      "A wavy text generator is a free online tool that turns plain letters into wavy text you can copy and paste anywhere. It works by layering invisible Unicode combining characters on top of normal letters to create the wave effect, so the result pastes as text — not an image — into Instagram, WhatsApp, BGMI and more. Type a word, pick a wave style, and copy it in one tap.",
  },
  {
    question: "How does wavy text work — is it a font?",
    answer:
      "No, wavy text is not a font and you do not need to install anything. The tool takes standard letters and stacks invisible Unicode combining characters (diacritic marks) above and below each one. Those marks are part of the Unicode standard, so the wavy effect travels with the text and shows up anywhere Unicode is supported. Because it is built on combining characters rather than a real font, the exact look can vary slightly between phones — your device's system font decides how the marks are drawn, which is why the same wavy text can look a little different on Android, iPhone and desktop.",
  },
  {
    question: "Does wavy text work in BGMI and Free Fire names?",
    answer:
      "Mostly yes, with a caveat. Light styles like Classic Wave and Bubble Wave usually accept fine in BGMI and Free Fire name fields and stay readable in the kill feed. Heavy styles — especially Chaos Wave — stack so many combining characters that some game name validators reject them or strip the marks, leaving plain letters. If a wavy name will not save in-game, switch to Classic Wave or pair it with our BGMI name generator and Free Fire name generator, which flag what each platform accepts.",
  },
  {
    question: "What is Zalgo text and how is it different from wavy text?",
    answer:
      "Zalgo text is an extreme version of combining-character text that piles dozens of marks on every letter so it appears to bleed and glitch across lines. Wavy text uses the same underlying trick — Unicode combining characters — but only a mark or two per letter, so it stays clean and readable. Our Chaos Wave style is a mild, Zalgo-lite take: it looks glitchy and dramatic for gaming names but is far lighter than full Zalgo, so it survives in more apps.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Expert-article data — platform rendering, normalization, myths,
 * field-test log, and developer reference. Kept here so the JSON-LD and
 * the rendered article share one source of truth.
 * ------------------------------------------------------------------ */

export type WavePlatformRow = {
  platform: string;
  renders: string;
  issues: string;
  safeStyles: string;
};

export const WAVE_PLATFORM_RENDERING: readonly WavePlatformRow[] = [
  {
    platform: "Android (Noto Sans / OEM)",
    renders: "Yes — varies by skin",
    issues:
      "OEM fonts stack diacritics at different heights; Samsung One UI is especially inconsistent and marks can overlap.",
    safeStyles: "Classic, Bubble",
  },
  {
    platform: "iOS (San Francisco)",
    renders: "Yes — clean",
    issues:
      "Tighter, more even stacking than Android, but apps layered on top may normalize (see WhatsApp).",
    safeStyles: "Classic, Ring",
  },
  {
    platform: "WhatsApp",
    renders: "Mostly",
    issues:
      "iOS performs NFC normalization before display; Double Wave (U+0360) can strip to a single mark on the receiver's end.",
    safeStyles: "Classic, Bubble, Ring",
  },
  {
    platform: "Instagram",
    renders: "Yes",
    issues:
      "Bio and caption use different renderers — styles that look clean in bio can clip vertically in captions.",
    safeStyles: "Classic, Bubble",
  },
  {
    platform: "BGMI (engine font)",
    renders: "Partial",
    issues:
      "Names render through the game engine font, not the system font; heavy marks show as boxes/plain and hit the byte limit.",
    safeStyles: "Classic only",
  },
  {
    platform: "Discord",
    renders: "Yes — reliable",
    issues:
      "No normalization on paste, so even heavy combining stacks survive intact.",
    safeStyles: "All, incl. Chaos",
  },
  {
    platform: "Clipboard (some Gboard builds)",
    renders: "n/a",
    issues:
      "Certain keyboard/clipboard builds silently strip combining marks on paste — looks like a generator bug but is the clipboard layer.",
    safeStyles: "Re-copy & test",
  },
];

export type WaveNormalizationTier = {
  useCase: string;
  risk: string;
  tier: string;
};

export const WAVE_NORMALIZATION_TIERS: readonly WaveNormalizationTier[] = [
  {
    useCase: "Discord username / nickname",
    risk: "None — Discord does not normalize",
    tier: "Any style, including Chaos Wave",
  },
  {
    useCase: "WhatsApp / Instagram bio",
    risk: "Low — display-time NFC on some clients",
    tier: "NFC-stable styles: Ring, Bubble, Deep",
  },
  {
    useCase: "Notion / Slack / Google Docs",
    risk: "Medium — NFC normalize on paste",
    tier: "Single-mark, no-precomposed styles: Ring",
  },
  {
    useCase: "Game / website registration form (DB-backed)",
    risk: "High — NFKC may strip to base letters",
    tier: "Expect plain text; keep a styled display copy elsewhere",
  },
];

export type WaveMyth = {
  myth: string;
  reality: string;
  verdict: "Fully False" | "Partially True" | "Context-Dependent";
};

export const WAVE_MYTHS: readonly WaveMyth[] = [
  {
    myth: "Wavy text works everywhere Unicode works.",
    reality:
      "Unicode support and combining-character support are different things. A platform can be fully Unicode-compliant yet render diacritic stacks wrong because its line-height, font metrics, or text-shaping engine was never built for deep stacks. LinkedIn is Unicode-compliant but aggressively normalizes bio fields, stripping most combining styles to plain text within seconds of saving.",
    verdict: "Fully False",
  },
  {
    myth: "More combining marks = a more dramatic wave.",
    reality:
      "Past roughly 3–4 marks per character, most engines stop stacking and start overlapping marks into visual noise rather than a wave. Chaos Wave works despite this — its randomization creates perceived depth, not genuinely 'more wave.'",
    verdict: "Partially True",
  },
  {
    myth: "Zalgo is just extreme wavy text.",
    reality:
      "Same mechanism, opposite intent. Wavy text is designed to stay legible — aesthetic layering. True Zalgo is designed to be illegible — intentional text destruction used as internet horror art. Chaos Wave is a cousin of Zalgo, not the same thing.",
    verdict: "Partially True",
  },
  {
    myth: "If it looks right in my preview, it's fine.",
    reality:
      "The preview renders in your browser using your OS font. The destination has its own font, shaping engine, and possibly normalization. The preview is always optimistic — test in the actual field before committing.",
    verdict: "Fully False",
  },
  {
    myth: "Wavy text is a recent trend.",
    reality:
      "Combining-character abuse for aesthetics dates back to at least 2004–2005 forum culture. The Zalgo meme that popularized mark-stacking was documented on Something Awful and 4chan before 2010. The audience changed, not the technique.",
    verdict: "Fully False",
  },
];

export type WaveFieldStatus = "pass" | "partial" | "fail";

export type WaveFieldTestRow = {
  style: string;
  instagram: WaveFieldStatus;
  whatsapp: WaveFieldStatus;
  bgmi: WaveFieldStatus;
  discord: WaveFieldStatus;
  twitter: WaveFieldStatus;
  verdict: string;
};

export const WAVE_FIELD_TEST: readonly WaveFieldTestRow[] = [
  {
    style: "Classic Wave",
    instagram: "pass",
    whatsapp: "pass",
    bgmi: "pass",
    discord: "pass",
    twitter: "pass",
    verdict: "Safe everywhere",
  },
  {
    style: "Bubble Wave",
    instagram: "pass",
    whatsapp: "pass",
    bgmi: "pass",
    discord: "pass",
    twitter: "pass",
    verdict: "Safe everywhere",
  },
  {
    style: "Deep Wave",
    instagram: "pass",
    whatsapp: "pass",
    bgmi: "partial",
    discord: "pass",
    twitter: "pass",
    verdict: "Reliable; light BGMI risk",
  },
  {
    style: "Ring Wave",
    instagram: "pass",
    whatsapp: "pass",
    bgmi: "partial",
    discord: "pass",
    twitter: "pass",
    verdict: "Most NFC-stable / durable",
  },
  {
    style: "Double Wave",
    instagram: "partial",
    whatsapp: "partial",
    bgmi: "fail",
    discord: "pass",
    twitter: "partial",
    verdict: "Fragile — collapses under NFC",
  },
  {
    style: "Chaos Wave",
    instagram: "partial",
    whatsapp: "partial",
    bgmi: "fail",
    discord: "pass",
    twitter: "partial",
    verdict: "Discord / flex use only",
  },
];

export const WAVE_RELATED_TOOLS = [
  {
    href: "/",
    title: "Stylish Name Generator",
    description: "Every Unicode font style in one place — all platforms.",
  },
  {
    href: "/freestyle-nickname-generator",
    title: "Freestyle Nickname Generator",
    description: "Fancy nicknames by vibe for gaming, social, and chat apps.",
  },
  {
    href: "/instagram-stylish-fonts",
    title: "Instagram Stylish Fonts",
    description: "Fancy Unicode bios, captions, and emoji for Instagram.",
  },
  {
    href: "/biology-font-style",
    title: "Biology Font Style",
    description: "Science fonts for projects, Instagram bios, and WhatsApp.",
  },
] as const;
