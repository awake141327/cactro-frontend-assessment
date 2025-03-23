// React Utils
import React from "react";

// Components
import Navbar from "./Navbar";
import { HeroSection } from "./HeroSection";
import CompaniesSlider from "./CompaniesSlider";
import ProductFeatures from "./ProductFeatures";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#F5EEE5] items-center px-40 max-sm:px-4">
      <Navbar />
      <HeroSection />
      <CompaniesSlider />
      <ProductFeatures />
    </div>
  );
};

export default LandingPage;
