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
    title: "SmartMoney Calc",
    category: "Financial Web Application",
    description:
      "A high-performance financial calculation platform built for instant computations without server dependency.",
    impact:
      "Delivered sub-second calculations with zero backend load.",
    image: "/projects/smartmoney.png",
    link: "https://smartmoneycalc.codenaxa.in",
  },
  {
    title: "ResumeMint AI",
    category: "AI-Powered SaaS Platform",
    description:
      "An AI resume builder generating ATS-compatible documents with real-time editing.",
    impact:
      "Enabled automated document generation with scalable backend processing.",
    image: "/projects/resumemintai.png",
    link: "https://resumemintai.codenaxa.in",
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
          py: { xs: 12, md: 16 },
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ mb: 8 }}>
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
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Real Systems Built & Deployed
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  mt: 3,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                Production-ready applications focused on performance, scalability,
                and real-world business use.
              </Typography>
            </m.div>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <m.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: `1px solid ${muiTheme.palette.divider}`,
                      boxShadow: "none",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "secondary.main",
                      },
                    }}
                  >
                    {/* Image */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "4/3",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
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
                        <Code size={14} color={muiTheme.palette.secondary.main} />
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 800,
                            color: "secondary.main",
                            textTransform: "uppercase",
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
                          fontWeight: 800,
                          mb: 1.5,
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
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 700,
                            width: { xs: "100%", sm: "auto" },
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