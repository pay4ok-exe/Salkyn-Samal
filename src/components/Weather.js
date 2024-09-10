// Weather.js

// import React, { useState, useEffect } from 'react';
import '../assets/styles/Weather.css';
import TodayCard from './TodayCard';

const rightArrow = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>
const leftArrow = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>
 
const todayList = [
  {
    id: 1,
    weather_icon: "url()",
    today:"Sun",
    time:"4:00pm",
    weather_details: {
      temperature: 23,
      probably_temperature: 30,
      wind:45,
      rain:70,
      content: "Light Rain"
    }
  },
  {
    id: 2,
    weather_icon: "url()",
    today:"Sun",
    time:"5:00pm",
    weather_details: {
      temperature: 22,
      probably_temperature: 28,
      wind:45,
      rain:70,
      content: "Light Sun"
    }
  },
  {
    id: 3,
    weather_icon:"url()",
    today:"Sun",
    time:"6:00pm",
    weather_details: {
      temperature: 20,
      probably_temperature: 25,
      wind:45,
      rain:70,
      content: "Light Rain"
    }
  },
  {
    id: 4,
    weather_icon: "url()",
    today:"Sun",
    time:"7:00pm",
    weather_details: {
      temperature: 20,
      probably_temperature: 25,
      wind:45,
      rain:70,
      content: "Cloudy"
    }
  },
  {
    id: 5,
    weather_icon: "url()",
    today:"Sun",
    time:"8:00pm",
    weather_details: {
      temperature: 20,
      probably_temperature: 25,
      wind:45,
      rain:70,
      content: "Cloudy"
    }
  },
  {
    id: 6,
    weather_icon: "url()",
    today:"Sun",
    time:"9:00pm",
    weather_details: {
      temperature: 20,
      probably_temperature: 30,
      wind:45,
      rain:70,
      content: "Light Rain"
    }
  },
  {
    id: 7,
    weather_icon: "url()",
    today:"Sun",
    time:"10:00pm",
    weather_details: {
      temperature: 19,
      probably_temperature: 28,
      wind:45,
      rain:70,
      content: "Light Sun"
    }
  }

] 

const Weather = () => {


  
  return (
    <div className="weather-container">
      <div className='weather-header'>
        <div className="button-group">
          <button className='btn active' >
            Today
          </button>
          <button className='btn'>
            Weekly
          </button>
        </div>

        <div className="slider-controls">
          <button type="button" className="handle-slider-btn disabled" disabled="">
            {rightArrow}
          </button>
          <button type="button" className="handle-slider-btn">
            {leftArrow}
          </button>
        </div>

      </div>
      
      

      <div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events'>
        <div className='swiper-wrapper'>
          {/* {console.log()} */}
          {todayList.map((today) => {
          return (
            <TodayCard 
              key={today.id} 
              today={today} 
            />
          );
          })}

        </div>
      </div>
    </div>
  );
};

export default Weather;
