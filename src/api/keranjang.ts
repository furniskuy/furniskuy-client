import { ApiResponse, Keranjang } from "@/types/api";
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
  queryOptions?: UseQueryOptions<ApiResponse<Keranjang[]>, unknown>
) => {
  return useQuery<ApiResponse<Keranjang[]>>({
    queryKey: keranjangKey.all,
    queryFn: () => api.get(`${baseURL}/user`),
    ...queryOptions,
  });
};

export const useAddKeranjangItem = (
  mutationOptions?: UseMutationOptions<
    ApiResponse<Keranjang>,
    unknown,
    AddKeranjangPayload
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api.post(baseURL, data),
    ...mutationOptions,
    onSuccess: (data) => {
      queryClient.setQueryData<ApiResponse<Keranjang[]>>(
        keranjangKey.all,
        (oldData) => {
          if (oldData) {
            // PUSH data.data if not exist in oldData.data
            const dataExist = oldData.data.find(
              (item) => item.id === data.data.id
            );
            if (dataExist) {
              oldData.data = oldData.data.map((item) => {
                if (item.id === data.data.id) {
                  return data.data;
                }
                return item;
              });
              return oldData;
            }
          }
          return oldData;
        }
      );
    },
  });
};

export const useDeleteKeranjangItem = (
  mutationOptions?: UseMutationOptions<ApiResponse<Keranjang>, unknown, number>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`${baseURL}/${id}`),
    ...mutationOptions,
    onSuccess: (data) => {
      queryClient.setQueryData<ApiResponse<Keranjang[]>>(
        keranjangKey.all,
        (oldData) => {
          if (oldData) {
            const newData = oldData.data.filter(
              (item) => item.id !== data.data.id
            );
            console.log(newData);
            return {
              ...oldData,
              data: newData,
            };
          }
          return oldData;
        }
      );
    },
  });
};

export const useUpdateKeranjangItem = (
  mutationOptions?: UseMutationOptions<
    ApiResponse<Keranjang>,
    unknown,
    Keranjang
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api.put(`${baseURL}/${data.id}`, data),
    ...mutationOptions,
    onSuccess: (data) => {
      queryClient.setQueryData<ApiResponse<Keranjang[]>>(
        keranjangKey.all,
        (oldData) => {
          if (oldData) {
            const newData = oldData.data.map((item) => {
              if (item.id === data.data.id) {
                return data.data;
              }
              return item;
            });
            return {
              ...oldData,
              data: newData,
            };
          }
          return oldData;
        }
      );
    },
  });
};
