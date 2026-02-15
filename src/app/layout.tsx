// app/layout.tsx
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Web Development Company in Kannur | Full Stack Experts Kerala | codenaxa',
  description:
    'codenaxa is an MSME-registered web development company in Kannur, Kerala specializing in scalable web applications, secure backend systems, and performance-driven full stack development.',
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
  authors: [{ name: 'codenaxa', url: 'https://codenaxa.in' }],
  creator: 'codenaxa',
  publisher: 'codenaxa',
  metadataBase: new URL('https://codenaxa.in'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codenaxa.in',
    title: 'Web Development Company in Kannur | Full Stack Experts Kerala | codenaxa',
    description:
      'codenaxa is an MSME-registered web development company in Kannur, Kerala specializing in scalable web applications, secure backend systems, and performance-driven full stack development.',
    siteName: 'codenaxa',
    images: [
      {
        url: '/og-image.png', // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: 'codenaxa Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Kannur | Full Stack Experts Kerala | codenaxa',
    description:
      'codenaxa is an MSME-registered web development company in Kannur, Kerala specializing in scalable web applications, secure backend systems, and performance-driven full stack development.',
    images: ['/og-image.png'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@700,600,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
