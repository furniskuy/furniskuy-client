import { MetodePembayaran } from "@/types/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { api } from "./baseApi";

export const metodePembayaranKey = {
  all: ["metodePembayaran"],
  byId: (id: number) => [...metodePembayaranKey.all, id],
};

export const useMetodePembayaran = (
  queryOptions?: UseQueryOptions<MetodePembayaran[], unknown>
) => {
  return useQuery<MetodePembayaran[]>({
    queryKey: metodePembayaranKey.all,
    queryFn: (_data) => api.get("/metode-pembayaran"),
    ...queryOptions,
  });
};
