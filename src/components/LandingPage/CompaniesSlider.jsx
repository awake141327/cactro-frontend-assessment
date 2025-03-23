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
      <div className="space-x-6 flex items-center justify-between gap-10 pt-0 pb-10 w-full">
        <div>
          <img src={FoxLogo} alt="fox logo" width="100px" />
        </div>
        <div>
          <img src={LonelyPlanetLogo} alt="lonely planet logo" width="180px" />
        </div>
        <div>
          <img src={IntuitLogo} alt="intuit logo" width="100px" />
        </div>
        <div>
          <img src={CarvanaLogo} alt="Carvana logo" width="150px" />
        </div>
        <div>
          <img src={TargetLogo} alt="target logo" width="50px" />
        </div>
        <div>
          <img src={DevaCurlLogo} alt="devacurl logo" width="100px" />
        </div>
      </div>
    </div>
  );
};

export default CompaniesSlider;
