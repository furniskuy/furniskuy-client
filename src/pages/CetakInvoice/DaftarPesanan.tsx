import { Transaksi } from "@/types/api";
import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./DaftarPesanan.module.css";
import { pengirimanFixed } from "@/types/misc";

type Props = {
  transaksi: Transaksi;
};

const DaftarPesanan: FunctionComponent<Props> = ({ transaksi }) => {
  return (
    <>
      <div className={styles.DaftarPesanan}>
        <div className={`${styles.head} ${styles.headeriistimewaAtas}`}>
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
          <tr className={styles.trTable}>
            <td>Subtotal Untuk Produk</td>
            <td className={styles.titikDua}>:</td>
            <td>{idrFormat(transaksi.total_harga)}</td>
          </tr>
          <tr className={styles.trTable}>
            <td>Subtotal Pengiriman</td>
            <td>: </td>
            <td>{idrFormat(pengirimanFixed)}</td>
          </tr>
          <tr className={styles.trTable}>
            <td>Total Pembayaran</td>
            <td>: </td>
            <td>{idrFormat(transaksi.total_harga + pengirimanFixed)}</td>
          </tr>
        </table>
      </div>

      <div className="flex justify-evenly font-poppins text-2xl">
        <div className="text-right">
          <p className="text-neutral-500 font-semibold ">Kurir :</p>
          <p className="text-black font-bold">JNE</p>
        </div>
        <div>
          <p className="text-neutral-500 font-semibold ">Metode Pembayaran :</p>
          <p className="text-black font-bold">{transaksi.metode.nama_bank}</p>
        </div>
      </div>

      <div className="flex justify-center text-blue-900 font-poppins text-2xl font-medium mt-48 mb-20">
        <Link to="/beranda">
          <div className="py-3 px-24 border-2 border-blue-900 rounded-md">
            Kembali Ke Beranda
          </div>
        </Link>
      </div>
    </>
  );
};

export default DaftarPesanan;
