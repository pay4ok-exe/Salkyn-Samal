import React, { useState } from "react";

const WeatherForecast = () => {
  const [view, setView] = useState("today");

  return (
    <section className="mt-[130px] mx-[30px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex gap-16 text-lg font-semibold">
          <button
            onClick={() => setView("today")}
            className={`${
              view === "today"
                ? "text-blue-800 border-b border-blue-800"
                : "text-gray-400"
            }`}>
            Today
          </button>
          <button
            onClick={() => setView("weekly")}
            className={`${
              view === "weekly"
                ? "text-blue-800 border-b border-blue-800"
                : "text-gray-400"
            }`}>
            Weekly
          </button>
        </div>
        <div className="flex gap-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;
