import styles from "./ProductDescription.module.css";

export const ProductDescription = () => {
  return (
    <div className={styles["descOuter"]}>
      <h3 className={styles["descTitle"]}>Deskripsi Barang</h3>
      <pre className={styles["descContent"]}>{`
      • Brand      :   FURNISKUY
      • Kategori   :   Kursi
      • Style      :   Minimalis
      • Material   :   Kayu mahoni
      • Warna      :   Abu-abu
      • Tinggi     :   sekitar 40-50 cm. 
      • Lebar      :   sekitar 50-80 cm. 
      • Berat      :   5 kg. 


      Percantik rumah anda dengan koleksi Kursi Minimalis. Dengan warna yang elegan, membuat Kursi ini akan semakin indah jika dipadupadankan dengan Meja pilihan kamu.

      Diperkuat dengan kaki yang terbuat dari Kayu Mahoni, KURSI MINIMALIS - GREY dapat dengan aman digunakan dalam waktu yang lama.
      `}</pre>
    </div>
  );
};
