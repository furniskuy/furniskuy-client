import React from "react";
import styles from "./KurirPembayaran.module.css";

const KurirPembayaran = () => {
  return (
    <>
      <div className={styles.KurirMetode}>
        <div>
            <p className={styles.Toket}>Kurir :</p>
            <p className={styles.JNE}>JNE</p>
        </div>
        <div>
            <p className={styles.Toket}>Metode Pembayaran:</p>
            <p className={styles.JNE}>BNI</p>
        </div>
      </div>
    </>
  );
};

export default KurirPembayaran;
