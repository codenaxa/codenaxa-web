"use client";

import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

const baseThemeOptions: ThemeOptions = {
    typography: {
        fontFamily: '"Inter", "Manrope", sans-serif',
        h1: {
            fontFamily: '"Satoshi", "General Sans", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            fontSize: '3.5rem',
        },
        h2: {
            fontFamily: '"Satoshi", "General Sans", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: '"Satoshi", "General Sans", sans-serif',
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontFamily: '"Satoshi", "General Sans", sans-serif',
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        h5: {
            fontFamily: '"Satoshi", "General Sans", sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
        },
        h6: {
            fontFamily: '"Satoshi", "General Sans", sans-serif',
            fontWeight: 600,
            fontSize: '1.1rem',
        },
        body1: {
            lineHeight: 1.6,
            fontSize: '1rem',
        },
        body2: {
            lineHeight: 1.6,
            fontSize: '0.875rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
                    '&:hover': {
                        boxShadow: 'none',
                        transform: 'translateY(-1px)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            },
            styleOverrides: {
                root: {
                    '@media (min-width: 1200px)': {
                        maxWidth: '1200px',
                    },
                },
            },
        },
    },
};

export const lightTheme = responsiveFontSizes(createTheme({
    ...baseThemeOptions,
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#4f46e5',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#111827',
            secondary: '#4b5563',
        },
        divider: 'rgba(0,0,0,0.06)',
    },
}));

export const darkTheme = responsiveFontSizes(createTheme({
    ...baseThemeOptions,
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#818cf8',
            contrastText: '#000000',
        },
        background: {
            default: '#0a0a0a',
            paper: '#141414',
        },
        text: {
            primary: '#f9fafb',
            secondary: '#9ca3af',
        },
        divider: 'rgba(255,255,255,0.08)',
    },
    components: {
        ...baseThemeOptions.components,
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backgroundImage: 'none',
                },
            },
        },
    },
}));
