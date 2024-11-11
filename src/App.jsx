import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WeatherForecast from "./components/WeatherForecast";

import CloudIcon from "./assets/img/w_cloud.png";
import RainIcon from "./assets/img/w_rain.png";
import HumidityIcon from "./assets/img/w_humidity.png";
import VisibilityIcon from "./assets/img/w_visibility.png";

const API_KEY = "9d5a0178f97e30e05569e495179423e9";
const CITY = "Astana"; // You can change this to any city

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(true);

  // Fetch weather data from the OpenWeather API
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch forecast data, which includes the current weather as the first entry
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        // Extract the current weather from the first item in the list
        const currentData = data.list[0];
        const cityInfo = data.city;

        // Format the current weather for the Banner component
        const formattedCurrentWeather = {
          city: cityInfo.name,
          date: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          }),
          updateTime: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          todayTemperature: Math.round(currentData.main.temp),
          temperatureRange: {
            min: Math.round(currentData.main.temp_min),
            max: Math.round(currentData.main.temp_max),
          },
          weatherDetails: [
            {
              type: "Wind",
              value: `${Math.round(currentData.wind.speed)} km/h`,
              icon: CloudIcon,
            },
            {
              type: "Humidity",
              value: `${currentData.main.humidity}%`,
              icon: HumidityIcon,
            },
            {
              type: "Rain",
              value: `${Math.round((currentData.pop || 0) * 100)}%`, // Rain percentage
              icon: RainIcon,
            },
            {
              type: "Visibility",
              value: currentData.visibility
                ? `${(currentData.visibility / 1000).toFixed(1)} km`
                : "N/A",
              icon: VisibilityIcon,
            },
          ],
        };

        setCurrentWeather(formattedCurrentWeather);
        setForecast(data); // Pass the full forecast data to the WeatherForecast component
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };

    fetchWeatherData();
  }, []);
  return (
    <>
      <Header />

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Banner weatherData={currentWeather} />
          <WeatherForecast />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
