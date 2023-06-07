import { useEffect, useState } from "react";

import { useInventaris } from "@/api/inventaris";

import { CardProduct } from "@/components/CardProduct";
import { Loading } from "@/components/Loading";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./SearchPage.module.css";

const KategoriProduct = ["Semua", "Sofa", "Kasur", "Kursi", "Meja", "Rak"];

export const SearchPage = () => {
  const [kategori, setKategori] = useState(0);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(10);

  const inventarisQuery = useInventaris({
    limit: 24,
    skip: page * 24,
    popular: true,
    kategori,
  });

  useEffect(() => {
    if (inventarisQuery.isSuccess) {
      if (inventarisQuery.data?.length === 0) {
        setMaxPage(page);
        setPage(page - 1);
      }
    }
  }, [inventarisQuery.data?.length, inventarisQuery.isSuccess, page]);

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

      <div className={styles["pagination"]}>
        <button
          className={styles["paginationItem"]}
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          <SlArrowLeft />
        </button>
        <div className={styles["paginationItem"]}>{page + 1}</div>
        <button
          className={styles["paginationItem"]}
          onClick={() => setPage(page + 1)}
          disabled={page === maxPage}
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};
