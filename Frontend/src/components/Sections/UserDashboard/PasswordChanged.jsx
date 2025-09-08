import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import UserNavbar from "./UserNavbar";

export default function PasswordChanged() {
  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <UserNavbar />

      <section className="mt-20 py-16 sm:py-24">
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-6xl flex flex-col md:flex-row md:bg-white md:shadow-lg">
            
            {/* Left Panel */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center items-center text-center">
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center mb-6">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>

              {/* Success Icon */}
              <FaCheckCircle className="text-green-500 text-6xl mb-4" />

              {/* Heading */}
              <h2 className="text-xl font-bold mb-2">Password Changed!</h2>
              <p className="text-gray-500 mb-6">
                Your password has been changed successfully.
              </p>

              {/* Login Button */}
              <Link to="/login" className="w-full">
                <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                  Log In
                </button>
              </Link>
            </div>

            {/* Right Panel (hidden on small screens) */}
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
