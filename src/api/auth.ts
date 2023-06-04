import {
  AuthSignResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from "@/types/api";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import { api } from "./baseApi";

export const authKey = {
  user: ["user"],
};

export const useLogin = (
  mutationOptions?: UseMutationOptions<AuthSignResponse, unknown, LoginPayload>
) => {
  return useMutation({
    mutationFn: (data) => api.post("/auth/login", data),
    ...mutationOptions,
  });
};

export const useRegister = (
  mutationOptions?: UseMutationOptions<
    AuthSignResponse,
    unknown,
    RegisterPayload
  >
) => {
  return useMutation({
    mutationFn: (data) => api.post("/auth/signup", data),
    ...mutationOptions,
  });
};

export const useLogout = (
  mutationOptions?: UseMutationOptions<null, unknown>
) => {
  return useMutation({
    mutationFn: (_data) => api.post("/auth/logout"),
    ...mutationOptions,
  });
};

export const useUser = (queryOptions?: UseQueryOptions<User, unknown>) => {
  return useQuery({
    queryKey: authKey.user,
    queryFn: (_data) => api.get("/auth/user"),
    ...queryOptions,
  });
};
