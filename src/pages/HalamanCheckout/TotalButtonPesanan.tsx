import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./TotalButtonPesanan.module.css";

type Props = {
  buatPesanan: () => void;
  totalHarga: number;
  disabled?: boolean;
};

const TotalButtonPesanan: FunctionComponent<Props> = ({
  totalHarga,
  buatPesanan,
  disabled,
}) => {
  return (
    <>
      <div className={styles["boxTotal-Button"]}>
        <h3>Total: </h3>
        <p className={styles["totalHarga"]}>{idrFormat(totalHarga)}</p>
        <button
          className={styles["buttonBuatPesanan"]}
          disabled={disabled}
          onClick={buatPesanan}
        >
          <span>Buat Pesanan</span>
        </button>
      </div>
    </>
  );
};

export default TotalButtonPesanan;
