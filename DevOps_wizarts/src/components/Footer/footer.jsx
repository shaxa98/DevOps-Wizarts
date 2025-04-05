import React from "react";
import backgroundImage from "../../assets/FooterBacgraund.svg";
import "./footer.css";
import GitLogo from "../../assets/GitHubLogo.svg";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import InstaLogo from "../../assets/InstagramLogo.svg";
import TwitterLogo from "../../assets/TwitterLogo.svg";
import FooterLine from "../../assets/FooterLine.svg";
import DevLogo from "../../assets/DeOpsWizarts.svg";
function footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "260px", // Adjust height as needed
      }}
    >
      <div>
        <div className="footerTop">
          <div className="topLeft">
            <img src={DevLogo} alt="" />
            <p>privacy policy</p>
            <p>Terms of use</p>
          </div>
          <div className="topRight">
            <div className="FooterIcons">
              <img src={TwitterLogo} alt="" />
              <img src={FacebookLogo} alt="" />
              <img src={InstaLogo} alt="" />
              <img src={GitLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <img src={FooterLine} alt="" />
          <p>© Copyright 2024, All Rights Reserved by DevOps Wizards</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
