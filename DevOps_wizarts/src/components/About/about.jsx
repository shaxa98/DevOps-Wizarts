import React from "react";
import "./about.css";
import Kuza from "../../assets/AboutKo'za.svg";
import AboutDev from "../../assets/AboutDevWizards.svg";

function About() {
  return (
    <div>
      <div className="About">
        <div className="AboutLeft">
          <h2> COOL BUT WHO WE ARE?</h2>
          <img src={AboutDev} alt="" />
          <p>
            Welcome to DevOps Wizards, where we transform your ideas into
            reality with cutting-edge technologies and skilled professionals. If
            you're seeking automation for your business and IT processes, we're
            the DevOps experts you need! At DevOps Wizards, we provide top-notch
            automation services using the most popular and intuitive tools
            available on the market.
          </p>
          <p>
            DevOps Wizards is a team of experienced developers and engineers who
            work on creating efficient and reliable business solutions. We
            strive for innovation and continuous improvement to deliver the best
            results for our clients.
          </p>
        </div>
        <div className="AboutRight">
          <img src={Kuza} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
