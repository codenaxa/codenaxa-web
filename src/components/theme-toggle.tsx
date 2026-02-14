"use client";

import React from "react";
import { IconButton, useTheme as useMuiTheme } from "@mui/material";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const muiTheme = useMuiTheme();

    return (
        <IconButton
            onClick={toggleTheme}
            sx={{
                color: muiTheme.palette.text.primary,
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                border: '1px solid',
                borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '8px',
                '&:hover': {
                    backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
                },
            }}
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon size={18} strokeWidth={2} />
            ) : (
                <Sun size={18} strokeWidth={2} />
            )}
        </IconButton>
    );
}
