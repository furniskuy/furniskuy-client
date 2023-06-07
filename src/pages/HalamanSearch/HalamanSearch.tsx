// import React from "react";
import CardProduct from "./CardProduct";

export const HalamanSearch = () => {
  return (
    <>
      <div>
        <CardProduct
          product={{
            id: 0,
            nama: "",
            deskripsi: undefined,
            foto: "",
            jumlah: 0,
            harga: 0,
            id_supplier: 0,
            pivot: undefined,
          }}
        />
      </div>
    </>
  );
};
