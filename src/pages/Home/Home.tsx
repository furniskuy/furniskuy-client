import { useScroll } from "@/hooks/useScroll";
import { BestProduct } from "./BestProduct";
import { KeyFeatures } from "./KeyFeatures";
import { ProductListing } from "./ProductListing";
import { Reviews } from "./Reviews";

export const Home = () => {
  const [executeScroll, elRef] = useScroll();

  return (
    <div>
      <BestProduct action={executeScroll} />
      <KeyFeatures />
      <div ref={elRef}>
        <ProductListing />
      </div>
      <Reviews />
    </div>
  );
};
