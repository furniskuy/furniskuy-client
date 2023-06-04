import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./RincianPembayaran.module.css";

type Props = {
  totalHarga: number;
  pengiriman: number;
};

const RincianPembayaran: FunctionComponent<Props> = ({
  totalHarga,
  pengiriman,
}) => {
  return (
    <>
      <h2 className={styles["header"]}>Rincian Pembayaran</h2>
      <div className={styles["boxRincian"]}>
        <div className={styles["keterangan"]}>
          <p>Subtotal Untuk Produk</p>
          <p>Subtotal Pengiriman</p>
          <p>Total Pembayaran</p>
        </div>
        <div className={styles["angka"]}>
          <p>{idrFormat(totalHarga)}</p>
          <p>{idrFormat(pengiriman)}</p>
          <p className={styles["totalHarga"]}>
            {idrFormat(totalHarga + pengiriman)}
          </p>
        </div>
      </div>
    </>
  );
};

export default RincianPembayaran;
