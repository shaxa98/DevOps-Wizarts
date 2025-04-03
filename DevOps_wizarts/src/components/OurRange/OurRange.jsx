import React from "react";
import backgroundImage from "../../assets/OurRangBacgraund.svg";
import "./ourRange.css";
import ButtonRightside from "../../assets/ButtonRightside.svg";
import ButtonLeftside from "../../assets/ButtonLeftside.svg";
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
