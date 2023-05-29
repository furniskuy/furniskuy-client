// import React from 'react'
import Logo from "../assets/Furniskuy.png";
import './Header.css';

function Header() {
  return (
    <>
    <div className='namajudul'>
      <img src={Logo} alt="" />
      <div>
        <p>Keranjang Saya</p>
      </div>
    </div>
    </>
    
  )
}

export default Header;