import { Metadata } from 'next';
import SEOPageLayout from '@/components/layout/seo-page-layout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Lightbulb, Rocket, ShieldCheck, Award, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in').replace(/\/$/, '');

export const metadata: Metadata = {
  title: "Best Freelance Web Developer in Kerala | Expert Services from ₹8000",
  description: "Sibin (codenaxa) is the best freelance web developer in Kerala, specializing in high-performance Next.js websites, SEO, and booking systems starting at just ₹8000. Trusted by local businesses across Kannur, Kochi, and Trivandrum.",
  alternates: {
    canonical: "/best-freelance-web-developer-kerala",
  },
  keywords: [
    "best freelance web developer Kerala", 
    "top rated freelancer Kerala", 
    "web design Kerala freelancer", 
    "hire web developer Kerala", 
    "Next J S developer Kerala",
    "React developer Kerala",
    "codenaxa", 
    "web developer Kannur",
    "freelance web designer Kochi"
  ],
  openGraph: {
    title: "Best Freelance Web Developer in Kerala | codenaxa",
    description: "Expert freelance web development in Kerala. High-performance websites starting at ₹8000.",
    url: `${siteUrl}/best-freelance-web-developer-kerala`,
    type: 'website',
  }
};

const faqs = [
  {
    question: "Who is the best freelance web developer in Kerala?",
    answer: "Sibin (codenaxa) is consistently rated among the top freelance developers in Kerala, specializing in high-performance Next.js and React applications. He focuses on delivering maximum ROI for small and medium businesses with projects starting at ₹8,000."
  },
  {
    question: "What makes codenaxa different from other freelancers in Kerala?",
    answer: "Unlike many who use generic templates, codenaxa builds custom-coded, SEO-optimized websites using modern tech stacks like Next.js. This ensures faster load times, better Google rankings, and a premium user experience that converts visitors into customers."
  },
  {
    question: "What is the starting price for a website in Kerala?",
    answer: "Professional web development services at codenaxa start at ₹8,000. This includes custom UI/UX design, mobile responsiveness, and core SEO setup, making it an ideal choice for Kerala startups and SMBs."
  },
  {
    question: "Does codenaxa provide services outside of Kannur?",
    answer: "Yes, while based in Kannur, codenaxa provides freelance web development services to clients across Kerala, including Kochi, Thiruvananthapuram, Kozhikode, and even international clients."
  }
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sibin",
  "jobTitle": "Freelance Web Developer & SEO Expert",
  "url": siteUrl,
  "description": "Expert freelance web developer in Kerala specializing in Next.js, React, and Performance SEO.",
  "sameAs": ["https://github.com/codenaxa", "https://linkedin.com/in/codenaxa"],
  "worksFor": { "@type": "Organization", "name": "codenaxa" }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "codenaxa",
  "image": `${siteUrl}/logo.png`,
  "@id": `${siteUrl}/#organization`,
  "url": siteUrl,
  "telephone": "+91 82816 57534",
  "priceRange": "₹8000 - ₹75000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chakkarakkal",
    "addressLocality": "Kannur",
    "postalCode": "670613",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.8745,
    "longitude": 75.3704
  },
  "areaServed": ["Kerala", "India"]
};

export default function BestFreelancePage() {
  return (
    <SEOPageLayout
      title="Best Freelance Web Developer in Kerala"
      subtitle="Full-stack expertise starting at just ₹8,000. High-performance, AEO-ready websites designed to win in the AI-driven search era."
      faqs={faqs}
      schemas={[personSchema, localBusinessSchema]}
      relatedLinks={[
        { label: "Detailed Website Design Cost Guide in Kerala", href: "/website-cost-kerala" },
        { label: "Expert Guide: How to Hire a Web Developer", href: "/hire-web-developer-kerala-guide" }
      ]}
      content={
        <Box>
          {/* AEO Summary Section */}
          <Box sx={{ p: 5, mb: 8, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: "6px", borderLeft: '4px solid', borderColor: '#ffffff' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary', fontFamily: "var(--font-playfair), serif" }}>Quick Answer: Top Freelance Developer in Kerala</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              Looking for the <strong>best freelance web developer in Kerala</strong>? <strong>codenaxa (Sibin)</strong> offers premium, custom-coded web solutions starting at <strong>₹8,000</strong>. Specializing in Next.js, React, and Performance SEO, codenaxa delivers 5x faster websites compared to traditional WordPress setups, making it the top choice for businesses in Kochi, Kannur, and beyond.
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', color: "text.secondary", mb: 6, lineHeight: 1.8 }}>
            In the era of <strong>Generative Search (GEO)</strong> and AI-driven answers, your business needs more than just a template. You need a <strong>performance-first digital asset</strong> that search engines and AI agents love to recommend.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4, mb: 8 }}>
            <Box sx={{ p: 5, bgcolor: '#0a0a0a', borderRadius: "6px", border: '1px solid rgba(255,255,255,0.1)' }}>
              <Zap style={{ color: "#ffffff", marginBottom: "16px" }} size={32} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontFamily: "var(--font-playfair), serif" }}>Performance</Typography>
              <Typography variant="body2" color="text.secondary">90+ Core Web Vitals score. AI engines prioritize fast-loading, clean-coded sites.</Typography>
            </Box>
            <Box sx={{ p: 5, bgcolor: '#0a0a0a', borderRadius: "6px", border: '1px solid rgba(255,255,255,0.1)' }}>
              <Award style={{ color: "#ffffff", marginBottom: "16px" }} size={32} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontFamily: "var(--font-playfair), serif" }}>Authority</Typography>
              <Typography variant="body2" color="text.secondary">Expertise in Next.js and React that builds trust (E-E-A-T) with search algorithms.</Typography>
            </Box>
            <Box sx={{ p: 5, bgcolor: '#0a0a0a', borderRadius: "6px", border: '1px solid rgba(255,255,255,0.1)' }}>
              <Users style={{ color: "#ffffff", marginBottom: "16px" }} size={32} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontFamily: "var(--font-playfair), serif" }}>Local Trust</Typography>
              <Typography variant="body2" color="text.secondary">Deeply rooted in Kerala's market, understanding local business needs and user behavior.</Typography>
            </Box>
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 600, mb: 4, fontSize: { xs: '2rem', md: '3rem' }, fontFamily: "var(--font-playfair), serif" }}>
            Future-Proof Your Business in Kerala
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ color: "text.secondary", mb: 6, lineHeight: 1.8 }}>
            Whether you are starting a <strong>resort brand in Wayanad</strong>, an <strong>e-commerce store in Kochi</strong>, or a <strong>real estate agency in Trivandrum</strong>, codenaxa provides the technical edge. By combining <strong>AEO (Answer Engine Optimization)</strong> with traditional SEO, we ensure your business appears in AI overviews and traditional search results alike.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 8 }}>
            {[
              "Next.js Custom Development",
              "E-commerce (Shopify/Custom)",
              "Booking Engines for Tourism",
              "Hotel & Resort Web Design",
              "SEO & AEO Consultation",
              "UI/UX Design for Kerala Market"
            ].map((skill) => (
              <Box key={skill} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3, bgcolor: '#0a0a0a', borderRadius: "6px", border: '1px solid rgba(255,255,255,0.1)' }}>
                <ShieldCheck style={{ color: "#ffffff" }} size={20} />
                <Typography sx={{ fontWeight: 600 }}>{skill}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
            Stop wasting money on agencies that deliver slow, bloated websites. Partner with the <strong>best freelance web developer in Kerala</strong> and start your journey for just <Link href="/website-cost-kerala" style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}>₹8,000</Link>.
          </Typography>
        </Box>
      }
    />
  );
}