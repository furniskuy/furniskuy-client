import { useInventaris } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";

import styles from "./Content.module.css";

const Content = ({ halaman }: { halaman: number }) => {
  let countContent = 0;

  const STATUS_MAPPING = [
    "Semua",
    "Menunggu Pembayaran",
    "Sedang Dikemas",
    "Dikirim",
    "Selesai",
    "Dibatalkan",
  ];

  const inventarisQuery = useInventaris({ limit: 8 });

  return (
    <>
      {inventarisQuery.isLoading && <p>Loading...</p>}

      {inventarisQuery.isSuccess &&
        inventarisQuery.data.data.map((item, index) => {
          if (halaman === 1 || halaman === 1) {
            countContent++;

            return (
              <div className={styles["content"]} key={index}>
                <div className={styles["kiri"]}>
                  <div className={styles["kiriAtas"]}>
                    <div className={styles["gambar"]}>
                      {<img src={getImageUrl(item.image)} />}
                    </div>
                    <div className={styles["namaBarang"]}>
                      <p>{item.nama}</p>
                      <p>{item.id}</p>
                    </div>
                  </div>
                  {halaman !== 1 ? (
                    <div className={styles["statusPesanan"]}>
                      <p>{item.nama}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={styles["kanan"]}>
                  <div className={styles["hargaBarang"]}>
                    <p>{idrFormat(item.harga)}</p>
                  </div>
                  <div className={styles["totalPesanan"]}>
                    <p>
                      Total Pesanan :
                      <span className={styles["totalBayar"]}>
                        {idrFormat(item.harga)}
                      </span>
                    </p>
                  </div>
                  {halaman === 1 ? (
                    <div className={styles["status" + item.id]}>
                      <p>{STATUS_MAPPING[item.id - 1]}</p>
                    </div>
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

          if (
            index === inventarisQuery.data.data.length - 1 &&
            countContent === 0
          ) {
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
