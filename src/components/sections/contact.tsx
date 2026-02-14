"use client";

import React from "react";
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
  IconButton
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const muiTheme = useMuiTheme();
  const { toast } = useToast();

  const { control, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent Successfully",
        description: "We've received your inquiry and will respond within 24 hours.",
      });
      reset();
    } catch (error: any) {
      console.error("Submission Error:", error);
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: error.message || "There was a technical issue. Please try again or email us directly.",
      });
    }
  }

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/codenaxa", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/codenaxa", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/codenaxa", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://x.com/codenaxa", label: "X" },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: muiTheme.palette.mode === 'light' ? 'rgba(248, 250, 252, 0.3)' : 'transparent',
        borderTop: `1px solid ${muiTheme.palette.divider}`
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
                variant="caption"
                sx={{
                  fontWeight: 800,
                  color: 'secondary.main',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  display: 'block',
                  mb: 3
                }}
              >
                Project Inquiry
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontFamily: 'Satoshi, sans-serif',
                  lineHeight: 1.1,
                  mb: 4
                }}
              >
                Request a Technical <Box component="span" sx={{ color: 'secondary.main' }}>Consultation.</Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  mb: 6,
                  fontWeight: 500
                }}
              >
                Submit your project requirements for architectural review and systems evaluation. Our team will analyze your product scope and provide a technical execution strategy.
              </Typography>

              <Box sx={{ mb: 8 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    bgcolor: alpha(muiTheme.palette.secondary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'secondary.main'
                  }}>
                    <Mail size={24} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Our Team</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>contact@codenaxa.in</Typography>
                  </Box>
                </Box>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, fontFamily: 'Satoshi' }}>Connect With Us</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.label}
                    component="a"
                    href={link.href}
                    target="_blank"
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: alpha(muiTheme.palette.text.primary, 0.05),
                      color: 'text.primary',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 6,
                  border: `1px solid ${muiTheme.palette.divider}`,
                  boxShadow: muiTheme.palette.mode === 'light' ? '0 40px 80px -20px rgba(0,0,0,0.08)' : 'none',
                  bgcolor: 'background.paper',
                  backgroundImage: 'none'
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
                            fullWidth
                            label="Your Full Name"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
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
                            fullWidth
                            label="Professional Email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
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
                            fullWidth
                            label="Detailed Project Scope & Requirements"
                            variant="outlined"
                            multiline
                            rows={5}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
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
                          py: 2.2,
                          borderRadius: 3.5,
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          textTransform: 'none',
                          boxShadow: `0 20px 40px ${alpha(muiTheme.palette.primary.main, 0.2)}`,
                          '&:hover': {
                            boxShadow: `0 25px 45px ${alpha(muiTheme.palette.primary.main, 0.3)}`,
                          }
                        }}
                      >
                        {isSubmitting ? "Processing Request..." : "Initiate Consultation"}
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
