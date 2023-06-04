import { FunctionComponent } from "react";
import styles from "./StatusPesanan.module.css";

type Props = {
  estimatedArrival: string;
};

const StatusPesanan: FunctionComponent<Props> = ({ estimatedArrival }) => {
  return (
    <>
      <div className={styles["outerStatus"]}>
        <p>Pesanan Dalam Perjalanan</p>
        <p>
          Produk Diperkirakan Akan Sampai Pada
          <span className={styles["tanggal"]}> {estimatedArrival}</span>.
        </p>
      </div>
    </>
  );
};

export default StatusPesanan;
