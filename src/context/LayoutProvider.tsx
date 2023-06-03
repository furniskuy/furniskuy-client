import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type LayoutContextType = {
  headerBack?: boolean;
  setHeaderBack: (value: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLayout = () => {
  return useContext(LayoutContext);
};

export const LayoutProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [headerBack, setHeaderBack] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ headerBack: headerBack, setHeaderBack: setHeaderBack }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
