import styles from "./Pengiriman.module.css";

const Pengiriman = () => {
  return (
    <>
      <div className={styles["outerPengiriman"]}>
        <div>
          <h2>Informasi Pengiriman</h2>
          <p>JNE - JNEID032373844746</p>
          <p>
            <ul>
              <li>Sedang Dikemas 25-05-2023 17:18</li>
            </ul>
          </p>
        </div>
        <div className={styles["link"]}>
          <a href="">Lacak</a>
        </div>
      </div>
    </>
  );
};

export default Pengiriman;
