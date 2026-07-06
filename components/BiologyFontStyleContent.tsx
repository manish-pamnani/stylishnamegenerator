"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import BiologyExpertSections from "@/components/BiologyExpertSections";
import RelatedTools from "@/components/RelatedTools";
import {
  BIOLOGY_BADGE_STYLE_IDS,
  generateBiologyAll,
  type FontStyleResult,
} from "@/lib/fontStyles";
import {
  BIOLOGY_FAQ,
  BIOLOGY_LAST_UPDATED,
  BIOLOGY_RELATED_TOOLS,
  BIOLOGY_USE_CASE_TABS,
} from "@/lib/biologyPageData";
import {
  BIOLOGY_FORMULA_CARDS,
  BIOLOGY_SYMBOL_CATEGORIES,
} from "@/lib/biologySymbols";

const badgeIdSet = new Set<string>(BIOLOGY_BADGE_STYLE_IDS);

function useCopyFlash(durationMs = 1200) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = useCallback(
    async (key: string, text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedKey(key);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopiedKey(null), durationMs);
      } catch {
        /* clipboard unavailable */
      }
    },
    [durationMs],
  );

  return { copiedKey, copy };
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-btn min-h-11 shrink-0 rounded-lg px-5 py-2.5 font-medium transition-all active:scale-95 ${copied ? "copy-btn--success" : ""}`}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

function StyleCard({
  style,
  index,
  recommended,
}: {
  style: FontStyleResult;
  index: number;
  recommended: boolean;
}) {
  const greatForBiology = badgeIdSet.has(style.id);

  return (
    <article
      className={`style-card flex flex-col gap-3 rounded-xl p-4 sm:p-5 ${recommended ? "style-card--recommended" : ""}`}
      style={{ animationDelay: `${Math.min(index * 0.04, 0.6)}s` }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="style-label">{style.name}</span>
        {greatForBiology && (
          <span className="style-compat-badge style-compat-badge--ok">
            ✅ Great for biology
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="converted-name min-w-0">{style.text}</p>
        <CopyButton text={style.text} />
      </div>
    </article>
  );
}

function SymbolTile({
  symbol,
  copyKey,
  copied,
  large,
  onCopy,
}: {
  symbol: string;
  copyKey: string;
  copied: boolean;
  large?: boolean;
  onCopy: (key: string, text: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onCopy(copyKey, symbol)}
      className="symbol-library__tile"
      aria-label={copied ? "Copied!" : `Copy ${symbol}`}
      title={copied ? "Copied!" : `Copy ${symbol}`}
    >
      <span
        className={`symbol-library__glyph ${large ? "symbol-library__glyph--lg" : ""}`}
      >
        {copied ? "✓" : symbol}
      </span>
    </button>
  );
}

function FormulaCard({
  formula,
  label,
  copyKey,
  copiedKey,
  onCopy,
}: {
  formula: string;
  label: string;
  copyKey: string;
  copiedKey: string | null;
  onCopy: (key: string, text: string) => void;
}) {
  const copied = copiedKey === copyKey;

  return (
    <article className="style-card flex flex-col gap-3 rounded-xl p-4 sm:p-5">
      <span className="style-label">{label}</span>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="converted-name min-w-0">{formula}</p>
        <button
          type="button"
          onClick={() => onCopy(copyKey, formula)}
          className={`copy-btn min-h-11 shrink-0 rounded-lg px-5 py-2.5 font-medium transition-all active:scale-95 ${copied ? "copy-btn--success" : ""}`}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
    </article>
  );
}

export default function BiologyFontStyleContent() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<FontStyleResult[]>(() =>
    generateBiologyAll(""),
  );
  const [activeTab, setActiveTab] = useState(BIOLOGY_USE_CASE_TABS[0]!.id);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { copiedKey, copy } = useCopyFlash();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runGenerate = useCallback((value: string) => {
    setResults(generateBiologyAll(value));
  }, []);

  const handleInput = (value: string) => {
    const trimmed = value.slice(0, 30);
    setInput(trimmed);
    runGenerate(trimmed);
  };

  const activeTabData =
    BIOLOGY_USE_CASE_TABS.find((tab) => tab.id === activeTab) ??
    BIOLOGY_USE_CASE_TABS[0]!;
  const recommendedSet = useMemo(
    () => new Set(activeTabData.recommendedStyleIds),
    [activeTabData],
  );

  const query = search.trim().toLowerCase();
  const filteredCategories = useMemo(() => {
    if (!query) return BIOLOGY_SYMBOL_CATEGORIES;

    return BIOLOGY_SYMBOL_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          category.title.toLowerCase().includes(query),
      ),
    })).filter((category) => category.items.length > 0);
  }, [query]);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="reveal mb-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Biology Font Style" }]}
        />
      </div>

      <h1 className="article-h1 reveal reveal-delay-1 mb-6">
        Biology Font Style — Stylish Science Fonts Copy Paste
      </h1>

      <p className="intro-text reveal reveal-delay-2 mb-6 max-w-3xl">
        <strong>Biology font style</strong> text turns your project headings,
        Instagram bio, or WhatsApp status into something that looks
        science-ready — all <strong>copy paste</strong>, no app needed. Type
        below to get Unicode fonts for biology project covers, a stylish{" "}
        <strong>biology student</strong> Instagram bio, or a clean WhatsApp
        status. Part of the{" "}
        <Link href="/" className="intro-link">
          stylish name generator
        </Link>{" "}
        — for bio-specific styles, see{" "}
        <Link href="/instagram-stylish-fonts" className="intro-link">
          Instagram stylish fonts
        </Link>
        .
      </p>

      <div
        className="vibe-tabs reveal reveal-delay-3 mb-2"
        role="tablist"
        aria-label="Biology font use cases"
      >
        {BIOLOGY_USE_CASE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`vibe-tabs__btn ${activeTab === tab.id ? "vibe-tabs__btn--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="article-note reveal reveal-delay-3 mb-10" role="status">
        {activeTabData.message}
      </p>

      <section
        aria-labelledby="how-to-heading"
        className="reveal reveal-delay-3 mb-14 max-w-3xl"
      >
        <h2 id="how-to-heading" className="article-heading">
          How to Use Biology Font Styles
        </h2>
        <ol className="how-steps">
          <li className="how-step">
            Type your text in the box below — or use the pre-filled
            &ldquo;Biology&rdquo; example to see every style instantly.
          </li>
          <li className="how-step">
            Pick a use case above (Projects, Instagram Bio, or WhatsApp) to
            highlight the font styles that fit best.
          </li>
          <li className="how-step">
            Tap Copy on your favourite style, then paste it into Word, Google
            Docs, Canva, Instagram, or WhatsApp.
          </li>
        </ol>
      </section>

      <section
        aria-labelledby="generator-heading"
        className="tool-section reveal reveal-delay-4 mb-14"
      >
        <h2 id="generator-heading" className="article-heading mb-3">
          Biology &amp; Science Font Styles — Browse &amp; Copy
        </h2>
        <p className="mb-4 text-sm text-[var(--cream-muted)]">
          Every style below works as a{" "}
          <strong>science font style copy paste</strong> and a{" "}
          <strong>biology project font</strong>. Cards marked{" "}
          <strong>✅ Great for biology</strong> have the strongest
          academic/scientific look.
        </p>

        <div className="mb-3 flex flex-col gap-3 sm:flex-row">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Biology"
            maxLength={30}
            className="name-input min-h-12 flex-1 rounded-xl px-4 text-base"
            aria-label="Enter text for biology font styles"
          />
          <button
            type="button"
            onClick={() => runGenerate(input)}
            className="generate-btn min-h-12 rounded-xl px-8 text-sm font-semibold transition-all active:scale-95 sm:shrink-0"
          >
            Generate
          </button>
        </div>

        <p className="mb-6 text-sm text-[var(--cream-faint)]">
          Last updated: {BIOLOGY_LAST_UPDATED}
        </p>

        <div className="results-grid grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
          {results.map((style, index) => (
            <StyleCard
              key={style.id}
              style={style}
              index={index}
              recommended={recommendedSet.has(style.id)}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="symbols-heading"
        className="tool-section reveal reveal-delay-4 mb-14"
      >
        <h2 id="symbols-heading" className="article-heading mb-3">
          Biology Symbols &amp; Scientific Characters
        </h2>
        <p className="mb-4 text-sm text-[var(--cream-muted)]">
          Greek letters, subscript/superscript numbers, and scientific
          notation — every symbol here is plain Unicode, so it pastes
          correctly into Word, Google Docs, and WhatsApp.
        </p>

        <div className="mb-8">
          <label htmlFor="biology-symbol-search" className="sr-only">
            Search biology symbols
          </label>
          <input
            id="biology-symbol-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search — try alpha, sigma, dna, subscript…"
            className="name-input min-h-12 w-full rounded-xl px-4 text-base"
            autoComplete="off"
          />
        </div>

        {filteredCategories.length === 0 ? (
          <p className="text-[var(--cream-muted)]" role="status">
            No symbols match &ldquo;{search}&rdquo;. Try alpha, sigma, dna, or
            subscript.
          </p>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.id} className="symbol-library__category mb-10">
              <h3 className="article-subheading mb-3">{category.title}</h3>
              <div
                className="symbol-library__grid"
                role="group"
                aria-label={category.title}
              >
                {category.items.map((item) => {
                  const key = `${category.id}-${item.symbol}`;
                  return (
                    <SymbolTile
                      key={key}
                      symbol={item.symbol}
                      copyKey={key}
                      copied={copiedKey === key}
                      large={category.largeGlyph}
                      onCopy={copy}
                    />
                  );
                })}
              </div>
            </div>
          ))
        )}

        <h3 className="article-subheading mb-3">
          Chemical formulas — copy paste ready
        </h3>
        <div className="results-grid grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
          {BIOLOGY_FORMULA_CARDS.map((card) => (
            <FormulaCard
              key={card.formula}
              formula={card.formula}
              label={card.label}
              copyKey={`formula-${card.formula}`}
              copiedKey={copiedKey}
              onCopy={copy}
            />
          ))}
        </div>
      </section>

      <BiologyExpertSections />

      <section
        aria-labelledby="faq-heading"
        className="article-content article-faq reveal reveal-delay-4 mb-14"
      >
        <h2 id="faq-heading" className="article-heading">
          Frequently Asked Questions About Biology Font Styles
        </h2>
        <dl className="space-y-6">
          {BIOLOGY_FAQ.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="mb-2">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-[var(--cream-faint)]">
          Writing in Hindi medium? Try{" "}
          <Link href="/hindi-stylish-fonts-generator" className="intro-link">
            Hindi stylish fonts
          </Link>
          , or mix symbols and fonts freely with the{" "}
          <Link href="/freestyle-nickname-generator" className="intro-link">
            freestyle nickname generator
          </Link>
          .
        </p>
      </section>

      <div className="reveal reveal-delay-5 mt-12">
        <RelatedTools tools={[...BIOLOGY_RELATED_TOOLS]} />
      </div>
    </main>
  );
}
