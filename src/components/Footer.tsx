import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footerAtas"]}>
        <div className={styles["footerKiri"]}>
          <p>
            <span className={styles["footerOren"]}>Furniture</span>
          </p>
          <p>The advantage of hiring a workspace</p>
          <p>with us is that givees you comfortable</p>
          <p>service and all-around facilites.</p>
        </div>

        <div className={styles["footerKanan"]}>
          <div className={styles["footerItem"]}>
            <p>
              <span className={styles["footerOren"]}>Furniture</span>
            </p>
            <p>Beds</p>
            <p>Chair</p>
            <p>All</p>
          </div>

          <div className={styles["footerItem"]}>
            <p>
              <span className={styles["footerOren"]}>Services</span>
            </p>
            <p>Email Marketing</p>
            <p>Campaigns</p>
            <p>Branding</p>
          </div>

          <div className={styles["footerItem"]}>
            <p>
              <span className={styles["footerOren"]}>Follow Us</span>
            </p>
            <div className={styles["sosmed"]}>
              <div className={styles["fb"]}>
                <FaFacebookF id="fb-logo" />
                <span>Facebook</span>
              </div>
              <div className={styles["twt"]}>
                <FaTwitter id="twt-logo" />
                <span>Twitter</span>
              </div>
              <div className={styles["ig"]}>
                <FaInstagram id="ig-logo" />
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footerEnd"]}>
        <div className={styles["copyright"]}>
          <p>Copyright © 2023</p>
        </div>
        <div className={styles["footerEndKanan"]}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
