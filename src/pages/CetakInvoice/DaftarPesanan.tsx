import { Transaksi } from "@/types/api";
import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./DaftarPesanan.module.css";

type Props = {
  transaksi: Transaksi;
};

const DaftarPesanan: FunctionComponent<Props> = ({ transaksi }) => {
  return (
    <>
      <div className={styles.DaftarPesanan}>
        <div className={`${styles.head} ${styles.headeriistimewa}`}>
          <div className={`${styles.header1} ${styles.headeriistimewa}`}>
            <p>DAFTAR PESANAN</p>
            <p>JUMLAH</p>
            <p>HARGA SATUAN</p>
            <p>TOTAL</p>
          </div>

          {transaksi.list_barang.map((item, index) => (
            <div key={index} className={styles.header1}>
              <p>{item.nama}</p>
              <p>{item.pivot?.jumlah}</p>
              <p>{idrFormat(item.harga)}</p>
              <p>{idrFormat(item.harga * (item.pivot?.jumlah ?? 1))}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.Subtotal}>
        <table className={styles.tabel2}>
          <tr>
            <td>SUBTOTAL</td>
            <td>: {idrFormat(transaksi.total_harga)}</td>
          </tr>
          <tr>
            <td>PENGIRIMAN</td>
            <td>: {idrFormat(10000)}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DaftarPesanan;
