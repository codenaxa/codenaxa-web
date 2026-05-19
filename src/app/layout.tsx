import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeRegistry from '@/components/theme-registry';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LenisProvider from '@/components/lenis-provider';
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster));
const WhatsappFloat = dynamic(() => import('@/components/whatsapp-float'));

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in').replace(/\/$/, '');
const siteName = 'codenaxa';  // ✅ Fixed: removed trailing space, consistent short brand name
const defaultTitle = 'Hotel Booking, Restaurant & Clinic Website Development in Kerala';
const defaultDescription =
  'codenaxa builds custom hotel booking websites, restaurant menu websites, clinic appointment systems, and e-commerce stores for small businesses in Kerala and India. Professional, mobile-optimized web solutions starting at ₹8,000.';
const ogImageUrl = `${siteUrl}/logo.png`; // ✅ Fixed: absolute URL, not relative

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${defaultTitle} | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    // Industry Specific
    'Hotel booking website Kerala',
    'Restaurant online ordering system India',
    'Clinic appointment booking system',
    'Real estate listing website builder',
    'E-commerce store development Kerala',
    'Salon booking system India',
    'Custom websites for small business Kerala',
    // Local primary
    'Web Developer Kannur Kerala',
    'Full Stack Developer Kerala',
    'MSME Registered Web Agency Kerala',
    // Service specific
    'Hire Web Developer for Hotels',
    'Restaurant digital menu builder',
    'Best booking website for clinics',
    // International high-value markets
    'Affordable Web Developer for Small Business',
    'Remote Web Developer India',
    'Hire Full Stack Developer from Kerala',
    'Custom SaaS development for startups',
    'Enterprise web portal development',
    'High-performance React Next.js developer',
    'Dedicated remote developer India',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: `${defaultTitle} | ${siteName}`,
    description: defaultDescription,
    siteName: siteName, // ✅ Now matches schema name exactly
    images: [
      {
        url: ogImageUrl, // ✅ Absolute URL
        width: 512,
        height: 512,
        alt: 'codenaxa — Freelance Full Stack Developer Kannur Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${defaultTitle} | ${siteName}`,
    description: defaultDescription,
    images: [ogImageUrl], // ✅ Absolute URL
    site: '@codenaxa',
    creator: '@codenaxa',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      'url': siteUrl,
      'name': siteName, // ✅ Fixed: 'codenaxa' — matches og:site_name exactly
      'alternateName': ['codenaxa web service and development'],
      'inLanguage': 'en-IN',
      'description': defaultDescription,
      'publisher': { '@id': `${siteUrl}/#organization` },
      // ✅ Helps Google confidently identify and display the site name
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${siteUrl}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      'name': siteName, // ✅ Fixed: must match WebSite name
      'legalName': 'codenaxa web service and development',
      'url': siteUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': ogImageUrl,
        'width': 512,
        'height': 512,
      },
      'image': ogImageUrl,
      'email': 'contact@codenaxa.in',
      'telephone': '+91 82816 57534',
      'foundingLocation': 'Kannur, Kerala, India',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+91 82816 57534',
          'contactType': 'sales',
          'areaServed': ['IN', 'US', 'GB', 'CA', 'AU', 'AE', 'DE', 'SG'],
          'availableLanguage': ['en', 'ml'],
        },
      ],
      // ✅ Added international markets for geo targeting
      'areaServed': [
        { '@type': 'Country', 'name': 'India' },
        { '@type': 'Country', 'name': 'United States' },
        { '@type': 'Country', 'name': 'United Kingdom' },
        { '@type': 'Country', 'name': 'Canada' },
        { '@type': 'Country', 'name': 'Australia' },
        { '@type': 'Country', 'name': 'United Arab Emirates' },
        { '@type': 'Country', 'name': 'Germany' },
        { '@type': 'Country', 'name': 'Singapore' },
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Kannur',
        'addressRegion': 'Kerala',
        'addressCountry': 'IN',
      },
      // ✅ Added service offerings for rich results
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Small Business Web Solutions',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Hotel Booking Website',
              'description': 'Online booking system for hotels with payment processing',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Restaurant Menu & Order System',
              'description': 'Digital menu with online ordering for restaurants',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Clinic Appointment System',
              'description': 'Online appointment scheduling for clinics',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'E-Commerce Store Development',
              'description': 'Online store with shopping cart and inventory management',
            },
          },
        ],
      },
      'sameAs': [
        'https://github.com/codenaxa',
        'https://linkedin.com/in/codenaxa',
        'https://instagram.com/codenaxa',
        'https://x.com/codenaxa',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      'name': 'codenaxa',
      'jobTitle': 'Freelance Full Stack Developer',
      'url': siteUrl,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Kannur',
        'addressRegion': 'Kerala',
        'addressCountry': 'IN',
      },
      'sameAs': [
        'https://github.com/codenaxa',
        'https://linkedin.com/in/codenaxa',
        'https://instagram.com/codenaxa',
        'https://x.com/codenaxa',
      ],
      'worksFor': { '@id': `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#050505] text-white`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <ThemeRegistry>
          <ThemeProvider>
            <LenisProvider>
              {children}
              <SpeedInsights/>
              <WhatsappFloat />
              <Toaster />
            </LenisProvider>
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}