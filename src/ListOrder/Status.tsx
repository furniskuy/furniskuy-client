// import React from 'react';
import { Dispatch, SetStateAction } from "react";
import styles from "./Status.module.css";

const Status = ({
  halaman,
  setHalaman,
}: {
  halaman: number;
  setHalaman: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div className={styles["statusBar"]}>
        <div
          className={
            styles[halaman === 1 ? "statusSelected" : "statusNotSelected"]
          }
          onClick={() => {
            setHalaman(1);
          }}
        >
          Semua
        </div>
        <div
          className={
            styles[halaman === 2 ? "statusSelected" : "statusNotSelected"]
          }
          onClick={() => {
            setHalaman(2);
          }}
        >
          Belum Bayar
        </div>
        <div
          className={
            styles[halaman === 3 ? "statusSelected" : "statusNotSelected"]
          }
          onClick={() => {
            setHalaman(3);
          }}
        >
          Sedang Dikemas
        </div>
        <div
          className={
            styles[halaman === 4 ? "statusSelected" : "statusNotSelected"]
          }
          onClick={() => {
            setHalaman(4);
          }}
        >
          Dikirim
        </div>
        <div
          className={
            styles[halaman === 5 ? "statusSelected" : "statusNotSelected"]
          }
          onClick={() => {
            setHalaman(5);
          }}
        >
          Selesai
        </div>
        <div
          className={
            styles[halaman === 6 ? "statusSelected" : "statusNotSelected"]
          }
          onClick={() => {
            setHalaman(6);
          }}
        >
          Dibatalkan
        </div>
      </div>
    </>
  );
};

export default Status;
