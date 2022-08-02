import React from "react";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { SliderData } from "./components/data/SliderData";
import ServicesSection from "./components/ServicesSection";
import { ServicesData } from "./components/data/ServicesData";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection services={ServicesData} />

    </div>
  );
}

export default App;
