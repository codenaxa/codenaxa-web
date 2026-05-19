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
        <Box sx={{ py: { xs: 16, md: 24 }, bgcolor: "#050505", borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
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
                    fontWeight: 600,
                    mb: 4,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontFamily: "var(--font-playfair), serif",
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
                  <Box key="related-links-section" sx={{ mt: 8, p: 4, bgcolor: "rgba(255,255,255,0.02)", borderRadius: "6px", border: '1px solid', borderColor: "rgba(255,255,255,0.1)" }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: "var(--font-playfair), serif", mb: 2, fontSize: '1.25rem' }}>Interested in more?</Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {relatedLinks.map((link, idx) => (
                        <Box component="li" key={idx}>
                          <Link href={link.href} style={{ color: muiTheme.palette.text.primary, textDecoration: 'none' }} className="hover:underline flex items-center gap-2">
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
                      fontWeight: 600,
                      mb: 6,
                      fontSize: { xs: "2rem", md: "3rem" },
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    Frequently Asked <Box component="span" sx={{ color: "secondary.main" }}>Questions</Box>
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {faqs.map((faq, index) => (
                      <Accordion
                        key={index}
                        sx={{
                          bgcolor: "transparent",
                          backgroundImage: "none",
                          borderRadius: "0 !important",
                          borderBottom: `1px solid rgba(255,255,255,0.1)`,
                          boxShadow: "none",
                          "&:before": { display: "none" },
                          "&.Mui-expanded": {
                            bgcolor: "rgba(255,255,255,0.02)",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<Plus size={20} style={{ color: muiTheme.palette.secondary.main }} />}
                          sx={{ px: 4, py: 1 }}
                        >
                          <Typography component="h3" sx={{ fontWeight: 600, fontSize: "1.25rem", fontFamily: "var(--font-playfair), serif" }}>
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
