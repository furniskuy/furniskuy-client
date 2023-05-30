import { useState } from "react";
import ButtonAddtoCart from "./ButtonAddtoCart";
import ButtonDescRating from "./ButtonDescRating";
import Desc from "./Desc";
import DescComment from "./DescComment";
import GambarProduct from "./GambarProduct";
import Header from "./Header";
import NamaHargaProduct from "./NamaHargaProduct";
import Rating from "./Rating";

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
