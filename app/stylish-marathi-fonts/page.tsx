import type { Metadata } from "next";
import MarathiFontsContent from "@/components/MarathiFontsContent";
import { FAQ_ITEMS } from "@/lib/marathiPageData";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/stylish-marathi-fonts";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = "/stylish-marathi-fonts-copy-paste-whatsapp.svg";

const TITLE =
  "Stylish Marathi Fonts Copy Paste 🌺 Unicode Marathi Text (2025)";
const DESCRIPTION =
  "Copy paste stylish Marathi fonts instantly — 50+ Unicode Marathi text styles for WhatsApp, Instagram, Facebook and more. No app needed, works on any device.";

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
        alt: "Stylish Marathi fonts copy paste — decorated Unicode Marathi text for WhatsApp and Instagram",
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
  name: "Stylish Marathi Fonts Copy Paste",
  url: PAGE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Copy paste stylish Marathi fonts in Unicode. Decorated Marathi text styles for WhatsApp, Instagram and Facebook.",
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
      name: "Stylish Marathi Fonts",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
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
  name: "Stylish Marathi Fonts Copy Paste",
  inLanguage: "mr",
  url: PAGE_URL,
  description:
    "Copy paste stylish Marathi fonts in Unicode for WhatsApp and Instagram.",
};

export default function StylishMarathiFontsPage() {
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

      <MarathiFontsContent />
    </>
  );
}
