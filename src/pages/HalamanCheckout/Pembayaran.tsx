import { FunctionComponent } from "react";

import { useMetodePembayaran } from "@/api/misc";
import { DEFAULT_BANKS_LOGO } from "@/types/misc";
import styles from "./Pembayaran.module.css";

type Props = {
  selected: number | null;
  setSelected: (value: number) => void;
};

const Pembayaran: FunctionComponent<Props> = ({ selected, setSelected }) => {
  const metodePembayaran = useMetodePembayaran();

  return (
    <div>
      <div className={styles["boxBank"]}>
        {metodePembayaran.isSuccess &&
          metodePembayaran.data.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item.id)}
              className={`${styles["buttonBank"]} ${
                styles[selected === item.id ? "selected" : ""]
              }`}
            >
              <img
                src={item.logo}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = DEFAULT_BANKS_LOGO[item.nama_bank];
                }}
              />
            </button>
          ))}
      </div>

      {selected === null && (
        <p className={styles["noSelectedBank"]}>
          Pilih salah satu metode pembayaran
        </p>
      )}
    </div>
  );
};

export default Pembayaran;
