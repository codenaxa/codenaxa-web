"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Plus } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const faqs = [
  {
    question: "Do I need a website for my hotel, restaurant, or clinic?",
    answer:
      "Yes. A website helps customers find you on Google, book online, and see your hours, location, and reviews. Most customers search online before calling. A website increases bookings by 30-40% on average. Basic websites start at ₹8,000.",
  },
  {
    question: "How long does it take to build a booking website?",
    answer:
      "A booking system for hotels or clinics typically takes 3-4 weeks. Week 1: planning. Weeks 2-3: development. Week 4: testing and training. You can start taking online bookings within a month.",
  },
  {
    question: "How much does a restaurant website with online ordering cost?",
    answer:
      "Restaurant online ordering websites cost ₹25,000-40,000. This includes digital menu, online order booking, payment processing, and admin dashboard. You can start with basic features (₹25K) and add more later.",
  },
  {
    question: "Can you transfer my old website to a new one?",
    answer:
      "Yes, we migrate your old website without losing customers or rankings (zero downtime). We transfer all content, photos, and products. Takes 1-2 weeks and costs ₹5,000-10,000 depending on complexity.",
  },
  {
    question: "How to increase restaurant bookings online?",
    answer:
      "(1) Build a booking website, (2) add digital menu with photos, (3) enable online payment, (4) show customer reviews, (5) list on Google My Business, (6) send automated reminders. An online booking system increases reservations by 40-60%.",
  },
  {
    question: "What features should a clinic website have?",
    answer:
      "A clinic website should have: (1) Doctor information, (2) Online appointment booking, (3) Services listed, (4) Patient reviews, (5) Contact & location map, (6) Emergency number. An appointment system reduces no-shows by 60% and saves 5 hours per week on calls.",
  },
];
export default function FAQSection() {
  const muiTheme = useMuiTheme();

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="faq"
        component="section"
        aria-labelledby="faq-heading"
        sx={{
          py: { xs: 16, md: 24 },
          bgcolor: "#050505",
          borderTop: `1px solid rgba(255,255,255,0.05)`,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                id="faq-heading"
                sx={{
                  fontWeight: 600,
                  mb: 5,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Common <Box component="span" sx={{ color: "secondary.main" }}>Inquiries</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
               Common questions about building websites for hotels, clinics, and small businesses in Kerala
              </Typography>
            </m.div>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, index) => {
              const headingId = `faq-header-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Accordion
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
                      id={headingId}
                      aria-controls={panelId}
                      expandIcon={<Plus size={20} style={{ color: muiTheme.palette.secondary.main }} />}
                      sx={{ px: 4, py: 1 }}
                    >
                      <Typography component="h3" sx={{ fontWeight: 600, fontSize: "1.25rem", fontFamily: "var(--font-playfair), serif" }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails id={panelId} sx={{ px: 4, pb: 4 }}>
                      <Typography sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </m.div>
              );
            })}
          </Box>
        </Container>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Box>
    </LazyMotion>
  );
}
