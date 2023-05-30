import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import styles from "./Header.module.css";

function Header() {
  const [halaman, setHalaman] = useState(0);

  return (
    <>
      <div className={styles["header"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles["searchBar"]}>
          <div
            className={
              styles[halaman === 1 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setHalaman(1)}
          >
            sofa
          </div>

          <div
            className={
              styles[halaman === 2 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setHalaman(2)}
          >
            Kasur
          </div>

          <div
            className={
              styles[halaman === 3 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setHalaman(3)}
          >
            Kursi
          </div>
          <div
            className={
              styles[halaman === 4 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setHalaman(4)}
          >
            Meja
          </div>
          <div
            className={
              styles[halaman === 5 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setHalaman(5)}
          >
            Rak
          </div>
        </div>
        <div className={styles["gambar"]}>
          <img src={search} alt="search" />
          <img src={menu} alt="menu" />
        </div>
      </div>
    </>
  );
}

export default Header;
