/** Bump after in-game patch testing. */
export const FREE_FIRE_TESTED_VERSION = "OB53";

/** Updated frequently — edit cells after in-game patch testing. */
export const FF_MAX_SYNC_TABLE = [
  {
    aspect: "Profile Name Sync",
    freeFire: "Same account, shared name",
    freeFireMax: "Synced automatically",
  },
  {
    aspect: "Character Limit",
    freeFire: "20",
    freeFireMax: "20",
  },
  {
    aspect: "Font Rendering",
    freeFire: "Baseline",
    freeFireMax:
      "⚠️ Some fonts render slightly larger",
  },
  {
    aspect: "Guild Tag Sync",
    freeFire: "Shared",
    freeFireMax: "Shared",
  },
  {
    aspect: "Login Method Required",
    freeFire: "Standalone or linked",
    freeFireMax: "Must link to FF account",
  },
] as const;

/** Updated frequently — edit after guild/profile field testing. */
export const FF_NAME_FIELD_TABLE = [
  {
    rule: "Character limit",
    profileName: "20",
    guildName: "25",
  },
  {
    rule: "Rename cost",
    profileName: "390 💎 or Rename Card",
    guildName: "500 💎 or Guild Rename Card",
  },
  {
    rule: "Unicode font support",
    profileName: "Broad — most math Unicode blocks",
    guildName:
      "Narrower — long styled strings often truncate",
  },
  {
    rule: "Border symbols (꧁ ☬ ꧂)",
    profileName: "Usually renders",
    guildName: "May crowd small guild UI",
  },
  {
    rule: "Who can edit",
    profileName: "Account owner",
    guildName: "Guild leader only",
  },
] as const;

/** Styles/symbols that commonly show as boxes in FF — pending live verification. */
export const FF_BROKEN_SYMBOLS = [
  {
    item: "Squared letters",
    example: "🅂🅀🅄🄰🅁🄴🄳",
    status: "Often shows boxes — marked ⚠️ in generator (pending verification)",
  },
  {
    item: "Strikethrough combining mark",
    example: "S̶t̶r̶i̶k̶e̶",
    status: "Combining chars fail in FF name field (pending verification)",
  },
  {
    item: "Underline combining mark",
    example: "U̲n̲d̲e̲r̲",
    status: "Invisible joiners break validation (pending verification)",
  },
  {
    item: "Upside-down flip",
    example: "ɹǝʌo",
    status: "Mixed rendering across Android builds (pending verification)",
  },
  {
    item: "Stacked emoji + fraktur",
    example: "🔥𝕱𝖎𝖗𝖊🔥",
    status: "Emoji width varies on MIUI / older devices (pending verification)",
  },
  {
    item: "Fullwidth Latin",
    example: "ＦＦＰＲＯ",
    status: "Counts 2× visual width in lobby (pending verification)",
  },
] as const;
