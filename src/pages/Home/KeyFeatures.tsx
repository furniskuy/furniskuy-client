import styles from "./KeyFeatures.module.css";

export const KeyFeatures = () => {
  return (
    <>
      <div className={styles["featuredContainer"]}>
        <div>
          <img
            src="https://sbwasjlgfngcwfkvqqin.supabase.co/storage/v1/object/public/furniskuy/public/uploads/key-feature.png"
            alt="Product Featured"
            className={styles["featuredImage"]}
          />
        </div>
        <div className={styles["featuredContent"]}>
          <div className={styles["featuredTitle"]}>
            <p>
              <span color="primary"> Sofa </span> Yang Nyaman
            </p>
          </div>
          <div className={styles["featuredSubtitle"]}>
            <p>
              Find all Your furniture needs for anything, All furniture for
              offices, home, businesses and more
            </p>
          </div>
          <div className={styles["list"]}>
            <div className={styles["kiri"]}>
              <ul>
                <li>Interior Stretegy</li>
                <li>Creative Designer</li>
                <li>Interior Architecture</li>
              </ul>
            </div>
            <div className={styles["kanan"]}>
              <ul>
                <li>Update Designer</li>
                <li>Event Decoration</li>
                <li>21 Years Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
