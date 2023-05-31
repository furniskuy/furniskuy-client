import { IconContext } from "react-icons";
import { FaHistory, FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

import Logo from "@/assets/Furniskuy.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles["headerContainer"] + " row"}>
      <div>
        <Link to="/">
          <img src={Logo} className={styles["logo"]} />
        </Link>
      </div>

      <div className="row" style={{ gap: 42 }}>
        <IconContext.Provider value={{ color: "black", size: "24px" }}>
          <Link to="/orders">
            <FaHistory />
          </Link>
          <Link to="/keranjang">
            <IoMdCart />
          </Link>
          <Link to="/search">
            <FaSearch />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
};
