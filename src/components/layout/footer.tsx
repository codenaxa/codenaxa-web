"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const muiTheme = useMuiTheme();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/codenaxa", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/codenaxa", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/codenaxa", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://x.com/codenaxa", label: "X" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        pt: 12,
        pb: 6,
        borderTop: `1px solid ${muiTheme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Link href="/" className="flex items-center gap-3 no-underline mb-6">
              <Box sx={{ position: 'relative', width: 40, height: 40 }}>
                <Image src="/logo.png" alt="Codenaxa" fill sizes="40px" className="object-contain" />
              </Box>
              <span className="text-2xl font-bold font-satoshi">codenaxa</span>
            </Link>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: 400, lineHeight: 1.8, fontSize: '1.05rem' }}>
              Engineering scalable web applications and technical infrastructure. We prioritize architectural performance and system security for all digital products.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  component="a"
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: alpha(muiTheme.palette.text.primary, 0.04),
                    color: 'text.secondary',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, fontFamily: 'Satoshi' }}>Engineering Services</Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                'RESTful API Design',
                'Database Optimization',
                'Performance Engineering',
                'PWA Development',
                'Technical SEO',
                'Security Architecture'
              ].map((item) => (
                <Link key={item} href="/#services" className="no-underline">
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, fontFamily: 'Satoshi' }}>Quick Links</Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'Web Dev Kannur', href: '/web-development-company-kannur' },
                { label: 'Full Stack Kerala', href: '/full-stack-web-developer-kerala' },
                { label: 'MSME Registered', href: '/msme-registered-web-development-company-india' },
                { label: 'Our Projects', href: '/#projects' },
                { label: 'Contact Us', href: '/#contact' }
              ].map((item) => (
                <Link key={item.label} href={item.href} className="no-underline">
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ pt: 6, borderTop: `1px solid ${muiTheme.palette.divider}`, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'start', gap: 4 }}>
          <Box>
            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 800, mb: 1 }}>codenaxa</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>Web Development Company in Kannur, Kerala, India</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>MSME Registered Business</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 2 }}>contact@codenaxa.in</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 600 }}>Serving clients across Kannur, Kerala, and India.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'start', md: 'end' }, gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
              <Link href="/msme-registered-web-development-company-india" className="no-underline">
                <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: '0.15em', textTransform: 'uppercase', '&:hover': { color: 'primary.main' } }}>
                  REGISTERED MSME INDIA
                </Typography>
              </Link>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
              © {currentYear} codenaxa. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
