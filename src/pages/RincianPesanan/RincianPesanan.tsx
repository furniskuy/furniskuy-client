import { useTransaksiById } from "@/api/transaksi";
import { Loading } from "@/components/Loading";
import { dateTimeFull } from "@/util/date";
import moment from "moment";
import { useParams } from "react-router-dom";
import AlamatPengiriman from "./AlamatPengiriman";
import MetodeBayar from "./MetodeBayar";
import ProdukPesanan from "./ProdukPesanan";
import StatusPesanan from "./StatusPesanan";

export const RincianPesanan = () => {
  const { id } = useParams<{ id: string }>();
  const transaksi = useTransaksiById(id);

  if (transaksi.isLoading || !transaksi.data) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <StatusPesanan
          estimatedArrival={dateTimeFull(
            moment(transaksi.data.waktu_pengiriman).add(3, "d").toString()
          )}
        />
        {/* <Pengiriman /> */}
        <AlamatPengiriman />
        <ProdukPesanan />
        <MetodeBayar transaksi={transaksi.data} />
      </div>
    </>
  );
};
