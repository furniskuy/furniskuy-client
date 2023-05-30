import PP1 from "@/assets/ProfilePictRate1.png";
import PP2 from "@/assets/ProfilePictRate2.png";
import { FaStar } from "react-icons/fa";
import styles from "./DescComment.module.css";

const DescComment = () => {
  return (
    <>
      <div className={styles["descCommentOuter"]}>
        <div className={styles["commentBox"]}>
          <div>
            <img src={PP1} className={styles["profilePict"]} />
          </div>
          <div className={styles["namaRating"]}>
            <div className={styles["nama"]}>
              <span>Jerome</span>
            </div>
            <div className={styles["star"]}>
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
            </div>
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
            Kursi Minimalis FURNISKUY pilihan bagus! Desain elegan, warna
            abu-abu indah. Terbuat dari Kayu Mahoni kuat, tahan lama. Bikin
            ruangan saya cantik dan elegan!
          </p>
        </div>
        <div className={styles["commentBox"]}>
          <div>
            <img src={PP2} className={styles["profilePict"]} />
          </div>
          <div className={styles["namaRating"]}>
            <div className={styles["nama"]}>
              <span>Fadil</span>
            </div>
            <div className={styles["star"]}>
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
              <FaStar size={15} id="star-icon" />
            </div>
          </div>
        </div>
        <div className={styles["tanggal"]}>
          <p>2023-08-08 17:18</p>
        </div>
        <div className={styles["table"]}>
          <table>
            <tr>
              <td>Performa</td>
              <td>: Mantap</td>
            </tr>
            <tr>
              <td>Tampilan</td>
              <td>: Oke</td>
            </tr>
            <tr>
              <td>Kualitas</td>
              <td>: Bagus</td>
            </tr>
          </table>
        </div>
        <div>
          <p className={styles["comment"]}>
            Desainnya yang elegan membuat ruangan terlihat lebih modern. Warna
            abu-abunya sangat cocok dengan tema interior rumahku. Kursi
            berkualitas dengan harga yang terjangkau.
          </p>
        </div>
      </div>
    </>
  );
};

export default DescComment;
