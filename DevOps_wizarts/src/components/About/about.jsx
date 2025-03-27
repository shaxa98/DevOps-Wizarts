import React from "react";
import "./about.css";
import AboutBackground from "../../assets/AboutBacgraund.svg";

function About() {
  return (
    <section
      className="about"
      style={{
        border: "none",
        backgroundImage: `url(${AboutBackground})`,
        backgroundSize: "contain", // Ensure the image fits within the screen
        backgroundPosition: "left center", // Align the image to the left
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    ></section>
  );
}

export default About;
