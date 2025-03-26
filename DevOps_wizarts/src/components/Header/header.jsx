import React from "react";
import logo from "../../assets/logo.png";
import logoMit from "../../assets/logo mit.png";
import freeAudit from "../../assets/get-free-audit.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header" style={{ border: "none" }}>
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
        <button
          className="freeAudit"
          style={{
            border: "none",
            background: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
          }}
        >
          <img className="freeAudit" src={freeAudit} alt="" />
        </button>
      </nav>

      <div className="decorative-line">
        <img src={logoMit} alt="" />
      </div>
    </header>
  );
};
