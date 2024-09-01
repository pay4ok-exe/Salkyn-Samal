// Weather.js

import React, { useState, useEffect } from 'react';
import '../assets/styles/Weather.css';

const Weather = () => {
  
  return (
    <div className="weather-container">
      <div className="button-group">
        <button>
          Today
        </button>
        <button>
          Weekly
        </button>
      </div>
      
    </div>
  );
};

export default Weather;
