import React from "react";
import styles from "./ButtonCetakInv.module.css";

const ButtonCetakInv = () => {
  return (
    <>
      <div className={styles["outerButton"]}>
        <button>
          <p className={styles["tulisan"]}>Cetak Invoice</p>
        </button>
      </div>
    </>
  );
};

export default ButtonCetakInv;
