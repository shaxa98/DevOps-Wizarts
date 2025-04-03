import React from "react";
import backgroundImage from "../../assets/OurRangBacgraund.svg";
import "./ourRange.css";
import ButtonRightside from "../../assets/ButtonRightside.svg";
import ButtonLeftside from "../../assets/ButtonLeftside.svg";
import Icon1 from "../../assets/OurRange/01.svg";
import Icon2 from "../../assets/OurRange/02.svg";
import Icon3 from "../../assets/OurRange/03.svg";
import Icon4 from "../../assets/OurRange/04.svg";
import Icon5 from "../../assets/OurRange/05.svg";
import Icon6 from "../../assets/OurRange/06.svg";
import Icon7 from "../../assets/OurRange/07.svg";
import Icon8 from "../../assets/OurRange/08.svg";
import Icon9 from "../../assets/OurRange/09.svg";
function OurRange() {
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
      <div className="headerO">
        <div>
          <img className="button" src={ButtonLeftside} alt="" />
          <img className="button" src={ButtonRightside} alt="" />
        </div>
        <h1>Our Range of services</h1>
      </div>
      <div className="containerO">
        <div className="board">board1</div>
        <div className="board">board2</div>
        <div className="board">board3</div>
      </div>
    </div>
  );
}

export default OurRange;
