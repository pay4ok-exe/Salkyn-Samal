// Banner.js
import React, { useState } from "react";
import SunCloudIcon from "../assets/img/sun_cloud.png";
import BannerBg from "../assets/img/banner_bg.png";

const Banner = ({ weatherData }) => {
  return (
    <section
      className="bg-cover bg-center mt-[130px] mx-[30px] rounded-2xl p-8"
      style={{ backgroundImage: `url(${BannerBg})` }}>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Section */}
        <div className="text-white">
          <h1 className="text-[76px] font-bold leading-[99px]">
            {weatherData.city}
          </h1>
          <div className="flex gap-16 mt-4">
            <p className="text-lg">{weatherData.date}</p>
            <p className="text-lg">Update As Of {weatherData.updateTime}</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-2xl p-6 mt-8 grid grid-cols-2 gap-5">
            {weatherData.weatherDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#7668e5]">
                  <img
                    src={detail.icon}
                    alt={`${detail.type} Icon`}
                    className={`h-6 w-6 ${
                      index % 2 == 1 ? "brightness-0 invert" : ""
                    } `}
                  />
                </div>
                <p className="text-black">
                  {detail.type} {detail.value}
                </p>
              </div>
            ))}
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
              {weatherData.todayTemperature}
              <sup>℃</sup>
            </span>
            <h5 className="text-white text-xl mt-2">
              {weatherData.temperatureRange.min}
              <sup>℃</sup> - {weatherData.temperatureRange.max}
              <sup>℃</sup>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
