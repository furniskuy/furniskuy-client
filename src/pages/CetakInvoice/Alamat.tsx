import React from "react";
import styles from "./Alamat.module.css";

const Alamat = () => {
  return (
    <>
      <div className={styles.Alamat}>
        <table>
          <tr>
            <td className={styles.Untuk}>UNTUK</td>
            <td></td>
          </tr>
          <tr>
            <td>Pembeli</td>
            <td>: Jerome</td>
          </tr>
          <tr>
            <td>Tanggal Beli</td>
            <td>: 25-05-2023</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>
              : Perumahan Graha Raya Blok C2/12, Sukolilo, Surabaya, Jawa Timur
              60118
            </td>
          </tr>
          <tr>
            <td>Telepon</td>
            <td>: 081247986534</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: Jeromepolin@gmail.com</td>
          </tr>
         
        </table>
      </div>
    </>
  );
};

export default Alamat;
