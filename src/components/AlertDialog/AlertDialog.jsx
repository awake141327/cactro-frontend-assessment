// React Utils
import React from "react";

// Icons
import { IoIosClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const AlertDialog = ({ setIsAlertDialogOpen }) => {
  return (
    <div className="px-6 py-5 mt-10 flex justify-between w-full bg-[#00639F] text-white rounded-[50px]">
      <p className="flex items-center gap-2 text-sm">
        Slack is your <span className="font-semibold">Digital HQ.</span> Meet
        the new features keeping teams connected in a work-from-anywhere world.{" "}
        <span className="font-semibold underline">Let's Go</span>
        <FaArrowRightLong className="text-xs" />
      </p>
      <div>
        <IoIosClose
          className="text-2xl cursor-pointer"
          onClick={() => setIsAlertDialogOpen(false)}
        />
      </div>
    </div>
  );
};

export default AlertDialog;
