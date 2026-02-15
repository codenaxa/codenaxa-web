"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

export default function HeroSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        pt: { xs: 15, md: 10 },
        pb: { xs: 8, md: 12 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: muiTheme.palette.mode === 'light'
          ? 'radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.03) 0%, transparent 40%)'
          : 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 40%)',
      }}
    >
      {/* Background Animated Element */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '40vw',
          height: '40vw',
          background: `radial-gradient(circle, ${alpha(muiTheme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 0.8,
                borderRadius: 10,
                border: `1px solid ${muiTheme.palette.divider}`,
                mb: 4,
                bgcolor: alpha(muiTheme.palette.secondary.main, 0.05)
              }}>
                <Sparkles size={16} className="text-secondary-main" style={{ color: muiTheme.palette.secondary.main }} />
                <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'secondary.main' }}>
                  Engineered Web Systems
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.2, md: 1.1 },
                  mb: 3,
                  color: 'text.primary',
                  fontFamily: 'Satoshi, sans-serif'
                }}
              >
                Web Development Company in <Box component="span" sx={{ color: 'secondary.main' }}>Kannur</Box>, Kerala
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.25rem' },
                  color: 'text.secondary',
                  mb: 6,
                  maxWidth: '100%',
                  fontWeight: 500,
                  lineHeight: 1.8,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                codenaxa delivers scalable, secure, and performance-optimized web applications for businesses across Kerala and India. We specialize in full stack development using modern technologies and structured engineering practices.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/#projects"
                  endIcon={<ArrowRight size={20} />}
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: '1.125rem',
                    borderRadius: 3,
                    boxShadow: `0 20px 40px ${alpha(muiTheme.palette.primary.main, 0.15)}`,
                    '&:hover': {
                      boxShadow: `0 25px 45px ${alpha(muiTheme.palette.primary.main, 0.25)}`,
                    }
                  }}
                >
                  Explore Architecture
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/#contact"
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: '1.125rem',
                    borderRadius: 3,
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'text.primary',
                      backgroundColor: alpha(muiTheme.palette.text.primary, 0.02)
                    }
                  }}
                >
                  Submit Project Scope
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: { xs: '1.2/1', md: '0.85/1' },
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: `0 40px 80px ${muiTheme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.4)'}`,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2670&auto=format&fit=crop"
                  alt="Engineered Web Architecture Illustration"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />

                {/* Overlay decorative element */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, ${alpha(muiTheme.palette.background.default, 0.6)}, transparent)`,
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating UI Elements */}
                <Box
                  component={motion.div}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  sx={{
                    position: 'absolute',
                    top: '15%',
                    left: 24,
                    bgcolor: alpha(muiTheme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(12px)',
                    p: 3,
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    border: '1px solid',
                    borderColor: alpha(muiTheme.palette.divider, 0.5),
                    display: { xs: 'none', lg: 'block' },
                    minWidth: 200,
                    zIndex: 10
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'success.main' }} />
                    <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Development</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, fontSize: '1rem', color: 'text.primary' }}>Technical Excellence</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
