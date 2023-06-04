import { Transaksi } from "@/types/api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { api } from "./baseApi";

export const transaksiKey = {
  all: ["transaksi"],
  byId: (id: string) => [...transaksiKey.all, id],
};

const baseURL = "/transaksi";

export const useTransaksi = (
  queryOptions?: UseQueryOptions<Transaksi[], unknown>
) => {
  return useQuery<Transaksi[]>({
    queryKey: transaksiKey.all,
    queryFn: (_data) => api.get(`${baseURL}/user`),
    ...queryOptions,
  });
};

export const useTransaksiById = (
  id: string | undefined,
  queryOptions?: UseQueryOptions<Transaksi, unknown>
) => {
  return useQuery<Transaksi>({
    enabled: !!id,
    queryKey: transaksiKey.byId(id as string),
    queryFn: (_data) => api.get(`${baseURL}/${id}`),
    ...queryOptions,
  });
};
