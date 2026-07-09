"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import {
  BGMI_LIST_FAQ,
  BGMI_LIST_LAST_UPDATED,
  BGMI_NAME_CATEGORIES,
  charCount,
  getAllBgmiListNames,
  type BgmiNameCategoryId,
} from "@/lib/bgmiStylishNamesListData";

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
      aria-label={`Copy ${text}`}
      className={`copy-btn min-h-10 shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all active:scale-95 ${copied ? "copy-btn--success" : ""}`}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

function WhatsAppShareButton({ text }: { text: string }) {
  const href = `https://wa.me/?text=${encodeURIComponent(`${text} - found on stylishnamegenerator.in/bgmi-stylish-names-list`)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-share-btn flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all active:scale-95"
      aria-label={`Share ${text} on WhatsApp`}
      title="Share on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.04 20.15h-.003a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
      <span className="hidden sm:inline">Share</span>
    </a>
  );
}

function NameCard({
  name,
  index,
  showChars,
}: {
  name: string;
  index: number;
  showChars: boolean;
}) {
  return (
    <article
      className="style-card flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
      style={{ animationDelay: `${Math.min(index * 0.02, 0.45)}s` }}
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <p className="converted-name min-w-0 text-lg sm:text-xl">{name}</p>
        {showChars ? (
          <span className="char-badge shrink-0">{charCount(name)} chars</span>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <CopyButton text={name} />
        <WhatsAppShareButton text={name} />
      </div>
    </article>
  );
}

const CATEGORY_CROSS_LINKS: Partial<
  Record<BgmiNameCategoryId, { needle: string; href: string }>
> = {
  attitude: { needle: "Psycho stylish name page", href: "/psycho-stylish-name" },
  funny: { needle: "Nobita nickname style page", href: "/nobita-nickname-style" },
};

function CategoryIntro({
  categoryId,
  text,
}: {
  categoryId: BgmiNameCategoryId;
  text: string;
}) {
  const link = CATEGORY_CROSS_LINKS[categoryId];
  if (!link || !text.includes(link.needle)) {
    return (
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--cream-muted)]">
        {text}
      </p>
    );
  }

  const [before, after] = text.split(link.needle);
  const nodes: ReactNode[] = [
    before,
    <Link key="link" href={link.href} className="intro-link">
      {link.needle}
    </Link>,
    after,
  ];

  return (
    <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--cream-muted)]">
      {nodes}
    </p>
  );
}

function QuickFilterBar({ activeId }: { activeId: BgmiNameCategoryId }) {
  return (
    <nav aria-label="Jump to name category" className="quick-filter-bar">
      <div className="quick-filter-bar__inner">
        {BGMI_NAME_CATEGORIES.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={`quick-filter-pill ${activeId === category.id ? "quick-filter-pill--active" : ""}`}
          >
            {category.pillLabel}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function BgmiStylishNamesListContent() {
  const [showChars, setShowChars] = useState(false);
  const [activeId, setActiveId] = useState<BgmiNameCategoryId>("cool");

  useEffect(() => {
    const sections = BGMI_NAME_CATEGORIES.map((category) =>
      document.getElementById(category.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id as BgmiNameCategoryId);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const totalNames = getAllBgmiListNames().length;

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="reveal mb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "BGMI Stylish Names List" },
          ]}
        />
      </div>

      <h1 className="article-h1 reveal reveal-delay-1 mb-6">
        100+ BGMI Stylish Names List 2025
      </h1>

      <p className="intro-text reveal reveal-delay-2 mb-6 max-w-3xl">
        Looking for <strong>BGMI stylish names</strong> for 2025? We&apos;ve
        curated 100+ <strong>copy paste</strong> ready names across every
        style — cool, attitude, funny, and girl BGMI names — all tested to
        work in Battlegrounds Mobile India. Want something more personal? Try
        our{" "}
        <Link href="/bgmi-name-generator" className="intro-link">
          BGMI name generator
        </Link>{" "}
        to convert your own name, or browse{" "}
        <Link href="/bgmi-symbols" className="intro-link">
          BGMI symbols
        </Link>{" "}
        for extra borders and decorations.
      </p>

      <p className="mb-8 max-w-3xl text-sm text-[var(--cream-faint)]">
        Last updated: {BGMI_LIST_LAST_UPDATED} · {totalNames} names ·{" "}
        <button
          type="button"
          onClick={() => setShowChars((v) => !v)}
          className="char-toggle"
        >
          {showChars ? "Hide" : "Show"} character counts
        </button>
      </p>

      <div className="reveal reveal-delay-2 mb-10">
        <QuickFilterBar activeId={activeId} />
      </div>

      <div className="flex flex-col gap-14 pb-24 sm:pb-0">
        {BGMI_NAME_CATEGORIES.map((category, catIndex) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className="reveal scroll-mt-32"
          >
            <h2 id={`${category.id}-heading`} className="article-heading mb-3">
              {category.h2}
            </h2>
            <CategoryIntro categoryId={category.id} text={category.intro} />
            <div className="results-grid grid grid-cols-1 gap-3 min-[600px]:grid-cols-2">
              {category.names.map((name, index) => (
                <NameCard
                  key={name}
                  name={name}
                  index={catIndex * 10 + index}
                  showChars={showChars || category.id === "short"}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section
        aria-labelledby="cta-heading"
        className="article-content reveal mt-14 mb-14"
      >
        <h2 id="cta-heading" className="sr-only">
          Build your own BGMI name
        </h2>
        <div className="expert-note">
          <p className="expert-note__label">Build your own</p>
          <p>
            None of these feel right? Our{" "}
            <Link href="/bgmi-name-generator" className="intro-link">
              BGMI Name Generator →
            </Link>{" "}
            lets you convert your own name into 18 fancy Unicode styles
            instantly. Or browse{" "}
            <Link href="/bgmi-symbols" className="intro-link">
              500+ BGMI symbols →
            </Link>{" "}
            to build a completely custom name.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="article-content article-faq reveal mb-14"
      >
        <h2 id="faq-heading" className="article-heading">
          Frequently Asked Questions About BGMI Names
        </h2>
        <dl className="space-y-6">
          {BGMI_LIST_FAQ.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="mb-2">{item.question}</dt>
              <dd>
                {item.question === "Can I use these names in Free Fire too?" ? (
                  <>
                    Yes — most names on this list work in Free Fire as well.
                    Free Fire&apos;s character limit is 20, higher than
                    BGMI&apos;s 16, so anything that fits here will fit there
                    too. For more Free Fire–specific styles, try our{" "}
                    <Link href="/free-fire-name-generator" className="article-link">
                      Free Fire name generator
                    </Link>
                    .
                  </>
                ) : (
                  item.answer
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="reveal mt-12">
        <RelatedTools
          tools={[
            {
              href: "/bgmi-name-generator",
              title: "BGMI Name Generator",
              description:
                "Convert your own name into 18 fancy Unicode styles — copy paste ready.",
            },
            {
              href: "/bgmi-symbols",
              title: "BGMI Symbols",
              description:
                "500+ tested Unicode symbols and border pairs for BGMI names.",
            },
            {
              href: "/free-fire-name-generator",
              title: "Free Fire Name Generator",
              description: "FF-compatible fonts, symbols, and a 20-char counter.",
            },
          ]}
        />
      </div>
    </main>
  );
}
