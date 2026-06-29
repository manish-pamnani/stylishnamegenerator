import type { Metadata } from "next";
import WavyTextContent from "@/components/WavyTextContent";
import { WAVE_FAQ_ITEMS } from "@/lib/wavyPageData";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/wavy-text-generator";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = "/wavy-text-generator-copy-paste-wave-fonts.svg";

const TITLE = "Wavy Text Generator 〰️ Copy Paste Wave Fonts Online (2025)";
const DESCRIPTION =
  "Generate wavy text instantly using Unicode combining characters. Copy paste wave style fonts for Instagram bio, WhatsApp status, BGMI names and more — free online tool.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "wavy text generator",
    "wave text",
    "wavy font",
    "zalgo text",
    "combining characters",
    "wavy text copy paste",
  ],
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
        alt: "Wavy text generator showing multiple Unicode wave font styles — copy paste for Instagram, WhatsApp and BGMI",
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
  name: "Wavy Text Generator",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Generate wavy text using Unicode combining characters. Copy paste wave style fonts for Instagram, WhatsApp, BGMI and more.",
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
      name: "Wavy Text Generator",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: WAVE_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function WavyTextGeneratorPage() {
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

      <WavyTextContent />
    </>
  );
}
