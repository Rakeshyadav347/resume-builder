import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import user from '../../../assets/user-img.png'
import logo from "../../../assets/logo.png";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-4 py-2 border-b">
      {/* Logo & Title */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
         <img src={logo} alt="" />
        </div>
        <h1 className="text-gray-800 font-semibold text-lg">Resume Maker</h1>
      </div>

      {/* Right side - User Avatar & Dropdown */}
      <div className="relative group">
        <img
          src={user}
          alt="user"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        {/* Dropdown */}
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md hidden group-hover:block">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <FaSignOutAlt className="mr-2" />
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
