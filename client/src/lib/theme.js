"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#F59E0B", dark: "#D97706", contrastText: "#1F2937" },
    background: { default: "#FFFFFF", paper: "#F3F4F6" },
    text: { primary: "#1F2937", secondary: "#4B5563" },
  },
  shape: { borderRadius: 10 },
  typography: {
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
