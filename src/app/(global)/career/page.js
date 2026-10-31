"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";


const initialCareerDetails = {
  name: "",
  email: "",
  phone: "",
  address: "",
  cover_letter: "",
  file_path: "",
};

export default function Career() {
  const [careerDetails, setCareerDetails] = useState(initialCareerDetails);

  const [openAlert, setOpenAlert] = useState(false);
  const [msgText, setMsgText] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCareerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpenAlert(false);
    setMsgText({});
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setMsgText({
        error: "Please upload a PDF file.",
      });
      setOpenAlert(true);
      e.target.value = "";
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setMsgText({
        error: "The file is too large. Max (3MB).",
      });

      setOpenAlert(true);
      e.target.value = "";

      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });

      return;
    }

    setCareerDetails((prev) => ({
      ...prev,
      file_path: file,
    }));
  };

  const removeFile = () => {
    setCareerDetails((prev) => ({
      ...prev,
      file_path: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", careerDetails.name);
      formData.append("email", careerDetails.email);
      formData.append("phone", careerDetails.phone);
      formData.append("address", careerDetails.address);
      formData.append("cover_letter", careerDetails.cover_letter);

      if (careerDetails.file_path instanceof File) {
        formData.append("file_path", careerDetails.file_path);
      }

      const response = await ServerApi(
        "/career/add",
        "POST",
        null,
        formData,
        true
      );

      const res = await response.json();

      if (res.status) {
        setMsgText(res);
        setOpenAlert(true);
        setCareerDetails(initialCareerDetails);
      } else {
        setMsgText({
          error: res.message || "Something went wrong.",
        });
        setOpenAlert(true);
      }
    } catch (error) {
      console.error("Career submission error:", error);

      setMsgText({
        error: "Unable to submit your application. Please try again.",
      });

      setOpenAlert(true);
    }
  };

  return (
    <>
      {/* Notification */}
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={msgText.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {msgText.message || msgText.error}
        </Alert>
      </Snackbar>

      {/* Career Form */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Box px={{ xs: 2, sm: 5, md: 10 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                fontWeight: 600,
                mb: 5,
                textAlign: "center",
                color: "#6c6c6c",
              }}
            >
              Join Us & Grow Fast
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={4} px={4}>

                {/* Full Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={careerDetails.name}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={careerDetails.email}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Address */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    name="address"
                    label="Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={careerDetails.address}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Mobile Number & Resume */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    name="phone"
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={careerDetails.phone}
                    onChange={handleChange}
                  />

                  {/* Resume Upload */}
                  <Box py={4}>
                    <Button
                      color={careerDetails.file_path ? "inherit" : "error"}
                      component="label"
                      variant={
                        careerDetails.file_path
                          ? "outlined"
                          : "contained"
                      }
                      startIcon={<AttachFileIcon />}
                      sx={{
                        textTransform: "none",
                        width: "100%",
                        py: 1,
                      }}
                      endIcon={
                        careerDetails.file_path ? (
                          <IconButton
                            sx={{
                              p: 0,
                              bgcolor: "#23232365",
                            }}
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              removeFile();
                            }}
                          >
                            <CloseIcon
                              fontSize="small"
                              sx={{ color: "white" }}
                            />
                          </IconButton>
                        ) : null
                      }
                    >
                      {careerDetails.file_path
                        ? careerDetails.file_path.name
                        : "Upload Resume"}

                      <input
                        type="file"
                        accept="application/pdf"
                        hidden
                        onChange={handleFileChange}
                      />
                    </Button>

                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                      mt={1}
                    >
                      Upload PDF only (Maximum 3MB)
                    </Typography>
                  </Box>
                </Grid>

                {/* Cover Letter */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    name="cover_letter"
                    label="Cover Letter"
                    placeholder="Remember to write within 200 words."
                    multiline
                    minRows={4}
                    maxRows={10}
                    variant="outlined"
                    fullWidth
                    value={careerDetails.cover_letter}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid
                  size={{ xs: 12 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  
                </Grid>

              </Grid>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}