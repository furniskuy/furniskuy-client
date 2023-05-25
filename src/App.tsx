// import { useState } from 'react';
import Header from './listproduk/header';
import Konten1 from './listproduk/konten1';
import DescProduct from './listproduk/descProduct';
import Productkonten from './listproduk/productkonten';
import Ulasan from './listproduk/ulasan';
import "./App.css";

function App() {

  return (
    <>
      {/* <h1>test</h1> */}
      <Header />
      <Konten1 />
      <DescProduct />
      <Productkonten/>
      <Ulasan/>
    
    </>
  )
}

export default App;
