"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import { Code, ShieldCheck, Zap, Layout } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const keyPoints = [
  {
    icon: <Code size={24} aria-hidden="true" />,
    title: "Clean & Maintainable Code",
    description:
      "Every project is built with structured architecture and readable code practices, making future updates and scaling straightforward.",
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: "Security-First Development",
    description:
      "Authentication, data protection, and secure backend practices are integrated from the beginning - not added later.",
  },
  {
    icon: <Zap size={24} aria-hidden="true" />,
    title: "Performance Optimized",
    description:
      "Fast-loading interfaces, optimized APIs, and efficient database design ensure smooth user experience at scale.",
  },
  {
    icon: <Layout size={24} aria-hidden="true" />,
    title: "Scalable System Design",
    description:
      "Applications are structured to handle increasing traffic, feature expansion, and long-term business growth.",
  },
];

export default function AboutSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="about"
      component="section"
      aria-labelledby="about-heading"
      sx={{
        py: { xs: 12, md: 16 },
        position: "relative",
        background: muiTheme.palette.mode === "light" ? "white" : "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
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
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                  mb: 4,
                }}
              >
                A Registered MSME Technology Brand Operated by a{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Freelance Full-Stack Developer
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
                I build modern web applications, SaaS platforms, and backend systems for startups and growing
                businesses. Every project is personally handled - from architecture planning to deployment - ensuring
                technical precision and accountability.
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
                reliability.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {keyPoints.map((point, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        p: 4,
                        height: "100%",
                        border: `1px solid ${muiTheme.palette.divider}`,
                        boxShadow: "none",
                        backgroundColor: alpha(muiTheme.palette.background.paper, 0.5),
                        borderRadius: 4,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "secondary.main",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          bgcolor: alpha(muiTheme.palette.secondary.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          color: "secondary.main",
                        }}
                      >
                        {point.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
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
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
