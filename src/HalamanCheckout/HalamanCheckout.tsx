// import React from "react";
import Header from "./Header";
import Alamat from "./Alamat";
import Content from "./Content";
import HeaderPengiriman from "./HeaderPengiriman";
import Pengiriman from "./Pengiriman";
import Subtotal from "./Subtotal";
import Voucher from "./Voucher";
import HeaderPembayaran from "./HeaderPembayaran";
import Pembayaran from "./Pembayaran";
import RincianPembayaran from "./RincianPembayaran";
import TotalButtonPesanan from "./TotalButtonPesanan";

export const HalamanCheckout = () => {
  return (
    <>
      <div>
        <Header />
        <Alamat />
        <Content />
        <HeaderPengiriman />
        <Pengiriman />
        <Subtotal />
        <Voucher />
        <HeaderPembayaran />
        <Pembayaran />
        <RincianPembayaran />
        <TotalButtonPesanan />
      </div>
    </>
  );
};
