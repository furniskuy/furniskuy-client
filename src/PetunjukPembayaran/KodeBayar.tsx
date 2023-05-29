import React from "react";
import styles from "./KodeBayar.module.css";
import LogoKodeBayar from "../assets/46.png";

const KodeBayar = () => {
  return (
    <>
      <div className={styles["boxKodeBayar"]}>
        <img src={LogoKodeBayar} className={styles["logoBayar"]} />
        <p className={styles["VA"]}>8 2 8 2 8 0 5 1 0 3 6 5 5 1 6 4</p>
        <button className={styles["buttonSalin"]}>
          <p className={styles["tulisanButton"]}>Salin</p>
        </button>
      </div>
    </>
  );
};

export default KodeBayar;
