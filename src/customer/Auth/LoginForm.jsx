import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userData:", userData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>

        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          fullWidth
        />

        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "#9155FD" }}
          fullWidth
        >
          Login
        </Button>
      </Box>

      <Box sx={{ py: 3, display: "flex", alignItems: "center" }}>
        <Typography>Don't have an account?</Typography>
        <Button
          onClick={() => navigate("/register")}
          size="small"
          sx={{ ml: 1 }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
