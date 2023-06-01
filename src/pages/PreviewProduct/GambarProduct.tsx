import { FunctionComponent } from "react";
import styles from "./GambarProduct.module.css";

type Props = {
  image: string;
};

const GambarProduct: FunctionComponent<Props> = ({ image }) => {
  return (
    <div>
      <img src={image} className={styles["productImage"]} />
    </div>
  );
};

export default GambarProduct;
