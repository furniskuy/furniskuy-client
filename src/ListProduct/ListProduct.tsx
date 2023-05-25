import DescProduct from "./descProduct";
import Header from "./header";
import Konten1 from "./konten1";
import ProductKonten from "./productkonten";
import Ulasan from "./ulasan";

export const ListProduct = () => {
  return (
    <div className="listProduct container">
      <Header />
      <Konten1 />
      <DescProduct />
      <ProductKonten />
      <Ulasan />
    </div>
  );
};
