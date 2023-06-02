import PP1 from "@/assets/ProfilePictRate1.png";
import Rating from "@/components/Rating";

import styles from "./ProductReview.module.css";

export const ProductReview = () => {
  return (
    <div className={styles["descCommentOuter"]}>
      <div className={styles["commentBox"]}>
        <div>
          <img src={PP1} className={styles["profilePict"]} />
        </div>
        <div className={styles["namaRating"]}>
          <div className={styles["nama"]}>
            <span>Jerome</span>
          </div>
          <Rating />
        </div>
      </div>
      <div className={styles["tanggal"]}>
        <p>2023-05-05 14:14</p>
      </div>
      <div className={styles["table"]}>
        <table>
          <tr>
            <td>Performa</td>
            <td>: Baik</td>
          </tr>
          <tr>
            <td>Tampilan</td>
            <td>: Bagus</td>
          </tr>
          <tr>
            <td>Kualitas</td>
            <td>: Oke</td>
          </tr>
        </table>
      </div>
      <div>
        <p className={styles["comment"]}>
          Kursi Minimalis FURNISKUY pilihan bagus! Desain elegan, warna abu-abu
          indah. Terbuat dari Kayu Mahoni kuat, tahan lama. Bikin ruangan saya
          cantik dan elegan!
        </p>
      </div>
    </div>
  );
};
