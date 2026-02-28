"use client";

import React, { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { Container, Box, Typography, Button, Paper } from "@mui/material";
import { LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ALLOWED_EMAIL = "codenaxa@gmail.com";

export default function LoginForm() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        if (!loading && user) {
            if (user.email === ALLOWED_EMAIL) {
                router.push("/admin/blogs");
            } else {
                toast({
                    title: "Access Denied",
                    description: "You do not have permission to access the admin panel.",
                    variant: "destructive",
                });
            }
        }
    }, [user, loading, router, toast]);

    const handleLogin = async () => {
        if (!auth) {
            toast({
                title: "Configuration Error",
                description: "Firebase authentication is not correctly configured.",
                variant: "destructive",
            });
            return;
        }
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user.email !== ALLOWED_EMAIL) {
                toast({
                    title: "Unauthorized",
                    description: "Only the administrator can log in.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Login Failed",
                description: "Could not sign in with Google.",
                variant: "destructive",
            });
        }
    };

    if (loading) return null;

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.default" }}>
            <Container maxWidth="xs">
                <Paper sx={{ p: 6, textAlign: "center", borderRadius: 4, border: "1px solid", borderColor: "divider" }} elevation={0}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Admin Login</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
                        Please sign in with your Google account to access the blog management dashboard.
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={handleLogin}
                        startIcon={<LogIn size={20} />}
                        sx={{ py: 1.5, borderRadius: 3, fontWeight: 700 }}
                    >
                        Sign in with Google
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
}
