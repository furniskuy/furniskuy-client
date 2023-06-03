import { useLayout } from "@/context/LayoutProvider";
import { useEffect } from "react";
import { Checkout } from "./Checkout";
import Header from "./Header";

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
      <Checkout />
    </div>
  );
};
