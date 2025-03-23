// React Utils
import React from "react";

// Icons
import { IoIosClose } from "react-icons/io";

const CookieBox = ({ setIsCookieDialogOpen }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-md rounded-md max-w-[325px]">
      <div className="flex flex-col gap-6 relative px-5 py-8">
        <IoIosClose
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setIsCookieDialogOpen(false)}
        />
        <div>
          <p className="text-xs">
            This device use cookies to enhance user experience and to analyze
            performance and traffic on your website. We also share information
            about your use of our site with our social media, advertising and
            analysing partners.{" "}
            <a href="#" className="text-blue-400 underline">
              More Info
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="cursor-pointer uppercase w-full px-6 py-2 text-xs bg-[#531652] text-[#F5EEE5]">
            Accept All Cookies
          </button>
          <button className="cursor-pointer uppercase w-full px-6 py-2 text-xs border border-[#531652] text-[#531652] bg-[#F5EEE5]">
            Customise Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBox;
