import type { Metadata } from "next";
import BgmiStylishNamesListContent from "@/components/BgmiStylishNamesListContent";
import {
  BGMI_LIST_PAGE_PATH,
  BGMI_LIST_PAGE_URL,
  buildBgmiListJsonLd,
} from "@/lib/bgmiStylishNamesListData";

const OG_IMAGE = "/bgmi-stylish-names-list-2025-copy-paste.webp";

const TITLE = "100+ BGMI Stylish Names List 2025 🎮 Copy Paste Ready";
const DESCRIPTION =
  "100+ stylish BGMI names for 2025 — copy paste ready Unicode names for Battlegrounds Mobile India. Cool, attitude, funny and girl BGMI names updated for the latest season.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BGMI_LIST_PAGE_PATH,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BGMI_LIST_PAGE_URL,
    type: "website",
    siteName: "Stylish Name Generator",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 640,
        height: 400,
        alt: "100+ BGMI stylish names list 2025 — cool, attitude, funny and girl BGMI names copy paste ready",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const { webPage, breadcrumb, faq, itemList } = buildBgmiListJsonLd();

export default function BgmiStylishNamesListPage() {
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

      <BgmiStylishNamesListContent />
    </>
  );
}
