"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Collapse,
} from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LoginIcon from "@mui/icons-material/Login";
import LoginDialog from "./LoginDialog";
import { europeCountries } from "@/data/europe";

const routeHref = (from, to) =>
  `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

const whiteButtonSx = {
  bgcolor: "#fff",
  color: "#1F1F1F",
  boxShadow: "0 1px 3px rgba(0,0,0,.12)",
  "&:hover": { bgcolor: "#f5f5f5" },
};

export default function Navbar() {
  const [europeOpen, setEuropeOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState(europeCountries[0]?.slug || "");
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileEuropeOpen, setMobileEuropeOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const activeCountry =
    europeCountries.find((country) => country.slug === activeSlug) || europeCountries[0];

  const openLogin = () => {
    setAnchorEl(null);
    setDrawerOpen(false);
    setLoginOpen(true);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "#000000",
          boxShadow: "0 2px 12px rgba(15, 23, 42, 0.18)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 72, md: 88 }, px: { xs: 2, md: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, minWidth: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#ffffff",
                mr: 3,
                minWidth: 0,
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "rgba(255,255,255,0.12)",
                  mr: 1,
                }}
              >
                <TrainIcon fontSize="small" />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 1.2,
                  whiteSpace: "nowrap",
                }}
              >
                RAILWAY
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              <Box sx={{ position: "relative" }}>
                <Button
                  color="inherit"
                  onClick={() => setEuropeOpen((open) => !open)}
                  endIcon={europeOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  sx={{ fontWeight: 600, textTransform: "none", color: "#fff" }}
                >
                  Europe
                </Button>

                {europeOpen && (
                  <Paper
                    elevation={3}
                    sx={{
                      position: "absolute",
                      top: 54,
                      left: 0,
                      width: 740,
                      display: "flex",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <Box sx={{ width: 220, bgcolor: "#F8FAFC", borderRight: "1px solid #E2E8F0" }}>
                      {europeCountries.map((country) => (
                        <Button
                          key={country.slug}
                          fullWidth
                          onClick={() => setActiveSlug(country.slug)}
                          sx={{
                            justifyContent: "flex-start",
                            px: 2,
                            py: 1.5,
                            borderRadius: 0,
                            color: activeSlug === country.slug ? "primary.main" : "text.primary",
                            fontWeight: activeSlug === country.slug ? 700 : 500,
                            textTransform: "none",
                          }}
                        >
                          {country.name}
                        </Button>
                      ))}
                    </Box>

                    <Box sx={{ flex: 1, p: 2, bgcolor: "#fff" }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {activeCountry.name}
                        </Typography>
                        <Button
                          component={Link}
                          href={`/country/${activeCountry.slug}`}
                          sx={{ textTransform: "none", fontWeight: 600 }}
                        >
                          All {activeCountry.name} Trains
                        </Button>
                      </Box>

                      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                        {activeCountry.routes.map(([from, to], index) => (
                          <Button
                            key={`${from}-${to}-${index}`}
                            component={Link}
                            href={routeHref(from, to)}
                            onClick={() => setEuropeOpen(false)}
                            sx={{
                              justifyContent: "space-between",
                              textTransform: "none",
                              color: "text.primary",
                              border: "1px solid #E2E8F0",
                              borderRadius: 1.5,
                              px: 1.5,
                              py: 1,
                              "&:hover": { borderColor: "primary.main", color: "primary.dark" },
                            }}
                            endIcon={<ArrowForwardIcon fontSize="small" />}
                          >
                            {from} to {to}
                          </Button>
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                )}
              </Box>

              <Button
                component={Link}
                href="/about"
                color="inherit"
                sx={{ fontWeight: 600, textTransform: "none", color: "#fff" }}
              >
                About
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setLoginOpen(true)}
              startIcon={<LoginIcon />}
              sx={{
                display: { xs: "none", md: "inline-flex" },
                textTransform: "none",
                bgcolor: "#FFB000",
                color: "#fff",
                boxShadow: "none",
                "&:hover": { bgcolor: "#E69D00", boxShadow: "none" },
                fontWeight: 700,
                borderRadius: 999,
                px: 2,
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFB000",
                color: "#fff",
                boxShadow: "none",
                "&:hover": { bgcolor: "#E69D00", boxShadow: "none" },
                display: { xs: "none", md: "inline-flex" },
                borderRadius: 999,
              }}
              onClick={(event) => setAnchorEl(event.currentTarget)}
              endIcon={anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            >
              Control panel
            </Button>

            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={openLogin}>Sign in</MenuItem>
      </Menu>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, minHeight: "100%", bgcolor: "#fff" }}>
          <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography fontWeight={700}>Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItemButton onClick={() => setMobileEuropeOpen((open) => !open)}>
              <ListItemText primary="Europe" />
              {mobileEuropeOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>

            <Collapse in={mobileEuropeOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                {europeCountries.map((country) => (
                  <ListItemButton
                    key={country.slug}
                    onClick={() => setActiveSlug(country.slug)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={country.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton component={Link} href="/about" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="About" />
            </ListItemButton>

            <ListItemButton onClick={openLogin}>
              <ListItemText primary="Sign in" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
