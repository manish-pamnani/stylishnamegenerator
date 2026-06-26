import type { Metadata } from "next";
import HindiFontsContent from "@/components/HindiFontsContent";
import { HINDI_FAQ_ITEMS } from "@/lib/hindiPageData";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/hindi-stylish-fonts-generator";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = "/hindi-stylish-fonts-generator-whatsapp-status.svg";

const TITLE =
  "Hindi Stylish Fonts Generator 🌟 हिंदी स्टाइलिश फॉन्ट Copy Paste (2026)";
const DESCRIPTION =
  "Generate stylish Hindi fonts and copy paste instantly — fancy Unicode fonts for Hindi names, WhatsApp status, Instagram bio and Facebook. Works on any device.";

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
        alt: "Hindi stylish fonts generator — हिंदी स्टाइलिश फॉन्ट for WhatsApp status and Instagram bio copy paste",
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
  name: "Hindi Stylish Fonts Generator",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Generate stylish Hindi fonts and copy paste for WhatsApp status, Instagram bio and Facebook. Unicode Devanagari text decoration.",
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
      name: "Hindi Stylish Fonts Generator",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HINDI_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const languageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hindi Stylish Fonts Generator",
  inLanguage: "hi",
  url: PAGE_URL,
  description:
    "Generate stylish Hindi fonts for WhatsApp, Instagram and Facebook. Copy paste Unicode Devanagari text.",
};

export default function HindiStylishFontsGeneratorPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(languageJsonLd) }}
      />

      <HindiFontsContent />
    </>
  );
}
