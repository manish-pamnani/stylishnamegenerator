/** TikTok font generator page — advanced expert sections (discoverability, device compatibility, character counting, business context, agency workflows). */

export type MythRow = {
  myth: string;
  reality: string;
};

export const TIKTOK_DISCOVERABILITY_MYTHS: MythRow[] = [
  {
    myth: "A stylish bio or username helps people find you in search",
    reality:
      "TikTok's in-app search and username lookup are optimized for exact and near-exact plain-text matches. Unicode lookalikes (𝕒 vs a) frequently fail to match when someone searches your real name or handle in plain text.",
  },
  {
    myth: "Styled bio text still feeds the same keyword/recommendation signals",
    reality:
      "TikTok's caption and keyword relevance systems that feed \"For You\" recommendations lean on plain-text NLP. A bio full of Mathematical Alphanumeric glyphs is not parsed the same way as the equivalent plain word.",
  },
  {
    myth: "Screen readers and accessibility captions read styled text normally",
    reality:
      "TikTok's accessibility captions and VoiceOver/TalkBack often spell out Unicode math or Fraktur characters letter-by-letter, or skip them — a real accessibility cost, not a cosmetic one.",
  },
  {
    myth: "There's no reason to ever keep anything in plain text",
    reality:
      "The safest split: stylish font for visual flair in the bio body, plain text kept in the username and the first line of the bio, where search weight is highest.",
  },
];

export type DeviceCompatRow = {
  style: string;
  ios: "pass" | "partial" | "fail";
  stockAndroid: "pass" | "partial" | "fail";
  samsung: "pass" | "partial" | "fail";
  xiaomi: "pass" | "partial" | "fail";
  tiktokRenderer: "pass" | "partial" | "fail";
};

export const TIKTOK_DEVICE_COMPAT_TABLE: DeviceCompatRow[] = [
  {
    style: "Bold Sans",
    ios: "pass",
    stockAndroid: "pass",
    samsung: "pass",
    xiaomi: "pass",
    tiktokRenderer: "pass",
  },
  {
    style: "Small Caps",
    ios: "pass",
    stockAndroid: "pass",
    samsung: "pass",
    xiaomi: "pass",
    tiktokRenderer: "pass",
  },
  {
    style: "Circled",
    ios: "pass",
    stockAndroid: "pass",
    samsung: "partial",
    xiaomi: "partial",
    tiktokRenderer: "pass",
  },
  {
    style: "Double Struck",
    ios: "pass",
    stockAndroid: "partial",
    samsung: "fail",
    xiaomi: "fail",
    tiktokRenderer: "partial",
  },
  {
    style: "Fraktur / Gothic",
    ios: "pass",
    stockAndroid: "partial",
    samsung: "fail",
    xiaomi: "fail",
    tiktokRenderer: "partial",
  },
];

export type TikTokCharCountRow = {
  example: string;
  visualChars: number;
  jsLength: number;
  graphemeCount: number;
};

export const TIKTOK_CHAR_COUNT_COMPARISON: TikTokCharCountRow[] = [
  {
    example: "Plain ASCII bio line",
    visualChars: 24,
    jsLength: 24,
    graphemeCount: 24,
  },
  {
    example: "Fullwidth styled line (same wording)",
    visualChars: 24,
    jsLength: 24,
    graphemeCount: 24,
  },
  {
    example: "Mathematical Bold/Fraktur styled line (same wording)",
    visualChars: 24,
    jsLength: 48,
    graphemeCount: 24,
  },
  {
    example: "Bio line with a family emoji (ZWJ sequence) added",
    visualChars: 25,
    jsLength: 32,
    graphemeCount: 25,
  },
];

export type AgencyRolloutStep = {
  step: string;
  action: string;
};

export const TIKTOK_AGENCY_ROLLOUT_FRAMEWORK: AgencyRolloutStep[] = [
  {
    step: "1. Audit the template",
    action:
      "Check whether the same stylish-font bio string is being copy-pasted across multiple client accounts — an identical fingerprint is more detectable than varied text.",
  },
  {
    step: "2. Vary at the token level",
    action:
      "Swap word choice, emoji, and spacing per account rather than reusing one bio string verbatim, even if the styling approach stays the same.",
  },
  {
    step: "3. Separate brand voice from styling layer",
    action:
      "Keep one canonical plain-text brand bio, then apply light-touch styling — one or two stylized words — per account instead of stylizing the whole bio.",
  },
  {
    step: "4. Restrict to the bulk-safe subset",
    action:
      "Standardize on the 3–4 most cross-device-reliable styles (Bold Sans, Small Caps, Circled) across the whole account roster to minimize \"my font looks broken\" support tickets.",
  },
  {
    step: "5. Document and version",
    action:
      "Keep a shared style-guide doc listing which styles are approved per brand and the char-limit buffer used, so multiple team members don't introduce inconsistent fonts.",
  },
  {
    step: "6. Track conversion, not vanity",
    action:
      "Rotate a UTM-style bio link over a 7–14 day window to see whether a stylized bio actually changes profile-visit-to-follow conversion, since TikTok doesn't expose bio-level analytics natively.",
  },
];

export const TIKTOK_EXPERT_FAQ = [
  {
    question: "Do stylish fonts hurt my TikTok search ranking?",
    answer:
      "They don't get penalized, but they don't help either — and in one specific spot they actively work against you. TikTok search and username lookup favor plain-text matches, so a Unicode-styled username is harder for someone to find by searching your real name than a plain one.",
  },
  {
    question: "Why do my Fraktur or Double Struck characters look broken on some phones?",
    answer:
      "MIUI (Xiaomi), OneUI (Samsung), and older Android builds ship incomplete font fallback stacks, so rarer Mathematical Unicode blocks like Fraktur and Double Struck render as tofu boxes even though the same text displays fine on iOS or desktop. TikTok's own in-app renderer also uses a different fallback engine than your keyboard preview, so \"it looked fine while typing\" doesn't guarantee it looks fine once posted.",
  },
  {
    question: "Why did my bio get cut off even though I counted under 80 characters?",
    answer:
      "Different counting methods disagree. Plain JavaScript .length counts UTF-16 code units, not visible characters — some stylish styles and ZWJ emoji sequences count as more \"characters\" than what you see. TikTok's own counter is grapheme-cluster aware, so a naive count of 74 can still get flagged near the 80-char limit. Leave a 5–10% buffer under the stated limit to be safe.",
  },
  {
    question: "Can I use stylish fonts on a TikTok Business or Ads account?",
    answer:
      "Be more careful there. TikTok Ads Manager and Spark Ads text fields frequently reject or strip non-standard Unicode, verification review is stricter about display-name readability, and TikTok Shop product fields have their own stricter text validation that can fail silently. Reserve stylish fonts for bio and comments, and keep display names and commerce-facing fields in plain text.",
  },
] as const;
