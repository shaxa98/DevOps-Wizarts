import React from "react";
import backgroundImage from "../../assets/FooterBacgraund.svg";
import "./footer.css";
import GitLogo from "../../assets/GitHubLogo.svg";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import InstaLogo from "../../assets/InstagramLogo.svg";
import TwitterLogo from "../../assets/TwitterLogo.svg";
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
        footer
        <div className="footerTop">
          <div className="topleft"></div>
          <div className="topRight"></div>
        </div>
        <div className="footerBottom"></div>
      </div>
    </div>
  );
}

export default footer;
