import { DialogConfirm } from "@/components/DialogConfirm";
import { idrFormat } from "@/util/number";
import { FunctionComponent } from "react";
import styles from "./TotalButtonPesanan.module.css";
import { pengirimanFixed } from "@/types/misc";

type Props = {
  showDialogPesanan: boolean;
  setShowDialogPesanan: (value: boolean) => void;
  buatPesanan: () => void;
  totalHarga: number;
  disabled?: boolean;
  onDisableCheckout: () => void;
};

const TotalButtonPesanan: FunctionComponent<Props> = ({
  totalHarga,
  buatPesanan,
  disabled,
  showDialogPesanan,
  setShowDialogPesanan,
  onDisableCheckout,
}) => {
  return (
    <>
      <div className={styles["boxTotal-Button"]}>
        <div className={styles["boxKiri"]}>
          <p className={styles["total"]}>Total: </p>
          <p className={styles["totalHarga"]}>
            {idrFormat(totalHarga + pengirimanFixed)}
          </p>
        </div>
        <DialogConfirm
          isOpen={showDialogPesanan}
          setIsOpen={(value) => {
            if (disabled) {
              onDisableCheckout();
              return;
            }
            setShowDialogPesanan(value);
          }}
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
