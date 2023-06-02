import { IconContext } from "react-icons";
import { FaArrowLeft, FaHistory, FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import Logo from "@/assets/Furniskuy.png";
import { FunctionComponent } from "react";
import styles from "./Header.module.css";

type Props = {
  back?: boolean;
};

export const Header: FunctionComponent<Props> = ({ back }) => {
  const navigate = useNavigate();

  return (
    <div className={styles["headerContainer"] + " row"}>
      {back && (
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
