import styles from'./Konten1.module.css';
import bangkuSofa from '../assets/Bangku Sofa.png';

function Konten1() {

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["tulisan"]}>
          
          <div className={styles["BestFurniskuy"]}>
            <p>Best Furniskuy</p>
          </div>

          <div className={styles["SloganBold"]}>
            <p>Find Your Best <br/> Furniture</p>
          </div>

          <div className={styles["Description"]}>
            <p>Find all your furniture needs for anything, <br/> 
            All furniture for offices, home, bussiness and more</p>  
          </div>

          <div className={styles["orderButton"]}>
            <p>Order Now</p>
          </div>

        
            <div className={styles["Subscriber"]}>
              <p> <span className={styles["BigFont"]}> 500+ </span> <br />
             <span className={styles["SmallFont"]}> Customer</span>  </p>
              <p> <span className={styles["BigFont"]}>800+ </span>  <br />
              <span className={styles["SmallFont"]}>Delivery </span> </p>
              <p> <span className={styles["BigFont"]}> 100+   </span> <br />
              <span className={styles["SmallFont"]}>Ratings </span></p>
             
            </div>
           
          
        </div>
        <div className={styles["gambar"]}>
          <img src={bangkuSofa} alt="Bangku Sofa" className={styles["gambarSofa"]} />


        </div>





      </div>
    </>
  )
}

export default Konten1;
