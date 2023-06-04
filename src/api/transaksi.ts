import { Transaksi } from "@/types/api";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
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

export const useDeleteTransaksi = (
  mutationOptions?: UseMutationOptions<Transaksi, unknown, number>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => api.delete(`${baseURL}/${id}`),
    ...mutationOptions,
    onSuccess: (data, id, ...params) => {
      queryClient.setQueryData<Transaksi[]>(transaksiKey.all, (oldData) => {
        if (oldData) {
          return oldData.filter((item) => item.id !== id);
        }
        return oldData;
      });

      mutationOptions?.onSuccess?.(data, id, params);
    },
  });
};
