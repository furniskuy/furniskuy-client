import BGUlasan1 from "@/assets/BGulasan1.png";
import BGUlasan2 from "@/assets/BGulasan2.png";
import BGUlasan3 from "@/assets/BGulasan3.png";
import PPulasan1 from "@/assets/PPulasan1.png";
import PPulasan2 from "@/assets/PPulasan2.png";
import PPulasan3 from "@/assets/PPulasan3.png";

import styles from "./Reviews.module.css";

type Review = {
  background: string;
  photo: string;
  name: string;
  profession: string;
  text: string;
};

export const Reviews = () => {
  const reviews: Review[] = [
    {
      background: BGUlasan1,
      photo: PPulasan1,
      name: "Fadil",
      profession: "Pedagang Asongan",
      text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    },
    {
      background: BGUlasan2,
      photo: PPulasan2,
      name: "Prilly",
      profession: "Ibu Rumah Tangga",
      text: "Makasih Furniskuy, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat",
    },
    {
      background: BGUlasan3,
      photo: PPulasan3,
      name: "Jerome",
      profession: "Karyawan Swasta",
      text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    },
  ];

  return (
    <>
      <div className={styles["cardReviewListContainer"]}>
        <div className={styles["PenilaianProduk"]}>
          <div className={styles.reviewHeader}>
            <p className={styles.reviewListTitle}> Penilaian Produk</p>
            <p className={styles.reviewListSubtitle}>Ulasan Customers</p>
          </div>
        </div>
        <div className={styles.reviewList}>
          {reviews.map((review) => (
            <div
              className={styles.cardReview}
              style={{ backgroundImage: `url('${review.background}')` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.photocard}>
                  <img
                    src={review.photo}
                    alt="alt"
                    className={styles.reviewerPhoto}
                  />
                </div>
                <div className={styles.reviewContent}>
                  <p className={styles.reviewerName}>{review.name}</p>
                  <p className={styles.reviewerProfession}>
                    {review.profession}
                  </p>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
