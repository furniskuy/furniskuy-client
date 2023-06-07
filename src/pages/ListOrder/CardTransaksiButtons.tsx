import { Transaksi } from "@/types/api";
import { FunctionComponent } from "react";

import { DialogConfirm } from "@/components/DialogConfirm";
import { Link } from "react-router-dom";
import styles from "./TransaksiList.module.css";

type Props = {
  showDialogBatalPesanan: boolean;
  setShowDialogBatalPesanan: (value: boolean) => void;
  batalPesanan: () => void;
  transaksi: Transaksi;
  isLoading: boolean;
};

export const CardBarangTransaksiButtons: FunctionComponent<Props> = ({
  showDialogBatalPesanan,
  setShowDialogBatalPesanan,
  batalPesanan,
  transaksi,
  isLoading,
}) => {
  return (
    <>
      <div className={styles["button"]}>
        <a
          className={`${styles["tombol"]} ${styles["chatPenjual"]}`}
          href="https://wa.me/+6281224641375"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat Penjual
        </a>
        {transaksi.status === 1 && (
          <Link
            to={`/pembayaran/${transaksi.id}`}
            className={`${styles["tombol"]} ${styles["chatPenjual"]}`}
          >
            <p>Pembayaran</p>
          </Link>
        )}
        {(transaksi.status === 2 || transaksi.status === 3) && (
          <Link
            to={`/status/${transaksi.id}`}
            className={`${styles["tombol"]} ${styles["chatPenjual"]}`}
          >
            <p>Cek Status</p>
          </Link>
        )}
        {transaksi.status < 2 && (
          <DialogConfirm
            isOpen={showDialogBatalPesanan}
            setIsOpen={setShowDialogBatalPesanan}
            title="Batalkan Pesanan"
            description="Apakah anda yakin ingin membatalkan pesanan?"
            onConfirm={batalPesanan}
            isLoading={isLoading}
            triggerComponent={
              <button
                className={`${styles["tombol"]} ${styles["batalkanPesanan"]}`}
              >
                Batalkan Pesanan
              </button>
            }
          />
        )}
      </div>
    </>
  );
};
