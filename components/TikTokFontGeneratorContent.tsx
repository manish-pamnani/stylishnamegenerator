"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import TikTokExpertSections from "@/components/TikTokExpertSections";
import TikTokFontGenerator from "@/components/TikTokFontGenerator";
import {
  TIKTOK_BIO_TEMPLATES,
  TIKTOK_FAQ,
  TIKTOK_RELATED_TOOLS,
} from "@/lib/tiktokPageData";
import { TIKTOK_EXPERT_FAQ } from "@/lib/tiktokExpertData";

const TIKTOK_TEMPLATE_WARN_LENGTH = 70;
const TIKTOK_TEMPLATE_MAX_LENGTH = 80;

function TemplateCard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const length = [...text].length;
  const tooLong = length > TIKTOK_TEMPLATE_MAX_LENGTH;
  const badgeClass = tooLong
    ? "char-count-badge--danger"
    : length > TIKTOK_TEMPLATE_WARN_LENGTH
      ? "char-count-badge--warn"
      : "char-count-badge--ok";

  const handleCopy = useCallback(async () => {
    if (tooLong) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }, [text, tooLong]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={tooLong}
      className={`style-card group flex min-h-11 w-full cursor-pointer flex-col gap-2 px-4 py-3 text-left active:scale-[0.98] ${copied ? "border-[var(--neon-cyan)] shadow-[0_0_20px_var(--glow-cyan)]" : ""}`}
      aria-label="Copy TikTok bio template"
    >
      <div className="flex items-center justify-between gap-2">
        <span className={`char-count-badge ${badgeClass}`}>
          {length} chars
        </span>
        <span
          className={`copy-btn shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${copied ? "copy-btn--success" : ""}`}
        >
          {copied ? "Copied!" : tooLong ? "Too long for TikTok bio" : "Copy"}
        </span>
      </div>
      <span className="converted-name min-w-0 whitespace-pre-wrap text-base">
        {text}
      </span>
    </button>
  );
}

export default function TikTokFontGeneratorContent() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="reveal mb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "TikTok Font Generator" },
          ]}
        />
      </div>

      <h1 className="article-h1 reveal reveal-delay-1 mb-6">
        TikTok Font Generator — Stylish Fonts &amp; Bio Copy Paste
      </h1>

      <p className="intro-text reveal reveal-delay-2 mb-4 max-w-3xl">
        Our <strong>TikTok font generator</strong> turns plain text into
        stylish Unicode fonts you can <strong>copy paste</strong> straight
        into your TikTok bio, username, or comments — the same fonts also
        work on <strong>Instagram Reels</strong> and{" "}
        <strong>YouTube Shorts</strong>, so one styled bio covers every
        short-form video platform you post on. Part of the{" "}
        <Link href="/" className="intro-link">
          stylish name generator
        </Link>{" "}
        — for Instagram-specific bio styles, see{" "}
        <Link href="/instagram-stylish-fonts" className="intro-link">
          Instagram stylish fonts
        </Link>
        .
      </p>

      <div className="reveal reveal-delay-2 mb-8 flex flex-wrap gap-2">
        <span className="hero-badge inline-block rounded-full px-3 py-1">
          🎵 TikTok
        </span>
        <span className="hero-badge inline-block rounded-full px-3 py-1">
          📱 Instagram Reels
        </span>
        <span className="hero-badge inline-block rounded-full px-3 py-1">
          ▶️ YouTube Shorts
        </span>
      </div>

      <section aria-labelledby="how-to-heading" className="reveal reveal-delay-3 mb-6 max-w-3xl">
        <h2 id="how-to-heading" className="article-heading">
          How to Use Stylish Fonts on TikTok
        </h2>
        <p>
          Type your bio text below and tap Copy on any style you like. Open
          TikTok or Instagram Reels, go to{" "}
          <strong>Edit Profile → Bio</strong>, and paste — Unicode fonts paste
          natively on iOS and Android with no extra app needed. For a
          username, stick to the styles marked{" "}
          <strong>✅ Works in bio and username</strong> below, since TikTok
          usernames reject more characters than bios do.
        </p>
      </section>

      <div className="reveal reveal-delay-3 mb-14">
        <TikTokFontGenerator />
      </div>

      <section
        aria-labelledby="compat-heading"
        className="article-content reveal reveal-delay-4 mb-14"
      >
        <h2 id="compat-heading" className="article-heading">
          TikTok-Compatible Font Styles
        </h2>
        <p>
          TikTok&apos;s font rendering is broadly similar to Instagram — most
          Mathematical Unicode blocks render correctly in TikTok bios and
          usernames. TikTok usernames, however, run through a stricter
          character allowlist than bios do, so several styles that look fine
          in a bio get silently stripped from a username. TikTok comments
          support Unicode fonts too, though some styles get stripped in
          comment notifications on older Android devices. Cards below are
          marked <strong>✅ Works in bio and username</strong> or{" "}
          <strong>⚠️ Works in bio only</strong> — styles that fail everywhere
          (Strikethrough, Upside Down) are left out of the grid entirely.
        </p>
      </section>

      <section
        aria-labelledby="bio-templates-heading"
        className="tool-section reveal reveal-delay-4 mb-14"
      >
        <h2 id="bio-templates-heading" className="article-heading mb-4">
          TikTok Bio Templates — Copy Paste Ready
        </h2>
        <p className="tool-instruction mb-6 text-sm leading-relaxed">
          Ready-made TikTok bio templates, every one under TikTok&apos;s
          80-character bio limit. Tap any card to copy, then open TikTok or
          Instagram Reels and paste into your bio.
        </p>

        {TIKTOK_BIO_TEMPLATES.map((category, index) => (
          <div
            key={category.title}
            className={
              index > 0
                ? "mt-8 border-t border-[var(--border)] pt-8"
                : undefined
            }
          >
            <h3 className="article-subheading">{category.title}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {category.templates.map((template) => (
                <TemplateCard key={template} text={template} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section
        aria-labelledby="brand-heading"
        className="article-content reveal reveal-delay-4 mb-14"
      >
        <h2 id="brand-heading" className="article-heading">
          Why Stylish Fonts Matter for Your TikTok and Reels Brand
        </h2>
        <p>
          A styled bio is a small, low-effort signal that you take your page
          seriously — creators and small businesses alike use it to stand out
          in a crowded feed. Indian creators on Instagram Reels and YouTube
          Shorts are a fast-growing group with real purchasing power, and
          small businesses now use TikTok-style short video heavily for
          marketing. Treat font styling as part of your profile&apos;s first
          impression, not just decoration — pair it with a clear bio
          template from the business category above.
        </p>
      </section>

      <TikTokExpertSections />

      <section
        aria-labelledby="faq-heading"
        className="article-content article-faq reveal reveal-delay-4 mb-14"
      >
        <h2 id="faq-heading" className="article-heading">
          Frequently Asked Questions About TikTok Fonts
        </h2>
        <dl className="space-y-6">
          {[...TIKTOK_FAQ, ...TIKTOK_EXPERT_FAQ].map((item) => (
            <div key={item.question} className="faq-item">
              <dt className="mb-2">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-[var(--cream-faint)]">
          More font tools:{" "}
          <Link href="/facebook-stylish-name-generator" className="intro-link">
            Facebook stylish name generator
          </Link>
          {" · "}
          <Link href="/wavy-text-generator" className="intro-link">
            wavy text generator
          </Link>
        </p>
      </section>

      <div className="reveal reveal-delay-5 mt-12">
        <RelatedTools tools={[...TIKTOK_RELATED_TOOLS]} />
      </div>
    </main>
  );
}
