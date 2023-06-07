import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./ButtonCetakInv.module.css";

type Props = {
  transaksiId: number;
};

const ButtonCetakInv: FunctionComponent<Props> = ({ transaksiId }) => {
  return (
    <div className={styles["outerButton"]}>
      <Link to={"/invoice/" + transaksiId}>
        <button>
          <p className={styles["tulisan"]}>Cetak Invoice</p>
        </button>
      </Link>
    </div>
  );
};

export default ButtonCetakInv;
