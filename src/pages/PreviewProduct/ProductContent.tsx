import { useState } from "react";
import { ProductDescription } from "./ProductDescription";
import { ProductReview } from "./ProductReview";

export const ProductContent = () => {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <div>
      <div
        className="btn-toggle-wrapper"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        <button
          className={
            "btn btn-toggle-content " + (showDescription ? "active" : "")
          }
        >
          Deskripsi
        </button>
        <button
          className={
            "btn btn-toggle-content " + (!showDescription ? "active" : "")
          }
        >
          Penilaian
        </button>
      </div>
      {showDescription ? <ProductDescription /> : <ProductReview />}
    </div>
  );
};
