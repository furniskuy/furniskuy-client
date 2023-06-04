import { useKeranjangs } from "@/api/keranjang";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";
import styles from "./Content.module.css";

const Content = () => {
  const keranjangs = useKeranjangs();

  return (
    <>
      {keranjangs.isLoading && <div>Loading...</div>}

      {keranjangs.isError && <div>Error...</div>}

      {keranjangs.isSuccess &&
        keranjangs.data
          .filter((item) => item.selected)
          .map((item) => (
            <div className={styles["content"]}>
              <div className={styles["gambar"]}>
                <img
                  src={getImageUrl(item.barang.foto)}
                  className={styles["gambar-content"]}
                />
              </div>
              <div className={styles["namaBarang"]}>
                <p>{item.barang.nama}</p>
                <div className={styles["quantity-harga"]}>
                  <p>x{item.jumlah}</p>
                  <p className={styles["harga"]}>
                    {idrFormat(item.barang.harga)}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default Content;
