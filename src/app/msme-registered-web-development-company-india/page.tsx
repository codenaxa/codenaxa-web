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
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "MSME Registered Web Development Company in India | codenaxa",
    description: "codenaxa is an MSME-registered web development company in India delivering structured engineering and secure digital solutions.",
};

export default function MSMEIndiaPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <Container maxWidth="md">
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            mb: 4,
                            fontFamily: "Satoshi, sans-serif",
                            lineHeight: 1.1
                        }}
                    >
                        MSME Registered Web Development Company in India
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
                        codenaxa is officially registered under MSME India, reinforcing our commitment to professional standards and structured business practices.
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontFamily: "Satoshi" }}>
                        As an MSME-registered web development company in India, we provide:
                    </Typography>

                    <List sx={{ mb: 6 }}>
                        {[
                            "Transparent project processes",
                            "Structured contracts",
                            "Secure payment workflows",
                            "Long-term technical support",
                            "Scalable system architecture"
                        ].map((item, index) => (
                            <ListItem key={index} disableGutters sx={{ py: 1 }}>
                                <ListItemIcon sx={{ minWidth: 40, color: 'secondary.main' }}>
                                    <ShieldCheck size={24} />
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
                        Our MSME registration strengthens trust and accountability for businesses partnering with us.
                    </Typography>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
