import { useTransaksi } from "@/api/transaksi";
import { FunctionComponent } from "react";
import { CardTransaksi } from "./CardTransaksi";
import styles from "./TransaksiList.module.css";

type Props = {
  status: number;
};

export const TransaksiList: FunctionComponent<Props> = ({ status }) => {
  const transaksi = useTransaksi();

  return (
    <>
      {transaksi.isLoading && <p>Loading...</p>}

      {transaksi.isSuccess &&
        transaksi.data
          .filter((item) => status === 0 || item.status === status)
          .map((item, index) => {
            return <CardTransaksi key={index} transaksi={item} />;
          })}

      {!transaksi.data && (
        <div className={styles["emptyContent"]}>
          <h1>Anda Belum Memiliki Pesanan</h1>
        </div>
      )}
    </>
  );
};
