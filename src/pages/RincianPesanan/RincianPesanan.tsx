import AlamatPengiriman from "./AlamatPengiriman";
import MetodeBayar from "./MetodeBayar";
import Pengiriman from "./Pengiriman";
import ProdukPesanan from "./ProdukPesanan";
import StatusPesanan from "./StatusPesanan";

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
