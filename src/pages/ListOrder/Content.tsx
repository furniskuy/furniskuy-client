import KursiMinimalis from "@/assets/KursiMinimalis.png";
import KursiUnik from "@/assets/KursiUnik.png";
import MejaKayu from "@/assets/MejaKayu.png";
import MejaMinimalis from "@/assets/MejaMinimalis.png";
import RakMejaTV from "@/assets/RakMejaTV.png";
import SofaVintage from "@/assets/SofaVintage.png";

import styles from "./Content.module.css";

const Content = ({ halaman }: { halaman: number }) => {
  const ListBarang = [
    {
      gambarBarang: KursiUnik,
      namaBarang: "Kursi Unik - PINK",
      statusPesanan: "Pesanan telah dibatalkan.",
      hargaBarang: "Rp 550.000",
      quantity: "x1",
      totalHarga: "Rp 650.000",
      status: 6,
    },
    {
      gambarBarang: KursiMinimalis,
      namaBarang: "Kursi Minimalis - GREY",
      statusPesanan: "Pesanan telah diterima oleh yang bersangkutan.",
      hargaBarang: "Rp 1.300.000",
      quantity: "x1",
      totalHarga: "Rp 1.350.000",
      status: 5,
    },
    {
      gambarBarang: SofaVintage,
      namaBarang: "Sofa Vintage - YELLOW",
      statusPesanan: "Menunggu Paket diserahkan ke pihak jasa kirim.",
      hargaBarang: "Rp 1.500.000",
      quantity: "x1",
      totalHarga: "Rp 1.500.000 ",
      status: 3,
    },
    {
      gambarBarang: MejaMinimalis,
      namaBarang: "Meja Minimalis - BROWN",
      statusPesanan: "Menunggu pembayaran dilakukan.",
      hargaBarang: "Rp 200.000",
      quantity: "x1",
      totalHarga: "Rp 250.000",
      status: 2,
    },
    {
      gambarBarang: MejaKayu,
      namaBarang: "Meja Kayu - BROWN",
      statusPesanan: "Sedang dalam perjalanan. Menuju alamat tujuan.",
      hargaBarang: "Rp 600.000",
      quantity: "x2",
      totalHarga: "Rp 1.275.000 ",
      status: 4,
    },
    {
      gambarBarang: RakMejaTV,
      namaBarang: "Rak Meja TV - BROWN",
      statusPesanan: "Pesanan telah diterima oleh yang bersangkutan.",
      hargaBarang: "Rp 750.000",
      quantity: "x1",
      totalHarga: "Rp 800.000 ",
      status: 5,
    },
  ];

  let countContent = 0;

  return (
    <>
      {ListBarang.map((barang, index) => {
        if (halaman === 1 || halaman === barang.status) {
          countContent++;

          return (
            <div className={styles["content"]} key={index}>
              <div className={styles["kiri"]}>
                <div className={styles["kiriAtas"]}>
                  <div className={styles["gambar"]}>
                    {<img src={barang.gambarBarang} />}
                  </div>
                  <div className={styles["namaBarang"]}>
                    <p>{barang.namaBarang}</p>
                    <p>{barang.quantity}</p>
                  </div>
                </div>
                {halaman !== 1 ? (
                  <div className={styles["statusPesanan"]}>
                    <p>{barang.statusPesanan}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles["kanan"]}>
                <div className={styles["hargaBarang"]}>
                  <p>{barang.hargaBarang}</p>
                </div>
                <div className={styles["totalPesanan"]}>
                  <p>
                    Total Pesanan :
                    <span className={styles["totalBayar"]}>
                      {barang.totalHarga}
                    </span>
                  </p>
                </div>
                {halaman === 1 ? (
                  barang.status === 2 ? (
                    <div className={styles["status2"]}>
                      <p>Menunggu Pembayaran</p>
                    </div>
                  ) : barang.status === 3 ? (
                    <div className={styles["status3"]}>
                      <p>Diproses</p>
                    </div>
                  ) : barang.status === 4 ? (
                    <div className={styles["status4"]}>
                      <p>Dikirim</p>
                    </div>
                  ) : barang.status === 5 ? (
                    <div className={styles["status5"]}>
                      <p>Diterima</p>
                    </div>
                  ) : barang.status === 6 ? (
                    <div className={styles["status6"]}>
                      <p>Dibatalkan</p>
                    </div>
                  ) : (
                    <></>
                  )
                ) : (
                  <div className={styles["button"]}>
                    <button
                      className={`${styles["tombol"]} ${styles["chatPenjual"]}`}
                    >
                      <p>Chat Penjual</p>
                    </button>
                    <button
                      className={`${styles["tombol"]} ${styles["batalkanPesanan"]}`}
                    >
                      <p>Batalkan Pesanan</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        }

        if (index === ListBarang.length - 1 && countContent === 0) {
          return (
            <div className={styles["emptyContent"]}>
              <h1>Anda Belum Memiliki Pesanan</h1>
            </div>
          );
        }
      })}
    </>
  );
};

export default Content;
