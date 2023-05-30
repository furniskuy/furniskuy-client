import { ApiResponse, Keranjang, SearchApiParams } from "@/types/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { api } from "./baseApi";

const baseURL = "/keranjangs";

export const keranjangKey = ["keranjangs"];

export const useKeranjangs = (
  params: SearchApiParams,
  queryOptions?: UseQueryOptions<ApiResponse<Keranjang[]>, unknown>
) => {
  return useQuery<ApiResponse<Keranjang[]>>({
    queryKey: keranjangKey,
    queryFn: () => api.get(baseURL, { params }),
    ...queryOptions,
  });
};
