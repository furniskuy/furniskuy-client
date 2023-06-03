import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

api.interceptors.response.use((response) => {
  return response.data;
});

api.interceptors.request.use((config) => {
  const jsonToken = localStorage.getItem("access_token");
  const token = jsonToken ? JSON.parse(jsonToken) : null;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
