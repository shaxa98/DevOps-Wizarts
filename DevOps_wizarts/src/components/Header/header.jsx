import React from "react";
import logo from "../../assets/layer-1.svg";
import line92 from "../../assets/line-92.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" alt="DevOps Wizards Logo" src={logo} />

        <ul className="nav-links">
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#services">OUR SERVICES</a>
          </li>
          <li>
            <a href="#approach">OUR APPROACH</a>
          </li>
          <li>
            <a href="#contacts">CONTACTS</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <button className="cta-button">Get Free Audit</button>
      </nav>

      <div className="decorative-line">
        <div className="circle large"></div>
        <div className="circle small left"></div>
        <img className="line" alt="Decorative Line" src={line92} />
        <div className="circle small right"></div>
      </div>
    </header>
  );
};
