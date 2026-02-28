import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';

const ServicesSection = dynamic(() => import('@/components/sections/services'));
const ProjectsSection = dynamic(() => import('@/components/sections/projects'));
const WorkPackages = dynamic(() => import('@/components/sections/work-packages'));
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'));
const FAQSection = dynamic(() => import('@/components/sections/faq'));
const ContactSection = dynamic(() => import('@/components/sections/contact'));

export const metadata: Metadata = {
  title: 'Freelance Full Stack Developer in Kannur',
  description:
    'codenaxa – MSME-registered freelance full stack developer building scalable web applications, SaaS platforms, and backend systems for startups and businesses across Kannur, Kerala, and India.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Freelance Full Stack Developer in Kannur | codenaxa',
    description:
      'MSME-registered freelance developer building scalable web applications, SaaS platforms, and backend systems for long-term growth.',
    url: '/',
    siteName: 'codenaxa',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'codenaxa logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Freelance Full Stack Developer in Kannur | codenaxa',
    description:
      'MSME-registered freelance developer building scalable web applications, SaaS platforms, and backend systems for long-term growth.',
    images: ['/logo.png'],
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
        <WorkPackages />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
