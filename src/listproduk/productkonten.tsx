// import React from 'react'
import './productkonten.css';
import produk1 from '../assets/Produk1.png';
import logokeranjang from '../assets/logo keranjang.png';
import tandapanah from '../assets/tandapanah.png';
import produk2 from '../assets/Produk2.png';
import produk3 from '../assets/Produk3.png';
import produk4 from '../assets/Produk4.png';
import produk5 from '../assets/Produk5.png';
import produk6 from '../assets/Produk6.png';
import produk7 from '../assets/Produk7.png';
import produk8 from '../assets/Produk8.png';

import { useState } from 'react';

function productkonten() {
    const [halaman, setHalaman] = useState(0);
    const [kategori, setKategori] = useState(0);

    return (
        <>
            <div>
                <div className='productHeader'>
                    <div className='PHKiri'>
                        <div className='product'>
                            <p>Produk</p>
                        </div>
                        <div className='Kategori'>

                            <div className={halaman === 1 ? "statusSelected" : "statusNotSelected"}
                                onClick={() =>
                                    setHalaman(1)}>
                                Terlaris
                            </div>

                            <div className={halaman === 2 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setHalaman(2)}>
                                Populer
                            </div>
                        </div>
                    </div>
                    <div className='LihatSemua'>
                        <div className={halaman === 3 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setHalaman(3)}>Lihat Semua</div >
                    </div>
                </div>
                <div className='BarKategoriProduct'>
                    <div className={kategori === 1 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setKategori(1)}>
                        Semua
                        </div>

                    <div className={kategori === 2 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setKategori(2)}>
                        Sofa
                        </div>

                    <div className={kategori === 3 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setKategori(3)}>
                        Kasur
                        </div>

                    <div className={kategori === 4 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setKategori(4)}>
                        Kursi
                        </div>

                    <div className={kategori === 5 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setKategori(5)}>
                        Meja
                        </div>

                    <div className={kategori === 6 ? "statusSelected" : "statusNotSelected"}
                        onClick={() => 
                            setKategori(6)}>
                        Rak
                        </div>

                </div>
                <div className='daftarProduk'>
                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk1} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Sofa Vintage - YELLOW</p>
                                <p>1.500.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk2} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Kursi Minimalis - Grey</p>
                                <p>1.300.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk3} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Sofa Ruang TV - BLACK</p>
                                <p>2.000.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk4} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Kursi Unik - PINK</p>
                                <p>550.0000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk5} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Bed Set - GREY</p>
                                <p>4.000.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk6} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Meja Minimalis - BROWN</p>
                                <p>200.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk7} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Meja Kayu - BROWN</p>
                                <p>600.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>

                    <div className='cardProduct'>
                        <div className='GambarProduct'>
                            <div className='divGambar'>
                                <img src={produk8} alt="ah" className='imgprdk' />
                            </div>
                            <img src={logokeranjang} alt="ahh" />
                        </div>
                        <div className='namaProduk'>
                            <div>
                                <p>Rak Meja TV - BROWN</p>
                                <p>750.000</p>
                            </div>
                            <img src={tandapanah} alt="ahhh" className='tandapanah' />
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default productkonten;