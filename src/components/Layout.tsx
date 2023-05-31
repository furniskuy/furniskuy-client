import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles["layoutContainer"]}>
      <Header />
      <div className={styles["contentContainer"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
