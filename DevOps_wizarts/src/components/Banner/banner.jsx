import React from "react";
import book from "../../assets/book.svg";
import WithMagic from "../../assets/withmagic.svg";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="book">
        <img src={book} alt="" />
      </div>
      <div className="title-banner">
        <h1> WE TURN YOUR </h1>
        <h1>IDEAS INTO REALITY</h1>
        <img src={WithMagic} alt="" />
      </div>
    </div>
  );
}

export default Banner;
