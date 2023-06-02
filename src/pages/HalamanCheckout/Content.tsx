import { useInventaris } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";
import { Link } from "react-router-dom";

import BedSet from "@/assets/BedSet.png";
import SofaRuangTV from "@/assets/SofaRuangTV.png";
import styles from "./Content.module.css";

export const Content = () => {
  const inventarisQuery = useInventaris({ limit: 2 m });

  return (
    <>
      {inventarisQuery.isLoading && <div>Loading...</div>}

      {inventarisQuery.isError && <div>Error...</div>}

      {inventarisQuery.isSuccess &&
        inventarisQuery.data?.data.map((item) => (
          <div className={styles["content"]}>
            <div className={styles["gambar"]}>
              <img src={SofaRuangTV} className={styles["gambar-content"]} />
            </div>
            <div className={styles["namaBarang"]}>
              <p>Sofa Ruang TV - BLACK</p>
              <div className={styles["quantity-harga"]}>
                <p>x1</p>
                <p className={styles["harga"]}>Rp 2.000.000</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
