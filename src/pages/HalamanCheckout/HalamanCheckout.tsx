import { useUser } from "@/api/auth";
import { keranjangKey, useCheckout, useKeranjangs } from "@/api/keranjang";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { pengirimanFixed } from "@/types/misc";

export const HalamanCheckout = () => {
  const [showDialogPesanan, setShowDialogPesanan] = useState(false);

  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const user = useUser();
  const keranjangs = useKeranjangs();
  const checkout = useCheckout({
    onSuccess: (data) => {
      toast.success("Pesanan berhasil dibuat", { position: "top-center" });
      navigate("/pembayaran/" + data.id);
      setShowDialogPesanan(false);
      queryClient.invalidateQueries(keranjangKey.all);
    },
    onError: (error: any) => {
      toast.error(error.message, { position: "top-center" });
      setShowDialogPesanan(false);
    },
  });

  const totalHargaSelected = useMemo(() => {
    return keranjangs.data
      ?.filter((item) => item.selected)
      .reduce((acc, curr) => acc + curr.jumlah * curr.barang.harga, 0);
  }, [keranjangs.data]);

  const createTransaction = () => {
    if (!selectedBank) return;
    checkout.mutateAsync(selectedBank);
  };

  const isCheckoutDisable = useMemo(() => {
    return (
      !user.data?.profile?.alamat ||
      checkout.isLoading ||
      totalHargaSelected === 0
    );
  }, [checkout.isLoading, totalHargaSelected, user.data?.profile?.alamat]);

  return (
    <>
      <div>
        <Header />
        <Alamat />
        <Content />
        <HeaderPengiriman />
        <Pengiriman />
        <Subtotal
          jumlah={keranjangs.data?.filter((item) => item.selected).length ?? 0}
          totalHarga={totalHargaSelected ?? 0}
        />
        {/* <Voucher /> */}
        <HeaderPembayaran />
        <Pembayaran
          selected={selectedBank}
          setSelected={(value) => setSelectedBank(value)}
        />
        <RincianPembayaran
          pengiriman={pengirimanFixed}
          totalHarga={totalHargaSelected ?? 0}
        />
        <TotalButtonPesanan
          showDialogPesanan={showDialogPesanan}
          setShowDialogPesanan={setShowDialogPesanan}
          totalHarga={
            totalHargaSelected ? totalHargaSelected + pengirimanFixed : 0
          }
          buatPesanan={createTransaction}
          disabled={isCheckoutDisable}
          onDisableCheckout={() => {
            if (selectedBank === null) {
              toast.error("Pilih metode pembayaran terlebih dahulu");
              return;
            }

            if (!user.data?.profile?.alamat) {
              toast.error("Alamat belum diisi");
              return;
            }

            if (totalHargaSelected === 0) {
              toast.error("Keranjang masih kosong");
              return;
            }
          }}
        />
      </div>
    </>
  );
};
