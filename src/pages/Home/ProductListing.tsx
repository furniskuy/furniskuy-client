import { useState } from "react";

import { useInventaris } from "@/api/inventaris";

import { useAddKeranjangItem } from "@/api/keranjang";
import { Inventaris } from "@/types/api";
import { CardProduct } from "./CardProduct";
import styles from "./ProductListing.module.css";

const KategoriProduct = ["Semua", "Sofa", "Kasur", "Kursi", "Meja", "Rak"];

export const ProductListing = () => {
  const [kategori, setKategori] = useState(0);

  const inventarisQuery = useInventaris({ limit: 8 });

  const addToCart = useAddKeranjangItem();

  const handleAddToCart = (product: Inventaris) => {
    addToCart.mutate({
      id_barang: product.id,
      jumlah: 1,
    });
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
          {inventarisQuery.isLoading && <div>Loading...</div>}

          {inventarisQuery.isError && <div>Error...</div>}

          {inventarisQuery.isSuccess &&
            inventarisQuery.data?.data.map((item, index) => (
              <CardProduct
                key={index}
                product={item}
                addToCart={() => handleAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </>
  );
};
