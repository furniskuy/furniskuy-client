import React from "react";
import Header from "./Header";
import DeadlineBayar from "./DeadlineBayar";
import KodeBayar from "./KodeBayar";
import Keterangan from "./Keterangan";
import HeaderPembayaran from "./HeaderPembayaran";
import MetodePembayaran from "./MetodePembayaran";

export const PetunjukPembayaran = () => {
  return (
    <>
      <div>
        <Header />
        <DeadlineBayar />
        <KodeBayar />
        <Keterangan />
        <HeaderPembayaran />
        <MetodePembayaran />
      </div>
    </>
  );
};
