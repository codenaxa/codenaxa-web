"use client";

import React, { useState, useEffect } from "react";
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
  useTheme as useMuiTheme,
  alpha
} from "@mui/material";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#reviews", label: "Reviews", id: "reviews" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const muiTheme = useMuiTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = navLinks.map(link => link.id).filter(id => id !== "home");
        let current = "home";

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // A bit of offset for activation
            if (rect.top <= 150) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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
        backgroundColor: isScrolled
          ? alpha(muiTheme.palette.background.default, 0.8)
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
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
          <Link href="/" className="flex items-center gap-2 no-underline">
            <Box sx={{ position: 'relative', width: 36, height: 36 }}>
              <Image
                src="/logo.png"
                alt="Codenaxa"
                fill
                sizes="36px"
                className="object-contain"
              />
            </Box>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 dark:from-white dark:to-neutral-400 font-satoshi">
              codenaxa
            </span>
          </Link>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 5 }}>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="no-underline"
              >
                <span className={cn(
                  "text-[15px] font-semibold transition-all duration-200 relative py-1",
                  isLinkActive(link.href, link.id)
                    ? "text-neutral-950 dark:text-white"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                )}>
                  {link.label}
                  {isLinkActive(link.href, link.id) && (
                    <Box
                      component="span"
                      sx={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '100%',
                        height: 2,
                        backgroundColor: 'primary.main',
                        borderRadius: 1
                      }}
                    />
                  )}
                </span>
              </Link>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
              <ThemeToggle />
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/#contact"
                sx={{
                  borderRadius: '10px',
                  px: 4,
                  py: 1,
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'none'
                }}
              >
                Inquiry
              </Button>
            </Box>
          </Box>

          {/* Mobile Right Side */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <ThemeToggle />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <Menu size={24} />
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
          <span className="text-xl font-bold font-satoshi">codenaxa</span>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <X size={24} />
          </IconButton>
        </Box>
        <List sx={{ mb: 4 }}>
          {navLinks.map((link) => (
            <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  backgroundColor: isLinkActive(link.href, link.id) ? alpha(muiTheme.palette.primary.main, 0.05) : 'transparent',
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: isLinkActive(link.href, link.id) ? 700 : 500,
                    fontSize: '18px',
                    fontFamily: 'Satoshi'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ py: 2, borderRadius: 3, fontWeight: 700 }}
          component={Link}
          href="/#contact"
          onClick={handleDrawerToggle}
        >
          Submit Scope
        </Button>
      </Drawer>
    </AppBar>
  );
}
