import React from "react";
import styles from "./ProdukPesanan.module.css";
import SofaRuangTV from "../assets/SofaRuangTV.png";
import BedSet from "../assets/BedSet.png";

const ProdukPesanan = () => {
  return (
    <>
      <h2 className={styles["header"]}>Produk Pesanan</h2>
      <div className={styles["outerPesanan"]}>
        <img src={SofaRuangTV} className={styles["gambar"]} />
        <div className={styles["nama-jumlah"]}>
          <p>Sofa Ruang TV - BLACK</p>
          <p>x1</p>
        </div>
        <div className={styles["harga"]}>
          <p>Rp 2.000.000</p>
        </div>
      </div>
      <div className={styles["outerPesanan"]}>
        <img src={BedSet} className={styles["gambar2"]} />
        <div className={styles["nama-jumlah2"]}>
          <p>Bed Set - GREY</p>
          <p>x1</p>
        </div>
        <div className={styles["harga2"]}>
          <p>Rp 4.000.000</p>
        </div>
      </div>
    </>
  );
};

export default ProdukPesanan;
