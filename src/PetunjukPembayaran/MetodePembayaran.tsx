import React from "react";
import styles from "./MetodePembayaran.module.css";
import { SlArrowRight } from "react-icons/sl";

const MetodePembayaran = () => {
  return (
    <>
      <div className={styles["outerATM"]}>
        <span className={styles["tulisanATM"]}>ATM</span>
        <SlArrowRight />
      </div>
      <div className={styles["outerMobile"]}>
        <span className={styles["tulisanMobile"]}>Mobile</span>
        <SlArrowRight />
      </div>
      <div className={styles["tataCaraMobile"]}>
        <p>1. Login di m-Banking BNI</p>
        <p>2. Pilih Transfer &gt; Antar BNI &gt; Input Baru</p>
        <p>
          3. Masukkan No.Rekening BNI yang disalin tadi ke Rekening Tujuan &gt;
          Nominal Transaksi &gt; Lanjut
        </p>
        <p>4. Masukkan kata sandi transaksi anda &gt; Lanjut</p>
        <p>5. Kirim &gt; Oke</p>
      </div>
      <div className={styles["outerIB"]}>
        <span className={styles["tulisanIB"]}>Internet Banking</span>
        <SlArrowRight />
      </div>
    </>
  );
};

export default MetodePembayaran;
