import { useState } from "react";
import { Link } from "react-router-dom";

import { useInventaris } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";

import logokeranjang from "@/assets/add-to-cart-icon.png";
import { FaArrowRight } from "react-icons/fa";
import styles from "./ProductListing.module.css";

const KategoriProduct = ["Semua", "Sofa", "Kasur", "Kursi", "Meja", "Rak"];

export const ProductListing = () => {
  const [kategori, setKategori] = useState(0);

  const inventarisQuery = useInventaris({ limit: 8 });

  const addToCart = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <div>
        <div className={styles["productHeader"]}>
          <div className={styles["productListingTitle"]}>
            <p>
              Produk <span color="primary">Terlaris</span>
            </p>
          </div>
        </div>
        <div className={styles["kategoriItem"]}>
          {KategoriProduct.map((item, index) => (
            <div
              className={
                styles[
                  kategori === index ? "statusSelected" : "statusNotSelected"
                ]
              }
              onClick={() => setKategori(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles["daftarProduk"]}>
          {inventarisQuery.isLoading && <div>Loading...</div>}

          {inventarisQuery.isError && <div>Error...</div>}

          {inventarisQuery.isSuccess &&
            inventarisQuery.data?.data.map((item) => (
              <div className={styles["cardProduct"]}>
                <div className={styles["cardHeader"]}>
                  <div></div>
                  <div className={styles["productImage"]}>
                    <img src={getImageUrl(item.image)} alt={item.nama} />
                  </div>
                  <img
                    onClick={() => addToCart(item.id)}
                    src={logokeranjang}
                    alt="keranjang"
                  />
                </div>
                <Link to={"/produk/" + item.id}>
                  <div className={styles["cardContent"]}>
                    <div>
                      <p className={styles["productName"]}>{item.nama}</p>
                      <p className={styles["productPrice"]}>
                        {idrFormat(item.harga)}
                      </p>
                    </div>
                    <div className={styles["arrowProduct"]}>
                      <FaArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
