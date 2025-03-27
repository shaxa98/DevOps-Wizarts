import React from "react";
import "./whatIsDevOps.css";
import WhatisDevopsBackground from "../../assets/WhatisDevopsBacgraund.svg";

function WhatIsDevOps() {
  return (
    <section
      className="what-is-devops"
      style={{
        border: "none",
        backgroundImage: `url(${WhatisDevopsBackground})`,
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    ></section>
  );
}

export default WhatIsDevOps;
