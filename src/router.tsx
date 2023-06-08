import { createHashRouter } from "react-router-dom";

import { App } from "./App";
import { Layout } from "./components/Layout";
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
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/search", element: <SearchPage /> },

          {
            element: <ProtectedRoute />,
            children: [
              { path: "/profile", element: <ProfilePage /> },
              { path: "/produk/:id", element: <PreviewProduct /> },
              { path: "/keranjang", element: <Keranjang /> },
              { path: "/checkout", element: <HalamanCheckout /> },
              { path: "/pembayaran/:id", element: <StatusPembayaran /> },
              { path: "/status/:id", element: <RincianPesanan /> },
              { path: "/invoice/:id", element: <CetakInvoice /> },
              { path: "/orders", element: <ListOrder /> },
            ],
          },

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
