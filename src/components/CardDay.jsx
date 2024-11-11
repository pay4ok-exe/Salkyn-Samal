// src/components/CardDay.js
import React from "react";
import RainIcon from "../assets/img/w_rain.png";
import CloudIcon from "../assets/img/w_cloud.png";

const CardDay = ({
  icon,
  day,
  time,
  temp,
  tempHigh,
  wind,
  rain,
  description,
}) => {
  return (
    <div className="bg-[#f8f8f8] rounded-2xl p-8 w-72 sm:w-64 h-96 flex flex-col items-center text-center space-y-3 justify-between">
      {/* Weather Icon */}
      <img src={icon} alt="Weather Icon" className="w-48 h-auto mx-auto" />

      {/* Day and Time */}
      <div className="flex justify-center gap-2">
        <span className="bg-[#353589] text-white text-sm font-medium py-1 px-4 rounded-full">
          {day}
        </span>
        <span className="bg-[#6a6ac7] text-white text-sm font-medium py-1 px-4 rounded-full">
          {time}
        </span>
      </div>

      {/* Temperature */}
      <div className="flex gap-4 justify-end items-end">
        <div className="text-[#353589] text-5xl font-bold">{temp}°</div>
        <div className="text-gray-500 text-2xl">{tempHigh}°</div>
      </div>

      {/* Wind and Rain */}
      <div className="flex justify-center gap-4 text-lg text-[#6a6ac7] font-medium">
        <span className="flex items-center gap-1">
          <img src={CloudIcon} alt="Wind Icon" className="w-6 h-6" />
          {wind}
        </span>
        <span className="flex items-center gap-1">
          <img src={RainIcon} alt="Rain Icon" className="w-6 h-6" />
          {rain}
        </span>
      </div>

      {/* Description */}
      <div className="text-gray-400 text-lg">{description}</div>
    </div>
  );
};

export default CardDay;
