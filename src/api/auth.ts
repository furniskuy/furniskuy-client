import {
  ApiResponse,
  AuthSignResponse,
  LoginPayload,
  RegisterPayload,
} from "@/types/api";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { api } from "./baseApi";

export const useLogin = (
  mutationOptions?: UseMutationOptions<
    ApiResponse<AuthSignResponse>,
    unknown,
    LoginPayload
  >
) => {
  return useMutation({
    mutationFn: (data) => api.post("/auth/login", data),
    ...mutationOptions,
  });
};

export const useRegister = (
  mutationOptions?: UseMutationOptions<
    ApiResponse<AuthSignResponse>,
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
  mutationOptions?: UseMutationOptions<ApiResponse<null>, unknown>
) => {
  return useMutation({
    mutationFn: (_data) => api.post("/auth/logout"),
    ...mutationOptions,
  });
};
