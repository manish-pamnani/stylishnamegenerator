import Link from "next/link";
import {
  BGMI_SYMBOL_BORDER_TRADEOFF,
  BGMI_SYMBOL_BYTE_BUDGET_TABLE,
  BGMI_SYMBOL_DEVICE_TABLE,
  BGMI_SYMBOL_MYTHS_TABLE,
  BGMI_SYMBOL_NAME_ARCHITECTURE,
  BGMI_SYMBOL_PATCH_TIERS,
  BGMI_SYMBOL_PLAYER_DECISION,
  BGMI_SYMBOL_RENAME_TIPS,
} from "@/lib/bgmiSymbolsArticleData";
import { BGMI_SYMBOLS_LAST_UPDATED } from "@/lib/bgmiSymbolsPageData";

export default function BgmiSymbolsExpertArticle() {
  return (
    <article className="article-content reveal reveal-delay-4 mb-14">
      <section aria-labelledby="byte-limit-heading">
        <h2 id="byte-limit-heading" className="article-heading">
          The Character Limit Trap — How Symbols Silently Eat Your BGMI Name
          Space
        </h2>
        <p>
          Every competing symbol page tells you <em>which</em> characters work.
          Almost none explain that Unicode symbols have wildly different byte
          weights — and BGMI&apos;s name field enforces a{" "}
          <strong>byte limit</strong>, not a visible character limit. That gap
          is why your name gets cut off unexpectedly even when the counter
          looks fine.
        </p>
        <p>
          BGMI shows roughly a 16-character display limit, but validation runs
          on encoded bytes. A single emoji like 👑 consumes 4 bytes while ★
          consumes 3 — meaning two emoji borders can silently eat 8 bytes
          before you type one letter. Characters in the Supplementary
          Multilingual Plane (SMP) — like 𓃠 𓆩 𓆪 — are 4-byte characters;
          stacking three leaves almost no room for your actual name.
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Symbol category</th>
                <th scope="col">Bytes consumed</th>
                <th scope="col">Example</th>
                <th scope="col">Border pair cost</th>
                <th scope="col">Name space left</th>
              </tr>
            </thead>
            <tbody>
              {BGMI_SYMBOL_BYTE_BUDGET_TABLE.map((row) => (
                <tr key={row.category}>
                  <td>{row.category}</td>
                  <td>{row.bytesPerChar}</td>
                  <td className="converted-name text-base">{row.example}</td>
                  <td>{row.borderPairCost}</td>
                  <td>{row.nameCharsRemaining}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">Expert note</p>
          <p>
            The <strong>invisible character bug</strong> is the sneakiest trap:
            zero-width joiners (U+200C, U+200D) and directional marks used in
            fancy name tools consume bytes without showing a visible character.
            Your name can fail validation with no obvious reason — always paste
            into the in-game rename preview and confirm acceptance before
            spending a Rename Card.
          </p>
          <p>
            Budget bytes first, aesthetics second. Use the border preview tool
            above with your real nickname to see how much space decorative pairs
            consume before you commit.
          </p>
        </aside>
        <p className="article-subheading">
          Safest vs. byte-heavy borders — practical tradeoffs
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Style</th>
                <th scope="col">Preview</th>
                <th scope="col">Approx. byte cost</th>
                <th scope="col">Tradeoff</th>
              </tr>
            </thead>
            <tbody>
              {BGMI_SYMBOL_BORDER_TRADEOFF.map((row) => (
                <tr key={row.style}>
                  <td>{row.style}</td>
                  <td className="converted-name text-base">{row.preview}</td>
                  <td>{row.byteCost}</td>
                  <td>{row.tradeoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="patch-survival-heading">
        <h2 id="patch-survival-heading" className="article-heading">
          Patch-Proof vs. Patch-Vulnerable Symbols — What Survives BGMI Updates
        </h2>
        <p>
          Symbol library pages are written once and rarely maintained. Nobody
          documents why certain symbols disappear after patches — or which
          classes have historically survived every BGMI update since launch.
          Krafton&apos;s name validation runs <strong>server-side</strong> after
          each major patch, so a symbol that worked yesterday can return an
          error today without any visible client change.
        </p>
        <p>
          The historical pattern: Krafton typically tightens character ranges
          after anti-cheat patches. Invisible-character exploits get patched,
          and collateral symbols in the same Unicode blocks get caught in the
          filter. The most popular symbols are paradoxically the safest —
          Krafton avoids breaking them because millions of existing accounts
          already use them.
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Stability tier</th>
                <th scope="col">Risk level</th>
                <th scope="col">Example symbols</th>
                <th scope="col">Update history notes</th>
              </tr>
            </thead>
            <tbody>
              {BGMI_SYMBOL_PATCH_TIERS.map((row) => (
                <tr key={row.tier}>
                  <td>{row.tier}</td>
                  <td>{row.risk}</td>
                  <td className="converted-name text-base">{row.examples}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">How to test patch survival</p>
          <p>
            Create a throwaway account, set a name with new or exotic symbols,
            note the current patch version, and check again after the next
            update. Symbols in the <strong>Stable</strong> tier above rarely
            need this — save testing for Moderate and High churn categories.
          </p>
          <p>
            This library was last updated {BGMI_SYMBOLS_LAST_UPDATED}. We remove
            symbols that break after patches — cross-check with our{" "}
            <Link href="/bgmi-name-generator" className="intro-link">
              BGMI name generator
            </Link>{" "}
            for styled-letter compatibility too.
          </p>
        </aside>
      </section>

      <section aria-labelledby="symbol-myths-heading">
        <h2 id="symbol-myths-heading" className="article-heading">
          Myth vs. Reality — What BGMI Symbol Advice Gets Completely Wrong
        </h2>
        <p>
          Most symbol pages are pure reference content with no stake in
          correcting bad advice. These five corrections come from rename-thread
          reports, post-patch compatibility testing, and competitive lobby
          observation — not content-farm copy.
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
              {BGMI_SYMBOL_MYTHS_TABLE.map((row) => (
                <tr key={row.myth}>
                  <td>
                    <span className="myth-label">Myth</span> {row.myth}
                  </td>
                  <td>
                    <span className="reality-label">Reality</span> {row.reality}
                    <p className="mt-2 text-sm text-[var(--cream-faint)]">
                      {row.detail}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="device-rendering-heading">
        <h2 id="device-rendering-heading" className="article-heading">
          Device-Specific Symbol Rendering — Why Your Name Looks Different on
          Your Squadmate&apos;s Phone
        </h2>
        <p>
          BGMI renders nicknames using the host device&apos;s system font stack
          — when a character has no glyph, the OS substitutes a fallback (Noto on
          stock Android, MiSans on MIUI, HarmonyOS Sans on Huawei). This is
          why the same symbol library entry can look perfect on your phone and
          broken on a squadmate&apos;s.
        </p>
        <p>
          <strong>The MIUI / ColorOS problem:</strong> Xiaomi and Oppo budget
          devices ship stripped-down font sets that lack glyphs for entire
          Unicode blocks — Tibetan extensions, Vai script, Enclosed CJK. Symbols
          that render fine on Samsung or OnePlus show as □ on these devices,
          which together represent 40%+ of India&apos;s BGMI playerbase.
        </p>
        <p>
          <strong>The preview vs. lobby gap:</strong> BGMI&apos;s rename screen
          may use a different rendering path than in-lobby name display. A
          symbol can appear fine during setup but fail for opponents. Always
          verify with a squadmate screenshot, not just your own preview.
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Symbol category</th>
                <th scope="col">Flagship (Samsung / OnePlus)</th>
                <th scope="col">Budget MIUI / ColorOS</th>
                <th scope="col">Android 9–10</th>
              </tr>
            </thead>
            <tbody>
              {BGMI_SYMBOL_DEVICE_TABLE.map((row) => (
                <tr key={row.symbolCategory}>
                  <td>{row.symbolCategory}</td>
                  <td>{row.flagship}</td>
                  <td>{row.budgetMiui}</td>
                  <td>{row.android9}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">Indian market safety rule</p>
          <p>
            If a symbol renders in your system keyboard&apos;s emoji picker{" "}
            <em>and</em> was added in Unicode 9.0 or earlier, it is safe for
            95%+ of Indian Android devices. Newer emoji like 🪷 (Emoji 14.0)
            look great on Android 12+ flagships but show □ on the Android 9–10
            devices still common in tier-2 and tier-3 markets.
          </p>
          <p>
            Design your name for your audience&apos;s devices, not just your
            own. A Redmi Note pass on your border pair means roughly 70% of
            your squad&apos;s phones will render it cleanly.
          </p>
        </aside>
      </section>

      <section aria-labelledby="name-architecture-heading">
        <h2 id="name-architecture-heading" className="article-heading">
          Building a Systematic BGMI Name Architecture — For Players Who Treat
          Their ID as a Brand
        </h2>
        <p>
          This assumes you have moved beyond &quot;I want a cool name&quot; to
          &quot;I want a consistent identity across seasons, clans, and social
          presence.&quot; Professional players structure their name as three
          layers — changing only the accent layer lets you refresh your look
          without losing brand recall.
        </p>
        <p className="article-subheading">The three-layer name framework</p>
        <div className="name-example" aria-label="Three-layer BGMI name structure">
          <span className="text-[var(--cream-faint)]">[Anchor] </span>
          {BGMI_SYMBOL_NAME_ARCHITECTURE.anchor}
          <span className="text-[var(--cream-faint)]"> · [Core] </span>
          {BGMI_SYMBOL_NAME_ARCHITECTURE.core}
          <span className="text-[var(--cream-faint)]"> · [Accent] </span>
          {BGMI_SYMBOL_NAME_ARCHITECTURE.accent}
        </div>
        <p className="article-table-footnote">
          Full preview:{" "}
          <span className="converted-name text-sm">
            {BGMI_SYMBOL_NAME_ARCHITECTURE.fullPreview}
          </span>
        </p>
        <ul className="power-user-checklist">
          {BGMI_SYMBOL_NAME_ARCHITECTURE.layers.map((layer) => (
            <li key={layer.layer}>
              <strong className="text-[var(--cream)]">{layer.layer}:</strong>{" "}
              {layer.role}{" "}
              <span className="converted-name text-sm">({layer.example})</span>
              {" — "}
              {layer.note}
            </li>
          ))}
        </ul>
        <p>
          <strong>Clan name coordination:</strong> if you are building a clan,
          define a shared anchor symbol and enforce it across all members.
          Audiences recognise ꧁CLAN꧂ members instantly in kill feeds; random
          symbol choices fragment visual identity. Document the clan&apos;s
          approved symbol set before recruiting.
        </p>
        <p>
          <strong>Cross-platform consistency:</strong> your BGMI name renders in
          Unicode; your YouTube channel, Instagram handle, and Discord tag do not
          support most BGMI symbols. Define a text-safe alias alongside your
          in-game name so you are searchable everywhere.
        </p>
        <p className="article-subheading">
          What type of player are you?
        </p>
        <div className="decision-matrix" role="list">
          {BGMI_SYMBOL_PLAYER_DECISION.map((item) => (
            <div
              key={item.playerType}
              className="decision-matrix__cell"
              role="listitem"
            >
              <p className="decision-matrix__title">{item.playerType}</p>
              <p>{item.recommendation}</p>
              <p className="mt-2 text-sm">
                Example:{" "}
                <span className="converted-name text-sm">{item.example}</span>
              </p>
            </div>
          ))}
        </div>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">Rename Card economics</p>
          <p>
            Rename Cards cost UC or require events. Advanced players maintain a
            symbol changelog (screenshot + date) so they can revert to a prior
            name exactly if a seasonal accent swap does not land well. Without
            a changelog, you lose the exact byte-for-byte original.
          </p>
        </aside>
        <p>
          <strong>Competitive lobby psychology:</strong> in high-ranked lobbies,
          a clean minimal name (one border pair + clean letters) reads as
          experienced. Heavy symbol stacking (5+ decorations) reads as a new
          player trying to compensate — your name signals confidence before a
          shot is fired.
        </p>
        <ul className="article-checklist">
          {BGMI_SYMBOL_RENAME_TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
