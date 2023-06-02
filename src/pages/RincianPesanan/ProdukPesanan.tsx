import { useInventaris } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";
import styles from "./ProdukPesanan.module.css";

const ProdukPesanan = () => {
  const inventarisQuery = useInventaris({ limit: 2 });

  return (
    <>
      <h2 className={styles["header"]}>Produk Pesanan</h2>

      {inventarisQuery.isLoading && <p>Loading...</p>}

      {inventarisQuery.isError && <p>Error...</p>}

      {inventarisQuery.isSuccess &&
        inventarisQuery.data?.data.map((item) => (
          <div className={styles["outerPesanan"]}>
            <img src={getImageUrl(item.image)} className={styles["gambar"]} />
            <div className={styles["nama-jumlah"]}>
              <p>{item.nama}</p>
              <p>x1</p>
            </div>
            <div className={styles["harga"]}>
              <p>{idrFormat(item.harga)}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProdukPesanan;
