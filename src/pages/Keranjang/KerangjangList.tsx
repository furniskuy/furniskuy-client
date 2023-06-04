import { useMemo } from "react";

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

import { Link } from "react-router-dom";
import styles from "./KeranjangList.module.css";

export const KeranjangList = () => {
  const keranjangs = useKeranjangs();
  const updateKerangjang = useUpdateKeranjangItem();
  const deleteKeranjang = useDeleteKeranjangItem();

  const handleUpdateQuantity = (keranjang: Keranjang, value: number) => {
    updateKerangjang.mutate({ ...keranjang, jumlah: value });
  };

  const handleUpdateSelected = (keranjang: Keranjang, selected: boolean) => {
    updateKerangjang.mutate({ ...keranjang, selected });
  };

  const handleDeleteKeranjang = (id: number) => {
    deleteKeranjang.mutate(id);
  };

  const handleSelectAll = () => {
    const selected = !isAllKeranjangSelected;
    Promise.all<any>(
      keranjangs.data?.map((item) =>
        updateKerangjang.mutateAsync({ ...item, selected })
      )
    );
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

  const isAllKeranjangSelected = useMemo(() => {
    if (!keranjangs.data) return false;
    return (
      keranjangs.data?.length > 0 &&
      keranjangs.data.every((item) => item.selected)
    );
  }, [keranjangs.data]);

  const totalHargaSelected = useMemo(() => {
    return keranjangs.data
      ?.filter((item) => item.selected)
      .reduce((acc, curr) => acc + curr.jumlah * curr.barang.harga, 0);
  }, [keranjangs.data]);

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
                      checked={keranjang.selected}
                      onChange={() =>
                        handleUpdateSelected(keranjang, !keranjang.selected)
                      }
                    />
                  </td>
                  <td>
                    <img src={getImageUrl(keranjang.barang.foto)} alt="" />
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
                        handleUpdateQuantity(keranjang, value);
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
            checked={isAllKeranjangSelected}
            onChange={() => handleSelectAll()}
          />
          <p>Pilih Semua ({countKeranjang}) :</p>
        </div>

        <div className={styles.hrgcheck}>
          <p className={styles.harga}>{idrFormat(totalHargaSelected ?? 0)}</p>
          <Link to="/checkout">
            <button
              className={styles.btncheckout}
              disabled={totalHargaSelected === 0}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
