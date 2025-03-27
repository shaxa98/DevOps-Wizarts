import React from "react";
import backgroundImage from "../../assets/SectionBacgraund.svg";

function Section() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>Section Component</div>
    </div>
  );
}

export default Section;
