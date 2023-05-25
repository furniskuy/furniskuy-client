import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { ListOrder } from "./ListOrder/ListOrder";
import { ListProduct } from "./ListProduct/ListProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: <ListOrder />,
  },
  {
    path: "/products",
    element: <ListProduct />,
  },
]);

export default router;
