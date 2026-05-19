"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme as useMuiTheme,
  alpha
} from "@mui/material";
import { useAuth } from "@/components/auth-provider";


const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#work-packages", label: "Packages", id: "work-packages" },
  { href: "/blog", label: "Blog", id: "blog" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const { user } = useAuth();
  const pathname = usePathname();
  const muiTheme = useMuiTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isAdmin = user?.email === "codenaxa@gmail.com";
  const activeNavLinks = useMemo(
    () =>
      isAdmin
        ? [...navLinks, { href: "/admin/blogs", label: "Dashboard", id: "dashboard" }]
        : navLinks,
    [isAdmin]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = activeNavLinks
      .map(link => link.id)
      .filter(id => id !== "home" && id !== "blog" && id !== "dashboard");

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });

      // Special case for home (top of page)
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname, activeNavLinks]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isLinkActive = (href: string, id: string) => {
    if (pathname === "/" && href === "/") return activeSection === "home";
    if (pathname === "/" && href.startsWith("/#")) return activeSection === id;
    return pathname === href;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: alpha(muiTheme.palette.background.default, 0.5),
        backdropFilter: 'blur(12px)',
        boxShadow: 'none',
        color: muiTheme.palette.text.primary,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: isScrolled ? `1px solid ${muiTheme.palette.divider}` : '1px solid transparent',
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: { xs: 70, md: 90 }, justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline" style={{ textDecoration: 'none' }}>
            <Box sx={{ position: 'relative', width: 36, height: 36 }}>
              <Image
                src="/logo.png"
                alt="Codenaxa"
                fill
                sizes="36px"
                priority
                className="object-contain"
              />
            </Box>
            <Typography component="span" sx={{ fontSize: '1.25rem', fontWeight: 800, color: 'text.primary', letterSpacing: '0.05em', fontFamily: 'var(--font-playfair), serif' }}>
              codenaxa
            </Typography>
          </Link>

          {/* Desktop Nav */}
          <Box
            component="nav"
            aria-label="Primary"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 5 }}
          >
            {activeNavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="no-underline"
                aria-current={isLinkActive(link.href, link.id) ? "page" : undefined}
              >
                <Box component="span" sx={{
                  color: muiTheme.palette.text.primary,
                  fontWeight: isLinkActive(link.href, link.id) ? 700 : 500,
                  fontSize: '15px',
                  position: 'relative',
                  display: 'inline-block',
                  padding: '4px 0',
                  opacity: isLinkActive(link.href, link.id) ? 1 : 0.7,
                  transition: 'opacity 0.3s ease',
                  fontFamily: 'var(--font-inter), sans-serif'
                }}>
                  {link.label}
                  <Box
                    component="span"
                    sx={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: isLinkActive(link.href, link.id) ? '100%' : '0%',
                      height: 2,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                      '.no-underline:hover &': {
                        width: '100%',
                      }
                    }}
                  />
                </Box>
              </Link>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>

              <Button
                variant="outlined"
                color="primary"
                component={Link}
                href="/#contact"
                sx={{
                  borderRadius: '6px',
                  px: 4,
                  py: 1,
                  fontWeight: 500,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderWidth: '1px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'background.default',
                  }
                }}
              >
                Let's Talk
              </Button>
            </Box>
          </Box>

          {/* Mobile Right Side */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>

            <IconButton
              aria-label="Open navigation menu"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, color: 'text.primary' }}
            >
              <Menu size={24} aria-hidden="true" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 320,
            backgroundColor: 'background.default',
            backgroundImage: 'none',
            p: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography component="span" sx={{ fontSize: '1.25rem', fontWeight: 800, color: 'text.primary', fontFamily: 'var(--font-playfair), serif' }}>
            codenaxa
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }} aria-label="Close navigation menu">
            <X size={24} aria-hidden="true" />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Mobile primary" sx={{ mb: 4 }}>
          {activeNavLinks.map((link) => (
            <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={handleDrawerToggle}
                aria-current={isLinkActive(link.href, link.id) ? "page" : undefined}
                sx={{
                  borderRadius: 2,
                  backgroundColor: isLinkActive(link.href, link.id) ? alpha(muiTheme.palette.primary.main, 0.05) : 'transparent',
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 500,
                      fontSize: '18px',
                      color: 'text.primary',
                      opacity: isLinkActive(link.href, link.id) ? 1 : 0.7,
                      fontFamily: 'var(--font-inter), sans-serif'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          sx={{ 
            py: 2, 
            borderRadius: '6px', 
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            borderWidth: '1px'
          }}
          component={Link}
          href="/#contact"
          onClick={handleDrawerToggle}
        >
          Let's Talk
        </Button>
      </Drawer>
    </AppBar>
  );
}
