"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ThemedNicknameExpertSections from "@/components/ThemedNicknameExpertSections";
import type { ThemedFaqItem, ThemedNicknameConfig } from "@/lib/themedNicknamePageData";
import { getAllThemedNames } from "@/lib/themedNicknamePageData";

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

function NameCard({ name, index }: { name: string; index: number }) {
  return (
    <article
      className="style-card flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
      style={{ animationDelay: `${Math.min(index * 0.03, 0.45)}s` }}
    >
      <p className="converted-name min-w-0 text-lg sm:text-xl">{name}</p>
      <CopyButton text={name} />
    </article>
  );
}

function IntroParagraph({ config }: { config: ThemedNicknameConfig }) {
  if (config.id === "nobita") {
    return (
      <p className="intro-text reveal reveal-delay-2 mb-8 max-w-3xl">
        <strong>Nobita nickname style</strong> is the funniest trend in Indian
        gaming right now — and this page has 55 ready-to-paste names for{" "}
        <strong>BGMI</strong> and <strong>Free Fire</strong>. Whether you want a
        cute Nobita BGMI name or a self-roasting noob tag for your squad, just
        tap copy and paste. Need something custom? Hit our{" "}
        <Link href="/bgmi-name-generator" className="intro-link">
          BGMI name generator
        </Link>{" "}
        or{" "}
        <Link href="/free-fire-name-generator" className="intro-link">
          Free Fire name generator
        </Link>{" "}
        and build your own Nobita-style name in seconds.
      </p>
    );
  }

  return (
    <p className="intro-text reveal reveal-delay-2 mb-8 max-w-3xl">
      A <strong>psycho stylish name</strong> tells everyone in the lobby you
      did not come to play nice — and this list has 55 attitude-packed names
      for <strong>BGMI</strong> ranked pushes. Dark Gothic fonts, heavy borders,
      zero mercy. Want your own tag? Use our{" "}
      <Link href="/bgmi-name-generator" className="intro-link">
        BGMI name generator
      </Link>{" "}
      or{" "}
      <Link href="/freestyle-nickname-generator" className="intro-link">
        freestyle nickname generator
      </Link>{" "}
      to craft a psycho BGMI name that hits different.
    </p>
  );
}

function NamesIntro({ config }: { config: ThemedNicknameConfig }) {
  if (config.id === "nobita") {
    return (
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--cream-muted)]">
        55 hand-picked Nobita nickname ideas — tap copy on any{" "}
        <Link href="/bgmi-name-generator" className="intro-link">
          Nobita-style BGMI names
        </Link>
        , cute funny tags, or short clan prefixes. Every Nobita style name uses
        Unicode fonts that work in BGMI and Free Fire.
      </p>
    );
  }

  return (
    <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--cream-muted)]">
      55 curated psycho attitude names — copy any entry below. For more{" "}
      <Link href="/freestyle-nickname-generator" className="intro-link">
        attitude nicknames
      </Link>
      , pair Bold Fraktur fonts from our{" "}
      <Link href="/bgmi-name-generator" className="intro-link">
        BGMI name generator
      </Link>{" "}
      with borders from{" "}
      <Link href="/bgmi-symbols" className="intro-link">
        BGMI symbols
      </Link>{" "}
      to add psycho-style borders to your name.
    </p>
  );
}

function CtaBox({ config }: { config: ThemedNicknameConfig }) {
  if (config.id === "nobita") {
    return (
      <div className="expert-note">
        <p className="expert-note__label">Build your own</p>
        <p>
          Want a unique Nobita-style name with your actual name in it? Use our{" "}
          <Link href="/bgmi-name-generator" className="intro-link">
            BGMI name generator
          </Link>{" "}
          to convert any name into cute and funny Unicode fonts — then combine
          it with Nobita-style borders from the lists above.
        </p>
      </div>
    );
  }

  return (
    <div className="expert-note expert-note--pink">
      <p className="expert-note__label">Build your own</p>
      <p>
        Create your own psycho-style name using our{" "}
        <Link href="/bgmi-name-generator" className="intro-link">
          BGMI name generator
        </Link>{" "}
        — convert any name into dark Gothic or Bold Fraktur fonts, then add a
        border from our{" "}
        <Link href="/bgmi-symbols" className="intro-link">
          BGMI symbols library
        </Link>
        .
      </p>
    </div>
  );
}

function renderFaqAnswer(item: ThemedFaqItem, config: ThemedNicknameConfig) {
  if (config.id === "nobita" && item.question === "How do I make my own Nobita-style name?") {
    const [before, after] = item.answer.split("BGMI name generator");
    return (
      <>
        {before}
        <Link href="/bgmi-name-generator" className="article-link">
          BGMI name generator
        </Link>
        {after}
      </>
    );
  }

  if (config.id === "psycho") {
    if (item.question === "What fonts are used in psycho-style BGMI names?") {
      const [beforeGen, afterGen] = item.answer.split("BGMI name generator");
      const [middle, end] = (afterGen ?? "").split("BGMI symbols library");

      return (
        <>
          {beforeGen}
          <Link href="/bgmi-name-generator" className="article-link">
            BGMI name generator
          </Link>
          {middle}
          <Link href="/bgmi-symbols" className="article-link">
            BGMI symbols library
          </Link>
          {end}
        </>
      );
    }

    if (item.question === "How do I create my own psycho stylish name?") {
      const [beforeGen, afterGen] = item.answer.split("BGMI name generator");
      const [middle, end] = (afterGen ?? "").split("BGMI symbols page");

      return (
        <>
          {beforeGen}
          <Link href="/bgmi-name-generator" className="article-link">
            BGMI name generator
          </Link>
          {middle}
          <Link href="/bgmi-symbols" className="article-link">
            BGMI symbols page
          </Link>
          {end}
        </>
      );
    }
  }

  return item.answer;
}

export default function ThemedNicknamePage({
  config,
}: {
  config: ThemedNicknameConfig;
}) {
  const [activeTab, setActiveTab] = useState(config.categories[0]?.id ?? "");

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="reveal mb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: config.breadcrumbLabel },
          ]}
        />
      </div>

      <h1 className="article-h1 reveal reveal-delay-1 mb-6">{config.h1}</h1>

      <IntroParagraph config={config} />

      <section
        aria-labelledby="context-heading"
        className="article-content reveal reveal-delay-2 mb-14"
      >
        <h2 id="context-heading" className="article-heading">
          {config.culturalHeading}
        </h2>
        <p>{config.culturalContext}</p>
      </section>

      <section
        aria-labelledby="names-heading"
        className="reveal reveal-delay-3 mb-14"
      >
        <h2 id="names-heading" className="article-heading mb-3">
          {config.namesHeading}
        </h2>

        <NamesIntro config={config} />

        <p className="mb-4 text-sm text-[var(--cream-faint)]">
          Last updated: {config.lastUpdated} · {getAllThemedNames(config).length}{" "}
          names
        </p>

        <div
          className="vibe-tabs md:hidden"
          role="tablist"
          aria-label="Name categories"
        >
          {config.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeTab === category.id}
              className={`vibe-tabs__btn ${activeTab === category.id ? "vibe-tabs__btn--active" : ""}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.tabLabel}
            </button>
          ))}
        </div>

        <div className="vibe-buckets mt-4">
          {config.categories.map((category) => {
            const hiddenOnMobile = activeTab !== category.id;
            let cardIndex = 0;
            for (const prev of config.categories) {
              if (prev.id === category.id) break;
              cardIndex += prev.names.length;
            }

            return (
              <div
                key={category.id}
                className={`themed-name-category ${hiddenOnMobile ? "themed-name-category--hidden-mobile" : ""}`}
              >
                <h3 className="vibe-bucket__heading">{category.title}</h3>
                <div className="results-grid grid grid-cols-1 gap-3 min-[600px]:grid-cols-2">
                  {category.names.map((name, index) => (
                    <NameCard
                      key={name}
                      name={name}
                      index={cardIndex + index}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="article-content reveal reveal-delay-4 mb-14"
      >
        <h2 id="cta-heading" className="article-heading mb-4">
          {config.ctaHeading}
        </h2>
        <CtaBox config={config} />
      </section>

      <Image
        src={config.ogImage}
        alt={config.ogImageAlt}
        width={640}
        height={400}
        sizes="(max-width: 768px) 100vw, 640px"
        className="reveal reveal-delay-4 mb-14 w-full max-w-2xl rounded-xl border border-[var(--border)]"
      />

      <ThemedNicknameExpertSections config={config} />

      <section
        aria-labelledby="faq-heading"
        className="article-content article-faq reveal reveal-delay-4 mb-14"
      >
        <h2 id="faq-heading" className="article-heading">
          {config.faqHeading}
        </h2>
        <dl className="space-y-6">
          {config.faq.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="mb-2">{item.question}</dt>
              <dd>{renderFaqAnswer(item, config)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="reveal reveal-delay-5 mt-12">
        <RelatedTools tools={config.relatedTools} />
      </div>
    </main>
  );
}
