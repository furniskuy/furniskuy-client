import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data.data);
  },
  (error) => {
    // if (error.response.status === 401) {
    //   toast.error("Autentikasi gagal, silahkan login kembali");
    //   localStorage.clear();
    //   window.location.href = "/#/login";
    // }
    return Promise.reject(error.response.data);
  }
);

api.interceptors.request.use((config) => {
  const jsonToken = localStorage.getItem("access_token");
  const token =
    jsonToken && jsonToken !== "undefined" ? JSON.parse(jsonToken) : null;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
