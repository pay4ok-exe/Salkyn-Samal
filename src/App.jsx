// App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WeatherForecast from "./components/WeatherForecast";

import CloudIcon from "./assets/img/w_cloud.png";
import RainIcon from "./assets/img/w_rain.png";
import HumidityIcon from "./assets/img/w_humidity.png";
import VisibilityIcon from "./assets/img/w_visibility.png";

import PartlyCloudyIcon from "./assets/img/partly_cloudy.png";
import RainlyIcon from "./assets/img/rain_showers.png";
import ClearNightIcon from "./assets/img/clear_night.png";
import PartlyCloudyNightIcon from "./assets/img/partly_cloudy_night.png";
import SunnyIcon from "./assets/img/sunny.png";

const API_KEY = "9d5a0178f97e30e05569e495179423e9";

function App() {
  const [city, setCity] = useState("Astana");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

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
            value: `${Math.round((currentData.pop || 0) * 100)}%`,
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

      // Format the forecast data for `WeatherForecast` component
      // console.log(data);
      const { todayForecast, weeklyForecast } = formatForecastData(data.list);

      setCurrentWeather(formattedCurrentWeather);
      setForecast({ today: todayForecast, weekly: weeklyForecast });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (time, humidity) => {
    const hour = time.getHours();

    if (hour >= 7 && hour < 13) {
      // Between 7 AM and 1 PM
      return humidity > 70 ? RainlyIcon : PartlyCloudyIcon;
    } else if (hour >= 13 && hour < 19) {
      // Between 1 PM and 7 PM
      return SunnyIcon;
    } else {
      // Between 7 PM and 7 AM
      return humidity > 70 ? RainlyIcon : PartlyCloudyNightIcon;
    }
  };

  // Helper to format the forecast data for hourly and weekly forecasts
  const formatForecastData = (forecastList) => {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const today = new Date();

    // Today's hourly forecast: get first 8 intervals (3-hour steps)
    const todayForecast = forecastList.slice(0, 8).map((item, i) => {
      const time = new Date(item.dt * 1000);
      const hours = time.getHours() % 12 || 12;
      const period = time.getHours() >= 12 ? "PM" : "AM";
      const formattedTime = `${hours}:00${period}`;

      return {
        icon: getWeatherIcon(time, item.humidity),
        day: daysOfWeek[today.getDay()],
        time: formattedTime,
        temp: Math.round(item.main.temp),
        tempHigh: Math.round(item.main.temp_max),
        wind: `${Math.round(item.wind.speed)}km/h`,
        rain: `${Math.round((item.humidity || 0) * 100)}%`,
        description: item.weather[0].description,
      };
    });

    // Weekly forecast: pick one entry per day (every 24 hours)
    const weeklyForecast = [];
    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(today);
      dayDate.setDate(today.getDate() + i);
      const dayName = daysOfWeek[dayDate.getDay()];
      const date = dayDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });

      const forecastForDay = forecastList.find((_, index) => index === i * 8);

      // If data for this day exists in the API response, use it; otherwise, create a placeholder
      // Check if forecast data is available for this day
      if (forecastForDay) {
        weeklyForecast.push({
          icon: getWeatherIcon(
            new Date(forecastForDay.dt * 1000),
            forecastForDay.main.humidity
          ),
          day: dayName,
          date: date,
          temp:
            forecastForDay.main.temp !== undefined
              ? Math.round(forecastForDay.main.temp)
              : weeklyForecast.length > 0
              ? weeklyForecast[weeklyForecast.length - 1].temp
              : 0, // Fallback to last available temp
        });
      } else {
        // If no data available, use last known or default
        const lastAvailableTemp =
          weeklyForecast.length > 0
            ? weeklyForecast[weeklyForecast.length - 1].temp
            : 0;
        weeklyForecast.push({
          icon: SunnyIcon, // Default icon
          day: dayName,
          date: date,
          temp: lastAvailableTemp,
        });
      }
    }

    return { todayForecast, weeklyForecast };
  };

  // Fetch data when the city changes
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <Header onCityChange={handleCityChange} />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Banner weatherData={currentWeather} />
          <WeatherForecast forecast={forecast} />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
