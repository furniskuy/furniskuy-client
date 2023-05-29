// import React from }react}
import Produk3 from '../assets/Produk3.png'
import Produk5 from '../assets/Produk5.png'
import styles from './Checkout.module.css'

const Checkout = () => {
    return (
        <>
            <div>
                <div className={styles.tabelCheckout}>


                    <table>
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" className={styles.checkboxInput} />
                            </td>
                            <td>
                                <img src={Produk3} alt="" />
                            </td>
                            <td>
                                <p>Sofa Ruang TV - BlACK</p>
                            </td>
                            <td>
                                <p className={styles.harga}>Rp.2.000.000</p>
                            </td>
                            <td>
                                <p className={styles.borderbtn}>- 1 +</p>
                            </td>
                            <td>
                                <p>Hapus</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" className={styles.checkboxInput} />
                            </td>
                            <td>
                                <img src={Produk5} alt="" />
                            </td>
                            <td>
                                <p>Bed Set - GREY</p>
                            </td>
                            <td>
                                <p className={styles.harga}>Rp.4 .000.000</p>
                            </td>
                            <td>
                                <p className={styles.borderbtn}>- 1 +</p>
                            </td>
                            <td>
                                <p>Hapus</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.voucher}>
                    <input type="text" placeholder='Masukan Kode Voucher' className={styles.InputVoucher} />
                    <button className={styles.btnpakai}>PAKAI</button>
                </div>
                <div className={styles.jmlhrgcheckout}>
                    <div className={styles.jmlprdk}>
                        <input type="checkbox" name="" id="" className={styles.checkboxInput} />
                        <p>Pilih Semua (2) :</p>
                    </div>

                    <div className={styles.hrgcheck}>
                        <p className={styles.harga}>Rp.6.000.000</p>
                        <button className={styles.btncheckout}>Checkout</button >
                    </div>
                </div>
            </div>
        </>

    );
};

export default Checkout;