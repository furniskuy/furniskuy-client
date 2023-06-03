import { FunctionComponent } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Inventaris } from "@/types/api";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";

import AddToCartIcon from "@/assets/add-to-cart-icon.png";
import styles from "./CardProduct.module.css";

type Props = {
  product: Inventaris;
  addToCart: (id: number) => void;
};

export const CardProduct: FunctionComponent<Props> = ({
  product,
  addToCart,
}) => {
  return (
    <div className={styles["cardProduct"]}>
      <div className={styles["cardHeader"]}>
        <div></div>
        <div className={styles["productImage"]}>
          <img src={getImageUrl(product.image)} alt={product.nama} />
        </div>
        <img
          onClick={() => addToCart(product.id)}
          src={AddToCartIcon}
          alt="keranjang"
          style={{ cursor: "pointer" }}
        />
      </div>
      <Link to={"/produk/" + product.id}>
        <div className={styles["cardContent"]}>
          <div>
            <p className={styles["productName"]}>{product.nama}</p>
            <p className={styles["productPrice"]}>{idrFormat(product.harga)}</p>
          </div>
          <div className={styles["arrowProduct"]}>
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};
