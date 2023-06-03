import { useMemo, useState } from "react";

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

import styles from "./KeranjangList.module.css";

export const KeranjangList = () => {
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
      setSelected((prev) => [...prev, id]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleSelectAll = () => {
    if (!keranjangs.data) return;
    if (selected.length === keranjangs.data.length) {
      setSelected([]);
    } else {
      setSelected(keranjangs.data.map((item) => item.id));
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

  const countKeranjang = useMemo(
    () =>
      keranjangs.data &&
      keranjangs.data.reduce((acc, curr) => acc + curr.jumlah, 0),
    [keranjangs]
  );

  const totalHargaSelected = useMemo(() => {
    return keranjangs.data
      ?.filter((item) => selected.indexOf(item.id) !== -1)
      .reduce((acc, curr) => acc + curr.jumlah * curr.barang.harga, 0);
  }, [keranjangs.data, selected]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.tabelCheckout}>
        <table>
          <tbody>
            {keranjangs.isSuccess &&
              keranjangs.data.map((keranjang, index) => (
                <tr key={index}>
                  <td>
                    <input
                      id="checkbox_id"
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
                      disabled={isLoading}
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
          </tbody>
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
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={selected.length === keranjangs.data?.length}
            onChange={() => handleSelectAll()}
          />
          <p>Pilih Semua ({countKeranjang}) :</p>
        </div>

        <div className={styles.hrgcheck}>
          <p className={styles.harga}>{idrFormat(totalHargaSelected ?? 0)}</p>
          <button className={styles.btncheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};
