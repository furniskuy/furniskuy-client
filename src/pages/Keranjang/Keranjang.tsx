import { useLayout } from "@/context/LayoutProvider";
import { useEffect } from "react";
import Header from "./Header";
import { KeranjangList } from "./KerangjangList";

export const Keranjang = () => {
  const layout = useLayout();

  useEffect(() => {
    layout?.setHeaderBack(true);
    return () => {
      layout?.setHeaderBack(false);
    };
  }, [layout]);

  return (
    <div>
      <Header />
      <KeranjangList />
    </div>
  );
};
