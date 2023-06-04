import { Inventaris } from "@/types/api";
import { STATUS_MAPPING } from "@/types/misc";
import { getImageUrl, productPlaceHolderURL } from "@/util/image";
import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./TransaksiList.module.css";

type Props = {
  statusTransaksi: number;
  barang: Inventaris;
};

export const CardBarangTransaksi: FunctionComponent<Props> = ({
  statusTransaksi,
  barang,
}) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["kiri"]}>
        <div className={styles["kiriAtas"]}>
          <div className={styles["gambar"]}>
            <img
              src={getImageUrl(barang.foto)}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = productPlaceHolderURL;
              }}
            />
          </div>
          <div className={styles["namaBarang"]}>
            <p>{barang.nama}</p>
            <p>{barang.id}</p>
          </div>
        </div>
      </div>
      <div className={styles["kanan"]}>
        <div className={styles["hargaBarang"]}>
          <p>{idrFormat(barang.harga)}</p>
        </div>
        <div className={styles["totalPesanan"]}>
          <p>
            Total Pesanan :
            <span className={styles["totalBayar"]}>
              {idrFormat(barang.harga)}
            </span>
          </p>
        </div>
        <div>
          <div className={styles["status" + statusTransaksi]}>
            <p>{STATUS_MAPPING[statusTransaksi]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
