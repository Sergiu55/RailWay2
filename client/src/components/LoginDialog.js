"use client";
import { useState } from "react";
import {
  Dialog,
  IconButton,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import TrainIcon from "@mui/icons-material/Train";

export default function LoginDialog({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    console.log("Continue with email:", email);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            overflow: "hidden",
            maxHeight: "90vh",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", minHeight: 520 }}>
        <Box
          sx={{
            flex: 1,
            bgcolor: "#000000",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            background: "#000000",
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.12)",
              display: "grid",
              placeItems: "center",
              mb: 2,
            }}
          >
            <TrainIcon sx={{ fontSize: 40 }} />
          </Box>
          <Typography variant="h5" fontWeight={700} mb={1}>
            RailWay
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, textAlign: "center" }}>
            Book your next journey with comfort and ease.
          </Typography>
        </Box>

        <Box sx={{ flex: 1.3, p: 3, position: "relative", bgcolor: "#F8FAFC" }}>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", top: 12, right: 12 }}
          >
            <CloseIcon />
          </IconButton>

          <Box component="form" onSubmit={handleSubmit} sx={{ pt: 5 }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
              Sign in to your account
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Use your email to continue.
            </Typography>

            <TextField
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(error)}
              helperText={error}
              placeholder="you@example.com"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineOutlinedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
                "& fieldset": { border: "none" },
                mb: 2,
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                py: 1.25,
                bgcolor: "#FFB000",
                color: "#fff",
                boxShadow: "none",
                "&:hover": { bgcolor: "#E69D00", boxShadow: "none" },
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
