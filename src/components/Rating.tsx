import { FaStar } from "react-icons/fa";
import styles from "./Rating.module.css";

const Rating = () => {
  return (
    <div className={styles["rating"]}>
      <FaStar size={25} id="star-icon" />
      <FaStar size={25} id="star-icon" />
      <FaStar size={25} id="star-icon" />
      <FaStar size={25} id="star-icon" />
      <FaStar size={25} id="star-icon" />
    </div>
  );
};

export default Rating;
