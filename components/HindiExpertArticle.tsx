import Image from "next/image";
import {
  CHAR_COST_ROWS,
  HINDI_PLATFORM_LIMITS,
  HINDI_STYLE_STEPS,
  RENDER_SAFETY_ROWS,
  SECTION_AB_ROWS,
} from "@/lib/hindiExpertContent";

function ExpertNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="article-note" role="note">
      <strong className="text-[var(--cream)]">Expert note:</strong> {children}
    </p>
  );
}

/** Mono code chip — for plain ASCII literals only (e.g. \n, .xls, Rahul). */
function Code({ children }: { children: React.ReactNode }) {
  return <code className="article-inline-code">{children}</code>;
}

/**
 * Inline highlight for symbol / emoji / Devanagari / math-letter examples.
 * These glyphs overflow the cramped code chip, so this token has no clipping
 * background and renders the glyph cleanly inline.
 */
function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <span className="glyph-token" lang="hi">
      {children}
    </span>
  );
}

function Ext({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="article-link"
    >
      {children}
    </a>
  );
}

function ArticleTable({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6">
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="article-table min-w-full border-collapse text-sm">
          {children}
        </table>
      </div>
      <figcaption className="mt-2 text-xs text-[var(--cream-faint)]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function HindiRenderingSection() {
  return (
    <section
      aria-labelledby="hindi-rendering-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="hindi-rendering-heading" className="article-heading">
        Hindi Font Rendering: What Actually Breaks and Why
      </h2>
      <p>
        Most font pages claim their styles &ldquo;work on all devices.&rdquo;
        That is not true, and pretending otherwise just leaves you searching{" "}
        <em>why does my Hindi font look weird on iPhone</em> after the fact.
        Devanagari rendering depends on the system font shaping engine — and the
        same Unicode string genuinely looks different across iOS, Android, and
        WhatsApp. Here is exactly what breaks, and which styles to pick for
        maximum compatibility.
      </p>

      <h3 className="article-subheading">
        The Noto Sans Devanagari problem on older iOS
      </h3>
      <p>
        Apple&apos;s system font before iOS 15 had incomplete glyph coverage for
        certain Devanagari combining characters (matras). When border symbols
        like <Glyph>꧁ ꧂</Glyph> sit next to Devanagari, the shaping engine
        sometimes collapses the matra onto the wrong base character. Patterns
        like <Glyph>𓆩 राहुल 𓆪</Glyph> are especially vulnerable because Egyptian
        Hieroglyph codepoints sit outside the Basic Multilingual Plane and older
        iOS CoreText does not reflow correctly around them.
      </p>

      <h3 className="article-subheading">
        Android&apos;s Roboto vs. Noto Sans split
      </h3>
      <p>
        Android 11 and earlier defaulted Devanagari rendering to Roboto, which
        had narrower Devanagari support. Android 12+ switched to Noto Sans
        Devanagari by default. A user on an un-updated Samsung still running
        Android 11 with the stock font sees visibly different output than a Pixel
        on Android 13 — even with identical Unicode.
      </p>

      <h3 className="article-subheading">
        WhatsApp&apos;s renderer is NOT the OS renderer
      </h3>
      <p>
        WhatsApp uses its own text pipeline (built on libharfbuzz), not your
        phone&apos;s. So a pattern that renders perfectly in your notes app can
        misalign inside WhatsApp — particularly multi-line statuses where{" "}
        <Code>\n</Code> line breaks interact with bidi override marks adjacent to
        Devanagari. Always test in <strong>Saved Messages</strong> before posting
        a status.
      </p>

      <h3 className="article-subheading">The safe-pattern shortlist</h3>
      <p>
        Based on cross-device testing, patterns using only Basic Multilingual
        Plane symbols (<Glyph>★ ♛ ✦ ❤️ 🔥</Glyph>) are universally safe. Patterns
        using Supplementary Multilingual Plane characters (<Glyph>𓆩 𓆪</Glyph>,
        Hieroglyphs) are high-risk on older devices. When a decorated Devanagari
        border breaks, fall back to the Latin fancy font section (type your name
        in English) for cross-device reliability.
      </p>

      <figure className="article-figure">
        <Image
          src="/hindi-stylish-font-whatsapp-status-rendered.jpg"
          alt="Decorated Hindi stylish font status — ꧁ अपने अंदाज़ में जीते हैं ꧂ — rendering cleanly inside a real WhatsApp chat."
          width={1024}
          height={806}
          sizes="(max-width: 768px) 100vw, 672px"
          className="article-figure__img h-auto w-full"
        />
        <figcaption className="article-figure__caption">
          The same decorated status sent in a live WhatsApp chat — Basic
          Multilingual Plane borders like ꧁ ꧂ display correctly on the WhatsApp
          mobile app.
        </figcaption>
      </figure>

      <ArticleTable caption="Which border patterns render reliably across iOS 14+, Android 10+, and WhatsApp — based on hands-on cross-device testing.">
        <thead>
          <tr>
            <th>Pattern</th>
            <th>iOS 14 safe?</th>
            <th>Android 10 safe?</th>
            <th>WhatsApp safe?</th>
          </tr>
        </thead>
        <tbody>
          {RENDER_SAFETY_ROWS.map((row) => (
            <tr key={row.pattern}>
              <td>{row.pattern}</td>
              <td>{row.ios14}</td>
              <td>{row.android10}</td>
              <td>{row.whatsapp}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        The tool isn&apos;t broken — your phone is rendering it differently. If a
        follower reports boxes, ask which phone and app they use: the fix is
        almost always switching from a Supplementary-Plane border to a plain BMP
        symbol like <Glyph>★</Glyph> or <Glyph>✦</Glyph>.
      </ExpertNote>
    </section>
  );
}

export function HindiCharacterCountSection() {
  return (
    <section
      aria-labelledby="hindi-charcount-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="hindi-charcount-heading" className="article-heading">
        Hindi Bio Character Count: How Borders and Emojis Actually Get Counted
      </h2>
      <p>
        &ldquo;Keep your bio under 150 characters&rdquo; is common advice that
        never explains the mechanism — and the mechanism is where the real value
        is. Instagram, WhatsApp, and Twitter/X each count Unicode differently,
        and the rules are genuinely counterintuitive. Understanding them stops
        your bio from getting silently truncated.
      </p>

      <h3 className="article-subheading">
        Instagram counts in UTF-16 code units, not glyphs
      </h3>
      <p>
        <Ext href="https://replug.io/blog/instagram-bio-character-limit">
          Instagram&apos;s 150-character bio limit
        </Ext>{" "}
        counts display characters, but emojis count as 2 because they are
        surrogate pairs in UTF-16. So{" "}
        <Glyph>🔥 शेर अकेला ही काफ़ी है 🔥</Glyph> may <em>look</em> like 22
        characters but counts as 24. A bio with 5 emojis effectively has a
        140-character text budget.
      </p>

      <h3 className="article-subheading">
        Combining characters and NFC vs. NFD
      </h3>
      <p>
        A Devanagari character with a matra (for example <Glyph>की</Glyph>) is
        one glyph but can be 2 codepoints depending on{" "}
        <Ext href="https://unicode.org/reports/tr15/">NFC</Ext> (composed) vs.{" "}
        <Ext href="https://unicode.org/reports/tr15/">NFD</Ext> (decomposed)
        normalization. Instagram normalises to NFC, so this usually counts as 1 —
        but WhatsApp Business sometimes does not, causing truncation
        discrepancies between platforms.
      </p>

      <h3 className="article-subheading">Cheap borders vs. expensive borders</h3>
      <p>
        The <Glyph>꧁ ꧂</Glyph> brackets are 3-byte UTF-8 but only 1 UTF-16 code
        unit — they are &ldquo;cheap&rdquo; in Instagram terms. Hieroglyphic
        borders (<Glyph>𓆩 𓆪</Glyph>) are 4-byte UTF-8 and 2 UTF-16 code units, so
        they are &ldquo;expensive&rdquo; and eat 2 characters each from your
        limit. WhatsApp status, by contrast, allows 700 characters — but anything
        beyond ~5 lines is hard to read on mobile, so the real limit there is
        visual, not technical.
      </p>

      <ArticleTable caption="How each symbol type is counted against a UTF-16 character limit like Instagram's 150-char bio.">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>UTF-16 units</th>
            <th>Cost to your bio limit</th>
          </tr>
        </thead>
        <tbody>
          {CHAR_COST_ROWS.map((row) => (
            <tr key={row.symbol}>
              <td>{row.symbol}</td>
              <td>{row.utf16}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        Count visible characters in the Instagram app&apos;s own edit field — it
        shows a live counter — not in Notepad or a generator. The limit isn&apos;t
        about Hindi text specifically; it is about how border symbols are counted,
        so choose cheaper BMP borders to fit more content.
      </ExpertNote>
    </section>
  );
}

export function HindiAccessibilitySection() {
  return (
    <section
      aria-labelledby="hindi-accessibility-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="hindi-accessibility-heading" className="article-heading">
        Accessibility Reality: Who Cannot Read Your Stylish Hindi Text (And When
        to Care)
      </h2>
      <p>
        No competitor in this niche discusses accessibility — it is uncomfortable
        to acknowledge a product limitation. But this matters, and the honest
        answer is nuanced: stylish text is fine for personal creative use and a
        liability for public, professional, or searchable contexts.
      </p>

      <h3 className="article-subheading">
        Screen readers and fancy Latin styles
      </h3>
      <p>
        Fancy Latin styles use the Unicode Mathematical Alphanumeric Symbols
        block. NVDA reads <Glyph>𝓡𝓪𝓱𝓾𝓵</Glyph> as &ldquo;mathematical bold script
        capital R, mathematical bold script lowercase a…&rdquo; — completely
        unusable for someone on a screen reader. That matters for public
        communication (professional WhatsApp groups, business Instagram accounts)
        but not for a personal status update.
      </p>

      <h3 className="article-subheading">
        Decorated Devanagari is usually read correctly
      </h3>
      <p>
        Because Section A only adds prefix/suffix symbols around unchanged base
        codepoints, <Glyph>꧁ राहुल ꧂</Glyph> is read as &ldquo;[unknown symbol]
        राहुल [unknown symbol]&rdquo; — mostly fine. Social platform search is a
        different story: Instagram&apos;s search and hashtag system does not index{" "}
        <Glyph>𝓡𝓪𝓱𝓾𝓵</Glyph> the same as &ldquo;Rahul,&rdquo; so a fancy-font name
        makes you harder to find.
      </p>

      <h3 className="article-subheading">Which section should you use?</h3>
      <ol className="decision-tree">
        <li>
          <strong>Business or professional context?</strong> Use plain
          Devanagari with only emoji borders — universally rendered and
          screen-reader-tolerable (Section A).
        </li>
        <li>
          <strong>Need to be found in search?</strong> Avoid fancy Latin
          (Section B) in your name — it is invisible to Instagram search. Keep
          your real name plain.
        </li>
        <li>
          <strong>Personal creative bio or status?</strong> Full stylish freedom
          — fancy Latin (Section B) is fine here.
        </li>
      </ol>

      <ExpertNote>
        Counter-intuitively, decorated Devanagari (Section A) is{" "}
        <em>more</em> accessible than fancy Latin (Section B), because it
        preserves the original codepoints. For business use it is the better
        choice — not just the more cultural one.
      </ExpertNote>
    </section>
  );
}

export function HindiIdentitySystemSection() {
  return (
    <section
      aria-labelledby="hindi-identity-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="hindi-identity-heading" className="article-heading">
        Creating a Consistent Hindi Digital Identity Across Platforms
      </h2>
      <p>
        Every competing tool treats each use case as isolated. Power users on
        three or more Hindi-first platforms think in <em>systems</em> instead — a
        coherent, recognisable visual identity across WhatsApp, Instagram,
        Sharechat, and Josh at once. Here is how to build one.
      </p>

      <h3 className="article-subheading">The anchor-style concept</h3>
      <p>
        Pick one border pattern as your signature (for example{" "}
        <Glyph>꧁ [Name] ꧂</Glyph>) and use it consistently as your display-name
        anchor everywhere. This creates visual recognition before anyone even
        reads your name — it works like a personal brand logo, which is exactly
        what Hindi creator communities do instinctively.
      </p>

      <div
        className="bio-framework"
        role="img"
        aria-label="Three-step Hindi identity system framework"
      >
        {HINDI_STYLE_STEPS.map((item, index) => (
          <div key={item.element} className="bio-framework__row">
            <span className="bio-framework__step">{index + 1}</span>
            <div>
              <p className="bio-framework__label">{item.element}</p>
              <p className="converted-name bio-framework__example" lang="hi">
                {item.example}
              </p>
              <p className="bio-framework__meta">
                <strong>{item.role}:</strong> {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="article-subheading">Platform constraints that shape your system</h3>
      <p>
        Build your style system around the most constrained field —{" "}
        <Ext href="https://typecount.com/blog/whatsapp-character-limit">
          WhatsApp&apos;s 25-character display name
        </Ext>{" "}
        and Josh&apos;s 100-character bio — then expand outward. Sharechat renders
        Devanagari on its own servers consistently, making it the safest place
        for experimental patterns.
      </p>

      <ArticleTable caption="Side-by-side platform limits — build your Hindi identity from the tightest constraint outward.">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Limits</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {HINDI_PLATFORM_LIMITS.map((row) => (
            <tr key={row.platform}>
              <td>{row.platform}</td>
              <td>{row.limit}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        Don&apos;t copy a WhatsApp status straight into an Instagram bio —{" "}
        <Code>\n</Code> line breaks that look great in a status collapse
        differently in Instagram&apos;s bio field. Re-paste and re-check after
        every cross-platform move. On Sharechat specifically, Devanagari-decorated
        names beat Latin fancy fonts because the audience is almost exclusively
        Hindi-first.
      </ExpertNote>
    </section>
  );
}

export function HindiNormalizationSection() {
  return (
    <section
      aria-labelledby="hindi-normalization-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="hindi-normalization-heading" className="article-heading">
        Advanced: When Hindi Stylish Text Breaks Outside Social Media
      </h2>
      <p className="text-sm text-[var(--cream-faint)]">
        For developers, content managers, and power users.
      </p>
      <p>
        Social bios are forgiving. CMS fields, databases, meta titles, and APIs
        are not. The single most useful distinction: Section A output (decorated
        Devanagari) is structurally honest Unicode that travels cleanly through
        any system, while Section B output (fancy Latin) is display-only and
        semantically meaningless to machines.
      </p>

      <h3 className="article-subheading">
        NFC vs. NFD normalization
      </h3>
      <p>
        Most CMS platforms (WordPress, Webflow, Notion) normalise to NFC on save,
        and Devanagari in NFC is stable. But fancy Latin Unicode from the
        Mathematical Alphanumeric block is NFKC/NFKD-equivalent to plain ASCII —
        so aggressive normalisers (some Elasticsearch configs, certain Django
        validators) will flatten <Glyph>𝓡𝓪𝓱𝓾𝓵</Glyph> back to <Code>Rahul</Code>{" "}
        on write. The field appears to accept it, but the formatting is gone on
        reload.
      </p>

      <h3 className="article-subheading">
        Meta titles vs. H1 headings
      </h3>
      <p>
        Crawlers index raw Unicode codepoints. An emoji like <Glyph>🌟</Glyph> in
        a meta title is supported and widely used. But Mathematical Unicode
        letters in a meta title can trip Google&apos;s quality filters because
        they resemble{" "}
        <Ext href="https://developers.google.com/search/docs/essentials/spam-policies">
          ASCII manipulation
        </Ext>{" "}
        — a known spam technique. Emojis in meta titles are safe; fancy Latin font
        characters carry mild risk. (This page&apos;s own meta title uses an emoji
        correctly and avoids fancy Latin there.)
      </p>

      <h3 className="article-subheading">
        Excel, Sheets, and the WhatsApp Business API
      </h3>
      <p>
        Non-BMP characters (4-byte UTF-8 like <Glyph>𓆩</Glyph>) can corrupt in
        Excel on Windows if saved as legacy <Code>.xls</Code> rather than{" "}
        <Code>.xlsx</Code>; Google Sheets handles all Unicode correctly. And on
        the WhatsApp Business API, templates containing fancy Unicode
        Mathematical letters are frequently rejected as obfuscated content, while
        decorated Devanagari passes template review routinely.
      </p>

      <ArticleTable caption="When to use Section A (decorated Devanagari) vs Section B (fancy Latin) across machine-readable contexts.">
        <thead>
          <tr>
            <th>Context</th>
            <th>Section A — Devanagari</th>
            <th>Section B — fancy Latin</th>
          </tr>
        </thead>
        <tbody>
          {SECTION_AB_ROWS.map((row) => (
            <tr key={row.context}>
              <td>{row.context}</td>
              <td>{row.sectionA}</td>
              <td>{row.sectionB}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        Fancy Latin Unicode is display-only — safe for social bios and chat
        statuses, never for structured data, form inputs meant for processing, or
        API payloads. Decorated Devanagari is the structurally honest choice for
        CMS fields, databases, and meta titles. This distinction changes{" "}
        <em>where</em> you use each section of the tool.
      </ExpertNote>
    </section>
  );
}
