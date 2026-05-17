import { Metadata } from "next";
import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import BelowFold from "@/app/_components/below-fold";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://codenaxa.in").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Hotel Booking, Restaurant & Clinic Website Development in Kerala | codenaxa",
  description:
    "codenaxa builds professional websites for small businesses in Kerala and India. Specialized in hotel booking systems, restaurant menu websites, clinic appointment scheduling, and e-commerce stores starting at ₹8,000.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Hotel booking website Kerala",
    "Restaurant online ordering India",
    "Clinic appointment system Kerala",
    "Real estate listing website India",
    "E-commerce store builder Kerala",
    "Salon booking system India",
    "Website cost for small business",
    "How to increase bookings online",
    "Online ordering system for restaurants",
    "Appointment system for clinics",
    "Best booking website for hotels",
  ],
  openGraph: {
    title: "Hotel Booking, Restaurant & Clinic Website Development in Kerala | codenaxa",
    description:
      "Professional websites for hotels, restaurants, clinics, and shops in Kerala. Custom booking systems, online orders, and e-commerce solutions started at ₹8,000.",
    url: `${siteUrl}/`,
    siteName: "codenaxa",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "codenaxa — Freelance Full Stack Developer Kannur Kerala",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Freelance Full Stack Developer in Kannur, Kerala | codenaxa",
    description:
      "MSME-registered freelance developer in Kannur, Kerala — building scalable web platforms and SaaS systems for clients in India, USA, UK, Canada, Australia, UAE, and Germany.",
    images: [`${siteUrl}/logo.png`],
    site: "@codenaxa",
    creator: "@codenaxa",
  },
};

// JSON-LD schema for homepage
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Hotel Booking, Restaurant & Clinic Website Development in Kerala | codenaxa",
  description:
    "codenaxa builds professional websites for small businesses in Kerala and India. Specialized in hotel booking, restaurant ordering, and clinic appointment systems.",
  inLanguage: "en-IN",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  },
  // Geo targeting — tells Google the primary service area
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".hero-description"],
  },
};

// FAQ schema — boosts rich results for international/India searches
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a website for my hotel, restaurant, or clinic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A website helps customers find you on Google, book online, and see your hours, location, and reviews. Most customers search online before calling. A website increases bookings by 30-40% on average. Basic websites start at ₹8,000.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a booking website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A booking system for hotels or clinics typically takes 3-4 weeks. This includes planning, development of the booking system, payment gateway integration, and staff training. You can start taking online bookings within a month.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a restaurant website with online ordering cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Restaurant online ordering websites cost ₹25,000-40,000. This includes digital menu, online order management, payment processing (UPI, cards), and an admin dashboard. You can start with basic features and add more later.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my old website to a new one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we migrate old websites without losing customers or search rankings. We transfer all content, photos, and products with zero downtime. The process takes 1-2 weeks and costs ₹5,000-10,000 depending on complexity.",
      },
    },
  ],
};

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-indigo-100 selection:text-indigo-900">
      {/* Inline page-level schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <BelowFold />
      </main>
    </div>
  );
}