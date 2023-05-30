import styles from "./NamaHargaProduct.module.css";

const NamaHargaProduct = () => {
  return (
    <>
      <div className={styles["namaharga"]}>
        <div className={styles["nama-product"]}>
          <h2>Kursi Minimalis - GREY</h2>
        </div>
        <div className={styles["harga-product"]}>
          <p>Rp 1.300.000</p>
        </div>
      </div>
    </>
  );
};

export default NamaHargaProduct;
