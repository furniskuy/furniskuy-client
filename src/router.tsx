import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { HalamanCheckout } from "./pages/HalamanCheckout/HalamanCheckout";
import { Keranjang } from "./pages/Keranjang/Keranjang";
import { ListOrder } from "./pages/ListOrder/ListOrder";
import { ListProduct } from "./pages/ListProduct/ListProduct";
import { PetunjukPembayaran } from "./pages/PetunjukPembayaran/PetunjukPembayaran";
import { PreviewProduct } from "./pages/PreviewProduct/PreviewProduct";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ListProduct /> },
      { path: "/orders", element: <ListOrder /> },
      { path: "/produk/:id", element: <PreviewProduct /> },
      { path: "/keranjang", element: <Keranjang /> },
      { path: "/checkout", element: <HalamanCheckout /> },
      { path: "/checkout/:id", element: <PetunjukPembayaran /> },
    ],
  },
]);

export default router;
