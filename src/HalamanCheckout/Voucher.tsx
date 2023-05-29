import React from "react";
import styles from "./Voucher.module.css";

const Voucher = () => {
  return (
    <>
      <div className={styles["boxVoucher"]}>
        <div>
          <p className={styles["kodeVoucher"]}>Skuy127</p>
          <p className={styles["notifVoucher"]}>Voucher berhasil digunakan</p>
        </div>
        <div>
          <button className={styles["buttonVoucher"]}>
            <span className={styles["tulisan"]}>PAKAI</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Voucher;
