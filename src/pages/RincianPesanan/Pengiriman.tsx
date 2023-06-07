import styles from "./Pengiriman.module.css";

const Pengiriman = () => {
  return (
    <>
      <div className={styles["outerPengiriman"]}>
        <div className={styles["header"]}>
          <p className={styles["judul"]}>Informasi Pengiriman</p>
          <a href="" className={styles["link"]}>
            Lacak
          </a>
        </div>
        <div className={styles["pengiriman"]}>
          <p>JNE - JNEID032373844746</p>
          <p>Sedang Dikemas (25-05-2023 17:18)</p>
        </div>
      </div>
    </>
  );
};

export default Pengiriman;
