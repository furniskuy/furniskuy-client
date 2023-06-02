import { HiMapPin } from "react-icons/hi2";
import styles from "./Alamat.module.css";

const Alamat = () => {
  return (
    <>
      <div className={styles["boxAlamat"]}>
        <div className={styles["mapPin"]}>
          <HiMapPin size="50" />
        </div>
        <div className={styles["boxnama-noTelp"]}>
          <div className={styles["nama-noTelp"]}>
            <div className={styles["nama"]}>
              <p>Jerome</p>
            </div>
            <div className={styles["noTelp"]}>
              <p>081247986534</p>
            </div>
          </div>
          <div className={styles["alamat"]}>
            <p>
              Perumahan Graha Raya Blok C2/12, Sukolilo, Surabaya, Jawa Timur
              60118
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alamat;
