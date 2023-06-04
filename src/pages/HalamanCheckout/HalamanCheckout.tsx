import { useUser } from "@/api/auth";
import { useCheckout, useKeranjangs } from "@/api/keranjang";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alamat from "./Alamat";
import Content from "./Content";
import Header from "./Header";
import HeaderPembayaran from "./HeaderPembayaran";
import Pembayaran from "./Pembayaran";
import RincianPembayaran from "./RincianPembayaran";
import Subtotal from "./Subtotal";
import TotalButtonPesanan from "./TotalButtonPesanan";

export const HalamanCheckout = () => {
  const [showDialogPesanan, setShowDialogPesanan] = useState(false);

  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState<number | null>(null);

  const user = useUser();
  const keranjangs = useKeranjangs();
  const checkout = useCheckout({
    onSuccess: (data) => {
      navigate("/status/" + data.id);
      setShowDialogPesanan(false);
    },
  });

  const totalHargaSelected = useMemo(() => {
    return keranjangs.data
      ?.filter((item) => item.selected)
      .reduce((acc, curr) => acc + curr.jumlah * curr.barang.harga, 0);
  }, [keranjangs.data]);

  const createTransaction = () => {
    if (selectedBank === null) {
      toast.error("Pilih bank terlebih dahulu");
      setShowDialogPesanan(false);
      return;
    }
    checkout.mutateAsync(selectedBank);
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
        <Pembayaran
          selected={selectedBank}
          setSelected={(value) => setSelectedBank(value)}
        />
        <RincianPembayaran
          pengiriman={10000}
          totalHarga={totalHargaSelected ?? 0}
        />
        <TotalButtonPesanan
          showDialogPesanan={showDialogPesanan}
          setShowDialogPesanan={setShowDialogPesanan}
          totalHarga={totalHargaSelected ?? 0}
          buatPesanan={createTransaction}
          disabled={isCheckoutDisable}
        />
      </div>
    </>
  );
};
