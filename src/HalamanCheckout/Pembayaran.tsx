import React from "react";
import styles from "./Pembayaran.module.css";
import BNI from "../assets/BNI.png";
import BRI from "../assets/BRI.png";
import BCA from "../assets/BCA.png";

const Pembayaran = () => {
  return (
    <div>
      <div className={styles["boxBank"]}>
        <button className={styles["buttonBNI"]}>
          <img src={BNI} className={styles["bankBNI"]} />
        </button>
        <button className={styles["buttonBRI"]}>
          <img src={BRI} className={styles["bankBRI"]} />
        </button>
        <button className={styles["buttonBCA"]}>
          <img src={BCA} className={styles["bankBCA"]} />
        </button>
      </div>
    </div>
  );
};

export default Pembayaran;
