import BCA from "@/assets/BCA.png";
import BNI from "@/assets/BNI.png";
import BRI from "@/assets/BRI.png";

export const STATUS_MAPPING = [
  "Semua",
  "Belum Bayar",
  "Sedang Dikemas",
  "Dikirim",
  "Selesai",
  "Dibatalkan",
];

export const DEFAULT_BANKS_LOGO: { [key: string]: string } = {
  BNI: BNI,
  BRI: BRI,
  BCA: BCA,
};

export type MetodeDetail = {
  id: number;
  namaMetode: string;
  tataCara: string;
};

const listMetodeBNI: MetodeDetail[] = [
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

const listMetodeBRI: MetodeDetail[] = [
  {
    id: 1,
    namaMetode: "ATM",
    tataCara: `1. Masukkan kartu ATM dan PIN anda
2. Pilih menu Transaksi Lainnya
3. Pilih menu Transfer
4. Pilih menu Rekening BRI
5. Masukkan nomor rekening tujuan
6. Masukkan nominal transfer
7. Ikuti petunjuk untuk menyelesaikan transaksi`,
  },
  {
    id: 2,
    namaMetode: "Mobile",
    tataCara: `1. Login di BRI Mobile
2. Pilih menu Transfer > Antar Bank
3. Pilih Bank BRI
4. Masukkan nomor rekening tujuan
5. Masukkan nominal transfer
6. Ikuti petunjuk untuk menyelesaikan transaksi`,
  },
  {
    id: 3,
    namaMetode: "Internet Banking",
    tataCara: `1. Login di BRI Internet Banking
2. Pilih menu Transfer > Rekening BRI
3. Masukkan nomor rekening tujuan
4. Masukkan nominal transfer
5. Ikuti petunjuk untuk menyelesaikan transaksi`,
  },
];

const listMetodeBCA: MetodeDetail[] = [
  {
    id: 1,
    namaMetode: "ATM",
    tataCara: `1. Masukkan kartu ATM dan PIN anda
2. Pilih menu Transaksi Lainnya
3. Pilih menu Transfer
4. Pilih menu Rekening BCA
5. Masukkan nomor rekening tujuan
6. Masukkan nominal transfer
7. Ikuti petunjuk untuk menyelesaikan transaksi`,
  },
  {
    id: 2,
    namaMetode: "Mobile",
    tataCara: `1. Login di BCA Mobile
2. Pilih menu Transfer > Rekening BCA
3. Masukkan nomor rekening tujuan
4. Masukkan nominal transfer
5. Ikuti petunjuk untuk menyelesaikan transaksi`,
  },
  {
    id: 3,
    namaMetode: "Internet Banking",
    tataCara: `1. Login di BCA Internet Banking
2. Pilih menu Transfer > Rekening BCA
3. Masukkan nomor rekening tujuan
4. Masukkan nominal transfer
5. Ikuti petunjuk untuk menyelesaikan transaksi`,
  },
];

export const DEFAULT_BANKS_GUIDE: { [key: string]: MetodeDetail[] } = {
  BNI: listMetodeBNI,
  BRI: listMetodeBRI,
  BCA: listMetodeBCA,
};
