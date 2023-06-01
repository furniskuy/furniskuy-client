import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useInventarisById } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";

import { LayoutContext } from "@/components/Layout";
import { Loading } from "@/components/Loading";
import Rating from "../../components/Rating";
import GambarProduct from "./GambarProduct";
import { ProductAction } from "./ProductAction";
import { ProductContent } from "./ProductContent";
import { ProductDescription } from "./ProductDescription";
import { ProductReview } from "./ProductReview";

export const PreviewProduct = () => {
  const [tombol, setTombol] = useState(1);
  const { id } = useParams<{ id: string }>();
  const layoutContext = useContext(LayoutContext);

  const { data: product, isLoading } = useInventarisById(id);

  useEffect(() => {
    layoutContext?.setHeaderBack(true);
    return () => {
      layoutContext?.setHeaderBack(false);
    };
  }, [layoutContext]);

  if (!product || isLoading) return <Loading />;

  return (
    <div>
      <div className="row" style={{ marginTop: 56, gap: 140 }}>
        <GambarProduct image={getImageUrl(product.data.image)} />
        <div className="column" style={{ gap: 24 }}>
          <ProductContent product={product.data} />
          <ProductAction />
        </div>
      </div>
      {tombol === 1 ? <ProductDescription /> : <ProductReview />}
      <Rating />
    </div>
  );
};
