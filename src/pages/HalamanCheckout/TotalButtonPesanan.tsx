import { DialogConfirm } from "@/components/DialogConfirm";
import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./TotalButtonPesanan.module.css";

type Props = {
  showDialogPesanan: boolean;
  setShowDialogPesanan: (value: boolean) => void;
  buatPesanan: () => void;
  totalHarga: number;
  disabled?: boolean;
};

const TotalButtonPesanan: FunctionComponent<Props> = ({
  totalHarga,
  buatPesanan,
  disabled,
  showDialogPesanan,
  setShowDialogPesanan,
}) => {
  return (
    <>
      <div className={styles["boxTotal-Button"]}>
        <div className={styles["boxKiri"]}>
          <p className={styles["total"]}>Total: </p>
          <p className={styles["totalHarga"]}>{idrFormat(totalHarga)}</p>
        </div>
        <DialogConfirm
          isOpen={showDialogPesanan}
          setIsOpen={setShowDialogPesanan}
          title="Buat Pesanan"
          description="Apakah anda yakin ingin membuat pesanan?"
          onConfirm={buatPesanan}
          isLoading={disabled ?? false}
          triggerComponent={
            <button
              className={styles["buttonBuatPesanan"]}
              disabled={disabled}
              style={{ cursor: disabled ? "not-allowed" : "pointer" }}
            >
              <span>Buat Pesanan</span>
            </button>
          }
        />
      </div>
    </>
  );
};

export default TotalButtonPesanan;
