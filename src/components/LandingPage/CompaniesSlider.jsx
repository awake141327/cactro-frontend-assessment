// React Utils
import React from "react";

// Images
import FoxLogo from "../../assets/FoxLogo.svg";
import LonelyPlanetLogo from "../../assets/LonelyPlanetLogo.svg";
import IntuitLogo from "../../assets/IntuitLogo.png";
import CarvanaLogo from "../../assets/CarvanaLogo.svg";
import TargetLogo from "../../assets/TargetLogo.svg";
import DevaCurlLogo from "../../assets/DevaCurl.png";

const CompaniesSlider = () => {
  return (
    <div className="w-full">
      <div className="space-x-6 max-sm:gap-y-4 flex max-sm:flex-wrap max-sm:justify-center items-center justify-between gap-10 pt-0 pb-10 w-full">
        <div className="mx-auto">
          <img src={FoxLogo} alt="fox logo" width="100px" />
        </div>
        <div className="mx-auto">
          <img src={LonelyPlanetLogo} alt="lonely planet logo" width="180px" />
        </div>
        <div className="mx-auto">
          <img src={IntuitLogo} alt="intuit logo" width="100px" />
        </div>
        <div className="mx-auto">
          <img src={CarvanaLogo} alt="Carvana logo" width="150px" />
        </div>
        <div className="mx-auto">
          <img src={TargetLogo} alt="target logo" width="50px" />
        </div>
        <div className="mx-auto">
          <img src={DevaCurlLogo} alt="devacurl logo" width="100px" />
        </div>
      </div>
    </div>
  );
};

export default CompaniesSlider;
