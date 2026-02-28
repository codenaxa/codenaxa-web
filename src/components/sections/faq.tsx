"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const faqs = [
  {
    question: "Is Codenaxa a registered business?",
    answer:
      "Yes. Codenaxa is officially registered as an MSME business in India. Projects are handled with structured agreements and GST invoicing.",
  },
  {
    question: "Do you work alone or with a team?",
    answer:
      "Codenaxa is operated by a freelance full-stack developer. All core development work is handled personally to ensure technical consistency and accountability.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I work primarily with React, Next.js, Node.js, Django, and modern database systems. The stack is selected based on project requirements and scalability needs.",
  },
  {
    question: "How can I start a project?",
    answer:
      "You can directly initiate a conversation via WhatsApp. After understanding your requirements, I provide a structured proposal and project roadmap.",
  },
  {
    question: "Do you work with clients outside Kerala or India?",
    answer: "Yes. Projects are handled remotely and I work with clients across India and internationally.",
  },
];

export default function FAQSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="faq"
      component="section"
      aria-labelledby="faq-heading"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "background.default",
        borderTop: `1px solid ${muiTheme.palette.divider}`,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              id="faq-heading"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2.25rem", md: "3rem" },
                fontFamily: "Satoshi, sans-serif",
              }}
            >
              Common <Box component="span" sx={{ color: "secondary.main" }}>Inquiries</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
              Frequently asked questions about codenaxa and our web development services.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, index) => {
            const headingId = `faq-header-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion
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
                    id={headingId}
                    aria-controls={panelId}
                    expandIcon={<Plus size={20} style={{ color: muiTheme.palette.secondary.main }} />}
                    sx={{ px: 4, py: 1 }}
                  >
                    <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.1rem", fontFamily: "Satoshi" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails id={panelId} sx={{ px: 4, pb: 4 }}>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
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
  );
}