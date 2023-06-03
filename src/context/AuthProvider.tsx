import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

type AuthContextType = {
  accessToken: string | null;
  login: (data: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: string) => {
    setAccessToken(data);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setAccessToken(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      accessToken,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accessToken]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
