/**
 * Long-form EEAT content rows for the Hindi Stylish Fonts Generator page.
 * Mirrors the structure of marathiExpertContent.ts — each array feeds one
 * table or framework in components/HindiExpertArticle.tsx.
 */

/* Section 1 — cross-device rendering safety for the 28 border styles. */
export const RENDER_SAFETY_ROWS = [
  {
    pattern: "★ ♛ ✦ — BMP star / crown / sparkle frames",
    ios14: "Safe",
    android10: "Safe",
    whatsapp: "Safe",
  },
  {
    pattern: "❤️ 🔥 🌟 — standard emoji borders",
    ios14: "Safe",
    android10: "Safe",
    whatsapp: "Safe",
  },
  {
    pattern: "꧁ ꧂ — Tai Tham ornamental brackets (BMP, rare block)",
    ios14: "Mostly safe",
    android10: "Mostly safe",
    whatsapp: "Risky on WhatsApp Web (Windows Chrome)",
  },
  {
    pattern: "༺ ༻ — Tibetan ornament brackets (BMP, rare block)",
    ios14: "Mostly safe",
    android10: "Risky on stripped Noto builds",
    whatsapp: "Risky on WhatsApp Web",
  },
  {
    pattern: "𓆩 𓆪 — Egyptian Hieroglyph fish (SMP, surrogate pair)",
    ios14: "High risk — CoreText reflow bug",
    android10: "High risk — empty boxes",
    whatsapp: "High risk — misaligns around Devanagari",
  },
  {
    pattern: "★彡 / 彡★ — half-width katakana flourish",
    ios14: "Safe",
    android10: "Safe",
    whatsapp: "Safe",
  },
] as const;

/* Section 2 — how each symbol "costs" against a UTF-16 character limit. */
export const CHAR_COST_ROWS = [
  {
    symbol: "★ ♛ ✦ (BMP symbols)",
    utf16: "1 code unit",
    cost: "Cheap — counts as 1 character in Instagram's 150-char bio",
  },
  {
    symbol: "꧁ ꧂ (Tai Tham brackets)",
    utf16: "1 code unit",
    cost: "Cheap — 3-byte UTF-8 but still 1 character in the bio counter",
  },
  {
    symbol: "🔥 ❤️ 🌟 (emoji)",
    utf16: "2 code units (surrogate pair)",
    cost: "Expensive — each emoji eats 2 characters; ❤️ with a variation selector can cost 3",
  },
  {
    symbol: "𓆩 𓆪 (Hieroglyph borders)",
    utf16: "2 code units (surrogate pair)",
    cost: "Expensive — each eats 2 characters and risks breaking on older devices",
  },
  {
    symbol: "की — Devanagari base + matra",
    utf16: "1–2 code points (NFC vs NFD)",
    cost: "Usually 1 on Instagram (normalises to NFC); WhatsApp Business sometimes counts 2",
  },
] as const;

/* Section 4 — the 3-step Hindi identity framework. */
export const HINDI_STYLE_STEPS = [
  {
    element: "Step 1 — Pick your anchor style",
    example: "꧁ राहुल ꧂",
    role: "Signature display name",
    note: "Choose one border pattern and use it as your name anchor on every platform — it becomes a personal logo people recognise before they read the name.",
  },
  {
    element: "Step 2 — Set platform limits",
    example: "25 / 30 / 100 chars",
    role: "Fit the anchor to each field",
    note: "Check each platform's name and bio limits first (WhatsApp 25, Instagram name 30, Josh 100) so your anchor never silently truncates.",
  },
  {
    element: "Step 3 — Assign content tiers",
    example: "Name · Bio · Status",
    role: "Tailor depth per platform",
    note: "Tier 1 signature name stays identical everywhere; Tier 2 bio is tuned per platform; Tier 3 rotating status uses the pre-made cards on WhatsApp and longer narrative on Sharechat.",
  },
] as const;

/* Section 4 — side-by-side platform limits for the identity system. */
export const HINDI_PLATFORM_LIMITS = [
  {
    platform: "WhatsApp",
    limit: "Name 25 · Status 700",
    note: "Decorated name must fit 25 chars; status resets every 24 hours",
  },
  {
    platform: "Instagram",
    limit: "Name 30 · Bio 150 (UTF-16)",
    note: "Emojis count as 2; use cheaper BMP borders to fit more text",
  },
  {
    platform: "Sharechat",
    limit: "Username 30 · Bio 150",
    note: "Server-side Devanagari rendering is consistently good — safe for experimental patterns",
  },
  {
    platform: "Josh / Moj",
    limit: "Bio 100",
    note: "Most restrictive — forces the shortest effective decoration",
  },
] as const;

/* Section 5 — when to use Section A (Devanagari) vs Section B (Latin) output. */
export const SECTION_AB_ROWS = [
  {
    context: "CMS fields (WordPress, Webflow, Notion)",
    sectionA: "Safe — NFC-stable Devanagari survives normalisation",
    sectionB: "Risky — aggressive normalisers can flatten 𝓡𝓪𝓱𝓾𝓵 back to Rahul",
  },
  {
    context: "Meta titles & structured data",
    sectionA: "Safe — base script codepoints are indexed correctly",
    sectionB: "Avoid — Mathematical Unicode can trigger spam quality filters",
  },
  {
    context: "Database / API payloads",
    sectionA: "Safe — standard script characters travel cleanly",
    sectionB: "Avoid — may be stripped on write or rejected by validators",
  },
  {
    context: "WhatsApp Business API templates",
    sectionA: "Passes review routinely",
    sectionB: "Frequently rejected as obfuscated content",
  },
  {
    context: "Social bios & chat status (display only)",
    sectionA: "Safe",
    sectionB: "Safe — purely visual context, no machine processing",
  },
] as const;
