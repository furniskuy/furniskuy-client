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
        <h2>Metode Pembayaran</h2>
        <h3 className={styles["bank"]}>{transaksi.metode.nama_bank}</h3>
      </div>
      <div className={styles["outerDesc"]}>
        <table>
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
      </div>
    </>
  );
};

export default MetodeBayar;
