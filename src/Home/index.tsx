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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
