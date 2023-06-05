import { useTransaksiById } from "@/api/transaksi";
import { Loading } from "@/components/Loading";
import { useParams } from "react-router-dom";
import Alamat from "./Alamat";
import DaftarPesanan from "./DaftarPesanan";
import FurniskuyInvoice from "./FurniskuyInvoice";
import Pesan from "./Pesan";

export const CetakInvoice = () => {
  const { id } = useParams<{ id: string }>();
  const transaksi = useTransaksiById(id);

  if (transaksi.isLoading || !transaksi.data) return <Loading />;

  return (
    <div>
      <FurniskuyInvoice id={`${transaksi.data?.id}` ?? ""} />
      <Alamat tanggalTransaksi={transaksi.data?.tanggal_transaksi ?? ""} />
      <DaftarPesanan transaksi={transaksi.data} />
      {/* <KurirPembayaran /> */}
      <Pesan />
    </div>
  );
};

export default CetakInvoice;
