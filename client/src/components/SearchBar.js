"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import {
  Box,
  Autocomplete,
  TextField,
  IconButton,
  Button,
  Popover,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { cities } from "@/data/cities";

const whiteBox = {
  bgcolor: "#fff",
  color: "#1F1F1F",
  borderRadius: 2,
  "&:hover": { bgcolor: "#f5f5f5" },
};

const cityFieldSx = {
  flex: 1,
  "& fieldset": { border: "none" },
  "& input": { fontSize: 16 },
};

function Counter({ label, hint, value, min, max, onChange }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 1.5 }}>
      <Box>
        <Typography sx={{ fontWeight: 700 }}>{label}</Typography>
        {hint && (
          <Typography variant="caption" color="text.secondary">
            {hint}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          sx={{ border: "1px solid #ddd" }}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ minWidth: 20, textAlign: "center", fontWeight: 600 }}>{value}</Typography>
        <IconButton
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          sx={{ border: "1px solid #ddd" }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function SearchBar() {
  const router = useRouter();

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [error, setError] = useState("");

  const [dateAnchor, setDateAnchor] = useState(null);
  const [returnAnchor, setReturnAnchor] = useState(null);
  const [paxAnchor, setPaxAnchor] = useState(null);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    if (!from || !to) {
      setError("Please choose a departure and an arrival city.");
      return;
    }
    if (from === to) {
      setError("Departure and arrival cities must be different.");
      return;
    }
    setError("");

    const params = new URLSearchParams({
      from,
      to,
      date: date.format("YYYY-MM-DD"),
      adults: String(adults),
      children: String(children),
    });
    if (returnDate) params.set("returnDate", returnDate.format("YYYY-MM-DD"));

    router.push(`/search?${params.toString()}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        bgcolor: "#F8FAFC",
        borderRadius: 4,
        p: { xs: 2, md: 3 },
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.12)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: "center" }}>
        <Box sx={{ display: "flex", flex: 1, alignItems: "center", gap: 1, width: "100%" }}>
          <Autocomplete
            options={cities}
            value={from}
            onChange={(event, value) => setFrom(value)}
            sx={cityFieldSx}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="From" placeholder="Departure city" />
            )}
          />

          <IconButton onClick={swap} sx={{ ...whiteBox, width: 42, height: 42, borderRadius: 2 }}>
            <SwapHorizIcon />
          </IconButton>

          <Autocomplete
            options={cities}
            value={to}
            onChange={(event, value) => setTo(value)}
            sx={cityFieldSx}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="To" placeholder="Arrival city" />
            )}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2, alignItems: "stretch" }}>
        <Box sx={{ display: "flex", gap: 2, flex: 1, flexWrap: "wrap" }}>
          <Button
            onClick={(e) => setDateAnchor(e.currentTarget)}
            sx={{ ...whiteBox, borderRadius: 0, flexDirection: "column", px: 2.5, py: 1, color: "#1F1F1F", minWidth: 110 }}
          >
            <Box sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{date.format("D")}</Box>
            <Box sx={{ fontSize: 13, textTransform: "uppercase", opacity: 0.8 }}>{date.format("MMM")}</Box>
          </Button>

          <Button
            onClick={(e) => setReturnAnchor(e.currentTarget)}
            sx={{ ...whiteBox, borderRadius: 0, flexDirection: "column", px: 2.5, py: 1, color: "#1F1F1F", minWidth: 110 }}
          >
            {returnDate ? (
              <>
                <Box sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{returnDate.format("D")}</Box>
                <Box sx={{ fontSize: 13, textTransform: "uppercase", opacity: 0.8 }}>{returnDate.format("MMM")}</Box>
              </>
            ) : (
              <Box sx={{ fontSize: 15, fontWeight: 600 }}>Return</Box>
            )}
          </Button>

          <Button
            onClick={(e) => setPaxAnchor(e.currentTarget)}
            sx={{ ...whiteBox, flexDirection: "column", px: 2.5, py: 1, minWidth: 120 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonOutlineOutlinedIcon />
              <Typography sx={{ fontWeight: 700 }}>{adults + children} </Typography>
            </Box>
          </Button>
        </Box>

        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{ flex: 1, minWidth: { xs: "100%", md: 0 }, minHeight: 64, fontSize: 16, fontWeight: 700, textTransform: "none" }}
          endIcon={<SearchIcon />}
        >
          Search trains
        </Button>
      </Box>

      {error && (
        <Box sx={{ mt: 2, color: "error.main", fontWeight: 600, fontSize: 14 }}>
          {error}
        </Box>
      )}

      <Popover open={Boolean(dateAnchor)} anchorEl={dateAnchor} onClose={() => setDateAnchor(null)} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={date}
            onChange={(value) => {
              setDate(value);
              if (returnDate && returnDate.isBefore(value, "day")) setReturnDate(null);
              setDateAnchor(null);
            }}
          />
        </LocalizationProvider>
      </Popover>

      <Popover open={Boolean(returnAnchor)} anchorEl={returnAnchor} onClose={() => setReturnAnchor(null)} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ p: 1 }}>
            <DateCalendar
              value={returnDate || date}
              onChange={(value) => {
                setReturnDate(value);
                setReturnAnchor(null);
              }}
            />
            {returnDate && (
              <Button
                startIcon={<CloseIcon />}
                onClick={() => {
                  setReturnDate(null);
                  setReturnAnchor(null);
                }}
                sx={{ width: "100%", textTransform: "none", mt: 1 }}
              >
                Remove return
              </Button>
            )}
          </Box>
        </LocalizationProvider>
      </Popover>

      <Popover open={Boolean(paxAnchor)} anchorEl={paxAnchor} onClose={() => setPaxAnchor(null)} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
        <Box sx={{ p: 2, minWidth: 280 }}>
          <Counter
            label="Adults"
            hint="Aged 16+"
            value={adults}
            min={1}
            max={8}
            onChange={(value) => setAdults(Math.min(Math.max(value, 1), 8))}
          />
          <Counter
            label="Children"
            hint="Aged 0-15"
            value={children}
            min={0}
            max={6}
            onChange={(value) => setChildren(Math.min(Math.max(value, 0), 6))}
          />
        </Box>
      </Popover>
    </Box>
  );
}
