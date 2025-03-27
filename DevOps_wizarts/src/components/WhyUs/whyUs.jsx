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
      {/* ...existing code or content for WhyUs... */}
    </section>
  );
}

export default WhyUs;
