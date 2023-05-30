import styles from "./ButtonAddtoCart.module.css";

const ButtonAddtoCart = () => {
  return (
    <>
      <div className={styles["outerButton"]}>
        <button className={styles["buttonAddtoCart"]}>
          <p>Tambahkan ke Keranjang</p>
        </button>
      </div>
    </>
  );
};

export default ButtonAddtoCart;
