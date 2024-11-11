// src/components/WeekCard.js
import React from "react";

const WeekCard = ({ icon, day, date, temp }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-40 h-60 flex flex-col items-center text-center space-y-4">
      <img src={icon} alt="Weather Icon" className="w-16 h-16 mx-auto" />
      <div className="text-gray-500 text-sm">
        {day}, {date}
      </div>
      <div className="text-[#353589] text-4xl font-semibold">{temp}°</div>
    </div>
  );
};

export default WeekCard;
