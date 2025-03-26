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
    >
      <h2>About Us</h2>
      <p>
        We are DevOps Wizards, dedicated to turning your ideas into reality with
        the magic of DevOps. Our team specializes in delivering efficient and
        scalable solutions tailored to your needs.
      </p>
    </section>
  );
}

export default About;
