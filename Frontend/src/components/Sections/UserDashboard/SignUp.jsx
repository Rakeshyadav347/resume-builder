import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
        <UserNavbar />

        <section className="mt-6 py-16 sm:py-24">
          <main className="flex flex-1 items-center justify-center px-6">
        
            <div className="w-full max-w-6xl h-auto md:h-[850px] bg-transparent md:bg-white md:shadow-lg p-4">
              <div className="flex flex-col md:flex-row h-full">
             
                <div className="w-full max-w-md mx-auto bg-white p-6 lg:p-8">
                 
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-white shadow flex items-center justify-center">
                      <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                    Sign Up — Build Your Resume
                  </h2>

                  {/* Social Buttons */}
                  <div className="flex gap-4 mb-6">
                    <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="h-5 w-5"
                      />
                      Google
                    </button>
                    <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                      <img
                        src="https://www.svgrepo.com/show/448234/linkedin.svg"
                        alt="LinkedIn"
                        className="h-5 w-5"
                      />
                      LinkedIn
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mb-4 text-center">
                    Or Continue With
                  </p>

                  {/* Full Name */}
                  <label className="text-sm text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />

                 
                  <label className="text-sm text-gray-700">
                    Email / Phone Number
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Enter your email or Phone Number"
                      className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button className="px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
                      Send OTP
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Resend code in 03:00
                  </p>

                 
                  <label className="text-sm text-gray-700">
                    Enter verification code
                  </label>
                  <div className="flex gap-2 justify-between mb-2">
                    {[...Array(6)].map((_, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-center border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-green-600 mb-4">✔ Verified</p>

                
                  <label className="text-sm text-gray-700">Password</label>
                  <div className="relative mb-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter a password"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                 
                  <label className="text-sm text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative mb-6">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter a confirm password"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-500"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Sign Up
                  </button>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                      Log In
                    </a>
                  </p>
                </div>

              
                <div className="hidden md:flex flex-1 p-8 items-center justify-center">
                  <img
                    src={previewImg}
                    alt="Resume Preview"
                    className="rounded-md shadow-md w-full max-w-2xl"
                  />
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
