import React from "react";
import styles from "./StatusPesanan.module.css";

const StatusPesanan = () => {
  return (
    <>
      <div className={styles["outerStatus"]}>
        <p>Pesanan Dalam Perjalanan</p>
        <p>
          Produk Diperkirakan Akan Sampai Pada{" "}
          <span className={styles["tanggal"]}>27-05-2023</span>.
        </p>
      </div>
    </>
  );
};

export default StatusPesanan;
