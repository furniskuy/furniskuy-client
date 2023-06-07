import styles from "./HeaderPembayaran.module.css";

const HeaderPembayaran = () => {
  return (
    <div>
      <div className={styles["judulMetode"]}>
        <p>Metode Pembayaran</p>
      </div>
    </div>
  );
};

export default HeaderPembayaran;
