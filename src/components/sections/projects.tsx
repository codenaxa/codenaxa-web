"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import Image from "next/image";
import { useTheme as useMuiTheme } from "@mui/material";

const projects = [
  {
    title: "SmartMoney Calc",
    category: "Financial Web Application",
    description:
      "A high-performance financial calculation platform designed to handle complex interest and tax computations instantly. Built with optimized client-side logic for real-time results without server dependency.",
    impact:
      "Delivered sub-second calculations with zero backend load, improving responsiveness and scalability.",
    image: "/projects/smartmoney.png",
    tags: ["Next.js", "TypeScript", "React"],
    link: "https://smartmoneycalc.codenaxa.in",
  },
  {
    title: "ResumeMint AI",
    category: "AI-Powered SaaS Platform",
    description:
      "An AI-based resume builder that generates ATS-compatible documents with structured schema validation and real-time editing capabilities.",
    impact:
      "Enabled automated document generation with clean export formatting and scalable backend processing.",
    image: "/projects/resumemintai.png",
    tags: ["MERN", "GenAI", "Node.js"],
    link: "https://resumemintai.codenaxa.in",
  },
];

export default function ProjectsSection() {
  const muiTheme = useMuiTheme();

  return (
    <Box
      id="projects"
      component="section"
      aria-labelledby="projects-heading"
      sx={{
        py: { xs: 12, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <motion.div
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
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Here are production-ready applications I have architected and deployed - focused on performance,
              scalability, and practical business use.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
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
                    borderRadius: 4,
                    overflow: "hidden",
                    border: `1px solid ${muiTheme.palette.divider}`,
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/9",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Box>

                  <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 2,
                      }}
                    >
                      <Code size={16} color={muiTheme.palette.secondary.main} aria-hidden="true" />
                      <Typography
                        variant="caption"
                        component="p"
                        sx={{
                          fontWeight: 800,
                          color: "secondary.main",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.category}
                      </Typography>
                    </Box>

                    <Typography variant="h5" component="h3" sx={{ fontWeight: 800, mb: 2 }}>
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        mb: 2,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                      }}
                    >
                      Impact: {project.impact}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="outlined"
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 700,
                          width: { xs: '100%', sm: 'auto' }
                        }}
                      >
                        View Live Project
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}