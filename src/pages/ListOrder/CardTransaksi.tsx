import { Transaksi } from "@/types/api";
import { FunctionComponent, useState } from "react";

import { dateTimeFull } from "@/util/date";

import { useDeleteTransaksi } from "@/api/transaksi";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { toast } from "react-toastify";
import { CardBarangTransaksi } from "./CardBarangTransaksi";
import { CardBarangTransaksiButtons } from "./CardTransaksiButtons";
import styles from "./TransaksiList.module.css";

type Props = {
  transaksi: Transaksi;
};

export const CardTransaksi: FunctionComponent<Props> = ({ transaksi }) => {
  const [showListBarang, setShowListBarang] = useState(false);
  const [showDialogBatalPesanan, setShowDialogBatalPesanan] = useState(false);

  const batalPesanan = useDeleteTransaksi({
    onSuccess: () => {
      setShowDialogBatalPesanan(false);
      toast.success("Pesanan berhasil dibatalkan", {
        position: "top-center",
      });
    },
    onError: (error: any) => {
      toast.error(error.message, { position: "top-center" });
      setShowDialogBatalPesanan(false);
    },
  });

  const handleBatalPesanan = () => {
    batalPesanan.mutate(transaksi.id);
  };

  return (
    <div className={styles["cardTransaksiContainer"]}>
      <div className="header row" style={{ justifyContent: "space-between" }}>
        <div className="col">
          <h2>Transaksi #{transaksi.id}</h2>
          <p>{dateTimeFull(transaksi.tanggal_transaksi)}</p>
        </div>
        <div
          className="col"
          onClick={() => setShowListBarang((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <div className="row" style={{ alignItems: "center", gap: 16 }}>
            {showListBarang ? <h4>Hide items</h4> : <h4>Show items</h4>}
            {showListBarang ? <SlArrowDown /> : <SlArrowRight />}
          </div>
        </div>
      </div>

      {showListBarang &&
        transaksi.list_barang.map((item, index) => (
          <CardBarangTransaksi
            key={index}
            statusTransaksi={transaksi.status}
            barang={item}
          />
        ))}

      <CardBarangTransaksiButtons
        showDialogBatalPesanan={showDialogBatalPesanan}
        setShowDialogBatalPesanan={setShowDialogBatalPesanan}
        batalPesanan={handleBatalPesanan}
        transaksi={transaksi}
        isLoading={batalPesanan.isLoading}
      />
    </div>
  );
};
