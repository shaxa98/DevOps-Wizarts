import React from "react";
import backgroundImage from "../../assets/SectionBacgraund.svg";
import "./section.css";
function Section() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="SectionLeft">
        <h1>
          Revolutionize your
          <br /> business processes with
          <br /> our DevOps expertise
        </h1>
        <p>You can reach us anytime via contact@devops-wizards.eu</p>
      </div>
      <div className="SectionRight">
        <div className="input1">
          <p>Name Surname</p>
          <input
            type="text"
            placeholder="Your Full Name"
            class="input-field"
            className="input"
          />
        </div>
        <div className="input1">
          <p>Email</p>
          <input
            type="text"
            placeholder="your@company.com"
            class="input-field"
            className="input"
          />
        </div>
        <div className="input1">
          <p>Phone number</p>
          <input
            type="text"
            placeholder="+371 29999999"
            class="input-field"
            className="input"
          />
        </div>
        <div className="input1">
          <p>Your message</p>
          <input
            type="text"
            placeholder="Type your message here..."
            class="input-field"
            className="inputYourMessage"
          />
        </div>

        <button className="GetInTouch">Get in touch with us!</button>
      </div>
    </div>
  );
}

export default Section;
