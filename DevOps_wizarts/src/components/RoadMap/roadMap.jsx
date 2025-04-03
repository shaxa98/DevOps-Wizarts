import React from "react";
import backgroundImage from "../../assets/RoadmapBacgraund.svg";
import "./roadMap.css";
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
    >
      <div className="Roadmap">
        <div className="RoadmapHeader">Roadmap</div>
        <div className="RodadmapBody">
          <div className="RodadmapBody1"></div>
          <div className="RodadmapBody2"></div>
          <div className="RodadmapBody3"></div>
        </div>
      </div>
    </div>
  );
}

export default roadmap;
