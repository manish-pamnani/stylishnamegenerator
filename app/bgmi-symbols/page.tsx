import type { Metadata } from "next";
import BgmiSymbolsContent from "@/components/BgmiSymbolsContent";
import { BGMI_SYMBOLS_FAQ } from "@/lib/bgmiSymbolsPageData";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/bgmi-symbols";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = "/bgmi-symbols-special-characters-copy-paste.svg";

const TITLE =
  "BGMI Symbols & Special Characters 🎮 Copy Paste for Names (2025)";
const DESCRIPTION =
  "Copy paste 500+ BGMI symbols and special characters for stylish names. Unicode symbols that actually work in Battlegrounds Mobile India — borders, stars, flowers and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Stylish Name Generator",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 640,
        height: 400,
        alt: "BGMI symbols and special characters library — copy paste Unicode symbols for Battlegrounds Mobile India names",
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

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BGMI Symbols & Special Characters",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android, iOS",
  description:
    "Copy paste 500+ BGMI-compatible Unicode symbols and special characters for stylish Battlegrounds Mobile India names.",
  offers: { "@type": "Offer", price: "0" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "BGMI Symbols",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BGMI_SYMBOLS_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "BGMI-Compatible Unicode Symbols",
  description:
    "A curated library of 500+ Unicode symbols and special characters tested to work in Battlegrounds Mobile India names",
  url: PAGE_URL,
  keywords: [
    "BGMI symbols",
    "BGMI special characters",
    "Unicode symbols for BGMI",
  ],
};

export default function BgmiSymbolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />

      <BgmiSymbolsContent />
    </>
  );
}
