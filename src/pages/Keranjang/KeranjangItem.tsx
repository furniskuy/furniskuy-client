import { Keranjang } from "@/types/api";
import { FunctionComponent, useMemo } from "react";

import {
  useDeleteKeranjangItem,
  useUpdateKeranjangItem,
} from "@/api/keranjang";
import { QuantityButtons } from "@/components/QuantityButtons";
import { getImageUrl, productPlaceHolderURL } from "@/util/image";
import { idrFormat } from "@/util/number";
import styles from "./KeranjangList.module.css";

type Props = {
  keranjang: Keranjang;
  isLoadingListUpdate: boolean;
};

export const KeranjangItem: FunctionComponent<Props> = ({
  keranjang,
  isLoadingListUpdate,
}) => {
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

  const isLoading = useMemo(
    () =>
      isLoadingListUpdate ||
      updateKerangjang.isLoading ||
      deleteKeranjang.isLoading,
    [deleteKeranjang.isLoading, isLoadingListUpdate, updateKerangjang.isLoading]
  );

  return (
    <tr>
      <td>
        <input
          id="checkbox_id"
          type="checkbox"
          className={styles.checkboxInput}
          checked={keranjang.selected}
          onChange={() => handleUpdateSelected(keranjang, !keranjang.selected)}
          disabled={
            isLoading ||
            keranjang.barang.jumlah < 1 ||
            keranjang.barang.jumlah < keranjang.jumlah
          }
        />
      </td>
      <td style={{ width: "180px", height: "180px" }}>
        <img
          src={getImageUrl(keranjang.barang.foto)}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = productPlaceHolderURL;
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </td>
      <td>
        <p>{keranjang.barang.nama}</p>
        <p>Stok: x{keranjang.barang.jumlah}</p>
      </td>
      <td>
        <p className={styles.harga}>{idrFormat(keranjang.barang.harga)}</p>
      </td>
      <td>
        <QuantityButtons
          quantity={keranjang.jumlah}
          maxQuantity={keranjang.barang.jumlah}
          setQuantity={(value) => {
            handleUpdateQuantity(keranjang, value);
          }}
          disabled={isLoading || keranjang.barang.jumlah < 1}
        />
      </td>
      <td>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => !isLoading && handleDeleteKeranjang(keranjang.id)}
        >
          Hapus
        </p>
      </td>
    </tr>
  );
};
