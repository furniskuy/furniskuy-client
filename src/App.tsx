import { Outlet } from "react-router-dom";
import Footer from "./ListOrder/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
