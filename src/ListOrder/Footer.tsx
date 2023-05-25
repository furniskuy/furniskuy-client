// import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerAtas">
          <div className="footerKiri">
            <p>
              <span className="footerOren">Furniture</span>
            </p>
            <p>The advantage of hiring a workspace</p>
            <p>with us is that givees you comfortable</p>
            <p>service and all-around facilites.</p>
          </div>

          <div className="footerKanan">
            <div className="footer1">
              <p>
                <span className="footerOren">Furniture</span>
              </p>
              <p>Beds</p>
              <p>Chair</p>
              <p>All</p>
            </div>

            <div className="footer2">
              <p>
                <span className="footerOren">Services</span>
              </p>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
            </div>

            <div className="footer3">
              <p>
                <span className="footerOren">Follow Us</span>
              </p>
              <div className="sosmed">
                <div className="fb">
                  <FaFacebookF id="fb-logo" />
                  <span>Facebook</span>
                </div>
                <div className="twt">
                  <FaTwitter id="twt-logo" />
                  <span>Twitter</span>
                </div>
                <div className="ig">
                  <FaInstagram id="ig-logo" />
                  <span>Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerEnd">
          <div className="copyright">
            <p>Copyright © 2023</p>
          </div>
          <div className="footerEndKanan">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
