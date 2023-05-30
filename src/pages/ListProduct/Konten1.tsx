import { Inventaris } from "@/types/api";
import { productPlaceHolderURL } from "@/util/image";
import { Link } from "react-router-dom";
import styles from "./Konten1.module.css";

function Konten1() {
  const bestProduct: Inventaris = {
    id: 1,
    nama: "Bangku Sofa",
    image: productPlaceHolderURL,
    jumlah: 1,
    harga: 1000000,
    id_supplier: 1,
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["tulisan"]}>
          <div className={styles["BestFurniskuy"]}>
            <p>Best Furniskuy</p>
          </div>

          <div className={styles["SloganBold"]}>
            <p>
              Find Your Best <br /> Furniture
            </p>
          </div>

          <div className={styles["Description"]}>
            <p>
              Find all your furniture needs for anything, <br />
              All furniture for offices, home, bussiness and more
            </p>
          </div>

          <Link to={"/produk/" + bestProduct.id}>
            <div className={styles["orderButton"]}>
              <p>Order Now</p>
            </div>
          </Link>

          <div className={styles["Subscriber"]}>
            <p>
              {" "}
              <span className={styles["BigFont"]}> 500+ </span> <br />
              <span className={styles["SmallFont"]}> Customer</span>{" "}
            </p>
            <p>
              {" "}
              <span className={styles["BigFont"]}>800+ </span> <br />
              <span className={styles["SmallFont"]}>Delivery </span>{" "}
            </p>
            <p>
              {" "}
              <span className={styles["BigFont"]}> 100+ </span> <br />
              <span className={styles["SmallFont"]}>Ratings </span>
            </p>
          </div>
        </div>
        <div className={styles["gambar"]}>
          <img
            src={bestProduct.image}
            alt={bestProduct.nama}
            className={styles["gambarSofa"]}
          />
        </div>
      </div>
    </>
  );
}

export default Konten1;
