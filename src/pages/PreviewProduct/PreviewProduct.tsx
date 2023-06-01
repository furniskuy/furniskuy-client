import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useInventarisById } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";

import { LayoutContext } from "@/components/Layout";
import { Loading } from "@/components/Loading";
import { ProductAction } from "./ProductAction";
import { ProductContent } from "./ProductContent";
import { ProductDetailImage } from "./ProductDetailImage";
import { ProductHead } from "./ProductHead";

export const PreviewProduct = () => {
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
      <div
        className="row"
        style={{ marginTop: 56, gap: 140, marginBottom: 24 }}
      >
        <ProductDetailImage image={getImageUrl(product.data.image)} />
        <div className="column" style={{ gap: 24 }}>
          <ProductHead product={product.data} />
          <ProductAction />
        </div>
      </div>
      <ProductContent />
    </div>
  );
};
