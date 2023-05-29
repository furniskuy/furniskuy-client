import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./Home";
import { ListOrder } from "./ListOrder/ListOrder";
import { ListProduct } from "./ListProduct/ListProduct";
import { PetunjukPembayaran } from "./PetunjukPembayaran/PetunjukPembayaran";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/orders", element: <ListOrder /> },
      { path: "/products", element: <ListProduct /> },
      { path: "/petunjukpembayaran", element: <PetunjukPembayaran />},
    ],
  },
]);

export default router;
