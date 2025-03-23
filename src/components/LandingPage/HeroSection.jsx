// React Utils
import React from "react";

// Video
import SlackVideo from "../../assets/SlackVideo.webm";

// Icons
import { FcGoogle } from "react-icons/fc";

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-between gap-20 py-20 w-full">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-6xl font-bold leading-[1.05] tracking-wide">
            Slack is where the future works
          </h1>
        </div>
        <div>
          <p className="font-medium">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer uppercase rounded-sm bg-[#531652] font-medium tracking-wide text-[#F5EEE5] text-xs px-8 py-4">
            Try for Free
          </button>
          <button className="cursor-pointer uppercase gap-3 items-center rounded-sm flex bg-blue-500 font-medium tracking-wide text-white text-xs px-1 py-1 pr-3">
            <div className="bg-white items-center justify-center px-3 py-3">
              <FcGoogle className="text-lg" />
            </div>
            Sign up with google
          </button>
        </div>
      </div>
      <div>
        <div className="relative">
          <video autoPlay muted className="max-w-[550px] rounded-[20px]">
            <source src={SlackVideo} type="video/webm" />
          </video>
          <div className="absolute -top-4 left-28 rounded-xl font-bold px-3 py-1 bg-white shadow-md">
            👍 3
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-5 rounded-xl font-bold px-3 py-1 bg-white shadow-md">
            💡 8
          </div>
          <div className="absolute top-3/5 -left-6 rounded-xl font-bold px-3 py-1 bg-white shadow-md">
            🎉 5
          </div>
        </div>
      </div>
    </section>
  );
};
