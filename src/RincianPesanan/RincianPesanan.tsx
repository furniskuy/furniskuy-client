import React from "react";
import StatusPesanan from "./StatusPesanan";
import Pengiriman from "./Pengiriman";
import AlamatPengiriman from "./AlamatPengiriman";
import ProdukPesanan from "./ProdukPesanan";
import MetodeBayar from "./MetodeBayar";

export const RincianPesanan = () => {
  return (
    <>
      <div>
        <StatusPesanan />
        <Pengiriman />
        <AlamatPengiriman />
        <ProdukPesanan />
        <MetodeBayar />
      </div>
    </>
  );
};
