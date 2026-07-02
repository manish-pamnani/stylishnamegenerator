import ThemedNicknamePage from "@/components/ThemedNicknamePage";
import {
  PSYCHO_CONFIG,
  buildThemedJsonLd,
  buildThemedMetadata,
} from "@/lib/themedNicknamePageData";

export const metadata = buildThemedMetadata(PSYCHO_CONFIG);

const { webPage, breadcrumb, faq, itemList } = buildThemedJsonLd(PSYCHO_CONFIG);

export default function PsychoStylishNamePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <ThemedNicknamePage config={PSYCHO_CONFIG} />
    </>
  );
}
