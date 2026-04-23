import type { Metadata } from "next";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

const SITE_NAME = "Arise Medical Centre";
const SITE_URL = "https://arisehealth.life/v1";
const DEFAULT_IMAGE = "/v1/images/og-default.jpg";

// Structured data for the medical practice
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Arise Medical Centre",
  alternateName: "Arise Health",
  description: "Specialized diabetes reversal and wound care clinic in Thrissur, Kerala. Evidence-based treatment by Dr. K S Premlal with 17+ years experience.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/doctor/dr-premlal.jpg`,
  telephone: "+91-85920-20242",
  email: "info@arisehealth.life",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Villadom",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    postalCode: "680631",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.5276",
    longitude: "76.2144"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00"
    }
  ],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "387",
    bestRating: "5",
    worstRating: "1"
  },
  medicalSpecialty: [
    "Diabetology",
    "Wound Care",
    "Preventive Medicine",
    "Palliative Care"
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Diabetes Reversal Program",
      description: "Evidence-based program to reverse Type 2 diabetes through lifestyle intervention"
    },
    {
      "@type": "MedicalProcedure",
      name: "Diabetic Wound Care",
      description: "Advanced wound care to prevent amputation in diabetic patients"
    }
  ],
  sameAs: [
    "https://www.google.com/maps/place/Arise+Medical+Centre"
  ]
};

// Physician schema for Dr. Premlal
export const PHYSICIAN_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/#physician`,
  name: "Dr. K S Premlal",
  givenName: "Premlal",
  familyName: "K S",
  honorificPrefix: "Dr.",
  jobTitle: "Diabetologist & Wound Care Specialist",
  description: "Senior diabetologist with 17+ years experience specializing in diabetes reversal and limb-saving wound care",
  image: `${SITE_URL}/images/doctor/dr-premlal.jpg`,
  telephone: "+91-85920-20242",
  medicalSpecialty: ["Diabetology", "Wound Care", "Community Medicine"],
  qualification: [
    "MBBS",
    "MD (Community Medicine)",
    "PGDFM",
    "CCEBDM (Certificate Course in Evidence Based Diabetes Management)",
    "BCCPM (WHO Certified Palliative Care)",
    "MSc Counselling"
  ],
  memberOf: {
    "@type": "Organization",
    name: "Tamil Nadu Medical Council",
    identifier: "TMC 85605"
  },
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Arise Medical Centre"
  },
  knowsLanguage: ["English", "Malayalam", "Hindi", "Tamil"]
};

// FAQ Schema for AEO (Answer Engine Optimization)
export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Type 2 diabetes be reversed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Type 2 diabetes can often be reversed through intensive lifestyle intervention. At Arise Medical Centre, we have helped patients reduce their HbA1c from 9.2 to 6.5 in just 3 months using our evidence-based reversal program combining diet, exercise, and medication optimization."
      }
    },
    {
      "@type": "Question",
      name: "What is the cost of diabetes treatment at Arise Medical Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consultation fees at Arise Medical Centre start from ₹300. The total cost depends on the treatment plan, which may include the diabetes reversal program, medication, and follow-up visits. We accept cash and UPI payments."
      }
    },
    {
      "@type": "Question",
      name: "Can diabetic wounds heal without amputation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many diabetic wounds can heal without amputation through advanced wound care techniques. Dr. Premlal, trained at CMC Vellore, specializes in limb-saving procedures and has helped thousands of patients avoid amputation."
      }
    },
    {
      "@type": "Question",
      name: "Who is the best diabetologist in Thrissur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. K S Premlal at Arise Medical Centre is a highly rated diabetologist in Thrissur with 17+ years of experience, a 4.9-star Google rating from 387+ reviews, and specialized training in diabetes reversal and wound care."
      }
    },
    {
      "@type": "Question",
      name: "What is HbA1c and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HbA1c (glycated hemoglobin) measures your average blood sugar over 2-3 months. A normal HbA1c is below 5.7%, prediabetes is 5.7-6.4%, and diabetes is 6.5% or higher. Our goal is to help patients achieve HbA1c below 7% to prevent complications."
      }
    },
    {
      "@type": "Question",
      name: "What are the clinic timings for Arise Medical Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arise Medical Centre is open Monday to Saturday from 7:00 AM to 7:00 PM. We are located in Villadom, Thrissur, Kerala 680631. You can book appointments by calling +91-85920-20242 or via WhatsApp."
      }
    }
  ]
};

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  image,
  canonical,
}: PageMetadataOptions): Metadata {
  return {
    title: title
      ? { default: title, template: `%s | ${SITE_NAME}` }
      : SITE_NAME,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonical || "/",
    },
    openGraph: {
      title: title ?? SITE_NAME,
      description: description ?? "",
      images: [image ?? DEFAULT_IMAGE],
      locale: "en_IN",
      type: "website",
      siteName: SITE_NAME,
      url: SITE_URL,
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE_NAME,
      description: description ?? "",
      images: [image ?? DEFAULT_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Replace with actual code
    },
  };
}

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur, Kerala",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Proven diabetes reversal (HbA1c 9.2 to 6.5 in 3 months) and CMC-accredited wound care without amputation in Thrissur, Kerala. 17+ years of evidence-based care by Dr. K S Premlal. 4.9-star rating from 387+ patients.",
  keywords: [
    "diabetic care thrissur",
    "wound care without amputation",
    "diabetologist thrissur",
    "diabetes reversal kerala",
    "diabetic foot care thrissur",
    "best diabetes doctor thrissur",
    "Dr Premlal",
    "arise health",
    "diabetes reversal program india",
    "HbA1c reduction",
  ],
  openGraph: {
    title:
      "Arise Medical Centre | Diabetes Reversal & Wound Care Without Amputation | Thrissur",
    description:
      "Proven HbA1c reduction in 3 months. CMC-accredited wound care saving limbs. 10,000+ patients trust Dr. K S Premlal in Thrissur, Kerala.",
    images: [DEFAULT_IMAGE],
    locale: "en_IN",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};
