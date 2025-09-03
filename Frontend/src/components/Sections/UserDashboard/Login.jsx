import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import previewImg from "../../../assets/editor-resume.png";
import googleLogo from "../../../assets/google.png";  
import linkedinLogo from "../../../assets/linkedin.webp"; 
import UserNavbar from "./UserNavbar";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <UserNavbar />

      <section className="mt-20 py-16 sm:py-24">
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-6xl flex flex-col md:flex-row md:bg-white md:shadow-lg">
            
            {/* Left Panel (Form) */}
            <div className="w-full md:w-1/3 p-8 md:border-r flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-4 shadow">
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              </div>

              <h2 className="text-lg font-semibold mb-2">
                Log In — Your Resume Awaits
              </h2>

              {/* Google & LinkedIn Buttons */}
              <div className="flex gap-3 w-full mb-4">
                <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50">
                  <img src={googleLogo} alt="Google" className="w-5 h-5" /> 
                  Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50">
                  <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" /> 
                  LinkedIn
                </button>
              </div>

              <p className="text-gray-400 text-sm mb-4">Or Continue With</p>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mb-3 border rounded-md px-3 py-2"
              />
              <input
                type="password"
                placeholder="Enter a password"
                className="w-full mb-3 border rounded-md px-3 py-2"
              />

              <div className="w-full text-right text-sm text-blue-600 cursor-pointer mb-4">
                <Link to="/forgot-password">Forgot Password</Link>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
               <Link to="/resume-dashboard">Log In</Link>
              </button>

              <p className="mt-4 text-sm">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-600 cursor-pointer">
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Right Panel (Hidden on small screens) */} 
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
