import React, { useState } from "react";
import CardDay from "./CardDay";
import WeekCard from "./WeekCard";
import SunIcon from "../assets/img/partly_cloudy.png";
import RainIcon from "../assets/img/rain_showers.png";
import ClearNightIcon from "../assets/img/clear_night.png";
import PartlyCloudyNightIcon from "../assets/img/partly_cloudy_night.png";
import SunnyIcon from "../assets/img/sunny.png";

const WeatherForecast = () => {
  const [view, setView] = useState("today");

  // Get today's day in a three-letter format (e.g., "SUN", "MON")
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date();
  const todayDay = daysOfWeek[today.getDay()];

  // Generate forecast data for 8 intervals across 24 hours
  const forecastData = Array.from({ length: 8 }, (_, i) => {
    const time = new Date();
    time.setHours(3 * i, 0, 0); // Set time in 3-hour intervals (0:00, 3:00, etc.)

    // Determine icon and description based on time for variety
    let icon, description;
    if (time.getHours() >= 6 && time.getHours() < 18) {
      // Daytime icons
      if (i % 2 === 0) {
        icon = SunIcon;
        description = "Partly Cloudy";
      } else {
        icon = RainIcon;
        description = "Rain Showers";
      }
    } else {
      // Nighttime icons
      if (i % 2 === 0) {
        icon = PartlyCloudyNightIcon;
        description = "Clear Night";
      } else {
        icon = ClearNightIcon;
        description = "Cloudy Night";
      }
    }

    // Format time for display
    const hours = time.getHours() % 12 || 12; // Convert to 12-hour format
    const period = time.getHours() >= 12 ? "PM" : "AM";
    const formattedTime = `${hours}:00${period}`;

    // Return the forecast data object
    return {
      icon,
      day: todayDay,
      time: formattedTime,
      temp: 20 + i, // Example temperatures
      tempHigh: 25 + i, // Example high temperatures
      wind: "45km/h",
      rain: "70%",
      description,
    };
  });

  // Generate weekly forecast data
  const weeklyData = Array.from({ length: 7 }, (_, i) => {
    const dayDate = new Date();
    dayDate.setDate(today.getDate() + i); // Increment each day

    const dayName = daysOfWeek[dayDate.getDay()]; // Day name (e.g., "MON")
    const date = dayDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    }); // Format date as "7 Sep"

    return {
      icon: i % 2 === 0 ? SunnyIcon : RainIcon,
      day: dayName,
      date,
      temp: 23 + i, // Example temperature
    };
  });

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
          ? forecastData.map((data, index) => (
              <CardDay
                key={index}
                icon={data.icon}
                day={data.day}
                time={data.time}
                temp={data.temp}
                tempHigh={data.tempHigh}
                wind={data.wind}
                rain={data.rain}
                description={data.description}
              />
            ))
          : weeklyData.map((data, index) => (
              <WeekCard
                key={index}
                icon={data.icon}
                day={data.day}
                date={data.date}
                temp={data.temp}
              />
            ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
