// Banner.js

import React from 'react';
import '../assets/styles/Banner.css'; // Make sure to style it later

import CloudIcon from '../assets/img/w_cloud.png'; // Replace with correct path
import RainIcon from '../assets/img/w_rain.png'; // Replace with correct path
import SunCloudIcon from '../assets/img/sun_cloud.png'; // Replace with correct path

const Banner = () => {
  return (
    <section className="banner-bg">
      <div className="content-wrapper">
        <div className="info-section">
          <div className="text-content">
            <h1 className="heading-1">San Francisco</h1>
            <div className="date-info">
              <p>Monday, May 23</p>
              <p>Update As Of 2:45 PM</p>
            </div>
          </div>
          <div className="weather-info">
            <div className="info-item">
              <div className="icon-bg">
                <img alt="w_cloud" src={CloudIcon} width="29" height="24" />
              </div>
              <p>Wind 3km/h</p>
            </div>
            <div className="info-item">
              <div className="icon-bg">
                <img alt="w_cloud" src={CloudIcon} width="29" height="24" />
              </div>
              <p>Wind 3km/h</p>
            </div>
            <div className="info-item">
              <div className="icon-bg">
                <img alt="w_rain" src={RainIcon} width="32" height="23" />
              </div>
              <p>Rain 78%</p>
            </div>
            <div className="info-item">
              <div className="icon-bg">
                <img alt="w_rain" src={RainIcon} width="32" height="23" />
              </div>
              <p>Rain 78%</p>
            </div>
          </div>
        </div>
        
        <div className="today-weather">
          <div className="gradient-bg">
            <span className="figure-caption">Today</span>
            <div className="weather-details">
              <img alt="sun_cloud" src={SunCloudIcon} width="169" height="127" className="weather-icon" />
              <span className="temperature">
                23<sup>℃</sup>
              </span>
              <h5 className="temperature-range">
                23<sup>℃</sup> - 31<sup>℃</sup>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
