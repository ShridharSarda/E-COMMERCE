import React from "react";
import { Button, TextField, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../State/Auth/Action";
import { useEffect } from "react";

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const jwt = localStorage.getItem("jwt")
   const {auth}=useSelector(store=>store)
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }
  }, [jwt,auth.jwt])

  











  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData))
    console.log("userData:", userData);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Register
        </Typography>

        {/* First + Last Name Row */}
        <Grid
          container
          spacing={6}
          sx={{ mb: 2, width: "550px", justifyContent: "center" }}
        >
          <Grid item xs={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
        </Grid>

        {/* Email */}
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          sx={{ width: "500px" }}
        />

        {/* Password */}
        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{ width: "500px" }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "500px", bgcolor: "#9155FD" }}
        >
          Register
        </Button>
      </Box>

      <div className="flex  justify center flex-col items-center">
        <div className="py-3 flex item-center">
          <p>Already have an account?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
