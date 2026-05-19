"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  alpha,
  useTheme as useMuiTheme,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const muiTheme = useMuiTheme();
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Message Sent Successfully",
        description: "Your message has been received. I will personally respond within 24 hours.",
      });

      reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "There was a technical issue.";

      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: `${errorMessage} Please try again or message on WhatsApp.`,
      });
    }
  }

  const socialLinks = [
    { icon: <MessageCircle size={20} aria-hidden="true" />, href: "https://wa.me/918281657534", label: "WhatsApp" },
    { icon: <Github size={20} aria-hidden="true" />, href: "https://github.com/codenaxa", label: "GitHub" },
    { icon: <Linkedin size={20} aria-hidden="true" />, href: "https://linkedin.com/in/codenaxa", label: "LinkedIn" },
    { icon: <Instagram size={20} aria-hidden="true" />, href: "https://instagram.com/codenaxa", label: "Instagram" },
    { icon: <Twitter size={20} aria-hidden="true" />, href: "https://x.com/codenaxa", label: "X (Twitter)" },
  ];

  return (
    <Box
      id="contact"
      component="section"
      aria-labelledby="contact-heading"
      sx={{
        py: { xs: 16, md: 24 },
        bgcolor: "#050505",
        borderTop: `1px solid rgba(255,255,255,0.05)`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                id="contact-heading"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontFamily: "var(--font-playfair), serif",
                  color: "text.primary",
                }}
              >
                Discuss Your Requirements
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 5,
                }}
              >
                Share your project requirements to begin a structured discussion.
                You can connect directly via{" "}
                <Box
                  component="a"
                  href="https://wa.me/918281657534"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: 700,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  WhatsApp
                </Box>{" "}
                for faster alignment, or submit details through the form.
              </Typography>
              <Typography variant="body2" sx={{ mb: 4, color: "text.secondary" }}>
                Projects are handled under a registered MSME framework with structured agreements and professional invoicing.
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.label}
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    sx={{
                      bgcolor: link.label === "WhatsApp" ? alpha("#25D366", 0.1) : alpha(muiTheme.palette.text.primary, 0.05),
                      
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  p: { xs: 5, md: 6 },
                  borderRadius: "6px",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  bgcolor: "#0a0a0a",
                  boxShadow: "none",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            id="contact-name"
                            fullWidth
                            label="Your Name"
                            autoComplete="name"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            sx={{
                              "& .MuiOutlinedInput-root": { 
                                borderRadius: "6px",
                                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            id="contact-email"
                            fullWidth
                            label="Email Address"
                            autoComplete="email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={{
                              "& .MuiOutlinedInput-root": { 
                                borderRadius: "6px",
                                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    <Grid size={12}>
                      <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            id="contact-message"
                            fullWidth
                            label="Project Details"
                            autoComplete="off"
                            multiline
                            rows={5}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            sx={{
                              "& .MuiOutlinedInput-root": { 
                                borderRadius: "6px",
                                '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    <Grid size={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        fullWidth
                        endIcon={!isSubmitting && <Send size={20} />}
                        sx={{
                          py: 2,
                          borderRadius: "6px",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          borderWidth: "1px",
                          borderColor: "text.primary",
                          color: "background.default",
                          bgcolor: "text.primary",
                          "&:hover": {
                            bgcolor: "secondary.main",
                          }
                        }}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Requirements"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
