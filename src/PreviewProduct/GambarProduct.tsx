import KursiMinimalis from "../assets/KursiMinimalis.png";
import styles from "./GambarProduct.module.css";

const GambarProduct = () => {
  return (
    <>
      <div>
        <img src={KursiMinimalis} className={styles["product-pict"]} />
      </div>
    </>
  );
};

export default GambarProduct;
