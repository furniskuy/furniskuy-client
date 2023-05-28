import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
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
        </div>
      </div>
      <div className={styles["cartCounter"]}>
        <span>1</span>
      </div>
    </>
  );
};

export default Header;
