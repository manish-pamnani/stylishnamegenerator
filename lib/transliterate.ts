/**
 * Phonetic Latin (romanised) -> Devanagari transliteration, tuned for the way
 * Indian names are commonly typed in English (e.g. "manish" -> "मनिश",
 * "rahul" -> "रहुल", "sundar" -> "सुंदर").
 *
 * This is intentionally lightweight and forgiving rather than a full ITRANS
 * scheme: the goal is a sensible Devanagari rendering for the decorated-Hindi
 * tool, not perfect orthography. Text that is already in Devanagari (or any
 * non-Latin character) is passed through unchanged, so users can also type
 * Hindi directly.
 */

const VOWEL_MATRAS: Record<string, string> = {
  aa: "ा",
  ai: "ै",
  au: "ौ",
  ee: "ी",
  ii: "ी",
  oo: "ू",
  uu: "ू",
  a: "",
  e: "े",
  i: "ि",
  o: "ो",
  u: "ु",
};

const INDEPENDENT_VOWELS: Record<string, string> = {
  aa: "आ",
  ai: "ऐ",
  au: "औ",
  ee: "ई",
  ii: "ई",
  oo: "ऊ",
  uu: "ऊ",
  a: "अ",
  e: "ए",
  i: "इ",
  o: "ओ",
  u: "उ",
};

// Longest tokens first so greedy matching prefers digraphs (aa, ai, …).
const VOWEL_TOKENS = ["aa", "ai", "au", "ee", "ii", "oo", "uu", "a", "e", "i", "o", "u"];

const CONSONANTS: Record<string, string> = {
  ksh: "क्ष",
  chh: "छ",
  shh: "ष",
  sh: "श",
  ch: "च",
  th: "थ",
  dh: "ध",
  ph: "फ",
  bh: "भ",
  gh: "घ",
  kh: "ख",
  jh: "झ",
  gy: "ज्ञ",
  k: "क",
  g: "ग",
  c: "क",
  j: "ज",
  t: "त",
  d: "द",
  n: "न",
  p: "प",
  b: "ब",
  m: "म",
  y: "य",
  r: "र",
  l: "ल",
  v: "व",
  w: "व",
  s: "स",
  h: "ह",
  z: "ज़",
  f: "फ़",
  q: "क़",
  x: "क्स",
};

// Longest tokens first so greedy matching prefers digraphs (ksh, chh, sh, …).
const CONSONANT_TOKENS = [
  "ksh",
  "chh",
  "shh",
  "sh",
  "ch",
  "th",
  "dh",
  "ph",
  "bh",
  "gh",
  "kh",
  "jh",
  "gy",
  "k",
  "g",
  "c",
  "j",
  "t",
  "d",
  "n",
  "p",
  "b",
  "m",
  "y",
  "r",
  "l",
  "v",
  "w",
  "s",
  "h",
  "z",
  "f",
  "q",
  "x",
];

const HALANT = "्";
const ANUSVARA = "ं";

function isDevanagari(ch: string): boolean {
  const code = ch.codePointAt(0) ?? 0;
  return code >= 0x0900 && code <= 0x097f;
}

function matchToken(text: string, pos: number, tokens: string[]): string | null {
  for (const token of tokens) {
    if (text.startsWith(token, pos)) return token;
  }
  return null;
}

export function transliterateToDevanagari(input: string): string {
  const text = input.toLowerCase();
  let out = "";
  let i = 0;
  // True when the previous emitted unit was a consonant (so a standalone vowel
  // should attach as a matra rather than render as an independent vowel).
  let prevWasConsonant = false;

  while (i < text.length) {
    const ch = text[i];

    // Leave anything that isn't a-z untouched: existing Devanagari, spaces,
    // digits, punctuation, emoji, etc.
    if (isDevanagari(ch) || !/[a-z]/.test(ch)) {
      out += ch;
      i += 1;
      prevWasConsonant = false;
      continue;
    }

    const consonant = matchToken(text, i, CONSONANT_TOKENS);
    if (consonant) {
      const afterConsonant = i + consonant.length;
      const followingVowel = matchToken(text, afterConsonant, VOWEL_TOKENS);

      // Nasal (n/m) with no vowel of its own, sitting before another consonant,
      // becomes an anusvara on the previous syllable: "sundar" -> "सुंदर".
      if (
        (consonant === "n" || consonant === "m") &&
        !followingVowel &&
        afterConsonant < text.length &&
        matchToken(text, afterConsonant, CONSONANT_TOKENS)
      ) {
        out += ANUSVARA;
        i = afterConsonant;
        prevWasConsonant = false;
        continue;
      }

      out += CONSONANTS[consonant];

      if (followingVowel) {
        out += VOWEL_MATRAS[followingVowel];
        i = afterConsonant + followingVowel.length;
        prevWasConsonant = false;
        continue;
      }

      // No vowel: add halant before another consonant to form a conjunct,
      // otherwise leave the inherent-'a' form (Hindi drops the final schwa,
      // e.g. "ram" -> "रम", "manish" -> "मनिश").
      const nextIsConsonant =
        afterConsonant < text.length &&
        matchToken(text, afterConsonant, CONSONANT_TOKENS);
      if (nextIsConsonant) out += HALANT;
      i = afterConsonant;
      prevWasConsonant = true;
      continue;
    }

    const vowel = matchToken(text, i, VOWEL_TOKENS);
    if (vowel) {
      out += prevWasConsonant ? VOWEL_MATRAS[vowel] : INDEPENDENT_VOWELS[vowel];
      i += vowel.length;
      prevWasConsonant = false;
      continue;
    }

    // Unmatched Latin letter — emit as-is and move on.
    out += ch;
    i += 1;
    prevWasConsonant = false;
  }

  return out;
}
