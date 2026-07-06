import type { Metadata } from "next";
import BiologyFontStyleContent from "@/components/BiologyFontStyleContent";
import { BIOLOGY_FAQ } from "@/lib/biologyPageData";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/biology-font-style";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = "/biology-font-style-science-copy-paste.svg";

const TITLE = "Biology Font Style ✨ Stylish Science Fonts Copy Paste (2025)";
const DESCRIPTION =
  "Copy paste stylish biology font styles for projects, notes and presentations. Unicode science fonts that work in Word, Google Docs, WhatsApp and Instagram — free online tool.";

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
        alt: "Biology font style generator showing stylish Unicode science fonts for projects, Instagram bio and WhatsApp",
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
  name: "Biology Font Style Generator",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Generate stylish biology font styles and copy paste science symbols for projects, Instagram bios and WhatsApp. Unicode fonts that work everywhere.",
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
      name: "Biology Font Style",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BIOLOGY_FAQ.map((item) => ({
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
  name: "Biology Unicode Symbols Library",
  description:
    "Curated collection of Unicode symbols for biology and science — Greek letters, subscripts, superscripts, scientific notation and biology emoji",
  url: PAGE_URL,
  keywords: [
    "biology symbols",
    "Greek letters Unicode",
    "scientific notation Unicode",
    "biology emoji",
  ],
};

export default function BiologyFontStylePage() {
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

      <BiologyFontStyleContent />
    </>
  );
}
