import styles from "./Subtotal.module.css";

const Subtotal = () => {
  return (
    <>
      <div className={styles["subTotal"]}>
        <h3>2 items, Subtotal:</h3>
        <p className={styles["hargaTotal"]}>Rp 6.000.000</p>
      </div>
    </>
  );
};

export default Subtotal;
