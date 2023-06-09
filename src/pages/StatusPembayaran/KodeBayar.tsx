import { MetodePembayaran } from "@/types/api";
import { DEFAULT_BANKS_LOGO } from "@/types/misc";
import { FunctionComponent } from "react";
import { toast } from "react-toastify";
import styles from "./KodeBayar.module.css";

type Props = {
  metode: MetodePembayaran;
  notlp: string;
};

const KodeBayar: FunctionComponent<Props> = ({ metode, notlp }) => {
  return (
    <div>
      <div className={styles["boxKodeBayar"]}>
        <img
          src={metode.logo}
          className={styles["logoBayar"]}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = DEFAULT_BANKS_LOGO[metode.nama_bank];
          }}
        />
        <p className={styles["VA"]}>{metode.prefix + notlp}</p>
        <button
          className={styles["buttonSalin"]}
          onClick={() => {
            navigator.clipboard.writeText(metode.prefix + notlp);
            toast.info("Berhasil di copy ke clipboard", {
              position: "top-center",
            });
          }}
        >
          <p className={styles["tulisanButton"]}>Salin</p>
        </button>
      </div>
      <div className={styles["outerKet"]}>
        <p>
          Silahkan salin No.Rekening di atas untuk melakukan pembayaran melalui
          teller/ATM/Mobile/Internet Banking
        </p>
      </div>
    </div>
  );
};

export default KodeBayar;
