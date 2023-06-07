import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useInventarisById } from "@/api/inventaris";
import { getImageUrl } from "@/util/image";

import { useAddKeranjangItem } from "@/api/keranjang";
import { Loading } from "@/components/Loading";
import { useLayout } from "@/context/LayoutProvider";
import { ProductAction } from "./ProductAction";
import { ProductContent } from "./ProductContent";
import { ProductDetailImage } from "./ProductDetailImage";
import { ProductHead } from "./ProductHead";

export const PreviewProduct = () => {
  const { id } = useParams<{ id: string }>();
  const layout = useLayout();

  const { data: product, isLoading } = useInventarisById(id);
  const addToCart = useAddKeranjangItem();

  const handleAddToCart = (quantity: number) => {
    if (!product) return;
    addToCart.mutate({
      id_barang: product?.id,
      jumlah: quantity,
    });
  };

  useEffect(() => {
    layout?.setHeaderBack(true);
    return () => {
      layout?.setHeaderBack(false);
    };
  }, [layout]);

  if (!product || isLoading) return <Loading />;

  return (
    <div>
      <div
        className="row"
        style={{ marginTop: 56, gap: 140, marginBottom: 24 }}
      >
        <ProductDetailImage image={getImageUrl(product.foto)} />
        <div className="column" style={{ gap: 24 }}>
          <ProductHead product={product} />
          <ProductAction
            maxQuantity={product.jumlah}
            addToCart={handleAddToCart}
            loading={addToCart.isLoading}
          />
        </div>
      </div>
      <ProductContent product={product} />
    </div>
  );
};
