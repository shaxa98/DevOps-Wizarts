import React from "react";
import backgroundImage from "../../assets/RoadmapBacgraund.svg";

function roadmap() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    ></div>
  );
}

export default roadmap;
