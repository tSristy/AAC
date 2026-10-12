
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      setMessage(data.message || "Login successful!");
    } catch (error) {
      console.error("Login error:", error);
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
          padding: "70px 64px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "250px",
              height: "auto",
              display: "block",
              margin: "-30px auto 5px auto",
            }}
          />
        </Box>

        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ width: "100%" }}
        >
          {/* Username */}
          <Box
            sx={{
              width: "100%",
              marginBottom: "18px",
            }}
          >
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
              variant="outlined"
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  backgroundColor: "#e3e9ee",
                  borderRadius: "5px",
                  color: "#111",
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#111",
                },
              }}
            />
          </Box>

          {/* Password */}
          <Box
            sx={{
              width: "100%",
              marginBottom: "18px",
            }}
          >
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
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        edge="end"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        sx={{
                          color: "#555",
                          "&:hover": {
                            backgroundColor:
                              "rgba(0, 0, 0, 0.05)",
                          },
                        }}
                      >
                        {showPassword ? (
                          <FullscreenExit />
                        ) : (
                          <Fullscreen />
                        )}
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
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#111",
                },
              }}
            />
          </Box>

          {/* Login Button */}
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
            {loading ? "Logging in..." : "Login"}
          </Button>

          {/*  Message */}
          {message && (
            <Typography
              role="status"
              sx={{
                mt: 2,
                color: message === "Login successful."
                  ? "green"
                  : "#b71c1c",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {message}
            </Typography>

            
          )}
          {/* Signup Link */}
   <Typography
    sx={{
    mt: 2,
    textAlign: "center",
    fontSize: "14px",
    color: "#2b1919",
  }}
>
  Don't have an account?{" "}
  <Box
    component="a"
    href="/signup"
    sx={{
      color: "#df2b2f",
      fontWeight: 600,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  >
    Sign Up
  </Box>
  </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
