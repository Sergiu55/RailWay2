import { Box, Container, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#111",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.88) 0%, rgba(0,0,0,.6) 55%, rgba(0,0,0,.3) 100%), url('/images/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 1, letterSpacing: -0.5 }}>
          From Moldova to Europe.
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
          One checkout.
        </Typography>
        <SearchBar />
      </Container>
    </Box>
  );
}
