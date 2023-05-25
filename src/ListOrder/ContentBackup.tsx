// import React from 'react';
import "./Content.css";
import MejaKayu from "../assets/MejaKayu.png";

const ContentBackup = () => {
  return (
    <>
      <div className="content">
        <div className="kiri">
          <div className="kiriAtas">
            <div className="sofa">
              <img src={MejaKayu} className="mejaKayu" />
            </div>
            <div className="namaBarang">
              <p>Meja Kayu - BROWN</p>
              <p>x2</p>
            </div>
          </div>

          <div className="statusPesanan">
            <p>Sedang dalam perjalanan.</p>
            <p>Menuju Alamat Tujuan</p>
          </div>
        </div>

        <div className="kanan">
          <div className="hargaBarang">
            <p>Rp.600.000</p>
          </div>
          <div className="totalPesanan">
            <p>
              Total Pesanan : <span className="totalBayar">Rp.1.275.000</span>
            </p>
          </div>
          <div className="button">
            <button className="tombol chatPenjual">
              <p>Chat Penjual</p>
            </button>
            <button className="tombol batalkanPesanan">
              <p>Batalkan Pesanan</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBackup;
