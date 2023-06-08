import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Footer } from "./Footer";
import { Header } from "./Header";

import { useAuth } from "@/context/AuthProvider";

import styles from "./Layout.module.css";

export const Layout = () => {
  const auth = useAuth();

  return (
    <div className={styles["layoutContainer"]}>
      <Header isAuthenticated={!!auth?.accessToken} />
      <div className={styles["contentContainer"]}>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
