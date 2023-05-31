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
      background: "/src/assets/BGulasan1.png",
      photo: "/src/assets/PPulasan1.png",
      name: "Fadil",
      profession: "Pedagang Asongan",
      text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    },
    {
      background: "/src/assets/BGulasan2.png",
      photo: "/src/assets/PPulasan2.png",
      name: "Prilly",
      profession: "Ibu Rumah Tangga",
      text: "Makasih Furniskuy, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat",
    },
    {
      background: "/src/assets/BGulasan3.png",
      photo: "/src/assets/PPulasan3.png",
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
