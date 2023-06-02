import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { HalamanCheckout } from "./pages/HalamanCheckout/HalamanCheckout";
import { Home } from "./pages/Home/Home";
import { Keranjang } from "./pages/Keranjang/Keranjang";
import { ListOrder } from "./pages/ListOrder/ListOrder";
import { PetunjukPembayaran } from "./pages/PetunjukPembayaran/PetunjukPembayaran";
import { PreviewProduct } from "./pages/PreviewProduct/PreviewProduct";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/orders", element: <ListOrder /> },
      { path: "/produk/:id", element: <PreviewProduct /> },
      { path: "/keranjang", element: <Keranjang /> },
    ],
  },
]);

export default router;
