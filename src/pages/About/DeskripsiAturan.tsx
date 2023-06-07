import gambarKPengembalian from "../../assets/KebijakanPengembalian.png";
import gambarKPrivasi from "../../assets/KebijakanPrivasi.png";
import gambarSK from "../../assets/SyaratKetentuan.png";
import styles from "./DeskripsiAturan.module.css";

const DeskripsiAturan = () => {
  return (
    <>
      <div className={styles["outer"]}>
        <div className={styles["box"]}>
          <img src={gambarSK} />
          <p>Syarat dan Ketentuan</p>
        </div>
        <div className={styles["ketentuan"]}>
          <p className={styles["header"]}>Syarat dan Ketentuan Furniskuy :</p>
          <ol>
            <li>
              Dengan mengakses dan menggunakan situs web Furniskuy, Anda
              dianggap setuju pada syarat dan ketentuan yang telah ditetapkan.
            </li>
            <li>
              Untuk setiap pembelian di Furniskuy, biaya pengiriman akan
              dikenakan sesuai dengan ketentuan berikut:
              <ul>
                <li>1 barang: Ongkir sebesar Rp50.000.</li>
                <li>2 barang: Ongkir sebesar Rp100.000.</li>
                <li>biaya layanan sebesar Rp1.000 per barang.</li>
              </ul>
            </li>
            <li>
              Pembayaran harus dilakukan dalam mata uang Rupiah menggunakan
              metode pembayaran yang tersedia di website kami. Pesanan akan
              diproses setelah pembayaran diterima.
            </li>
          </ol>
        </div>
      </div>

      <div className={styles["outer"]}>
        <div className={styles["ketentuan2"]}>
          <p className={styles["header"]}>Kebijakan Privasi Furniskuy :</p>
          <ol>
            <li>
              Furniskuy melindungi privasi Anda dengan menjaga kerahasiaan
              informasi pribadi yang Anda berikan saat menggunakan situs web
              kami.
            </li>
            <li>
              Kami hanya mengumpulkan informasi pribadi yang diperlukan untuk
              memproses pesanan dan memberikan layanan yang dibutuhkan.
              Informasi pribadi Anda tidak akan diungkapkan kepada pihak ketiga
              tanpa izin Anda.
            </li>
            <li>
              Kami menggunakan informasi pribadi Anda untuk pemrosesan pesanan,
              pengiriman produk, dan komunikasi terkait layanan kami. Dengan
              persetujuan Anda, kami juga dapat menggunakan informasi tersebut
              untuk kegiatan pemasaran dan promosi.
            </li>
          </ol>
        </div>
        <div className={styles["box"]}>
          <img src={gambarKPrivasi} />
          <p>Kebijakan Privasi</p>
        </div>
      </div>

      <div className={styles["outer"]}>
        <div className={styles["box"]}>
          <img src={gambarKPengembalian} />
          <p>Kebijakan Privasi</p>
        </div>
        <div className={styles["ketentuan"]}>
          <p className={styles["header"]}>Kebijakan Pengembalian Furniskuy :</p>
          <ol>
            <li>
              Kami menerima pengembalian produk yang rusak atau cacat. Untuk
              pengembalian lainnya, harap menyertakan unboxing video produk.
            </li>
            <li>
              Pengembalian diajukanmax. dalam waktu 7 hari setelah menerima
              produk. Produk harus dikembalikan dalam kondisi asli dan dengan
              kemasan asli.
            </li>
            <li>
              Biaya pengembalian ditanggung oleh pembeli, kecuali ada kesalahan
              pengiriman atau produk rusak dari Furniskuy.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default DeskripsiAturan;
