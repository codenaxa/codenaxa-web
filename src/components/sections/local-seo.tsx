"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

export default function LocalSEOSection() {
    const muiTheme = useMuiTheme();

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 10, md: 14 },
                bgcolor: 'background.default',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 4,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontFamily: 'Satoshi, sans-serif'
                        }}
                    >
                        Why Businesses in Kerala Choose codenaxa
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            fontSize: '1.125rem',
                            lineHeight: 1.8,
                            mb: 4,
                            fontWeight: 500
                        }}
                    >
                        As a Kannur-based web development company, we understand the needs of local businesses and startups. Our development approach focuses on performance, scalability, and long-term maintainability. Whether you need a custom web application, business website, or backend system, we build solutions aligned with your growth objectives.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.primary',
                            fontSize: '1.125rem',
                            lineHeight: 1.8,
                            fontWeight: 700,
                            p: 3,
                            borderRadius: 4,
                            bgcolor: alpha(muiTheme.palette.secondary.main, 0.03),
                            borderLeft: `4px solid ${muiTheme.palette.secondary.main}`
                        }}
                    >
                        If you are searching for a reliable web development company in Kannur or a full stack web developer in Kerala, codenaxa provides structured engineering, secure coding practices, and production-ready deployment services.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
