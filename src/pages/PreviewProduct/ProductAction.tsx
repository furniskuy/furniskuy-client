import { QuantityButtons } from "@/components/QuantityButtons";
import { FunctionComponent, useState } from "react";

type Props = {
  maxQuantity: number;
  addToCart: (quantity: number) => void;
  loading?: boolean;
};

export const ProductAction: FunctionComponent<Props> = ({
  maxQuantity,
  addToCart,
  loading,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="column">
      <div className="row" style={{ gap: 32 }}>
        <p>Kuantitas</p>

        <QuantityButtons
          quantity={quantity}
          setQuantity={setQuantity}
          maxQuantity={maxQuantity}
          disabled={loading}
        />

        <p>tersisa {maxQuantity} buah</p>
      </div>

      <button
        color="primary"
        className="btn btn-outline"
        style={{ marginTop: 46, width: "fit-content" }}
        onClick={() => addToCart(quantity)}
        disabled={loading}
      >
        {loading ? "Loading" : " Masukan Keranjang"}
      </button>
    </div>
  );
};
