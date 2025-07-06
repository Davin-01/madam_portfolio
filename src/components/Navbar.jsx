import React from "react";
import logo from "../assets/stellar-logo.svg"; // Replace with your Stellar logo

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center"
      style={{ backgroundColor: "#0D1A40" }}
    >
      {/* Logo and title */}
      <div className="flex items-center space-x-3 animate-fade-in">
        <img src={logo} alt="Stellar Logo" className="h-8 w-8" />
        <span className="text-white text-lg font-semibold">Madam Stellar</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-6 animate-slide-down">
        <a href="#about" className="text-white hover:text-[#F5B700] transition duration-200">
          About
        </a>
        <a href="#achievements" className="text-white hover:text-[#F5B700] transition duration-200">
          Achievements
        </a>
        <a href="#vision" className="text-white hover:text-[#F5B700] transition duration-200">
          Vision
        </a>
        <a href="#contact" className="text-white hover:text-[#F5B700] transition duration-200">
          Contact
        </a>
      </nav>
    </header>
  );
}
