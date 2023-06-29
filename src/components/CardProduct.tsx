import { FunctionComponent } from "react";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Inventaris } from "@/types/api";
import { getImageUrl, productPlaceHolderURL } from "@/util/image";
import { idrFormat } from "@/util/number";

import { useAddKeranjangItem } from "@/api/keranjang";
import AddToCartIcon from "@/assets/add-to-cart-icon.png";
import { IconContext } from "react-icons";

import styles from "./CardProduct.module.css";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthProvider";

type Props = {
  product: Inventaris;
};

export const CardProduct: FunctionComponent<Props> = ({ product }) => {
  const auth = useAuth();

  const addToCart = useAddKeranjangItem();

  const handleAddToCart = () => {
    if (!auth?.accessToken) {
      toast.error("Silahkan login terlebih dahulu");
      return;
    }
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
          <img
            src={getImageUrl(product.foto)}
            alt={product.nama}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = productPlaceHolderURL;
            }}
          />
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
            <p className={styles["productName"] + " line-clamp-1"}>
              {product.nama}
            </p>
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
