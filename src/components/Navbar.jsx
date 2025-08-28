// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png"; // put your logo image in /src/assets/ and name it logo.png

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-xl font-semibold text-gray-800">
              Resume Maker
            </h1>
          </div>

          {/* Right Section - Button */}
          <div className="flex items-center">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
