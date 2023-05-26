// import React from 'react'
import Produk3 from '../assets/Produk3.png'
import Produk5 from '../assets/Produk5.png'
import './Checkout.css'

const Checkout = () => {
    return (
        <>
            <div>
                <div className='tabelCheckout'>


                    <table>
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" className='checkboxInput' />
                            </td>
                            <td>
                                <img src={Produk3} alt="" />
                            </td>
                            <td>
                                <p>Sofa Ruang TV - BlACK</p>
                            </td>
                            <td>
                                <p className='harga'>Rp.2.000.000</p>
                            </td>
                            <td>
                                <p className='borderbtn'>- 1 +</p>
                            </td>
                            <td>
                                <p>Hapus</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" className='checkboxInput' />
                            </td>
                            <td>
                                <img src={Produk5} alt="" />
                            </td>
                            <td>
                                <p>Bed Set - GREY</p>
                            </td>
                            <td>
                                <p className='harga'>Rp.4 .000.000</p>
                            </td>
                            <td>
                                <p className='borderbtn'>- 1 +</p>
                            </td>
                            <td>
                                <p>Hapus</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='voucher'>
                    <input type="text" placeholder='Masukan Kode Voucher' className='InputVoucher' />
                    <button className='btnpakai'>PAKAI</button>
                </div>
                <div className='jmlhrgcheckout'>
                    <div className='jmlprdk'>
                        <input type="checkbox" name="" id="" className='checkboxInput' />
                        <p>Pilih Semua (2) :</p>
                    </div>

                    <div className='hrgcheck'>
                        <p className='harga'>Rp.6.000.000</p>
                        <button className='btncheckout'>Checkout</button >
                    </div>
                </div>
            </div>
        </>

    );
};

export default Checkout;