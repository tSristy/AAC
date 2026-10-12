"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Fullscreen from "@mui/icons-material/Fullscreen";
import FullscreenExit from "@mui/icons-material/FullscreenExit";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event) {
    event.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Signup failed.");
        return;
      }

      setMessage(data.message || "Signup successful!");
      setName("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: `
          radial-gradient(
            circle at 18% 8%,
            #f0f6f1 0%,
            #c3dbcd 18%,
            #70bd91 32%,
            #84ce94 55%
          )
        `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 565,
          minHeight: 400,
          backgroundColor: "rgba(252, 251, 251, 0.38)",
          border: "1px solid #5a5a5a",
          borderRadius: "9px",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 64px 40px",
          boxSizing: "border-box",
        }}
      >
      


        <Typography
          sx={{
           background: "linear-gradient(135deg, #075841, #70bd91)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
            fontSize: "30px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          Create Account
        </Typography>

        <Box
          component="form"
          onSubmit={handleSignup}
          sx={{ width: "100%" }}
        >
          {/* Name */}
          <Box sx={{ width: "100%", marginBottom: "14px" }}>
            <Typography
              sx={{
                color: "#2b1919",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Full Name
            </Typography>

            <TextField
              fullWidth
              required
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  backgroundColor: "#e3e9ee",
                  borderRadius: "5px",
                  color: "#111",
                  "& fieldset": { border: "none" },
                },
                "& .MuiInputBase-input": { color: "#111" },
              }}
            />
          </Box>

          {/* Email */}
          <Box sx={{ width: "100%", marginBottom: "14px" }}>
            <Typography
              sx={{
                color: "#2b1919",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Email
            </Typography>

            <TextField
              fullWidth
              required
              type="email"
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  backgroundColor: "#e3e9ee",
                  borderRadius: "5px",
                  color: "#111",
                  "& fieldset": { border: "none" },
                },
                "& .MuiInputBase-input": { color: "#111" },
              }}
            />
          </Box>

          {/* Password */}
          <Box sx={{ width: "100%", marginBottom: "14px" }}>
            <Typography
              sx={{
                color: "#2b1919",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Password
            </Typography>

            <TextField
              fullWidth
              required
              type={showPassword ? "text" : "password"}
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              
              slotProps={{
              htmlInput: {
              minLength: 6,
               },
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        sx={{
                          color: "#555",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                          },
                        }}
                      >
                        {showPassword ? <FullscreenExit /> : <Fullscreen />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  backgroundColor: "#e3e9ee",
                  borderRadius: "5px",
                  color: "#111",
                  "& fieldset": { border: "none" },
                },
                "& .MuiInputBase-input": { color: "#111" },
              }}
            />
          </Box>

          {/* Confirm Password */}
          <Box sx={{ width: "100%", marginBottom: "18px" }}>
            <Typography
              sx={{
                color: "#2b1919",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Confirm Password
            </Typography>

            <TextField
              fullWidth
              required
              type={showPassword ? "text" : "password"}
              size="small"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  backgroundColor: "#e3e9ee",
                  borderRadius: "5px",
                  color: "#111",
                  "& fieldset": { border: "none" },
                },
                "& .MuiInputBase-input": { color: "#111" },
              }}
            />
          </Box>

          {/* Signup btn */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              height: "43px",
              backgroundColor: "#df2b2f",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 400,
              borderRadius: "5px",
              textTransform: "uppercase",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#c92327",
                boxShadow: "none",
              },
            }}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </Button>

          {/* Response  */}
          {message && (
            <Typography
              role="status"
              sx={{
                mt: 2,
                color: message.toLowerCase().includes("successful")
                  ? "green"
                  : "#b71c1c",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {message}
            </Typography>
          )}
          {/* log Link */}
     <Typography
      sx={{
      mt: 2,
      textAlign: "center",
      fontSize: "14px",
      color: "#2b1919",
    }}
>
    Already have an account?{" "}
   <Box
    component="a"
    href="/login"
    sx={{
      color: "#df2b2f",
      fontWeight: 600,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  >
    Log In
  </Box>
   </Typography>
        </Box>
      </Paper>
    </Box>
  );
}