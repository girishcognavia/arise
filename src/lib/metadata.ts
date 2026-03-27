import type { Metadata } from "next";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

const SITE_NAME = "Sukrithi Family Health Centre";
const DEFAULT_IMAGE = "/images/og-default.jpg";

export function generatePageMetadata({
  title,
  description,
  keywords,
  image,
}: PageMetadataOptions): Metadata {
  return {
    title: title
      ? { default: title, template: `%s | ${SITE_NAME}` }
      : SITE_NAME,
    description,
    keywords,
    openGraph: {
      title: title ?? SITE_NAME,
      description: description ?? "",
      images: [image ?? DEFAULT_IMAGE],
      locale: "en_IN",
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export const DEFAULT_METADATA: Metadata = {
  title: {
    default:
      "Sukrithi Family Health Centre | Diabetic Care & Wound Care Without Amputation | Thrissur",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sukrithi Family Health Centre in Thrissur, Kerala offers expert diabetic care, diabetes reversal programs, wound care without amputation, cancer screening, preventive health checkups, and palliative care by Dr. K S Premlal and team.",
  keywords: [
    "diabetic care thrissur",
    "wound care without amputation",
    "diabetologist thrissur",
    "diabetes reversal kerala",
    "Dr Premlal",
    "sukrithi health",
  ],
  openGraph: {
    title:
      "Sukrithi Family Health Centre | Diabetic Care & Wound Care Without Amputation | Thrissur",
    description:
      "Expert diabetic care, diabetes reversal, wound care without amputation, and preventive health services in Thrissur, Kerala.",
    images: [DEFAULT_IMAGE],
    locale: "en_IN",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};
