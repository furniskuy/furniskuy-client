import { BestProduct } from "./BestProduct";
import { KeyFeatures } from "./KeyFeatures";
import { ProductListing } from "./ProductListing";
import { Reviews } from "./Reviews";

export const Home = () => {
  return (
    <div>
      <BestProduct />
      <KeyFeatures />
      <ProductListing />
      <Reviews />
    </div>
  );
};
