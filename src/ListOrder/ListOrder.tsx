import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Status from "./Status";

export const ListOrder = () => {
  const [halaman, setHalaman] = useState(1);

  return (
    <div className="listOrder container">
      <Header />
      <Status halaman={halaman} setHalaman={setHalaman} />
      <Content halaman={halaman} />
      <Footer />
    </div>
  );
};
