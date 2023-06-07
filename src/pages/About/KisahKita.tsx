import React from "react";
import styles from "./KisahKita.module.css";

const KisahKita = () => {
  return (
    <>
      <div className={styles["outerKK"]}>
        <p>Kisah Kita</p>
        <p className={styles["slogan"]}>Furniskuy - Toko Furnitur Online</p>
        <p className={styles["paragraph"]}>
          Kami adalah tim yang terdiri dari Fadil, Hafidz, Frahari dan Azmi,
          yang bersatu untuk mewujudkan proyek kami di industri furnitur. Dengan
          fokus pada pengalaman pelanggan, kami meluncurkan Furniskuy, sebuah
          toko furnitur online yang menawarkan produk berkualitas tinggi dengan
          harga kompetitif. Dalam perjalanan kami, kami mengatasi berbagai
          tantangan dan mengembangkan kemitraan dengan produsen lokal. Dengan
          upaya yang gigih, kami berhasil meningkatkan traction dan meraih
          ulasan positif dari pelanggan. Kami terus berinovasi, memperluas
          jangkauan produk, dan membangun citra merek yang terpercaya. Melalui
          komitmen kami, Furniskuy dapat menumbuhkan pendapatan dan keuntungan
          yang signifikan.
        </p>
      </div>
    </>
  );
};

export default KisahKita;
