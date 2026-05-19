"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Code, ShieldCheck, Zap, Layout } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const keyPoints = [
  {
    icon: <Code size={24} aria-hidden="true" />,
    title: "Maintainable Code",
    description:
      "Projects are built with structured architecture and readable code practices for easy future scaling.",
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: "Security-First Design",
    description:
      "Authentication, data protection, and secure backend practices are integrated directly from day one.",
  },
  {
    icon: <Zap size={24} aria-hidden="true" />,
    title: "Performance Focus",
    description:
      "Fast-loading interfaces, optimized APIs, and efficient databases ensure a smooth user experience.",
  },
  {
    icon: <Layout size={24} aria-hidden="true" />,
    title: "Scalable Systems",
    description:
      "Websites are strategically structured to handle increasing traffic, new features, and business growth.",
  },
];

export default function AboutSection() {
  const muiTheme = useMuiTheme();

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="about"
        component="section"
        aria-labelledby="about-heading"
        sx={{
          py: { xs: 16, md: 24 },
          position: "relative",
          background: "#0a0a0a",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="caption"
                  component="p"
                  sx={{
                    fontWeight: 800,
                    color: "secondary.main",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    display: "block",
                    mb: 3,
                  }}
                >
                  About Codenaxa
                </Typography>

                <Typography
                  variant="h2"
                  id="about-heading"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                    fontFamily: "var(--font-playfair), serif",
                    lineHeight: 1.1,
                    mb: 4,
                  }}
                >
                  Specialized Web Solutions for{" "}
                  <Box component="span" sx={{ color: "secondary.main" }}>
                    Small Businesses in Kerala
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    mb: 3,
                    fontWeight: 500,
                  }}
                >
                  Codenaxa builds custom websites and booking systems for hotels, restaurants, clinics, and small businesses across Kerala and India. Every website includes online booking, mobile optimization, payment processing, and admin dashboards. Projects are delivered within 2-6 weeks starting at ₹8,000. All work is personally handled - from planning to deployment and staff training - ensuring your business gets exactly what you need.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    fontWeight: 500,
                  }}
                >
                  Codenaxa is officially registered as an MSME business in India, providing structured agreements, GST
                  invoicing, and transparent project execution - combining freelancer flexibility with professional
                  reliability and accountability.
                </Typography>
              </m.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={3}>
                {keyPoints.map((point, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          p: { xs: 4, lg: 5 },
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          border: `1px solid rgba(255,255,255,0.1)`,
                          boxShadow: "none",
                          backgroundColor: "#050505",
                          borderRadius: "6px",
                          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease",
                          "&:hover": {
                            borderColor: "rgba(255,255,255,0.5)",
                            transform: "translateY(-10px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.2)',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 4,
                            color: "text.primary",
                          }}
                        >
                          {point.icon}
                        </Box>

                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "1.25rem",
                            mb: 2,
                          }}
                        >
                          {point.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.7,
                          }}
                        >
                          {point.description}
                        </Typography>
                      </Card>
                    </m.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LazyMotion>
  );
}
