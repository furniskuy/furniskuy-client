import gambarKPengembalian from "../../assets/KebijakanPengembalian.png";
import gambarKPrivasi from "../../assets/KebijakanPrivasi.png";
import gambarSK from "../../assets/SyaratKetentuan.png";
import styles from "./TentangKami.module.css";

const TentangKami = () => {
  return (
    <>
      <div className={styles["outerTentangKami"]}>
        <div className={styles["header"]}>
          <p>Tentang Kami</p>
        </div>
        <div className={styles["gambar"]}>
          <div className={styles["box"]}>
            <img src={gambarSK} />
            <p>Syarat dan Ketentuan</p>
          </div>
          <div className={styles["box"]}>
            <img src={gambarKPrivasi} />
            <p>Kebijakan Privasi</p>
          </div>
          <div className={styles["box"]}>
            <img src={gambarKPengembalian} />
            <p>Kebijakan Pengembalian</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangKami;
