"use client";

import Link from 'next/link';
import { Button } from '@mui/material';
import { Home } from 'lucide-react';

export default function BackToHomeButton() {
    return (
        <Button
            variant="contained"
            component={Link}
            href="/"
            startIcon={<Home size={20} />}
            sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                textTransform: 'none',
            }}
        >
            Back to Home
        </Button>
    );
}
