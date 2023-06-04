import { FunctionComponent } from "react";
import { toast } from "react-toastify";

type Props = {
  quantity: number;
  maxQuantity: number;
  setQuantity: (value: number) => void;
  disabled?: boolean;
};

export const QuantityButtons: FunctionComponent<Props> = ({
  quantity,
  maxQuantity = 999,
  setQuantity,
  disabled = false,
}) => {
  const onAdd = () => {
    if (quantity === maxQuantity) {
      toast.info(
        "Tidak bisa menambah jumlah product lebih dari " + maxQuantity,
        {
          position: "top-center",
        }
      );
      return;
    }
    setQuantity(quantity + 1);
  };

  const onSubtract = () => {
    if (quantity === 1) {
      toast.info("Tidak bisa mengurangi jumlah produk sampai 0", {
        position: "top-center",
      });
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <div className="row" style={{ gap: 16 }}>
      <button
        onClick={onSubtract}
        color="accent"
        className="btn btn-add-count"
        disabled={disabled}
      >
        -
      </button>
      <p className="countText">{quantity}</p>
      <button
        onClick={onAdd}
        color="accent"
        className="btn btn-add-count"
        disabled={disabled}
      >
        +
      </button>
    </div>
  );
};
