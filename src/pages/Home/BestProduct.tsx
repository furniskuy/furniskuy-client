import { Inventaris } from "@/types/api";

import { productPlaceHolderURL } from "@/util/image";
import { FunctionComponent } from "react";
import styles from "./BestProduct.module.css";

type Props = {
  action: () => void;
};

export const BestProduct: FunctionComponent<Props> = ({ action }) => {
  const bestProduct: Inventaris = {
    id: 1,
    nama: "Bangku Sofa",
    foto: "https://sbwasjlgfngcwfkvqqin.supabase.co/storage/v1/object/public/furniskuy/public/uploads/best-product.png",
    jumlah: 1,
    harga: 1000000,
    id_supplier: 1,
  };

  return (
    <>
      <div className={styles["accentRectangle"]}></div>
      <div className={styles["container"]}>
        <div className={styles["tulisan"]}>
          <div className={styles["bestBadge"]}>
            <p>Best Furniskuy</p>
          </div>

          <div className={styles["slogan"]}>
            <p>
              Find Your Best <br /> Furniture
            </p>
          </div>

          <div className={styles["sloganSubtitle"]}>
            <p>
              Find all your furniture needs for anything, <br />
              All furniture for offices, home, bussiness and more
            </p>
          </div>

          <div className={styles["statsContainer"]}>
            <p>
              <span className={styles["counter"]}> 500+ </span> <br />
              <span className={styles["counterName"]}> Customer</span>{" "}
            </p>
            <p>
              <span className={styles["counter"]}>800+ </span> <br />
              <span className={styles["counterName"]}>Delivery </span>{" "}
            </p>
            <p>
              <span className={styles["counter"]}> 100+ </span> <br />
              <span className={styles["counterName"]}>Ratings </span>
            </p>
          </div>

          <div
            className={styles["orderButton"]}
            style={{ cursor: "pointer" }}
            onClick={action}
          >
            <p>Order Now</p>
          </div>
        </div>
        <div className={styles["gambar"]}>
          <img
            src={bestProduct.foto}
            alt={bestProduct.nama}
            className={styles["gambarSofa"]}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = productPlaceHolderURL;
            }}
          />
        </div>
      </div>
    </>
  );
};
