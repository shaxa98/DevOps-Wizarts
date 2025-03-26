import React from "react";

import "./App.css";
import { Header } from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import WhatIsDevOps from "./components/WhatIsDevOps/whatIsDevOps";

export const App = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <WhatIsDevOps />
      </div>
    </div>
  );
};
