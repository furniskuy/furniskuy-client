import SofaBesar from "../assets/Sofa Besar.png";
import styles from "./DescProduct.module.css";

function DescProduct() {
  return (
    <>
      <div className={styles["kontainer"]}>
        <img src={SofaBesar} alt="Sofa Besar" className="SofaBesar" />

        <div className={styles["description"]}>
          <div className={styles["sofayangnyaman"]}>
            <p>
              {" "}
              <span className={styles["sofa"]}> Sofa </span> Yang Nyaman
            </p>
          </div>
          <div className={styles["textparagraf"]}>
            <p>
              Find all Your furniture needs foe anything, All furniture for
              offices, home, businesses and more
            </p>
          </div>
          <div className={styles["list"]}>
            <div className={styles["kiri"]}>
              <ul>
                <li>Interior Stretegy</li>
                <li>Creative Designer</li>
                <li>Interior Architecture</li>
              </ul>
            </div>
            <div className={styles["kanan"]}>
              <ul>
                <li>Update Designer</li>
                <li>Event Decoration</li>
                <li>21 Years Experience</li>
              </ul>
            </div>
          </div>
          <div className={styles["learnmore"]}>
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescProduct;
