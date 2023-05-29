import React from "react";
import styles from "./DeadlineBayar.module.css";

const DeadlineBayar = () => {
  return (
    <>
      <div className={styles["boxDeadline"]}>
        <p>Kode bayar akan hangus pada jam 12:30 PM 26 Mei 2023</p>
        <p>
          Mohon menyelesaikan pembayaran sebelum jam{" "}
          <span className={styles["jam"]}> 12:30 PM 26 Mei 2023 </span>
        </p>
      </div>
    </>
  );
};

export default DeadlineBayar;
