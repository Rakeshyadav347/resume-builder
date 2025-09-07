import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import UserNavbar from "./UserNavbar";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <UserNavbar />

      <section className="mt-20 py-16 sm:py-24">
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-6xl flex flex-col md:flex-row md:bg-white md:shadow-lg rounded-lg overflow-hidden">
            {/* Left Panel */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-2 text-center">
                Reset Password
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Your new password must be different from previously used
                passwords.
              </p>

              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <Link to="/password-changed">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                  Reset Password
                </button>
              </Link>
            </div>

            {/* Right Panel */}
            <div className="hidden md:flex w-full md:w-2/3 p-8 items-center justify-center">
              <img
                src={previewImg}
                alt="Resume Preview"
                className="rounded-md shadow-md w-full max-w-2xl"
              />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
