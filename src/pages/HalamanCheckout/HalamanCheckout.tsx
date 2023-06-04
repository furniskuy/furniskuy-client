import { useUser } from "@/api/auth";
import { useCheckout, useKeranjangs } from "@/api/keranjang";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Alamat from "./Alamat";
import Content from "./Content";
import Header from "./Header";
import HeaderPembayaran from "./HeaderPembayaran";
import Pembayaran from "./Pembayaran";
import RincianPembayaran from "./RincianPembayaran";
import Subtotal from "./Subtotal";
import TotalButtonPesanan from "./TotalButtonPesanan";

export const HalamanCheckout = () => {
  const navigate = useNavigate();

  const user = useUser();
  const keranjangs = useKeranjangs();
  const checkout = useCheckout({
    onSuccess: (data) => {
      navigate("/status/" + data.id);
    },
  });

  const totalHargaSelected = useMemo(() => {
    return keranjangs.data
      ?.filter((item) => item.selected)
      .reduce((acc, curr) => acc + curr.jumlah * curr.barang.harga, 0);
  }, [keranjangs.data]);

  const createTransaction = () => {
    checkout.mutateAsync();
  };

  const isCheckoutDisable = useMemo(() => {
    return !user.data?.profile?.alamat || checkout.isLoading;
  }, [checkout.isLoading, user.data?.profile?.alamat]);

  return (
    <>
      <div>
        <Header />
        <Alamat />
        <Content />
        {/* <HeaderPengiriman />
        <Pengiriman /> */}
        <Subtotal />
        {/* <Voucher /> */}
        <HeaderPembayaran />
        <Pembayaran />
        <RincianPembayaran
          pengiriman={10000}
          totalHarga={totalHargaSelected ?? 0}
        />
        <TotalButtonPesanan
          totalHarga={totalHargaSelected ?? 0}
          buatPesanan={createTransaction}
          disabled={isCheckoutDisable}
        />
      </div>
    </>
  );
};
