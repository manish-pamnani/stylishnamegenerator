import {
  FONT_BREAK_FIX_ROWS,
  MYTH_REALITY_ROWS,
  PLATFORM_CONSTRAINT_ROWS,
  SOCIAL_CONTEXT_ROWS,
  STYLE_STACK_ELEMENTS,
  UNICODE_REALITY_ROWS,
} from "@/lib/marathiExpertContent";

function ExpertNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="article-note" role="note">
      <strong className="text-[var(--cream)]">Expert note:</strong> {children}
    </p>
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

export function MarathiFontsBreakSection() {
  return (
    <section
      aria-labelledby="marathi-break-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="marathi-break-heading" className="article-heading">
        Why Your Stylish Marathi Fonts Sometimes Look Broken (And the Exact
        Fix)
      </h2>
      <p>
        Every competing article tells you to &ldquo;just copy and paste.&rdquo;
        Almost none document what happens when it fails — the moment users
        search <em>marathi font not showing whatsapp</em> and abandon the page.
        Broken rendering is never random. It traces to a specific device, OS
        version, or platform quirk — and each has an exact fix.
      </p>

      <h3 className="article-subheading">
        WhatsApp Web vs. mobile rendering gap
      </h3>
      <p>
        Decorative border characters like ꧁ ꧂ and ༺ ༻ render correctly on
        WhatsApp mobile but often collapse into empty boxes on{" "}
        <strong>WhatsApp Web</strong> in Windows Chrome. This is specific to
        Chromium&apos;s Devanagari font fallback chain on desktop. The fix: use
        simpler ASCII-adjacent borders — ★, ═, • — for cross-platform safety.
      </p>

      <h3 className="article-subheading">
        Samsung older UI versions (One UI 2.x and below)
      </h3>
      <p>
        Galaxy J-series and M-series phones from 2019–2021 use a stripped Noto
        Sans Devanagari build that drops rare Unicode blocks — Tai Tham (꧁) and
        Tibetan (༺) among them. These devices skew heavily Marathi-speaking,
        making this a real demographic problem, not a theoretical edge case.
      </p>

      <h3 className="article-subheading">
        Instagram&apos;s character encoding strip on bio save
      </h3>
      <p>
        Instagram occasionally strips certain combining Devanagari characters —
        anusvara (ं) and visarga (ः) — when pasted via Android clipboard. The
        workaround: type Devanagari directly into Instagram using Gboard Marathi
        keyboard, then add surrounding decoration from our generator via
        clipboard.
      </p>

      <h3 className="article-subheading">
        WhatsApp group name character limit (25 characters)
      </h3>
      <p>
        Decorated styles with ꧁ ꧂ eat 4 characters before your Marathi text
        even starts. Most users don&apos;t realise the name silently truncates
        instead of throwing an error. Budget decoration against the limit before
        you paste.
      </p>

      <h3 className="article-subheading">
        Font fallback on Windows 11 vs. Windows 10
      </h3>
      <p>
        Windows 11 ships with Noto Sans Devanagari as a system fallback; Windows
        10 uses Mangal. The two render Devanagari at visually different
        weights — the same Unicode string can look bold on one machine and light
        on another.
      </p>

      <h3 className="article-subheading">Decision tree</h3>
      <ol className="decision-tree">
        <li>
          <strong>Font looks broken?</strong> First identify the platform —
          WhatsApp, Instagram, or Facebook.
        </li>
        <li>
          <strong>WhatsApp?</strong> Check mobile vs. Web. Web on Windows →
          switch to ★ or ═ borders. Mobile only → check device age.
        </li>
        <li>
          <strong>Older Samsung (2019–2021)?</strong> Avoid ꧁ ꧂ and ༺ ༻.
          Use ★ Star Frame or ═ Double Line from our generator above.
        </li>
        <li>
          <strong>Instagram bio losing matras?</strong> Type Marathi directly
          with Gboard; paste decoration only.
        </li>
        <li>
          <strong>Group name cut off?</strong> Count decoration chars first —
          ꧁ ꧂ = 4 chars before your text on a 25-char limit.
        </li>
      </ol>

      <ArticleTable caption="Common Marathi font rendering failures and platform-specific fixes.">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Platform / device</th>
            <th>Fix</th>
          </tr>
        </thead>
        <tbody>
          {FONT_BREAK_FIX_ROWS.map((row) => (
            <tr key={row.problem}>
              <td>{row.problem}</td>
              <td>{row.platform}</td>
              <td>{row.fix}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        If a follower reports boxes in your decorated Marathi text, ask which
        phone and app they use — the answer almost always points to one of the
        five fixes above, not a broken generator.
      </ExpertNote>
    </section>
  );
}

export function MarathiUnicodeRealitySection() {
  return (
    <section
      aria-labelledby="marathi-unicode-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="marathi-unicode-heading" className="article-heading">
        Marathi Stylish Fonts Aren&apos;t Fonts — Here&apos;s What They Actually
        Are (And Why It Matters)
      </h2>
      <p>
        The industry calls them &ldquo;fonts&rdquo; because users understand
        that word. The technically accurate term is{" "}
        <strong>Unicode homoglyphs and decorative character sets</strong>.
        Understanding this distinction explains why these styles work, why you
        can&apos;t download them, and why bold Marathi has a hard technical
        ceiling.
      </p>

      <h3 className="article-subheading">
        Mathematical Alphanumeric Symbols (U+1D400–U+1D7FF)
      </h3>
      <p>
        The &ldquo;cursive&rdquo; and &ldquo;bold&rdquo; Latin styles in our
        generator are not font changes. They are entirely separate Unicode
        characters. 𝓜 and M are as different in Unicode as A and B. This is why
        they survive copy-paste across apps that don&apos;t share fonts.
      </p>

      <h3 className="article-subheading">
        Why true Devanagari has no Unicode &ldquo;bold&rdquo; equivalent
      </h3>
      <p>
        The Mathematical Alphanumeric block only covers Latin, Greek, and
        digits. There is no bold Devanagari in Unicode. What looks like
        &ldquo;bold Marathi&rdquo; is either a font rendering trick (which
        breaks on paste), Devanagari with heavier-weight symbols around it, or
        Latin transliteration in bold Unicode like 𝕄𝕣𝕒𝕥𝕙𝕚.
      </p>

      <h3 className="article-subheading">
        Combining characters vs. spacing characters in Devanagari
      </h3>
      <p>
        Matras (vowel signs like ि, ु) are combining characters that attach to
        the preceding consonant. When you wrap Devanagari in some border styles,
        the first matra can visually detach — मराठी may render like म + ◌ + ाठी.
        Simpler frames (★, ═) trigger this less often than dense multi-symbol
        borders.
      </p>

      <h3 className="article-subheading">
        Why styled text can&apos;t be indexed as Marathi by Google
      </h3>
      <p>
        A search engine reading 𝔐𝔞𝔯𝔞𝔱𝔥𝔦 does not read it as &ldquo;Marathi.&rdquo;
        It reads a string of mathematical symbols. Using Latin Unicode styles in
        your Instagram bio reduces discoverability for anyone searching your name
        in plain text — important for influencers optimising their profiles.
      </p>

      <ArticleTable caption="What users call it vs. what it actually is — the technical reality behind stylish Marathi text.">
        <thead>
          <tr>
            <th>What users call it</th>
            <th>What it actually is</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          {UNICODE_REALITY_ROWS.map((row) => (
            <tr key={row.usersCallIt}>
              <td>{row.usersCallIt}</td>
              <td>{row.actuallyIs}</td>
              <td>{row.whyItMatters}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        Stop wondering why you can&apos;t find these fonts to download — the
        architectural reason is that they were never fonts. The generator output
        is the finished product.
      </ExpertNote>
    </section>
  );
}

export function MarathiSocialContextSection() {
  return (
    <section
      aria-labelledby="marathi-context-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="marathi-context-heading" className="article-heading">
        When Stylish Marathi Fonts Are Inappropriate — Platform Context and
        Social Signals
      </h2>
      <p>
        Someone searching &ldquo;stylish Marathi fonts for WhatsApp&rdquo; may
        be setting a group name for a condolence thread, a puja notification
        group, or a professional office chat. Context-aware styling is a real
        skill — not just &ldquo;can I use this&rdquo; but &ldquo;should I use
        this here.&rdquo;
      </p>

      <h3 className="article-subheading">
        Religious and devotional contexts
      </h3>
      <p>
        Using ꫝ (Cham script) or ༒ (Tibetan double vajra) around devotional
        Marathi like <span lang="mr">श्री गणेशाय नमः</span> is visually
        incongruent and can read as disrespectful in traditional Maharashtrian
        households. The OM symbol ॐ and ☬ (Khanda) carry specific religious
        weight — using them as generic decoration signals unfamiliarity with
        their meaning.
      </p>

      <h3 className="article-subheading">
        Professional and government contexts
      </h3>
      <p>
        Marathi is an official language used in formal documentation. Stylised
        fonts in government office groups or bank staff WhatsApp chats read as
        unprofessional. Simple star frames (★) are acceptable for semi-formal
        use; fire emojis and shade borders (░▒▓) are not.
      </p>

      <h3 className="article-subheading">
        Obituary and condolence messages
      </h3>
      <p>
        A surprisingly common WhatsApp use case in Marathi-speaking communities.
        Floral frames (🌸, 💐) or sparkle wraps are entirely wrong in this
        context. Fire emojis are catastrophically inappropriate. Plain respectful
        Devanagari is the only appropriate choice.
      </p>

      <h3 className="article-subheading">
        Regional identity and school group norms
      </h3>
      <p>
        Marathi cultural identity is politically charged in Maharashtra. Borrowed
        script decorations (Tibetan ༺, Tai Tham ꧁) around Marathi text can
        draw criticism from language purists — particularly for public figures.
        In school WhatsApp groups, heavy decoration on teacher or admin
        accounts reads poorly.
      </p>

      <ArticleTable caption="Context-aware styling — when to decorate Marathi text and when to keep it plain.">
        <thead>
          <tr>
            <th>Context</th>
            <th>Recommended level</th>
            <th>Styles to avoid</th>
            <th>Safer alternatives</th>
          </tr>
        </thead>
        <tbody>
          {SOCIAL_CONTEXT_ROWS.map((row) => (
            <tr key={row.context}>
              <td>{row.context}</td>
              <td>{row.recommended}</td>
              <td>{row.avoid}</td>
              <td>{row.safer}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ExpertNote>
        A trusted advisor shares judgment frameworks, not just copy buttons.
        When in doubt — condolence, puja, government, school — choose plain
        Marathi over decoration.
      </ExpertNote>
    </section>
  );
}

export function MarathiMythsSection() {
  return (
    <section
      aria-labelledby="marathi-myths-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="marathi-myths-heading" className="article-heading">
        5 Myths About Stylish Marathi Fonts That Most People Believe (But
        Shouldn&apos;t)
      </h2>
      <p>
        Myth-busting requires confidence in the subject and willingness to
        contradict popular belief. These are the contradictions we see most often
        in Marathi Unicode workflows — and what hands-on testing actually shows.
      </p>

      <ArticleTable caption="Myth vs. reality — sourced from cross-device Marathi rendering tests.">
        <thead>
          <tr>
            <th>Myth</th>
            <th>Reality</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          {MYTH_REALITY_ROWS.map((row) => (
            <tr key={row.myth}>
              <td>
                <span className="myth-label">Myth</span> {row.myth}
              </td>
              <td>
                <span className="reality-label">Reality</span> {row.reality}
              </td>
              <td>{row.why}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>
    </section>
  );
}

export function MarathiBrandVoiceSection() {
  return (
    <section
      aria-labelledby="marathi-brand-heading"
      className="article-content reveal reveal-delay-4 mb-14"
    >
      <h2 id="marathi-brand-heading" className="article-heading">
        Advanced — Creating a Cross-Platform Marathi Style System (For Content
        Creators and Page Admins)
      </h2>
      <p>
        Competing pages are built for single-use copy-paste. This section is for
        repeat users managing a Marathi presence at scale — influencers, small
        businesses, and cultural organisations who need consistent visual identity
        across WhatsApp, Instagram, and Facebook.
      </p>

      <h3 className="article-subheading">
        The 3-Element Marathi Style Stack
      </h3>
      <p>
        Serious Marathi creators pick one primary frame, one secondary accent,
        and one Latin Unicode style for romanised names — then apply them
        consistently across every platform. This is what Marathi influencers with
        100k+ followers do intuitively but rarely document.
      </p>

      <div
        className="bio-framework"
        role="img"
        aria-label="Three-element Marathi style stack framework"
      >
        {STYLE_STACK_ELEMENTS.map((item, index) => (
          <div key={item.element} className="bio-framework__row">
            <span className="bio-framework__step">{index + 1}</span>
            <div>
              <p className="bio-framework__label">{item.element}</p>
              <p className="converted-name bio-framework__example">
                {item.example}
              </p>
              <p className="bio-framework__meta">
                <strong>Role:</strong> {item.role} · {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="article-subheading">
        Platform-specific style depth limits
      </h3>
      <p>
        Build your style system around the most constrained platform — WhatsApp
        display name at 25 characters — and expand outward. Each platform
        requires a different truncation strategy.
      </p>

      <ArticleTable caption="Platform character limits — build your Marathi style system from the tightest constraint outward.">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Character limit</th>
            <th>Truncation strategy</th>
          </tr>
        </thead>
        <tbody>
          {PLATFORM_CONSTRAINT_ROWS.map((row) => (
            <tr key={row.platform}>
              <td>{row.platform}</td>
              <td>{row.limit}</td>
              <td>{row.strategy}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <h3 className="article-subheading">
        Dark mode vs. light mode consistency
      </h3>
      <p>
        On dark-mode WhatsApp, high-contrast symbols (★, ━, ═) appear differently
        than on light mode. Emoji-heavy styles (🔥, 🌸) are perceptually stable
        across modes. Symbol-only shade borders (░▒▓) invert visually on dark
        backgrounds and can look muddy — avoid them if visual consistency across
        modes matters to your brand.
      </p>

      <h3 className="article-subheading">Version-controlling your style choices</h3>
      <p>
        When you change a WhatsApp group name or Instagram bio, the old style is
        gone. Keep a private notes document in Google Keep or WhatsApp Saved
        Messages with your exact decorated strings. This avoids re-generating
        styles repeatedly and ensures consistency across seasonal updates —
        Diwali status → regular status → Gudi Padwa status.
      </p>

      <h3 className="article-subheading">
        Accessibility for Marathi audiences
      </h3>
      <p>
        Older users and those with lower visual acuity — a significant portion
        of Maharashtra&apos;s Marathi WhatsApp user base — find heavily decorated
        text harder to read. A responsible creator maintains a clean version of
        their name or status alongside the decorated one for
        accessibility-forward contexts.
      </p>

      <ExpertNote>
        Shift from one-time copy-paste to deliberate platform-aware strategy.
        The 3-Element Style Stack is what earns bookmarks and return visits —
        not another border variation.
      </ExpertNote>
    </section>
  );
}
