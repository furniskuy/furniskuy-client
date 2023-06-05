import styles from "./ProductDescription.module.css";

type Props = {
  deskripsi: string;
};

export const ProductDescription: React.FC<Props> = ({ deskripsi }) => {
  return (
    <div className={styles["descOuter"]}>
      <h3 className={styles["descTitle"]}>Deskripsi Barang</h3>
      <pre className={styles["descContent"]}>{deskripsi}</pre>
    </div>
  );
};
