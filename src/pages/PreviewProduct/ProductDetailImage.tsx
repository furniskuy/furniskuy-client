import { FunctionComponent } from "react";

import styles from "./ProductDetailImage.module.css";

type Props = {
  image: string;
};

export const ProductDetailImage: FunctionComponent<Props> = ({ image }) => {
  return (
    <div>
      <img src={image} className={styles["productImage"]} />
    </div>
  );
};
