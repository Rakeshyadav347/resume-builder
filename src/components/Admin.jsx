import React, { useState } from "react";
import {
  FaChartBar,
  FaUser,
  FaFileAlt,
  FaBlog,
  FaDollarSign,
  FaCommentDots,
  FaSignOutAlt,
  FaEye,
} from "react-icons/fa";

import harvard from "../assets/harvard.png";
import mountain from "../assets/mountain.png"; // ✅ your mountain-like image

const Admin = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // Dummy users for the Users Page
  const users = Array(12).fill({
    id: "00001",
    name: "Rosie Pearson",
    contact: "+91 90991 34329",
    email: "Rose@gmail.com",
  });

  return (
    <div className="flex min-h-screen bg-[#f5f7ff]">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-white shadow-lg flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 px-6 py-6 border-b">
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>
          <nav className="flex flex-col gap-4 p-6 text-gray-700">
            <button
              onClick={() => setActivePage("dashboard")}
              className={`flex items-center gap-2 text-left ${
                activePage === "dashboard"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              <FaChartBar /> Dashboard
            </button>
            <button
              onClick={() => setActivePage("users")}
              className={`flex items-center gap-2 text-left ${
                activePage === "users"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              <FaUser /> Users
            </button>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <FaFileAlt /> Templates
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <FaBlog /> Blog
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <FaDollarSign /> Subscription
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <FaCommentDots /> Feedback
            </a>
          </nav>
        </div>
        <div className="p-6 border-t">
          <button className="flex items-center gap-2 text-black-500 hover:text-red-600">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
        {/* Dashboard Page */}
        {activePage === "dashboard" && (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>

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
                <img
                  src={mountain}
                  alt="Activity Users Graph"
                  className="w-full h-64 object-contain"
                />
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
                          Focus on highlighting your accomplish
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
        )}

        {/* Users Page */}
        {activePage === "users" && (
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">User Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr
                      key={idx}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-3">{user.id}</td>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.contact}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3 text-gray-500">
                        <FaEye className="cursor-pointer hover:text-blue-600" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
