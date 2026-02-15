"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";
import Link from "next/link";

const testimonials = [
    {
        name: "P&S Laser Cutting",
        text: "We had a good initial interaction with the team. They were transparent about their web development process and demonstrated strong experience.",
        stars: 5,
    },
    {
        name: "Sinoy C",
        text: "Great work.",
        stars: 5,
    },
    {
        name: "Arjun",
        text: "",
        stars: 5,
    },
];

export default function TestimonialsSection() {
    const muiTheme = useMuiTheme();

    return (
        <Box
            id="reviews"
            component="section"
            sx={{
                py: { xs: 12, md: 16 },
                position: 'relative',
                bgcolor: muiTheme.palette.mode === 'light' ? 'rgba(248, 250, 252, 0.5)' : alpha(muiTheme.palette.background.paper, 0.1),
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
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
                            Client Feedback
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                fontSize: { xs: '2rem', sm: '2.25rem', md: '3.5rem' },
                                fontFamily: 'Satoshi, sans-serif'
                            }}
                        >
                            Verified Architecture <Box component="span" sx={{ color: alpha(muiTheme.palette.text.primary, 0.5) }}>Validation</Box>
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
                            Verified reviews from our Google Business profile reflecting our commitment to technical precision and transparent communication.
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {testimonials.map((testimonial, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        p: 4.5,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: 'background.paper',
                                        border: `1px solid ${muiTheme.palette.divider}`,
                                        boxShadow: 'none',
                                        backgroundImage: 'none',
                                        borderRadius: 5,
                                        '&:hover': {
                                            borderColor: 'secondary.main',
                                            boxShadow: muiTheme.palette.mode === 'light'
                                                ? '0 20px 40px -10px rgba(0,0,0,0.05)'
                                                : '0 20px 40px -10px rgba(0,0,0,0.3)',
                                            transform: 'translateY(-5px)'
                                        },
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', gap: 0.5, mb: 3 }}>
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <Star key={i} size={18} fill="#FFB400" color="#FFB400" />
                                        ))}
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            mb: 0.5,
                                            fontFamily: 'Satoshi, sans-serif'
                                        }}
                                    >
                                        {testimonial.name}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'text.secondary',
                                            display: 'block',
                                            mb: testimonial.text ? 3 : 0,
                                            fontWeight: 600,
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.02em'
                                        }}
                                    >
                                        Verified Google Review
                                    </Typography>

                                    {testimonial.text && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.primary',
                                                lineHeight: 1.8,
                                                fontStyle: 'italic',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            “{testimonial.text}”
                                        </Typography>
                                    )}
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="https://www.google.com/maps/place/codenaxa/@28.6186358,77.3860268,17z/data=!4m8!3m7!1s0x390cf300067645b9:0x809c91f58693afcf!8m2!3d28.6186358!4d77.3860268!9m1!1b1!16s%2Fg%2F11w6q_t9yv?entry=ttu"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-secondary-main hover:underline font-bold text-sm"
                            style={{ color: muiTheme.palette.secondary.main }}
                        >
                            View More Reviews on Google <ExternalLink size={14} />
                        </Link>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}
