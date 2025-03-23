// React Utils
import React, { useState } from "react";

// Components
import Navbar from "./Navbar";
import { HeroSection } from "./HeroSection";
import CompaniesSlider from "./CompaniesSlider";
import ProductFeatures from "./ProductFeatures";
import AlertDialog from "../AlertDialog/AlertDialog";

const LandingPage = () => {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(true);

  return (
    <div className="flex flex-col bg-[#F5EEE5] items-center px-40 max-sm:px-4">
      <Navbar />
      {isAlertDialogOpen && (
        <AlertDialog setIsAlertDialogOpen={setIsAlertDialogOpen} />
      )}
      <HeroSection />
      <CompaniesSlider />
      <ProductFeatures />
    </div>
  );
};

export default LandingPage;
