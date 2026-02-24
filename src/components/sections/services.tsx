"use client";

import React from "react";
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
    title: "Custom Web Application Development",
    description:
      "End-to-end development of modern web applications using React, Next.js, Node.js, or Django - built for performance and scalability.",
    benefits: ["Frontend + Backend Development", "Clean Architecture", "Production Deployment"],
  },
  {
    icon: <Server size={28} aria-hidden="true" />,
    title: "SaaS & Product Development",
    description:
      "Build and launch scalable SaaS platforms with secure authentication, subscription logic, and API integrations.",
    benefits: ["Authentication & Authorization", "API Integrations", "Scalable Backend Systems"],
  },
  {
    icon: <Database size={28} aria-hidden="true" />,
    title: "Backend & API Development",
    description:
      "Secure and optimized backend systems with well-structured APIs, database design, and performance tuning.",
    benefits: ["REST APIs", "Database Optimization", "Secure Data Handling"],
  },
  {
    icon: <Zap size={28} aria-hidden="true" />,
    title: "Performance Optimization",
    description:
      "Improve loading speed, Core Web Vitals, and system efficiency for better user experience and search rankings.",
    benefits: ["Speed Optimization", "Code Refactoring", "Caching Strategies"],
  },
  {
    icon: <Smartphone size={28} aria-hidden="true" />,
    title: "Responsive & PWA Development",
    description:
      "Mobile-first web systems with offline capability and seamless cross-device experience.",
    benefits: ["Mobile Optimization", "Service Workers", "Offline Functionality"],
  },
  {
    icon: <Shield size={28} aria-hidden="true" />,
    title: "Security & System Hardening",
    description:
      "Implementation of secure authentication, encryption standards, and protection against common vulnerabilities.",
    benefits: ["JWT / OAuth", "Secure Sessions", "Data Encryption"],
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
                  <CardContent sx={{ p: 4 }}>
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

                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {service.benefits.map((benefit, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            mb: 1,
                          }}
                        >
                          {benefit}
                        </Typography>
                      ))}
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