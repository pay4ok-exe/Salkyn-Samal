// src/components/Header.js
import React, { useState } from "react";
import LogoImg from "../assets/img/logo.ico";
import LocationIcon from "../assets/img/location.png";

export default function Header() {
  const [tempUnit, setTempUnit] = useState("F");

  // Toggle function to switch between Fahrenheit and Celsius
  const toggleTempUnit = () => {
    setTempUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
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

        {/* Icons and Search */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search City..."
            className="hidden md:block w-60 px-3 py-2 border border-[#6a6ac7] rounded-full focus:outline-none transition bg-white text-black"
          />
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
