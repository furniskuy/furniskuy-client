import styles from "./MetodeBayar.module.css";

const MetodeBayar = () => {
  return (
    <>
      <div className={styles["header"]}>
        <h2>Metode Pembayaran</h2>
        <h3 className={styles["bank"]}>BNI</h3>
      </div>
      <div className={styles["outerDesc"]}>
        <table>
          <tr>
            <td>No.Pesanan</td>
            <td className={styles["td"]}>230518395FT5DX</td>
          </tr>
          <tr>
            <td>Waktu Pesanan</td>
            <td className={styles["td"]}>25-05-2023 12:30</td>
          </tr>
          <tr>
            <td>Waktu Pembayaran</td>
            <td className={styles["td"]}>25-05-2023 13:00</td>
          </tr>
          <tr>
            <td>Waktu Pengiriman</td>
            <td className={styles["td"]}>26-05-2023 12:30</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default MetodeBayar;
