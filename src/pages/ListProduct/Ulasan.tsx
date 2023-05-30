import BGulasan1 from "@/assets/BGulasan1.png";
import BGulasan2 from "@/assets/BGulasan2.png";
import BGulasan3 from "@/assets/BGulasan3.png";
import PPulasan1 from "@/assets/PPulasan1.png";
import PPulasan2 from "@/assets/PPulasan2.png";
import PPulasan3 from "@/assets/PPulasan3.png";
import styles from "./Ulasan.module.css";

function Ulasan() {
  return (
    <>
      <div className={styles["_2kontainer"]}>
        <div className={styles["PenilaianProduk"]}>
          <div className={styles.judulpenilaian}>
            <p>
              {" "}
              <span className={styles.penilaianprdk}> Penilaian Produk </span>
            </p>
            <p>Ulasan Customers</p>
          </div>
        </div>
        <div className={styles.multicardulasan}>
          <div className={styles.cardUlasan}>
            <img src={BGulasan1} alt="" className={styles.BGulasan} />
            <div className={styles.cobacoba}>
              <div className={styles.photocard}>
                <img src={PPulasan1} alt="ah" className={styles.PPulasan} />
              </div>
              <div className={styles.DescUlasan}>
                <p>
                  {" "}
                  <span className={styles.namauser}>Fadil </span>
                </p>
                <p>
                  <span className={styles.profesiuser}>Pedagang Asongan</span>
                </p>
                <p>
                  {" "}
                  <span className={styles.reviewuser}>
                    {" "}
                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                    terlihat mahal“{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cardUlasan}>
            <img src={BGulasan2} alt="" className={styles.BGulasan} />
            <div className={styles.cobacoba}>
              <div className={styles.photocard}>
                <img src={PPulasan2} alt="ah" className={styles.PPulasan} />
              </div>
              <div className={styles.DescUlasan}>
                <p>
                  <span className={styles.namauser}>Prilly </span>
                </p>
                <p>
                  {" "}
                  <span className={styles.profesiuser}>Ibu Rumah Tangga</span>
                </p>
                <p>
                  {" "}
                  <span className={styles.reviewuser}>
                    “Makasih Furniskuy, aku sekarang berasa tinggal di apartment
                    karena barang-barang yang terlihat “{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cardUlasan}>
            <img src={BGulasan3} alt="" className={styles.BGulasan} />
            <div className={styles.cobacoba}>
              <div className={styles.photocard}>
                <img src={PPulasan3} alt="ah" className={styles.PPulasan} />
              </div>
              <div className={styles.DescUlasan}>
                <p>
                  <span className={styles.namauser}>Jerome</span>
                </p>
                <p>
                  {" "}
                  <span className={styles.profesiuser}> Karyawan Swasta </span>
                </p>
                <p>
                  {" "}
                  <span className={styles.reviewuser}>
                    “Sangat terjangkau untuk kantong saya yang tidak terlalu
                    banyak“
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ulasan;
