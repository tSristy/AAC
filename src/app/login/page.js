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
          height: 400,
          backgroundColor: "rgba(252, 251, 251, 0.38)",
          border: "1px solid #5a5a5a",
          borderRadius: "9px",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "70px 64px 60px",
          boxSizing: "border-box",
        }}
      >


{/* box */}
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

        {/* username */}
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
            Username
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            size="small"
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
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      sx={{
                        color: "#555",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.05)",
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

        {/*  log button */}
        <Button
          fullWidth
          variant="contained"
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
          Login
        </Button>
      </Paper>
    </Box>
  );
}