// import React from "react";
import Header from "./Header";
import GambarProduct from "./GambarProduct";
import NamaHargaProduct from "./NamaHargaProduct";
import ButtonDescRating from "./ButtonDescRating";
import Desc from "./Desc";
import DescComment from "./DescComment";
import Rating from "./Rating";
import ButtonAddtoCart from "./ButtonAddtoCart";
import { useState } from "react";

export const PreviewProduct = () => {
  const [tombol, setTombol] = useState(1);
  return (
    <div>
      <Header />
      <GambarProduct />
      <NamaHargaProduct />
      <ButtonDescRating tombol={tombol} setTombol={setTombol} />
      {tombol === 1 ? <Desc /> : <DescComment />}
      <Rating />
      <ButtonAddtoCart />
    </div>
  );
};
