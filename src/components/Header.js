import React from 'react';
import '../assets/styles/Header.css';
import LogoImg from '../assets/img/logo.ico';
import MoonIcon from '../assets/img/moon.png';
import LocationIcon from '../assets/img/location.png';

const Header = () => {
  return (
    <header className="header">
      <div className='container'>
            {/* Logo Section */}
        <div className="logo" href="/">
            <img src={LogoImg} alt='logo image' decoding='async'></img>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links mt-6 md:mt-0 hidden md:block">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-[20px]">
                <li className="nav-item">
                <a href="/">Home</a>
                </li>
                <li className="nav-item">
                <a href="/blog">News</a>
                </li>
                <li className="nav-item">
                <a href="/contact-us">Contact</a>
                </li>
                <li className="nav-item">
                <a href="/offer">Offer</a>
                </li>
            </ul>
        </nav>


        {/* Icons and Search */}
        <div className="header-actions">
            <input
            type="text"
            className="search-bar"
            placeholder="Search City..."
            />
            <button className="location-button">
            <img src={LocationIcon} alt="Location Icon" width="28" height="28" loading="lazy" />
            </button>
            <button className="dark-mode-toggle">
            <img src={MoonIcon} alt="Moon Icon" width="28" height="28" loading="lazy" />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
