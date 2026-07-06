import {
  ACCESSIBILITY_CHECKLIST,
  BIOLOGY_FONT_MYTHS,
  RENDERING_RISK_TABLE,
  SCHOOL_DECISION_STEPS,
  SUBSCRIPT_SUPPORTED_LETTERS,
  SUBSCRIPT_UNSUPPORTED_LETTERS,
} from "@/lib/biologyExpertData";

function riskClass(level: "Low" | "Medium" | "High") {
  if (level === "Low") return "text-[var(--neon-lime)]";
  if (level === "Medium") return "text-[var(--neon-cyan)]";
  return "text-[var(--neon-pink)]";
}

export default function BiologyExpertSections() {
  return (
    <article className="article-content reveal reveal-delay-4 mt-14">
      {/* Section 1 — Unicode reality behind "fonts" */}
      <section aria-labelledby="unicode-reality-heading" className="mb-14">
        <h2 id="unicode-reality-heading" className="article-heading">
          Why Some Characters Turn Into Boxes (□) — The Unicode Reality Behind
          &ldquo;Fonts&rdquo; That Aren&apos;t Fonts
        </h2>
        <p>
          Double Struck, Fraktur, and the rest are not fonts you can pick from
          a dropdown — they are separate Unicode codepoints, mostly from the
          Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF). That
          distinction is why they survive copy-paste unchanged: you are
          pasting plain text, not applying a font-family setting. It is also
          why the receiving app can never resize, bold, or recolour them
          further — what you copy is exactly what you get.
        </p>
        <p>
          A few lowercase letters in Double Struck and Fraktur have no
          dedicated Unicode codepoint at all, so generators quietly substitute
          look-alike characters from other blocks to fill the gap — a small,
          silent inconsistency that is easy to miss until you compare two
          letters side by side. Older Samsung/Android system fonts, some PDF
          viewers, and older browsers do not ship the full Mathematical
          Alphanumeric range, so unsupported characters — Fraktur and Double
          Struck are the most common offenders — render as tofu boxes (□) or
          simply vanish.
        </p>
        <p>
          One more gap worth knowing: Instagram and WhatsApp often accept a
          stylish style in a <strong>bio</strong> field but silently strip it
          from a <strong>username</strong> field, because usernames run
          through a stricter character allowlist than free-text bio fields
          do.
        </p>

        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Style</th>
                <th scope="col">Risk of breaking</th>
                <th scope="col">Safer alternative</th>
              </tr>
            </thead>
            <tbody>
              {RENDERING_RISK_TABLE.map((row) => (
                <tr key={row.style}>
                  <td>{row.style}</td>
                  <td className={riskClass(row.risk)}>{row.risk}</td>
                  <td>{row.saferAlternative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">Why it matters in practice</p>
          <p>
            This is why a style that looked perfect on this web tool can show
            up broken on your teacher&apos;s PDF-exported project or a
            friend&apos;s older phone. Pick Low-risk styles for anything that
            has to survive printing or an unfamiliar device — save High-risk
            styles for a heading you have already tested.
          </p>
        </aside>
      </section>

      {/* Section 2 — CBSE/ICSE reality check */}
      <section aria-labelledby="school-heading" className="mb-14">
        <h2 id="school-heading" className="article-heading">
          Will Your School Actually Accept Stylish Fonts on a Project? The
          CBSE/ICSE Reality Check
        </h2>
        <p>
          &ldquo;Looks nice&rdquo; is not the same as &ldquo;usable&rdquo;.
          Most schools have unstated or explicit formatting rules, and where
          you use a stylish font matters more than whether you use one at
          all. A typed project cover page is usually fine — examiners see it
          as decorative typography. Body and answer text is a different
          story: some boards now pilot OCR-based evaluation tools that cannot
          read Unicode glyphs correctly, so styled paragraphs risk being
          misread or marked incomplete.
        </p>
        <p>
          A practical middle ground works for almost every case: use a
          stylish font for the title or heading only, and keep body text in
          a regular font like Times New Roman or Calibri — this matches what
          examiners actually expect to see.
        </p>

        <h3 className="article-subheading">Decision checklist before you submit</h3>
        <ol className="decision-tree">
          {SCHOOL_DECISION_STEPS.map((item) => (
            <li key={item.step}>
              <strong>{item.step}</strong> {item.action}
            </li>
          ))}
        </ol>
        <p className="article-table-footnote">
          Rule of thumb: cover page → safe. Body or answers → avoid. Printing
          required → test a print preview first, every time.
        </p>
      </section>

      {/* Section 3 — myth vs reality */}
      <section aria-labelledby="myths-heading" className="mb-14">
        <h2 id="myths-heading" className="article-heading">
          Myth vs Reality: What People Get Wrong About Stylish Biology Fonts
        </h2>
        <p>
          A font generator page that never questions its own product is just
          promotional copy. These five misconceptions are what actually trip
          people up in practice.
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Myth</th>
                <th scope="col">Reality</th>
              </tr>
            </thead>
            <tbody>
              {BIOLOGY_FONT_MYTHS.map((row) => (
                <tr key={row.myth}>
                  <td>
                    <span className="myth-label">Myth</span> {row.myth}
                  </td>
                  <td>
                    <span className="reality-label">Reality</span>{" "}
                    {row.reality}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="article-table-footnote">
          Treat these as informed tradeoffs, not a free win — that is what
          separates confident use from a broken project cover or an unread
          bio.
        </p>
      </section>

      {/* Section 4 — subscript/superscript limits */}
      <section aria-labelledby="subscript-limits-heading" className="mb-14">
        <h2 id="subscript-limits-heading" className="article-heading">
          Subscript/Superscript Unicode Has Real Limits — What You Can and
          Can&apos;t Actually Do With Chemical Formulas
        </h2>
        <p>
          Unicode subscript support is incomplete, and almost no generator
          site mentions the ceiling. The subscript block only covers digits
          0–9, a few operators (+, −, =, (, )), and a small, fixed set of
          lowercase letters — nothing else exists as a true subscript
          character.
        </p>
        <p>
          Practical consequence: you can write <strong>H₂O</strong> and{" "}
          <strong>C₆H₁₂O₆</strong> perfectly, because those only need digits.
          But you cannot properly subscript most compound or variable names
          using arbitrary letters — a generator that claims otherwise is
          faking it with tiny superscript-style Latin lookalikes that are not
          real subscripts and may render inconsistently across apps. The same
          ceiling applies to superscript letters, which matters for isotope
          or exponent notation in more advanced biology and chemistry
          contexts.
        </p>

        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Supported subscript letters</th>
                <th scope="col">Example</th>
              </tr>
            </thead>
            <tbody>
              {SUBSCRIPT_SUPPORTED_LETTERS.map((row) => (
                <tr key={row.letter}>
                  <td>{row.letter}</td>
                  <td className="converted-name text-base">
                    {row.subscript}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="article-table-footnote">
          No true subscript exists for any other letter, including:{" "}
          {SUBSCRIPT_UNSUPPORTED_LETTERS}.
        </p>

        <aside className="expert-note" role="note">
          <p className="expert-note__label">The professional workaround</p>
          <p>
            When your formula or notation needs a letter outside the
            supported set, use HTML <span className="article-inline-code">&lt;sub&gt;</span>/
            <span className="article-inline-code">&lt;sup&gt;</span> tags
            instead of Unicode wherever the destination supports rich text —
            Word and Google Docs both do. That is the more robust choice for
            organic chemistry naming or isotope notation at higher-secondary
            and undergraduate level, where formulas get complex enough to hit
            this ceiling.
          </p>
        </aside>
      </section>

      {/* Section 5 — accessibility */}
      <section aria-labelledby="accessibility-heading" className="mb-4">
        <h2 id="accessibility-heading" className="article-heading">
          Accessibility Blind Spot: How Screen Readers Actually Announce
          Stylish Unicode Text
        </h2>
        <p>
          Mathematical Alphanumeric Unicode characters are often not mapped to
          letter pronunciation in screen readers — so a styled &ldquo;Biology&rdquo;
          heading may get read out letter-by-letter, spelled out as symbol
          names, or skipped entirely, instead of read as the word it looks
          like on screen. A meaningful share of Instagram bios and shared
          documents get read aloud by assistive technology, so this is a real
          usability gap, not an edge case.
        </p>
        <p>
          Many accessibility-conscious creators already work around this on
          Instagram: they keep the plain-text version in the actual display
          name, and reserve stylish Unicode for a bio line that is
          supplementary rather than essential.
        </p>

        <h3 className="article-subheading">
          Accessibility-safe usage checklist
        </h3>
        <ul className="article-checklist">
          {ACCESSIBILITY_CHECKLIST.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
