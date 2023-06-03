import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

import styles from "./Layout.module.css";

export const GuestLayout = () => {
  return (
    <div className={styles["layoutContainer"]}>
      <Header showBackButton={true} />
      <div className={styles["contentContainer"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
