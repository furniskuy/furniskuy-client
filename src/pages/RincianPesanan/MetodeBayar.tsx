import { Transaksi } from "@/types/api";
import { dateTimeFull } from "@/util/date";
import { FunctionComponent } from "react";
import styles from "./MetodeBayar.module.css";

type Props = {
  transaksi: Transaksi;
};

const MetodeBayar: FunctionComponent<Props> = ({ transaksi }) => {
  return (
    <>
      <div className={styles["header"]}>
        <p>Metode Pembayaran</p>
        <p className={styles["bank"]}>{transaksi.metode.nama_bank}</p>
      </div>
      <div className={styles["outerDesc"]}>
        <table className={styles["tabel"]}>
          <tr>
            <td>No.Pesanan</td>
            <td className={styles["td"]}>{transaksi.id}</td>
          </tr>
          <tr>
            <td>Waktu Pesanan</td>
            <td className={styles["td"]}>
              {dateTimeFull(transaksi.tanggal_transaksi ?? "")}
            </td>
          </tr>
          <tr>
            <td>Waktu Pembayaran</td>
            <td className={styles["td"]}>
              {dateTimeFull(transaksi.waktu_pembayaran ?? "")}
            </td>
          </tr>
          <tr>
            <td>Waktu Pengiriman</td>
            <td className={styles["td"]}>
              {dateTimeFull(transaksi.waktu_pengiriman ?? "")}
            </td>
          </tr>
        </table>
        {/* <div>
          <p>No.Pesanan</p>
          <p>Waktu Pesanan</p>
          <p>Waktu Pembayaran</p>
          <p>Waktu Pengiriman</p>
        </div>
        <div className={styles["data"]}>
          <p>{transaksi.id}</p>
          <p>{dateTimeFull(transaksi.tanggal_transaksi ?? "")}</p>
          <p>{dateTimeFull(transaksi.waktu_pembayaran ?? "")}</p>
          <p>{dateTimeFull(transaksi.waktu_pengiriman ?? "")}</p>
        </div> */}
      </div>
    </>
  );
};

export default MetodeBayar;
