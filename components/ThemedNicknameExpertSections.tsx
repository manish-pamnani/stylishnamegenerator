import Link from "next/link";
import {
  CLAN_IDENTITY_FRAMEWORK,
  CLAN_PLATFORM_MATRIX,
  FONT_RENDERING_RISK,
  LENGTH_TROUBLESHOOTING,
  NAMING_MYTHS,
  NOBITA_LENGTH_SAFETY,
  PSYCHO_LENGTH_SAFETY,
  RENAME_CARD_TIMELINE,
} from "@/lib/themedNicknameExpertData";
import type { ThemedNicknameConfig } from "@/lib/themedNicknamePageData";

function riskClass(level: "Low" | "Medium" | "High") {
  if (level === "Low") return "text-[var(--neon-lime)]";
  if (level === "Medium") return "text-[var(--neon-cyan)]";
  return "text-[var(--neon-pink)]";
}

export default function ThemedNicknameExpertSections({
  config,
}: {
  config: ThemedNicknameConfig;
}) {
  const isNobita = config.id === "nobita";
  const lengthRows = isNobita ? NOBITA_LENGTH_SAFETY : PSYCHO_LENGTH_SAFETY;
  const themeLabel = isNobita ? "Nobita" : "Psycho";

  return (
    <article className="article-content reveal reveal-delay-4 mt-14">
      {/* Section 1 — rendering / boxing */}
      <section aria-labelledby="rendering-heading" className="mb-14">
        <h2 id="rendering-heading" className="article-heading">
          Why Some Names Turn Into Boxes (□□□) or Blank Spaces on Certain Phones
        </h2>
        <p>
          Every competing copy-paste page assumes Unicode renders identically
          everywhere. It does not. BGMI and Free Fire run on fragmented Android
          skins — MIUI, EMUI, OneUI, ColorOS — each with different bundled font
          subsets. A {themeLabel.toLowerCase()}-style name that looks perfect on
          your phone can render as empty squares on a squadmate&apos;s killfeed.
          Here is what breaks, why, and how to pre-vet before spending a rename
          card.
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Preview vs killfeed mismatch:</strong> the in-game rename
            preview uses a different font renderer than spectator mode and the
            post-match killfeed — a name can look clean in preview and break for
            teammates watching your clip.
          </li>
          <li>
            <strong>MIUI/EMUI font substitution:</strong> Xiaomi and Huawei
            devices replace unsupported Unicode blocks with blank space instead
            of tofu boxes — so your name may literally disappear rather than
            show □□□.
          </li>
          <li>
            <strong>High-risk blocks on this page:</strong>{" "}
            {isNobita
              ? "Mathematical Script is relatively safe; avoid mixing in Fraktur or hieroglyphs copied from other lists."
              : "Bold Fraktur and Egyptian hieroglyphs (𓆩𓆪) are the highest-risk fonts in our Psycho list — test these on a second device before committing."}
          </li>
          <li>
            <strong>Quick pre-vet method:</strong> paste into WhatsApp or Notes
            first, then ask a friend on a different phone brand to confirm
            before using your rename card.
          </li>
        </ul>

        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Font family</th>
                <th scope="col">Unicode block</th>
                <th scope="col">Device risk</th>
                <th scope="col">Fallback behaviour</th>
                <th scope="col">On this page</th>
              </tr>
            </thead>
            <tbody>
              {FONT_RENDERING_RISK.map((row) => {
                const onThisPage = isNobita
                  ? row.onNobitaPage
                  : row.onPsychoPage;

                return (
                  <tr
                    key={row.fontFamily}
                    className={onThisPage ? "is-current-letter" : ""}
                  >
                    <td>{row.fontFamily}</td>
                    <td>{row.unicodeBlock}</td>
                    <td className={riskClass(row.deviceRisk)}>
                      {row.deviceRisk}
                    </td>
                    <td>{row.fallback}</td>
                    <td>{onThisPage ? "Yes" : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="article-table-footnote">
          <strong className="text-[var(--cream)]">Safe vs risky on this page:</strong>{" "}
          rows highlighted in green are fonts used in our {themeLabel} name list.
          Low-risk rows are safe to copy-paste for most Indian Android devices;
          High-risk rows need a second-device check before you commit a rename
          card.
        </p>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">For {themeLabel} names specifically</p>
          <p>
            {isNobita
              ? "Nobita-style names lean on Mathematical Script and decorative stars — the safest combination on this site. If you borrow Psycho-style Fraktur or hieroglyph borders for contrast, test those additions separately."
              : "Psycho names lean on Bold Fraktur and hieroglyph borders — visually striking but the first to break on MIUI and ColorOS devices. For ranked pushes where readability matters, use a short Fraktur core with plain ꧁꧂ borders instead of 𓆩𓆪 pairs."}
          </p>
        </aside>
      </section>

      {/* Section 2 — character limit trap */}
      <section aria-labelledby="limit-heading" className="mb-14">
        <h2 id="limit-heading" className="article-heading">
          The Character-Limit Trap: Why Fancy Fonts Eat Your Name Slot Faster
          Than Normal Text
        </h2>
        <p>
          Every name list page implies you can copy-paste freely. None mention
          that BGMI&apos;s rename field enforces a limit decorative Unicode
          consumes faster than plain ASCII — so long, elaborate names on this
          page may get truncated or rejected at paste time. Visual character
          count and encoded length are not the same thing.
        </p>
        <p>
          Border characters (꧁꧂, 『』, 𓆩𓆪) plus a styled core word plus a clan
          tag often blow past the limit together. BGMI and Free Fire also use
          different effective limits — treating them as interchangeable is why
          &ldquo;why won&apos;t my name paste&rdquo; is one of the most searched
          BGMI frustrations with almost no good answers until now.
        </p>

        <p className="article-subheading">
          Which names on this page are safe length vs likely need trimming
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Example from this list</th>
                <th scope="col">Category</th>
                <th scope="col">Length tier</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {lengthRows.map((row) => (
                <tr key={row.example}>
                  <td>
                    <span className="converted-name text-sm">{row.example}</span>
                  </td>
                  <td>{row.category}</td>
                  <td>{row.tier}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="article-subheading">Troubleshooting checklist</h3>
        <ol className="decision-tree">
          {LENGTH_TROUBLESHOOTING.map((item) => (
            <li key={item.step}>
              <strong>{item.step}</strong> {item.action}
            </li>
          ))}
        </ol>
        <p className="article-table-footnote">
          Practical trim order: drop borders first → remove decorative
          diacritics → shorten the core word → switch font block. Never add a
          clan tag to a name already in the &ldquo;Likely needs trimming&rdquo;
          tier.
        </p>
      </section>

      {/* Section 3 — myth vs reality */}
      <section aria-labelledby="myths-heading" className="mb-14">
        <h2 id="myths-heading" className="article-heading">
          Myth vs Reality: Nobita &amp; Psycho Naming Trends
        </h2>
        <p>
          Competing pages are purely promotional — &ldquo;these names are
          cool!&rdquo; with zero critical framing. These five misconceptions
          are what players actually carry into ranked lobbies. Independent
          judgment beats listicle filler every time.
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
              {NAMING_MYTHS.map((row) => (
                <tr key={row.myth}>
                  <td>
                    <span className="myth-label">Myth</span> {row.myth}
                  </td>
                  <td>
                    <span className="reality-label">Reality</span> {row.reality}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="article-table-footnote">
          The &ldquo;cooler = more decorated&rdquo; instinct most guides push is
          often wrong. Names are a tactical and social choice — not just an
          aesthetic one.
        </p>
      </section>

      {/* Section 4 — rename card economy */}
      <section aria-labelledby="rename-economy-heading" className="mb-14">
        <h2 id="rename-economy-heading" className="article-heading">
          The Rename Card Economy: When Players Actually Change Names (and Why)
        </h2>
        <p>
          This requires observing player behaviour across seasons — not just font
          knowledge. Naming is not a one-time cosmetic choice. It is tied to a
          resource-management and identity-branding cycle experienced players
          plan around.
        </p>
        <ol className="how-steps">
          {RENAME_CARD_TIMELINE.map((step) => (
            <li key={step.when} className="how-step">
              <strong>{step.when} — {step.title}.</strong> {step.detail}
            </li>
          ))}
        </ol>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">The borrowed-identity pattern</p>
          <p>
            Squads temporarily adopt a themed name set — all Nobita for a casual
            scrim stream, all Psycho for a ranked push — then revert after the
            event. Esports orgs avoid meme names like Nobita on main roster
            accounts but let practice and scrim alts use them freely. Clan
            leaders draft 3–4 backup names before any rename because desired
            short tags get taken within hours on high-population servers.
          </p>
        </aside>
      </section>

      {/* Section 5 — cross-platform clan identity */}
      <section aria-labelledby="clan-identity-heading" className="mb-4">
        <h2 id="clan-identity-heading" className="article-heading">
          Building a Cross-Platform Clan Identity System — Beyond Single Names
        </h2>
        <p>
          Advanced — not for beginners. This is multi-platform identity
          management at squad level: BGMI + Free Fire + Discord + Instagram, with
          font-encoding consistency that individual &ldquo;pick a cool
          name&rdquo; articles never address.
        </p>
        <ul className="power-user-checklist">
          {CLAN_IDENTITY_FRAMEWORK.map((item) => (
            <li key={item.step}>
              <strong className="text-[var(--cream)]">{item.step}.</strong>{" "}
              {item.detail}
            </li>
          ))}
        </ul>

        <p className="article-subheading">
          Font family × platform compatibility matrix
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Font family</th>
                <th scope="col">BGMI</th>
                <th scope="col">Free Fire</th>
                <th scope="col">Discord</th>
                <th scope="col">Instagram</th>
              </tr>
            </thead>
            <tbody>
              {CLAN_PLATFORM_MATRIX.map((row) => (
                <tr
                  key={row.fontFamily}
                  className={
                    (isNobita &&
                      row.fontFamily.includes("Nobita")) ||
                    (!isNobita &&
                      row.fontFamily.includes("Psycho"))
                      ? "is-current-letter"
                      : ""
                  }
                >
                  <td>{row.fontFamily}</td>
                  <td>{row.bgmi}</td>
                  <td>{row.freeFire}</td>
                  <td>{row.discord}</td>
                  <td>{row.instagram}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="article-table-footnote">
          Build names that survive all four platforms before rolling out a squad
          rebrand. Need styled cores? Use our{" "}
          <Link href="/bgmi-name-generator" className="article-link">
            BGMI name generator
          </Link>
          , borders from{" "}
          <Link href="/bgmi-symbols" className="article-link">
            BGMI symbols
          </Link>
          , and cross-check on{" "}
          <Link href="/free-fire-name-generator" className="article-link">
            Free Fire
          </Link>{" "}
          before burning rename cards across the whole roster.
        </p>
      </section>
    </article>
  );
}
