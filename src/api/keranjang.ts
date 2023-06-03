import { Keranjang } from "@/types/api";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "./baseApi";

const baseURL = "/keranjangs";

export const keranjangKey = {
  all: ["keranjangs"],
};

type AddKeranjangPayload = {
  id_barang: number;
  jumlah: number;
};

export const useKeranjangs = (
  queryOptions?: UseQueryOptions<Keranjang[], unknown>
) => {
  return useQuery<Keranjang[]>({
    queryKey: keranjangKey.all,
    queryFn: () => api.get(`${baseURL}/user`),
    ...queryOptions,
  });
};

export const useAddKeranjangItem = (
  mutationOptions?: UseMutationOptions<Keranjang, unknown, AddKeranjangPayload>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api.post(baseURL, data),
    ...mutationOptions,
    onSuccess: (data) => {
      queryClient.setQueryData<Keranjang[]>(keranjangKey.all, (oldData) => {
        if (oldData) {
          const dataExist = oldData.find((item) => item.id === data.id);
          if (dataExist) {
            oldData = oldData.map((item) => {
              if (item.id === data.id) {
                return data;
              }
              return item;
            });
            return oldData;
          }
        }
        return oldData;
      });
    },
  });
};

export const useDeleteKeranjangItem = (
  mutationOptions?: UseMutationOptions<Keranjang, unknown, number>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`${baseURL}/${id}`),
    ...mutationOptions,
    onSuccess: (data) => {
      queryClient.setQueryData<Keranjang[]>(keranjangKey.all, (oldData) => {
        if (oldData) {
          return oldData.filter((item) => item.id !== data.id);
        }
        return oldData;
      });
    },
  });
};

export const useUpdateKeranjangItem = (
  mutationOptions?: UseMutationOptions<Keranjang, unknown, Keranjang>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api.put(`${baseURL}/${data.id}`, data),
    ...mutationOptions,
    onSuccess: (data) => {
      queryClient.setQueryData<Keranjang[]>(keranjangKey.all, (oldData) => {
        if (oldData) {
          return oldData.map((item) => {
            if (item.id === data.id) {
              return data;
            }
            return item;
          });
        }
        return oldData;
      });
    },
  });
};
