import { dateTimeFull } from "@/util/date";
import { FunctionComponent } from "react";
import styles from "./DeadlineBayar.module.css";

type Props = {
  deadline: Date | string;
};

const DeadlineBayar: FunctionComponent<Props> = ({ deadline }) => {
  return (
    <div className={styles["boxDeadline"]}>
      <p>Kode bayar akan hangus pada jam {dateTimeFull(deadline)}</p>
      <p>
        Mohon menyelesaikan pembayaran sebelum jam{" "}
        <span className={styles["jam"]}> {dateTimeFull(deadline)} </span>
      </p>
    </div>
  );
};

export default DeadlineBayar;
