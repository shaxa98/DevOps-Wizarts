import React from "react";
import "./whatIsDevOps.css";
import WhatisDevopsBackground from "../../assets/WhatisDevopsBacgraund.svg";
import WhatIsDevOpsImage from "../../assets/WhatIsDevOps.svg";

function WhatIsDevOps() {
  return (
    <section
      className="what-is-devops"
      style={{
        border: "none",
        backgroundImage: `url(${WhatisDevopsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <img
        src={WhatIsDevOpsImage}
        alt="What is DevOps"
        style={{
          width: "50%",
          height: "auto",
          marginRight: "20px",
        }}
      />
      <div style={{ flex: 1, textAlign: "left" }}>
        <h2 style={{ color: "blue", fontSize: "20px" }}>super interesting!</h2>
        <h1 style={{ color: "white", fontSize: "50px" }}>What is DevOps?</h1>
        <p style={{ color: "white", fontSize: "32px" }}>
          DevOps is a practice that enhances collaboration between development
          and operations teams, focusing on automation and integration to
          improve software delivery.
        </p>
        <ul
          style={{
            color: "white",
            fontSize: "32px",
            listStyleType: "none",
            padding: "0",
          }}
        >
          <li>c Quicker release cycles with CI/CDQ</li>
          <li>c Better teamwork between Dev and OpsQ</li>
          <li>c Automation reduces errors and saves timeQ</li>
          <li>c Automated testing ensures stable softwareQ</li>
          <li>c Efficiently scales infrastructure and applicationsQ</li>
          <li>c Integrates security practices from the start.</li>
        </ul>
        <p style={{ color: "orange", fontSize: "32px" }}>
          DevOps accelerates and improves the software development process,
          ensuring faster, more reliable, and secure releases.
        </p>
      </div>
    </section>
  );
}

export default WhatIsDevOps;
