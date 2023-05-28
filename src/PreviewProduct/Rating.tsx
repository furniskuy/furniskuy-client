import React from "react";
import styles from "./Rating.module.css";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <>
      <div className={styles["ulasan"]}>
        <div className={styles["rate"]}>
          <h2>Ulasan: 5.0</h2>
        </div>
        <div className={styles["star"]}>
          <FaStar size={25} id="star-icon" />
          <FaStar size={25} id="star-icon" />
          <FaStar size={25} id="star-icon" />
          <FaStar size={25} id="star-icon" />
          <FaStar size={25} id="star-icon" />
        </div>
      </div>
    </>
  );
};

export default Rating;
