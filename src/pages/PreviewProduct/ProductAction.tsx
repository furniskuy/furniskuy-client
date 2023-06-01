import { QuantityButtons } from "@/components/QuantityButtons";
import { useState } from "react";

export const ProductAction = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="column">
      <QuantityButtons
        quantity={quantity}
        setQuantity={setQuantity}
        maxQuantity={10}
      />

      <button
        color="primary"
        className="btn btn-outline"
        style={{ marginTop: 46, width: "fit-content" }}
      >
        Masukan Keranjang
      </button>
    </div>
  );
};
