import { IconContext } from "react-icons";
import { FaArrowLeft, FaCartPlus, FaHistory, FaSearch } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useKeranjangs } from "@/api/keranjang";
import Logo from "@/assets/Furniskuy.png";
import { FunctionComponent, useMemo } from "react";
import styles from "./Header.module.css";
import { ProfileDropdown } from "./ProfileDropdown";

type Props = {
  showBackButton?: boolean;
  isAuthenticated?: boolean;
};

const CartIcon = () => {
  const keranjangs = useKeranjangs();

  const countKeranjang = useMemo(
    () => keranjangs.data?.reduce((acc, curr) => acc + curr.jumlah, 0),
    [keranjangs]
  );

  const isShowCount = useMemo(
    () => countKeranjang && countKeranjang > 0,
    [countKeranjang]
  );

  return (
    <div className={styles["cartCount"]}>
      <Link to="/keranjang">
        <FaCartPlus />
        {!isShowCount ? (
          <></>
        ) : (
          <div className={styles["count"]}>{countKeranjang}</div>
        )}
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
        <Link to="/login">
          <div>Login</div>
        </Link>
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
            <ProfileDropdown />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};
