import { useTransaksiById } from "@/api/transaksi";
import { Loading } from "@/components/Loading";
import { getImageUrl, productPlaceHolderURL } from "@/util/image";
import { idrFormat } from "@/util/number";
import { useParams } from "react-router-dom";
import styles from "./ProdukPesanan.module.css";

const ProdukPesanan = () => {
  const { id } = useParams<{ id: string }>();
  const transaksi = useTransaksiById(id);

  if (transaksi.isLoading || !transaksi.data) {
    return <Loading />;
  }

  return (
    <>
      <h2 className={styles["header"]}>Produk Pesanan</h2>

      {transaksi.isLoading && <p>Loading...</p>}

      {transaksi.isError && <p>Error...</p>}

      {transaksi.isSuccess &&
        transaksi.data.list_barang.map((item) => (
          <div className={styles["outerPesanan"]}>
            <div className={styles["productImage"]}>
              <img
                src={getImageUrl(item.foto)}
                className={styles["gambar"]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = productPlaceHolderURL;
                }}
              />
            </div>
            <div className={styles["nama-jumlah"]}>
              <p>{item.nama}</p>
              <p>x{item.pivot?.jumlah}</p>
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
