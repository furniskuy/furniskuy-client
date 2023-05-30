import Logo from "../assets/Furniskuy.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.namajudul}>
        <img src={Logo} alt="" />
        <div>
          <p>Keranjang Saya</p>
        </div>
      </div>
    </>
  );
}

export default Header;
