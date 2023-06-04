import LogoKodeBayar from "@/assets/BNI.png";
import styles from "./KodeBayar.module.css";

const KodeBayar = () => {
  return (
    <div>
      <div className={styles["boxKodeBayar"]}>
        <img src={LogoKodeBayar} className={styles["logoBayar"]} />
        <p className={styles["VA"]}>8 2 8 2 8 0 5 1 0 3 6 5 5 1 6 4</p>
        <button className={styles["buttonSalin"]}>
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
