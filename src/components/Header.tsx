import { IconContext } from "react-icons";
import { FaArrowLeft, FaHistory, FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { useKeranjangs } from "@/api/keranjang";
import Logo from "@/assets/Furniskuy.png";
import { FunctionComponent, useMemo } from "react";
import styles from "./Header.module.css";

type Props = {
  showBackButton?: boolean;
  isAuthenticated?: boolean;
};

const CartIcon = () => {
  const keranjangs = useKeranjangs();

  const count = useMemo(
    () => keranjangs.data?.data.reduce((acc, curr) => acc + curr.jumlah, 0),
    [keranjangs]
  );

  return (
    <div className={styles["cartCount"]}>
      <Link to="/keranjang">
        <IoMdCart />
        {count && count > 0 && <div className={styles["count"]}>{count}</div>}
      </Link>
    </div>
  );
};

export const Header: FunctionComponent<Props> = ({
  showBackButton,
  isAuthenticated,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles["headerContainer"] + " row"}>
      {showBackButton && (
        <div>
          <IconContext.Provider value={{ color: "black", size: "24px" }}>
            <div onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </div>
          </IconContext.Provider>
        </div>
      )}
      <div>
        <Link to="/">
          <img src={Logo} className={styles["logo"]} />
        </Link>
      </div>

      {!isAuthenticated ? (
        <div></div>
      ) : (
        <div className="row" style={{ gap: 42 }}>
          <IconContext.Provider value={{ color: "black", size: "24px" }}>
            <Link to="/orders">
              <FaHistory />
            </Link>
            <CartIcon />
            <Link to="/search">
              <FaSearch />
            </Link>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};
