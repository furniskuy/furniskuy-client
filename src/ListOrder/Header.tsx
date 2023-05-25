// import React from "react";
import Logo from "../assets/Furniskuy.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div>
        <img src={Logo} className="logo" />
      </div>
      <div className="titleListOrder">
        <h1>Pesanan Saya</h1>
      </div>
    </>
  );
};

export default Header;
