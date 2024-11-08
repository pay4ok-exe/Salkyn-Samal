// Banner.js

import React from "react";
import CloudIcon from "../assets/img/w_cloud.png"; // Replace with correct path
import RainIcon from "../assets/img/w_rain.png"; // Replace with correct path
import SunCloudIcon from "../assets/img/sun_cloud.png"; // Replace with correct path
import BannerBg from "../assets/img/banner_bg.png"; // Replace with correct path

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center mt-[130px] mx-[30px] rounded-2xl p-8"
      style={{ backgroundImage: `url(${BannerBg})` }}>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Section */}
        <div className="text-white">
          <h1 className="text-[76px] font-bold leading-[99px]">
            San Francisco
          </h1>
          <div className="flex gap-16 mt-4">
            <p className="text-lg">Monday, May 23</p>
            <p className="text-lg">Update As Of 2:45 PM</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-2xl p-6 mt-8 grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#7668e5]">
                <img src={CloudIcon} alt="Wind Icon" className="h-6 w-6" />
              </div>
              <p className="text-black">Wind 3km/h</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#7668e5]">
                <img src={CloudIcon} alt="Wind Icon" className="h-6 w-6" />
              </div>
              <p className="text-black">Wind 3km/h</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#7668e5]">
                <img src={RainIcon} alt="Rain Icon" className="h-6 w-6" />
              </div>
              <p className="text-black">Rain 78%</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#7668e5]">
                <img src={RainIcon} alt="Rain Icon" className="h-6 w-6" />
              </div>
              <p className="text-black">Rain 78%</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-64 bg-gradient-to-b from-[#353589] to-[#9a9aff] rounded-2xl p-6 mt-8 md:mt-0 text-center">
          <span className="bg-[#353589] text-white text-sm font-medium py-1 px-4 rounded-full">
            Today
          </span>
          <div className="mt-4">
            <img src={SunCloudIcon} alt="Weather Icon" className="mx-auto" />
            <span className="text-white text-[76px] font-semibold leading-[99px] mt-4">
              23<sup>℃</sup>
            </span>
            <h5 className="text-white text-xl mt-2">
              23<sup>℃</sup> - 31<sup>℃</sup>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
