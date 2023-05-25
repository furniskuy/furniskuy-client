
import { useState } from "react";
import "./App.css";
import Header from "./ListOrder/Header";
import Status from "./ListOrder/Status";
import Content from "./ListOrder/Content";
import Footer from "./ListOrder/Footer";
    
 import Header from './listproduk/header';
import Konten1 from './listproduk/konten1';
import DescProduct from './listproduk/descProduct';
import Productkonten from './listproduk/productkonten';
import Ulasan from './listproduk/ulasan';

function App() {
  const [halaman, setHalaman] = useState(1);

  return (
    <div className="container">
      <Header />
      <Status halaman={halaman} setHalaman={setHalaman} />
      <Content halaman={halaman} />
      <Header />
      <Konten1 />
      <DescProduct />
      <Productkonten/>
      <Ulasan/>
      <Footer />
    </div>
  );

}

export default App;
