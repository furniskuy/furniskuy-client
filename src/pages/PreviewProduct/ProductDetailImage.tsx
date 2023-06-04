import { FunctionComponent } from "react";

import { productPlaceHolderURL } from "@/util/image";
import styles from "./ProductDetailImage.module.css";

type Props = {
  image: string;
};

export const ProductDetailImage: FunctionComponent<Props> = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        className={styles["productImage"]}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = productPlaceHolderURL;
        }}
      />
    </div>
  );
};
