import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import LocalSEOSection from '@/components/sections/local-seo';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import TestimonialsSection from '@/components/sections/testimonials';
import FAQSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <LocalSEOSection />
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
