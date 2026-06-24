"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BgmiSymbolsExpertArticle from "@/components/BgmiSymbolsExpertArticle";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import {
  BGMI_BORDER_PAIRS,
  BGMI_SYMBOL_CATEGORIES,
  BGMI_SYMBOLS_FAQ,
  BGMI_SYMBOLS_LAST_UPDATED,
  BGMI_SYMBOLS_RELATED_TOOLS,
} from "@/lib/bgmiSymbolsPageData";

function useCopyFlash(durationMs = 1000) {
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

function SymbolTile({
  symbol,
  copyKey,
  copied,
  onCopy,
}: {
  symbol: string;
  copyKey: string;
  copied: boolean;
  onCopy: (key: string, text: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onCopy(copyKey, symbol)}
      className={`symbol-library__tile ${copied ? "symbol-library__tile--copied" : ""}`}
      aria-label={copied ? "Copied!" : `Copy ${symbol}`}
      title={copied ? "Copied!" : `Copy ${symbol}`}
    >
      <span className="symbol-library__glyph">{copied ? "✓" : symbol}</span>
    </button>
  );
}

function CopyAllButton({
  symbols,
  categoryId,
  copiedKey,
  onCopy,
}: {
  symbols: string[];
  categoryId: string;
  copiedKey: string | null;
  onCopy: (key: string, text: string) => void;
}) {
  const key = `all-${categoryId}`;
  const copied = copiedKey === key;

  return (
    <button
      type="button"
      onClick={() => onCopy(key, symbols.join(" "))}
      className={`copy-all-btn ${copied ? "copy-all-btn--success" : ""}`}
    >
      {copied ? "Copied!" : "Copy all"}
    </button>
  );
}

function BorderCopyButton({
  text,
  rowKey,
  copiedKey,
  onCopy,
}: {
  text: string;
  rowKey: string;
  copiedKey: string | null;
  onCopy: (key: string, text: string) => void;
}) {
  const copied = copiedKey === rowKey;

  return (
    <button
      type="button"
      onClick={() => onCopy(rowKey, text)}
      className={`copy-btn min-h-10 rounded-lg px-4 py-2 text-sm font-medium transition-all active:scale-95 ${copied ? "copy-btn--success" : ""}`}
    >
      {copied ? "Copied!" : "Copy pair"}
    </button>
  );
}

export default function BgmiSymbolsContent() {
  const [search, setSearch] = useState("");
  const [borderName, setBorderName] = useState("");
  const { copiedKey, copy } = useCopyFlash(1000);
  const searchRef = useRef<HTMLInputElement>(null);

  const query = search.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!query) return BGMI_SYMBOL_CATEGORIES;

    return BGMI_SYMBOL_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        item.symbol.toLowerCase().includes(query) ||
        category.title.toLowerCase().includes(query),
      ),
    })).filter((category) => category.items.length > 0);
  }, [query]);

  const displayName = borderName.trim() || "YourName";

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="reveal mb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "BGMI Symbols" },
          ]}
        />
      </div>

      <section aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="article-h1 reveal reveal-delay-1 mb-6">
          BGMI Symbols &amp; Special Characters — Copy Paste
        </h1>

        <p className="intro-text reveal reveal-delay-2 mb-6 max-w-3xl">
          Looking for symbols to complete your <strong>BGMI name</strong>? This
          library has every Unicode character that works in Battlegrounds Mobile
          India — <strong>BGMI symbols</strong> you can{" "}
          <strong>copy paste</strong> in one tap. Browse 500+{" "}
          <strong>bgmi name symbols</strong> for borders, stars, and crowns, or
          generate styled letters with our{" "}
          <Link href="/bgmi-name-generator" className="intro-link">
            BGMI name generator
          </Link>
          . Part of{" "}
          <Link href="/" className="intro-link">
            stylish name generator
          </Link>{" "}
          — free, no app needed.
        </p>

        {/* <div className="reveal reveal-delay-3 mb-10">
          <label htmlFor="symbol-search" className="sr-only">
            Search BGMI symbols
          </label>
          <input
            ref={searchRef}
            id="symbol-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search symbols — e.g. star, crown, border, fire…"
            className="name-input symbol-search min-h-12 w-full rounded-xl px-4 text-base"
            autoComplete="off"
          />
        </div> */}
      </section>

      <section
        aria-labelledby="how-to-heading"
        className="article-content reveal reveal-delay-3 mb-14"
      >
        <h2 id="how-to-heading" className="article-heading">
          How to Use Symbols in Your BGMI Name
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-[var(--cream-muted)]">
          <li>
            Find a symbol below or use the search bar — click any tile to copy
            it to your clipboard
          </li>
          <li>
            Open BGMI → Inventory → Treasures → Rename Card, then paste the
            symbol around your nickname
          </li>
          <li>
            Need styled letters too? Use the{" "}
            <Link href="/bgmi-name-generator" className="intro-link">
              BGMI name generator
            </Link>{" "}
            first, then decorate with symbols from this library
          </li>
        </ol>
      </section>

      {/* <section
        aria-labelledby="library-heading"
        className="tool-section reveal reveal-delay-4 mb-14"
      >
        <h2 id="library-heading" className="article-heading mb-3">
          BGMI-Compatible Symbol Library
        </h2>
        <p className="mb-4 text-sm text-[var(--cream-muted)]">
          Every <strong>bgmi symbol</strong> and{" "}
          <strong>bgmi nickname symbols</strong> entry below is tested for
          Battlegrounds Mobile India. Search by keyword or browse categories —
          tap any tile to copy paste instantly.
        </p>

        <div className="symbol-library__meta mb-6 flex flex-wrap items-center gap-3">
          <span className="tested-badge">Tested in BGMI</span>
          <span className="text-sm text-[var(--cream-faint)]">
            All symbols below are tested and confirmed to render correctly in
            BGMI.
          </span>
          <span className="text-sm text-[var(--cream-faint)]">
            Last updated: {BGMI_SYMBOLS_LAST_UPDATED}
          </span>
        </div>

        {filteredCategories.length === 0 ? (
          <p className="text-[var(--cream-muted)]" role="status">
            No symbols match &ldquo;{search}&rdquo;. Try star, crown, border, or
            flower.
          </p>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.id} className="symbol-library__category mb-10">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="article-subheading mb-0">{category.title}</h3>
                <CopyAllButton
                  symbols={category.items.map((item) => item.symbol)}
                  categoryId={category.id}
                  copiedKey={copiedKey}
                  onCopy={copy}
                />
              </div>
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
                      onCopy={copy}
                    />
                  );
                })}
              </div>
            </div>
          ))
        )}

        <Image
          src="/bgmi-symbols-special-characters-copy-paste.svg"
          alt="BGMI symbols and special characters library — copy paste Unicode symbols for Battlegrounds Mobile India names"
          width={640}
          height={400}
          sizes="(max-width: 768px) 100vw, 640px"
          className="mt-10 w-full max-w-2xl rounded-xl border border-[var(--border)]"
        />
      </section> */}

      <section
        aria-labelledby="borders-heading"
        className="article-content reveal reveal-delay-4 mb-14"
      >
        <h2 id="borders-heading" className="article-heading mb-4">
          BGMI Border &amp; Frame Characters
        </h2>
        <p className="mb-4 text-sm text-[var(--cream-muted)]">
          Type your name below — every border pair updates live so you can copy
          a finished BGMI nickname in one click.
        </p>

        <div className="mb-6">
          <label htmlFor="border-name-input" className="sr-only">
            Your name for border preview
          </label>
          <input
            id="border-name-input"
            type="text"
            value={borderName}
            onChange={(e) => setBorderName(e.target.value.slice(0, 16))}
            placeholder="Type your name for border preview…"
            maxLength={16}
            className="name-input min-h-12 w-full max-w-md rounded-xl px-4 text-base"
          />
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="border-preview-table w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface-raised)]">
                <th className="px-4 py-3 font-medium text-[var(--cream-faint)]">
                  Border style
                </th>
                <th className="px-4 py-3 font-medium text-[var(--cream-faint)]">
                  Preview
                </th>
                <th className="px-4 py-3 font-medium text-[var(--cream-faint)]">
                  Copy
                </th>
              </tr>
            </thead>
            <tbody>
              {BGMI_BORDER_PAIRS.map((pair) => {
                const fullName = `${pair.left} ${displayName} ${pair.right}`;
                const rowKey = `border-${pair.style}`;
                return (
                  <tr
                    key={pair.style}
                    className="border-b border-[var(--border)] last:border-b-0"
                  >
                    <td className="px-4 py-3 text-[var(--cream-muted)]">
                      {pair.style}
                    </td>
                    <td className="converted-name border-preview-table__preview px-4 py-3 text-base">
                      {fullName}
                    </td>
                    <td className="px-4 py-3">
                      <BorderCopyButton
                        text={fullName}
                        rowKey={rowKey}
                        copiedKey={copiedKey}
                        onCopy={copy}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <BgmiSymbolsExpertArticle />

      <section
        aria-labelledby="faq-heading"
        className="article-content article-faq reveal reveal-delay-4 mb-14"
      >
        <h2 id="faq-heading" className="article-heading">
          Frequently Asked Questions About BGMI Symbols
        </h2>
        <dl className="space-y-6">
          {BGMI_SYMBOLS_FAQ.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="mb-2">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-[var(--cream-faint)]">
          Ready for a full{" "}
          <Link href="/bgmi-name-generator" className="intro-link">
            bgmi id name style
          </Link>
          ? Generate styled letters first, then pick symbols here. Browse our{" "}
          <Link href="/bgmi-stylish-names-list" className="intro-link">
            BGMI stylish names list
          </Link>{" "}
          for ready-made combos.
        </p>
      </section>

      <div className="reveal reveal-delay-5 mt-12">
        <RelatedTools tools={[...BGMI_SYMBOLS_RELATED_TOOLS]} />
      </div>
    </main>
  );
}
