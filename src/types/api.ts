export type SearchApiParams = {
  search?: string;
  skip?: number;
  limit?: number;
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
  image: string;
  jumlah: number;
  harga: number;
  id_supplier: number;
};

export type Keranjang = {
  id: number;
  id_pembeli: number;
  jumlah: number;
  barang: Inventaris;
};

export type User = {
  id: number;
  name: string;
  email: string;
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
