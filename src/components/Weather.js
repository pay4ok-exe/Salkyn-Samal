// Weather.js

import React, { useState, useEffect } from 'react';
import '../assets/styles/Weather.css';

const Weather = () => {
  
  return (
    <div className="weather-container">
      <div className="button-group">
        <button className='btn active' >
          Today
        </button>
        <button className='btn'>
          Weekly
        </button>
      </div>
      
    </div>
  );
};

export default Weather;
