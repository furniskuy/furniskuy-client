import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/context/AuthProvider";

export const ProtectedRoute: FunctionComponent = () => {
  const auth = useAuth();

  if (!auth?.accessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
