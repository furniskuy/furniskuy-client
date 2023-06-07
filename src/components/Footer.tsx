import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footerAtas"]}>
        <div className={styles["footerKiri"]}>
          <p>
            <span className={styles["footerOren"]}>Furniture</span>
          </p>
          <p>Temukan Kenyamanan dan Fasilitas Menakjubkan</p>
          <p>dengan Membeli Furniture di Toko Kami.</p>
        </div>

        <div className={styles["footerKanan"]}>
          <div className={styles["footerItem"]}>
            <p>
              <span className={styles["footerOren"]}>Furniture</span>
            </p>
            <p>Sofa</p>
            <p>Kasur</p>
            <p>Lainnya</p>
          </div>

          <div className={styles["footerItem"]}>
            <p>
              <span className={styles["footerOren"]}>Tentang Kami</span>
            </p>
            <p>Syarat dan Ketentuan</p>
            <p>Kebijkan dan Pengembalian</p>
            <p>Kebijakan Privasi</p>
          </div>

          <div className={styles["footerItem"]}>
            <p>
              <span className={styles["footerOren"]}>Kontak Kami</span>
            </p>
            <div className={styles["sosmed"]}>
              <div className={styles["fb"]}>
                <HiPhone id="fb-logo" />
                <p className={styles["tulisan"]}>(022)855127689</p>
              </div>
              <div className={styles["twt"]}>
                <MdEmail id="twt-logo" />
                <p className={styles["tulisan"]}>furniskuy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footerEnd"]}>
        <div className={styles["copyright"]}>
          <p>Copyright © 2023</p>
        </div>
        <div className={styles["footerEndKanan"]}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
