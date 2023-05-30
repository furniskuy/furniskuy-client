import { createHashRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./Home";
import { ListOrder } from "./ListOrder/ListOrder";
import { ListProduct } from "./ListProduct/ListProduct";
import { RincianPesanan } from "./RincianPesanan/RincianPesanan";
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
      { path: "/products", element: <ListProduct /> },
      { path: "/rincianpesanan", element: <RincianPesanan /> },
      { path: "/petunjukpembayaran", element: <PetunjukPembayaran /> },
      { path: "/preview", element: <PreviewProduct /> },
      { path: "/keranjang", element: <Keranjang /> },
      { path: "/halamanCheckout", element: <HalamanCheckout /> },
    ],
  },
]);

export default router;
