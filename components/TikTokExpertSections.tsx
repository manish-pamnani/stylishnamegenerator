import {
  TIKTOK_AGENCY_ROLLOUT_FRAMEWORK,
  TIKTOK_CHAR_COUNT_COMPARISON,
  TIKTOK_DEVICE_COMPAT_TABLE,
  TIKTOK_DISCOVERABILITY_MYTHS,
  type DeviceCompatRow,
} from "@/lib/tiktokExpertData";

function statusIcon(status: DeviceCompatRow["ios"]) {
  if (status === "pass") return { icon: "✅", cls: "wave-status--pass" };
  if (status === "partial") return { icon: "⚠️", cls: "wave-status--partial" };
  return { icon: "❌", cls: "wave-status--fail" };
}

function StatusCell({ status }: { status: DeviceCompatRow["ios"] }) {
  const { icon, cls } = statusIcon(status);
  return <span className={`wave-status ${cls}`}>{icon}</span>;
}

export default function TikTokExpertSections() {
  return (
    <article className="article-content reveal reveal-delay-4 mt-14">
      {/* Section 1 — discoverability myth vs reality */}
      <section aria-labelledby="discoverability-heading" className="mb-14">
        <h2 id="discoverability-heading" className="article-heading">
          Myth vs Reality: Do Stylish Fonts Help You Get Found, or Quietly
          Hurt You?
        </h2>
        <p>
          Fancy fonts are cosmetic, not a growth hack — and in one specific
          place, a searchable username, they can actively work against you.
          Here is what actually happens once a styled bio or username meets
          TikTok&apos;s search and recommendation pipeline.
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
              {TIKTOK_DISCOVERABILITY_MYTHS.map((row) => (
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
        <aside className="expert-note" role="note">
          <p className="expert-note__label">Practical compromise</p>
          <p>
            Use a stylish font for visual flair in the bio body, but keep
            plain text in your username and the first line of your bio —
            that is where TikTok&apos;s search weight is highest.
          </p>
        </aside>
      </section>

      {/* Section 2 — device and keyboard edge cases */}
      <section aria-labelledby="device-compat-heading" className="mb-14">
        <h2 id="device-compat-heading" className="article-heading">
          Why the Same Font Looks Broken on Some Phones (Device &amp;
          Keyboard Edge Cases)
        </h2>
        <p>
          Font compatibility isn&apos;t binary — it&apos;s a matrix of OS,
          keyboard, and TikTok&apos;s own renderer. MIUI (Xiaomi), OneUI
          (Samsung), and pre-11 Android ship incomplete font fallback stacks,
          so Double Struck and Fraktur commonly render as tofu boxes (▯) even
          though they display fine on iOS or desktop. Gboard, SwiftKey, and
          Samsung Keyboard sometimes strip rare Unicode characters on paste,
          silently truncating styled text before it&apos;s even posted — and
          TikTok&apos;s in-app text renderer uses a different fallback engine
          than your keyboard preview, so &ldquo;it looked fine while
          typing&rdquo; doesn&apos;t guarantee it looks fine once posted.
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Style</th>
                <th scope="col">iOS</th>
                <th scope="col">Stock Android</th>
                <th scope="col">Samsung</th>
                <th scope="col">Xiaomi</th>
                <th scope="col">TikTok renderer</th>
              </tr>
            </thead>
            <tbody>
              {TIKTOK_DEVICE_COMPAT_TABLE.map((row) => (
                <tr key={row.style}>
                  <td>{row.style}</td>
                  <td>
                    <StatusCell status={row.ios} />
                  </td>
                  <td>
                    <StatusCell status={row.stockAndroid} />
                  </td>
                  <td>
                    <StatusCell status={row.samsung} />
                  </td>
                  <td>
                    <StatusCell status={row.xiaomi} />
                  </td>
                  <td>
                    <StatusCell status={row.tiktokRenderer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="article-table-footnote">
          Bold Sans, Small Caps, and Circled are the safe subset with
          near-universal glyph coverage. Test Fraktur and Double Struck on
          your own device before committing to a bio.
        </p>
      </section>

      {/* Section 3 — character counting trap */}
      <section aria-labelledby="char-counting-heading" className="mb-14">
        <h2 id="char-counting-heading" className="article-heading">
          The Character-Counting Trap: Why &ldquo;80 Characters&rdquo; Isn&apos;t
          Always 80 Characters
        </h2>
        <p>
          Plain JavaScript <span className="article-inline-code">.length</span>{" "}
          miscounts many stylish Unicode characters and ZWJ emoji sequences —
          a naive counter can say 42 characters while TikTok&apos;s own
          grapheme-cluster-aware counter says 47 or more. Fullwidth and
          Circled styles are safe for limits because they use one codepoint
          per visible character; styles built from combining marks are not,
          which is a hidden reason some bios get silently truncated despite
          looking under-limit in a text editor.
        </p>
        <div className="article-table-wrap overflow-x-auto">
          <table className="article-table">
            <thead>
              <tr>
                <th scope="col">Bio example</th>
                <th scope="col">Visual chars</th>
                <th scope="col">JS .length</th>
                <th scope="col">Grapheme count</th>
              </tr>
            </thead>
            <tbody>
              {TIKTOK_CHAR_COUNT_COMPARISON.map((row) => (
                <tr key={row.example}>
                  <td>{row.example}</td>
                  <td>{row.visualChars}</td>
                  <td>{row.jsLength}</td>
                  <td>{row.graphemeCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="article-table-footnote">
          Rule of thumb: leave a 5–10% buffer under TikTok&apos;s stated
          80-character bio limit, specifically because different counting
          methods disagree with each other.
        </p>
      </section>

      {/* Section 4 — business, ads and verification contexts */}
      <section aria-labelledby="business-context-heading" className="mb-14">
        <h2 id="business-context-heading" className="article-heading">
          When You Should NOT Use Stylish Fonts (Business, Ads &amp;
          Verification Contexts)
        </h2>
        <p>
          Fun for personal profiles, risky for anything touching
          TikTok&apos;s business, commerce, or ads infrastructure. Ads Manager
          and Spark Ads text fields frequently reject or strip non-standard
          Unicode entirely, so a font tested in a bio should never be assumed
          to survive into an ad unit. Verification review teams and business
          name-change reviews are manually checked more strictly for
          readability and impersonation risk, and heavy stylization in a
          display name can trigger delays. Live Shopping and TikTok Shop
          product titles have their own stricter text-encoding validation
          that often fails silently on submission.
        </p>
        <ol className="decision-tree">
          <li>
            <strong>Personal account:</strong> Stylish fonts in bio and
            comments are low-stakes and fine.
          </li>
          <li>
            <strong>Creator account:</strong> Same as personal — keep the
            display name plain if you rely on discoverability via search.
          </li>
          <li>
            <strong>Business / Ads account:</strong> Keep display name and
            any ad-unit text in plain text; test any styled bio text in
            Ads Manager before a campaign, not after.
          </li>
          <li>
            <strong>TikTok Shop / commerce account:</strong> Keep product
            titles, descriptions, and support-facing text entirely in plain
            text — commerce fields validate encoding separately from the
            main app.
          </li>
        </ol>
      </section>

      {/* Section 5 — multi-account / agency workflows */}
      <section aria-labelledby="agency-heading" className="mb-4">
        <h2 id="agency-heading" className="article-heading">
          Advanced: Scaling Stylish Fonts Across Multi-Account and Agency
          Workflows
        </h2>
        <p>
          Once you manage more than a handful of client accounts, stylish
          fonts stop being a one-off cosmetic choice and become an
          operational and brand-risk decision. Using the identical
          stylish-font bio string across many client accounts creates a
          detectable pattern that some spam-detection heuristics can flag —
          vary at the token level, not just by swapping one word.
        </p>
        <h3 className="article-subheading">Agency rollout framework</h3>
        <ol className="decision-tree">
          {TIKTOK_AGENCY_ROLLOUT_FRAMEWORK.map((item) => (
            <li key={item.step}>
              <strong>{item.step}</strong> {item.action}
            </li>
          ))}
        </ol>
        <aside className="expert-note" role="note">
          <p className="expert-note__label">Hypothetical case: a 5-account rollout</p>
          <p>
            An agency launches five client bios using the same stylish
            template with only the brand name swapped. Two accounts see
            reduced reach within a week. The fix: rewrite each bio with
            different wording and emoji, restrict styling to one word per
            bio using the bulk-safe subset, and document the approved styles
            per client so the pattern doesn&apos;t recur on the next
            account added to the roster.
          </p>
        </aside>
      </section>
    </article>
  );
}
