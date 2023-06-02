import FurniskuyInvoice from './FurniskuyInvoice';
import Alamat from './Alamat';
import DaftarPesanan from './DaftarPesanan'
import KurirPembayaran from './KurirPembayaran'
import Pesan from './Pesan'
export const CetakInvoice = () => {
    return (
      <div>
          <FurniskuyInvoice />
          <Alamat/>
          <DaftarPesanan/>
          <KurirPembayaran/>
          <Pesan/>

          
          </div>
    )
  }
  
  export default CetakInvoice;