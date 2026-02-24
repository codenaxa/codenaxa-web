import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import WhatsappFloat from '@/components/whatsapp-float';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in').replace(/\/$/, '');
const siteName = 'codenaxa';
const defaultTitle = 'Freelance Full Stack Developer in Kannur | MSME Registered';
const defaultDescription =
  'codenaxa is an MSME-registered freelance full stack developer in Kannur, Kerala specializing in scalable web applications, SaaS platforms, secure backend systems, and performance-driven development.';
const ogImagePath = '/logo.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${defaultTitle} | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    'Freelance Web Developer Kannur',
    'Full Stack Developer Kerala',
    'Freelance Developer Kannur',
    'MSME Registered Freelancer Kerala',
    'React JS Developer Kerala',
    'Next JS Developer Kannur',
    'Node JS Developer India',
    'Freelance Full Stack Developer India',
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
    locale: 'en_IN',
    url: siteUrl,
    title: `${defaultTitle} | ${siteName}`,
    description: defaultDescription,
    siteName,
    images: [
      {
        url: ogImagePath,
        width: 512,
        height: 512,
        alt: 'codenaxa logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${defaultTitle} | ${siteName}`,
    description: defaultDescription,
    images: [ogImagePath],
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
  telephone: '+91 82816 57534',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91 82816 57534',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'ml'],
    },
  ],
  areaServed: ['IN', 'Kerala'],
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'codenaxa',
  jobTitle: 'Freelance Full Stack Developer',
  url: siteUrl,
  sameAs: [
    'https://github.com/codenaxa',
    'https://linkedin.com/in/codenaxa',
    'https://instagram.com/codenaxa',
    'https://x.com/codenaxa',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'codenaxa',
  },
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
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@700,600,500,400&display=swap"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <WhatsappFloat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
