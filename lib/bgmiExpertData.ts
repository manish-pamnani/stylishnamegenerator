export type CharCostRow = {
  example: string;
  label: string;
  fontType: string;
  visualChars: number;
  utf16Units: number;
  fitsLimit: boolean;
};

export const BGMI_CHAR_COST_TABLE: CharCostRow[] = [
  {
    example: "𝕾𝖙𝖔𝖗𝖒",
    label: "Storm",
    fontType: "Bold Fraktur",
    visualChars: 5,
    utf16Units: 10,
    fitsLimit: true,
  },
  {
    example: "꧁𝕾𝖍𝖆𝖉𝖔𝖜꧂",
    label: "Shadow (bordered)",
    fontType: "Bold Fraktur + borders",
    visualChars: 8,
    utf16Units: 14,
    fitsLimit: true,
  },
  {
    example: "𝔻𝕣𝔸",
    label: "Dra",
    fontType: "Double Struck",
    visualChars: 3,
    utf16Units: 6,
    fitsLimit: true,
  },
  {
    example: "𝑺𝒉𝒂𝒅𝒐𝒘𝑯𝒖𝒏𝒕",
    label: "ShadowHunt",
    fontType: "Bold Cursive Script",
    visualChars: 10,
    utf16Units: 20,
    fitsLimit: false,
  },
  {
    example: "Bhai",
    label: "Bhai",
    fontType: "Plain Hinglish",
    visualChars: 4,
    utf16Units: 4,
    fitsLimit: true,
  },
  {
    example: "Rusher",
    label: "Rusher",
    fontType: "Plain English",
    visualChars: 6,
    utf16Units: 6,
    fitsLimit: true,
  },
];

export type DeviceRiskRow = {
  style: string;
  example: string;
  risk: "Low" | "Medium" | "High";
  useCase: string;
};

export const BGMI_DEVICE_RISK_TABLE: DeviceRiskRow[] = [
  {
    style: "Bordered plain text",
    example: "꧁Shadow꧂",
    risk: "Low",
    useCase: "Safest pick for competitive and pro-player accounts",
  },
  {
    style: "Double Struck",
    example: "𝔻𝕣𝔸",
    risk: "Low",
    useCase: "Good balance of style and reliability — popular with pros",
  },
  {
    style: "Bold Sans / Small Caps",
    example: "Storm",
    risk: "Low",
    useCase: "Near-universal glyph coverage, good for clan tags too",
  },
  {
    style: "Cursive / Bold Script",
    example: "𝑺𝒉𝒂𝒅𝒐𝒘",
    risk: "Medium",
    useCase: "Fine on iOS and recent Android, risky on budget devices",
  },
  {
    style: "Bold Fraktur",
    example: "𝕭𝖑𝖆𝖈𝖐",
    risk: "High",
    useCase: "Flashiest look but most likely to show as tofu boxes on MIUI / budget Android",
  },
  {
    style: "Circled / Fullwidth",
    example: "Ⓢⓣⓞⓡⓜ",
    risk: "Low",
    useCase: "Safe fallback when compatibility matters more than flash",
  },
];

export type CollisionStep = {
  step: string;
  action: string;
};

export const BGMI_COLLISION_STEPS: CollisionStep[] = [
  {
    step: "Name taken?",
    action:
      "Add a single invisible character (a zero-width joiner) at the end. It changes nothing visually but makes the underlying string unique.",
  },
  {
    step: "Still taken?",
    action:
      "Swap one letter into a different but similarly-styled Unicode block — for example, one Bold Fraktur letter to Bold Sans within the same word — while keeping the overall look intact.",
  },
  {
    step: "Still taken?",
    action:
      "Append a numeral styled in the same Unicode set as the rest of the name (a Double Struck \"7\" next to Double Struck letters, not a plain digit that breaks the aesthetic).",
  },
  {
    step: "Still taken?",
    action:
      "Reposition or swap the border symbol pair — ꧁꧂ to 『』 or 【】 — which changes the exact string without changing the core name.",
  },
  {
    step: "None of these worked?",
    action:
      "Check whether the exact name belongs to a banned or reported account — those sometimes free up after a moderation cycle. Don't wait on it though: only your first rename is free, so lock in a modified variant now.",
  },
];

export type StreamStackRow = {
  style: string;
  overlayRendering: string;
  recommended: "Yes" | "Test first" | "Avoid";
};

export const BGMI_STREAM_STACK_TABLE: StreamStackRow[] = [
  {
    style: "Plain text",
    overlayRendering: "Always renders correctly",
    recommended: "Yes",
  },
  {
    style: "Bordered plain text",
    overlayRendering: "Reliable across OBS font fallbacks",
    recommended: "Yes",
  },
  {
    style: "Double Struck",
    overlayRendering: "Mostly reliable, occasional fallback glyph swap",
    recommended: "Test first",
  },
  {
    style: "Cursive / Bold Script",
    overlayRendering: "Inconsistent across overlay font stacks",
    recommended: "Test first",
  },
  {
    style: "Bold Fraktur",
    overlayRendering: "Frequently mangled or shown as boxes on stream",
    recommended: "Avoid",
  },
];

export type BuildFrameworkStep = {
  step: string;
  action: string;
};

export const BGMI_BUILD_FRAMEWORK: BuildFrameworkStep[] = [
  {
    step: "1. Pick a base word",
    action:
      "Choose a base word under 6 real characters — short enough to survive both a clan tag prefix and a UTF-16 cost multiplier.",
  },
  {
    step: "2. Select a font block",
    action:
      "Pick a font style using the device-safety table above — favour bordered plain text or Double Struck unless flash matters more than reliability.",
  },
  {
    step: "3. Calculate the true cost",
    action:
      "Work out the real UTF-16 unit count (roughly double the visual length for Mathematical Alphanumeric fonts) and confirm it fits within 16 units, minus whatever a clan tag prefix consumes.",
  },
  {
    step: "4. Pre-plan a fallback",
    action:
      "Test uniqueness and have a fallback modifier from the collision framework ready before spending a Name Change Card — you get one free rename, then it costs UC.",
  },
];
