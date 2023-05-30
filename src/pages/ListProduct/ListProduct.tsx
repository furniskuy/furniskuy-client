import DescProduct from "./DescProduct";
import Header from "./Header";
import Konten1 from "./Konten1";
import ProductKonten from "./ProductKonten";
import Ulasan from "./Ulasan";

export const ListProduct = () => {
  return (
    <div className="">
      <Header />
      <Konten1 />
      <DescProduct />
      <ProductKonten />
      <Ulasan />
    </div>
  );
};
