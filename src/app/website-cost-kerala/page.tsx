import { Metadata } from 'next';
import SEOPageLayout from '@/components/layout/seo-page-layout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IndianRupee, ShieldCheck, Zap, Calculator, HelpingHand, MousePointerClick } from 'lucide-react';
import Link from 'next/link';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://codenaxa.in').replace(/\/$/, '');

export const metadata: Metadata = {
  title: "Website Design Cost in Kerala 2026 | Price Guide From ₹8,000",
  description: "Get a clear breakdown of web design and development costs in Kerala for 2026. From basic portfolio sites starting at ₹8,000 to custom e-commerce and booking systems.",
  alternates: {
    canonical: "/website-cost-kerala",
  },
  keywords: [
    "website design cost Kerala", 
    "web development price Kerala", 
    "low cost web design Kerala",
    "eCommerce website cost Kerala", 
    "codenaxa pricing", 
    "budget web design Kerala",
    "Kannur web design price"
  ],
  openGraph: {
    title: "Website Cost Kerala: 2026 Pricing Guide | codenaxa",
    description: "Transparent and affordable web development prices in Kerala. From ₹8,000 with premium quality.",
    url: `${siteUrl}/website-cost-kerala`,
    type: 'article',
  }
};

const pricingData = [
  { type: "Basic Business Website", cost: "₹8,000 – ₹15,000", idealFor: "Small shops, portfolios, clinics" },
  { type: "Professional Business Site", cost: "₹18,000 – ₹35,000", idealFor: "SMEs, coaching, resorts" },
  { type: "eCommerce Online Store", cost: "₹28,000 – ₹55,000", idealFor: "Fashion shops, grocery, delivery" },
  { type: "Booking / Appointment Systems", cost: "₹38,000 – ₹78,000", idealFor: "Resorts, hotels, ayurvedic centers" },
  { type: "Custom Software Application", cost: "₹85,000+", idealFor: "SaaS startups, ERP systems" },
];

const faqs = [
  {
    question: "How much does a basic business website cost in Kerala?",
    answer: "A responsive business website typically starts between ₹8,000 to ₹15,000 in Kerala. At codenaxa, even our base package includes premium Next.js tech stack, lighting-fast performance, and foundational SEO."
  },
  {
    question: "What items are included in your website design cost?",
    answer: "Our standard pricing covers: Custom UI/UX design, mobile responsiveness, fast-loading clean code (Next.js), basic SEO, domain & hosting setup assistance, and post-launch support."
  },
  {
    question: "Why hire a freelancer for low cost web design in Kerala?",
    answer: "Freelancers like codenaxa offer 40-60% lower pricing than agencies because of low overheads, while providing direct communication and cutting-edge technology like React and Next.js."
  },
  {
    question: "How do custom features affect web development price in Kerala?",
    answer: "Factors like payment gateway integration, advanced booking systems, and custom database development will increase the cost. Custom projects at codenaxa are quoted transparently based on complexity."
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "codenaxa Pricing Guide",
  "image": `${siteUrl}/logo.png`,
  "url": `${siteUrl}/website-cost-kerala`,
  "priceRange": "₹8000 - ₹85000",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kannur",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  }
};

export default function WebsiteCostPage() {
  return (
    <SEOPageLayout
      title="Website Cost in Kerala: 2026 Price Guide"
      subtitle="Clear and competitive website design prices for businesses in Kerala. Start your digital journey with codenaxa premium quality from just ₹8,000."
      faqs={faqs}
      schemas={[localBusinessSchema]}
      relatedLinks={[
        { label: "Check out the Best Freelance Web Developer in Kerala", href: "/best-freelance-web-developer-kerala" },
        { label: "Hire Guide: How to Find the Right Developer for You", href: "/hire-web-developer-kerala-guide" }
      ]}
      content={
        <Box>
           {/* AEO Summary Box */}
          <Box sx={{ p: 5, mb: 10, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: "6px", borderLeft: '4px solid', borderColor: '#ffffff', borderRight: '1px solid', borderTop: '1px solid', borderBottom: '1px solid', borderTopColor: 'rgba(255,255,255,0.1)', borderRightColor: 'rgba(255,255,255,0.1)', borderBottomColor: 'rgba(255,255,255,0.1)' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 2, fontFamily: "var(--font-playfair), serif" }}>
              <Calculator style={{ color: "#ffffff" }} /> Quick Summary: How much is a website in Kerala?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Professional website design in Kerala starts from <strong>₹8,000</strong> for a basic site and can go up to <strong>₹75,000+</strong> for custom eCommerce or booking systems. At <strong>codenaxa</strong>, we help you launch a high-performance site that outranks competitors and converts visitors for half the cost of an agency.
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', color: "text.secondary", mb: 8, lineHeight: 1.8 }}>
            Whether you are a startup in Kochi or a local clinic in Kannur, we believe in <strong>transparent pricing</strong>. Our cost structure is designed to be affordable for the Kerala market without compromising on premium tech standards.
          </Typography>

          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2, fontFamily: "var(--font-playfair), serif" }}>
            <IndianRupee style={{ color: "#ffffff" }} /> Estimated 2026 Price Breakdown
          </Typography>

          <TableContainer component={Paper} sx={{ mb: 10, bgcolor: "#0a0a0a", border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none', borderRadius: "6px", overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800, fontSize: '1.1rem' }}>Website Category</TableCell>
                  <TableCell sx={{ fontWeight: 800, fontSize: '1.1rem' }}>Starting From</TableCell>
                  <TableCell sx={{ fontWeight: 800, fontSize: '1.1rem' }}>Ideal Use Case</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pricingData.map((row) => (
                  <TableRow key={row.type} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>{row.type}</TableCell>
                    <TableCell sx={{ color: 'secondary.main', fontWeight: 800 }}>{row.cost}</TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{row.idealFor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h3" sx={{ fontWeight: 600, mb: 4, fontSize: { xs: '1.8rem', md: '2.5rem' }, fontFamily: "var(--font-playfair), serif" }}>
            What determines the web development price in Kerala?
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 10 }}>
            {[
              { icon: <Zap />, title: "Technology Stack", text: "Custom Next.js/React builds cost more than generic templates but provide 5x better performance." },
              { icon: <MousePointerClick />, title: "Functionality", text: "Custom filters, booking calendars, and payment gateways add to the overall development time." },
              { icon: <HelpingHand />, title: "Maintenance", text: "Long-term support and hosting renewals should be considered in your budget planning." },
              { icon: <ShieldCheck />, title: "SEO Requirements", text: "Advanced AEO and GEO optimization for modern search engines are included in our premium plans." }
            ].map((feature, idx) => (
              <Box key={idx} sx={{ p: 5, bgcolor: '#0a0a0a', borderRadius: "6px", border: '1px solid rgba(255,255,255,0.1)' }}>
                <Box sx={{ color: '#ffffff', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontFamily: "var(--font-playfair), serif" }}>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{feature.text}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: "text.secondary", lineHeight: 1.8, mb: 4 }}>
            Stop guessing your budget. Get a custom quote for the <Link href="/best-freelance-web-developer-kerala" style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}>best freelance web developer in Kerala</Link> and launch your project with a reliable partner.
          </Typography>
        </Box>
      }
    />
  );
}