import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in';
const siteName = 'codenaxa';
const defaultTitle = 'Web Development Company in Kannur | Full Stack Experts Kerala';
const defaultDescription =
  'codenaxa is an MSME-registered web development company in Kannur, Kerala specializing in scalable web applications, secure backend systems, and performance-driven full stack development.';
const ogImagePath = '/og-image.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${defaultTitle} | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    'Web Development Company Kannur',
    'Full Stack Developer Kerala',
    'Web Design Kannur',
    'Software Company Kerala',
    'MSME Registered Web Development',
    'React JS Developer Kerala',
    'Next JS Development Company',
    'Node JS Developer India',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'codenaxa', url: 'https://codenaxa.in' }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${defaultTitle} | ${siteName}`,
    description: defaultDescription,
    siteName,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: 'codenaxa Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${defaultTitle} | ${siteName}`,
    description: defaultDescription,
    images: [ogImagePath],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'codenaxa',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}${ogImagePath}`,
  email: 'contact@codenaxa.in',
  areaServed: ['IN', 'Kannur', 'Kerala'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kannur',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://github.com/codenaxa',
    'https://linkedin.com/in/codenaxa',
    'https://instagram.com/codenaxa',
    'https://x.com/codenaxa',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  inLanguage: 'en-IN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//api.fontshare.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@700,600,500,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <a href="#main-content" className="skip-link hidden">
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
