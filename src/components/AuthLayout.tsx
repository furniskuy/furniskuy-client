import { Navigate, Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

import { useAuth } from "@/context/AuthProvider";

import styles from "./Layout.module.css";

export const AuthLayout = () => {
  const auth = useAuth();

  if (!auth?.accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles["layoutContainer"]}>
      <Header isAuthenticated={!!auth.accessToken} />
      <div className={styles["contentContainer"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
