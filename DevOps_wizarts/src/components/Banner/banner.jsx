import React from "react";

import BannerBackground from "../../assets/banner-background.svg";
import BookImage from "../../assets/book.svg";
import "./banner.css";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "20px",
        border: "none", // Ensure no border
      }}
    >
      <div
        style={{
          color: "white",
          padding: "20px",
          position: "relative",
          bottom: "50px",
        }}
      >
        <img className="BookImage" src={BookImage} alt="" />

        <h1
          style={{
            fontSize: "48px",
            textTransform: "uppercase",
            color: "blue",
            margin: 0,
          }}
        >
          We turn your
        </h1>
        <h2 style={{ fontSize: "96px", textTransform: "uppercase", margin: 0 }}>
          ideas into reality <br />
          with magic of DevOps
        </h2>
      </div>
    </div>
  );
}

export default Banner;
