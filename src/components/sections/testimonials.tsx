"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const testimonials = [
  {
    name: "P&S Laser Cutting",
    text: "Clear communication and structured development process. The project was handled professionally with transparency at every stage.",
    stars: 5,
  },
  {
    name: "Sinoy C",
    text: "Professional execution and smooth collaboration throughout the project.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const muiTheme = useMuiTheme();

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="reviews"
        component="section"
        aria-labelledby="reviews-heading"
        sx={{
          py: { xs: 12, md: 16 },
          bgcolor:
            muiTheme.palette.mode === "light"
              ? "rgba(248, 250, 252, 0.6)"
              : alpha(muiTheme.palette.background.paper, 0.1),
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: "center" }}>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="caption"
                component="p"
                sx={{
                  fontWeight: 800,
                  color: "secondary.main",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  display: "block",
                  mb: 2.5,
                }}
              >
                Client Reviews
              </Typography>

              <Typography
                variant="h2"
                id="reviews-heading"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "2rem", sm: "2.25rem", md: "3rem" },
                }}
              >
                Trusted by Real Clients
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 650,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                Feedback from businesses I have worked with - reflecting reliability, technical expertise, and transparent
                execution.
              </Typography>
            </m.div>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 4,
                      border: `1px solid ${muiTheme.palette.divider}`,
                      boxShadow: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        borderColor: "secondary.main",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0.5, mb: 2 }} role="img" aria-label={`${testimonial.stars} out of 5 stars`}>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={18} fill="#FFB400" color="#FFB400" aria-hidden="true" />
                      ))}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      component="p"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.name}
                    </Typography>

                    <Typography variant="caption" component="p" sx={{ color: "text.secondary" }}>
                      Verified Google Review
                    </Typography>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <a
              href="https://maps.app.goo.gl/8YUzeDmYqNane7Gz9"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: muiTheme.palette.secondary.main,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>View all reviews on Google</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </Box>
        </Container>
      </Box>
    </LazyMotion>
  );
}