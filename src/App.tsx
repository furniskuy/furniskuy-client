import { Outlet } from "react-router-dom";
import Footer from "./ListOrder/Footer";

import "./App.css";

export const App = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
