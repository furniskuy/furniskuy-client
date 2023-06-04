import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Layout.module.css";

export const GuestLayout = () => {
  return (
    <div className={styles["layoutContainer"]}>
      <Header showBackButton={true} />
      <div className={styles["contentContainer"]}>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
