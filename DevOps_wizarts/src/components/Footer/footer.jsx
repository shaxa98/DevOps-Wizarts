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
        height: "200px", // Adjust height as needed
      }}
    >
      <div>
        <div className="footerTop">
          <div className="topLeft">
            <img src={DevLogo} alt="" />
            <p>privacy policy</p>
            <p>Terms of use</p>
          </div>
          <div className="topRight"></div>
        </div>
        <div className="footerBottom">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default footer;
