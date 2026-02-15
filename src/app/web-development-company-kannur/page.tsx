import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Web Development Company in Kannur, Kerala | codenaxa",
    description: "Looking for a professional web development company in Kannur? codenaxa builds secure, scalable, and SEO-optimized web applications for local businesses and startups.",
};

export default function KannurPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <Container maxWidth="md">
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                            mb: 4,
                            fontFamily: "Satoshi, sans-serif",
                            lineHeight: 1.1
                        }}
                    >
                        Professional Web Development Company in Kannur
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.2rem",
                            lineHeight: 1.8,
                            color: "text.secondary",
                            mb: 6,
                            fontWeight: 500
                        }}
                    >
                        codenaxa is a Kannur-based web development company offering custom web application development, frontend engineering, backend architecture, and deployment services. We help businesses in Kannur establish a strong digital presence through structured development standards and secure system design.
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontFamily: "Satoshi" }}>
                        Our services include:
                    </Typography>

                    <List sx={{ mb: 6 }}>
                        {[
                            "Custom Website Development in Kannur",
                            "Full Stack Web Application Development",
                            "E-commerce Development",
                            "SEO-Optimized Business Websites",
                            "Backend API Development",
                            "Cloud Deployment and Hosting Setup"
                        ].map((item, index) => (
                            <ListItem key={index} disableGutters sx={{ py: 1 }}>
                                <ListItemIcon sx={{ minWidth: 40, color: 'secondary.main' }}>
                                    <CheckCircle2 size={24} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                        fontWeight: 600,
                                        fontSize: "1.1rem"
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.1rem",
                            lineHeight: 1.8,
                            color: "text.primary",
                            p: 4,
                            bgcolor: 'rgba(99, 102, 241, 0.05)',
                            borderRadius: 4,
                            borderLeft: '4px solid #6366f1'
                        }}
                    >
                        We work with businesses across Kannur, Kerala, and India to deliver performance-driven digital solutions.
                    </Typography>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
