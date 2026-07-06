import type { Metadata } from "next";
import TikTokFontGeneratorContent from "@/components/TikTokFontGeneratorContent";
import { TIKTOK_FAQ, getAllBioTemplateNames } from "@/lib/tiktokPageData";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/tiktok-font-generator";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = "/tiktok-font-generator-stylish-bio-copy-paste.svg";

const TITLE = "TikTok Font Generator 🎵 Stylish Fonts & Bio Copy Paste (2025)";
const DESCRIPTION =
  "Generate stylish TikTok fonts and copy paste bio text instantly — fancy Unicode fonts for TikTok username, bio and comments. Works on TikTok, Instagram Reels and YouTube Shorts.";

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
        alt: "TikTok font generator showing stylish Unicode fonts for TikTok bio and username — works on Instagram Reels and YouTube Shorts",
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
  name: "TikTok Font Generator",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Generate stylish TikTok fonts for bio, username and comments. Copy paste Unicode fonts that work on TikTok, Instagram Reels and YouTube Shorts.",
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
      name: "TikTok Font Generator",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TIKTOK_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const bioTemplatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TikTok Bio Templates Copy Paste",
  description:
    "Ready-made stylish TikTok bio templates in fancy Unicode fonts — under 80 characters each",
  numberOfItems: getAllBioTemplateNames().length,
  itemListElement: getAllBioTemplateNames().map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
  })),
};

export default function TikTokFontGeneratorPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bioTemplatesJsonLd) }}
      />

      <TikTokFontGeneratorContent />
    </>
  );
}
