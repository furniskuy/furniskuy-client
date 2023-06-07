import styles from "./Subtotal.module.css";

const Subtotal = () => {
  return (
    <>
      <div className={styles["subTotal"]}>
        <p>2 items, Subtotal:</p>
        <p className={styles["hargaTotal"]}>Rp 6.000.000</p>
      </div>
    </>
  );
};

export default Subtotal;
