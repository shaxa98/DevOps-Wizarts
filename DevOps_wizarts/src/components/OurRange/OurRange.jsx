import React from "react";
import backgroundImage from "../../assets/OurRangBacgraund.svg";
import "./ourRange.css";
import ButtonRightside from "../../assets/ButtonRightside.svg";
import ButtonLeftside from "../../assets/ButtonLeftside.svg";
import Icon1 from "../../assets/OurRangeIcons/01.svg";
import Icon2 from "../../assets/OurRangeIcons/02.svg";
import Icon3 from "../../assets/OurRangeIcons/03.svg";
import Icon4 from "../../assets/OurRangeIcons/04.svg";
import Icon5 from "../../assets/OurRangeIcons/05.svg";
import Icon6 from "../../assets/OurRangeIcons/06.svg";
import Icon7 from "../../assets/OurRangeIcons/07.svg";
import Icon8 from "../../assets/OurRangeIcons/08.svg";
import Icon9 from "../../assets/OurRangeIcons/09.svg";
function OurRange() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "75vh",
      }}
    >
      <div className="headerO">
        <div>
          <img className="button" src={ButtonLeftside} alt="" />
          <img className="button" src={ButtonRightside} alt="" />
        </div>
        <h1>Our Range of services</h1>
      </div>
      <div className="containerO">
        <div className="board">
          <div>
            <div className="FirstLine">
              <img src={Icon1} alt="" />
              <h1>Infrastructure Monitoring</h1>
            </div>
          </div>
          <p>Maintain optimal system performance with thorough monitoring.</p>
        </div>
        <div className="board">
          <div className="FirstLine">
            <img src={Icon2} alt="" />
            <h1>
              Security <br />
              (DevSecOps)
            </h1>
          </div>
          <p>
            Using cutting-edge technologies, we fully automate the detection of
            security vulnerabilities, ensuring the high quality of your codebase
            and identifying vulnerabilities in your application and its
            dependencies before deployment.
          </p>
        </div>
        <div className="board">
          <div className="FirstLine">
            <img src={Icon3} alt="" />
            <h1>
              Containerization <br /> & Orchestration
            </h1>
          </div>
          <p>
            Containerization and orchestration services streamline the
            management and scaling of applications, making them more eﬃcient and
            easier to deploy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurRange;
