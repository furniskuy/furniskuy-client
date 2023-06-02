import React from "react";
import styles from "./AlamatPengiriman.module.css";

const AlamatPengiriman = () => {
  return (
    <>
      <div className={styles["outerAlamat"]}>
        <h2>Alamat Pengiriman</h2>
        <div className={styles["nama-noTelp"]}>
          <p>Jerome</p>
          <p className={styles["noTelp"]}>081247986534</p>
        </div>
        <div>
          <span>
            Perumahan Graha Raya Blok C2/12, Sukolilo, Surabaya, Jawa Timur
            60118
          </span>
        </div>
      </div>
    </>
  );
};

export default AlamatPengiriman;
