"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme as useMuiTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  const muiTheme = useMuiTheme();
const message = `Hi, I checked your portfolio.

I’m planning to build a website for my business.

Can you share your pricing, timeline, and what’s included?`;
  const whatsappLink =
    "https://wa.me/918281657534?text="+encodeURIComponent(message);

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
        background: "#050505",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 10 }} sx={{ textAlign: "center" }}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

            {/* Identity Badge */}
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
                component="p"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "secondary.main",
                }}
              >
                Hotel Booking | Restaurant Systems | Clinic Systems
              </Typography>
            </Box>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                id="hero-heading"
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "5rem",
                    lg: "6rem",
                  },
                  fontWeight: 600,
                  lineHeight: 1.1,
                  mb: 4,
                  color: "text.primary",
                }}
              >
                Digital Experiences
                <br />
                <Box component="span" sx={{ color: "secondary.main", fontStyle: "italic", fontWeight: 400 }}>
                  Crafted With Precision
                </Box>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: "text.secondary",
                  mb: 6,
                  maxWidth: "600px",
                  mx: "auto",
                  fontWeight: 400,
                  lineHeight: 1.8,
                }}
              >
                We build elegant booking systems, e-commerce stores, and sophisticated web applications tailored for modern businesses.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: "text.secondary",
                }}
              >
                Operating under a registered MSME entity with structured delivery and professional invoicing
              </Typography>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 5,
                    py: 2,
                    fontSize: "1rem",
                    borderRadius: "6px",
                    color: "background.default",
                    bgcolor: "text.primary",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    "&:hover": {
                      bgcolor: "secondary.main",
                    },
                  }}
                >
                  Start a Project
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/#projects"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    px: 5,
                    py: 2,
                    fontSize: "1rem",
                    borderRadius: "6px",
                    borderColor: "text.primary",
                    color: "text.primary",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    "&:hover": {
                      bgcolor: "text.primary",
                      color: "background.default",
                    }
                  }}
                >
                  View Work
                </Button>
              </Box>
            </motion.div>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
