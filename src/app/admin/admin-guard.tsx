"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";

const ALLOWED_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push("/login");
            } else if (user.email !== ALLOWED_EMAIL) {
                router.push("/");
            }
        }
    }, [user, loading, router]);

    if (loading || !user || user.email !== ALLOWED_EMAIL) {
        return (
            <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    return <>{children}</>;
}
