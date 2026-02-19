import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import TestimonialsSection from '@/components/sections/testimonials';
import FAQSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Web Development Company in Kannur',
  description:
    'codenaxa builds scalable web applications, SaaS platforms, and backend systems for startups and businesses across Kannur, Kerala, and India.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Development Company in Kannur | codenaxa',
    description:
      'Scalable web applications, SaaS platforms, and backend systems designed for long-term growth.',
    url: '/',
    siteName: 'codenaxa',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'codenaxa web development services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Kannur | codenaxa',
    description:
      'Scalable web applications, SaaS platforms, and backend systems designed for long-term growth.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
