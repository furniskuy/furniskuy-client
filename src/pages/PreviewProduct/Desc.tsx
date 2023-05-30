import styles from "./Desc.module.css";

const Desc = () => {
  return (
    <>
      <div className={styles["descOuter"]}>
        <div className={styles["spek"]}>
          <table>
            <tr>
              <td>•Brand</td>
              <td>: Furniskuy</td>
            </tr>
            <tr>
              <td>•Kategori</td>
              <td>: Kursi</td>
            </tr>
            <tr>
              <td>•Style</td>
              <td>: Minimalis</td>
            </tr>
            <tr>
              <td>•Material</td>
              <td>: Kayu Mahoni</td>
            </tr>
            <tr>
              <td>•Warna</td>
              <td>: Abu-Abu</td>
            </tr>
            <tr>
              <td>•Ukuran</td>
              <td>
                : Lebar sekitar 45-60cm. Kedalaman dudukan sekitar 40-50cm.
                Tinggi dudukan sekitar 45-55cm.
              </td>
            </tr>
          </table>
        </div>
        <div className={styles["desc"]}>
          <span>
            Percantik rumah anda dengan koleksi Kursi Minimalis. Dengan warna
            yang elegan, membuat kursi ini akan semakin indah jika
            dipadupadankan dengan meja pilihan kamu.
          </span>
          <span>
            Diperkuat dengan kaki yang terbuat dari Kayu Mahoni, KURSI MINIMALIS
            - GREY dapat dengan aman digunakan dalam waktu yang lama.
          </span>
        </div>
      </div>
    </>
  );
};

export default Desc;
