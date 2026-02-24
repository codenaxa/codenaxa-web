"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Github, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const muiTheme = useMuiTheme();

  const socialLinks = [
    { icon: <MessageCircle size={20} aria-hidden="true" />, href: "https://wa.me/918281657534", label: "WhatsApp" },
    { icon: <Github size={20} aria-hidden="true" />, href: "https://github.com/codenaxa", label: "GitHub" },
    { icon: <Linkedin size={20} aria-hidden="true" />, href: "https://linkedin.com/in/codenaxa", label: "LinkedIn" },
    { icon: <Instagram size={20} aria-hidden="true" />, href: "https://instagram.com/codenaxa", label: "Instagram" },
    { icon: <Twitter size={20} aria-hidden="true" />, href: "https://x.com/codenaxa", label: "X (Twitter)" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.default",
        pt: 10,
        pb: 6,
        borderTop: `1px solid ${muiTheme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Link href="/" className="flex items-center gap-3 no-underline mb-5">
              <Box sx={{ position: "relative", width: 40, height: 40 }}>
                <Image
                  src="/logo.png"
                  alt="Codenaxa"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </Box>
              <span className="text-2xl font-bold font-satoshi">codenaxa</span>
            </Link>

            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420, lineHeight: 1.8, mb: 5 }}>
              Codenaxa is a registered MSME technology brand operated by a freelance full-stack developer
              specializing in scalable web applications, SaaS platforms, and backend systems.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: alpha(muiTheme.palette.text.primary, 0.05),
                    color: "text.secondary",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
              Services
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Custom Web Applications",
                "SaaS Development",
                "Backend & API Systems",
                "Performance Optimization",
                "Security Implementation",
              ].map((item) => (
                <Link key={item} href="/#services" className="no-underline">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      "&:hover": { color: "primary.main" },
                      transition: "color 0.2s",
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { label: "Projects", href: "/#projects" },
                { label: "About", href: "/#about" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="no-underline">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      "&:hover": { color: "primary.main" },
                      transition: "color 0.2s",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            pt: 5,
            borderTop: `1px solid ${muiTheme.palette.divider}`,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Registered MSME Business | Professional Invoicing
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {currentYear} codenaxa. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
