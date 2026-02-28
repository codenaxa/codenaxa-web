"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { useTheme as useMuiTheme, alpha } from "@mui/material";

const LightweightHeroAnimation = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background glow */}
      <m.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/30 dark:bg-indigo-500/20 rounded-full blur-3xl"
      />
      <m.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/30 dark:bg-purple-500/20 rounded-full blur-2xl"
      />

      {/* 3D Earth-like Sphere Rotation */}
      <div
        className="relative w-[85%] aspect-square mx-auto flex items-center justify-center transition-transform hover:scale-105 duration-700"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Core sphere glow - using opacity instead of boxShadow for performance */}
        <m.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600/50 to-purple-600/50 dark:from-indigo-500/30 dark:to-purple-600/30 blur-xl shadow-[0_0_50px_rgba(79,70,229,0.5)]"
        />

        {/* Outer Ring */}
        <div
          className="absolute inset-0"
          style={{ transform: "rotateX(70deg) rotateY(0deg)", transformStyle: "preserve-3d" }}
        >
          <m.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-indigo-600/50 dark:border-indigo-500/40"
          >
            {/* Orbiting particle */}
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.9)] -translate-x-1/2 -translate-y-1/2" />
          </m.div>
        </div>

        {/* Middle Ring */}
        <div
          className="absolute inset-8 md:inset-12"
          style={{ transform: "rotateX(70deg) rotateY(60deg)", transformStyle: "preserve-3d" }}
        >
          <m.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-purple-600/50 dark:border-purple-500/40"
          >
            {/* Orbiting particle */}
            <div className="absolute bottom-0 left-1/2 w-3.5 h-3.5 bg-purple-600 dark:bg-purple-400 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.9)] -translate-x-1/2 translate-y-1/2" />
          </m.div>
        </div>

        {/* Inner Ring */}
        <div
          className="absolute inset-16 md:inset-24"
          style={{ transform: "rotateX(70deg) rotateY(120deg)", transformStyle: "preserve-3d" }}
        >
          <m.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-cyan-600/50 dark:border-cyan-500/40"
          >
            {/* Orbiting particle */}
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(8,145,178,0.9)] translate-x-1/2 -translate-y-1/2" />
          </m.div>
        </div>

        {/* Subtle global spin layer */}
        <m.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* Additional floating stars/dots */}
          <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-indigo-600/60 dark:bg-white/50 rounded-full blur-[1px]" />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-purple-600/60 dark:bg-white/40 rounded-full blur-[1px]" />
          <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-cyan-600/60 dark:bg-white/30 rounded-full blur-[1px]" />
        </m.div>
      </div>
    </Box>
  );
};

export default function HeroSection() {
  const muiTheme = useMuiTheme();

  const whatsappLink =
    "https://wa.me/918281657534?text=Hi%20I%20am%20interested%20in%20building%20a%20web%20project.%20Here%20are%20my%20requirements:%0A1.%20%0A2.%20%0A3.%20";

  return (
    <LazyMotion features={domAnimation}>
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
              <div>
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
                      color: "white",
                      bgcolor: "#075E54",
                      "&:hover": {
                        bgcolor: "#107C6F",
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
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <div
                className="animate-fade-up"
                style={{ animationDuration: "1s", animationDelay: "0.3s", animationFillMode: "both" }}
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
                  <LightweightHeroAnimation />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LazyMotion>
  );
}
