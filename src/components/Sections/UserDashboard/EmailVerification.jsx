import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"; 
import previewImg from "../../../assets/editor-resume.png"; 
import UserNavbar from "./UserNavbar";

export default function EmailVerification() {
  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <UserNavbar />

      <section className="mt-20 py-16 sm:py-24">
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-6xl flex flex-col md:flex-row md:bg-white md:shadow-lg">
            
            {/* Left Panel */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center items-center">
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center mb-6">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>

              {/* Heading */}
              <h2 className="text-xl font-bold mb-2 text-center">
                Email Code Verification
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Please enter the 4 digit code sent to your email address.
              </p>

              {/* Code Input Boxes */}
              <div className="flex gap-2 mb-4">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 border rounded-lg text-center text-lg font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                ))}
              </div>

              {/* Resend */}
              <p className="text-gray-500 text-sm mb-6">
                Didn’t receive code?{" "}
                <span className="text-blue-600 cursor-pointer">Resend</span>
              </p>

              {/* Verify Button */}
              <Link to="/reset-password">
              <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Verify and Proceed
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
