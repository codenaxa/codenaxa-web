"use client";


import { Fab, Tooltip, Zoom, useTheme } from "@mui/material";
import { MessageCircle } from "lucide-react";

export default function WhatsappFloat() {
    const theme = useTheme();
    const whatsappNumber = "918281657534";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20I%20am%20interested%20in%20building%20a%20web%20project.%20I%20found%20your%20website%20codenaxa.in`;

    return (
        <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
            <Tooltip title="Chat on WhatsApp" placement="left" arrow>
                <Fab
                    color="primary"
                    aria-label="Chat with us on WhatsApp"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        position: "fixed",
                        bottom: { xs: 20, md: 30 },
                        right: { xs: 20, md: 30 },
                        bgcolor: "#075E54", // Darker WhatsApp Green for accessibility
                        color: "white",
                        zIndex: 1000,
                        "&:hover": {
                            bgcolor: "#107C6F",
                            transform: "scale(1.1)",
                        },
                        transition: "all 0.3s ease-in-out",
                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
                    }}
                >
                    <MessageCircle size={24} fill="currentColor" />
                </Fab>
            </Tooltip>
        </Zoom>
    );
}
