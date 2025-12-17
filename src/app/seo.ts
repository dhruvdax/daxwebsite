
import type { Metadata } from "next";

const SITE_URL = "https://daxsws.com";
const SITE_NAME = "DAX Software Solutions";
const DEFAULT_TITLE = "Microsoft Dynamics 365 Integration | DAX Software Solutions";
const DEFAULT_DESCRIPTION =
  "Welcome to DAX Software Solutions. Optimize your Microsoft Dynamics 365 ERP experience with expert support from a trusted partner. Enhance your business processes, maximize ROI, and achieve your goals.";

const OG_IMAGE = `${SITE_URL}/assets/images/og/empathetic-erp-partner.jpg`;

type SeoArgs = {
  title?: string;
  description?: string;
  canonicalPath?: string; // e.g. "/" or "/services/dynamics-365"
  ogType?: "website" | "article";
};

export function buildMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "/",
  ogType = "website",
}: SeoArgs = {}): Metadata {
  const canonicalUrl = new URL(canonicalPath, SITE_URL);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: ogType,
      url: canonicalUrl.toString(),
      siteName: SITE_NAME,
      locale: "en_US",
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "DAX Software Solutions - Microsoft Dynamics 365 services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DaxSoftware",
      creator: "@DaxSoftware",
      title,
      description,
      images: [OG_IMAGE],
    },
    icons: {
      icon: "/assets/favicon.ico",
      shortcut: "/assets/favicon.ico",
    },
  };
}
