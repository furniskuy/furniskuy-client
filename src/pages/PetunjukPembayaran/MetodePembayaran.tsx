import { FunctionComponent, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import styles from "./MetodePembayaran.module.css";

type MetodeDetail = {
  id: number;
  namaMetode: string;
  tataCara: string;
};

type MetodeCollapseProps = {
  metode: MetodeDetail;
};

const MetodeCollapse: FunctionComponent<MetodeCollapseProps> = ({ metode }) => {
  const [showTataCara, setShowTataCara] = useState(false);

  return (
    <div className={styles["metodeContainer"]}>
      <div
        className={styles["metodeOuter"]}
        onClick={() => setShowTataCara((prev) => !prev)}
      >
        <span className={styles["metodeName"]}>{metode.namaMetode}</span>
        <SlArrowRight />
      </div>
      {showTataCara && (
        <div className={styles["metodeTataCara"]}>
          <pre>{metode.tataCara}</pre>
        </div>
      )}
    </div>
  );
};

const MetodePembayaran = () => {
  const listMetode: MetodeDetail[] = [
    {
      id: 1,
      namaMetode: "ATM",
      tataCara: `1. Masukkan kartu ATM dan PIN anda
2. Pilih menu Transaksi Lainnya
3. Pilih menu Transfer
4. Pilih menu Rekening BNI
5. Masukkan nomor rekening tujuan
6. Masukkan nominal transfer
7. Ikuti petunjuk untuk menyelesaikan transaksi`,
    },
    {
      id: 2,
      namaMetode: "Mobile",
      tataCara: `1. Login di m-Banking BNI
2. Pilih Transfer > Antar BNI > Input Baru
3. Masukkan No.Rekening BNI yang disalin tadi ke Rekening Tujuan > Nominal Transaksi > Lanjut
4. Masukkan kata sandi transaksi anda > Lanjut
5. Kirim > Oke
`,
    },
    {
      id: 3,
      namaMetode: "Internet Banking",
      tataCara: `1. Login di i-Banking BNI
2. Pilih menu Transfer > Rekening BNI
3. Masukkan nomor rekening tujuan
4. Masukkan nominal transfer
5. Ikuti petunjuk untuk menyelesaikan transaksi`,
    },
  ];
  return (
    <>
      <div className={styles["metodeHeader"]}>
        <h2>Cara Melakukan Pembayaran</h2>
      </div>
      {listMetode.map((metode, index) => (
        <MetodeCollapse key={index} metode={metode} />
      ))}
    </>
  );
};

export default MetodePembayaran;
