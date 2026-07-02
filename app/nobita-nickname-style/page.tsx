import ThemedNicknamePage from "@/components/ThemedNicknamePage";
import {
  NOBITA_CONFIG,
  buildThemedJsonLd,
  buildThemedMetadata,
} from "@/lib/themedNicknamePageData";

export const metadata = buildThemedMetadata(NOBITA_CONFIG);

const { webPage, breadcrumb, faq, itemList } = buildThemedJsonLd(NOBITA_CONFIG);

export default function NobitaNicknameStylePage() {
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

      <ThemedNicknamePage config={NOBITA_CONFIG} />
    </>
  );
}
