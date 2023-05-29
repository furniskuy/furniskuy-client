import React from "react";
import styles from "./Content.module.css";
import SofaRuangTV from "../assets/SofaRuangTV.png";
import BedSet from "../assets/BedSet.png";

const Content = () => {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles["gambar"]}>
          <img src={SofaRuangTV} className={styles["gambar-content"]} />
        </div>
        <div className={styles["namaBarang"]}>
          <p>Sofa Ruang TV - BLACK</p>
          <div className={styles["quantity-harga"]}>
            <p>x1</p>
            <p className={styles["harga"]}>Rp 2.000.000</p>
          </div>
        </div>
      </div>
      <div className={styles["content2"]}>
        <div className={styles["gambar"]}>
          <img src={BedSet} className={styles["gambar-content"]} />
        </div>
        <div className={styles["namaBarang"]}>
          <p>Bed Set - GREY</p>
          <div className={styles["quantity-harga"]}>
            <p>x1</p>
            <p className={styles["harga"]}>Rp 4.000.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
