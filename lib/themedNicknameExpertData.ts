/** Expert E-E-A-T sections for Nobita & Psycho themed nickname pages. */

export type FontRiskRow = {
  fontFamily: string;
  unicodeBlock: string;
  deviceRisk: "Low" | "Medium" | "High";
  fallback: string;
  onNobitaPage: boolean;
  onPsychoPage: boolean;
};

export type NameLengthRow = {
  example: string;
  category: string;
  tier: "Safe" | "Borderline" | "Likely needs trimming";
  note: string;
  page: "nobita" | "psycho" | "both";
};

export type MythRow = {
  myth: string;
  reality: string;
};

export type SeasonTimelineStep = {
  when: string;
  title: string;
  detail: string;
};

export type PlatformCompatRow = {
  fontFamily: string;
  bgmi: string;
  freeFire: string;
  discord: string;
  instagram: string;
};

export const FONT_RENDERING_RISK: FontRiskRow[] = [
  {
    fontFamily: "Mathematical Script (𝓐𝓫𝓬)",
    unicodeBlock: "U+1D49C–U+1D4CF",
    deviceRisk: "Low",
    fallback: "Falls back to italic serif — still readable",
    onNobitaPage: true,
    onPsychoPage: false,
  },
  {
    fontFamily: "Mathematical Bold Fraktur (𝕬𝖇𝖈)",
    unicodeBlock: "U+1D56C–U+1D59F",
    deviceRisk: "Medium",
    fallback: "Empty boxes (□□□) on MIUI/EMUI devices older than ~2021",
    onNobitaPage: false,
    onPsychoPage: true,
  },
  {
    fontFamily: "Mathematical Fraktur (𝔄𝔅ℭ)",
    unicodeBlock: "U+1D504–U+1D537",
    deviceRisk: "Medium",
    fallback: "Substituted with plain Latin or boxed on ColorOS/Realme UI",
    onNobitaPage: false,
    onPsychoPage: true,
  },
  {
    fontFamily: "Egyptian Hieroglyphs (𓆩𓆪)",
    unicodeBlock: "U+13000–U+1342F",
    deviceRisk: "High",
    fallback: "Blank space or tofu box on most Android skins except stock Pixel/Samsung",
    onNobitaPage: false,
    onPsychoPage: true,
  },
  {
    fontFamily: "Border ornaments (꧁ ꧂ 『 』)",
    unicodeBlock: "Various BMP symbols",
    deviceRisk: "Low",
    fallback: "Usually renders; occasionally shrinks in killfeed",
    onNobitaPage: true,
    onPsychoPage: true,
  },
  {
    fontFamily: "Decorative stars (★ ✿ ☆ ✰)",
    unicodeBlock: "Miscellaneous Symbols",
    deviceRisk: "Low",
    fallback: "Near-universal — safest decoration layer",
    onNobitaPage: true,
    onPsychoPage: true,
  },
  {
    fontFamily: "Latin Extended (Ñ ø á)",
    unicodeBlock: "U+00C0–U+024F",
    deviceRisk: "Low",
    fallback: "Always renders — used for Nobita-style humour spellings",
    onNobitaPage: true,
    onPsychoPage: false,
  },
];

export const NOBITA_LENGTH_SAFETY: NameLengthRow[] = [
  {
    example: "[𝓝𝓑𝓣]",
    category: "Clan tag",
    tier: "Safe",
    note: "3 visible chars — room for a full player name + tag together",
    page: "nobita",
  },
  {
    example: "★𝓝𝓑★",
    category: "Clan tag",
    tier: "Safe",
    note: "Short prefix; ideal if you still need 8+ chars for your core name",
    page: "nobita",
  },
  {
    example: "『𝓒𝓾𝓽𝓮𝓝𝓸𝓸𝓫』",
    category: "Cute funny",
    tier: "Borderline",
    note: "Border + 8 styled chars — paste alone, not with a clan tag",
    page: "nobita",
  },
  {
    example: "꧁𝓝𝓸𝓫𝓲𝓣𝓪𝓝𝓸𝓸𝓫꧂",
    category: "Classic Nobita",
    tier: "Likely needs trimming",
    note: "14+ styled chars with borders — drop ꧁꧂ first if paste fails",
    page: "nobita",
  },
  {
    example: "★ Miss✗Karo✗Mat ★",
    category: "Noob squad",
    tier: "Borderline",
    note: "Mixed ASCII + symbols; BGMI counts each ✗ separately",
    page: "nobita",
  },
];

export const PSYCHO_LENGTH_SAFETY: NameLengthRow[] = [
  {
    example: "[𝓟𝓢𝓨]",
    category: "Clan tag",
    tier: "Safe",
    note: "Minimal slot cost — best base for a ranked push name",
    page: "psycho",
  },
  {
    example: "꧁𝕻𝕾꧂",
    category: "Clan tag",
    tier: "Safe",
    note: "3 styled chars + borders; leaves maximum room for core name",
    page: "psycho",
  },
  {
    example: "『𝓝𝓸𝓜𝓮𝓻𝓬𝔂』",
    category: "Attitude",
    tier: "Borderline",
    note: "7 styled chars + brackets — fine solo, tight with a clan prefix",
    page: "psycho",
  },
  {
    example: "꧁𝕻𝖘𝖞𝖈𝖍𝖔𝕶𝖎𝖑𝖑𝖊𝖗꧂",
    category: "Classic psycho",
    tier: "Likely needs trimming",
    note: "Fraktur + long word + borders — highest rejection rate on this page",
    page: "psycho",
  },
  {
    example: "𓆩𝕻𝖘𝖞𝖈𝖍𝖔𝕭𝖊𝖆𝖘𝖙𓆪",
    category: "Classic psycho",
    tier: "Likely needs trimming",
    note: "Hieroglyph borders add 2 high-risk codepoints on top of Fraktur length",
    page: "psycho",
  },
];

export const NAMING_MYTHS: MythRow[] = [
  {
    myth: "Psycho names intimidate opponents into playing worse.",
    reality:
      "No measurable effect on enemy decision-making in solo or duo queue. The only proven impact is on your own squad's identity and morale — not the opponent's aim or rotations.",
  },
  {
    myth: "Unicode names get flagged by BGMI's anti-cheat or report system more often.",
    reality:
      "Reports are behaviour-based, not font-based. Dark Fraktur names get reported at similar rates to plain names unless the text itself violates Krafton's content policy.",
  },
  {
    myth: "Nobita-style self-deprecating names hurt team credibility in ranked.",
    reality:
      "In Diamond+ lobbies, squads with joke names are just as likely to be sweat squads. Opponents increasingly underestimate funny names — a tactical advantage, not a liability.",
  },
  {
    myth: "Longer, more elaborate names = more stylish = better.",
    reality:
      "Overloaded names fail to render fully on smaller killfeed rows. Shorter high-contrast names (clan tag + short core word) beat the longest options on lists like these.",
  },
  {
    myth: "All copy-paste Unicode names are permanently safe to use.",
    reality:
      "Krafton periodically tightens automated filters around specific Unicode ranges after abuse waves. Names using flagged blocks can be forced to reset even mid-season.",
  },
];

export const RENAME_CARD_TIMELINE: SeasonTimelineStep[] = [
  {
    when: "Week 1 — Season reset",
    title: "Rename spike #1",
    detail:
      "The biggest cluster of renames happens in the first 72 hours after a new season. Players reset rank identity, squads rebrand together, and trending names from this page get copied fastest.",
  },
  {
    when: "Mid-season — After a bad KD stretch",
    title: "Rename spike #2",
    detail:
      "Players who dropped a tier often rebrand to shake the 'bad season' association. Psycho-style names spike here; Nobita-style names spike when squads want to reset morale with humour.",
  },
  {
    when: "Pre-scrim / tournament week",
    title: "Temporary themed squads",
    detail:
      "Competitive squads adopt matching name sets (all Nobita or all Psycho) for stream and spectator visibility, then revert after the event — rename cards treated as a scarce resource.",
  },
  {
    when: "After a viral clip",
    title: "Attention rebrand",
    detail:
      "Players capitalize on sudden visibility by switching to a memorable tag. Clan leaders draft 3–4 backup names before committing because short tags get taken within hours on high-population servers.",
  },
  {
    when: "End of season",
    title: "Nobita-early / Psycho-late pattern",
    detail:
      "Most players get one free rename card per season. Early season joke names (Nobita) give way to serious attitude tags (Psycho) before the final rank push — wasting a card on the wrong vibe is a real hesitation.",
  },
];

export const CLAN_PLATFORM_MATRIX: PlatformCompatRow[] = [
  {
    fontFamily: "Mathematical Script (Nobita default)",
    bgmi: "✓ Reliable",
    freeFire: "✓ Reliable",
    discord: "✓ Renders",
    instagram: "✓ Bio-safe",
  },
  {
    fontFamily: "Bold Fraktur (Psycho default)",
    bgmi: "⚠ Device-dependent",
    freeFire: "⚠ Device-dependent",
    discord: "✓ Usually fine",
    instagram: "⚠ May truncate",
  },
  {
    fontFamily: "Egyptian Hieroglyphs (𓆩𓆪)",
    bgmi: "✗ High breakage",
    freeFire: "✗ High breakage",
    discord: "⚠ Blank on some clients",
    instagram: "✗ Often stripped",
  },
  {
    fontFamily: "Short clan tags ([XYZ], ★X★)",
    bgmi: "✓ Best legibility",
    freeFire: "✓ Best legibility",
    discord: "✓ Leaderboard-safe",
    instagram: "✓ Survives copy",
  },
];

export const LENGTH_TROUBLESHOOTING = [
  {
    step: "Paste fails or name gets cut off?",
    action:
      "Remove border characters first (꧁꧂, 『』, 𓆩𓆪) — they consume slots disproportionately.",
  },
  {
    step: "Still too long after dropping borders?",
    action:
      "Switch from Fraktur (2 codepoints per styled letter) to Mathematical Script or plain ASCII for the core word.",
  },
  {
    step: "Adding a clan tag on top?",
    action:
      "Use a 3–4 character tag from the Clan Tags tab — never combine a long bordered name with a second bordered prefix.",
  },
  {
    step: "Works in BGMI but fails in Free Fire?",
    action:
      "FF and BGMI limits differ — FF MAX allows slightly longer strings but rejects some combining marks BGMI accepts. Test in each game separately.",
  },
  {
    step: "Looks fine in rename preview but breaks in killfeed?",
    action:
      "Preview uses a different font renderer than spectator mode. Ask a squadmate on a different phone skin to confirm before locking in.",
  },
] as const;

export const CLAN_IDENTITY_FRAMEWORK = [
  {
    step: "Pick one Unicode block for the whole squad",
    detail:
      "All Mathematical Script or all Bold Fraktur — mixed font families look chaotic in squad screenshots and tournament overlays.",
  },
  {
    step: "Assign bracket strategy by role",
    detail:
      "Leader gets the short clan tag ([PSY] / [NBT]); members share the same font block with individual core words. Leaderboard legibility beats individual flair.",
  },
  {
    step: "Test cross-platform before rollout",
    detail:
      "Paste the full squad set into WhatsApp, Discord, and Instagram bio — if it survives all three, it will survive BGMI killfeed on most devices.",
  },
  {
    step: "Exploit sort-order prefixes deliberately",
    detail:
      "Symbols like ★, ✿, and ꧁ affect friend-list and leaderboard sort order. Competitive squads choose prefixes for visibility, not just aesthetics.",
  },
  {
    step: "Stagger renames across the season",
    detail:
      "Do not burn every squad member's rename card in one week. Rotate 2 members per scrim block so the team always has fallback names if a patch breaks a font block.",
  },
] as const;
