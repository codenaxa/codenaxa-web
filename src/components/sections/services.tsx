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
    title: "Hotel Booking Websites",
    description:
      "Custom booking systems for hotels and resorts. Includes room availability, online reservations, guest management, and payment processing.",
    benefits: ["Online room booking (24/7)", "Guest management dashboard", "Payment gateway integration", "Mobile-responsive design"],
  },
  {
    icon: <Server size={28} aria-hidden="true" />,
    title: "Restaurant Menu & Order System",
    description:
      "Digital menu websites with online ordering for restaurants and cafes. Customers view menu, place orders, and pay online.",
    benefits: ["Digital menu with photos", "Kitchen display dashboard", "Payment integration (UPI)", "Delivery system integration"],
  },
  {
    icon: <Database size={28} aria-hidden="true" />,
    title: "Clinic Appointment System",
    description:
      "Online appointment scheduling for clinics and medical practices. Reduces no-shows by 60% with automated reminders.",
    benefits: ["Online appointment calendar", "Automated SMS reminders", "Patient record management", "Doctor schedule optimization"],
  },
  {
    icon: <Zap size={28} aria-hidden="true" />,
    title: "Real Estate & Lead Portal",
    description:
      "Property listing websites for real estate agents. Showcase 50+ properties with photos, tours, and location maps.",
    benefits: ["Professional listings", "Virtual tour integration", "Lead capture forms", "Inquiry management"],
  },
  {
    icon: <Smartphone size={28} aria-hidden="true" />,
    title: "E-Commerce Shop & Online Store",
    description:
      "Build online stores for retail shops and boutiques. Customers browse, add to cart, pay, and track orders.",
    benefits: ["Product catalog management", "Shopping cart & checkout", "Multiple payment options", "Order tracking system"],
  },
  {
    icon: <Shield size={28} aria-hidden="true" />,
    title: "Salon & Service Booking System",
    description:
      "Appointment scheduling for salons, spas, and gyms. Staff management, service pricing, and automated reminders.",
    benefits: ["Staff scheduling system", "Service catalog & pricing", "Online booking calendar", "Automated reminders"],
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
          py: { xs: 12, md: 16 },
          bgcolor:
            muiTheme.palette.mode === "light"
              ? "rgba(248, 250, 252, 0.6)"
              : alpha(muiTheme.palette.background.paper, 0.2),
          borderTop: `1px solid ${muiTheme.palette.divider}`,
          borderBottom: `1px solid ${muiTheme.palette.divider}`,
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
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Custom Websites for Small Business
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
                      borderRadius: 4,
                      border: `1px solid ${muiTheme.palette.divider}`,
                      boxShadow: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        borderColor: "secondary.main",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          borderRadius: 2,
                          bgcolor: alpha(muiTheme.palette.secondary.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          color: "secondary.main",
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mb: 2, minHeight: { md: '4.5rem' }, display: 'flex', alignItems: 'flex-start', pt: 0.5 }}>
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 3,
                          lineHeight: 1.7,
                          minHeight: { md: '5rem' }
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ mt: 'auto', pt: 3, borderTop: `1px solid ${alpha(muiTheme.palette.divider, 0.5)}` }}>
                        <Box component="ul" sx={{ m: 0, pl: 2, listStyleType: 'none' }}>
                          {service.benefits.map((benefit, i) => (
                            <Box key={i} component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5, gap: 1.5 }}>
                              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', mt: 1, flexShrink: 0 }} />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 600,
                                  fontSize: "0.85rem",
                                  color: "text.primary",
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
