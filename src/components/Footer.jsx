// src/components/Footer.js
import React from "react";
import LogoImg from "../assets/img/logo.ico"; // Replace with the correct footer logo path
import { FaGithub, FaInstagram, FaLinkedin, FaCode } from "react-icons/fa"; // FaCode as a placeholder for LeetCode

const Footer = () => {
  return (
    <footer className="bg-black pt-10 mt-[100px] text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Logo and Navigation Links */}
        <div className="flex items-center mb-8 gap-10">
          <a href="/">
            <img
              src={LogoImg}
              alt="Logo Footer"
              className="h-20"
              loading="lazy"
            />
          </a>
          <ul className="flex items-center justify-center gap-4 xs:gap-6 mt-6">
            <li className="text-lg hover:text-[#7668E5] transition duration-300">
              <a href="/">Home</a>
            </li>
            <li className="text-lg hover:text-[#7668E5] transition duration-300">
              <a href="/weather">Weather</a>
            </li>
            <li className="text-lg hover:text-[#7668E5] transition duration-300">
              <a href="/blog">News</a>
            </li>
            <li className="text-lg hover:text-[#7668E5] transition duration-300">
              <a href="/contact-us">Contact</a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-25 max-w-[1296px] mx-auto"></div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between max-w-[1296px] mx-auto py-8 text-gray-400">
          {/* Copyright Text */}
          <p className="text-center xs:text-left text-sm">
            © 2022{" "}
            <a href="/" className="hover:text-[#7668E5]">
              Salkyn Samal
            </a>
            . All rights reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-white mt-4 xs:mt-0">
            <a
              href="https://github.com/pay4ok-exe" // Replace with your GitHub link
              target="_blank"
              //   rel="noopener noreferrer"
              className="hover:text-[#7668E5] transition duration-300">
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://leetcode.com/u/pay4ok_exe/" // Replace with your LeetCode link
              target="_blank"
              //   rel="noopener noreferrer"
              className="hover:text-[#7668E5] transition duration-300">
              <FaCode className="text-lg" />{" "}
              {/* FaCode as LeetCode placeholder */}
            </a>
            <a
              href="https://www.linkedin.com/in/pay4ok-exe/" // Replace with your LinkedIn link
              target="_blank"
              //   rel="noopener noreferrer"
              className="hover:text-[#7668E5] transition duration-300">
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/pay4ok.exe" // Replace with your Instagram link
              target="_blank"
              //   rel="noopener noreferrer"
              className="hover:text-[#7668E5] transition duration-300">
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
