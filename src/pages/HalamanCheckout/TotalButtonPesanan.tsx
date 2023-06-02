import styles from "./TotalButtonPesanan.module.css";

const TotalButtonPesanan = () => {
  return (
    <>
      <div className={styles["boxTotal-Button"]}>
        <h3>Total: </h3>
        <p className={styles["totalHarga"]}>Rp 6.092.000</p>
        <button className={styles["buttonBuatPesanan"]}>
          <span>Buat Pesanan</span>
        </button>
      </div>
    </>
  );
};

export default TotalButtonPesanan;
