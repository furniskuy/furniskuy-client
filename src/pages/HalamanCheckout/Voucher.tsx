import styles from "./Voucher.module.css";

const Voucher = () => {
  return (
    <>
      <div className={styles["boxVoucher"]}>
        <div>
          <input
            className={styles["kodeVoucher"]}
            type="text"
            placeholder="SKUY127"
          />
          <p className={styles["notifVoucher"]}>Voucher berhasil digunakan</p>
        </div>
        <div className={styles["boxButton"]}>
          <button className={styles["buttonVoucher"]}>
            <span className={styles["tulisan"]}>Gunakan</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Voucher;
