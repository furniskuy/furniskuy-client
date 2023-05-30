import { useInventaris } from "@/api/inventaris";

import logokeranjang from "@/assets/logo keranjang.png";
import tandapanah from "@/assets/tandapanah.png";
import styles from "./Productkonten.module.css";

import { getImageUrl } from "@/util/image";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductKonten() {
  const [halaman, setHalaman] = useState(0);
  const [kategori, setKategori] = useState(0);

  const inventarisQuery = useInventaris({ limit: 8 });

  const addToCart = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <div>
        <div className={styles["productHeader"]}>
          <div className={styles["PHKiri"]}>
            <div className={styles["product"]}>
              <p>Produk</p>
            </div>
            <div className={styles["Kategori"]}>
              <div
                className={
                  styles[halaman === 1 ? "statusSelected" : "statusNotSelected"]
                }
                onClick={() => setHalaman(1)}
              >
                Terlaris
              </div>

              <div
                className={
                  styles[halaman === 2 ? "statusSelected" : "statusNotSelected"]
                }
                onClick={() => setHalaman(2)}
              >
                Populer
              </div>
            </div>
          </div>
          <div className={styles["LihatSemua"]}>
            <div
              className={
                styles[halaman === 3 ? "statusSelected" : "statusNotSelected"]
              }
              onClick={() => setHalaman(3)}
            >
              Lihat Semua
            </div>
          </div>
        </div>
        <div className={styles["BarKategoriProduct"]}>
          <div
            className={
              styles[kategori === 1 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setKategori(1)}
          >
            Semua
          </div>

          <div
            className={
              styles[kategori === 2 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setKategori(2)}
          >
            Sofa
          </div>

          <div
            className={
              styles[kategori === 3 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setKategori(3)}
          >
            Kasur
          </div>

          <div
            className={
              styles[kategori === 4 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setKategori(4)}
          >
            Kursi
          </div>

          <div
            className={
              styles[kategori === 5 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setKategori(5)}
          >
            Meja
          </div>

          <div
            className={
              styles[kategori === 6 ? "statusSelected" : "statusNotSelected"]
            }
            onClick={() => setKategori(6)}
          >
            Rak
          </div>
        </div>
        <div className={styles["daftarProduk"]}>
          {inventarisQuery.isLoading && <div>Loading...</div>}

          {inventarisQuery.isError && <div>Error...</div>}

          {inventarisQuery.isSuccess &&
            inventarisQuery.data?.data.map((item) => (
              <div className={styles["cardProduct"]}>
                <div className={styles["GambarProduct"]}>
                  <div className={styles["divGambar"]}>
                    <img
                      src={getImageUrl(item.image)}
                      alt={item.nama}
                      className={styles["imgprdk"]}
                    />
                  </div>
                  <img
                    onClick={() => addToCart(item.id)}
                    src={logokeranjang}
                    alt="keranjang"
                  />
                </div>
                <Link to={"/produk/" + item.id}>
                  <div className={styles["namaProduk"]}>
                    <div>
                      <p>{item.nama}</p>
                      <p>{item.harga}</p>
                    </div>
                    <img
                      src={tandapanah}
                      alt="ahhh"
                      className={styles["tandapanah"]}
                    />
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductKonten;
