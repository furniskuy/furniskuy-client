import React from "react";
import styles from "./Keterangan.module.css";

const Keterangan = () => {
  return (
    <>
      <div className={styles["outerKet"]}>
        <p>
          Silahkan salin No.Rekening di atas untuk melakukan pembayaran melalui
          teller/ATM/Mobile/Internet Banking
        </p>
      </div>
    </>
  );
};

export default Keterangan;
