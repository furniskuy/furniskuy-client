// import React from 'react'
import "./Ulasan.css";
import PPulasan1 from "../assets/PPulasan1.png";
import PPulasan2 from "../assets/PPulasan2.png";
import PPulasan3 from "../assets/PPulasan3.png";
import BGulasan1 from "../assets/BGulasan1.png";
import BGulasan2 from "../assets/BGulasan2.png";
import BGulasan3 from "../assets/BGulasan3.png";

function Ulasan() {
  return (
    <>
      <div className="_2kontainer">
        <div className="PenilaianProduk">
          <div className="judulpenilaian">
            <p>
              {" "}
              <span className="penilaianprdk"> Penilaian Produk </span>
            </p>
            <p>Ulasan Customers</p>
          </div>
        </div>
        <div className="multicardulasan">
          <div className="cardUlasan">
            <img src={BGulasan1} alt="" className="BGulasan" />
            <div className="cobacoba">
              <div className="photocard">
                <img src={PPulasan1} alt="ah" className="PPulasan" />
              </div>
              <div className="DescUlasan">
                <p>
                  {" "}
                  <span className="namauser">Fadil </span>
                </p>
                <p>
                  <span className="profesiuser">Pedagang Asongan</span>
                </p>
                <p>
                  {" "}
                  <span className="reviewuser">
                    {" "}
                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                    terlihat mahal“{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="cardUlasan">
            <img src={BGulasan2} alt="" className="BGulasan" />
            <div className="cobacoba">
              <div className="photocard">
                <img src={PPulasan2} alt="ah" className="PPulasan" />
              </div>
              <div className="DescUlasan">
                <p>
                  <span className="namauser">Prilly </span>
                </p>
                <p>
                  {" "}
                  <span className="profesiuser">Ibu Rumah Tangga</span>
                </p>
                <p>
                  {" "}
                  <span className="reviewuser">
                    “Makasih Furniskuy, aku sekarang berasa tinggal di apartment
                    karena barang-barang yang terlihat “{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="cardUlasan">
            <img src={BGulasan3} alt="" className="BGulasan" />
            <div className="cobacoba">
              <div className="photocard">
                <img src={PPulasan3} alt="ah" className="PPulasan" />
              </div>
              <div className="DescUlasan">
                <p>
                  <span className="namauser">Jerome</span>
                </p>
                <p>
                  {" "}
                  <span className="profesiuser"> Karyawan Swasta </span>
                </p>
                <p>
                  {" "}
                  <span className="reviewuser">
                    “Sangat terjangkau untuk kantong saya yang tidak terlalu
                    banyak“
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ulasan;
