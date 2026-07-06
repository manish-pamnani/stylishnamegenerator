/** Biology & science Unicode symbol library — cell/DNA, Greek letters, notation, sub/superscripts, formulas. */

export type BiologySymbolItem = {
  symbol: string;
  tags: string[];
};

export type BiologySymbolCategory = {
  id: string;
  title: string;
  /** Larger glyph tile size — Greek letters render small at the default size. */
  largeGlyph?: boolean;
  items: BiologySymbolItem[];
};

const cellAndDna: BiologySymbolItem[] = [
  { symbol: "🧬", tags: ["dna", "gene", "genetics"] },
  { symbol: "🦠", tags: ["microbe", "bacteria", "virus", "cell"] },
  { symbol: "🔬", tags: ["microscope", "lab", "research"] },
  { symbol: "🧫", tags: ["petri dish", "culture", "lab"] },
  { symbol: "🧪", tags: ["test tube", "experiment", "chemistry"] },
  { symbol: "⚗️", tags: ["alembic", "chemistry", "distill"] },
  { symbol: "🔭", tags: ["telescope", "science"] },
  { symbol: "💉", tags: ["syringe", "injection", "medical"] },
  { symbol: "🩺", tags: ["stethoscope", "medical", "doctor"] },
  { symbol: "🫀", tags: ["heart", "organ", "anatomy"] },
  { symbol: "🫁", tags: ["lungs", "organ", "anatomy"] },
  { symbol: "🧠", tags: ["brain", "organ", "anatomy"] },
  { symbol: "👁️", tags: ["eye", "organ", "anatomy"] },
  { symbol: "🦷", tags: ["tooth", "anatomy"] },
  { symbol: "🦴", tags: ["bone", "skeleton", "anatomy"] },
];

const greekLower: BiologySymbolItem[] = [
  "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ",
  "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω",
].map((symbol) => ({ symbol, tags: ["greek", "letter", "lowercase"] }));

const greekUpper: BiologySymbolItem[] = [
  "Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ",
  "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω",
].map((symbol) => ({ symbol, tags: ["greek", "letter", "uppercase"] }));

const scientificNotation: BiologySymbolItem[] = [
  { symbol: "∞", tags: ["infinity"] },
  { symbol: "≈", tags: ["approximately", "equal"] },
  { symbol: "≠", tags: ["not equal"] },
  { symbol: "≤", tags: ["less than or equal"] },
  { symbol: "≥", tags: ["greater than or equal"] },
  { symbol: "±", tags: ["plus minus"] },
  { symbol: "×", tags: ["multiply", "times"] },
  { symbol: "÷", tags: ["divide"] },
  { symbol: "√", tags: ["square root"] },
  { symbol: "∑", tags: ["sum", "sigma"] },
  { symbol: "∫", tags: ["integral"] },
  { symbol: "∂", tags: ["partial derivative"] },
  { symbol: "∇", tags: ["nabla", "gradient"] },
  { symbol: "°", tags: ["degree"] },
  { symbol: "‰", tags: ["per mille"] },
  { symbol: "℃", tags: ["celsius", "temperature"] },
  { symbol: "℉", tags: ["fahrenheit", "temperature"] },
  { symbol: "¹", tags: ["superscript", "one"] },
  { symbol: "²", tags: ["superscript", "two", "squared"] },
  { symbol: "³", tags: ["superscript", "three", "cubed"] },
  { symbol: "⁴", tags: ["superscript", "four"] },
  { symbol: "⁵", tags: ["superscript", "five"] },
  { symbol: "⁻", tags: ["superscript", "minus"] },
  { symbol: "⁺", tags: ["superscript", "plus"] },
];

const superscriptNumbers: BiologySymbolItem[] = [
  "⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹",
].map((symbol) => ({ symbol, tags: ["superscript", "number"] }));

const subscriptNumbers: BiologySymbolItem[] = [
  "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉",
].map((symbol) => ({ symbol, tags: ["subscript", "number"] }));

const biologyEmoji: BiologySymbolItem[] = [
  { symbol: "🌱", tags: ["seedling", "plant", "growth"] },
  { symbol: "🌿", tags: ["herb", "plant"] },
  { symbol: "🍃", tags: ["leaf", "plant"] },
  { symbol: "🌲", tags: ["tree", "plant"] },
  { symbol: "🌊", tags: ["wave", "ocean", "ecology"] },
  { symbol: "🏔️", tags: ["mountain", "ecology"] },
  { symbol: "🌍", tags: ["earth", "globe", "ecology"] },
  { symbol: "☀️", tags: ["sun", "energy"] },
  { symbol: "🌙", tags: ["moon"] },
  { symbol: "⭐", tags: ["star"] },
  { symbol: "🐠", tags: ["fish", "animal", "zoology"] },
  { symbol: "🦋", tags: ["butterfly", "animal", "insect"] },
  { symbol: "🐝", tags: ["bee", "animal", "insect"] },
  { symbol: "🌸", tags: ["flower", "blossom", "botany"] },
  { symbol: "🍄", tags: ["mushroom", "fungus"] },
];

export const BIOLOGY_SYMBOL_CATEGORIES: BiologySymbolCategory[] = [
  { id: "cell-dna", title: "Cell & DNA symbols", items: cellAndDna },
  {
    id: "greek-lower",
    title: "Greek letters — lowercase",
    largeGlyph: true,
    items: greekLower,
  },
  {
    id: "greek-upper",
    title: "Greek letters — uppercase",
    largeGlyph: true,
    items: greekUpper,
  },
  {
    id: "notation",
    title: "Mathematical & scientific notation",
    items: scientificNotation,
  },
  {
    id: "superscript",
    title: "Superscript numbers",
    items: superscriptNumbers,
  },
  { id: "subscript", title: "Subscript numbers", items: subscriptNumbers },
  { id: "emoji", title: "Biology subject emoji", items: biologyEmoji },
];

export type BiologyFormulaCard = {
  formula: string;
  label: string;
};

/** Pre-built chemical formulas biology students search for and copy-paste. */
export const BIOLOGY_FORMULA_CARDS: BiologyFormulaCard[] = [
  { formula: "H₂O", label: "Water" },
  { formula: "CO₂", label: "Carbon dioxide" },
  { formula: "O₂", label: "Oxygen" },
  { formula: "N₂", label: "Nitrogen" },
  { formula: "C₆H₁₂O₆", label: "Glucose" },
  { formula: "NaCl", label: "Sodium chloride (salt)" },
  { formula: "H₂SO₄", label: "Sulfuric acid" },
  { formula: "HCl", label: "Hydrochloric acid" },
  { formula: "NH₃", label: "Ammonia" },
  { formula: "ATP", label: "Adenosine triphosphate" },
];
