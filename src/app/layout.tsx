import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/components/auth-provider';
import dynamic from 'next/dynamic';
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster));
const WhatsappFloat = dynamic(() => import('@/components/whatsapp-float'));

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in').replace(/\/$/, '');
const siteName = 'codenaxa web service and development ';
const defaultTitle = 'Freelance Full Stack Developer in Kannur | MSME Registered';
const defaultDescription =
  'codenaxa is an MSME-registered freelance full stack developer in Kannur, Kerala specializing in scalable web applications, SaaS platforms, secure backend systems, and performance-driven development.';
const ogImagePath = '/logo.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${defaultTitle} | codenaxa`,
    template: `%s | codenaxa`,
  },
  description: defaultDescription,
  applicationName: 'codenaxa',
  keywords: [
    'Freelance Web Developer Kannur',
    'Full Stack Developer Kerala',
    'Freelance Developer Kannur',
    'MSME Registered Freelancer Kerala',
    'React.js Developer Kerala',
    'Next.js Developer Kannur',
    'Node.js Developer India',
    'Freelance Full Stack Developer India',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'codenaxa', url: 'https://codenaxa.in' }],
  creator: 'codenaxa',
  publisher: 'codenaxa',
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: `${defaultTitle} | codenaxa`,
    description: defaultDescription,
    siteName: 'codenaxa',
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
    title: `${defaultTitle} | codenaxa`,
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

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      'url': siteUrl,
      'name': siteName,
      'alternateName': ['codenaxa'],
      'inLanguage': 'en-IN',
      'description': defaultDescription,
      'publisher': { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      'name': siteName,
      'url': siteUrl,
      'logo': `${siteUrl}/logo.png`,
      'image': `${siteUrl}${ogImagePath}`,
      'email': 'contact@codenaxa.in',
      'telephone': '+91 82816 57534',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+91 82816 57534',
          'contactType': 'sales',
          'areaServed': 'IN',
          'availableLanguage': ['en', 'ml'],
        },
      ],
      'areaServed': ['IN', 'Kerala'],
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
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      'name': 'codenaxa',
      'jobTitle': 'Freelance Full Stack Developer',
      'url': siteUrl,
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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@700,600,500,400&display=swap"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@700,600,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <AuthProvider>
          <ThemeProvider>
            {children}
            <WhatsappFloat />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
