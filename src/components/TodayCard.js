import React from 'react';
import '../assets/styles/TodayCard.css';

const TodayCard = ({ today }) => {
  // console.log(today)
  return (
    <div className="report-card-today">
      <div className="flex flex-col items-center text-center">
        <img
          alt="Weather icon"
          src='' // Use dynamic URL from prop
          // srcSet={`${today.weather_icon} 1x, ${today.weather_icon} 2x`} // Ensure srcSet is used correctly
          className="weather-icon"
        />
        <div className="weather-details">
          <p className="temperature">{today.weather_details.temperature}°C</p>
          <p className="description">{today.weather_details.content}</p>
        </div>
        <div className="additional-info">
          <div className="info-item">
            <span className="info-label">Feels like</span>
            <span className="info-value">{today.weather_details.probably_temperature}°C</span>
          </div>
          <div className="info-item">
            <span className="info-label">Humidity</span>
            <span className="info-value">{today.weather_details.rain}%</span>
          </div>
          <div className="info-item">
            <span className="info-label">Wind</span>
            <span className="info-value">{today.weather_details.wind} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
