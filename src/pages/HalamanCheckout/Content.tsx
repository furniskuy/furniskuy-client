import { useInventaris } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";
import styles from "./Content.module.css";

const Content = () => {
  const inventarisQuery = useInventaris({ limit: 2 });

  return (
    <>
      {inventarisQuery.isLoading && <div>Loading...</div>}

      {inventarisQuery.isError && <div>Error...</div>}

      {inventarisQuery.isSuccess &&
        inventarisQuery.data.map((item) => (
          <div className={styles["content"]}>
            <div className={styles["gambar"]}>
              <img
                src={getImageUrl(item.image)}
                className={styles["gambar-content"]}
              />
            </div>
            <div className={styles["namaBarang"]}>
              <p>{item.nama}</p>
              <div className={styles["quantity-harga"]}>
                <p>x1</p>
                <p className={styles["harga"]}>{idrFormat(item.harga)} </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Content;
