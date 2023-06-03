import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { AuthLayout } from "./components/AuthLayout";
import { GuestLayout } from "./components/GuestLayout";
import { Home } from "./pages/Home/Home";
import { KeranjangList } from "./pages/Keranjang/KerangjangList";
import { Keranjang } from "./pages/Keranjang/Keranjang";
import { ListOrder } from "./pages/ListOrder/ListOrder";
import { Login } from "./pages/Login/Login";
import { PetunjukPembayaran } from "./pages/PetunjukPembayaran/PetunjukPembayaran";
import { PreviewProduct } from "./pages/PreviewProduct/PreviewProduct";
import { RincianPesanan } from "./pages/RincianPesanan/RincianPesanan";

const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/produk/:id", element: <PreviewProduct /> },
          { path: "/keranjang", element: <Keranjang /> },
          { path: "/checkout", element: <KeranjangList /> },
          { path: "/rincianpesanan", element: <RincianPesanan /> },
          { path: "/petunjuk-pembayaran/:id", element: <PetunjukPembayaran /> },
          { path: "/orders", element: <ListOrder /> },
        ],
      },
      {
        element: <GuestLayout />,
        children: [{ path: "/login", element: <Login /> }],
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default router;
