"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import { Globe, Layout, Zap, Smartphone, Search, Shield, Database, Server } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const services = [
  {
    icon: <Globe size={32} />,
    title: "RESTful API Architecture",
    description: "Designing and engineering scalable API systems with robust endpoints, rate limiting, and comprehensive documentation for seamless integration.",
    benefits: ["Microservices Approach", "Secure Endpoints", "Performance Optimization"],
  },
  {
    icon: <Database size={32} />,
    title: "Database Optimization",
    description: "Architecting efficient database schemas and implementing advanced indexing strategies to ensure rapid data retrieval and storage scalability.",
    benefits: ["Relational & NoSQL", "Query Optimization", "Data Integrity"],
  },
  {
    icon: <Zap size={32} />,
    title: "Performance Engineering",
    description: "Systematic performance tuning targeting low-latency interactions, optimized asset delivery, and adherence to Core Web Vitals standards.",
    benefits: ["Latency Reduction", "Resource Management", "Caching Strategies"],
  },
  {
    icon: <Smartphone size={32} />,
    title: "Progressive Web Apps",
    description: "Engineering high-performance web applications with offline capabilities, background synchronization, and native-level system integration.",
    benefits: ["Service Worker Logic", "Local Caching", "Responsive Architecture"],
  },
  {
    icon: <Search size={32} />,
    title: "Technical SEO Implementation",
    description: "Implementing advanced SEO protocols including schema markup, semantic HTML structure, and server-side rendering for maximum crawlability.",
    benefits: ["Schema Integration", "SSR/ISR Optimization", "Metadata Management"],
  },
  {
    icon: <Shield size={32} />,
    title: "Authentication Systems",
    description: "Developing secure authentication and authorization layers using modern protocols, focusing on data encryption and identity management.",
    benefits: ["OAuth & JWT Protocols", "Encryption Standards", "Secure Session Flow"],
  }
];

export default function ServicesSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: muiTheme.palette.mode === 'light' ? 'rgba(248, 250, 252, 0.5)' : alpha(muiTheme.palette.background.paper, 0.2),
        borderTop: `1px solid ${muiTheme.palette.divider}`,
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
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
                color: 'secondary.main',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                display: 'block',
                mb: 2.5
              }}
            >
              Technical Infrastructure
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontFamily: 'Satoshi, sans-serif'
              }}
            >
              Scalable <Box component="span" sx={{ color: alpha(muiTheme.palette.text.primary, 0.5) }}>System Engineering</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 650,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.8
              }}
            >
              We prioritize architectural integrity and technical depth across every project. Our engineering processes are designed to deliver secure, scalable, and high-performance web systems.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: 2, md: 3 },
                    backgroundColor: 'background.paper',
                    borderRadius: 6,
                    border: `1px solid ${muiTheme.palette.divider}`,
                    boxShadow: 'none',
                    backgroundImage: 'none',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: muiTheme.palette.mode === 'light'
                        ? '0 30px 60px -12px rgba(0,0,0,0.08)'
                        : '0 30px 60px -12px rgba(0,0,0,0.5)',
                      borderColor: 'secondary.main',
                      '& .service-icon-box': {
                        color: 'white',
                        bgcolor: 'secondary.main',
                        transform: 'rotate(5deg)'
                      }
                    },
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="service-icon-box"
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3.5,
                        bgcolor: alpha(muiTheme.palette.secondary.main, 0.08),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 5,
                        transition: 'all 0.4s ease',
                        color: 'secondary.main'
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 2.5,
                        fontSize: '1.75rem',
                        fontFamily: 'Satoshi, sans-serif',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 5,
                        lineHeight: 1.8,
                        fontSize: '1.05rem',
                        fontWeight: 500
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mt: 'auto', pt: 3, borderTop: `1px solid ${alpha(muiTheme.palette.divider, 0.8)}` }}>
                      {service.benefits.map((benefit, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                          <Box sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '2px',
                            bgcolor: 'secondary.main',
                            transform: 'rotate(45deg)'
                          }} />
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>{benefit}</Typography>
                        </Box>
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
