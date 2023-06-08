import styles from "./Subtotal.module.css";
import { FunctionComponent } from "react";
import { idrFormat } from "@/util/number";

type Props = {
  jumlah: number;
  totalHarga: number;
};

const Subtotal: FunctionComponent<Props> = ({ jumlah, totalHarga }) => {
  return (
    <>
      <div className={styles["subTotal"]}>
        <p>{jumlah} items, Subtotal:</p>
        <p className={styles["hargaTotal"]}>{idrFormat(totalHarga)}</p>
      </div>
    </>
  );
};

export default Subtotal;
