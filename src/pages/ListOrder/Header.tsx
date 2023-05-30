import { Link } from "react-router-dom";

import Logo from "@/assets/Furniskuy.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={Logo} className={styles["logo"]} />
        </Link>
      </div>
      <div className={styles["titleListOrder"]}>
        <h1>Pesanan Saya</h1>
      </div>
    </>
  );
};

export default Header;
