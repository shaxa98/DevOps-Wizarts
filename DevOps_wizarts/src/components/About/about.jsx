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
      <div style={{ padding: "20px", textAlign: "left", lineHeight: "1.8" }}>
        <p style={{ color: "blue", fontSize: "32px" }}>Cool but who we are?</p>
        <h2 style={{ color: "white", fontSize: "52px" }}>About DevOps</h2>
        <p style={{ color: "white", fontSize: "32px" }}>
          Welcome to DevOps Wizards, where we transform your ideas into reality
          with cutting-edge technologies and skilled professionals. If you're
          seeking automation for your business and IT processes, we're the
          DevOps experts you need! At DevOps Wizards, we provide top-notch
          automation services using the most popular and intuitive tools
          available on the market.
        </p>
        <p style={{ color: "white", fontSize: "32px" }}>
          DevOps Wizards is a team of experienced developers and engineers who
          work on creating efficient and reliable business solutions. We strive
          for innovation and continuous improvement to deliver the best results
          for our clients.
        </p>
      </div>
    </section>
  );
}

export default About;
