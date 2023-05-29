// import React from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "./ButtonDescRating.module.css";

const ButtonDescRating = ({
  tombol,
  setTombol,
}: {
  tombol: number;
  setTombol: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div className={styles["button-desc-rating"]}>
        <button
          className={`${
            styles[tombol === 1 ? "tombolSelected" : "tombolNotSelected"]
          } ${styles["desc"]}`}
          onClick={() => {
            setTombol(1);
          }}
        >
          <p>Deskripsi</p>
        </button>
        <button
          className={`${
            styles[tombol === 2 ? "tombolSelected" : "tombolNotSelected"]
          } ${styles["rating"]}`}
          onClick={() => {
            setTombol(2);
          }}
        >
          <p>Penilaian</p>
        </button>
      </div>
    </>
  );
};

export default ButtonDescRating;
