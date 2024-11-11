import React, { useState } from "react";
import CardDay from "./CardDay";
import WeekCard from "./WeekCard";
import SunIcon from "../assets/img/partly_cloudy.png";
import RainIcon from "../assets/img/rain_showers.png";
import ClearNightIcon from "../assets/img/clear_night.png";
import PartlyCloudyNightIcon from "../assets/img/partly_cloudy_night.png";
import SunnyIcon from "../assets/img/sunny.png";

const WeatherForecast = ({ forecast }) => {
  const [view, setView] = useState("today");

  return (
    <section className="mt-[100px] mx-[30px] w-auto">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Toggle Buttons for Today and Weekly */}
        <div className="flex gap-12 text-xl">
          <button
            onClick={() => setView("today")}
            className={`relative pb-1 ${
              view === "today"
                ? "text-blue-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-800"
                : "text-gray-400 hover:text-gray-600"
            }`}>
            Today
          </button>
          <button
            onClick={() => setView("weekly")}
            className={`relative pb-1 ${
              view === "weekly"
                ? "text-blue-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-800"
                : "text-gray-400 hover:text-gray-600"
            }`}>
            Weekly
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-[#4e4e96] hover:text-white  transition-colors text-2xl disabled:bg-gray-100 disabled:text-gray-400"
            aria-label="Previous">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-[#4e4e96] hover:text-white  transition-colors text-2xl"
            aria-label="Next">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Forecast Cards */}
      <div
        className={`my-[50px] flex overflow-x-auto scrollbar-hide justify-between ${
          view === "today" ? "gap-6" : "gap-4 justify-center"
        }`}>
        {view === "today"
          ? forecast.today.map((data, index) => (
              <CardDay key={index} {...data} />
            ))
          : forecast.weekly.map((data, index) => (
              <WeekCard key={index} {...data} />
            ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
