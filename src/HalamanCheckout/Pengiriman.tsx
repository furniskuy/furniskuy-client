import React from "react";
import styles from "./Pengiriman.module.css";

const Pengiriman = () => {
  return (
    <>
      <div className={styles["boxPengiriman"]}>
        <div>
          <p>Reguler</p>
          <p className={styles["tanggal"]}>Perkiraan Diterima Tanggal 27 Mei</p>
        </div>
        <div className={styles["ongkir"]}>
          <p>Rp 100.000</p>
        </div>
      </div>
    </>
  );
};

export default Pengiriman;
