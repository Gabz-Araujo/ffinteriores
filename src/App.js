import React from "react";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { SliderData } from "./components/data/SliderData";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection slides={SliderData} />
      <ServicesSection />

    </div>
  );
}

export default App;
