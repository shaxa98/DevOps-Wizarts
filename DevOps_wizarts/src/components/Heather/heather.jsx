import React from "react";
import "./heather.css";
import LogoMit from "../../assets/logo mit.png";
import Logo from "../../assets/logo .png";
function heather() {
  return (
    <div>
      <div className="head">
        <div className="head-top">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="aboutUs" className="title">
            ABOUT US
          </div>
          <diV className="ourservice" className="title">
            OUR SERVICE
          </diV>
          <div className="ourapporoach" className="title">
            OUR APPOROROACH
          </div>
          <div className="contact" className="title">
            CONTACT
          </div>
          <button className="title">Get Fee Audit</button>
        </div>
        <img className="logoMit" src={LogoMit} alt="" />
      </div>
    </div>
  );
}

export default heather;
