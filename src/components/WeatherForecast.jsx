import React, { useState } from "react";
import CardDay from "./CardDay";
import SunIcon from "../assets/img/partly_cloudy.png";
import RainIcon from "../assets/img/rain_showers.png";
import ClearNightIcon from "../assets/img/clear_night.png";
import PartlyCloudyNightIcon from "../assets/img/partly_cloudy_night.png";

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
        <div className="flex gap-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Previous">
            &lt;
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Next">
            &gt;
          </button>
        </div>
      </div>
      {/* Forecast Cards */}
      <div className="mt-[50px] flex overflow-x-auto gap-6 scrollbar-hide">
        {forecastData.map((data, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
