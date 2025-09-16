// src/components/Admin.jsx
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaChartBar,
  FaUser,
  FaFileAlt,
  FaBlog,
  FaDollarSign,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import harvard from "../../../assets/card-img.png";
import mountain from "../../../assets/card-img.png";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-[#f5f7ff]">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-white shadow-lg flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 px-6 py-6 border-b">
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>

          <nav className="flex flex-col gap-4 p-6 text-gray-700">
            <Link
              to="/admin"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaChartBar /> Dashboard
            </Link>
            <Link
              to="/adminusers"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaUser /> Users
            </Link>
            <Link
              to="/admintemplates"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaFileAlt /> Templates
            </Link>
            <Link
              to="/adminblog"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaBlog /> Blog
            </Link>
            <Link
              to="/subscription"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaDollarSign /> Subscription
            </Link>
            <Link
              to="/feedback"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaCommentDots /> Feedback
            </Link>
          </nav>
        </div>
        <div className="p-6 border-t">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-black-500 hover:text-red-600"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main Content (Dynamic via Outlet) */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

// Dashboard content extracted here
Admin.DashboardContent = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        {[
          "Total User",
          "Total Resume",
          "Total Cover Letter",
          "Total Revenue",
          "Subscription User",
          "Blog",
        ].map((title, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-600">{title}</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-2xl font-semibold">1,234</p>
              <span className="text-green-500 font-medium">+10%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Blog */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Chart */}
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Activity Users</h3>
            <span className="text-gray-500 text-sm">Weekly ▼</span>
          </div>
          <div className="relative w-full h-64">
            <img
              src={mountain}
              alt="Activity Users Graph"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex justify-between mt-2 px-1 text-sm text-gray-600">
            {weekDays.map((day, i) => (
              <span key={i}>{day}</span>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">My Blog</h3>
            <a href="#" className="text-blue-500 text-sm">
              View Details
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <img
                  src={harvard}
                  alt="Blog"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm">
                    How to create a resume and cover letter.
                  </h4>
                  <p className="text-xs text-gray-500">
                    Focus on highlighting your accomplishments
                  </p>
                  <p className="text-xs text-gray-400">
                    May 14, 2025 · By Tatjana
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
