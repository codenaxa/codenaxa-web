"use client";

import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

const baseThemeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'var(--font-inter), sans-serif',
        h1: {
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 700,
            letterSpacing: '0.02em',
            fontSize: '4.5rem',
        },
        h2: {
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 700,
            letterSpacing: '0.01em',
            fontSize: '3.5rem',
        },
        h3: {
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        h4: {
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 600,
            fontSize: '1.75rem',
        },
        h5: {
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 600,
            fontSize: '1.25rem',
        },
        h6: {
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 600,
            fontSize: '1.1rem',
        },
        body1: {
            lineHeight: 1.6,
            fontSize: '1.125rem',
            fontFamily: 'var(--font-inter), sans-serif',
        },
        body2: {
            lineHeight: 1.6,
            fontSize: '1rem',
            fontFamily: 'var(--font-inter), sans-serif',
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

export const darkTheme = responsiveFontSizes(createTheme({
    ...baseThemeOptions,
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff', // White
            dark: '#d1d1d1', // Gray
        },
        secondary: {
            main: '#aaaaaa', // Lighter Gray
            dark: '#111111',
        },
        background: {
            default: '#050505', // Deep pure black
            paper: '#111111',   // Secondary dark
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
        },
        divider: 'rgba(255,255,255,0.1)',
    },
}));
