// React Utils
import React from "react";

// Images
import SlackLogo from "../../assets/SlackLogo.svg";

// Icons
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-10 py-5 w-full">
      <div className="flex items-center gap-8">
        <div>
          <img src={SlackLogo} alt="slack logo" width="120" height="50" />
        </div>
        <div className="flex gap-6 items-center font-medium text-sm">
          <p className="flex items-center gap-1">
            Product <IoIosArrowDown className="text-xs" />
          </p>
          <p>Resources</p>
          <p>Product</p>
          <p>Pricing</p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div>
          <IoSearch className="text-xl" />
        </div>
        <div>
          <p className="text-sm font-medium">Sign In</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="cursor-pointer uppercase font-medium border-2 text-xs px-4 py-2 border-[#531652] text-[#531652] rounded-sm">
            Talk to Sales
          </button>
          <button className="cursor-pointer uppercase font-medium border-2 text-xs bg-[#531652] border-[#531652] px-4 py-2 text-[#F5EEE5] rounded-sm">
            Try for Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
