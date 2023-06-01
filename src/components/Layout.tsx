import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

import { createContext, useState } from "react";
import styles from "./Layout.module.css";

export type LayoutContextType = {
  headerBack?: boolean;
  setHeaderBack: (value: boolean) => void;
};

export const LayoutContext = createContext<LayoutContextType | null>(null);

export const Layout = () => {
  const [headerBack, setHeaderBack] = useState<boolean>(false);

  return (
    <LayoutContext.Provider
      value={{ headerBack: headerBack, setHeaderBack: setHeaderBack }}
    >
      <div className={styles["layoutContainer"]}>
        <Header back={headerBack} />
        <div className={styles["contentContainer"]}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
};
