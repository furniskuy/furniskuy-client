import { Inventaris, SearchApiParams } from "@/types/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { api } from "./baseApi";

const baseURL = "/inventaris";

export const inventarisKey = {
  all: ["inventaris"],
  byId: (id: string) => [...inventarisKey.all, id],
};

export const useInventaris = (
  params: SearchApiParams,
  queryOptions?: UseQueryOptions<Inventaris[], unknown>
) => {
  return useQuery<Inventaris[]>({
    queryKey: inventarisKey.all,
    queryFn: () => api.get(baseURL, { params }),
    ...queryOptions,
  });
};

export const useInventarisById = (
  id: string | undefined,
  queryOptions?: UseQueryOptions<Inventaris, unknown>
) => {
  return useQuery<Inventaris>({
    enabled: !!id,
    queryKey: inventarisKey.byId(id as string),
    queryFn: () => api.get(`${baseURL}/${id}`),
    ...queryOptions,
  });
};
