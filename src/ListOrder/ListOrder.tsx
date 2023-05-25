import { useState } from "react";
import "./ListOrder.css";
import Header from "./Header";
import Status from "./Status";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [halaman, setHalaman] = useState(1);

  return (
    <div className="container">
      <Header />
      <Status halaman={halaman} setHalaman={setHalaman} />
      <Content halaman={halaman} />
      <Footer />
    </div>
  );
}

export default App;
