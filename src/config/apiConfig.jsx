import axios from "axios";


// export const API_BASE_URL = "http://localhost:5454";

export const API_BASE_URL = "https://backend-ecommerce-4-jypt.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔑 Always pick latest jwt from localStorage before sending request
api.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    config.headers["Authorization"] = `Bearer ${jwt}`;
  }
  return config;
});
