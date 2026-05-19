"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import Image from "next/image";
import { useTheme as useMuiTheme } from "@mui/material";

const projects = [
  {
    title: "PSC Malayali",
    category: "Kerala PSC Learning Platform",
    description:
      "A fast and responsive learning website for Kerala PSC aspirants.",
    impact:
      "Built with high-performance SEO and modern web standards.",
    image: "/projects/psc-malayali.png",
    link: "https://psc-malayali.vercel.app/",
  },
];

export default function ProjectsSection() {
  const muiTheme = useMuiTheme();

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="projects"
        component="section"
        aria-labelledby="projects-heading"
        sx={{
          py: { xs: 16, md: 24 },
          background: "#050505",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="caption"
                component="p"
                sx={{
                  fontWeight: 800,
                  color: "secondary.main",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  display: "block",
                  mb: 2,
                }}
              >
                Selected Projects
              </Typography>

              <Typography
                variant="h2"
                id="projects-heading"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                  fontFamily: "var(--font-playfair), serif",
                  lineHeight: 1.1,
                }}
              >
                Real Systems Built & Deployed
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  mx: "auto",
                  mt: 3,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                Production-ready systems focused on performance, scalability,
                and real-world business use.
              </Typography>
            </m.div>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={index}>
                <m.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: { xs: "auto", md: "460px", lg: "520px" },
                      minHeight: { md: "420px" },
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "6px",
                      bgcolor: "transparent",
                      overflow: "hidden",
                      border: `1px solid rgba(255,255,255,0.1)`,
                      boxShadow: "none",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                    }}
                  >
                    {/* Image */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 240, sm: 280, md: 200, lg: 220 },
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      {/* Category */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Code size={14} color="rgba(255,255,255,0.7)" />
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 600,
                            color: "text.secondary",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {project.category}
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontFamily: "var(--font-playfair), serif",
                          fontSize: "1.75rem",
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>

                      {/* Description + Impact */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {project.description}{" "}
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          {project.impact}
                        </Box>
                      </Typography>

                      {/* CTA */}
                      <Box sx={{ mt: "auto" }}>
                        <Button
                          variant="outlined"
                          component="a"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<ArrowRight size={16} />}
                          sx={{
                            borderRadius: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            fontWeight: 500,
                            borderWidth: '1px',
                            borderColor: 'text.primary',
                            color: 'text.primary',
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                                bgcolor: "text.primary",
                                color: "background.default",
                            }
                          }}
                        >
                          View Project
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </LazyMotion>
  );
}