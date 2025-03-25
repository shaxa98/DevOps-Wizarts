import React from "react";
import book from "../../assets/book.svg";
import "./banner.css";

function Banner() {
  return (
    <div>
      <div className="book">
        <img src={book} alt="" />
      </div>
    </div>
  );
}

export default Banner;
