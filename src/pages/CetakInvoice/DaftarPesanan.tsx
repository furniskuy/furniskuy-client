import React from "react";
import styles from "./DaftarPesanan.module.css";

const DaftarPesanan = () => {
  return (
    <>
      <div className={styles.DaftarPesanan}>
        <div className={`${styles.head} ${styles.headeriistimewa}`}>
          <div className={`${styles.header1} ${styles.headeriistimewa}`}>
            <p>DAFTAR PESANAN</p>
            <p>JUMLAH</p>
            <p>HARGA SATUAN</p>
            <p>TOTAL</p>
          </div>

          <div className={styles.header1}>
            <p>Sofa Ruang TV - BLACK</p>
            <p>1</p>
            <p>Rp.2.000.000</p>
            <p>Rp.2.000.000</p>
          </div>

          <div className={styles.header1}>
            <p>Bed Set - GREY</p>
            <p>1</p>
            <p>Rp.4.000.000</p>
            <p>Rp.4.000.000</p>
          </div>
        </div>
        {/* <table className={styles.tabel1}>
          <thead>
            <th className={styles.underline}>
              <td>DAFTAR PESANAN</td>
              <td>JUMLAH</td>
              <td>HARGA SATUAN</td>
              <td>TOTAL</td>
            </th>
          </thead>
          <tbody>
            <tr>
              
            </tr>
            <tr>
             
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className={styles.Subtotal}>
        <table className={styles.tabel2}>
          <tr>
            <td>SUBTOTAL</td>
            <td>:Rp.6.000.000</td>
          </tr>
          <tr>
            <td>PENGIRIMAN</td>
            <td>:Rp.100.000</td>
          </tr>
          <tr>
            <td>DISKON</td>
            <td>:-Rp.10.000</td>
          </tr>
          <tr>
            <td>BIAYA LAYANAN</td>
            <td>:Rp.2.000</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DaftarPesanan;
