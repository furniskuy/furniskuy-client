import { FunctionComponent } from "react";
import styles from "./FurniskuyInvoice.module.css";

type Props = {
  id: string;
};

const FurniskuyInvoice: FunctionComponent<Props> = ({ id }) => {
  return (
    <>
      <div className={styles.InvoiceJudul}>
        <p className={styles.Furniskuy}>FURNISKUY-invoice</p>
        <div className={styles.Invoice}>
          <span>invoice ID #{id}</span>
          <span>Resi : {id}</span>
        </div>
      </div>
    </>
  );
};

export default FurniskuyInvoice;
