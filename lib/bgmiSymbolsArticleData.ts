/** BGMI symbols page — expert article tables and frameworks. */

export const BGMI_SYMBOL_BYTE_BUDGET_TABLE = [
  {
    category: "ASCII letters & digits (A–Z, 0–9)",
    bytesPerChar: "1 byte",
    example: "Pro",
    borderPairCost: "—",
    nameCharsRemaining: "Up to ~14 chars in a typical limit",
  },
  {
    category: "BMP symbols (★ ꧁ ꧂ ♛ 彡 ☬)",
    bytesPerChar: "2–3 bytes (UTF-8)",
    example: "★",
    borderPairCost: "4–6 bytes for ꧁…꧂ pair",
    nameCharsRemaining: "Budget 6 bytes for borders → ~8 left for letters",
  },
  {
    category: "Common emoji (👑 🔥 ⚡ 💀)",
    bytesPerChar: "4 bytes each",
    example: "👑",
    borderPairCost: "8 bytes for two emoji borders",
    nameCharsRemaining: "Often only 6–8 bytes left for your actual name",
  },
  {
    category: "SMP decorative (𓃠 𓆩 𓆪)",
    bytesPerChar: "4 bytes each",
    example: "𓆩",
    borderPairCost: "12 bytes for three SMP glyphs",
    nameCharsRemaining: "Almost no room for a readable nickname",
  },
  {
    category: "Invisible / zero-width (U+200C U+200D U+3164)",
    bytesPerChar: "1–3 bytes, zero visible width",
    example: "ㅤ",
    borderPairCost: "Consumes budget silently",
    nameCharsRemaining: "Can cause silent validation failure",
  },
] as const;

export const BGMI_SYMBOL_BORDER_TRADEOFF = [
  {
    style: "Byte-efficient (recommended)",
    preview: "꧁ Pro ꧂",
    byteCost: "~8 bytes borders + name",
    tradeoff: "Classic look, survives most devices and patches",
  },
  {
    style: "Moderate decoration",
    preview: "★彡Pro彡★",
    byteCost: "~12 bytes borders + name",
    tradeoff: "Visually richer; still fits on most phones",
  },
  {
    style: "Emoji-heavy",
    preview: "👑🔥Pro🔥👑",
    byteCost: "~16+ bytes before letters",
    tradeoff: "Impressive on flagship Android 12+; often truncates",
  },
  {
    style: "SMP exotic stack",
    preview: "𓆩𓃠Pro𓃠𓆪",
    byteCost: "~20+ bytes for borders alone",
    tradeoff: "Frequently rejected or shows □ on budget devices",
  },
] as const;

export const BGMI_SYMBOL_PATCH_TIERS = [
  {
    tier: "Stable",
    risk: "Low churn",
    examples: "★ ꧁ ꧂ ♛ 彡 ☬ ✿",
    notes:
      "Core BMP symbols in Unicode's most-supported range. Krafton rarely blocks these because millions of existing accounts already use them.",
  },
  {
    tier: "Moderate risk",
    risk: "OS-dependent",
    examples: "👑 🔥 ⚡ 🪷 💀 (emoji)",
    notes:
      "Subject to Android/iOS emoji version updates, not just BGMI patches. Emoji 14.0+ glyphs fail on older OS builds even when BGMI accepts them.",
  },
  {
    tier: "High churn",
    risk: "Frequently removed",
    examples: "𓃠 𓆩 𓆪 Tibetan, Batak, rare blocks",
    notes:
      "Anti-cheat patches often tighten filters after invisible-character exploits — collateral symbols in these blocks get caught and rejected.",
  },
] as const;

export const BGMI_SYMBOL_MYTHS_TABLE = [
  {
    myth: "Any Unicode symbol works in BGMI",
    reality:
      "BGMI runs a server-side blocklist that rejects specific codepoint ranges. The game does not simply render whatever Unicode allows.",
    detail:
      "Submission can fail with no error message when you hit a blocked range — always test in the rename preview before spending a Rename Card.",
  },
  {
    myth: "Symbols copied from other players' names always work",
    reality:
      "You may be copying from a name set before a patch that has since blocked those characters. Their name displays because it is grandfathered.",
    detail:
      "Grandfathered names survive display but cannot be re-applied if you change away and try to copy the same string back.",
  },
  {
    myth: "More symbols = more impressive name",
    reality:
      "Byte budget limits mean stacking 4+ emoji borders often leaves 2–3 characters for your actual name. Top-ranked players typically use 1–2 anchor symbols.",
    detail:
      "In Conqueror lobbies, heavy decoration reads as new-player compensation — minimal borders signal experience.",
  },
  {
    myth: "Invisible characters make your name look blank/mysterious",
    reality:
      "Krafton patched true blank names. Current invisible-character tricks either get rejected on submission or display as a box on opponents' screens.",
    detail:
      "Hangul Filler (ㅤ), zero-width joiners, and directional marks are the first targets in post-exploit patch cycles.",
  },
  {
    myth: "Symbol sites that say 'BGMI tested' are reliable",
    reality:
      "Most test once at publication with no re-test cadence. The 'tested' claim often has no timestamp or methodology behind it.",
    detail:
      "This library shows a last-updated date and removes symbols that break after patches — treat undated 'tested' lists with skepticism.",
  },
] as const;

export const BGMI_SYMBOL_DEVICE_TABLE = [
  {
    symbolCategory: "BMP borders (꧁ ꧂ ★ 彡)",
    flagship: "Renders cleanly",
    budgetMiui: "Renders cleanly",
    android9: "Renders cleanly",
  },
  {
    symbolCategory: "Emoji Unicode 9.0 or earlier",
    flagship: "Renders cleanly",
    budgetMiui: "Usually clean",
    android9: "Safe for 95%+ of devices",
  },
  {
    symbolCategory: "Emoji 14.0+ (🪷 etc.)",
    flagship: "Renders on Android 12+",
    budgetMiui: "□ on many budget builds",
    android9: "Shows missing-glyph box",
  },
  {
    symbolCategory: "Tibetan / Vai / Enclosed CJK extensions",
    flagship: "Often clean on Samsung/OnePlus",
    budgetMiui: "Frequent □ on stripped font sets",
    android9: "High missing-glyph rate",
  },
  {
    symbolCategory: "Egyptian Hieroglyphs (𓆩 𓃠)",
    flagship: "Inconsistent — needs extended fonts",
    budgetMiui: "Usually □",
    android9: "Usually □",
  },
] as const;

export const BGMI_SYMBOL_NAME_ARCHITECTURE = {
  anchor: "꧁",
  core: "Pro",
  accent: "★",
  fullPreview: "꧁ Pro ★",
  layers: [
    {
      layer: "Layer 1 — Anchor symbol",
      role: "1–2 stable chars that define your brand",
      example: "꧁ or ♛",
      note: "Pick once; rarely change across seasons",
    },
    {
      layer: "Layer 2 — Core identity",
      role: "Your actual nickname, stylized consistently",
      example: "Pro or 𝓟𝓻𝓸",
      note: "Keep identical across clan tags and social aliases",
    },
    {
      layer: "Layer 3 — Accent symbol",
      role: "1 char you can swap seasonally",
      example: "★ → 🔥 for a new season",
      note: "Refresh look without losing brand recall",
    },
  ],
} as const;

export const BGMI_SYMBOL_PLAYER_DECISION = [
  {
    playerType: "Solo ranked player",
    recommendation:
      "One border pair + clean core. Allocate byte budget to readability, not decoration stacks.",
    example: "꧁Pro꧂ or ☬Pro☬",
  },
  {
    playerType: "Clan member / leader",
    recommendation:
      "Define a shared anchor symbol enforced across all members. Audiences recognise ꧁CLAN꧂ patterns instantly in kill feeds.",
    example: "꧁𝕮𝕷𝕬𝕹|Name꧂",
  },
  {
    playerType: "Content creator",
    recommendation:
      "Maintain a text-safe alias (no symbols) for YouTube, Instagram, and Discord alongside your BGMI name. Keep a symbol changelog with screenshots.",
    example: "BGMI: ꧁𝓢𝓱𝓪𝓭𝓸𝔀꧂ · Alias: Shadow",
  },
] as const;

export const BGMI_SYMBOL_RENAME_TIPS = [
  "Screenshot your exact name string before every rename — byte-for-byte originals are lost once you change away.",
  "Create a throwaway account to test exotic symbols; note the patch version and re-check after the next update.",
  "Hold Rename Cards for seasonal events when Krafton occasionally offers free renames.",
  "Build a primary name (full aesthetic) and a BMP fallback (꧁Pro꧂) for immediate swap after patch breaks.",
] as const;
