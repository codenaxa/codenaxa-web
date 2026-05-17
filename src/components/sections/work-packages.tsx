"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Check, Zap, Shield, Layout, Rocket, TrendingUp, Cpu } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const mainPackages = [
    {
        title: "Basic Website",
        subtitle: "Perfect for: Clinic, Salon, Service Business",
        price: "INR 8K - 15K",
        icon: <Rocket size={24} />,
        features: [
            "Professional business website",
            "Mobile-friendly design",
            "Contact & inquiry form",
            "Google Maps integration",
            "Basic SEO setup",
            "6 months free support"
        ]
    },
    {
        title: "Booking System",
        subtitle: "Perfect for: Hotels, Restaurants, Clinics, Salons",
        price: "INR 20K - 35K",
        icon: <TrendingUp size={24} />,
        featured: true,
        features: [
            "24/7 online booking system",
            "Automated confirmations",
            "Admin management dashboard",
            "Calendar (no double booking)",
            "Payment processing (UPI)",
            "6 months free support"
        ]
    },
    {
        title: "E-Commerce Store",
        subtitle: "Perfect for: Online Shops, Boutiques, Retail",
        price: "INR 35K - 50K",
        icon: <Cpu size={24} />,
        features: [
            "Product catalog (50-500+ items)",
            "Shopping cart & checkout",
            "Multiple payment options",
            "Automated order tracking",
            "Inventory management",
            "Sales reports & analytics"
        ]
    }
];

const miniPackages = [
    { title: "Speed Optimization", price: "INR 5K+", icon: <Zap size={18} /> },
    { title: "Security Hardening", price: "INR 7K+", icon: <Shield size={18} /> },
    { title: "UI Revamp", price: "INR 10K+", icon: <Layout size={18} /> }
];

export default function WorkPackages() {
    const muiTheme = useMuiTheme();

    return (
        <LazyMotion features={domAnimation}>
            <Box
                id="work-packages"
                component="section"
                sx={{
                    py: { xs: 12, md: 16 },
                    bgcolor: muiTheme.palette.mode === 'light' ? 'background.default' : alpha(muiTheme.palette.background.paper, 0.1),
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: "center" }}>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    fontWeight: 800,
                                    color: "secondary.main",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.2em",
                                    display: "block",
                                    mb: 2,
                                }}
                            >
                                Engagement Models
                            </Typography>

                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
                                }}
                            >
                                Transparent Pricing for Your Business

                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    maxWidth: 600,
                                    mx: "auto",
                                    fontSize: "1.1rem",
                                    lineHeight: 1.8,
                                }}
                            >
                                Transparent pricing and industry-specific packages designed to deliver maximum value for hotels, clinics, restaurants, and shops.
                            </Typography>
                        </m.div>
                    </Box>

                    {/* Main Packages */}
                    <Grid container spacing={4} sx={{ mb: 10 }}>
                        {mainPackages.map((pkg, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <m.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{ height: '100%' }}
                                >
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderRadius: 4,
                                            border: `1px solid ${muiTheme.palette.divider}`,
                                            boxShadow: "none",
                                            position: 'relative',
                                            overflow: 'visible',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <Box sx={{ color: 'secondary.main', mb: 2 }}>{pkg.icon}</Box>
                                            <Typography variant="h5" component="h3" sx={{ fontWeight: 800, mb: 1 }}>
                                                {pkg.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, minHeight: '40px' }}>
                                                {pkg.subtitle}
                                            </Typography>

                                            <Box sx={{ mb: 4, pt: 3, borderTop: `1px solid ${alpha(muiTheme.palette.divider, 0.5)}` }}>
                                                {pkg.features.map((feature, i) => (
                                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                                        <Box sx={{ color: 'secondary.main', display: 'flex' }}><Check size={16} /></Box>
                                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>{feature}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>

                                            <Box sx={{ mt: 'auto', pt: 3 }}>
                                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5, fontWeight: 700, textTransform: 'uppercase' }}>
                                                    Starting from
                                                </Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 900, color: 'text.primary', mb: pkg.price === "Let's Discuss" ? 2 : 0 }}>
                                                    {pkg.price}
                                                </Typography>
                                                {pkg.price === "Let's Discuss" && (
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        fullWidth
                                                        component="a"
                                                        href="https://wa.me/918281657534"
                                                        target="_blank"
                                                        sx={{
                                                            borderRadius: 2,
                                                            fontWeight: 700,
                                                            textTransform: 'none',
                                                            boxShadow: 'none',
                                                            '&:hover': { boxShadow: 'none' }
                                                        }}
                                                    >
                                                        Discuss on WhatsApp
                                                    </Button>
                                                )}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </m.div>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Mini Packages */}
                    <Box sx={{ pt: 6, borderTop: `1px solid ${muiTheme.palette.divider}` }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mb: 4, textAlign: 'center' }}>
                            Specific Service Add-ons
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {miniPackages.map((item, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <m.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <Box
                                            sx={{
                                                p: 3,
                                                borderRadius: 3,
                                                bgcolor: alpha(muiTheme.palette.secondary.main, 0.03),
                                                border: `1px solid ${alpha(muiTheme.palette.divider, 0.8)}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    bgcolor: alpha(muiTheme.palette.secondary.main, 0.06),
                                                    borderColor: alpha(muiTheme.palette.secondary.main, 0.3)
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box sx={{ color: 'secondary.main', bgcolor: alpha(muiTheme.palette.secondary.main, 0.1), p: 1, borderRadius: 1.5, display: 'flex' }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{ fontWeight: 900, color: 'secondary.main' }}>
                                                {item.price}
                                            </Typography>
                                        </Box>
                                    </m.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </LazyMotion>
    );
}
