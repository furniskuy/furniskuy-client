import { FunctionComponent } from "react";

import { Inventaris } from "@/types/api";
import { idrFormat } from "@/util/number";

import Rating from "@/components/Rating";
import styles from "./ProductContent.module.css";

type Props = {
  product: Inventaris;
};

export const ProductContent: FunctionComponent<Props> = ({ product }) => {
  return (
    <div className={styles["productContentContainer"]}>
      <div className={styles["productName"]}>
        <h2>{product.nama}</h2>
      </div>
      <div className={styles["productPrice"]}>
        <p>{idrFormat(product.harga)}</p>
      </div>
      <div className="rating row" style={{ gap: 24, marginTop: 4 }}>
        Ulasan: 5.0
        <Rating />
      </div>
    </div>
  );
};
