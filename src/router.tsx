import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { AuthLayout } from "./components/AuthLayout";
import { GuestLayout } from "./components/GuestLayout";
import { About } from "./pages/About/About";
import CetakInvoice from "./pages/CetakInvoice/CetakInvoice";
import { HalamanCheckout } from "./pages/HalamanCheckout/HalamanCheckout";
import { Home } from "./pages/Home/Home";
import { Keranjang } from "./pages/Keranjang/Keranjang";
import { ListOrder } from "./pages/ListOrder/ListOrder";
import { Login } from "./pages/Login/Login";
import { PreviewProduct } from "./pages/PreviewProduct/PreviewProduct";
import { ProfilePage } from "./pages/Profile/Profile";
import { Register } from "./pages/Register.tsx/Register";
import { RincianPesanan } from "./pages/RincianPesanan/RincianPesanan";
import { SearchPage } from "./pages/Search/SearchPage";
import { StatusPembayaran } from "./pages/StatusPembayaran/StatusPembayaran";

const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/profile", element: <ProfilePage /> },
          { path: "/produk/:id", element: <PreviewProduct /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/keranjang", element: <Keranjang /> },
          { path: "/checkout", element: <HalamanCheckout /> },
          { path: "/pembayaran/:id", element: <StatusPembayaran /> },
          { path: "/status/:id", element: <RincianPesanan /> },
          { path: "/invoice/:id", element: <CetakInvoice /> },
          { path: "/orders", element: <ListOrder /> },
          { path: "/about", element: <About /> },
        ],
      },
      {
        element: <GuestLayout />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default router;
