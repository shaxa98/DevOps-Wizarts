import React from "react";
import backgroundImage from "../../assets/FaqBacgraund.svg";

function FAQ() {
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
      <h1>Faq component</h1>
    </div>
  );
}

export default FAQ;
