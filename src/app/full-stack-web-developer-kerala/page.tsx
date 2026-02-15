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
import { Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Full Stack Web Developer in Kerala | Secure & Scalable Solutions",
    description: "Hire a professional full stack web developer in Kerala. codenaxa builds scalable frontend and backend systems using modern technologies.",
};

export default function KeralaFullStackPage() {
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
                        Full Stack Web Developer in Kerala
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
                        codenaxa provides full stack web development services across Kerala. Our expertise includes frontend frameworks, backend architecture, database design, API integration, and production deployment.
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontFamily: "Satoshi" }}>
                        Our full stack capabilities include:
                    </Typography>

                    <List sx={{ mb: 6 }}>
                        {[
                            "React & Next.js Frontend Development",
                            "Node.js & Backend Engineering",
                            "REST API Development",
                            "Database Architecture (MongoDB / PostgreSQL)",
                            "Authentication & Authorization Systems",
                            "Performance Optimization"
                        ].map((item, index) => (
                            <ListItem key={index} disableGutters sx={{ py: 1 }}>
                                <ListItemIcon sx={{ minWidth: 40, color: 'secondary.main' }}>
                                    <Zap size={24} />
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
                        We build web applications designed for scalability, security, and long-term maintainability.
                    </Typography>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
