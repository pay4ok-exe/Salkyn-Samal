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
    <div className="bg-[#f8f8f8] rounded-2xl p-8 w-80 sm:w-64 h-96 flex flex-col items-center text-center space-y-3 justify-between  hover:bg-gradient-to-b hover:from-[#6a6ac7] hover:to-[#4e4e96] hover:text-white">
      {/* Weather Icon */}
      <img src={icon} alt="Weather Icon" className="h-[150px]" />

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
        <div className="text-5xl font-bold ">{temp}°</div>
        <div className="text-2xl ">{tempHigh}°</div>
      </div>

      {/* Wind and Rain Icons with Background Circle */}
      <div className="flex justify-center gap-4 text-lg font-medium">
        <span className="flex items-center gap-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#353589]">
            <img
              src={CloudIcon}
              alt="Wind Icon"
              className="w-4 h-4 hover:brightness-0 hover:invert"
            />
          </div>
          <span className="">{wind}</span>
        </span>
        <span className="flex items-center gap-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#353589]">
            <img src={RainIcon} alt="Rain Icon" className="w-4 h-4" />
          </div>
          <span className="">{rain}</span>
        </span>
      </div>

      {/* Description */}
      <div className="text-lg ">{description}</div>
    </div>
  );
};

export default CardDay;
