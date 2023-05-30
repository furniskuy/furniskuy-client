import Logo from "@/assets/Furniskuy.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div>
        <img src={Logo} className={styles["logo"]} />
      </div>
      <div className={styles["titleListOrder"]}>
        <h1>Pesanan Saya</h1>
      </div>
    </>
  );
};

export default Header;
