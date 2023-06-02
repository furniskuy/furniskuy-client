import styles from "./FurniskuyInvoice.module.css";



// import React from "react";

const FurniskuyInvoice = () => {
  return (
    <>
      <div className={ styles.InvoiceJudul}>  
        
        <p className={styles.Furniskuy}>FURNISKUY-invoice</p>
       <div className={styles.Invoice}>
       <span>invoice  ID #J250523</span>
       <span>Resi : 230518395FT5DX</span>
       </div>

      </div>
    </>
  );
};

export default FurniskuyInvoice;
