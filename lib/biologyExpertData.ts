/** Biology font style page — advanced expert sections (Unicode reality, school rules, myths, subscript limits, accessibility). */

export type RenderingRiskRow = {
  style: string;
  risk: "Low" | "Medium" | "High";
  saferAlternative: string;
};

export const RENDERING_RISK_TABLE: RenderingRiskRow[] = [
  {
    style: "Fraktur Gothic / Bold Fraktur",
    risk: "High",
    saferAlternative:
      "Use only for short titles or a single heading — keep body text plain.",
  },
  {
    style: "Double Struck",
    risk: "Medium",
    saferAlternative: "Fine for short headings; test before printing a PDF.",
  },
  {
    style: "Circled / Squared",
    risk: "Medium",
    saferAlternative: "Test on the receiving device before relying on it.",
  },
  {
    style: "Fullwidth",
    risk: "Low",
    saferAlternative:
      "Widely supported, but renders visually wide — use short text only.",
  },
  {
    style: "Monospace",
    risk: "Low",
    saferAlternative: "Safe for most apps, including older devices.",
  },
  {
    style: "Sans Bold / Sans Italic",
    risk: "Low",
    saferAlternative: "Safe — near-universal support.",
  },
  {
    style: "Small Caps",
    risk: "Low",
    saferAlternative: "Safe — widely supported, including in PDFs.",
  },
];

export type SchoolDecisionStep = {
  step: string;
  action: string;
};

export const SCHOOL_DECISION_STEPS: SchoolDecisionStep[] = [
  {
    step: "Is it a cover page or title?",
    action:
      "Generally safe. Examiners read this as decorative typography, the same as choosing WordArt or a fancy heading in Canva.",
  },
  {
    step: "Is it body text or answers?",
    action:
      "Avoid it. Unicode glyphs are not readable by OCR-based evaluation tools some boards pilot, and can read as garbled or unfamiliar characters during manual grading.",
  },
  {
    step: "Will the project be printed?",
    action:
      "Test first. Some Fraktur and Double Struck characters are missing from common printer-installed fonts and print as blank boxes even though they display fine on-screen.",
  },
  {
    step: "Will it go through a plagiarism/originality checker?",
    action:
      "Keep body text in plain font. Some Turnitin-style tools mis-encode or flatten Unicode characters, which can trigger false similarity flags unrelated to actual copying.",
  },
];

export type MythRow = {
  myth: string;
  reality: string;
};

export const BIOLOGY_FONT_MYTHS: MythRow[] = [
  {
    myth: "These are special fonts I'm applying",
    reality:
      "They're distinct Unicode characters — no font styling is actually happening. Copy-paste just moves the character itself, not a font-family setting.",
  },
  {
    myth: "Instagram will shadowban or flag stylish bios",
    reality:
      "No confirmed platform policy penalizes Unicode text itself. Issues people report are almost always rendering glitches, not moderation action.",
  },
  {
    myth: "More stylish = more profile visits",
    reality:
      "Overuse — long strings of Fraktur or Double Struck — reduces readability and can lower engagement. Sparing use on a heading or two outperforms full-text styling.",
  },
  {
    myth: "This works identically everywhere since it's 'just text'",
    reality:
      "Rendering depends entirely on the receiving app or device's font fallback chain. \"Just text\" does not mean guaranteed to display.",
  },
  {
    myth: "Search engines or teachers can search/index this text normally",
    reality:
      "Ctrl+F and most search tools often fail to match styled Unicode against a plain-text query — a styled heading will not match a plain-text search for the same word.",
  },
];

export type SubscriptSupportRow = {
  letter: string;
  subscript: string | null;
};

/** The complete official set of Unicode subscript Latin letters — nothing else exists. */
export const SUBSCRIPT_SUPPORTED_LETTERS: SubscriptSupportRow[] = [
  { letter: "a", subscript: "ₐ" },
  { letter: "e", subscript: "ₑ" },
  { letter: "o", subscript: "ₒ" },
  { letter: "x", subscript: "ₓ" },
  { letter: "ə (schwa)", subscript: "ₔ" },
  { letter: "h", subscript: "ₕ" },
  { letter: "k", subscript: "ₖ" },
  { letter: "l", subscript: "ₗ" },
  { letter: "m", subscript: "ₘ" },
  { letter: "n", subscript: "ₙ" },
  { letter: "p", subscript: "ₚ" },
  { letter: "s", subscript: "ₛ" },
  { letter: "t", subscript: "ₜ" },
];

export const SUBSCRIPT_UNSUPPORTED_LETTERS =
  "b, c, d, f, g, i, j, q, r, u, v, w, y, z";

export type AccessibilityChecklistItem = {
  text: string;
};

export const ACCESSIBILITY_CHECKLIST: AccessibilityChecklistItem[] = [
  {
    text: "Never use a stylish font as the only copy of essential information — a screen reader may spell it out letter-by-letter, announce symbol names, or skip it entirely.",
  },
  {
    text: "Keep a plain-text version of anything that identifies something — a WhatsApp group name, a document title someone needs to find later, a form field.",
  },
  {
    text: "Reserve stylish Unicode for decorative, supplementary text — a bio line or heading flourish next to plain text, not a replacement for it.",
  },
  {
    text: "If you're graded on digital accessibility awareness, treat this as a real constraint, not a style footnote — some curricula now assess it directly.",
  },
];
