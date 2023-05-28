import React from "react";
import styles from "./RincianPembayaran.module.css";

const RincianPembayaran = () => {
  return (
    <>
      <h2 className={styles["header"]}>Rincian Pembayaran</h2>
      <div className={styles["boxRincian"]}>
        <div className={styles["keterangan"]}>
          <p>Subtotal Untuk Produk</p>
          <p>Subtotal Pengiriman</p>
          <p>Voucher Diskon</p>
          <p>Biaya Layanan</p>
          <p>Total Pembayaran</p>
        </div>
        <div className={styles["angka"]}>
          <p>Rp 6.000.000</p>
          <p>Rp 100.000</p>
          <p>-Rp 10.000</p>
          <p>Rp 2.000</p>
          <p className={styles["totalHarga"]}>Rp 6.092.000</p>
        </div>
      </div>
    </>
  );
};

export default RincianPembayaran;
