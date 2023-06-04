import { FunctionComponent } from "react";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Inventaris } from "@/types/api";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";

import { useAddKeranjangItem } from "@/api/keranjang";
import AddToCartIcon from "@/assets/add-to-cart-icon.png";
import { IconContext } from "react-icons";
import styles from "./CardProduct.module.css";

type Props = {
  product: Inventaris;
};

export const CardProduct: FunctionComponent<Props> = ({ product }) => {
  const addToCart = useAddKeranjangItem();

  const handleAddToCart = () => {
    addToCart.mutate({
      id_barang: product.id,
      jumlah: 1,
    });
  };

  return (
    <div className={styles["cardProduct"]}>
      <div className={styles["cardHeader"]}>
        <div></div>
        <div className={styles["productImage"]}>
          <img src={getImageUrl(product.foto)} alt={product.nama} />
        </div>
        <div className={styles["addToCartContainer"]}>
          {addToCart.isLoading ? (
            <IconContext.Provider value={{ size: "36px" }}>
              <FaSpinner />
            </IconContext.Provider>
          ) : (
            <img
              onClick={() => handleAddToCart()}
              src={AddToCartIcon}
              alt="keranjang"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
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
