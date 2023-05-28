import React from "react";
import styles from "./HeaderPembayaran.module.css";

const HeaderPembayaran = () => {
  return (
    <div>
      <div className={styles["judulMetode"]}>
        <h2>Metode Pembayaran</h2>
      </div>
    </div>
  );
};

export default HeaderPembayaran;
