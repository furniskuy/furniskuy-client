import DeadlineBayar from "./DeadlineBayar";
import Header from "./Header";
import HeaderPembayaran from "./HeaderPembayaran";
import Keterangan from "./Keterangan";
import KodeBayar from "./KodeBayar";
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
