import DeadlineBayar from "./DeadlineBayar";
import Header from "./Header";
import KodeBayar from "./KodeBayar";
import MetodePembayaran from "./MetodePembayaran";

import styles from "./PetunjukPembayaran.module.css";

export const PetunjukPembayaran = () => {
  return (
    <div className={styles["petunjukContainer"]}>
      <Header />
      <DeadlineBayar />
      <KodeBayar />
      <MetodePembayaran />
    </div>
  );
};
