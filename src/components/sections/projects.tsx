"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const projects = [
    {
        title: "SmartMoney Calc",
        category: "Financial Engineering",
        description: "Problem: High-latency financial computations. Approach: Client-side mathematical engine with optimized computation cycles. Stack: Next.js, TypeScript. Impact: Sub-second precision with zero server overhead. Performance: Optimized for complex interest and tax logic execution.",
        image: "/projects/smartmoney.png",
        tags: ["Next.js", "TypeScript", "React"],
        link: "https://smartmoneycalc.codenaxa.in",
    },
    {
        title: "ResumeMint AI",
        category: "AI Infrastructure",
        description: "Problem: Unstructured resume data formatting. Approach: Schema-driven document generation with real-time editing state. Stack: MERN, GenAI APIs. Impact: ATS-compatible document exports with verified data integrity. Performance: Optimized PDF asset generation and delivery.",
        image: "/projects/resumemintai.png",
        tags: ["MERN Stack", "GenAI", "Node.js"],
        link: "https://resumemintai.codenaxa.in",
    }
];

export default function ProjectsSection() {
    const muiTheme = useMuiTheme();

    return (
        <Box
            id="projects"
            component="section"
            sx={{
                py: { xs: 12, md: 16 },
                position: 'relative',
                overflow: 'hidden'
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
                            sx={{
                                fontWeight: 800,
                                color: 'secondary.main',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                display: 'block',
                                mb: 2
                            }}
                        >
                            Technical Portfolio
                        </Typography>
                        <Grid container alignItems="flex-end" spacing={4}>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                                        fontFamily: 'Satoshi, sans-serif',
                                        lineHeight: 1.1
                                    }}
                                >
                                    Engineered <Box component="span" sx={{ color: alpha(muiTheme.palette.text.primary, 0.4) }}>Web Systems</Box> Deployment.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '1.125rem',
                                        lineHeight: 1.7,
                                        borderLeft: `2px solid ${muiTheme.palette.divider}`,
                                        pl: 3,
                                        mb: 1
                                    }}
                                >
                                    Review our production-level implementations showcasing architectural depth and system performance.
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Box>

                <Grid container spacing={6}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        borderRadius: 6,
                                        overflow: 'hidden',
                                        backgroundColor: 'background.paper',
                                        border: `1px solid ${muiTheme.palette.divider}`,
                                        boxShadow: 'none',
                                        backgroundImage: 'none',
                                        '&:hover': {
                                            boxShadow: muiTheme.palette.mode === 'light'
                                                ? '0 40px 80px -20px rgba(0,0,0,0.1)'
                                                : '0 40px 80px -20px rgba(0,0,0,0.5)',
                                            borderColor: 'secondary.main',
                                            '& .project-img-inner': {
                                                transform: 'scale(1.08)',
                                            },
                                            '& .case-link-btn': {
                                                bgcolor: 'primary.main',
                                                color: muiTheme.palette.mode === 'dark' ? '#000000' : '#ffffff'
                                            }
                                        },
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                        <Box
                                            className="project-img-inner"
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '100%',
                                                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                                            }}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <Box sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))',
                                            }} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 1 }}>
                                            {project.tags.map(tag => (
                                                <Box key={tag} sx={{ px: 2, py: 0.5, bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)' }}>
                                                    <Typography variant="caption" sx={{ fontWeight: 800, color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{tag}</Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>

                                    <Box sx={{ p: { xs: 4, md: 5 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                            <Box sx={{ p: 0.8, bgcolor: alpha(muiTheme.palette.secondary.main, 0.1), borderRadius: 1.5, display: 'flex' }}>
                                                <Code size={16} style={{ color: muiTheme.palette.secondary.main }} />
                                            </Box>
                                            <Typography variant="caption" sx={{ fontWeight: 800, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                {project.category}
                                            </Typography>
                                        </Box>

                                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: '1.75rem', fontFamily: 'Satoshi, sans-serif' }}>
                                            {project.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                fontSize: '1rem',
                                                lineHeight: 1.8,
                                                mb: 5,
                                                minHeight: { md: '3.6em' }
                                            }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Button
                                                variant="outlined"
                                                component={Link}
                                                href={project.link}
                                                target="_blank"
                                                className="case-link-btn"
                                                endIcon={<ArrowRight size={18} />}
                                                sx={{
                                                    borderRadius: '12px',
                                                    px: 3,
                                                    py: 1.2,
                                                    borderColor: 'divider',
                                                    color: 'text.primary',
                                                    textTransform: 'none',
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem',
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        bgcolor: muiTheme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                                                        color: muiTheme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                                                        borderColor: muiTheme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: `0 10px 20px ${alpha(muiTheme.palette.primary.main, 0.2)}`
                                                    }
                                                }}
                                            >
                                                Explore Architecture
                                            </Button>
                                            <IconButton
                                                component={Link}
                                                href={project.link}
                                                target="_blank"
                                                sx={{ color: 'text.secondary', bgcolor: alpha(muiTheme.palette.divider, 0.3), '&:hover': { bgcolor: 'divider' } }}
                                            >
                                                <ExternalLink size={20} />
                                            </IconButton>
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
