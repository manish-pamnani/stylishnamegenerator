"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import {
  WaveDeveloperSection,
  WaveFieldTestSection,
  WaveMythsSection,
  WaveNormalizationSection,
  WaveRenderingSection,
} from "@/components/WavyExpertArticle";
import {
  applyWaveStyle,
  DEFAULT_WAVE_STYLE_ID,
  WAVE_FAQ_ITEMS,
  WAVE_RELATED_TOOLS,
  WAVE_SAMPLE_WORD,
  WAVE_STYLES,
  WAVE_USE_CASES,
} from "@/lib/wavyPageData";

function CopyButton({
  text,
  label = "Copy",
  className = "",
  onClick,
}: {
  text: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    onClick?.();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }, [text, onClick]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-btn min-h-11 shrink-0 rounded-lg px-5 py-2.5 font-medium transition-all active:scale-95 ${copied ? "copy-btn--success" : ""} ${className}`}
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}

function renderFaqAnswer(question: string) {
  if (question === "Does wavy text work in BGMI and Free Fire names?") {
    return (
      <>
        Mostly yes, with a caveat. Light styles like Classic Wave and Bubble
        Wave usually accept fine in BGMI and Free Fire name fields and stay
        readable in the kill feed. Heavy styles — especially Chaos Wave — stack
        so many combining characters that some game name validators reject them
        or strip the marks, leaving plain letters. If a wavy name will not save
        in-game, switch to Classic Wave or pair it with our{" "}
        <Link href="/bgmi-name-generator" className="article-link">
          BGMI name generator
        </Link>{" "}
        and{" "}
        <Link href="/free-fire-name-generator" className="article-link">
          Free Fire name generator
        </Link>
        , which flag what each platform accepts.
      </>
    );
  }
  return WAVE_FAQ_ITEMS.find((item) => item.question === question)?.answer;
}

export default function WavyTextContent() {
  const [input, setInput] = useState("");
  const [activeStyleId, setActiveStyleId] = useState(DEFAULT_WAVE_STYLE_ID);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const displayText = input.trim() || WAVE_SAMPLE_WORD;

  const activeOutput = useMemo(
    () => applyWaveStyle(displayText, activeStyleId),
    [displayText, activeStyleId],
  );

  const previews = useMemo(
    () =>
      WAVE_STYLES.map((style) => ({
        id: style.id,
        name: style.name,
        blurb: style.blurb,
        warn: style.warn ?? false,
        text: applyWaveStyle(displayText, style.id),
      })),
    [displayText],
  );

  const activeStyle = WAVE_STYLES.find((s) => s.id === activeStyleId);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="reveal mb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Wavy Text Generator" },
          ]}
        />
      </div>

      <section aria-labelledby="hero-heading">
        <div className="reveal mb-4">
          <span className="hero-badge inline-block rounded-full px-3 py-1">
            Wavy · Unicode · Copy Paste
          </span>
        </div>

        <h1 id="hero-heading" className="article-h1 reveal reveal-delay-1 mb-4">
          Wavy Text Generator — Copy Paste Wave Fonts
        </h1>

        <p className="intro-text reveal reveal-delay-2 mb-8 max-w-3xl">
          This <strong>wavy text generator</strong> turns any name into wavy
          text you can copy paste in seconds — perfect for your Instagram bio,
          BGMI name, or WhatsApp status. Pick from eight wave styles below, tap
          copy, and the wave effect appears automatically wherever you paste.
          Want more options? Try our{" "}
          <Link href="/" className="intro-link">
            stylish name generator
          </Link>{" "}
          or the{" "}
          <Link href="/freestyle-nickname-generator" className="intro-link">
            freestyle nickname generator
          </Link>
          .
        </p>

        <figure className="article-figure reveal reveal-delay-2 w-full">
          <Image
            src="/wavy-text-generator-copy-paste-wave-fonts.svg"
            alt="Wavy text generator showing multiple Unicode wave font styles — copy paste for Instagram, WhatsApp and BGMI"
            width={640}
            height={400}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="article-figure__img h-auto w-full"
            priority
          />
        </figure>
      </section>

      <section
        aria-label="Wavy text generator tool"
        className="tool-section reveal reveal-delay-3 mb-14"
      >
        <p className="tool-instruction mb-4 text-sm leading-relaxed">
          Type your text, then pick a wave style. The wavy version updates
          instantly — tap Copy and paste it anywhere.
        </p>

        <div className="mb-6">
          <label htmlFor="wavy-input" className="sr-only">
            Enter text to convert to wavy text
          </label>
          <input
            ref={inputRef}
            id="wavy-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, 40))}
            placeholder="Type your text here..."
            maxLength={40}
            className="name-input min-h-12 w-full rounded-xl px-4 text-base"
          />
        </div>

        <div className="wavy-output mb-3 flex min-h-[7rem] flex-col gap-4 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="min-w-0">
            <span className="style-label">
              {activeStyle?.name ?? "Wave"}
              {activeStyle?.warn ? " · may not work in all apps" : ""}
            </span>
            <p className="converted-name mt-2 min-w-0">{activeOutput}</p>
          </div>
          <CopyButton text={activeOutput} />
        </div>

        <p className="char-counter">
          Paste into Instagram, WhatsApp or BGMI — the wave effect will appear
          automatically.
        </p>
      </section>

      <section
        aria-labelledby="styles-heading"
        className="reveal reveal-delay-3 mb-14"
      >
        <h2 id="styles-heading" className="article-heading mb-2">
          Wavy Text Styles — Pick Your Wave
        </h2>
        <p className="tool-instruction mb-6 max-w-3xl text-sm leading-relaxed">
          Tap any wave style to make it the active output above, or copy it
          straight from its card. Each is a different pattern of Unicode wavy
          text, so try a few and grab the wave font you like best.
        </p>

        <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
          {previews.map((style, index) => {
            const isActive = style.id === activeStyleId;
            return (
              <article
                key={style.id}
                className={`style-card flex flex-col gap-3 rounded-xl p-4 sm:p-5 ${isActive ? "wave-style-card--active" : ""}`}
                style={{ animationDelay: `${Math.min(index * 0.04, 0.6)}s` }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="style-label">{style.name}</span>
                  {style.warn ? (
                    <span className="style-compat-badge style-compat-badge--warn">
                      may not work in all apps
                    </span>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStyleId(style.id)}
                  aria-pressed={isActive}
                  className="wave-style-card__preview min-h-[3.5rem] w-full rounded-lg px-3 py-2 text-left"
                  title="Use this wave style"
                >
                  <span className="converted-name min-w-0">{style.text}</span>
                </button>
                <p className="wave-style-card__blurb">{style.blurb}</p>
                <div className="flex items-center gap-2">
                  <CopyButton
                    text={style.text}
                    onClick={() => setActiveStyleId(style.id)}
                  />
                  {isActive ? (
                    <span className="wave-style-card__active-tag">Active</span>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="use-cases-heading"
        className="reveal reveal-delay-4 mb-14"
      >
        <h2 id="use-cases-heading" className="article-heading mb-6">
          Where to Use Wavy Text
        </h2>
        <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
          {WAVE_USE_CASES.map((useCase) => (
            <div key={useCase.id} className="wave-use-tile rounded-xl p-4 sm:p-5">
              <p className="wave-use-tile__text">
                {useCase.title}
                {useCase.href && useCase.linkLabel ? (
                  <>
                    {" "}
                    Open the{" "}
                    <Link href={useCase.href} className="article-link">
                      {useCase.linkLabel}
                    </Link>
                    .
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <article className="article-content reveal reveal-delay-4 mb-14">
        <WaveRenderingSection />
        <WaveNormalizationSection />
        <WaveMythsSection />
        <WaveFieldTestSection />
        <WaveDeveloperSection />
      </article>

      <section
        aria-labelledby="faq-heading"
        className="article-content article-faq reveal reveal-delay-4 mb-14"
      >
        <h2 id="faq-heading" className="article-heading">
          Frequently Asked Questions About Wavy Text
        </h2>
        <dl className="space-y-4">
          {WAVE_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="mb-2">{item.question}</dt>
              <dd>{renderFaqAnswer(item.question)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="reveal reveal-delay-5 mt-12">
        <RelatedTools tools={[...WAVE_RELATED_TOOLS]} />
      </div>
    </main>
  );
}
