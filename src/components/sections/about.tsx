"use client";

import React from "react";
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
    icon: <Code size={24} />,
    title: "Structured Standards",
    description: "We implement rigorous development protocols to ensure codebase consistency and long-term system maintainability across all web applications.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security Architecture",
    description: "Integrated security protocols from the architectural level, focusing on data encryption, secure authentication, and robust authorization systems.",
  },
  {
    icon: <Zap size={24} />,
    title: "Performance Optimization",
    description: "Systematic performance engineering targeting low-latency interactions, optimized asset delivery, and efficient resource utilization.",
  },
  {
    icon: <Layout size={24} />,
    title: "Scalable System Design",
    description: "Architecture-driven development focused on modularity and scalability, ensuring systems can handle increased load and complexity.",
  },
];

export default function AboutSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        position: 'relative',
        background: muiTheme.palette.mode === 'light' ? 'white' : 'transparent'
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
                sx={{
                  fontWeight: 800,
                  color: 'secondary.main',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  display: 'block',
                  mb: 3
                }}
              >
                Engineering Excellence
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontFamily: 'Satoshi, sans-serif',
                  lineHeight: 1.1,
                  mb: 4
                }}
              >
                Architecture-Driven <Box component="span" sx={{ color: alpha(muiTheme.palette.text.primary, 0.4) }}>Engineering</Box> Standards.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  mb: 3,
                  fontWeight: 500
                }}
              >
                We operate with modern engineering standards and production-level development practices. Our methodology focuses on building secure, high-performance web systems that support long-term business growth.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  fontWeight: 500
                }}
              >
                Every project is executed with a focus on clean, maintainable codebase strategies and system maintainability. We prioritize technical precision over generic solutions to deliver measurable architectural value.
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
                        p: 4.5,
                        height: '100%',
                        border: `1px solid ${muiTheme.palette.divider}`,
                        boxShadow: 'none',
                        backgroundColor: alpha(muiTheme.palette.background.paper, 0.5),
                        backgroundImage: 'none',
                        borderRadius: 5,
                        '&:hover': {
                          borderColor: 'secondary.main',
                          boxShadow: muiTheme.palette.mode === 'light'
                            ? '0 25px 50px -12px rgba(0,0,0,0.06)'
                            : '0 25px 50px -12px rgba(0,0,0,0.4)',
                          transform: 'translateY(-4px)'
                        },
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <Box sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        bgcolor: alpha(muiTheme.palette.secondary.main, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        color: 'secondary.main'
                      }}>
                        {point.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          mb: 2,
                          fontFamily: 'Satoshi',
                          fontSize: '1.25rem'
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontWeight: 500,
                          lineHeight: 1.7,
                          fontSize: '0.95rem'
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
