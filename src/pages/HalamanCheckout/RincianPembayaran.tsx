import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./RincianPembayaran.module.css";

type Props = {
  totalHarga: number;
  pengiriman: number;
  diskon: number;
  pelayanan: number;
};

const RincianPembayaran: FunctionComponent<Props> = ({
  totalHarga,
  pengiriman,
  diskon,
  pelayanan,
}) => {
  return (
    <>
      <p className={styles["header"]}>Rincian Pembayaran</p>
      <div className={styles["boxRincian"]}>
        <div className={styles["keterangan"]}>
          <p>Subtotal Untuk Produk</p>
          <p>Subtotal Pengiriman</p>
          <p>Voucher Diskon</p>
          <p>Biaya Pelayanan</p>
          <p>Total Pembayaran</p>
        </div>
        <div className={styles["angka"]}>
          <p>{idrFormat(totalHarga)}</p>
          <p>{idrFormat(pengiriman)}</p>
          <p>{idrFormat(diskon)} </p>
          <p>{idrFormat(pelayanan)}</p>
          <p className={styles["totalHarga"]}>
            {idrFormat(totalHarga + pengiriman + diskon + pelayanan)}
          </p>
        </div>
      </div>
    </>
  );
};

export default RincianPembayaran;
