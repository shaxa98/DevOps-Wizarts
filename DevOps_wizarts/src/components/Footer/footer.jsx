import React from "react";
import backgroundImage from "../../assets/FooterBacgraund.svg";

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
      <div>footer</div>
    </div>
  );
}

export default footer;
