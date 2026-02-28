"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import { Globe, Database, Zap, Smartphone, Server, Shield } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const services = [
  {
    icon: <Globe size={28} aria-hidden="true" />,
    title: "Business Web Systems",
    description:
      "Custom-built web platforms designed to streamline operations, improve customer experience, and support business growth.",
    benefits: ["End-to-End Development", "Scalable Architecture", "Production Deployment"],
  },
  {
    icon: <Server size={28} aria-hidden="true" />,
    title: "SaaS & Platform Development",
    description:
      "Build and launch scalable platforms with secure access, subscriptions, and integrations.",
    benefits: ["User Authentication", "API Integrations", "Scalable Systems"],
  },
  {
    icon: <Database size={28} aria-hidden="true" />,
    title: "Business Logic & Automation",
    description:
      "Structured backend systems that automate workflows and improve efficiency.",
    benefits: ["System Automation", "Database Optimization", "Secure Data Handling"],
  },
  {
    icon: <Zap size={28} aria-hidden="true" />,
    title: "Website Speed & Performance",
    description:
      "Improve loading speed and system efficiency for better user experience and SEO.",
    benefits: ["Speed Optimization", "Code Refactoring", "Caching Strategies"],
  },
  {
    icon: <Smartphone size={28} aria-hidden="true" />,
    title: "Mobile-Optimized Web Experience",
    description:
      "Seamless experience across devices with modern responsive systems.",
    benefits: ["Mobile Optimization", "Offline Capability", "Cross-Device Support"],
  },
  {
    icon: <Shield size={28} aria-hidden="true" />,
    title: "Secure & Reliable Systems",
    description:
      "Implementation of secure authentication and protection against vulnerabilities.",
    benefits: ["Secure Login", "Session Protection", "Data Encryption"],
  },
];

export default function ServicesSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="services"
      component="section"
      aria-labelledby="services-heading"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor:
          muiTheme.palette.mode === "light"
            ? "rgba(248, 250, 252, 0.6)"
            : alpha(muiTheme.palette.background.paper, 0.2),
        borderTop: `1px solid ${muiTheme.palette.divider}`,
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                mb: 2.5,
              }}
            >
              Services
            </Typography>

            <Typography
              variant="h2"
              id="services-heading"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              What I Can Build For You
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              I design and develop scalable web systems for startups and businesses. Every project is built with
              production-ready architecture, security, and long-term maintainability in mind.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    border: `1px solid ${muiTheme.palette.divider}`,
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: 2,
                        bgcolor: alpha(muiTheme.palette.secondary.main, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        color: "secondary.main",
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mb: 2, minHeight: { md: '4.5rem' }, display: 'flex', alignItems: 'flex-start', pt: 0.5 }}>
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 3,
                        lineHeight: 1.7,
                        minHeight: { md: '5rem' }
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mt: 'auto', pt: 3, borderTop: `1px solid ${alpha(muiTheme.palette.divider, 0.5)}` }}>
                      <Box component="ul" sx={{ m: 0, pl: 2, listStyleType: 'none' }}>
                        {service.benefits.map((benefit, i) => (
                          <Box key={i} component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5, gap: 1.5 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', mt: 1, flexShrink: 0 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                color: "text.primary",
                              }}
                            >
                              {benefit}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}