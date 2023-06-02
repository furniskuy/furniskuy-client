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
  harga: number;
  jumlah: number;
};
