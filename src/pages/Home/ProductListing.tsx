import { useState } from "react";

import { useInventaris } from "@/api/inventaris";

import { Loading } from "@/components/Loading";
import { CardProduct } from "./CardProduct";
import styles from "./ProductListing.module.css";

const KategoriProduct = ["Semua", "Sofa", "Kasur", "Kursi", "Meja", "Rak"];

export const ProductListing = () => {
  const [kategori, setKategori] = useState(0);

  const inventarisQuery = useInventaris({ limit: 8, popular: true, kategori });

  return (
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
            key={index}
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
        {inventarisQuery.isLoading && <Loading />}

        {inventarisQuery.isError && <div>Error...</div>}

        {inventarisQuery.isSuccess &&
          inventarisQuery.data?.map((item, index) => (
            <CardProduct key={index} product={item} />
          ))}
      </div>
    </div>
  );
};
