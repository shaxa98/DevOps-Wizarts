import React from "react";
import "./whyUs.css";
import WhyUsBackground from "../../assets/WhyUsBacgraund.svg";

function WhyUs() {
  return (
    <section
      className="why-us"
      style={{
        backgroundImage: `url(${WhyUsBackground})`,
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className="container"
        style={{
          margin: "0 200px",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "150px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "blue", textTransform: "uppercase" }}>
            More reason to join
          </h3>
          <h1 style={{ color: "white", fontSize: "56px" }}>
            Why DevOps Wizard
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            height: "85%",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div className="cards">
            <h1>Transparent IT Consulting</h1>
            <h2>
              We eliminate bureaucracy, ensure fair pay, and foster a culture of
              openness and collaboration.
            </h2>
          </div>
          <div className="cards">
            <h1>Smart Automation</h1>
            <h2>
              From DevOps to AI, we help businesses streamline operations and
              stay ahead.
            </h2>
          </div>
          <div className="cards">
            <h1>Helping New Talents Thrive</h1>
            <h2>
              We create opportunities for young specialists, bridging the gap
              between education and real-world IT experience.
            </h2>
          </div>
          <div className="cards">
            <h1>Flexible & Scalable Approach</h1>
            <h2>
              Need a custom team for your project? We bring in the right
              experts, when you need them.
            </h2>
          </div>
          <div className="cards">
            <h1>Aiming for the World</h1>
            <h2>
              We’re a local team with global ambitions, helping businesses scale
              smarter.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
