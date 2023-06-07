export type SearchApiParams = {
  search?: string;
  skip?: number;
  limit?: number;
  popular?: boolean;
  kategori?: number;
};

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

export type Inventaris = {
  id: number;
  nama: string;
  deskripsi?: string;
  foto: string;
  jumlah: number;
  harga: number;
  id_supplier: number;

  pivot?: {
    id_inventaris: number;
    id_transaksi: number;
    jumlah: number;
  };
};

export type Keranjang = {
  id: number;
  id_pembeli: number;
  jumlah: number;
  barang: Inventaris;
  selected: boolean;
};

export type ProfileUser = {
  nama: string;
  jenis_kelamin: string;
  alamat: string;
  no_hp: string;
  tanggal_lahir: string;
  pembeli_baru: boolean;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: number;
  profile: ProfileUser | null;
};

export type Pembeli = {
  id: number;
  nama: string;
  jenis_kelamin: string;
  alamat: string;
  no_hp: string;
  user: User;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthSignResponse = {
  access_token: string;
  user: User;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type MetodePembayaran = {
  id: number;
  logo: string;
  nama_bank: string;
  no_rek: string;
  atas_nama: string;
};

export type Transaksi = {
  id: number;
  tanggal_transaksi: string;
  total_harga: number;
  status: number;
  status_transaksi: string;
  tenggat_waktu: string;
  waktu_pembayaran: string | null;
  waktu_pengiriman: string | null;

  metode: MetodePembayaran;
  list_barang: Inventaris[];
};
