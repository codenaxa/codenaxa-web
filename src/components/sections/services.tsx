"use client";


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Globe, Database, Zap, Smartphone, Server, Shield } from "lucide-react";
import { useTheme as useMuiTheme, alpha } from "@mui/material";

const services = [
  {
    icon: <Globe size={28} aria-hidden="true" />,
    title: "Hotel Booking",
    description:
      "Custom booking systems for hotels. Includes room availability, reservations, and payment processing.",
    benefits: ["Online room booking", "Guest dashboard", "Payment gateway", "Mobile-responsive"],
  },
  {
    icon: <Server size={28} aria-hidden="true" />,
    title: "Restaurant Menu",
    description:
      "Digital menu websites with online ordering. Customers can view menus, place orders, and pay online.",
    benefits: ["Digital menus", "Kitchen display", "UPI integration", "Delivery system"],
  },
  {
    icon: <Database size={28} aria-hidden="true" />,
    title: "Clinic System",
    description:
      "Online appointment scheduling for clinics. Reduces no-shows by 60% with automated reminders.",
    benefits: ["Online calendar", "SMS reminders", "Patient records", "Doctor schedules"],
  },
  {
    icon: <Zap size={28} aria-hidden="true" />,
    title: "Real Estate",
    description:
      "Property listing websites for agents. Showcase properties with photos, tours, and location maps.",
    benefits: ["Property listings", "Virtual tours", "Lead capture forms", "Inquiry tracking"],
  },
  {
    icon: <Smartphone size={28} aria-hidden="true" />,
    title: "E-Commerce",
    description:
      "Build online stores for retail shops. Customers can easily browse, add to cart, and track orders.",
    benefits: ["Product catalog", "Shopping cart", "Multiple payments", "Order tracking"],
  },
  {
    icon: <Shield size={28} aria-hidden="true" />,
    title: "Salon Booking",
    description:
      "Appointment scheduling for salons and spas. Features staff management and service pricing.",
    benefits: ["Staff scheduling", "Service pricing", "Online booking", "Automated alerts"],
  },
];

export default function ServicesSection() {
  const muiTheme = useMuiTheme();

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="services"
        component="section"
        aria-labelledby="services-heading"
        sx={{
          py: { xs: 16, md: 24 }, // Massive vertical spacing
          bgcolor: "#0a0a0a", // Secondary dark background
          borderTop: `1px solid rgba(255,255,255,0.05)`,
          borderBottom: `1px solid rgba(255,255,255,0.05)`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}>
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
                Services
              </Typography>

              <Typography
                variant="h2"
                id="services-heading"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                  fontFamily: "var(--font-playfair), serif"
                }}
              >
                Tailored Services
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                Codenaxa builds professional booking systems, digital menus, and online stores for businesses in Kerala and India. All websites are mobile-responsive, include payment processing, and have admin dashboards to manage operations.
            </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                From hotel booking systems to clinic appointments and e-commerce stores, I deliver high-quality web solutions tailored to your specific business needs. Every project is built with production-ready architecture and long-term support.
            </Typography>
            </m.div>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "6px",
                      bgcolor: "transparent",
                      border: `1px solid rgba(255,255,255,0.1)`,
                      boxShadow: "none",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        bgcolor: "#ffffff",
                        borderColor: "#ffffff",
                        "& .service-text, & .service-icon": {
                          color: "#050505",
                        },
                        "& .service-bullet": {
                          bgcolor: "#050505",
                        }
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                        <Box
                          className="service-icon"
                          sx={{
                            width: 54,
                            height: 54,
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.2)',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 4,
                            color: "text.primary",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {service.icon}
                        </Box>

                        <Typography className="service-text" variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1.5, fontFamily: "var(--font-playfair), serif", transition: "color 0.3s ease", fontSize: "1.5rem" }}>
                          {service.title}
                        </Typography>

                        <Typography
                          className="service-text"
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.7,
                            transition: "color 0.3s ease",
                          }}
                      >
                        {service.description}
                      </Typography>

                        <Box sx={{ mt: 'auto', pt: 3, borderTop: `1px solid rgba(170,170,170,0.2)` }}>
                          <Box component="ul" sx={{ m: 0, pl: 0, listStyleType: 'none' }}>
                            {service.benefits.map((benefit, i) => (
                              <Box key={i} component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 1.5 }}>
                                <Box className="service-bullet" sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.primary', mt: 1.2, flexShrink: 0, transition: "background-color 0.3s ease" }} />
                                <Typography
                                  className="service-text"
                                  variant="body2"
                                  sx={{
                                    fontWeight: 400,
                                    fontSize: "0.9rem",
                                    color: "text.primary",
                                    transition: "color 0.3s ease",
                                  }}
                                >
                                  {benefit}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </LazyMotion>
  );
}
