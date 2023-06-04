import { Transaksi } from "@/types/api";
import { FunctionComponent } from "react";

import { STATUS_MAPPING } from "@/types/misc";
import { dateTimeFull } from "@/util/date";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";

import styles from "./TransaksiList.module.css";

type Props = {
  transaksi: Transaksi;
};

export const CardTransaksi: FunctionComponent<Props> = ({ transaksi }) => {
  return (
    <div className={styles["cardTransaksiContainer"]}>
      <div className="header">
        <h2>Transaksi #{transaksi.id}</h2>
        <p>{dateTimeFull(transaksi.tanggal_transaksi)}</p>
      </div>
      {transaksi.list_barang.map((item, index) => (
        <div className={styles["content"]} key={index}>
          <div className={styles["kiri"]}>
            <div className={styles["kiriAtas"]}>
              <div className={styles["gambar"]}>
                {<img src={getImageUrl(item.foto)} />}
              </div>
              <div className={styles["namaBarang"]}>
                <p>{item.nama}</p>
                <p>{item.id}</p>
              </div>
            </div>
          </div>
          <div className={styles["kanan"]}>
            <div className={styles["hargaBarang"]}>
              <p>{idrFormat(item.harga)}</p>
            </div>
            <div className={styles["totalPesanan"]}>
              <p>
                Total Pesanan :
                <span className={styles["totalBayar"]}>
                  {idrFormat(item.harga)}
                </span>
              </p>
            </div>
            <div>
              <div className={styles["status" + transaksi.status]}>
                <p>{STATUS_MAPPING[transaksi.status]}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles["button"]}>
        <a
          className={`${styles["tombol"]} ${styles["chatPenjual"]}`}
          href="https://wa.me/+6281224641375"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat Penjual
        </a>
        {transaksi.status < 2 && (
          <button
            className={`${styles["tombol"]} ${styles["batalkanPesanan"]}`}
          >
            <p>Batalkan Pesanan</p>
          </button>
        )}
      </div>
    </div>
  );
};
