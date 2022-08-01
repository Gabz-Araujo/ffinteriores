import Header from "./components/Header";
import React from "react";
import "./index.css";
import HeroSection from "./components/HeroSection";
import { SliderData } from "./components/data/SliderData";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection slides={SliderData} />
    </div>
  );
}

export default App;
