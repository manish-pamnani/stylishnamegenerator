import Link from "next/link";
import {
  WAVE_FIELD_TEST,
  WAVE_MYTHS,
  WAVE_NORMALIZATION_TIERS,
  WAVE_PLATFORM_RENDERING,
  type WaveFieldStatus,
} from "@/lib/wavyPageData";

const VERDICT_CLASS: Record<string, string> = {
  "Fully False": "verdict-badge--busted",
  "Partially True": "verdict-badge--partial",
  "Context-Dependent": "verdict-badge--context",
};

const STATUS_META: Record<WaveFieldStatus, { label: string; cls: string }> = {
  pass: { label: "Works", cls: "wave-status--pass" },
  partial: { label: "Partial", cls: "wave-status--partial" },
  fail: { label: "Fails", cls: "wave-status--fail" },
};

function StatusCell({ status }: { status: WaveFieldStatus }) {
  const meta = STATUS_META[status];
  return <span className={`wave-status ${meta.cls}`}>{meta.label}</span>;
}

export function WaveRenderingSection() {
  return (
    <section aria-labelledby="rendering-heading">
      <h2 id="rendering-heading" className="article-heading">
        Why Your Wavy Text Looks Different on Their Screen (Platform-by-Platform
        Rendering Truth)
      </h2>
      <p>
        Most wavy text tools treat Unicode combining characters as if they look
        identical everywhere. They do not. The <em>same</em> wavy string can
        render elegantly on one phone and cramped, overlapping, or completely
        broken on another — because the receiving app, not the generator,
        decides how those marks are drawn.
      </p>
      <p>
        <strong>Android vs iOS.</strong> Android falls back to Noto Sans (or an
        OEM font); iOS uses San Francisco. They stack diacritics at different
        heights and spacing, so a Classic Wave that looks clean on an iPhone can
        look cramped on a mid-range Android — Samsung One UI is especially
        inconsistent.
      </p>
      <p>
        <strong>WhatsApp normalization.</strong> WhatsApp on iOS runs Unicode
        NFC normalization before display, which collapses certain combining
        sequences. Double Wave (U+0360) is the most vulnerable — it can strip to
        a single mark on the receiver&apos;s end even though your preview showed
        two.
      </p>
      <p>
        <strong>Instagram bio vs caption.</strong> The bio field and caption
        field use different internal renderers. Styles that look clean in a bio
        often clip vertically in captions because caption line-height is
        tighter.
      </p>
      <p>
        <strong>BGMI&apos;s engine font.</strong> BGMI draws player names through
        its own game-engine font, not the system font, so combining characters
        that display fine in your keyboard preview can render as plain letters or
        placeholder boxes in the actual kill feed.
      </p>
      <p>
        <strong>Clipboard stripping.</strong> Some Android keyboards and
        clipboard managers (Gboard has done this in specific builds) silently
        drop combining characters when you paste into certain fields. You paste,
        see plain text, and blame the generator — but the issue is the clipboard
        layer.
      </p>
      <div className="article-table-wrap overflow-x-auto">
        <table className="article-table">
          <thead>
            <tr>
              <th scope="col">Platform</th>
              <th scope="col">Renders combining chars?</th>
              <th scope="col">Known issues</th>
              <th scope="col">Recommended safe styles</th>
            </tr>
          </thead>
          <tbody>
            {WAVE_PLATFORM_RENDERING.map((row) => (
              <tr key={row.platform}>
                <td>{row.platform}</td>
                <td>{row.renders}</td>
                <td>{row.issues}</td>
                <td>{row.safeStyles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="article-table-footnote">
        The takeaway: your wavy text looked perfect when you copied it — the
        problem is rarely the generator, it&apos;s where and how the text lands.
      </p>
    </section>
  );
}

export function WaveNormalizationSection() {
  return (
    <section aria-labelledby="normalization-heading">
      <h2 id="normalization-heading" className="article-heading">
        Unicode Normalization: The Hidden Process That Silently Breaks Wavy Text
      </h2>
      <p>
        Normalization is the single most misunderstood reason wavy text
        &quot;works sometimes but not always.&quot; Unicode defines four
        normalization forms — NFC, NFD, NFKC, NFKD — and several platforms run
        one of them on your text before storing or displaying it. That process
        can rewrite your combining characters without warning.
      </p>
      <aside className="expert-note" role="note">
        <p className="expert-note__label">What normalization does</p>
        <p>
          <strong>NFC</strong> composes a base letter plus a combining mark into
          a single precomposed character where one exists — &quot;e&quot; +
          combining tilde (U+0303) may collapse into ẽ (U+1EBD). That is
          technically correct, but it erases the stacked multi-mark effect if a
          style relies on several marks per letter.
        </p>
        <p>
          <strong>NFKC</strong> is the real killer. It is compatibility
          decomposition plus composition — it strips combining characters with
          no canonical precomposed equivalent and maps them back to the base
          letter. Names pasted into registration forms or bio fields backed by an
          NFKC database can lose every mark silently, leaving plain text.
        </p>
      </aside>
      <p>
        <strong>Which platforms normalize:</strong> Notion, Slack, and Google
        Docs normalize to NFC on paste. Discord does <em>not</em> normalize,
        which is exactly why it is one of the most reliable surfaces for heavy
        combining-character text.
      </p>
      <p>
        <strong>The NFC-safe design principle:</strong> styles built from
        combining characters with <em>no</em> precomposed equivalent are
        NFC-stable — there is nothing to collapse them into. Ring Wave (U+0366,
        U+035A) is more NFC-stable than Classic Wave (U+0303) for this reason, a
        distinction no generator article explains. To test a style before
        committing, paste it into a Notion page, delete it, then re-copy from
        Notion — if it survives intact, it is NFC-stable for most professional
        surfaces.
      </p>
      <div className="article-table-wrap overflow-x-auto">
        <table className="article-table">
          <thead>
            <tr>
              <th scope="col">Use case</th>
              <th scope="col">Normalization risk</th>
              <th scope="col">Recommended style tier</th>
            </tr>
          </thead>
          <tbody>
            {WAVE_NORMALIZATION_TIERS.map((row) => (
              <tr key={row.useCase}>
                <td>{row.useCase}</td>
                <td>{row.risk}</td>
                <td>{row.tier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The practical lesson: the style you choose is not only aesthetic. Some
        styles are structurally more durable than others depending on where you
        use them.
      </p>
    </section>
  );
}

export function WaveMythsSection() {
  return (
    <section aria-labelledby="myths-heading">
      <h2 id="myths-heading" className="article-heading">
        Wavy Text Myths vs Reality: What Most Guides Get Wrong
      </h2>
      <p>
        Most wavy text articles are written to validate the tool, not to
        interrogate it. Here is an honest assessment — including the downsides —
        of what the wavy text space repeats that simply is not true.
      </p>
      <div className="article-table-wrap overflow-x-auto">
        <table className="article-table">
          <thead>
            <tr>
              <th scope="col">Myth</th>
              <th scope="col">Reality</th>
              <th scope="col">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {WAVE_MYTHS.map((row) => (
              <tr key={row.myth}>
                <td>{row.myth}</td>
                <td>{row.reality}</td>
                <td>
                  <span
                    className={`verdict-badge ${VERDICT_CLASS[row.verdict] ?? ""}`}
                  >
                    {row.verdict}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="article-table-footnote">
        If you take one thing from this section: stop trusting the preview. Test
        in the actual destination before committing a style to your bio or game
        name.
      </p>
    </section>
  );
}

export function WaveFieldTestSection() {
  return (
    <section aria-labelledby="field-test-heading">
      <h2 id="field-test-heading" className="article-heading">
        Tested and Logged: Which Wavy Styles Actually Survive in Real App Fields
        (2026)
      </h2>
      <p>
        &quot;It works&quot; is meaningless without a definition. For this log, a
        style <strong>works</strong> when the marks render visibly, the name
        saves without error, the effect is visible to <em>other</em> users (not
        just you), and the text survives a copy-and-re-paste round trip.
      </p>
      <p>
        <strong>BGMI:</strong> Classic Wave (U+0303) passes the name validator;
        Double Wave (U+0360) is inconsistently stripped by device; Chaos Wave
        usually fails because the byte count of a combining-heavy string exceeds
        BGMI&apos;s byte ceiling even when the visible character count looks
        within limits. <strong>Instagram:</strong> bio, caption, story overlay,
        and DM are different components — DMs are the most combining-friendly,
        story overlays the least (they render through a canvas layer, not native
        text). <strong>Discord</strong> preserves heavy stacks reliably through
        its own text pipeline, making usernames and server nicknames a primary
        use case. <strong>Google account display names</strong> strip combining
        characters on save and normalize to plain text.
      </p>
      <div className="article-table-wrap overflow-x-auto">
        <table className="article-table">
          <thead>
            <tr>
              <th scope="col">Style</th>
              <th scope="col">Instagram bio</th>
              <th scope="col">WhatsApp</th>
              <th scope="col">BGMI</th>
              <th scope="col">Discord</th>
              <th scope="col">Twitter/X</th>
              <th scope="col">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {WAVE_FIELD_TEST.map((row) => (
              <tr key={row.style}>
                <td>{row.style}</td>
                <td>
                  <StatusCell status={row.instagram} />
                </td>
                <td>
                  <StatusCell status={row.whatsapp} />
                </td>
                <td>
                  <StatusCell status={row.bgmi} />
                </td>
                <td>
                  <StatusCell status={row.discord} />
                </td>
                <td>
                  <StatusCell status={row.twitter} />
                </td>
                <td>{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="article-table-footnote">
        Use this as a reference before choosing a style — there is a best wave
        for each platform, not one wave that fits all. For platform-specific
        name limits, see the{" "}
        <Link href="/bgmi-name-generator" className="article-link">
          BGMI name generator
        </Link>{" "}
        and{" "}
        <Link href="/free-fire-name-generator" className="article-link">
          Free Fire name generator
        </Link>
        .
      </p>
    </section>
  );
}

export function WaveDeveloperSection() {
  return (
    <section aria-labelledby="developer-heading">
      <h2 id="developer-heading" className="article-heading">
        Advanced: Designing Your Own Wave Pattern with Unicode Combining
        Characters (Developer Reference)
      </h2>
      <p>
        Want to build or customize a wave generator yourself? The whole effect
        comes down to combining-character categories, render order, and which
        ranges are safe from normalization. Here is the implementation-depth
        version no tool page bothers to write.
      </p>
      <p>
        <strong>The three combining tiers.</strong> Every combining character
        belongs to one of 256 combining classes. Class 230 (above) and class 220
        (below) are the most useful for wave design. Within one character
        position, marks render in combining-class order — lower class numbers sit
        closer to the base letter. Knowing this lets you design stacks that
        render predictably instead of piling marks and hoping.
      </p>
      <p>
        <strong>The safe-zone ranges.</strong>{" "}
        <code className="article-inline-code">U+0300–U+036F</code> (Combining
        Diacritical Marks) is the safest — maximum font support, minimum
        normalization risk for marks without precomposed equivalents.{" "}
        <code className="article-inline-code">U+1DC0–U+1DFF</code> (Supplement)
        is the intermediate tier — good in modern fonts, rarely normalized.{" "}
        <code className="article-inline-code">U+20D0–U+20FF</code> (Marks for
        Symbols) is the advanced tier — striking effects, but poor support in
        older Android system fonts.
      </p>
      <p>
        <strong>A custom interleaving function.</strong> The architecture is
        always the same: walk the input character by character and, after each
        base character, insert one or more combining marks from your pattern.
      </p>
      <pre className="article-code">
        <code>{`const PATTERN = ["\\u0303", "\\u0330"]; // above, below — alternating

function wavy(input) {
  let slot = 0;
  // Array.from is Unicode-aware: it keeps emoji and other
  // surrogate-pair characters whole instead of splitting them.
  return Array.from(input)
    .map((ch) => {
      if (ch === " ") return ch;          // never decorate spaces
      const marks = PATTERN[slot % PATTERN.length];
      slot += 1;
      return ch + marks;
    })
    .join("");
}`}</code>
      </pre>
      <aside className="expert-note" role="note">
        <p className="expert-note__label">Gotcha — surrogate pairs</p>
        <p>
          A naive{" "}
          <code className="article-inline-code">str.split(&quot;&quot;)</code>{" "}
          breaks characters outside the Basic Multilingual Plane (emoji, some CJK
          characters) into broken half-codepoints, corrupting the output. Use{" "}
          <code className="article-inline-code">Array.from(str)</code> or a
          Unicode-aware iterator so multi-codepoint base characters are treated
          as atomic units, not split apart.
        </p>
      </aside>
      <p>
        <strong>Alternating for rhythm.</strong> The most effective waves
        alternate marks — above, then below, then above — to create genuine wave
        motion. Repeating the same mark above every letter produces dotted text,
        not a wave. That single distinction separates a well-designed wave style
        from a lazy one, and explains why some popular generators look static
        rather than flowing.
      </p>
      <p>
        <strong>Test normalization stability.</strong> Build this check into any
        generator as a validation step:
      </p>
      <pre className="article-code">
        <code>{`// true → NFC-stable, survives Notion / Slack / Google Docs
const isNfcStable = (s) => s.normalize("NFC") === s;`}</code>
      </pre>
      <p>
        If <code className="article-inline-code">isNfcStable</code> returns true
        after applying your pattern, the wave will survive NFC normalization on
        the surfaces that quietly rewrite text — and you now understand exactly
        why some generators produce better-looking, more durable waves than
        others.
      </p>
    </section>
  );
}
