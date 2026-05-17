"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Plus } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";
import Link from "next/link";

interface SEOPageLayoutProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  faqs: Array<{ question: string; answer: string }>;
  schemas: any[];
  relatedLinks?: Array<{ label: string; href: string }>;
}

export default function SEOPageLayout({ title, subtitle, content, faqs, schemas, relatedLinks }: SEOPageLayoutProps) {
  const muiTheme = useMuiTheme();

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-indigo-100 selection:text-indigo-900">
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
              }))
            })
          }}
        />
      )}
      <Header />
      <main id="main-content" className="flex-1">
        <Box sx={{ py: { xs: 12, md: 16 }, borderBottom: `1px solid ${muiTheme.palette.divider}` }}>
          <Container maxWidth="lg">
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontFamily: "var(--font-display), var(--font-manrope), sans-serif",
                    maxWidth: "900px"
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    variant: "body1",
                    color: "text.secondary",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 400,
                    mb: 6,
                    maxWidth: "700px",
                    lineHeight: 1.6
                  }}
                >
                  {subtitle}
                </Typography>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none text-text-secondary"
              >
                <Box key="page-content-wrapper">
                  {content}
                </Box>

                {relatedLinks && relatedLinks.length > 0 && (
                  <Box key="related-links-section" sx={{ mt: 8, p: 3, bgcolor: alpha(muiTheme.palette.secondary.main, 0.05), borderRadius: 3, border: '1px solid', borderColor: alpha(muiTheme.palette.secondary.main, 0.1) }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.1rem' }}>Interested in more?</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {relatedLinks.map((link, idx) => (
                        <Box component="li" key={idx}>
                          <Link href={link.href} className="text-secondary-main hover:underline flex items-center gap-2">
                            <span>→</span> {link.label}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </m.div>

              {faqs.length > 0 && (
                <Box sx={{ mt: 12 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      mb: 6,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontFamily: "var(--font-display), var(--font-manrope), sans-serif",
                    }}
                  >
                    Frequently Asked <Box component="span" sx={{ color: "secondary.main" }}>Questions</Box>
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {faqs.map((faq, index) => (
                      <Accordion
                        key={index}
                        sx={{
                          bgcolor: alpha(muiTheme.palette.background.paper, 0.4),
                          backgroundImage: "none",
                          borderRadius: "16px !important",
                          border: `1px solid ${muiTheme.palette.divider}`,
                          boxShadow: "none",
                          "&:before": { display: "none" },
                          "&.Mui-expanded": {
                            borderColor: "secondary.main",
                            bgcolor: alpha(muiTheme.palette.secondary.main, 0.02),
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<Plus size={20} style={{ color: muiTheme.palette.secondary.main }} />}
                          sx={{ px: 4, py: 1 }}
                        >
                          <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.1rem", fontFamily: "var(--font-display), var(--font-manrope), sans-serif" }}>
                            {faq.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 4, pb: 4 }}>
                          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}>
                            {faq.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                </Box>
              )}
            </LazyMotion>
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}
