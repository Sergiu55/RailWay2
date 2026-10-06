"use client";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { featuredCountries } from "@/data/featured";

const routeHref = (from, to) =>
  `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

function RouteRow({ route, dark }) {
  return (
    <Box
      component={Link}
      href={routeHref(route.from, route.to)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 1.5,
        py: 1,
        borderRadius: 2,
        textDecoration: "none",
        color: dark ? "#fff" : "#1F2937",
        bgcolor: dark ? "rgba(255,255,255,0.06)" : "#f9fafb",
        border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #eef2f7",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>{route.from}</Typography>
        <Typography sx={{ fontSize: 12, opacity: 0.8 }}>{route.to}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 12 }}>{route.duration}</Typography>
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
  );
}

function CountryLabel({ name }) {
  return (
    <Typography variant="overline" sx={{ letterSpacing: 1.2, color: "#F59E0B", fontWeight: 700 }}>
      {name}
    </Typography>
  );
}

function BigCard({ country }) {
  return (
    <Box
      sx={{
        flex: 1.6,
        minHeight: 360,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.7)), url('${country.image}') center/cover no-repeat`,
        boxShadow: "0 18px 35px rgba(15,23,42,0.12)",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, p: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <CountryLabel name={country.name} />
        <Box sx={{ mt: 2, display: "grid", gap: 1.2 }}>
          {country.routes.map((r) => (
            <RouteRow key={`${country.slug}-${r.from}-${r.to}`} route={r} dark />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function SmallCard({ country }) {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 4,
        p: 2,
        boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <CountryLabel name={country.name} />
      </Box>
      <Box sx={{ display: "grid", gap: 1.5 }}>
        {country.routes.map((r) => (
          <RouteRow key={`${country.slug}-${r.from}-${r.to}`} route={r} dark={false} />
        ))}
      </Box>
    </Box>
  );
}

export default function FeaturedRoutes() {
  const [featured, ...others] = featuredCountries;

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#F59E0B", fontWeight: 700, letterSpacing: 1.5 }}>
          TRAVEL WITH RAILWAY
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 4, fontWeight: 800 }}>
          Trains in Europe
        </Typography>

        <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", md: "row" } }}>
          <BigCard country={featured} />

          <Box sx={{ flex: 1, display: "grid", gap: 3 }}>
            {others.map((c) => (
              <SmallCard key={c.slug} country={c} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
