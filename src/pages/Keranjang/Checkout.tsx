import {
  useDeleteKeranjangItem,
  useKeranjangs,
  useUpdateKeranjangItem,
} from "@/api/keranjang";
import { Loading } from "@/components/Loading";
import { QuantityButtons } from "@/components/QuantityButtons";
import { Keranjang } from "@/types/api";
import { getImageUrl } from "@/util/image";
import { idrFormat } from "@/util/number";
import { useMemo, useState } from "react";
import styles from "./Checkout.module.css";

export const Checkout = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const keranjangs = useKeranjangs();
  const updateKerangjang = useUpdateKeranjangItem();
  const deleteKeranjang = useDeleteKeranjangItem();

  const handleUpdateQuantity = (value: number, keranjang: Keranjang) => {
    updateKerangjang.mutate({ ...keranjang, jumlah: value });
  };

  const handleDeleteKeranjang = (id: number) => {
    deleteKeranjang.mutate(id);
  };

  const handleSelect = (id: number) => {
    if (selected.indexOf(id) === -1) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((item) => item !== id));
    }
  };

  const isLoading = useMemo(
    () =>
      keranjangs.isLoading ||
      updateKerangjang.isLoading ||
      deleteKeranjang.isLoading,
    [
      deleteKeranjang.isLoading,
      keranjangs.isLoading,
      updateKerangjang.isLoading,
    ]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.tabelCheckout}>
        <table>
          {keranjangs.isSuccess &&
            keranjangs.data.data.map((keranjang) => (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className={styles.checkboxInput}
                    checked={selected.indexOf(keranjang.id) !== -1}
                    onChange={() => handleSelect(keranjang.id)}
                  />
                </td>
                <td>
                  <img src={getImageUrl(keranjang.barang.image)} alt="" />
                </td>
                <td>
                  <p>{keranjang.barang.nama}</p>
                </td>
                <td>
                  <p className={styles.harga}>
                    {idrFormat(keranjang.barang.harga)}
                  </p>
                </td>
                <td>
                  <QuantityButtons
                    quantity={keranjang.jumlah}
                    maxQuantity={999}
                    setQuantity={(value) => {
                      handleUpdateQuantity(value, keranjang);
                    }}
                  />
                </td>
                <td>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteKeranjang(keranjang.id)}
                  >
                    Hapus
                  </p>
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div className={styles.voucher}>
        <input
          type="text"
          placeholder="Masukan Kode Voucher"
          className={styles.InputVoucher}
        />
        <button className={styles.btnpakai}>PAKAI</button>
      </div>
      <div className={styles.jmlhrgcheckout}>
        <div className={styles.jmlprdk}>
          <input type="checkbox" className={styles.checkboxInput} />
          <p>Pilih Semua ({}) :</p>
        </div>

        <div className={styles.hrgcheck}>
          <p className={styles.harga}>Rp.6.000.000</p>
          <button className={styles.btncheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};
