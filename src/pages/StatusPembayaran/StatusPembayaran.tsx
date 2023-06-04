import { useTransaksiById } from "@/api/transaksi";
import DeadlineBayar from "./DeadlineBayar";
import Header from "./Header";
import KodeBayar from "./KodeBayar";
import MetodePembayaran from "./MetodePembayaran";

import { Loading } from "@/components/Loading";
import { useParams } from "react-router-dom";
import styles from "./StatusPembayaran.module.css";

export const StatusPembayaran = () => {
  const { id } = useParams<{ id: string }>();
  const transaksi = useTransaksiById(id);

  if (transaksi.isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles["petunjukContainer"]}>
      <Header />
      <DeadlineBayar deadline={transaksi.data?.tenggat_waktu ?? ""} />
      <KodeBayar />
      <MetodePembayaran />
    </div>
  );
};
