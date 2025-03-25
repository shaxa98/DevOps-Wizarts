import React from "react";

import "./App.css";
import { Header } from "./components/Header/header";
import Banner from "./components/Banner/banner";

export const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Banner />
      </div>
    </div>
  );
};
