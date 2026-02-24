"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme as useMuiTheme, alpha } from "@mui/material";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./hero-3d"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.03)", borderRadius: "24px" }} />
});

export default function HeroSection() {
  const muiTheme = useMuiTheme();

  const whatsappLink =
    "https://wa.me/918281657534?text=Hi%20I%20am%20interested%20in%20building%20a%20web%20project.%20Here%20are%20my%20requirements:%0A1.%20%0A2.%20%0A3.%20";

  return (
    <Box
      id="home"
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 15, md: 14 },
        pb: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          muiTheme.palette.mode === "light"
            ? "radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.03) 0%, transparent 40%)"
            : "radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 40%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 0.8,
                  borderRadius: 10,
                  border: `1px solid ${muiTheme.palette.divider}`,
                  mb: 4,
                  bgcolor: alpha(muiTheme.palette.secondary.main, 0.05),
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "secondary.main",
                  }}
                >
                  Freelance Full-Stack Developer
                </Typography>
              </Box>

              <Typography
                variant="h1"
                id="hero-heading"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.2rem",
                    lg: "4rem",
                  },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  mb: 3,
                  color: "text.primary",
                }}
              >
                I Build{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Scalable Web Applications
                </Box>{" "}
                That Grow With Your Business
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: "text.secondary",
                  mb: 4,
                  fontWeight: 500,
                  lineHeight: 1.8,
                }}
              >
                Custom web applications, SaaS platforms, and backend systems built using modern stacks like React,
                Node.js, Django, and Next.js - engineered for performance, scalability, and long-term maintainability.
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: 2.5,
                  py: 1.2,
                  borderRadius: 3,
                  border: `1px solid ${muiTheme.palette.divider}`,
                  bgcolor: alpha(muiTheme.palette.secondary.main, 0.05),
                  mb: 6,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: "text.secondary",
                  }}
                >
                  Registered MSME | Professional Invoicing | Transparent Agreements
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<MessageCircle size={20} aria-hidden="true" />}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    borderRadius: 3,
                    bgcolor: "#25D366",
                    "&:hover": {
                      bgcolor: "#128C7E",
                    },
                  }}
                >
                  Connect with WhatsApp
                </Button>



                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/#projects"
                  endIcon={<ArrowRight size={18} aria-hidden="true" />}
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: "1.1rem",
                    borderRadius: 3,
                  }}
                >
                  View My Work
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <Hero3D />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
