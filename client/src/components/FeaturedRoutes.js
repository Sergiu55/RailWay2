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
        gap: 1,
        py: 0.9,
        textDecoration: "none",
        color: dark ? "#fff" : "text.primary",
        borderBottom: "1px solid",
        borderColor: dark ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.08)",
        "&:last-of-type": { borderBottom: "none" },
        "&:hover .route-names": { color: "primary.main" },
      }}
    >
      <Box
        className="route-names"
        sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: 17 }}
      >
        {route.from}
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
        {route.to}
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: dark ? "rgba(255,255,255,.75)" : "text.secondary",
          whiteSpace: "nowrap",
        }}
      >
        {route.duration}
      </Typography>
    </Box>
  );
}

function CountryLabel({ name }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 20,
        left: 20,
        bgcolor: "rgba(0,0,0,.7)",
        color: "#fff",
        fontSize: 13,
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        zIndex: 1,
      }}
    >
      {name}
    </Box>
  );
}

function BigCard({ country }) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        minHeight: { xs: 480, md: 0 },
        gridRow: { md: "span 2" },
        bgcolor: "#333",
        backgroundImage: `url('${country.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <CountryLabel name={country.name} />
      <Box
        sx={{
          m: 1.5,
          px: 1.5,
          py: 0.5,
          width: "100%",
          bgcolor: "rgba(20,20,20,.92)",
          borderRadius: 1.5,
        }}
      >
        {country.routes.map((r) => (
          <RouteRow key={`${r.from}-${r.to}`} route={r} dark />
        ))}
      </Box>
    </Box>
  );
}

function SmallCard({ country }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: 230,
          bgcolor: "#333",
          backgroundImage: `url('${country.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CountryLabel name={country.name} />
      </Box>
      <Box sx={{ px: 1.5, py: 0.5 }}>
        {country.routes.map((r) => (
          <RouteRow key={`${r.from}-${r.to}`} route={r} />
        ))}
      </Box>
    </Box>
  );
}

export default function FeaturedRoutes() {
  const [featured, ...others] = featuredCountries;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="overline" sx={{ letterSpacing: 1 }}>
        TRAVEL WITH RAILWAY
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontSize: { xs: 30, md: 44 }, fontWeight: 400, mb: 5 }}
      >
        Trains in Europe
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
        }}
      >
        <BigCard country={featured} />
        {others.map((c) => (
          <SmallCard key={c.slug} country={c} />
        ))}
      </Box>
    </Container>
  );
}
