import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { HalamanCheckout } from "./HalamanCheckout/HalamanCheckout";
import { Keranjang } from "./Keranjang/Keranjang";
import { ListOrder } from "./ListOrder/ListOrder";
import { ListProduct } from "./ListProduct/ListProduct";
import { PetunjukPembayaran } from "./PetunjukPembayaran/PetunjukPembayaran";
import { PreviewProduct } from "./PreviewProduct/PreviewProduct";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ListProduct /> },
      { path: "/orders", element: <ListOrder /> },
      { path: "/petunjukpembayaran", element: <PetunjukPembayaran /> },
      { path: "/preview", element: <PreviewProduct /> },
      { path: "/keranjang", element: <Keranjang /> },
      { path: "/halamanCheckout", element: <HalamanCheckout /> },
    ],
  },
]);

export default router;
