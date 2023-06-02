import { Dispatch, FunctionComponent, SetStateAction } from "react";

type Props = {
  quantity: number;
  maxQuantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export const QuantityButtons: FunctionComponent<Props> = ({
  quantity,
  maxQuantity = 999,
  setQuantity,
}) => {
  const onAdd = () => {
    if (quantity === maxQuantity) return;
    setQuantity((prev) => prev + 1);
  };

  const onSubtract = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="row" style={{ gap: 32 }}>
      <p>Kuantitas</p>
      <div className="row" style={{ gap: 16 }}>
        <button
          onClick={onSubtract}
          color="accent"
          className="btn btn-add-count"
        >
          -
        </button>
        <p className="countText">{quantity}</p>
        <button onClick={onAdd} color="accent" className="btn btn-add-count">
          +
        </button>
      </div>
      <p>tersisa 3 buah</p>
    </div>
  );
};
