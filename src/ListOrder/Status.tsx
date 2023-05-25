// import React from 'react';
import "./Status.css";
import { Dispatch, SetStateAction } from "react";

const Status = ({
  halaman,
  setHalaman,
}: {
  halaman: number;
  setHalaman: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <div className="statusBar">
        <div
          className={halaman === 1 ? "statusSelected" : "statusNotSelected"}
          onClick={() => {
            setHalaman(1);
          }}
        >
          Semua
        </div>
        <div
          className={halaman === 2 ? "statusSelected" : "statusNotSelected"}
          onClick={() => {
            setHalaman(2);
          }}
        >
          Belum Bayar
        </div>
        <div
          className={halaman === 3 ? "statusSelected" : "statusNotSelected"}
          onClick={() => {
            setHalaman(3);
          }}
        >
          Sedang Dikemas
        </div>
        <div
          className={halaman === 4 ? "statusSelected" : "statusNotSelected"}
          onClick={() => {
            setHalaman(4);
          }}
        >
          Dikirim
        </div>
        <div
          className={halaman === 5 ? "statusSelected" : "statusNotSelected"}
          onClick={() => {
            setHalaman(5);
          }}
        >
          Selesai
        </div>
        <div
          className={halaman === 6 ? "statusSelected" : "statusNotSelected"}
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
