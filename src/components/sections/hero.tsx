"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

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
        background:
          muiTheme.palette.mode === "light"
            ? "radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.03) 0%, transparent 40%)"
            : "radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 40%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>

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

            {/* Headline */}
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
              Custom Websites for{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                Small Business
              </Box>{" "}
              Built in Kerala
            </Typography>

            {/* Description */}
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
              Build professional booking systems, online order platforms, and e-commerce stores starting at ₹8,000. Specialized solutions for hotels, clinics, and shops to increase bookings and automate sales.
            </Typography>

            {/* MSME Trust Layer */}
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
                Operating under a registered MSME entity with structured delivery and professional invoicing
              </Typography>
            </Box>

            {/* CTA */}
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
                startIcon={<MessageCircle size={20} />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  borderRadius: 3,
                  color: "white",
                  bgcolor: "#075E54",
                  "&:hover": {
                    bgcolor: "#107C6F",
                  },
                }}
              >
                Discuss Your Project
              </Button>

              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/#projects"
                endIcon={<ArrowRight size={18} />}
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

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
