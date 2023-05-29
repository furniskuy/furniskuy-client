import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Home: FunctionComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link to="/orders">
              <button className="btn btn-primary">List Order</button>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/products">
              <button className="btn btn-primary">List Product</button>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/petunjukpembayaran">
              <button className="btn btn-primary">Petunjuk Pembayaran</button>
            <Link to="/preview">
              <button className="btn btn-primary">Product Preview</button>
            </Link>
            <Link to="/keranjang">
              <button className="btn btn-primary">Keranjang</button>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/halamanCheckout">
              <button className="btn btn-primary">Halaman Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
