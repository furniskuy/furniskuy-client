import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Keranjang/Checkout";
import { Keranjang } from "./pages/Keranjang/Keranjang";
import { ListOrder } from "./pages/ListOrder/ListOrder";
import { PetunjukPembayaran } from "./pages/PetunjukPembayaran/PetunjukPembayaran";
import { PreviewProduct } from "./pages/PreviewProduct/PreviewProduct";
import { RincianPesanan } from "./pages/RincianPesanan/RincianPesanan";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/orders", element: <ListOrder /> },
      { path: "/rincianpesanan", element: <RincianPesanan /> },
      { path: "/petunjuk-pembayaran/:id", element: <PetunjukPembayaran /> },
      { path: "/produk/:id", element: <PreviewProduct /> },
      { path: "/keranjang", element: <Keranjang /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
