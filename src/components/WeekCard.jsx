// src/components/WeekCard.js
import React from "react";

const WeekCard = ({ icon, day, date, temp }) => {
  return (
    <div className="w-[130px] md:w-[200px] inline-flex flex-col items-center justify-around bg-[#f8f8f8] py-12 rounded-full transition-colors duration-300 hover:bg-gradient-to-b hover:from-[#6a6ac7] hover:to-[#4e4e96] hover:text-white">
      {/* Weather Icon */}
      <img src={icon} alt={`${day}, ${date}`} className="h-[108px]" />

      {/* Day and Date */}
      <div className="mt-4 text-center">
        <p className="text-sm md:text-base">
          {day}, {date}
        </p>

        {/* Temperature */}
        <h2 className="text-3xl font-semibold mt-4">
          {temp}
          <sup className="font-thin">°</sup>
        </h2>
      </div>
    </div>
  );
};

export default WeekCard;
