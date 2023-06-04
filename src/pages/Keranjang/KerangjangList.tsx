import { useMemo } from "react";

import { useKeranjangs, useUpdateKeranjangItem } from "@/api/keranjang";

import { idrFormat } from "@/util/number";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { KeranjangItem } from "./KeranjangItem";
import styles from "./KeranjangList.module.css";

export const KeranjangList = () => {
  const navigate = useNavigate();

  const keranjangs = useKeranjangs();
  const updateKerangjang = useUpdateKeranjangItem();

  const handleSelectAll = () => {
    const selected = !isAllKeranjangSelected;
    Promise.all<any>(
      keranjangs.data?.map((item) =>
        updateKerangjang.mutateAsync({ ...item, selected })
      )
    );
  };

  const isLoading = useMemo(
    () => keranjangs.isLoading || updateKerangjang.isLoading,
    [keranjangs.isLoading, updateKerangjang.isLoading]
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

  return (
    <div>
      <div className={styles.tabelCheckout}>
        <table>
          <tbody>
            {keranjangs.isSuccess &&
              keranjangs.data.map((keranjang, index) => (
                <KeranjangItem
                  key={index}
                  keranjang={keranjang}
                  isLoadingListUpdate={isLoading}
                />
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className={styles.voucher}>
        <input
          type="text"
          placeholder="Masukan Kode Voucher"
          className={styles.InputVoucher}
        />
        <button className={styles.btnpakai}>PAKAI</button>
      </div> */}
      <div className={styles.jmlhrgcheckout}>
        <div className={styles.jmlprdk}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={isAllKeranjangSelected}
            onChange={() => handleSelectAll()}
            disabled={isLoading}
          />
          <p>Pilih Semua ({countKeranjang}) :</p>
        </div>

        <div className={styles.hrgcheck}>
          <p className={styles.harga}>{idrFormat(totalHargaSelected ?? 0)}</p>
          <button
            className={styles.btncheckout}
            onClick={() => {
              if (totalHargaSelected === 0) {
                return toast.error(
                  "Pilih item yang ingin dibeli terlebih dahulu",
                  {
                    position: "top-center",
                  }
                );
              }
              navigate("/checkout", { replace: true });
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
