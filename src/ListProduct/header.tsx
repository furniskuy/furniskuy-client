import "./header.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import menu from "../assets/menu.png";
// import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

function Header() {
  const [halaman, setHalaman] = useState(0);

  return (
    <>
      <div className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="searchBar">
          <div
            className={halaman === 1 ? "statusSelected" : "statusNotSelected"}
            onClick={() => setHalaman(1)}
          >
            sofa
          </div>

          <div
            className={halaman === 2 ? "statusSelected" : "statusNotSelected"}
            onClick={() => setHalaman(2)}
          >
            Kasur
          </div>

          <div
            className={halaman === 3 ? "statusSelected" : "statusNotSelected"}
            onClick={() => setHalaman(3)}
          >
            Kursi
          </div>
          <div
            className={halaman === 4 ? "statusSelected" : "statusNotSelected"}
            onClick={() => setHalaman(4)}
          >
            Meja
          </div>
          <div
            className={halaman === 5 ? "statusSelected" : "statusNotSelected"}
            onClick={() => setHalaman(5)}
          >
            Rak
          </div>
        </div>
        <div className="gambar">
          <img src={search} alt="search" />
          <img src={menu} alt="menu" />
        </div>
      </div>
    </>
  );
}

export default Header;
