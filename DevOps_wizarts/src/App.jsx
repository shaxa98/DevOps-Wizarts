import React from "react";

import "./App.css";
import { Header } from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import WhatIsDevOps from "./components/WhatIsDevOps/whatIsDevOps";
import WhyUs from "./components/WhyUs/WhyUs";
import OurRange from "./components/OurRange/ourRange"; // Import the OurRange component
import RoadMap from "./components/RoadMap/roadMap";
import FAQ from "./components/FAQ/FAQ"; // Import the FAQ component
import Section from "./components/Section/Section"; // Import the Section component
import Footer from "./components/Footer/Footer"; // Import the Footer component

export const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <WhatIsDevOps />
        <WhyUs />
        <OurRange /> {/* Add the OurRange component */}
        <RoadMap />
        <FAQ /> {/* Add the FAQ component */}
        <Section /> {/* Add the Section component */}
        <Footer /> {/* Add the Footer component */}
      </div>
    </div>
  );
};
