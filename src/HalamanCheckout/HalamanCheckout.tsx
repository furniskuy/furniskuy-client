import Alamat from "./Alamat";
import Content from "./Content";
import Header from "./Header";
import HeaderPembayaran from "./HeaderPembayaran";
import HeaderPengiriman from "./HeaderPengiriman";
import Pembayaran from "./Pembayaran";
import Pengiriman from "./Pengiriman";
import RincianPembayaran from "./RincianPembayaran";
import Subtotal from "./Subtotal";
import TotalButtonPesanan from "./TotalButtonPesanan";
import Voucher from "./Voucher";

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
