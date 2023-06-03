import { FunctionComponent } from "react";

type Props = {
  quantity: number;
  maxQuantity: number;
  setQuantity: (value: number) => void;
};

export const QuantityButtons: FunctionComponent<Props> = ({
  quantity,
  maxQuantity = 999,
  setQuantity,
}) => {
  const onAdd = () => {
    if (quantity === maxQuantity) return;
    setQuantity(quantity + 1);
  };

  const onSubtract = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="row" style={{ gap: 16 }}>
      <button onClick={onSubtract} color="accent" className="btn btn-add-count">
        -
      </button>
      <p className="countText">{quantity}</p>
      <button onClick={onAdd} color="accent" className="btn btn-add-count">
        +
      </button>
    </div>
  );
};
