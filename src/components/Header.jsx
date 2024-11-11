// src/components/Header.js
import React, { useState } from "react";
import LogoImg from "../assets/img/logo.ico";
import LocationIcon from "../assets/img/location.png";
import SearchIcon from "../assets/img/search.png";

export default function Header({ onCityChange }) {
  const [tempUnit, setTempUnit] = useState("F");
  const [city, setCity] = useState(""); // New state for city input

  // Toggle function to switch between Fahrenheit and Celsius
  const toggleTempUnit = () => {
    setTempUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };

  // Handle form submit for city search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onCityChange(city);
      setCity(""); // Clear the input after search
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white py-3 px-4 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center">
            <img
              src={LogoImg}
              alt="logo"
              className="h-20 w-auto object-contain"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-black hover:text-[#6a6ac7] transition text-lg">
            Home
          </a>
          <a
            href="/"
            className="text-black hover:text-[#6a6ac7] transition text-lg">
            News
          </a>
          <a
            href="/"
            className="text-black hover:text-[#6a6ac7] transition text-lg">
            Contact
          </a>
          <a
            href="/"
            className="text-black hover:text-[#6a6ac7] transition text-lg">
            Offer
          </a>
        </nav>

        {/* Search and Temp Toggle */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search City..."
              className="w-60 px-3 py-2 border border-[#6a6ac7] rounded-full focus:outline-none transition bg-white text-black"
            />
            <button
              type="submit"
              className="text-lg font-medium bg-gradient-to-b from-[#6a6ac7] to-[#4e4e96] text-white rounded-full p-2">
              <img
                src={SearchIcon}
                alt="search"
                className="h-6 w-auto object-contain"
              />
            </button>
          </form>

          {/* Temperature Toggle Button */}
          <button
            onClick={toggleTempUnit}
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#6a6ac7] to-[#4e4e96] text-white rounded-full text-lg font-medium hover:from-[#5a5ab0] hover:to-[#3d3d78] transition">
            {tempUnit === "F" ? "°F" : "°C"}
          </button>
          <button className="p-2 bg-gradient-to-b from-[#6a6ac7] to-[#4e4e96] rounded-full hover:bg-[#5a5ab0] transition">
            <img src={LocationIcon} alt="Location Icon" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
