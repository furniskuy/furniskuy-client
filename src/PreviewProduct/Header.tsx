import { FaShoppingCart } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi2";
import Logo from "../assets/Furniskuy.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div>
        <img src={Logo} className={styles["logo"]} />
      </div>
      <div className={styles["header"]}>
        <div className={styles["arrowIcon"]}>
          <HiArrowLeft size={30} id="arrow-icon" />
        </div>
        <div>
          <h1>Product Detail</h1>
        </div>
        <div className={styles["cartIcon"]}>
          <FaShoppingCart size={30} id="cart-icon" />
          <div className={styles["cartCounter"]}>2</div>
        </div>
      </div>
    </>
  );
};

export default Header;
