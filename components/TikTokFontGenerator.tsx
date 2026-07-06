"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  TIKTOK_BIO_LIMIT,
  TIKTOK_USERNAME_LIMIT,
  generateTiktokAll,
  type TikTokStyleResult,
} from "@/lib/fontStyles";

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
}: {
  style: TikTokStyleResult;
  index: number;
}) {
  const fullCompat = style.tiktokCompat === "full";

  return (
    <article
      className="style-card flex flex-col gap-3 rounded-xl p-4 sm:p-5"
      style={{ animationDelay: `${Math.min(index * 0.04, 0.6)}s` }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="style-label">{style.name}</span>
        <span
          className={`style-compat-badge ${fullCompat ? "style-compat-badge--ok" : "style-compat-badge--warn"}`}
        >
          {fullCompat ? "✅ Works in bio and username" : "⚠️ Works in bio only"}
        </span>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="converted-name min-w-0">{style.text}</p>
        <CopyButton text={style.text} />
      </div>
    </article>
  );
}

export default function TikTokFontGenerator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<TikTokStyleResult[]>(() =>
    generateTiktokAll(""),
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runGenerate = useCallback((value: string) => {
    setResults(generateTiktokAll(value));
  }, []);

  const handleInput = (value: string) => {
    const trimmed = value.slice(0, TIKTOK_BIO_LIMIT);
    setInput(trimmed);
    runGenerate(trimmed);
  };

  const inputLength = [...input].length;
  const overUsernameLimit = inputLength > TIKTOK_USERNAME_LIMIT;

  return (
    <section
      className="tool-section w-full"
      aria-label="TikTok font maker"
    >
      <p className="tool-instruction mb-4 text-sm leading-relaxed">
        Type your text below to generate stylish TikTok fonts. Tap Copy on any
        style, then paste it into your TikTok or Instagram Reels bio,
        username, or comments.
      </p>

      <div className="mb-3 flex flex-col gap-3 sm:flex-row">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Type your TikTok bio..."
          maxLength={TIKTOK_BIO_LIMIT}
          className="name-input min-h-12 flex-1 rounded-xl px-4 text-base"
          aria-label="Enter your TikTok bio text"
        />
        <button
          type="button"
          onClick={() => runGenerate(input)}
          className="generate-btn min-h-12 rounded-xl px-8 text-sm font-semibold transition-all active:scale-95 sm:shrink-0"
        >
          Generate
        </button>
      </div>

      <div
        className={`char-counter ${inputLength > TIKTOK_BIO_LIMIT ? "char-counter--warn" : ""}`}
        aria-live="polite"
      >
        {inputLength} / {TIKTOK_BIO_LIMIT} characters (TikTok bio)
      </div>
      <p
        className={`char-counter char-counter__note mt-1 ${overUsernameLimit ? "char-counter--warn" : ""}`}
        aria-live="polite"
      >
        TikTok usernames: max {TIKTOK_USERNAME_LIMIT} characters
      </p>

      <div className="results-grid mt-6 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
        {results.map((style, index) => (
          <StyleCard key={style.id} style={style} index={index} />
        ))}
      </div>
    </section>
  );
}
