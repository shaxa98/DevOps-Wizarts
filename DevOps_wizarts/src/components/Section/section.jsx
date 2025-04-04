import React from "react";
import backgroundImage from "../../assets/SectionBacgraund.svg";
import "./section.css";
function Section() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="SectionLeft">
        <h1>
          Revolutionize your
          <br /> business processes with
          <br /> our DevOps expertise
        </h1>
        <p>You can reach us anytime via contact@devops-wizards.eu</p>
      </div>
      <div className="SectionRight"></div>
    </div>
  );
}

export default Section;
